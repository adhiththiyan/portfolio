"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES } from "@/data/portfolio";

const AUTO_PLAY_INTERVAL = 4500;

export function ServicesSection({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef  = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth]  = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const timerRef      = useRef<NodeJS.Timeout | null>(null);

  const maxIndex = Math.max(0, SERVICES.items.length - cardsPerView);

  useEffect(() => {
    const measure = () => {
      const width = window.innerWidth;
      const cpv = width < 768 ? 1 : width < 1024 ? 2 : 3;
      setCardsPerView(cpv);
      if (containerRef.current) setCardWidth(containerRef.current.offsetWidth / cpv);
      
      // Ensure activeIndex is valid after resize
      setActiveIndex((prev) => Math.min(prev, Math.max(0, SERVICES.items.length - cpv)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const next = useCallback(() => setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
  }, [next]);

  useEffect(() => { startTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [startTimer]);

  return (
    <section id={id} className="py-24 md:py-32 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          {SERVICES.badge}
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-4">
          {SERVICES.heading}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground mb-12 max-w-lg">
          {SERVICES.description}
        </motion.p>

        {/* Carousel */}
        <div className="relative"
          onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
          onMouseLeave={startTimer}>

          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: cardWidth ? -(activeIndex * cardWidth) : 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
            >
              {SERVICES.items.map((service, i) => (
                <div key={service.title} className="flex-none px-3" style={{ width: `${100 / cardsPerView}%` }}>
                  <div className="h-full rounded-3xl bg-card p-7 shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-heading text-lg text-foreground leading-snug mb-3">{service.title}</h3>
                    <div className="h-px w-8 bg-border mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <button onClick={() => setActiveIndex((i) => Math.max(0, i - 1))} aria-label="Previous"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200 z-10">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} aria-label="Next"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200 z-10">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setActiveIndex(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-foreground" : "w-2 bg-border"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
