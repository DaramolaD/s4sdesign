"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Worldwide Services", value: "Global" },
];

export function Stats() {
    return (
        <section className="py-24 bg-secondary px-6 lg:px-12 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="space-y-4 group"
                        >
                            <h3 className="text-4xl md:text-5xl font-sans font-black text-white group-hover:text-accent transition-colors duration-500">
                                {stat.value}
                            </h3>
                            <div className="w-8 h-1 bg-accent mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
