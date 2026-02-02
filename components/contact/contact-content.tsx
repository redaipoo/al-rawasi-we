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

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Address Information Card */}
                                <div className="lg:col-span-2 group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-primary/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
                                    {/* Decorative background element */}
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-500" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-6 mb-10">
                                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                                                <MapPin className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                                    {lang === 'ar' ? 'مواقعنا' : 'Our Locations'}
                                                </h3>
                                                <p className="text-gray-500 text-sm uppercase tracking-widest">{lang === 'ar' ? 'تفضل بزيارتنا' : 'Visit Us'}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            {/* HQ */}
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <h4 className="font-bold text-white text-lg">{dict.contact.hq_label}</h4>
                                                </div>
                                                <p className="text-gray-400 leading-relaxed pl-4 border-l border-white/10 group-hover:border-primary/30 transition-colors">
                                                    {dict.contact.hq_address}
                                                </p>
                                            </div>

                                            <div className="space-y-8">
                                                {/* Benghazi */}
                                                <div className="space-y-3">
                                                    <h4 className="font-bold text-white uppercase text-xs tracking-widest text-primary/80">{dict.contact.benghazi_label}</h4>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{dict.contact.benghazi_address}</p>
                                                </div>
                                                {/* Tripoli */}
                                                <div className="space-y-3">
                                                    <h4 className="font-bold text-white uppercase text-xs tracking-widest text-primary/80">{dict.contact.tripoli_label}</h4>
                                                    <p className="text-gray-400 text-sm leading-relaxed">{dict.contact.tripoli_address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Contact Card (Email) */}
                                <div className="group p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-purple-900/20 border border-primary/20 backdrop-blur-xl hover:bg-primary/30 hover:border-primary/40 transition-all duration-500 shadow-2xl relative flex flex-col items-center justify-center text-center">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

                                    <div className="relative z-10 w-full">
                                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/5">
                                            <Mail className="w-10 h-10" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {lang === 'ar' ? 'راسلنا مباشرة' : 'Email Us'}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[200px] mx-auto">
                                            {lang === 'ar'
                                                ? 'نحن هنا للرد على كافة استفساراتكم عبر البريد الإلكتروني'
                                                : 'We are here to answer all your inquiries via email'}
                                        </p>

                                        <a
                                            href={`mailto:${dict.contact.email}`}
                                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-2xl transition-all w-full group/btn shadow-xl shadow-primary/20"
                                        >
                                            <span className="truncate">{dict.contact.email}</span>
                                            <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </a>
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
