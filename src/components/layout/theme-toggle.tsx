"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon } from "lucide-react";

type Theme = "dark" | "light";

function getStoredTheme(): Theme {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return "dark"; 
}

function applyTheme(theme: Theme) {
    const root = document.documentElement;
    if (theme === "light") {
        root.classList.add("light");
    } else {
        root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<Theme>("dark");
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        const initial = getStoredTheme();
        applyTheme(initial);
        setTheme(initial);
        setMounted(true);
    }, []);

    const toggle = () => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        applyTheme(next);
        setTheme(next);
    };

    // Render a placeholder to avoid layout shift before mount
    if (!mounted) {
        return <div className="w-9 h-9" />;
    }

    return (
        <motion.button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="cursor-pointer relative w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/60 transition-colors duration-200"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.span
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <SunIcon className="w-4 h-4" />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <MoonIcon className="w-4 h-4" />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
