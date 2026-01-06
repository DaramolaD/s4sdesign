"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { ExpandableButton } from "@/components/ui/expandable-button";

const reelIds = [
    "DO6YcvtjTKN",
    "DQFIVwjDR7L",
    "DQubnGUkRSJ",
    "DSYH0fMjRNz"
];

export function InstagramFeed() {
    return (
        <section className="py-24 md:py-32 bg-white px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]"
                        >
                            <Instagram className="w-3.5 h-3.5" />
                            Social Feed
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-[#1A1A1A]">
                            Follow the <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Journey</span>
                        </h2>
                    </div>

                    <div className="text-left md:text-right space-y-2">
                        <p className="text-[#1A1A1A]/60 text-sm font-medium">
                            Sepideh Sayad's Stylish Spaces • Worldwide Design
                        </p>
                        <p className="text-[#1A1A1A]/40 text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
                            @s4sdesign on Instagram & Threads
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {reelIds.map((id, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative aspect-9/16 rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-100"
                        >
                            <iframe
                                src={`https://www.instagram.com/reel/${id}/embed/`}
                                className="w-full h-full absolute inset-0"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Group */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <ExpandableButton
                        href="https://instagram.com/s4sdesign"
                        label="Follow on Instagram"
                        variant="primary"
                        className="pl-8 pr-2 py-2 text-lg"
                    />

                    <motion.a
                        href="https://threads.net/@s4sdesign"
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group flex items-center gap-5 bg-white border border-black/10 text-secondary pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                    >
                        Follow on Threads
                        <div className="bg-accent rounded-full p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-white flex items-center justify-center">
                            <svg
                                viewBox="0 0 512 512"
                                className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-accent"
                                fill="currentColor"
                            >
                                <path d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z" />
                            </svg>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
