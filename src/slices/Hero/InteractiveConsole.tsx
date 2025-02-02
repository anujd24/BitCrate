"use client"

import * as THREE from "three"
import React, { Suspense, useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { BoxGeometry, Group, Mesh, MeshBasicMaterial } from 'three'
import { Console } from '@/components/Console'

type Props = {
    bodyTextureURL: string;
     joystickTextureURL: string
}

export default function InteractiveConsole({
    bodyTextureURL, joystickTextureURL
}: Props) {
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center'>
        <Canvas 
        className='min-h-[60rem] w-full'
        camera={{ position: [0, 2, 10], fov: 50 }}
        > 
            <Suspense>
                <Scene
                    bodyTextureURL = {bodyTextureURL} 
                    joystickTextureURL = {joystickTextureURL}
                />
            </Suspense>
        </Canvas>
    </div>
  )
}

function Scene ({
    bodyTextureURL, joystickTextureURL
}: Props    ){
    return (
        <group>
            <OrbitControls/>
            <Environment files={"/hdr/warehouse-256.hdr"}/>
            <group scale={[0.06, 0.06, 0.06]} position={[0, 0, 0]}>
            <Console  
                    bodyTextureURLs = {[bodyTextureURL]}
                    bodyTextureURL = {[bodyTextureURL]}
                    joystickTextureURLs = {[joystickTextureURL]}
                    joystickTextureURL = {[joystickTextureURL]}
                />
            </group>
                
            <ContactShadows opacity={0.6} position ={[0, -0.08, 0]}/>
        </group>
    )
}