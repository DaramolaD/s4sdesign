"use client";

import React, { useState, useRef, useId, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Play, X, Maximize2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
    {
        id: 1,
        src: "/video/interiorDesigner.mp4",
        title: "The Art of Living",
        subtitle: "Exclusive Design Preview",
        description: "Experience the S4S standard of excellence. A glimpse into bespoke craftsmanship and timeless aesthetics crafted for the most discerning eyes.",
    },
    {
        id: 3,
        src: "/video/interiorDesigner_2.mp4",
        title: "Visionary Design",
        subtitle: "A Message from Sepideh",
        description: "Discover the passion and purpose behind every S4S project. Sepideh Sayad shares her journey and the philosophy that drives the studio's global success.",
    },
];

interface VideoSectionProps {
    videoId?: number;
}

export function VideoSection({ videoId = 1 }: VideoSectionProps) {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionInstanceId = useId();

    // Mouse position for glow effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"],
    });

    // Elastic scroll expansion
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const widthRaw = useTransform(scrollYProgress, [0, 0.6], ["80%", "100%"]);
    const width = useSpring(widthRaw, springConfig);

    const borderRadiusRaw = useTransform(scrollYProgress, [0, 0.6], ["80px", "0px"]);
    const borderRadius = useSpring(borderRadiusRaw, springConfig);

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
    const videoScale = useTransform(scrollYProgress, [0, 0.8], [1.1, 1]);

    const filteredVideos = videos.filter(v => v.id === videoId);
    const displayVideos = filteredVideos.length > 0 ? filteredVideos : [videos[0]];

    return (
        <section
            ref={containerRef}
            className="w-full py-32 bg-white overflow-visible relative"
            onMouseMove={handleMouseMove}
        >
            <div className="max-w-[1400px] mx-auto flex justify-center px-4 md:px-8">
                <div className="w-full flex justify-center">
                    {displayVideos.map((video) => (
                        <motion.div
                            key={video.id}
                            layoutId={`video-card-${sectionInstanceId}-${video.id}`}
                            style={{ width, borderRadius, opacity }}
                            className={cn(
                                "relative group overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out",
                                "aspect-video md:h-[650px] bg-secondary/10 cursor-none"
                            )}
                            onMouseEnter={() => setHoveredId(video.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelectedVideo(video.src)}
                        >
                            {/* Dynamic Border Glow */}
                            <motion.div
                                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                style={{
                                    background: useTransform(
                                        [mouseX, mouseY],
                                        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(201, 162, 77, 0.15), transparent 80%)`
                                    )
                                }}
                            />

                            {/* Video Background */}
                            <motion.div
                                style={{ scale: videoScale }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <video
                                    src={video.src}
                                    className="absolute inset-0 w-full h-full object-cover brightness-[0.6] group-hover:brightness-[0.4] transition-all duration-1000"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* Subtle Texture Overlay */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            </motion.div>

                            {/* Premium Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20 bg-linear-to-t from-black/80 via-black/20 to-transparent">
                                <div className="max-w-3xl relative z-20">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        className="flex items-center gap-3 mb-6"
                                    >
                                        <div className="h-[1px] w-12 bg-accent" />
                                        <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold font-sans">
                                            {video.subtitle}
                                        </span>
                                    </motion.div>

                                    <motion.h3
                                        layoutId={`video-title-${sectionInstanceId}-${video.id}`}
                                        className="text-4xl md:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight"
                                    >
                                        {video.title}
                                    </motion.h3>

                                    <AnimatePresence>
                                        {hoveredId === video.id && (
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: 10, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                            >
                                                <p className="text-white/70 text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-sans">
                                                    {video.description}
                                                </p>

                                                <MagneticButton>
                                                    <div className="w-fit flex items-center gap-4 px-10 py-5 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform duration-500 shadow-2xl">
                                                        <Play className="w-5 h-5 fill-current" />
                                                        <span className="tracking-wider">Watch</span>
                                                    </div>
                                                </MagneticButton>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Custom Cursor / Floating Icon */}
                            <motion.div
                                className="absolute pointer-events-none z-50 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    x: mouseX,
                                    y: mouseY,
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                            >
                                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex flex-col items-center justify-center gap-1 scale-50 group-hover:scale-100 transition-transform duration-700">
                                    <Maximize2 className="w-6 h-6 text-white" />
                                    <span className="text-[8px] uppercase tracking-tighter text-white/50">Full View</span>
                                </div>
                            </motion.div>

                            {/* Premium Corner Accent */}
                            {/* <div className="absolute top-12 right-12 text-white/20">
                                <Sparkles className="w-12 h-12" />
                            </div> */}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal remains handled similarly but with exit transitions */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-200 bg-black flex items-center justify-center p-0 md:p-10 lg:p-20 backdrop-blur-3xl"
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-10 right-10 z-210 text-white/50 hover:text-white transition-all transform hover:rotate-90 duration-500"
                        >
                            <X className="w-12 h-12" />
                        </button>
                        <motion.div
                            layoutId={`video-card-${sectionInstanceId}-${videoId}`}
                            className="w-full h-full max-w-7xl aspect-video md:rounded-3xl overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,1)]"
                        >
                            <video src={selectedVideo} className="w-full h-full object-contain bg-black" controls autoPlay />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// Helper: Magnetic Button Component for premium feel
function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.35);
        y.set((clientY - centerY) * 0.35);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}
