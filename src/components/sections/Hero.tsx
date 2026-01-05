"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/constants";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative min-h-screen py-24 md:py-0 w-full overflow-hidden flex items-center">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-[center_top] md:bg-center bg-no-repeat transition-transform duration-700"
                    style={{ backgroundImage: `url(${IMAGES.hero})` }}
                />
                <div className="absolute inset-0 bg-black/70" /> {/* Intense dark overlay */}
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-3 md:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-12 pt-4 sm:pt-20 md:pt-40 pb-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl space-y-6 md:space-y-6"
                >
                    <div className="space-y-4 md:space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[9px] md:text-[10px] rounded-full px-3 py-1.5"
                        >
                            <span className="font-black">#1</span> CHOICE FOR LUXURY DESIGN IN CANADA
                        </motion.span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[50px] font-geist! font-semibold text-white leading-[1.1] md:leading-[1.09]! tracking-tight">
                            Building Spaces That <br className="hidden sm:block" />
                            Reflect You With Craft, <br className="hidden sm:block" />
                            Care and Complete Control
                        </h1>
                    </div>

                    <p className="text-base md:text-xl text-white/80 max-w-2xl font-normal leading-relaxed">
                        S4S Design transforms spaces with timeless design, superior materials, and detail-driven construction all managed with care from concept to completion.
                    </p>

                    <div className="flex pt-2 md:pt-4">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 md:gap-5 bg-accent text-[#0B0B0B] pl-5 pr-2 py-1.5 md:py-2 rounded-full font-semibold text-base md:text-xl hover:bg-[#E0C060] hover:text-[#0B0B0B] transition-all duration-300 shadow-2xl hover:-translate-y-1 active:scale-95"
                        >
                            Request Free Quote
                            <div className="bg-accent rounded-full p-2 md:p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-colors duration-300 group-hover:text-accent" />
                            </div>
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Testimonial Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-md w-full md:w-[350px]"
                >
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 md:p-4 rounded-2xl md:rounded-3xl space-y-4 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                            ))}
                        </div>
                        <p className="text-sm md:text-base font-normal leading-[1.5] text-white/90">
                            "Sepideh made our renovation easy and seamless. The results were better than we imagined, and the team was professional from start to finish."
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="font-normal text-sm md:text-base text-white">- Jessica M.</p>
                                <p className="text-[10px] md:text-sm font-normal uppercase tracking-widest text-white/60">Toronto, Canada</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-12 hidden lg:flex flex-col items-center gap-4"
            >
                <div className="w-px h-16 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                    />
                </div>
            </motion.div>
        </section>
    );
}
