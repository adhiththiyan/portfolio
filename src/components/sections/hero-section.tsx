"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="glow-effect"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex items-center justify-center">
          <div className="space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/30 text-secondary-foreground border border-secondary/50 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                v2.0 Now Available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-8xl font-medium tracking-tight text-foreground leading-tight"
            >
              Design the Future with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-foreground">
                Precision & Speed
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed text-center"
            >
              Ai Automation and Web development using latest technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Contact Me
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background"
                    src={`https://picsum.photos/seed/${i + 10}/64/64.jpg`}
                    alt="User"
                  />
                ))}
              </div>
              <p>Trusted by 10,000+ developers</p>
            </motion.div>
          </div>
      </div>
    </section>
  );
};
