"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, ClipboardList } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { ContactForm } from "@/components/sections/ContactForm";

export function QuoteSection() {
    return (
        <section className="py-24 md:py-32 px-6 lg:px-12 bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Left Side: Info & Image */}
                <div className="space-y-10 md:space-y-12">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 border border-accent/20 rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px]"
                        >
                            <ClipboardList className="w-3.5 h-3.5" />
                            Request a Quote
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-white">
                            Let's Talk <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Renovation</span>
                        </h2>

                        <p className="text-white/60 max-w-lg text-lg font-normal leading-relaxed">
                            With <span className="text-white font-semibold">+10 yrs of experience</span> in Residential & Commercial design, we're ready to bring your vision to life. Fill out the form below.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[350px] rounded-[2.5rem] overflow-hidden group shadow-2xl"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 group-hover:scale-110"
                            style={{ backgroundImage: `url('${IMAGES.hero}')` }} // Using hero image as placeholder if no specific interior image
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                <Phone className="w-6 h-6 text-accent group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest font-semibold text-white/60 mb-1">Call Us Now</p>
                                <p className="text-lg font-medium text-white group-hover:text-accent transition-colors">+1 (951) 239-0523</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                <Mail className="w-6 h-6 text-accent group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest font-bold text-white/60 mb-1">Email Us</p>
                                <p className="text-lg font-medium text-white group-hover:text-accent transition-colors">hello@livohaus.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <ContactForm variant="dark" />
            </div>
        </section>
    );
}
