"use client";

import { motion } from "framer-motion";
import {
    Home, Building2, Layout, Palette, Ruler, Briefcase,
    ChevronDown, ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import * as React from "react";

const services = [
    {
        title: "Residential Interior Design",
        description: "From luxury penthouses to sprawling estates, we transform residences into personalized sanctuaries of style and comfort.",
        icon: Home,
        features: ["Space Planning", "Concept Development", "Material Selection", "Furniture Sourcing"],
    },
    {
        title: "Commercial Interior Design",
        description: "Elevating brand identity through strategic design. We create functional, inspiring spaces for offices, retail, and hospitality.",
        icon: Building2,
        features: ["Brand Integration", "Workflow Optimization", "Interior Branding", "Custom Millwork"],
    },
    {
        title: "3D Visualization & Rendering",
        description: "Experience your future space with cinematic clarity before the first hammer swings. High-fidelity models for every project.",
        icon: Palette,
        features: ["Photorealistic Rendering", "VR Walkthroughs", "Light & Material Studies", "3D Animation"],
    },
    {
        title: "Project Management",
        description: "Complete oversight from concept to completion. We manage contractors, timelines, and budgets so you don't have to.",
        icon: Briefcase,
        features: ["Contractor Liaison", "Budget Management", "Timeline Oversight", "Quality Control"],
    },
];

const processSteps = [
    {
        title: "Consultation",
        description: "We begin by understanding your vision, lifestyle, and project goals during an in-depth meeting.",
    },
    {
        title: "Concept Design",
        description: "Our team develops a unique design direction with mood boards, sketches, and color palettes.",
    },
    {
        title: "Detailed Design",
        description: "Precision planning with 3D models, technical drawings, and final material selections.",
    },
    {
        title: "Implementation",
        description: "We oversee the transformation, coordinating with artisans and contractors to ensure perfection.",
    },
    {
        title: "Unveiling",
        description: "The final reveal of your dream space, meticulously styled and ready for you to enjoy.",
    },
];

const faqs = [
    {
        question: "Do you offer services internationally?",
        answer: "Yes, S4S Design provides interior design services worldwide. We have successful projects across North America, Europe, and the Middle East.",
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary depending on project scope. A residential renovation typically ranges from 3-6 months, while larger commercial projects may take 6-12 months.",
    },
    {
        question: "How do you handle budget management?",
        answer: "We work closely with clients to establish a realistic budget early in the process and provide detailed tracking throughout every phase of implementation.",
    },
];

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <div className="bg-background text-white min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 lg:px-12 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto space-y-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-geist! font-semibold leading-[1.1] tracking-tight">
                            Custom Design Services <br />
                            <span className="text-accent italic">Tailored to Your Vision</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-xl md:text-2xl max-w-3xl leading-relaxed font-geist!"
                    >
                        From initial concept to final styling, we provide a full suite of interior design services that combine aesthetic excellence with functional precision.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-6 lg:px-12 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 hover:border-accent/40 transition-all duration-500 group"
                        >
                            <service.icon className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform duration-500" />
                            <h2 className="text-3xl font-geist! font-semibold mb-6 text-white">{service.title}</h2>
                            <p className="text-white/60 mb-8 leading-relaxed font-geist!">
                                {service.description}
                            </p>
                            <ul className="space-y-4 mb-10">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-white/80">
                                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className="group/btn inline-flex items-center gap-4 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-bold text-base hover:bg-accent hover:border-accent transition-all duration-300 w-full justify-center"
                            >
                                Request Quote
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-32 px-6 lg:px-12 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-6 mb-24">
                        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5">
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-6xl font-geist! font-semibold text-secondary tracking-tight">
                            Our <span className="text-accent italic underline decoration-accent/20 underline-offset-8">Design Journey</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-secondary/10 hidden lg:block" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="space-y-6 relative"
                                >
                                    <div className="w-14 h-14 rounded-full border-2 border-accent bg-secondary flex items-center justify-center text-accent font-geist! font-bold text-2xl relative z-10 transition-all duration-500 hover:scale-110 hover:bg-accent hover:text-white">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-geist! font-semibold text-secondary uppercase tracking-tight">{step.title}</h3>
                                    <p className="text-secondary/70 text-sm leading-relaxed font-geist!">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-6 lg:px-12 bg-background">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5">
                            Questions
                        </span>
                        <h2 className="text-4xl md:text-5xl font-geist! font-semibold text-white tracking-tight">
                            Frequently Asked <span className="text-accent italic">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-geist! font-medium text-lg text-white">{faq.question}</span>
                                    <ChevronDown className={cn("w-5 h-5 text-accent transition-transform duration-300", openFaq === index && "rotate-180")} />
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-6 pt-0 text-white/60 leading-relaxed font-geist!">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
