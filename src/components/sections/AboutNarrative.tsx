"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";

const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Client Satisfaction", value: "100%" },
];

const aboutImages = [
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800", // Large vertical
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", // Top small
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", // Bottom small
];

export function AboutNarrative() {
    return (
        <section className="py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-accent/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]"
                    >
                        <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={aboutImages[0]}
                                alt="Luxury Interior Design"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-rows-2 gap-4 h-full">
                            <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={aboutImages[1]}
                                    alt="Modern Detail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={aboutImages[2]}
                                    alt="Designer Selection"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="space-y-8 md:space-y-10 text-secondary relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="inline-flex items-center gap-2 border border-accent rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]">
                                <User className="w-3 h-3" />
                                SEPIDEH SAYAD&apos;S STYLISH SPACES
                            </span>
                            <h2 className="text-4xl md:text-4xl font-geist! font-medium tracking-tight">
                                New Builds | Renovations | Remodels. <br />
                                <span className="text-accent">CA | US | Internationally.</span>
                            </h2>
                            <p className="text-secondary/80 text-base md:text-lg leading-relaxed font-normal">
                                At S4S Design, we specialize in bringing your renovation dreams to life with thoughtful design, expert craftsmanship, and an obsessive attention to detail. Offering Worldwide Design Services since 2014, we transform luxury homes into bespoke living experiences.
                            </p>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-8 border-t border-secondary/10"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="space-y-1">
                                    <p className="text-3xl md:text-5xl font-semibold">{stat.value}</p>
                                    <p className="text-base font-medium md:text-xs uppercase tracking-widest text-secondary/50 leading-tight">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-5 bg-accent text-white pl-8 pr-3 py-3 rounded-full font-bold text-lg hover:bg-secondary transition-all duration-300 shadow-xl shadow-accent/20 hover:-translate-y-1 active:scale-95"
                            >
                                Discover Our Story
                                <div className="bg-white rounded-full p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent">
                                    <ChevronRight className="w-5 h-5 text-accent transition-colors duration-300 group-hover:text-white" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
