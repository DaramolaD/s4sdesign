"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExpandableButton } from "@/components/ui/expandable-button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import s4slogo from "../../../public/icons/s4slogo.svg"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if we're on a dark page
    const isDarkPage = pathname.startsWith('/portfolio') || pathname.startsWith('/about') || pathname.startsWith('/services') || pathname.startsWith('/contact');

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
                scrolled
                    ? "py-4 bg-background/80 backdrop-blur-md shadow-sm"
                    : isDarkPage
                        ? "py-4 md:py-8 bg-background/80 backdrop-blur-md"
                        : "py-4 md:py-8 bg-transparent"
            )}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                    <Image src={s4slogo} alt="s4slogo" width={50} height={50} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-xs font-semibold tracking-[0.2em] transition-all hover:text-accent",
                                pathname === item.href ? "text-accent" : "text-white/80"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ExpandableButton
                        href="/contact"
                        label="Contact Us"
                        variant="primary"
                        className="text-sm md:text-base py-2.5 pl-6 pr-2"
                    />
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="md:hidden bg-secondary border border-white/10 rounded-2xl mt-4 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col space-y-6 p-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-base uppercase tracking-[0.2em] font-bold",
                                        pathname === item.href ? "text-accent" : "text-white"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between bg-accent text-background px-6 py-4 rounded-full font-bold text-base hover:bg-gold-soft hover:text-background transition-colors shadow-xl"
                            >
                                Contact Us
                                <Phone className="w-5 h-5 text-background" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
