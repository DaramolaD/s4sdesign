"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import Link from "next/link";
import { ArrowLeft, MapPin, Maximize2, Calendar, Palette, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

// Mock data for project details mapping to the new IDs
const projectDetails: Record<string, any> = {
    "modern-coastal-retreat": {
        title: "Modern Coastal Retreat",
        location: "Malibu, California",
        year: "2023",
        size: "6,500 sq. ft.",
        style: "Modern Coastal",
        challenge: "Creating a sanctuary that balances the dramatic Pacific views with a sense of grounded intimacy, while surviving the corrosive coastal environment.",
        solution: "We used marine-grade materials and an open floor plan with high-performance glass. The interior features a neutral palette with organic textures to reflect the shoreline.",
        images: ["https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200", IMAGES.hero, ...IMAGES.portfolio],
    },
    "downtown-penthouse": {
        title: "Downtown Penthouse Transformation",
        location: "San Francisco, California",
        year: "2024",
        size: "3,200 sq. ft.",
        style: "Urban Luxury",
        challenge: "Maximizing vertical space in a historic building to create a multi-level living experience without compromising the original architecture.",
        solution: "A custom floating staircase and mezzanine level were introduced. Sleek, dark cabinetry and integrated lighting create a mood of refined urban sophistication.",
        images: ["https://images.unsplash.com/photo-1600566763023-3809c1e59477?auto=format&fit=crop&q=80&w=1200", IMAGES.portfolio[1], IMAGES.portfolio[2]],
    },
    "silicon-valley-smart-home": {
        title: "Silicon Valley Smart Home",
        location: "Palo Alto, California",
        year: "2023",
        size: "9,000 sq. ft.",
        style: "Tech-Forward Minimalism",
        challenge: "Integrating complex smart home technology seamlessly into a minimalist aesthetic where every wire and sensor must be hidden.",
        solution: "We designed custom millwork nodes to house hardware and used voice-activated lighting and shade systems integrated into the ceiling coves.",
        images: ["https://images.unsplash.com/photo-1600607687939-ce97ef8b71d4?auto=format&fit=crop&q=80&w=1200", IMAGES.portfolio[3], IMAGES.hero],
    },
    "beverly-hills-luxury": {
        title: "Beverly Hills Luxury Residence",
        location: "Beverly Hills, California",
        year: "2024",
        size: "12,000 sq. ft.",
        style: "Classic Contemporary",
        challenge: "Refreshing a legendary estate to feel youthful and energetic while respecting its grand proportions and historical significance.",
        solution: "We introduced oversized contemporary art and a vibrant, warm color palette. European furniture pieces were mixed with custom-designed architectural lighting.",
        images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200", IMAGES.portfolio[0], IMAGES.portfolio[1]],
    },
    "santa-monica-studio": {
        title: "Santa Monica Creative Studio",
        location: "Santa Monica, California",
        year: "2023",
        size: "4,500 sq. ft.",
        style: "Industrial Chic",
        challenge: "Converting a former warehouse into a high-energy creative office that promotes collaboration while providing acoustic privacy for edit bays.",
        solution: "We used exposed steel trusses and glass partitions. Acoustic wall panels were integrated as geometric art features, and communal lounge areas were placed near natural light sources.",
        images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", IMAGES.portfolio[2], IMAGES.portfolio[3]],
    },
    "sonoma-valley-vineyard": {
        title: "Sonoma Valley Vineyard Retreat",
        location: "Sonoma Valley, California",
        year: "2024",
        size: "5,800 sq. ft.",
        style: "Organic Modernism",
        challenge: "Building a home that feels like an extension of the vineyard rows, using natural materials that age gracefully over time.",
        solution: "Rammed earth walls and reclaimed oak flooring were the primary materials. Large pocket doors allow the main living room to open completely to the vineyard views.",
        images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200", IMAGES.portfolio[0], IMAGES.hero],
    },
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const project = projectDetails[id] || projectDetails["modern-coastal-retreat"];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-fit w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Primary Subtle Tint */}
                    <div className="absolute inset-0 bg-black/30" />
                    {/* Stronger Bottom-up Gradient for Content Legibility */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                </motion.div>

                {/* Header Content Overlay */}
                <div className="relative inset-0 flex flex-col gap-10 justify-between z-10">
                    {/* Back Link - Top Positioned */}
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-40 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:text-accent transition-all group border border-white/30 bg-black/20 backdrop-blur-sm hover:bg-white hover:border-white py-2.5 px-6 rounded-full"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Projects
                            </Link>
                        </motion.div>
                    </div>

                    {/* Bottom Content */}
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-6"
                        >
                            <span className="text-accent uppercase tracking-[0.4em] font-bold text-[10px]">
                                Project Showcase
                            </span>
                            <h1 className="text-4xl md:text-7xl font-geist! font-medium tracking-tight text-white max-w-4xl leading-[1.1]">
                                {project.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Details Grid */}
            <section className="py-24 md:py-32 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    {/* Info Side */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10">
                            {[
                                { label: "Location", value: project.location, icon: MapPin },
                                { label: "Year", value: project.year, icon: Calendar },
                                { label: "Size", value: project.size, icon: Maximize2 },
                                { label: "Style", value: project.style, icon: Palette },
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <p className="text-[12px] uppercase tracking-widest text-accent font-semibold">{item.label}</p>
                                    <p className="text-base md:text-lg font-medium text-[#1A1A1A] flex items-center gap-2">
                                        <item.icon className="w-4 h-4 text-accent" />
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Story Side */}
                    <div className="lg:col-span-8 space-y-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-geist! font-medium tracking-tight text-[#1A1A1A]">Project Brief</h2>
                            <p className="text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed font-normal">
                                {project.challenge}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-geist! font-medium tracking-tight text-[#1A1A1A]">The Solution</h2>
                            <p className="text-lg md:text-xl text-[#1A1A1A]/60 leading-relaxed font-normal">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="pb-32 px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-geist! font-medium tracking-tight text-[#1A1A1A]">Project Images</h2>
                <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {project.images.slice(1).map((img: string, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="relative aspect-3/4 rounded-4xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
                        >
                            <Image
                                src={img}
                                alt={`${project.title} detail ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Premium Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="bg-white/20 backdrop-blur-md rounded-full p-6 border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                >
                                    <Plus className="w-8 h-8 text-white" strokeWidth={1} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Project Navigation */}
            <section className="py-24 md:py-32 px-6 lg:px-12 border-t border-black/5 bg-neutral-50/50">
                <div className="max-w-7xl mx-auto">
                    {(() => {
                        const projectIds = Object.keys(projectDetails);
                        const currentIndex = projectIds.indexOf(id);
                        const prevIndex = (currentIndex - 1 + projectIds.length) % projectIds.length;
                        const nextIndex = (currentIndex + 1) % projectIds.length;
                        const prevProject = projectDetails[projectIds[prevIndex]];
                        const nextProject = projectDetails[projectIds[nextIndex]];

                        return (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Previous Project */}
                                <Link
                                    href={`/portfolio/${projectIds[prevIndex]}`}
                                    className="group bg-white border border-black/5 p-8 md:p-12 rounded-3xl hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-xl"
                                >
                                    <div className="space-y-4">
                                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Previous Project</span>
                                        <h3 className="text-2xl md:text-3xl font-geist! font-medium text-black tracking-tight group-hover:text-accent transition-colors">
                                            {prevProject.title}
                                        </h3>
                                        <div className="flex items-center gap-3 text-[#1A1A1A]/60 group-hover:text-accent transition-colors font-bold uppercase tracking-[0.2em] text-xs">
                                            <div className="bg-accent rounded-full p-2 group-hover:bg-white transition-colors rotate-180">
                                                <ChevronRight className="w-4 h-4 text-white group-hover:text-accent" />
                                            </div>
                                            View Project
                                        </div>
                                    </div>
                                </Link>

                                {/* Next Project */}
                                <Link
                                    href={`/portfolio/${projectIds[nextIndex]}`}
                                    className="group bg-white border border-black/5 p-8 md:p-12 rounded-3xl hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-xl"
                                >
                                    <div className="space-y-4 text-right">
                                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Next Project</span>
                                        <h3 className="text-2xl md:text-3xl font-geist! font-medium text-black tracking-tight group-hover:text-accent transition-colors">
                                            {nextProject.title}
                                        </h3>
                                        <div className="flex items-center justify-end gap-3 text-[#1A1A1A]/60 group-hover:text-accent transition-colors font-bold uppercase tracking-[0.2em] text-xs">
                                            View Project
                                            <div className="bg-accent rounded-full p-2 group-hover:bg-white transition-colors">
                                                <ChevronRight className="w-4 h-4 text-white group-hover:text-accent" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })()}
                </div>
            </section>
        </div>
    );
}
