"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import React from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const MotionButton = motion.create ? motion.create(Button) : motion(Button);

export type NavLink = { name: string; href: string };

export const Navigation = ({ navLinks }: { navLinks: NavLink[] }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState<string>('home');

    React.useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [navLinks]);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${scrolled || isOpen ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="shrink-0 cursor-pointer" onClick={(e) => handleNavClick(e as any, '#home')}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 font-heading"
                        >
                            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background">
                                <span className="font-serif text-sm font-semibold">AS</span>
                            </div>
                            Adhithiyan S
                        </motion.div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex space-x-8 border rounded-full border-border bg-background/50 backdrop-blur-3xl py-2 px-8"
                        >
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace('#', '');
                                return (
                                    <li key={link.name} className="relative">
                                        {/* Sliding active pill background */}
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active-pill"
                                                className="absolute inset-0 rounded-full bg-foreground/10 ring-1 ring-border shadow-sm"
                                                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                            />
                                        )}
                                        <motion.a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={`relative z-10 inline-block text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${isActive
                                                ? 'text-foreground font-semibold'
                                                : 'text-muted-foreground hover:text-foreground'
                                                }`}
                                            whileHover={{ scale: isActive ? 1 : 1.04 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </li>
                                );
                            })}
                        </motion.ul>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex items-center gap-3"
                    >
                        <ThemeToggle />
                        <Button
                            variant="default"
                            size="lg"
                            className="py-5 px-6 text-sm tracking-wide rounded-full"
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        >
                            Contact Me
                        </Button>
                    </motion.div>

                    {/* Mobile: theme toggle + hamburger */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-muted-foreground hover:text-foreground p-2"
                        >
                            {isOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.replace('#', '');
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'text-background bg-foreground'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                            }`}
                                    >
                                        {link.name}
                                    </motion.a>
                                );
                            })}
                            <MotionButton
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full mt-4 py-6"
                                size="default"
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    setIsOpen(false);
                                }}
                            >
                                Contact Me
                            </MotionButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};