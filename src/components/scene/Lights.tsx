import { sceneColors } from "@/lib/scene";

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.16} color="#d4d4d8" />
      <directionalLight
        position={[7, 9, 5]}
        intensity={1.15}
        color="#f4f4f5"
      />
      <directionalLight
        position={[-6, 3, -4]}
        intensity={0.55}
        color={sceneColors.accent}
      />
    </>
  );
}
