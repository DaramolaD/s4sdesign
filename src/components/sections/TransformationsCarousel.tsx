"use client";

import React, { useCallback, useEffect, useState, useId } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { ExpandableButton } from "@/components/ui/expandable-button";
import Link from "next/link";

const transformations = [
    {
        id: 1,
        title: "Modern Minimalist Kitchen",
        category: "Kitchen Transformation",
        video: "/video/interiorDesigner.mp4",
        description: "A sleek, functional overhaul emphasizing natural light and clean lines.",
        href: "/portfolio/1"
    },
    {
        id: 2,
        title: "Elite Living Experience",
        category: "Living Room Remodel",
        video: "/video/interiorDesigner_2.mp4",
        description: "Sophisticated design with premium textures and cinematic atmosphere.",
        href: "/portfolio/2"
    },
    {
        id: 3,
        title: "Bespoke Office Sanctuary",
        category: "Workspace Design",
        video: "/video/interiorDesigner_3.mp4",
        description: "A calm, productive environment tailored for high-end professional work.",
        href: "/portfolio/3"
    }
];

export function TransformationsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const sectionId = useId();

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 mb-12 md:mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="space-y-4 md:space-y-6">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 border border-accent rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]"
                        >
                            The Difference
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-secondary"
                        >
                            Cinematic <span className="text-accent italic">Transformations</span> <br className="hidden md:block" />
                            Crafted for Luxury Living
                        </motion.h2>
                    </div>
                    <div className="hidden lg:block space-y-8 pb-2">
                        <p className="text-secondary/70 text-base md:text-lg leading-relaxed max-w-xl font-normal font-geist!">
                            Discover our most prestigious projects brought to life through cinematic storytelling. Each transformation is a testament to our commitment to high-end design, meticulous craft, and the ultimate pursuit of aesthetic perfection.
                        </p>
                        <div className="flex items-center justify-between">

                            <div className="flex gap-4">
                                <button
                                    onClick={scrollPrev}
                                    className="w-12 h-12 text-black rounded-full border border-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-all group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="w-12 h-12 text-black rounded-full border border-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-white transition-all group"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="embla__container flex">
                    {transformations.map((item, index) => (
                        <div key={item.id} className="embla__slide flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0 pl-4 transition-opacity duration-500">
                            <Link href={item.href}>
                                <motion.div
                                    className={cn(
                                        "relative rounded-[40px] overflow-hidden bg-secondary/5 transition-all duration-700 h-[500px] md:h-[600px] cursor-pointer group/card",
                                        selectedIndex === index ? "scale-100 opacity-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]" : "scale-90 opacity-40 grayscale"
                                    )}
                                >
                                    {/* Video Background Card */}
                                    <div className="absolute inset-0">
                                        <video
                                            src={item.video}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                        {/* Glassmorphism/Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                            <div className="max-w-lg">
                                                <span className="text-accent-foreground/80 font-medium mb-2 block">{item.category}</span>
                                                <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 transition-colors group-hover/card:text-accent">{item.title}</h3>
                                                <p className="text-white/70 text-base md:text-xl line-clamp-2">{item.description}</p>
                                            </div>
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover/card:bg-accent group-hover/card:border-accent transition-all duration-500">
                                                <Play className="w-6 h-6 fill-current" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-8 left-8">
                                        <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                            {/* <div className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse" /> */}
                                            Project Spotlight
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-12 gap-2">
                {transformations.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-500",
                            selectedIndex === index ? "w-12 bg-accent" : "bg-secondary/20"
                        )}
                    />
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="pt-2 flex justify-end">
                    <ExpandableButton
                        href="/projects"
                        label="Explore All Projects"
                        variant="primary"
                        className="text-lg py-3 pl-8 pr-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
