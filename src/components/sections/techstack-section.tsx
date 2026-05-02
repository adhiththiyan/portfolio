"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";

const tools = [
  {
    category: "Frontend",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "blue-400",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "𝙏𝙎" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Framer Motion", icon: "◐" },
    ],
  },
  {
    category: "Backend",
    color: "from-emerald-500/20 to-green-500/10",
    accent: "emerald-400",
    items: [
      { name: "Node.js", icon: "⬡" },
      { name: "Express", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
      { name: "GraphQL", icon: "◈" },
      { name: "WebSockets", icon: "⟳" },
    ],
  },
  {
    category: "Database",
    color: "from-orange-500/20 to-amber-500/10",
    accent: "orange-400",
    items: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Prisma", icon: "◆" },
      { name: "Redis", icon: "🔴" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "from-purple-500/20 to-violet-500/10",
    accent: "purple-400",
    items: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Docker", icon: "🐳" },
      { name: "Vercel", icon: "▲" },
      { name: "Linux", icon: "🐧" },
      { name: "CI/CD", icon: "♾️" },
    ],
  },
];

const accentBorderMap: Record<string, string> = {
  "blue-400": "border-blue-400/20 hover:border-blue-400/40",
  "emerald-400": "border-emerald-400/20 hover:border-emerald-400/40",
  "orange-400": "border-orange-400/20 hover:border-orange-400/40",
  "purple-400": "border-purple-400/20 hover:border-purple-400/40",
};

const accentTextMap: Record<string, string> = {
  "blue-400": "text-blue-400",
  "emerald-400": "text-emerald-400",
  "orange-400": "text-orange-400",
  "purple-400": "text-purple-400",
};

const accentGlowMap: Record<string, string> = {
  "blue-400": "bg-blue-400/10",
  "emerald-400": "bg-emerald-400/10",
  "orange-400": "bg-orange-400/10",
  "purple-400": "bg-purple-400/10",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function TechStackSection() {
  return (
    <section className="py-24 md:py-32 relative bg-background border-t border-border overflow-hidden">
      <div className="glow-bottom" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeader
          badge="My Arsenal"
          title="Tools & Technologies I Work With"
          description="A curated stack of tools I use day-to-day to build production-grade, scalable software applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {tools.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className={`relative border ${accentBorderMap[group.accent]} bg-card/40 backdrop-blur-md rounded-2xl p-7 transition-all duration-300 overflow-hidden group`}
            >
              {/* Gradient Glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-60 pointer-events-none`} />
              {/* Top-right glow accent */}
              <div className={`absolute -top-10 -right-10 w-36 h-36 ${accentGlowMap[group.accent]} rounded-full blur-[60px] pointer-events-none`} />

              {/* Category Label */}
              <div className="relative z-10 mb-5">
                <span className={`text-xs font-bold tracking-widest uppercase ${accentTextMap[group.accent]}`}>
                  {group.category}
                </span>
              </div>

              {/* Tech Chips */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 flex flex-wrap gap-2.5"
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={chipVariants}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/50 border border-border/60 text-sm font-medium text-foreground hover:bg-background/80 hover:border-border transition-all duration-200 cursor-default"
                  >
                    <span className="text-base leading-none">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
