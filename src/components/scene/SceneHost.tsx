"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { hasWebGL } from "@/lib/webgl";

const SceneCanvas = dynamic(
  () =>
    import("@/components/scene/SceneCanvas").then((mod) => mod.SceneCanvas),
  { ssr: false },
);

function subscribe(onChange: () => void) {
  const width = window.matchMedia("(max-width: 767px)");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  width.addEventListener("change", onChange);
  motion.addEventListener("change", onChange);
  return () => {
    width.removeEventListener("change", onChange);
    motion.removeEventListener("change", onChange);
  };
}

function getFlags() {
  const compact = window.matchMedia("(max-width: 767px)").matches ? "1" : "0";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "1"
    : "0";
  const enabled = hasWebGL() ? "1" : "0";
  return `${compact}${reduced}${enabled}`;
}

function getServerFlags() {
  return "000";
}

export function SceneHost() {
  const flags = useSyncExternalStore(subscribe, getFlags, getServerFlags);
  const compact = flags[0] === "1";
  const reduced = flags[1] === "1";
  const enabled = flags[2] === "1";

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <SceneCanvas compact={compact} reduced={reduced} />
    </div>
  );
}
