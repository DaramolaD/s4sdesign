"use client";

import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const services = [
    {
        title: "Full-Home Renovation",
        description: "Complete home transformations tailored to your style and needs.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Kitchen Remodeling",
        description: "Smart, stylish kitchens built for daily living.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Bathroom Renovation",
        description: "Modern, functional bathrooms with lasting comfort and quality.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Outdoor Living Spaces",
        description: "Extend your home with inviting patios, decks, and garden zones.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    },
];

export function RenovationServices() {
    const [isHovered, setIsHovered] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const baseX = useMotionValue(0);

    // Smooth speed transitions
    const speed = useSpring(isHovered ? 0.2 : 1, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useAnimationFrame((t, delta) => {
        if (!trackRef.current) return;

        // Calculate movement based on frame delta and current speed
        // -0.05 is the base speed (pixels per ms roughly)
        const moveBy = -0.05 * delta * speed.get();
        let newX = baseX.get() + moveBy;

        // Loop calculation: total width of one set of items
        const totalWidth = trackRef.current.scrollWidth / 2;

        if (newX <= -totalWidth) {
            newX = 0;
        }

        baseX.set(newX);
    });

    // Double the services for seamless looping
    const allServices = [...services, ...services];

    return (
        <section className="bg-[#FDF8F1] overflow-hidden py-24 md:py-32">
            {/* 1. Header Section */}
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 mb-12 md:mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="space-y-4 md:space-y-6">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 border border-accent rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]"
                        >
                            Our Services
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-secondary"
                        >
                            Custom <span className="text-accent">Renovation</span> Services <br className="hidden md:block" />
                            Designed to Fit Your Life
                        </motion.h2>
                    </div>
                    <div className="hidden lg:block space-y-8 pb-2">
                        <p className="text-secondary/70 text-base md:text-lg leading-relaxed max-w-xl font-normal font-geist!">
                            From design to delivery, we offer end-to-end solutions tailored to your space, style, and schedule. Whether you're updating one room or remodeling your entire home, S4S Design makes it seamless.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-5 bg-secondary text-white pl-8 pr-3 py-3 rounded-full font-bold text-lg hover:bg-accent transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                            >
                                Request Free Quote
                                <div className="bg-accent rounded-full p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                                    <ChevronRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-accent" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. Marquee Track */}
            <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    ref={trackRef}
                    style={{ x: baseX }}
                    className="flex gap-4 md:gap-8 hover:pause"
                >
                    {allServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[450px] md:h-[550px] lg:h-[650px] min-w-[500px] w-[85vw] md:w-[45vw] lg:w-[40vw] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 40vw"
                            />
                            {/* High-Visibility Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 via-50% to-black/20 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 lg:p-12 space-y-3 md:space-y-4">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-geist! font-bold text-white tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm font-geist! font-normal">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 3. Mobile CTA */}
            <div className="mt-16 lg:hidden px-6">
                <Link
                    href="/contact"
                    className="group flex items-center justify-between bg-secondary text-white px-6 py-3 rounded-full font-bold text-base md:text-lg hover:bg-accent transition-all duration-300 shadow-xl active:scale-95"
                >
                    Request Free Quote
                    <div className="bg-accent rounded-full p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-white ml-4">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-colors duration-300 group-hover:text-accent" />
                    </div>
                </Link>
            </div>
        </section>
    );
}
