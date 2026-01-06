"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import s4slogo from "../../../public/icons/s4slogo.svg";

export function Footer() {
    return (
        <footer className="bg-secondary text-primary py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                            <Image src={s4slogo} alt="s4slogo" width={80} height={80} />
                        </Link>
                        <p className="text-primary/70 max-w-xs leading-relaxed">
                            Transforming spaces with precision design. Over 10 years of creating residential and commercial interiors worldwide.
                        </p>
                        <div className="flex space-x-4 items-center">
                            <Link href="https://instagram.com/s4sdesign" target="_blank" className="hover:text-accent transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://threads.net/@s4sdesign" target="_blank" className="text-white hover:text-accent transition-colors">
                                <svg
                                    viewBox="0 0 512 512"
                                    className="w-8 h-8"
                                    fill="currentColor"
                                >
                                    <path d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z" />
                                </svg>
                            </Link>
                            <Link href="mailto:info@s4sdesign.com" className="hover:text-accent transition-colors">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "Projects", "Services", "About", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : link === "Projects" ? "/portfolio" : `/${link.toLowerCase()}`}
                                        className="text-primary/70 hover:text-accent transition-colors text-sm uppercase tracking-widest"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-primary/70">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span className="text-sm">+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span className="text-sm">info@s4sdesign.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0" />
                                <span className="text-sm">Worldwide Services<br />Based in Toronto, Canada</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Newsletter</h4>
                        <p className="text-primary/70 text-sm mb-6 leading-relaxed">
                            Subscribe to get the latest interior design tips and project updates.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-primary/10 border border-primary/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white placeholder:text-primary/40"
                            />
                            <Button variant="accent" className="w-full">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-primary/40">
                    <p>© {new Date().getFullYear()} S4S Design. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
