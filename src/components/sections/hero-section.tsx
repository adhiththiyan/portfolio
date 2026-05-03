"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, ChevronDown, MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const heroContent = {
  badge: "Hi, I'm Adhithiya S.",
  headingFirstPart: "Design the Future with ",
  headingGradientPart: "Precision & Speed",
  description: "Ai Automation and Web development using latest technology",
  ctaText: "Contact Me"
};

export const HeroSection = ({ id }: { id?: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let isDeleting = false;
    let i = 0;
    const typingSpeed = 120;
    let timerId: NodeJS.Timeout;

    const type = () => {
      const fullText = heroContent.badge;
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          isDeleting = true;
          timerId = setTimeout(type, 2000);
          return;
        }
      } else {
        setDisplayedText(fullText.slice(0, i - 1));
        i--;
        if (i === 0) {
          isDeleting = false;
          timerId = setTimeout(type, 500);
          return;
        }
      }
      timerId = setTimeout(type, isDeleting ? 60 : typingSpeed);
    };

    timerId = setTimeout(type, typingSpeed);
    return () => clearTimeout(timerId);
  }, []);


  return (
    <section id={id} className="min-h-screen relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20 z-0 bg-background"
        style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.8)" }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="glow-bottom"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex items-center justify-center">
          <div className="space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-lg text-muted-foreground mb-4 min-h-[36px]">
                <span className="animate-pulse rounded-full h-2 w-2 bg-primary mr-5 shadow-[0 0 20px 5px #2563eb]"></span>
                <span className="font-mono">
                  {displayedText}
                  <span className="animate-pulse font-sans">|</span>
                </span>
              </span>
            </motion.div> 

            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-8xl tracking-tight text-foreground leading-tight font-heading"
            >
              {heroContent.headingFirstPart} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-foreground">
                {heroContent.headingGradientPart}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed text-center"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
              variant="default"
              size="lg"
              className="py-6 px-8"
              >
                {heroContent.ctaText}
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground"
            >
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </Button>
                <div className="border border-accent-foreground h-6 rounded-full"></div>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </Button>
                <div className="border border-accent-foreground h-6 rounded-full"></div>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircleIcon className="w-5 h-5" />
                  </a>
                </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
                <motion.button
                    className="cursor-pointer mt-24"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    onClick={() => {
                        const hero = document.getElementById(id ?? "home");
                        const next = hero?.nextElementSibling as HTMLElement | null;
                        next?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    <ChevronDown className="w-10 h-10 text-accent-foreground" />
                </motion.button>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

