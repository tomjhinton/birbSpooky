import {  useGLTF, Text, Float } from "@react-three/drei"
import { OrbitControls , shaderMaterial, Center, Text3D, meshPhongMaterial} from '@react-three/drei'
import { useRef , useEffect, useState, useMemo} from "react"

import Monster from "./Monster.js"
import Story from "./Story.js"
import Wall from "./Wall/Wall.js"






export default function Experience(){




    return <>
    <OrbitControls makeDefault enableZoom={false} maxPolarAngle={Math.PI * .5} />
      <Story />
     <Monster />
     <Wall />
     
     

    </>
}