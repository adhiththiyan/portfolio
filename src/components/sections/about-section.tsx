"use client";

import { motion } from "framer-motion";
import { Card, SectionHeader } from "@/components/ui";
import { Code2, Layers, Rocket, Users } from "lucide-react";

const aboutContent = {
  badge: "About Me",
  heading: "Turning Ideas Into Working Software",
  bio: "I'm a Software Engineer with 2+ years of hands-on experience building full-stack web applications. I'm passionate about creating fast, clean, and accessible digital experiences that solve real-world problems.",
  bioSecondary:
    "When I'm not coding, I'm exploring new frameworks, contributing to open source, or experimenting with UI design. I believe the best software is both functional and beautiful.",
};

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "5+", label: "Happy Clients" },
  { value: "∞", label: "Lines of Code" },
];

const highlights = [
  {
    icon: <Code2 size={20} />,
    title: "Clean Code First",
    description:
      "I write code that's readable, maintainable, and scalable — not just code that works.",
  },
  {
    icon: <Layers size={20} />,
    title: "Full-Stack Mindset",
    description:
      "Comfortable across the entire stack, from designing APIs to building pixel-perfect UIs.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Ship Fast, Iterate",
    description:
      "I believe in launching early, gathering feedback, and improving continuously.",
  },
  {
    icon: <Users size={20} />,
    title: "Collaboration Driven",
    description:
      "I thrive in team environments and enjoy turning complex requirements into clear solutions.",
  },
];

export function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 md:py-32 relative bg-background border-t border-border overflow-hidden">
      <div className="glow-bottom" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/5 text-primary border border-primary/20 tracking-wider uppercase backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {aboutContent.badge}
              </span>

              <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-muted-foreground/60 leading-tight py-1">
                {aboutContent.heading}
              </h2>

              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                {aboutContent.bio}
              </p>
              <p className="text-muted-foreground/70 leading-relaxed">
                {aboutContent.bioSecondary}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-4 gap-4 pt-4 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <Card className="p-5 group space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
