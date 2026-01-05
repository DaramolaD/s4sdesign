"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import Link from "next/link";

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (951) 239-0523",
        href: "tel:+19512390523",
    },
    {
        icon: Mail,
        label: "Email",
        value: "hello@livohaus.com",
        href: "mailto:hello@livohaus.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Toronto, Canada",
        href: "#",
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon-Fri: 9AM-6PM EST",
        href: "#",
    },
];

const faqs = [
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope. Residential renovations typically range from 3-6 months, while larger commercial projects may take 6-12 months.",
    },
    {
        question: "Do you work internationally?",
        answer: "Yes! We provide design services worldwide and have successfully completed projects across North America, Europe, and the Middle East.",
    },
    {
        question: "What's included in a free consultation?",
        answer: "Our 30-minute discovery call covers your project vision, timeline, budget range, and how we can bring your design dreams to life.",
    },
];

export default function ContactPage() {
    return (
        <div className="bg-background text-white min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 lg:px-12 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-8 max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-geist! font-semibold leading-[1.1] tracking-tight">
                            Let's Create <br />
                            <span className="text-accent italic">Something Beautiful</span>
                        </h1>
                        <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-geist!">
                            Ready to transform your space? Book a consultation and let's discuss your vision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 px-6 lg:px-12 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-accent/40 transition-all duration-500"
                        >
                            <div className="space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                    <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest font-bold text-white/50 mb-2">{item.label}</p>
                                    <p className="text-lg font-semibold text-white group-hover:text-accent transition-colors">{item.value}</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-32 px-6 lg:px-12 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    {/* Left: Info */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-white/50 uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5">
                                Request a Quote
                            </span>
                            <h2 className="text-4xl md:text-5xl font-geist! font-semibold tracking-tight">
                                Start Your <br />
                                <span className="text-accent italic">Design Journey</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed font-geist!">
                                With <span className="text-white font-semibold">+10 years of experience</span> in Residential & Commercial design, we're ready to bring your vision to life.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4 pt-6">
                            <p className="text-xs uppercase tracking-widest font-bold text-white/40">Quick Links</p>
                            <div className="space-y-3">
                                {[
                                    { label: "View Our Work", href: "/portfolio" },
                                    { label: "Our Services", href: "/services" },
                                    { label: "About Us", href: "/about" },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block text-white/70 hover:text-accent transition-colors font-medium"
                                    >
                                        → {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-3">
                        <ContactForm variant="dark" />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-6 lg:px-12 bg-white">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 backdrop-blur-md text-accent uppercase tracking-[0.2em] font-bold text-[10px] rounded-full px-4 py-1.5">
                            Questions
                        </span>
                        <h2 className="text-4xl md:text-5xl font-geist! font-semibold text-[#1A1A1A] tracking-tight">
                            Common <span className="text-accent italic">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 backdrop-blur-xl border border-black/5 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
                            >
                                <h3 className="text-xl font-geist! font-semibold text-[#1A1A1A] mb-4">{faq.question}</h3>
                                <p className="text-[#1A1A1A]/60 leading-relaxed font-geist!">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
