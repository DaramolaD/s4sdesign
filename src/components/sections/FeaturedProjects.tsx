
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const projects = [
    {
        title: "Modern Oasis",
        location: "Beverly Hills, CA",
        category: "Residential",
        image: IMAGES.portfolio[0],
        className: "lg:col-span-8 h-[600px]",
    },
    {
        title: "Luxe Corporate Plaza",
        location: "Dubai, UAE",
        category: "Commercial",
        image: IMAGES.portfolio[1],
        className: "lg:col-span-4 h-[600px]",
    },
    {
        title: "Minimalist Retreat",
        location: "Toronto, ON",
        category: "Residential",
        image: IMAGES.portfolio[2],
        className: "lg:col-span-4 h-[500px]",
    },
    {
        title: "Serene Sanctuary",
        location: "London, UK",
        category: "Residential",
        image: IMAGES.portfolio[3],
        className: "lg:col-span-8 h-[500px]",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-secondary/10",
                project.className
            )}
        >
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    style={{ y, backgroundImage: `url('${project.image}')` }}
                    className="absolute -inset-[20%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-700 ease-in-out" />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transform transition-transform duration-700 ease-out group-hover:translate-y-[-8px]">
                <div className="overflow-hidden mb-2">
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="block text-accent uppercase tracking-[0.3em] text-[10px] font-bold"
                    >
                        {project.category}
                    </motion.span>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                            {project.title}
                        </h3>
                        <p className="text-white/70 text-base font-light italic">
                            {project.location}
                        </p>
                    </div>

                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <Button variant="outline" size="lg" className="rounded-full transition-all duration-300" asChild>
                            <Link href={`/portfolio/${project.title.toLowerCase().replace(/ /g, "-")}`} className="flex items-center gap-2">
                                Explorer Case Study
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function FeaturedProjects() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <span className="text-accent uppercase tracking-[0.5em] font-semibold text-[10px]">
                                Selected Works
                            </span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-foreground">
                                Signature <span className="italic text-accent">Spaces</span>
                            </h2>
                        </div>
                        <p className="text-foreground/60 max-w-xl text-lg leading-relaxed font-light">
                            A curated selection of award-winning interior design projects that redefine the boundaries of luxury and functional living.
                        </p>
                    </div>
                    <Button variant="link" className="px-0 h-auto text-foreground hover:text-accent group text-sm uppercase tracking-widest font-semibold" asChild>
                        <Link href="/portfolio" className="flex items-center gap-2">
                            View All Projects
                            <div className="relative w-10 h-px bg-foreground/30 overflow-hidden group-hover:bg-accent transition-colors">
                                <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

