"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/data/portfolio";

export const HeroSection = ({ id }: { id?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = HERO.roles[roleIndex];
    let timer: NodeJS.Timeout;
    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => setDisplayedText(fullText.slice(0, displayedText.length + 1)), 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => setDisplayedText(fullText.slice(0, displayedText.length - 1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((p) => (p + 1) % HERO.roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id={id} className="min-h-screen relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-10 z-0"
        style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.6)" }}>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="space-y-8 text-center">

          {/* Typing role */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-3 text-sm text-muted-foreground font-mono min-h-[24px]">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-pulse shrink-0" />
              {displayedText}
              <span className="animate-pulse text-foreground/40">|</span>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[1.08] tracking-tight"
          >
            {HERO.headline.split("\n").map((line, i) => (
              <span key={i}>{line}{i < HERO.headline.split("\n").length - 1 && <br />}</span>
            ))}
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            {HERO.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="lg" className="px-8 py-6 text-sm tracking-wide"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}>
              {HERO.cta.primary} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-sm tracking-wide"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              {HERO.cta.secondary}
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center justify-center gap-4"
          >
            <a href={HERO.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <span className="w-px h-4 bg-border" />
            <a href={HERO.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <span className="w-px h-4 bg-border" />
            <a href={HERO.links.email} aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pt-12 flex justify-center"
          >
            <div className="w-6 h-10 rounded-full border border-border/60 flex items-start justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
