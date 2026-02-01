"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Locale } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

interface FooterClientProps {
    lang: Locale;
    dict: any;
}

// SVG City Skyline Component
function CitySkyline() {
    return (
        <svg
            className="w-full h-auto"
            viewBox="0 0 1440 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax slice"
        >
            {/* Background buildings - far layer */}
            <g className="opacity-30">
                <rect x="50" y="100" width="30" height="100" fill="url(#building1)" />
                <rect x="120" y="80" width="40" height="120" fill="url(#building2)" />
                <rect x="200" y="60" width="25" height="140" fill="url(#building1)" />
                <rect x="280" y="90" width="35" height="110" fill="url(#building3)" />
                <rect x="360" y="50" width="20" height="150" fill="url(#building2)" />
                <rect x="420" y="70" width="45" height="130" fill="url(#building1)" />
                <rect x="520" y="40" width="30" height="160" fill="url(#building3)" />
                <rect x="600" y="80" width="40" height="120" fill="url(#building2)" />
                <rect x="700" y="55" width="25" height="145" fill="url(#building1)" />
                <rect x="780" y="75" width="50" height="125" fill="url(#building3)" />
                <rect x="880" y="45" width="35" height="155" fill="url(#building2)" />
                <rect x="960" y="65" width="28" height="135" fill="url(#building1)" />
                <rect x="1040" y="85" width="42" height="115" fill="url(#building3)" />
                <rect x="1130" y="55" width="32" height="145" fill="url(#building2)" />
                <rect x="1220" y="70" width="38" height="130" fill="url(#building1)" />
                <rect x="1320" y="90" width="45" height="110" fill="url(#building3)" />
            </g>

            {/* Middle buildings layer */}
            <g className="opacity-50">
                <rect x="80" y="120" width="35" height="80" fill="url(#building4)" />
                <rect x="150" y="100" width="50" height="100" fill="url(#building5)" />
                <rect x="240" y="85" width="30" height="115" fill="url(#building4)" />
                <rect x="320" y="110" width="40" height="90" fill="url(#building6)" />
                <rect x="400" y="75" width="28" height="125" fill="url(#building5)" />
                <rect x="480" y="95" width="55" height="105" fill="url(#building4)" />
                <rect x="580" y="70" width="35" height="130" fill="url(#building6)" />
                <rect x="660" y="105" width="45" height="95" fill="url(#building5)" />
                <rect x="760" y="80" width="30" height="120" fill="url(#building4)" />
                <rect x="840" y="100" width="60" height="100" fill="url(#building6)" />
                <rect x="940" y="75" width="38" height="125" fill="url(#building5)" />
                <rect x="1020" y="110" width="32" height="90" fill="url(#building4)" />
                <rect x="1100" y="85" width="48" height="115" fill="url(#building6)" />
                <rect x="1200" y="95" width="40" height="105" fill="url(#building5)" />
                <rect x="1300" y="115" width="52" height="85" fill="url(#building4)" />
            </g>

            {/* Front buildings layer */}
            <g className="opacity-80">
                <rect x="30" y="140" width="45" height="60" fill="url(#building7)" />
                <rect x="100" y="125" width="60" height="75" fill="url(#building8)" />
                <rect x="190" y="135" width="35" height="65" fill="url(#building9)" />
                <rect x="260" y="120" width="55" height="80" fill="url(#building7)" />
                <rect x="350" y="145" width="40" height="55" fill="url(#building8)" />
                <rect x="430" y="130" width="48" height="70" fill="url(#building9)" />
                <rect x="510" y="140" width="38" height="60" fill="url(#building7)" />
                <rect x="590" y="125" width="65" height="75" fill="url(#building8)" />
                <rect x="690" y="135" width="42" height="65" fill="url(#building9)" />
                <rect x="770" y="145" width="50" height="55" fill="url(#building7)" />
                <rect x="860" y="130" width="58" height="70" fill="url(#building8)" />
                <rect x="960" y="140" width="35" height="60" fill="url(#building9)" />
                <rect x="1030" y="125" width="52" height="75" fill="url(#building7)" />
                <rect x="1120" y="145" width="45" height="55" fill="url(#building8)" />
                <rect x="1200" y="135" width="62" height="65" fill="url(#building9)" />
                <rect x="1300" y="140" width="48" height="60" fill="url(#building7)" />
                <rect x="1380" y="130" width="55" height="70" fill="url(#building8)" />
            </g>

            {/* Accent elements - stars, moons, geometric shapes */}
            <circle cx="200" cy="40" r="10" fill="url(#accent1)" className="opacity-60" />
            <circle cx="750" cy="30" r="8" fill="url(#accent2)" className="opacity-50" />
            <circle cx="1250" cy="35" r="12" fill="url(#accent1)" className="opacity-40" />

            {/* Small stars */}
            <polygon points="100,25 102,30 107,30 103,34 105,39 100,36 95,39 97,34 93,30 98,30" fill="url(#accent2)" className="opacity-40" />
            <polygon points="500,20 501.5,25 506,25 502.5,28 504,33 500,30 496,33 497.5,28 494,25 498.5,25" fill="url(#accent1)" className="opacity-30" />
            <polygon points="900,28 902,33 907,33 903,37 905,42 900,39 895,42 897,37 893,33 898,33" fill="url(#accent2)" className="opacity-35" />
            <polygon points="1150,22 1152,27 1157,27 1153,31 1155,36 1150,33 1145,36 1147,31 1143,27 1148,27" fill="url(#accent1)" className="opacity-45" />

            {/* Gradient definitions */}
            <defs>
                {/* Building gradients - purple/pink tones */}
                <linearGradient id="building1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9333ea" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#581c87" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="building2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="building3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="building4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="building5" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f472b6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="building6" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.65" />
                </linearGradient>
                <linearGradient id="building7" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="building8" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#e879f9" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="building9" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fce7f3" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.55" />
                </linearGradient>
                {/* Accent gradients */}
                <radialGradient id="accent1">
                    <stop offset="0%" stopColor="#f9a8d4" />
                    <stop offset="100%" stopColor="#ec4899" />
                </radialGradient>
                <radialGradient id="accent2">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#9333ea" />
                </radialGradient>
            </defs>
        </svg>
    );
}

export function FooterClient({ lang, dict }: FooterClientProps) {
    const footerRef = useRef<HTMLElement>(null);
    const isInView = useInView(footerRef, { once: true, margin: "-50px" });
    const isRTL = lang === 'ar';

    const quickLinks = [
        { key: "about", href: "about" },
        { key: "services", href: "services" },
        { key: "projects", href: "projects" },
        { key: "careers", href: "careers" },
    ];

    const services = [
        { ar: 'الاستشارات الهندسية', en: 'Engineering Consulting' },
        { ar: 'التصميم المعماري', en: 'Architectural Design' },
        { ar: 'إدارة المشاريع', en: 'Project Management' },
        { ar: 'التخطيط العمراني', en: 'Urban Planning' },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative overflow-hidden bg-gradient-to-b from-[#0a0612] via-[#0d0918] to-[#050208]"
        >
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }} />

            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Main Content */}
            <div className="container-custom relative z-10 pt-20 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <motion.div
                        className="space-y-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 p-2 border border-white/10">
                                <Image
                                    src="/images/logo.png"
                                    alt="Al-Rawasi Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-xl text-white">
                                    {lang === 'ar' ? 'الرواســي' : 'Al-Rawasi'}
                                </span>
                                <span className="text-xs text-gray-500 tracking-wider uppercase">
                                    {lang === 'ar' ? 'للاستشارات الهندسية' : 'Engineering Consultants'}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed border-s-2 border-primary/50 ps-4">
                            {lang === 'ar' ?
                                'شركة ليبية رائدة في مجال الاستشارات الهندسية والتخطيط العمراني، نقدم حلولاً مبتكرة للمشاريع الكبرى.' :
                                'A leading Libyan engineering consultancy firm providing innovative solutions for major urban planning and infrastructure projects.'}
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
                            {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.key}>
                                    <Link
                                        href={`/${lang}/${item.href}`}
                                        className="group text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                                        {dict.navigation[item.key as keyof typeof dict.navigation]}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
                            {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {services.map((service, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                                    {lang === 'ar' ? service.ar : service.en}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
                            {lang === 'ar' ? 'تواصل معنا' : 'Contact Info'}
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                        </h3>
                        <div className="space-y-4 text-sm text-gray-400">
                            {/* HQ */}
                            <div className="flex items-start gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="w-4 h-4 text-primary" />
                                </div>
                                <div className="pt-1">
                                    <span className="block font-bold text-white mb-1">{dict.contact.hq_label}</span>
                                    <span className="leading-tight block">{dict.contact.hq_address}</span>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-2 group">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-4 h-4 text-primary" />
                                    </div>
                                    <a href={`tel:${dict.contact.phone.replace('+', '')}`} dir="ltr" className="group-hover:text-white transition-colors hover:underline">
                                        {dict.contact.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 pl-12 text-xs">
                                    <a href={`https://wa.me/${dict.contact.whatsapp.replace('+', '')}`} target="_blank" className="text-green-500 hover:text-green-400 flex items-center gap-1 transition-colors">
                                        <span>WhatsApp</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-4 h-4 text-primary" />
                                </div>
                                <span className="group-hover:text-white transition-colors">{dict.contact.email}</span>
                            </div>

                            {/* Facebook */}
                            <div className="flex items-center gap-3 group">
                                <Link href="https://www.facebook.com/arrawasi.allibiya.co" target="_blank" className="flex items-center gap-3 w-full">
                                    <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 transition-colors">
                                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="group-hover:text-white transition-colors">Facebook</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* City Skyline Illustration */}
            <motion.div
                className="relative z-0 -mt-16 pointer-events-none"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
                <CitySkyline />
            </motion.div>

            {/* Copyright Bar */}
            <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/5">
                <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        © {new Date().getFullYear()} {lang === 'ar' ? 'شركة الرواسي للاستشارات الهندسية. جميع الحقوق محفوظة' : 'Al-Rawasi Engineering Consultants. All rights reserved.'}
                    </motion.p>
                    <motion.div
                        className="flex items-center gap-4 mt-3 md:mt-0"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">
                            {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">
                            {lang === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
