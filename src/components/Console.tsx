

import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

type ConsoleProps = {
  bodyTextureURL: string;
  buttonTextureURLs: string[];
  joystickColor: string;
  buttonColor: string;
  lightColor: string;
  constantJoystickSpin?: boolean;
  glowEffect?: boolean;
};

type GLTFResult = GLTF & {
  nodes: {
    Body: THREE.Mesh;
    JoystickLeft: THREE.Mesh;
    JoystickRight: THREE.Mesh;
    Buttons: THREE.Mesh;
    LightStrip: THREE.Mesh;
  };
  materials: object;
};

export function Console({
  bodyTextureURL,
  buttonTextureURLs,
  joystickColor,
  buttonColor,
  lightColor,
  constantJoystickSpin = false,
  glowEffect = false,
}: ConsoleProps) {
  const joystickRefs = useRef<THREE.Object3D[]>([]);

  const { nodes } = useGLTF("/controller.gltf") as GLTFResult;

  // Body Texture
  const bodyTexture = useTexture(bodyTextureURL);
  bodyTexture.flipY = false;
  bodyTexture.colorSpace = THREE.SRGBColorSpace;

  // Button Textures
  const buttonTextures = useTexture(buttonTextureURLs);
  buttonTextures.forEach((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
  });

  const buttonMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: buttonColor,
        map: buttonTextures[0],
        roughness: 0.4,
      }),
    [buttonColor, buttonTextures]
  );

  const joystickMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: joystickColor,
        roughness: 0.5,
        metalness: 0.2,
      }),
    [joystickColor]
  );

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: bodyTexture,
        roughness: 0.3,
      }),
    [bodyTexture]
  );

  const lightMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: lightColor,
      }),
    [lightColor, glowEffect]
  );

  // Add Joystick Refs
  const addToJoystickRefs = (ref: THREE.Object3D | null) => {
    if (ref && !joystickRefs.current.includes(ref)) {
      joystickRefs.current.push(ref);
    }
  };

  useFrame(() => {
    if (!joystickRefs.current || !constantJoystickSpin) return;
    for (const joystick of joystickRefs.current) {
      joystick.rotation.y += 0.05;
    }
  });

  useEffect(() => {
    if (!joystickRefs.current || constantJoystickSpin) return;
    for (const joystick of joystickRefs.current) {
      gsap.to(joystick.rotation, {
        y: "-=2",
        duration: 1.5,
        ease: "circ.out",
      });
    }
  }, [constantJoystickSpin]);

  return (
    <group dispose={null}>
      <group name="Controller">
        <mesh
          name="Body"
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={bodyMaterial}
          position={[0, 0.1, 0]}
        />
        <mesh
          name="JoystickLeft"
          castShadow
          receiveShadow
          geometry={nodes.JoystickLeft.geometry}
          material={joystickMaterial}
          position={[-0.2, 0.15, 0]}
          ref={addToJoystickRefs}
        />
        <mesh
          name="JoystickRight"
          castShadow
          receiveShadow
          geometry={nodes.JoystickRight.geometry}
          material={joystickMaterial}
          position={[0.2, 0.15, 0]}
          ref={addToJoystickRefs}
        />
        <mesh
          name="Buttons"
          castShadow
          receiveShadow
          geometry={nodes.Buttons.geometry}
          material={buttonMaterial}
          position={[0, 0.2, 0]}
        />
        <mesh
          name="LightStrip"
          castShadow
          receiveShadow
          geometry={nodes.LightStrip.geometry}
          material={lightMaterial}
          position={[0, 0.05, -0.3]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/controller.gltf");
