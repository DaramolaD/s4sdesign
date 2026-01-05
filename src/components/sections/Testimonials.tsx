"use client";

import { motion } from "framer-motion";
import { Quote, MessageSquareText } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import Image from "next/image";

const smallTestimonials = [
    {
        name: "Jason P.",
        location: "Los Angeles",
        content: "Great communication, excellent quality our remodel feels flawless and well-crafted.",
        avatar: "https://i.pravatar.cc/150?u=jason"
    },
    {
        name: "Priya R.",
        location: "Sacramento",
        content: "Livohaus was professional, fast, and the final result truly blew us away. Fully Satisfied!",
        avatar: "https://i.pravatar.cc/150?u=priya"
    },
    {
        name: "Greg T.",
        location: "Pasadena",
        content: "They handled everything from design to build. We just sat back and watched it happen.",
        avatar: "https://i.pravatar.cc/150?u=greg"
    },
    {
        name: "Melissa K.",
        location: "San Diego",
        content: "It's rare to find a team this reliable and skilled highly recommended to all!",
        avatar: "https://i.pravatar.cc/150?u=melissa"
    }
];

const featuredTestimonial = {
    name: "Tanya L.",
    location: "Irvine",
    content: "From the very first consultation, Livohaus felt like the right choice. The team was organized, transparent, and truly cared about the details. Our home feels brand new.",
    image: "/image/testimony.avif"
};

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 space-y-20">
                <div className="grid grid-cols-1 gap-8 items-stretch">

                    {/* Header */}
                    <div className="space-y-6 flex flex-col items-start text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]"
                        >
                            <MessageSquareText className="w-3.5 h-3.5" />
                            Testimonials
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-[#1A1A1A]">
                            What Our <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Clients</span> Are Saying
                        </h2>

                        <p className="text-[#1A1A1A]/60 max-w-2xl text-lg font-normal">
                            Real Stories from Homeowners Who Trusted Livohaus for Their Home
                        </p>
                    </div>
                    {/* Left Side: Nested 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {smallTestimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#F9F9F9] p-8 rounded-3xl flex flex-col justify-between space-y-8 relative group"
                            >
                                <p className="text-[#1A1A1A]/70 text-base leading-relaxed font-light">
                                    "{t.content}"
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1A1A1A] text-sm">{t.name}</h4>
                                            <p className="text-[#1A1A1A]/40 text-[10px] uppercase tracking-wider font-semibold">{t.location}</p>
                                        </div>
                                    </div>
                                    <Quote className="w-6 h-6 text-accent fill-accent opacity-80" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-8 items-stretch">


                    {/* Right Side: Featured Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] lg:min-h-full group shadow-2xl"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 group-hover:scale-105"
                            style={{ backgroundImage: `url('${featuredTestimonial.image}')` }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-linear-to-t from-black/90 to-transparent pt-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <p className="text-white text-lg md:text-xl leading-relaxed font-light italic">
                                    "{featuredTestimonial.content}"
                                </p>
                                <p className="text-white font-bold text-base">
                                    - {featuredTestimonial.name}, {featuredTestimonial.location}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
