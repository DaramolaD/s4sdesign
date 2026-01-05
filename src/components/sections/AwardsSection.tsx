"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const awards = [
    {
        image: "/image/officialfinalist.png",
        alt: "Official Finalist Award",
        title: "Official Finalist",
    },
    {
        image: "/image/officialfinalist_2.png",
        alt: "Official Finalist Recognition",
        title: "Excellence in Design",
    },
];

export function AwardsSection() {
    return (
        <section className="py-20 px-6 lg:px-12 bg-background relative overflow-hidden text-white border-y border-white/5">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent uppercase tracking-widest text-[10px] font-bold"
                    >
                        <Award className="w-3 h-3" />
                        Industry Recognition
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-geist! font-medium tracking-tight"
                    >
                        Award-Winning <span className="text-accent italic">Excellence</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group mx-auto"
                        >
                            <div className="relative w-[280px] md:w-[350px] aspect-square flex items-center justify-center p-8 rounded-full border border-white/10 bg-white/2 backdrop-blur-sm group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500">
                                <div className="absolute inset-0 rounded-full border border-accent/10 scale-110 group-hover:scale-125 transition-transform duration-700 opacity-0 group-hover:opacity-100" />

                                <div className="relative w-full h-full">
                                    <Image
                                        src={award.image}
                                        alt={award.alt}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        sizes="(max-width: 768px) 280px, 350px"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
