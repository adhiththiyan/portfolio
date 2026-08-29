"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Boxes, Layers2, Server, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { AccentTag, chipRowVariants } from "@/components/sections/accent-tag";
import { SECTION_ACCENTS, type AccentKey } from "@/components/sections/section-accents";

const tools: {
  category: string;
  accent: AccentKey;
  blurb: string;
  icon: LucideIcon;
  items: { name: string }[];
}[] = [
  {
    category: "Frontend Development",
    accent: "blue",
    blurb: "Cross-platform UI frameworks and component-driven architecture.",
    icon: Layers2,
    items: [
      { name: "Next.js" }, { name: "React.js" }, { name: "React Native" },
      { name: "TypeScript" }, { name: "JavaScript (ES6+)" }, { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend & APIs",
    accent: "emerald",
    blurb: "Server-side logic, database design, and real-time integrations.",
    icon: Server,
    items: [
      { name: "FastAPI" }, { name: "Python" }, { name: "PostgreSQL" },
      { name: "RESTful API Design" }, { name: "Server-Sent Events (SSE)" }, { name: "SQL" },
    ],
  },
  {
    category: "Auth, Cloud & DevOps",
    accent: "orange",
    blurb: "Secure auth systems, cloud deployments, and CI/CD pipelines.",
    icon: ShieldCheck,
    items: [
      { name: "Firebase Auth" }, { name: "Firebase Analytics" },
      { name: "RBAC" }, { name: "Docker" }, { name: "CI/CD Workflows" },
    ],
  },
  {
    category: "Tools & Workflow",
    accent: "purple",
    blurb: "State management, version control, and developer tooling.",
    icon: Boxes,
    items: [
      { name: "TanStack Query" }, { name: "Git" }, { name: "GitHub" },
      { name: "Postman" }, { name: "VS Code" }, { name: "Storybook" },
    ],
  },
];

/* ─── Individual stacking card ─────────────────────────────────────────── */
function StackCard({
  tool,
  index,
  total,
  containerScrollYProgress,
}: {
  tool: (typeof tools)[number];
  index: number;
  total: number;
  containerScrollYProgress: MotionValue<number>;
}) {
  const a = SECTION_ACCENTS[tool.accent];
  const Icon = tool.icon;
  const n = String(index + 1).padStart(2, "0");

  const step = 1 / total;

  // Scale: reduces as subsequent cards stack on top
  const scaleFrom = index * step;
  const scaleTo = Math.min((index + 1) * step, 1);
  const finalScale = 1 - (total - 1 - index) * 0.05;

  const scale = useTransform(
    containerScrollYProgress,
    [scaleFrom, scaleTo],
    [1, index === total - 1 ? 1 : finalScale]
  );

  // Y: each card (except first) slides in from below
  const yStart = Math.max((index - 1) * step, 0);
  const yEnd = index * step;
  const y = useTransform(
    containerScrollYProgress,
    index === 0 ? [0, 0.001] : [yStart, yEnd],
    index === 0 ? ["0%", "0%"] : ["110%", "0%"]
  );

  return (
    <motion.div
      style={{ scale, y, zIndex: index + 1, top: `${index * 16}px` }}
      className="absolute inset-x-0 mx-auto max-w-3xl"
    >
      <div className="group/card relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md shadow-2xl">
        {/* Gradient mesh */}
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.mesh} opacity-80`} />
        {/* Corner glow */}
        <div className={`pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full ${a.glow} blur-[80px] opacity-60`} />
        {/* Bottom shimmer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        <div className="relative z-10 p-8 lg:p-10">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${a.iconRing}`}>
              <Icon className="h-5 w-5" strokeWidth={1.65} />
            </div>
            <span className="font-heading text-4xl font-semibold tabular-nums text-muted-foreground/25 select-none">
              {n}
            </span>
          </div>

          {/* Text */}
          <div className="mb-6 space-y-2">
            <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${a.label}`}>{tool.category}</p>
            <div className={`h-px w-12 rounded-full bg-gradient-to-r ${a.bar}`} aria-hidden />
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">{tool.category}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{tool.blurb}</p>
          </div>

          {/* Skill chips */}
          <motion.div
            variants={chipRowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {tool.items.map((item) => (
              <AccentTag key={item.name} name={item.name} accent={tool.accent} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export function TechStackSection({ id }: { id?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = tools.length;

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative border-t border-border bg-background"
      style={{ height: `${(total + 1) * 100}vh` }}
    >
      <div className="glow-bottom" />

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Section header */}
        <div className="relative z-10 pt-20 pb-8 text-center px-4">
          <SectionHeader
            badge="My Arsenal"
            title="Tools & Technologies I Work With"
            description="The languages, frameworks, and tools I use to architect scalable full-stack web and mobile applications."
          />
        </div>

        {/* Stacking cards arena */}
        <div className="relative flex-1 mx-auto w-full max-w-3xl px-4">
          {tools.map((tool, index) => (
            <StackCard
              key={tool.category}
              tool={tool}
              index={index}
              total={total}
              containerScrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
