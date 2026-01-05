"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IMAGES } from "@/lib/constants";

const transformations = [
    {
        id: 1,
        title: "Sonoma Valley Vineyard Retreat",
        description: "A rustic-modern retreat set among Sonoma's vineyards, designed for leisure, gatherings, and weekend escapes.",
        image: IMAGES.portfolio[0],
        category: "Residential",
    },
    {
        id: 2,
        title: "Modern Oasis Residence",
        description: "A luxurious Beverly Hills estate designed to blend elegance, comfort, and state-of-the-art technology.",
        image: IMAGES.portfolio[1],
        category: "Residential",
    },
    {
        id: 3,
        title: "Santa Monica Creative Studio",
        description: "An industrial loft transformed into a vibrant, collaborative creative studio for a design-focused business.",
        image: IMAGES.portfolio[2],
        category: "Commercial",
    },
    {
        id: 4,
        title: "Luxe Corporate Plaza",
        description: "A high-end corporate office in Dubai featuring sleek lines and premium materials.",
        image: IMAGES.portfolio[3],
        category: "Commercial",
    }
];

export function TransformationsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const getIndex = (index: number) => {
        return (index + transformations.length) % transformations.length;
    };

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-12 mb-16">
                <div className="space-y-4 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Our Transformations
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-[#1A1A1A]"
                    >
                        Real Homes. <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Remarkable Results.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#1A1A1A]/60 max-w-xl text-lg leading-relaxed font-normal"
                    >
                        See how we turn everyday spaces into extraordinary living experiences one project at a time.
                    </motion.p>
                </div>
            </div>

            <div className="relative h-[450px] md:h-[650px] w-full flex items-center justify-center">
                <div className="flex items-center justify-center w-full relative h-full max-w-[1400px] mx-auto">
                    {/* Previous Card */}
                    <div className="absolute left-0 w-[15%] md:w-[30%] h-[60%] md:h-[80%] opacity-20 scale-85 translate-x-[-15%] pointer-events-none transition-all duration-700 blur-[2px] hidden md:block">
                        <ProjectCard project={transformations[getIndex(currentIndex - 1)]} isActive={false} />
                    </div>

                    {/* Active Card */}
                    <div className="relative w-[90%] md:w-[60%] lg:w-[50%] h-full z-20 shadow-2xl transition-all duration-700">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, scale: 0.95, x: direction * 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95, x: -direction * 50 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full"
                            >
                                <ProjectCard
                                    project={transformations[currentIndex]}
                                    isActive={true}
                                    onNext={nextSlide}
                                    onPrev={prevSlide}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Next Card */}
                    <div className="absolute right-0 w-[15%] md:w-[30%] h-[60%] md:h-[80%] opacity-20 scale-85 translate-x-[15%] pointer-events-none transition-all duration-700 blur-[2px] hidden md:block">
                        <ProjectCard project={transformations[getIndex(currentIndex + 1)]} isActive={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({
    project,
    isActive,
    onNext,
    onPrev
}: {
    project: typeof transformations[0],
    isActive: boolean,
    onNext?: () => void,
    onPrev?: () => void
}) {
    return (
        <div className="w-full h-full relative rounded-4xl overflow-hidden group">
            {/* Image Overlay with Dark Bottom Gradient */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />

            {/* Top Right Icon */}
            {isActive && (
                <div className="absolute top-8 right-8 z-30">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 cursor-pointer hover:bg-white/40 transition-colors">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
            )}

            {/* Bottom Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                <div className="max-w-[85%] space-y-4">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-6">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Navigation Arrows (Only on Active Card) */}
            {isActive && onNext && onPrev && (
                <div className="absolute inset-y-0 inset-x-4 md:inset-x-8 flex items-center justify-between z-30">
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                </div>
            )}
        </div>
    );
}
