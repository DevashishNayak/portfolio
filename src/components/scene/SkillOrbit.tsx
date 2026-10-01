"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { sceneColors, stationPositions } from "@/lib/scene";

const COUNT = 5;

export function SkillOrbit({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (reduced || !group.current) return;
    group.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group} position={stationPositions.skills}>
      {Array.from({ length: COUNT }, (_, i) => {
        const angle = (i / COUNT) * Math.PI * 2;
        const x = Math.cos(angle) * 1.9;
        const z = Math.sin(angle) * 1.9;
        return (
          <mesh key={i} position={[x, 0, z]}>
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial
              color={i === 0 ? sceneColors.accent : sceneColors.zinc}
              roughness={0.36}
              metalness={0.28}
              emissive={i === 0 ? sceneColors.accent : "#000000"}
              emissiveIntensity={i === 0 ? 0.1 : 0}
            />
          </mesh>
        );
      })}
      <mesh>
        <torusGeometry args={[1.9, 0.012, 8, 64]} />
        <meshStandardMaterial
          color={sceneColors.dim}
          roughness={0.4}
          metalness={0.15}
        />
      </mesh>
    </group>
  );
}

export function ContactNode() {
  return (
    <group position={stationPositions.contact}>
      <mesh>
        <icosahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color={sceneColors.accent}
          roughness={0.4}
          metalness={0.22}
          emissive={sceneColors.accent}
          emissiveIntensity={0.06}
        />
      </mesh>
    </group>
  );
}
