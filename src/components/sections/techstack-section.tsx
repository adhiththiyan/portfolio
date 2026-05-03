"use client";

import { motion, type Variants } from "framer-motion";
import {
  Boxes,
  Layers2,
  Server,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui";
import {
  AccentTag,
  chipRowVariants,
} from "@/components/sections/accent-tag";
import { SECTION_ACCENTS, type AccentKey } from "@/components/sections/section-accents";

const tools: {
  category: string;
  accent: AccentKey;
  blurb: string;
  icon: LucideIcon;
  items: { name: string }[];
}[] = [
  {
    category: "Languages",
    accent: "blue",
    blurb: "Core web standards and typed JavaScript.",
    icon: Layers2,
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Frameworks & UI",
    accent: "emerald",
    blurb: "Apps, components, and design systems.",
    icon: Layers2,
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Radix UI" },
      { name: "Material UI" },
      { name: "Hero UI" },
    ],
  },
  {
    category: "Backend & APIs",
    accent: "orange",
    blurb: "Client–server apps and integrations.",
    icon: Server,
    items: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "Azure AD / OAuth" },
      { name: "Third-party APIs" },
    ],
  },
  {
    category: "Tools & Delivery",
    accent: "purple",
    blurb: "IDEs, collaboration, and version control.",
    icon: Boxes,
    items: [
      { name: "VS Code" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Bitbucket" },
      { name: "Postman" },
      { name: "Jira" },
      { name: "Linear" },
    ],
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

function TechCategoryCard({
  category,
  accent,
  blurb,
  icon: Icon,
  items,
  index,
}: {
  category: string;
  accent: AccentKey;
  blurb: string;
  icon: LucideIcon;
  items: { name: string }[];
  index: number;
}) {
  const a = SECTION_ACCENTS[accent];
  const n = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={cardVariants}
      className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/35 backdrop-blur-md transition-all duration-500 hover:border-primary/20 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.85)] hover:shadow-primary/[0.03]"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.mesh} opacity-90 transition-opacity duration-500 group-hover/card:opacity-100`}
      />
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full ${a.glow} blur-[72px] opacity-70 transition-opacity duration-500 group-hover/card:opacity-100`}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col p-7 lg:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${a.iconRing}`}
          >
            <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
          </div>
          <span className="font-heading text-3xl font-semibold tabular-nums text-muted-foreground/45 transition-colors duration-300 select-none group-hover/card:text-muted-foreground/70 dark:text-muted-foreground/20 dark:group-hover/card:text-muted-foreground/35">
            {n}
          </span>
        </div>

        <div className="mb-5 space-y-2">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${a.label}`}>
            {category}
          </p>
          <div className={`h-px w-12 rounded-full bg-gradient-to-r ${a.bar}`} aria-hidden />
          <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {category}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{blurb}</p>
        </div>

        <motion.div
          variants={chipRowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-auto flex flex-wrap gap-2"
        >
          {items.map((item) => (
            <AccentTag key={item.name} name={item.name} accent={accent} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function TechStackSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="glow-bottom" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <SectionHeader
          badge="My Arsenal"
          title="Tools & Technologies I Work With"
          description="Languages, UI frameworks, backend collaboration, and delivery tools I use to ship responsive, maintainable web applications."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7"
        >
          {tools.map((group, index) => (
            <TechCategoryCard
              key={group.category}
              category={group.category}
              accent={group.accent}
              blurb={group.blurb}
              icon={group.icon}
              items={group.items}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
