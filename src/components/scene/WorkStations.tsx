"use client";

import { sceneColors, stationPositions } from "@/lib/scene";

function CitationStation() {
  return (
    <group position={stationPositions.lmsAi}>
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[1.7, 0.08, 1.15]} />
        <meshStandardMaterial
          color={sceneColors.metal}
          roughness={0.42}
          metalness={0.22}
        />
      </mesh>
      <mesh position={[0.12, 0.32, 0.06]} rotation={[0, 0.08, 0.04]}>
        <boxGeometry args={[1.55, 0.08, 1.05]} />
        <meshStandardMaterial
          color={sceneColors.dim}
          roughness={0.4}
          metalness={0.18}
        />
      </mesh>
      <mesh position={[0.22, 0.5, 0.1]} rotation={[0, 0.14, 0.06]}>
        <boxGeometry args={[1.4, 0.08, 0.95]} />
        <meshStandardMaterial
          color={sceneColors.accent}
          roughness={0.35}
          metalness={0.3}
          emissive={sceneColors.accent}
          emissiveIntensity={0.08}
        />
      </mesh>
    </group>
  );
}

function LiveClassStation() {
  return (
    <group position={stationPositions.liveClass}>
      <mesh position={[-0.95, 0.55, 0]}>
        <boxGeometry args={[0.9, 1.3, 0.12]} />
        <meshStandardMaterial
          color={sceneColors.metal}
          roughness={0.45}
          metalness={0.2}
        />
      </mesh>
      <mesh position={[0.95, 0.55, 0]}>
        <boxGeometry args={[0.9, 1.3, 0.12]} />
        <meshStandardMaterial
          color={sceneColors.metal}
          roughness={0.45}
          metalness={0.2}
        />
      </mesh>
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 1.9, 10]} />
        <meshStandardMaterial
          color={sceneColors.accent}
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial
          color={sceneColors.accent}
          roughness={0.28}
          metalness={0.35}
          emissive={sceneColors.accent}
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}

function PagesStation() {
  const cells = [
    [-0.7, 0.7],
    [0, 0.7],
    [0.7, 0.7],
    [-0.7, 0],
    [0, 0],
    [0.7, 0],
  ] as const;

  return (
    <group position={stationPositions.topica}>
      {cells.map(([x, y], i) => (
        <mesh key={`${x}-${y}`} position={[x, y + 0.15, 0]}>
          <boxGeometry args={[0.52, 0.52, 0.1]} />
          <meshStandardMaterial
            color={i === 1 ? sceneColors.accent : sceneColors.metal}
            roughness={0.44}
            metalness={0.2}
            emissive={i === 1 ? sceneColors.accent : "#000000"}
            emissiveIntensity={i === 1 ? 0.08 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}

export function WorkStations() {
  return (
    <>
      <CitationStation />
      <LiveClassStation />
      <PagesStation />
    </>
  );
}
