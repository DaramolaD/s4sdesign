"use client";

import { motion } from "framer-motion";
import { Home, Building2, Layout, Ruler, Palette, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    {
        title: "Residential Interior Design",
        description: "From concept to completion, we transform houses into dream homes tailored to your lifestyle.",
        icon: Home,
    },
    {
        title: "Commercial Interior Design",
        description: "Creating functional, beautiful spaces for businesses that inspire productivity and reflect brand identity.",
        icon: Building2,
    },
    {
        title: "Space Planning & Consultation",
        description: "Expert guidance on layout optimization and design direction for any interior space.",
        icon: Layout,
    },
    {
        title: "3D Visualization & Rendering",
        description: "See your space before it's built with high-fidelity 3D models and realistic material studies.",
        icon: Palette,
    },
];

export function ServicesOverview() {
    return (
        <section className="py-24 md:py-32 bg-secondary text-primary px-6 lg:px-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-4 md:space-y-6">
                            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 backdrop-blur-md text-accent uppercase tracking-[0.3em] font-bold text-[10px] rounded-full px-3 py-1.5">
                                Our Expertise
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-white leading-[1.1] tracking-tight">
                                Design Services <br />
                                <span className="text-accent underline decoration-white/10 underline-offset-8">Tailored</span> to You
                            </h2>
                        </div>
                        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg font-medium">
                            S4S Design provides comprehensive interior design solutions globally. Our approach combines 10+ years of experience with a modern, sophisticated aesthetic.
                        </p>
                        <Link
                            href="/services"
                            className="group flex items-center gap-4 bg-accent text-[#0B0B0B] pl-6 pr-2 py-2 rounded-full font-bold text-lg hover:bg-[#E0C060] hover:text-[#0B0B0B] transition-all w-fit shadow-xl"
                        >
                            Explore All Services
                            <div className="bg-accent rounded-full p-2 group-hover:bg-white transition-colors">
                                <ChevronRight className="w-5 h-5 text-white group-hover:text-accent" />
                            </div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="p-8 md:p-10 border border-white/10 rounded-2xl md:rounded-3xl hover:border-accent/40 transition-all duration-500 group bg-white/[0.03] backdrop-blur-sm"
                            >
                                <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                    <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg md:text-xl font-sans font-black text-white mb-4 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
