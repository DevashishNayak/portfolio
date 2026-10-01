"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { stationPositions } from "@/lib/scene";
import { scrollProgress } from "@/lib/scroll-progress";

export function CameraRig({ reduced }: { reduced: boolean }) {
  const { camera } = useThree();
  const path = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-2.4, 1.35, 6.8),
          new THREE.Vector3(0.6, 1.45, -2.4),
          new THREE.Vector3(-1.8, 1.4, -11.2),
          new THREE.Vector3(0.9, 1.55, -19.6),
          new THREE.Vector3(-2.1, 2.1, -28.4),
          new THREE.Vector3(-1.6, 1.25, -36.8),
        ],
        false,
        "catmullrom",
        0.35,
      ),
    [],
  );

  const look = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(...stationPositions.core),
          new THREE.Vector3(...stationPositions.lmsAi),
          new THREE.Vector3(...stationPositions.liveClass),
          new THREE.Vector3(...stationPositions.topica),
          new THREE.Vector3(...stationPositions.skills),
          new THREE.Vector3(...stationPositions.contact),
        ],
        false,
        "catmullrom",
        0.35,
      ),
    [],
  );

  const pos = useRef(new THREE.Vector3());
  const target = useRef(new THREE.Vector3());
  const currentLook = useRef(new THREE.Vector3(...stationPositions.core));

  useFrame((_, delta) => {
    const t = reduced ? 0 : THREE.MathUtils.clamp(scrollProgress.get(), 0, 0.999);
    path.getPointAt(t, pos.current);
    look.getPointAt(t, target.current);
    const alpha = 1 - Math.exp(-delta * 3.6);
    camera.position.lerp(pos.current, alpha);
    currentLook.current.lerp(target.current, alpha);
    camera.lookAt(currentLook.current);
  });

  return null;
}
