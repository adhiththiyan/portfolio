"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/data/portfolio";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="space-y-1.5"
    >
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {name}
      </span>
      <div className="h-px w-full bg-border">
        <motion.div
          className="h-px bg-foreground"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.15, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 md:py-32 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
        >
          {ABOUT.badge}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-16"
        >
          {ABOUT.heading}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">{ABOUT.bio}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{ABOUT.bioSecondary}</p>
            </div>

            {/* Profile table */}
            <div className="space-y-0 border-t border-border">
              {ABOUT.profile.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-6 py-3 border-b border-border"
                >
                  <span className="text-xs uppercase tracking-widest text-muted-foreground w-24 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground">{item.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-2">
              {ABOUT.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <p className="font-heading text-3xl text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skills */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Skills</p>
            <div className="space-y-5">
              {ABOUT.skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
