"use client";

import { Button } from "@/components/ui/button";
import { Locale } from "@/types";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, FadeIn } from "@/components/ui/animation-wrappers";

interface ContactContentProps {
    dict: any;
    lang: Locale;
}

export function ContactContent({ dict, lang }: ContactContentProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax and Visual effects for the Hero
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 0.8, 0]);
    const blurHero = useTransform(scrollYProgress, [0, 0.2], [0, 12]);

    if (!dict) return null;

    return (
        <main ref={containerRef} className="relative bg-secondary-dark min-h-screen">
            {/* Cinematic Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                >
                    {/* Abstract Architectural Background */}
                    <div className="absolute inset-0 bg-secondary-dark z-0">
                        {/* Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                                backgroundSize: '50px 50px'
                            }}
                        />

                        {/* Radial Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-dark/50 to-secondary-dark z-10" />

                        {/* Animated Abstract Shapes */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0 pointer-events-none"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/20 rounded-full blur-sm" />
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 border-dashed rounded-full z-0 pointer-events-none"
                        />

                        {/* Floating Orbs */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
                        />
                        <motion.div
                            animate={{
                                y: [0, 30, 0],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"
                        />
                    </div>
                </motion.div>

                <div className="container-custom relative z-30 text-center px-4">
                    <FadeIn direction="up" delay={0.2}>
                        <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-accent text-xs font-bold uppercase tracking-[0.4em] mb-8 shadow-2xl">
                            {dict.navigation.contact}
                        </span>
                    </FadeIn>
                    <TextReveal
                        text={lang === 'ar' ? "لنتحدث عن مشروعك القادم" : "Let's Discuss Your Next Project"}
                        className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tighter mb-8 leading-tight drop-shadow-2xl justify-center"
                    />
                    <FadeIn direction="up" delay={0.6}>
                        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl font-light leading-relaxed opacity-90 italic">
                            {lang === 'ar' ? 'نحن هنا للاجابة على استفساراتكم' : 'We are here to answer your inquiries'}
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="relative py-20 lg:py-32 bg-secondary-dark z-10">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <FadeIn direction="up">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                                    {lang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
                                </h2>
                                <p className="text-lg text-gray-400 leading-relaxed font-light max-w-2xl mx-auto">
                                    {lang === 'ar'
                                        ? 'هل لديك مشروع في ذهنك؟ اتصل بنا اليوم لمناقشة كيف يمكننا مساعدتك في تحويل رؤيتك إلى واقع.'
                                        : 'Have a project in mind? Contact us today to discuss how we can help you transform your vision into reality.'}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Addresses */}
                                <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 md:col-span-2">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                            <MapPin className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-6 w-full pt-1">
                                            {/* HQ - Clickable */}
                                            <a
                                                href="https://maps.app.goo.gl/bLZxSENpxEtcQ5hk7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block p-4 -m-4 rounded-xl hover:bg-white/5 transition-colors group/link"
                                            >
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="font-bold text-white text-lg group-hover/link:text-primary transition-colors">{dict.contact.hq_label}</h3>
                                                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/link:text-primary transition-colors opacity-0 group-hover/link:opacity-100" />
                                                </div>
                                                <p className="text-gray-400 text-base leading-relaxed">{dict.contact.hq_address}</p>
                                            </a>

                                            <div className="w-full h-px bg-white/10" />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <h3 className="font-bold text-white mb-2">{dict.contact.benghazi_label}</h3>
                                                    <p className="text-gray-400 text-sm">{dict.contact.benghazi_address}</p>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white mb-2">{dict.contact.tripoli_label}</h3>
                                                    <p className="text-gray-400 text-sm">{dict.contact.tripoli_address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone & WhatsApp */}
                                <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-bold text-white text-xl">{lang === 'ar' ? 'الهاتف & واتساب' : 'Phone & WhatsApp'}</h3>
                                        </div>

                                        <div className="flex flex-col gap-4 mt-auto">
                                            <a href={`tel:${dict.contact.phone.replace('+', '')}`} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-300 transition-all" dir="ltr">
                                                <span className="font-medium text-lg">{dict.contact.phone}</span>
                                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Call</span>
                                            </a>

                                            <a href={`https://wa.me/${dict.contact.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-500 transition-all">
                                                <span className="font-medium text-lg">WhatsApp</span>
                                                <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email & Social */}
                                <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-bold text-white text-xl">{lang === 'ar' ? 'تواصل معنا' : 'Connect'}</h3>
                                        </div>

                                        <div className="flex flex-col gap-4 mt-auto">
                                            <div className="block p-3 rounded-lg bg-white/5">
                                                <span className="text-xs text-gray-500 block mb-1">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
                                                <span className="text-gray-300 font-medium break-all">{dict.contact.email}</span>
                                            </div>

                                            <a href="https://www.facebook.com/arrawasi.allibiya.co" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 transition-all">
                                                <div className="flex items-center gap-3">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="font-medium lg:text-lg">{dict.contact.facebook || 'Facebook'}</span>
                                                </div>
                                                <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
