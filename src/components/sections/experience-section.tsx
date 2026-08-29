"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";

export function ExperienceSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 md:py-32 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
        >
          {EXPERIENCE.badge}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-16"
        >
          {EXPERIENCE.heading}
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-border space-y-14">
          {EXPERIENCE.items.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              {/* Dot on the timeline */}
              <div className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 bg-background
                ${exp.current ? "border-foreground" : "border-border"}`}
              />

              {/* Meta row */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading text-xl text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                </div>
                <div className="text-right space-y-1">
                  <span className={`inline-block text-xs px-2.5 py-1 rounded border
                    ${exp.current
                      ? "border-foreground/30 text-foreground"
                      : "border-border text-muted-foreground"}`}
                  >
                    {exp.type}
                  </span>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 mt-4">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + i * 0.04 + 0.15 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
