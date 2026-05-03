"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative border border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 shadow-md overflow-hidden transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between h-full ${className}`}
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-300" />
      {children}
    </motion.div>
  );
}
