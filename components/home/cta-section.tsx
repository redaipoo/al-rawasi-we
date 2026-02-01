"use client";

import { Locale } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/animation-wrappers";

export function CTASection({ lang }: { lang: Locale }) {
    const isRTL = lang === 'ar';

    return (
        <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-30 grayscale mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-secondary-dark/80 to-secondary-dark/40" />

                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-reversed" />
            </div>

            <div className="container-custom relative z-10 text-center px-4">
                <FadeIn direction="up">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-accent text-xs font-bold uppercase tracking-[0.3em] mb-8 shadow-2xl">
                        {lang === 'ar' ? "ابدأ رحلتك معنا" : "Start Your Journey"}
                    </span>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white tracking-tighter mb-8 leading-tight">
                        {lang === 'ar' ? "هل أنت مستعد لبناء المستقبل؟" : "Ready to Build the Future?"}
                    </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.4} className="max-w-2xl mx-auto mb-12">
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        {lang === 'ar'
                            ? "دعنا نحول رؤيتك إلى واقع ملموس بمعايير عالمية وحلول مبتكرة."
                            : "Let us transform your vision into tangible reality with global standards and innovative solutions."}
                    </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.6}>
                    <Link
                        href={`/${lang}/contact`}
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-secondary-dark font-bold text-lg rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-out"
                    >
                        <span>{lang === 'ar' ? "تحدث مع خبرائنا" : "Talk to Our Experts"}</span>
                        <div className="w-8 h-8 rounded-full bg-secondary-dark text-white flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                        </div>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
