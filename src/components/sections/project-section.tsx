"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  LayoutDashboard,
  LineChart,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui";
import {
  AccentTag,
  chipRowVariants,
} from "@/components/sections/accent-tag";
import { SECTION_ACCENTS, type AccentKey } from "@/components/sections/section-accents";

export const projects: {
  category: string;
  title: string;
  description: string;
  accent: AccentKey;
  icon: LucideIcon;
  tags: string[];
}[] = [
  {
    category: "FinTech · Transient AI",
    title: "Live Markets & Secure Access",
    description:
      "Interactive React.js and Next.js UIs with Azure AD login, RBAC, and real-time stock data from third-party APIs — integrated with FastAPI backends and shipped with Git and Linear.",
    accent: "blue",
    icon: LineChart,
    tags: ["React", "Next.js", "Azure AD", "RBAC", "FastAPI"],
  },
  {
    category: "Services · Stelvio",
    title: "Service Platform & Admin",
    description:
      "Built a Next.js service marketplace from the ground up — routing, state, reusable components, and an admin dashboard for bookings, customers, and live service configuration with FastAPI APIs.",
    accent: "emerald",
    icon: LayoutDashboard,
    tags: ["Next.js", "Admin UI", "REST", "Bitbucket"],
  },
  {
    category: "Logistics · Empty Truck",
    title: "RBAC Dashboards & Live Tracking",
    description:
      "Role-based Admin and Super Admin dashboards with dynamic routing, real-time order data, and Mapbox-powered tracking maps — responsive UI, Git workflows, and Jira-backed agile delivery.",
    accent: "purple",
    icon: Truck,
    tags: ["Next.js", "React", "Mapbox", "Jira"],
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

function ProjectCard({
  category,
  title,
  description,
  accent,
  icon: Icon,
  tags,
  index,
}: {
  category: string;
  title: string;
  description: string;
  accent: AccentKey;
  icon: LucideIcon;
  tags: string[];
  index: number;
}) {
  const a = SECTION_ACCENTS[accent];
  const n = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={cardVariants}
      className="group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/35 backdrop-blur-md transition-all duration-500 hover:border-primary/20 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.85)] hover:shadow-primary/[0.03]"
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

      <div className="relative z-10 flex h-full flex-col p-7 lg:p-8">
        <div className="flex flex-1 flex-col">
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
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>

          <motion.div
            variants={chipRowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mb-6 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <AccentTag key={tag} name={tag} accent={accent} />
            ))}
          </motion.div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-border/60 pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            Highlight
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-90 transition-opacity group-hover/card:opacity-100">
            <span className="hidden sm:inline">Explore</span>
            <ArrowUpRight className="h-4 w-4 translate-y-0.5 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="glow-bottom" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <SectionHeader
          badge="Professional Experience"
          title="What I've Developed & Shipped"
          description="Highlights from Transient AI, Stelvio, and Empty Truck — plus freelancing work on component libraries, Chrome extensions, and Zoom-integrated meeting apps."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              category={project.category}
              title={project.title}
              description={project.description}
              accent={project.accent}
              icon={project.icon}
              tags={project.tags}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
