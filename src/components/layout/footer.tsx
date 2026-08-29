"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FOOTER } from "@/data/portfolio";

export function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
        >
          {FOOTER.badge}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-heading text-4xl md:text-5xl text-foreground mb-6"
        >
          {FOOTER.heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-16"
        >
          {FOOTER.description}
        </motion.p>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 mb-20"
        >
          {FOOTER.contact.map((item) => {
            const inner = (
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-sm text-foreground">
                  {item.value}
                </p>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Adhithiyan S. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-foreground hover:underline underline-offset-4"
            >
              Next.js <ArrowUpRight size={10} />
            </a>
            <span>&</span>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-foreground hover:underline underline-offset-4"
            >
              Tailwind CSS <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
