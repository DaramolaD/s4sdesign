"use client";

import { motion } from "framer-motion";

const reelIds = [
    "DRNW2tCCbJ4",
    "DSYH0fMjRNz"
];

export function InstagramReelsSection() {
    return (
        <section className="py-12 md:py-24 bg-white px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 max-w-5xl mx-auto">
                    {reelIds.map((id, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100"
                        >
                            <iframe
                                src={`https://www.instagram.com/reel/${id}/embed/`}
                                className="w-full h-full absolute inset-0"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
