let cached: boolean | null = null;

export function hasWebGL(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    cached = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    return cached;
  } catch {
    cached = false;
    return false;
  }
}
