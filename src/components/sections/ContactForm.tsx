"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Video, FileText, Sparkles, ChevronDown, Check } from "lucide-react";
import { ExpandableButton } from "@/components/ui/expandable-button";
import * as React from "react";

const bookingOptions = [
    {
        value: "free-consultation",
        label: "Free Consultation",
        description: "30-min discovery call",
        icon: Sparkles,
    },
    {
        value: "design-consultation",
        label: "Design Consultation",
        description: "1-hour paid design session",
        icon: Calendar,
    },
    {
        value: "project-quote",
        label: "Project Quote",
        description: "Full project estimate",
        icon: FileText,
    },
    {
        value: "virtual-walkthrough",
        label: "Virtual Walkthrough",
        description: "Remote video consultation",
        icon: Video,
    },
];

const renovationOptions = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "remodel", label: "Remodel" },
    { value: "new-build", label: "New Build" },
];

interface ContactFormProps {
    variant?: "light" | "dark";
}

export function ContactForm({ variant = "light" }: ContactFormProps) {
    const [selectedBooking, setSelectedBooking] = React.useState("");
    const [renovationType, setRenovationType] = React.useState("");
    const [isRenovationOpen, setIsRenovationOpen] = React.useState(false);
    const renovationRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (renovationRef.current && !renovationRef.current.contains(event.target as Node)) {
                setIsRenovationOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isDark = variant === "dark";
    const bgClass = isDark ? "bg-white/5 backdrop-blur-xl border-white/10" : "bg-[#F9F9F9] border-black/5";
    const inputBgClass = isDark ? "bg-white/10 border-white/10 text-white placeholder:text-white/40" : "bg-white border-black/5";
    const labelClass = isDark ? "text-white/60" : "text-[#1A1A1A]/60";
    const buttonClass = isDark
        ? "bg-white text-secondary hover:bg-accent hover:text-white"
        : "bg-[#1A1A1A] text-white hover:bg-accent";

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${bgClass} p-8 md:p-12 rounded-[3rem] shadow-sm border`}
        >
            <form className="space-y-6">
                {/* Booking Type Selection */}
                <div className="space-y-4">
                    <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                        Select Consultation Type <span className="text-accent">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bookingOptions.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => setSelectedBooking(option.value)}
                                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${selectedBooking === option.value
                                    ? isDark
                                        ? "border-accent bg-accent/10"
                                        : "border-accent bg-accent/5"
                                    : isDark
                                        ? "border-white/10 hover:border-white/20 bg-white/5"
                                        : "border-black/5 hover:border-accent/30 bg-white"
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg ${selectedBooking === option.value ? "bg-accent" : isDark ? "bg-white/10" : "bg-accent/10"}`}>
                                        <option.icon className={`w-4 h-4 ${selectedBooking === option.value ? "text-white" : "text-accent"}`} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`font-semibold text-sm ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>
                                            {option.label}
                                        </p>
                                        <p className={`text-xs ${isDark ? "text-white/50" : "text-[#1A1A1A]/50"}`}>
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                        Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Jane Smith"
                        className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                        required
                    />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                            Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="jane@example.com"
                            className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass}`}>
                            Phone Number (optional)
                        </label>
                        <input
                            type="tel"
                            placeholder="+1 (951) 239-0523"
                            className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                        />
                    </div>
                </div>

                {/* Location & Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                            Project Location <span className="text-accent">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="California"
                            className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all`}
                            required
                        />
                    </div>
                    <div className="space-y-2" ref={renovationRef}>
                        <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass} flex items-center gap-1`}>
                            Type of Renovation <span className="text-accent">*</span>
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsRenovationOpen(!isRenovationOpen)}
                                className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all flex items-center justify-between text-left`}
                            >
                                <span className={renovationType ? (isDark ? "text-white" : "text-[#1A1A1A]") : (isDark ? "text-white/40" : "text-gray-400")}>
                                    {renovationOptions.find(opt => opt.value === renovationType)?.label || "Select..."}
                                </span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isRenovationOpen ? "rotate-180" : ""} ${isDark ? "text-white/40" : "text-black/40"}`} />
                            </button>

                            <AnimatePresence>
                                {isRenovationOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        className={`absolute z-50 w-full mt-2 rounded-xl border shadow-xl overflow-hidden ${isDark ? "bg-[#1A1A1A] border-white/10" : "bg-white border-black/5"
                                            }`}
                                    >
                                        {renovationOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setRenovationType(option.value);
                                                    setIsRenovationOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-5 py-3 text-sm transition-colors ${isDark
                                                    ? "hover:bg-white/5 text-white"
                                                    : "hover:bg-gray-50 text-[#1A1A1A]"
                                                    } ${renovationType === option.value ? (isDark ? "bg-white/5" : "bg-gray-50") : ""}`}
                                            >
                                                {option.label}
                                                {renovationType === option.value && (
                                                    <Check className="w-4 h-4 text-accent" />
                                                )}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        {/* Hidden input for form submission if needed */}
                        <input type="hidden" name="renovationType" value={renovationType} required />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className={`text-xs font-semibold uppercase tracking-widest ${labelClass}`}>
                        Message / Project Brief
                    </label>
                    <textarea
                        placeholder="Tell us about your project vision..."
                        rows={4}
                        className={`w-full ${inputBgClass} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none`}
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center md:justify-start">
                    <ExpandableButton
                        label="Request Free Quote"
                        variant="primary"
                        type="submit"
                        className="w-full md:w-auto text-lg py-3 pl-8 pr-2"
                    />
                </div>
            </form>
        </motion.div>
    );
}
