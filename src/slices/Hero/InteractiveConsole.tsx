"use client"

import React, { Suspense} from 'react'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Console } from '@/components/Console'



export default function InteractiveConsole() {
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center'>
        <Canvas 
        className='min-h-[60rem] w-full'
        camera={{ position: [0, 2, 10], fov: 50 }}
        > 
            <Suspense>
                <Scene
                />
            </Suspense>
        </Canvas>
    </div>
  )
}

function Scene (){
    return (
        <group>
            <OrbitControls/>
            <Environment files={"/hdr/warehouse-256.hdr"}/>
            <group scale={[0.06, 0.06, 0.06]} position={[0, 0, 0]}>
            <Console 
                />
            </group>
                
            <ContactShadows opacity={0.6} position ={[0, -0.08, 0]}/>
        </group>
    )
}