import { useRef, useEffect, useMemo } from "react"
import { OrbitControls , shaderMaterial, Center} from '@react-three/drei'
import { useAnimations,useGLTF, Clone } from "@react-three/drei"


import { useFrame, extend } from "@react-three/fiber";
import * as THREE from 'three';


export default function Experience(props){

    let raph = useRef()

  
useFrame((delta) => {
    raph.current.rotation.y -= .001;
    raph.current.rotation.x += .0001;
})




  const model = useGLTF('spooky.glb')



    return(

        <>
        
    {/* <OrbitControls makeDefault enableZoom={false} maxPolarAngle={Math.PI * .5}/> */}


      <primitive ref={raph} object={ model.scene } 
         scale={ 10 }   
          />


        </>

        

    )
}



