"use client";

import { Canvas } from "@react-three/fiber";
import { CameraRig } from "@/components/scene/CameraRig";
import { Lights } from "@/components/scene/Lights";
import { SignalField } from "@/components/scene/SignalField";
import { ContactNode, SkillOrbit } from "@/components/scene/SkillOrbit";
import { WorkStations } from "@/components/scene/WorkStations";
import { sceneColors } from "@/lib/scene";

type SceneCanvasProps = {
  compact: boolean;
  reduced: boolean;
};

export function SceneCanvas({ compact, reduced }: SceneCanvasProps) {
  return (
    <Canvas
      aria-hidden
      dpr={[1, 1.5]}
      gl={{
        antialias: !compact,
        alpha: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      }}
      camera={{ fov: 42, near: 0.1, far: 90, position: [-2.4, 1.35, 6.8] }}
      frameloop="always"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <color attach="background" args={[sceneColors.bg]} />
      <fog attach="fog" args={[sceneColors.bg, 10, 36]} />
      <Lights />
      <CameraRig reduced={reduced} />
      <SignalField compact={compact} reduced={reduced} />
      <WorkStations />
      <SkillOrbit reduced={reduced} />
      <ContactNode />
    </Canvas>
  );
}
