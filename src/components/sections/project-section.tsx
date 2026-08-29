"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";

type Project = typeof PROJECTS.items[number];

function StackCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step     = 1 / total;
  const scaleEnd = 1 - (total - 1 - index) * 0.04;
  const scale    = useTransform(progress, [index * step, Math.min((index + 1) * step, 1)],
    [1, index === total - 1 ? 1 : scaleEnd]);
  const y        = useTransform(
    progress,
    index === 0 ? [0, 0.001] : [Math.max((index - 1) * step, 0), index * step],
    index === 0 ? ["0%", "0%"] : ["110%", "0%"]
  );

  const n = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      style={{ scale, y, zIndex: index + 1, top: `${index * 12}px` }}
      className="absolute inset-x-0 mx-auto max-w-3xl"
    >
      <div className="relative rounded-3xl bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-8 lg:p-10">
          {/* Number + category */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.category}</p>
            <span className="font-heading text-3xl text-muted-foreground/20 tabular-nums select-none">{n}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-2xl text-foreground mb-3">{project.title}</h3>

          {/* Divider */}
          <div className="h-px w-10 bg-border mb-4" />

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag}
                className="px-2.5 py-1 text-xs border border-border text-muted-foreground rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectSection({ id }: { id?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const total = PROJECTS.items.length;

  return (
    <section
      id={id}
      ref={containerRef}
      className="border-t border-border bg-background"
      style={{ height: `${(total + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <div className="pt-20 pb-8 px-6 max-w-6xl mx-auto w-full">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{PROJECTS.badge}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight">{PROJECTS.heading}</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl">{PROJECTS.description}</p>
        </div>

        {/* Stacking area */}
        <div className="relative flex-1 mx-auto w-full max-w-3xl px-6">
          {PROJECTS.items.map((project, index) => (
            <StackCard key={project.title} project={project} index={index} total={total} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
