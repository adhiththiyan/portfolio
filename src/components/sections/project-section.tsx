"use client";

import { motion } from "framer-motion";
import { Card, SectionHeader } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";

const NodeNetworkIcon = () => (
  <div className="relative w-full h-44 flex items-center justify-center mb-6 pointer-events-none">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="50%" y1="50%" x2="35%" y2="25%" stroke="currentColor" className="text-border" strokeWidth="2" opacity="0.4" />
      <line x1="50%" y1="50%" x2="65%" y2="28%" stroke="currentColor" className="text-border" strokeWidth="2" opacity="0.4" />
      <line x1="50%" y1="50%" x2="25%" y2="52%" stroke="currentColor" className="text-border" strokeWidth="2" opacity="0.4" />
      <line x1="50%" y1="50%" x2="75%" y2="60%" stroke="currentColor" className="text-border" strokeWidth="2" opacity="0.4" />
      <line x1="50%" y1="50%" x2="35%" y2="80%" stroke="currentColor" className="text-border" strokeWidth="2" opacity="0.4" />
      <line x1="50%" y1="50%" x2="58%" y2="85%" stroke="currentColor" className="text-border" strokeWidth="2" opacity="0.4" />
    </svg>

    {/* Center node */}
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-14 h-14 rounded-full bg-card border-4 border-border flex items-center justify-center shadow-lg shadow-primary/10 z-10">
      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-primary" />
      </div>
    </div>

    {/* Surrounding nodes */}
    <div className="absolute top-[25%] left-[35%] translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-muted border border-border z-10" />
    <div className="absolute top-[28%] left-[65%] translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-muted border border-border z-10" />
    <div className="absolute top-[52%] left-[25%] translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-muted border border-border z-10" />
    <div className="absolute top-[60%] left-[75%] translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-muted border border-border z-10" />
    <div className="absolute top-[80%] left-[35%] translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-muted border border-border z-10" />
    <div className="absolute top-[85%] left-[58%] translate-x-[-50%] translate-y-[-50%] w-4 h-4 rounded-full bg-muted border border-border z-10" />
  </div>
);

const CodeSnippetIcon = () => (
  <div className="relative w-full h-44 flex items-center justify-center mb-6 pointer-events-none bg-card/60 rounded-xl border border-border/60 overflow-hidden font-mono text-[11px] text-muted-foreground p-4">
    <div className="absolute top-3 left-4 flex gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    </div>
    <div className="w-full h-full flex flex-col justify-center leading-relaxed text-left pl-2">
      <span className="text-primary/90 font-semibold">import</span> <span className="text-foreground">{"{ ai }"}</span> <span className="text-primary/90">from</span> <span className="text-green-400">"@nexus/sdk"</span>;
      <br />
      <span className="text-primary/90 font-semibold">const</span> <span className="text-foreground">app</span> = <span className="text-blue-400">ai.initialize</span>();
      <br />
      <span className="text-foreground">app.optimize</span>(<span className="text-orange-400">"workflows"</span>);
    </div>
  </div>
);

const WaveIcon = () => (
  <div className="relative w-full h-44 flex items-center justify-center mb-6 pointer-events-none">
    <svg className="w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" fill="none">
      <path d="M0 50 C 100 10, 200 90, 300 10 C 350 0, 400 50, 400 50" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.8" />
      <path d="M0 60 C 100 20, 200 100, 300 20 C 350 10, 400 60, 400 60" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" strokeDasharray="6 6" />
      <circle cx="50" cy="40" r="4" fill="hsl(var(--primary))" opacity="0.7" />
      <circle cx="200" cy="65" r="4" fill="hsl(var(--primary))" opacity="0.7" />
      <circle cx="350" cy="45" r="4" fill="hsl(var(--primary))" opacity="0.7" />
    </svg>
  </div>
);

export const projects = [
  {
    title: "Seamless Integration",
    description: "Connect tools, teams, and workflows with intelligent automation",
    icon: <NodeNetworkIcon />,
  },
  {
    title: "DevFlow Dashboard",
    description: "Real-time AI metrics integration with secure token-based user workflows",
    icon: <CodeSnippetIcon />,
  },
  {
    title: "Metrics Engine",
    description: "Dynamic visual reporting tracking full-stack operational outputs effortlessly",
    icon: <WaveIcon />,
  }
];

export function ProjectSection() {
  return (
    <section className="py-24 md:py-32 relative bg-background border-t border-border overflow-hidden">
      <div className="glow-bottom" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Latest Work & Experiments"
          title="What I've Developed & Shipped"
          description="A curated portfolio of software engineering projects, production apps, and robust systems I've delivered over the past 2+ years."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Card className="p-8 flex flex-col justify-between h-full group cursor-pointer relative overflow-hidden">
                <div>
                  {project.icon}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary translate-y-1 group-hover:translate-y-0 duration-200" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
