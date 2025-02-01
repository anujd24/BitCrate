import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh,
    leftjoystick: THREE.Mesh,   // Add left joystick mesh
    rightjoystick: THREE.Mesh   // Add right joystick mesh
  };
  materials: {};
};

export function Console(props: any) {
  const { nodes } = useGLTF('/controller.gltf') as GLTFResult;

  // Create refs for both joysticks
  const leftjoystickRef = useRef<THREE.Mesh>(null);
  const rightjoystickRef = useRef<THREE.Mesh>(null);

  // Rotate joysticks dynamically
  useFrame((state) => {
    const { pointer } = state;

    if (leftjoystickRef.current) {
      leftjoystickRef.current.rotation.x = pointer.y * 0.2; // Tilt up/down
      leftjoystickRef.current.rotation.y = pointer.x * 0.2; // Tilt left/right
    }

    if (rightjoystickRef.current) {
      rightjoystickRef.current.rotation.x = pointer.y * 0.2;
      rightjoystickRef.current.rotation.y = pointer.x * 0.2;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Controller" position={[28.46, 21.11, -0.337]}>
              
              {/* Left joystick */}
              <mesh
                ref={leftjoystickRef}
                name="Leftjoystick"
                castShadow
                receiveShadow
                geometry={nodes.leftjoystick.geometry}
                material={nodes.defaultMaterial.material}
              />

              {/* Right joystick */}
              <mesh
                ref={rightjoystickRef}
                name="Rightjoystick"
                castShadow
                receiveShadow
                geometry={nodes.rightjoystick.geometry}
                material={nodes.defaultMaterial.material}
              />

              {/* Main Controller */}
              <mesh
                name="defaultMaterial"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                material={nodes.defaultMaterial.material}
              />
              
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/controller.gltf');
