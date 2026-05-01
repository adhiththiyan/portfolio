"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import React from "react";

const MotionButton = motion.create ? motion.create(Button) : motion(Button);

export const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${scrolled || isOpen ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="shrink-0 cursor-pointer">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xl font-bold tracking-tight text-primary flex items-center gap-2"
                        >
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                                <span className="font-serif text-lg">N</span>
                            </div>
                            NexusUI
                        </motion.div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex space-x-8 border rounded-full border-border bg-background/50 backdrop-blur-3xl py-2 px-8"
                        >
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
                                        whileHover={{ y: -1 }}
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                                    </motion.a>
                                </li>
                            ))}
                        </motion.ul>
                    </nav>

                    <div className="hidden md:block">
                        <Button
                            variant="default"
                            size="lg"
                            className="py-6 px-8 text-base">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
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
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <MotionButton
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full mt-4"
                                size="default"
                            >
                                Get Started
                            </MotionButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};