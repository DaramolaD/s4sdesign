"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "How do I get started with Livohaus?",
        answer: "Just fill out the contact form and we'll schedule a free consultation to understand your space, needs, and goals."
    },
    {
        question: "Do you offer design services or only construction?",
        answer: "We offer both! Our team can handle the entire project from initial design and concepts to the final construction and finishing touches."
    },
    {
        question: "How long does a typical renovation take?",
        answer: "The duration varies depending on the scale of the project. A bathroom might take 2-4 weeks, while a full home remodel can take several months. We'll provide a detailed timeline during the planning phase."
    },
    {
        question: "What areas do you serve?",
        answer: "We currently serve the greater Los Angeles area, including Beverly Hills, Pasadena, Irvine, and surrounding coastal cities."
    },
    {
        question: "Are your estimates free?",
        answer: "Yes, our initial consultations and preliminary estimates are completely free of charge. We believe in transparency from the very start."
    },
    {
        question: "Do you handle permits and inspections?",
        answer: "Absolutely. We manage the entire permitting process and coordinate all necessary city inspections to ensure your project is compliant and hassle-free."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 px-6 lg:px-12 bg-[#FDF8F1] overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
                {/* Header */}
                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 text-accent uppercase tracking-widest font-bold text-[10px] mx-auto"
                    >
                        <HelpCircle className="w-3.5 h-3.5" />
                        FAQ'S
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-[40px] leading-tight md:leading-[48px] font-geist! font-medium tracking-tight text-[#1A1A1A]">
                        Frequently Asked <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">Questions</span>
                    </h2>

                    <p className="text-[#1A1A1A]/60 max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
                        We know home renovation comes with big questions. Here are answers to the ones we hear most so you can feel confident from the start.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={cn(
                                    "w-full text-left p-6 md:p-8 rounded-2xl bg-white transition-all duration-300 flex items-start justify-between gap-6 group",
                                    openIndex === index ? "shadow-lg shadow-accent/5 ring-1 ring-accent/10" : "hover:shadow-md"
                                )}
                            >
                                <div className="space-y-4 flex-1">
                                    <h3 className={cn(
                                        "text-lg md:text-xl font-medium transition-colors duration-300",
                                        openIndex === index ? "text-secondary" : "text-[#1A1A1A]"
                                    )}>
                                        {faq.question}
                                    </h3>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <p className="text-[#1A1A1A]/60 text-base md:text-lg leading-relaxed font-light pr-8">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className={cn(
                                    "mt-1 w-6 h-6 flex items-center justify-center rounded-full border border-accent/20 transition-transform duration-500",
                                    openIndex === index ? "rotate-180 bg-accent/5 border-accent" : "group-hover:border-accent"
                                )}>
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 text-accent" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-accent" />
                                    )}
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
