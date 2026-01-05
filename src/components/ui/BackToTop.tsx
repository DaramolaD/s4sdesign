"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Button
                        variant="accent"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full shadow-xl hover:scale-110 transition-transform"
                    >
                        <ArrowUp className="w-5 h-5 text-white" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
