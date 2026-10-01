"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { sceneColors, stationPositions } from "@/lib/scene";

function fibonacciPoints(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (1 + Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius * 0.62,
        Math.sin(theta) * r * radius,
      ),
    );
  }
  return points;
}

function NodeCloud({
  count,
  radius,
  position,
}: {
  count: number;
  radius: number;
  position: readonly [number, number, number];
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const points = useMemo(() => fibonacciPoints(count, radius), [count, radius]);

  useLayoutEffect(() => {
    const instance = mesh.current;
    if (!instance) return;
    points.forEach((point, i) => {
      dummy.position.copy(point);
      dummy.scale.setScalar(0.055 + (i % 4) * 0.018);
      dummy.rotation.set(i * 0.2, i * 0.13, i * 0.07);
      dummy.updateMatrix();
      instance.setMatrixAt(i, dummy.matrix);
    });
    instance.instanceMatrix.needsUpdate = true;
  }, [dummy, points]);

  return (
    <group position={position}>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={sceneColors.zinc}
          roughness={0.48}
          metalness={0.18}
        />
      </instancedMesh>
      {points.map((point, i) => (
        <Line
          key={i}
          points={[
            [0, 0, 0],
            [point.x, point.y, point.z],
          ]}
          color={sceneColors.accent}
          transparent
          opacity={0.28}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function Core({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (reduced || !group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(performance.now() * 0.00018) * 0.08;
  });

  return (
    <group ref={group} position={stationPositions.core}>
      <mesh>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial
          color={sceneColors.accent}
          roughness={0.32}
          metalness={0.28}
          emissive={sceneColors.accent}
          emissiveIntensity={0.12}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.35, 0.18, 0.1]}>
        <torusGeometry args={[1.45, 0.014, 8, 72]} />
        <meshStandardMaterial
          color={sceneColors.accent}
          roughness={0.28}
          metalness={0.45}
        />
      </mesh>
      <mesh rotation={[0.4, Math.PI / 3, 0.2]}>
        <torusGeometry args={[1.95, 0.01, 8, 64]} />
        <meshStandardMaterial
          color={sceneColors.dim}
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
}

export function SignalField({
  compact,
  reduced,
}: {
  compact: boolean;
  reduced: boolean;
}) {
  return (
    <>
      <Core reduced={reduced} />
      <NodeCloud
        count={compact ? 12 : 18}
        radius={compact ? 2.1 : 2.6}
        position={stationPositions.core}
      />
    </>
  );
}
