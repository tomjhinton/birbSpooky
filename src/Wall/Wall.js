import { useRef, useEffect, useMemo } from "react"
import { OrbitControls , shaderMaterial, Center} from '@react-three/drei'
import { useAnimations,useGLTF, Clone } from "@react-three/drei"
import vertexShader from './shaders/vertex.js'
import fragmentShader from './shaders/fragment.js'
import gsap from "gsap"

import { useFrame, extend } from "@react-three/fiber";
import * as THREE from 'three';




export default function Experience(props){

    const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

    const words = [
        'fish sauce', 'fish', 'sauce'
      ];
      const grammar = `#JSGF V1.0; grammar colors; public <color> = ${words.join(
        " | ",
      )};`;

      const recognition = new SpeechRecognition();
      const speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);

 recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = true;
recognition.maxAlternatives = 1;

let checkingSpeeech = false

      document.body.onpointermove = () => {
        if(!checkingSpeeech){
            checkingSpeeech = true
        recognition.start();
        // console.log("Ready to receive a color command.");
        // console.log(recognition)
        }
      };

      recognition.addEventListener("audioend", () => {
        // console.log("Audio capturing ended");
      });

      let running = false;

      let finished = function () {
          running = false;
      };


      function reveal(){

        if(!running){
            running = true
        gsap.to(wallMaterial.current.uniforms.uAlpha, {
            duration: 6.5,
            value: wallMaterial.current.uniforms.uAlpha.value + (Math.PI * 2.),
            delay: 0,
            onComplete: finished
          });

        }

      }

      recognition.onresult = (event) => {
        const color = event.results[0][0].transcript;
       
        // console.log(`Confidence: ${event.results[0][0].confidence}`);
        // console.log(event.results[0][0].transcript)
        // console.log(event.results[0][0])
        if(event.results[0][0].transcript.includes('fish sauce') || event.results[0][0].transcript.includes('fish')|| event.results[0][0].transcript.includes('sauce') || event.results[0][0].transcript.includes('raph')){
            wallMaterial.current.uniforms.uAlpha.value = 0
           
           reveal()

           
        }
      };

      recognition.onend = onEnd;
      function onEnd() {
        console.log('Speech recognition has stopped. Starting again ...');
        checkingSpeeech = true
        recognition.start();
    }


    const mesh = useRef();
    const wallMaterial = useRef()


    const WallMaterial = shaderMaterial(
        {
          uTime: 0,
          uAlpha: 0,
          uMousePosition: [0, 0],
          u_progress: 0,
          lightDirection:  new THREE.Vector3(0.0, 0.0, 3.0).normalize() 
        },
        vertexShader,
        fragmentShader
      );
      
      extend({ WallMaterial });
    

    useFrame((state, delta) => {
        wallMaterial.current.uTime += delta
    })


    const handleMouseMove = (event) => {
     

        wallMaterial.current.uniforms.uMousePosition.value = event.uv;
   
    
    
    
      };


    return (
        <mesh ref={mesh} onPointerMove={handleMouseMove}>
          <planeGeometry args={[20, 20, 20]} />
          <wallMaterial ref={wallMaterial} side={THREE.DoubleSide} transparent/>

   
        </mesh>
      );
}



