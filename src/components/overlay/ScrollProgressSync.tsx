"use client";

import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useEffect } from "react";
import { scrollProgress } from "@/lib/scroll-progress";

export function ScrollProgressSync() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduce) return;
    scrollProgress.set(value);
  });

  useEffect(() => {
    if (reduce) {
      scrollProgress.set(0);
    } else {
      scrollProgress.set(scrollYProgress.get());
    }
  }, [reduce, scrollYProgress]);

  return null;
}
