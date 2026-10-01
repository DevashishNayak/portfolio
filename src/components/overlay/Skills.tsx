"use client";

import { motion, useReducedMotion } from "motion/react";
import { skillGroups } from "@/content/skills";

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      data-scroll-chapter="skills"
      className="relative min-h-[100dvh] scroll-mt-20 px-5 py-24 md:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[min(100%,52rem)] bg-gradient-to-r from-background via-background/80 to-transparent" />
      <motion.div
        className="relative mx-auto flex min-h-[70dvh] max-w-[1400px] flex-col justify-center"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Skills
        </h2>
        <div className="mt-12 grid max-w-3xl gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-medium text-accent">{group.label}</h3>
              <p className="mt-3 font-mono text-[13px] leading-7 text-muted">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
