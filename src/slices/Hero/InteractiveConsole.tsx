"use client"

import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { BoxGeometry, Group, Mesh, MeshBasicMaterial } from 'three'

type Props = {}

export default function InteractiveConsole({}: Props) {
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center'>
        <Canvas 
        className='min-h-[60rem] w-full'
        camera={{position: [1.5, 1, 1.4], fov: 55}}
        > 
            <Suspense>
                <Scene/>
            </Suspense>
        </Canvas>
    </div>
  )
}

function Scene (){
    return (
        <group>
            <OrbitControls/>
            <Environment preset='forest' background />
            <mesh>
                <meshStandardMaterial/>
                <boxGeometry/>
            </mesh>
        </group>
    )
}