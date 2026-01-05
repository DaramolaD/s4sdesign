"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Residential", "Commercial", "Renovation"];

const projects = [
    {
        id: "modern-coastal-retreat",
        title: "Modern Coastal Retreat",
        location: "Malibu, California",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600585154340-be6199f7a096?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "downtown-penthouse",
        title: "Downtown Penthouse Transformation",
        location: "San Francisco, California",
        category: "Luxury Apartment",
        image: "https://images.unsplash.com/photo-1600607687940-c52af0424225?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "silicon-valley-smart-home",
        title: "Silicon Valley Smart Home",
        location: "Palo Alto, California",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "beverly-hills-luxury",
        title: "Beverly Hills Luxury Residence",
        location: "Beverly Hills, California",
        category: "Residential Renovation",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "santa-monica-studio",
        title: "Santa Monica Creative Studio",
        location: "Santa Monica, California",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "sonoma-valley-vineyard",
        title: "Sonoma Valley Vineyard Retreat",
        location: "Sonoma Valley, California",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
    },
];

export default function PortfolioPage() {
    const [filter, setFilter] = React.useState("All");

    const filteredProjects = projects.filter(
        (p) => filter === "All" || p.category.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto space-y-20 pt-32 md:pt-40 pb-24 px-6 lg:px-12">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-5 py-2 text-accent uppercase tracking-widest font-bold text-[10px]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Our Projects
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-geist! font-medium tracking-tight text-[#1A1A1A]"
                    >
                        Showcase of <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Our Work</span>
                    </motion.h1>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-black/5 pb-8">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 relative py-2",
                                filter === cat ? "text-accent" : "text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                            )}
                        >
                            {cat}
                            {filter === cat && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-accent"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Structured Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <Link key={project.id} href={`/portfolio/${project.id}`}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative aspect-3/4 rounded-[2.5rem] overflow-hidden cursor-pointer bg-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Category Badge - Top Right */}
                                    <div className="absolute top-6 right-6">
                                        <div className="bg-accent text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content - Bottom Left */}
                                    <div className="absolute bottom-10 left-10 right-10 space-y-3">
                                        <h3 className="text-2xl md:text-3xl font-geist! font-medium text-white leading-tight tracking-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <MapPin className="w-4 h-4 text-accent" />
                                            <span className="text-sm font-medium tracking-wide">
                                                {project.location}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
