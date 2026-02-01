"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { Locale } from "@/types";

interface HeaderClientProps {
    lang: Locale;
    dict: any;
    logo: React.ReactNode;
}

export function HeaderClient({ lang, dict, logo }: HeaderClientProps) {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 50;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    });

    const navItems = [
        { key: "home", href: "" },
        { key: "about", href: "about" },
        { key: "services", href: "services" },
        { key: "projects", href: "projects" },
        { key: "contact", href: "contact" },
    ];

    // Check if current path matches nav item
    const isActive = (href: string) => {
        const fullPath = `/${lang}/${href}`;
        return pathname === fullPath || (href === "" && (pathname === `/${lang}` || pathname === `/${lang}/`));
    };

    return (
        <motion.header
            className={`fixed w-full z-50 transition-all duration-500 ease-out ${isScrolled
                ? "py-3 bg-black/20 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.15)] border-b border-white/10"
                : "py-5 bg-gradient-to-b from-black/50 via-black/25 to-transparent backdrop-blur-md"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    {logo}
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.key}
                            href={`/${lang}/${item.href}`}
                            className="relative px-5 py-2.5 text-lg font-bold tracking-wide text-white transition-all duration-300 rounded-lg group overflow-hidden"
                        >
                            {/* Hover background glow */}
                            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-lg" />

                            {/* Text */}
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                {dict.navigation[item.key]}
                            </span>

                            {/* Underline reveal animation */}
                            <motion.span
                                className={`absolute bottom-1 left-1/2 h-[2px] bg-gradient-to-r from-primary-300 via-primary to-primary-300 rounded-full ${isActive(item.href) ? "w-6" : "w-0"
                                    }`}
                                style={{ x: "-50%" }}
                                whileHover={{ width: 24 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />

                            {/* Active indicator */}
                            {isActive(item.href) && (
                                <motion.span
                                    layoutId="activeNavIndicator"
                                    className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Language Switcher */}
                    <Link
                        href={lang === "ar" ? "/en" : "/ar"}
                        className="relative px-4 py-2 text-base font-bold text-white rounded-lg border border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 overflow-hidden group"
                    >
                        <span className="relative z-10">{lang === "ar" ? "EN" : "ع"}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Link>

                    {/* CTA Button */}
                    <Link
                        href={`/${lang}/contact`}
                        className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-base font-bold bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:border-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 group overflow-hidden"
                    >
                        <span className="relative z-10">{dict.navigation.contact}</span>
                        <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-3 rounded-xl text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-2xl border-t border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="container-custom py-8 flex flex-col gap-3">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
                                >
                                    <Link
                                        href={`/${lang}/${item.href}`}
                                        className={`flex items-center justify-between px-5 py-4 text-lg font-semibold rounded-xl transition-all ${isActive(item.href)
                                            ? "text-white bg-white/15 border border-white/20"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {dict.navigation[item.key]}
                                        <ChevronRight className={`w-5 h-5 text-white/40 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, type: "spring" }}
                                className="pt-4 mt-2 border-t border-white/10"
                            >
                                <Link
                                    href={`/${lang}/contact`}
                                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-lg font-bold text-primary bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {dict.navigation.contact}
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
