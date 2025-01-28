"use client"

import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { BoxGeometry, Group, Mesh, MeshBasicMaterial } from 'three'

type Props = {}

export default function InteractiveConsole({}: Props) {
  return (
    <div>
        <Canvas> 
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
            <mesh>
                <meshBasicMaterial/>
                <boxGeometry/>
            </mesh>
        </group>
    )
}