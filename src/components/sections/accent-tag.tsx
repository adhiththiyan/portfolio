"use client";

import { motion, type Variants } from "framer-motion";
import { SECTION_ACCENTS, type AccentKey } from "@/components/sections/section-accents";

const ease = [0.25, 0.1, 0.25, 1] as const;

export const chipRowVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

export const chipVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease },
  },
};

export function AccentTag({ name, accent }: { name: string; accent: AccentKey }) {
  const a = SECTION_ACCENTS[accent];
  return (
    <motion.div
      variants={chipVariants}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={`group/chip flex cursor-default items-center gap-2.5 rounded-xl border border-border/70 bg-background/35 px-3.5 py-2.5 text-[13px] font-medium tracking-tight text-foreground/95 backdrop-blur-sm transition-all duration-300 ${a.chipHover}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} aria-hidden />
      <span className="transition-colors group-hover/chip:text-foreground">{name}</span>
    </motion.div>
  );
}
