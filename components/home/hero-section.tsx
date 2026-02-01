"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Locale } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlideIn, FadeIn, StaggerContainer, StaggerItem, TextReveal } from "@/components/ui/animation-wrappers";

interface HeroSectionProps {
    lang: Locale;
    dict: Record<string, any>; // Using flexible type due to deep dictionary structure
}

export function HeroSection({ lang, dict }: HeroSectionProps) {
    const isRTL = lang === 'ar';
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect: Background moves slower than foreground
    const yBg = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityBg = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/95 via-secondary/80 to-primary-dark/60 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-black/30 z-10" /> {/* Extra contrast */}

                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Engineering Construction Site"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </motion.div>

            <div className="container-custom relative z-20 text-center text-white pt-20">
                <StaggerContainer delay={0.2}>
                    <StaggerItem>
                        <div className="mb-8 relative flex flex-col items-center">
                            {/* Company Name Badge/Title */}
                            <FadeIn delay={0.4} className="mb-6 inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-50 font-medium tracking-widest uppercase text-xs md:text-sm shadow-xl">
                                {lang === 'ar' ? 'الرواســي للإستشارات الهندسية' : 'Al-Rawasi Engineering Consultants'}
                            </FadeIn>

                            {/* Animated Slogan */}
                            <h1 className="sr-only">{dict.hero.slogan}</h1>
                            <TextReveal
                                text={dict.hero.slogan}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-8 drop-shadow-2xl max-w-5xl mx-auto"
                            />
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <p className="text-lg md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg opacity-90">
                            {lang === 'ar'
                                ? 'نحن نبني رؤية الغد بمعايير عالمية وخبرات محلية عريقة في مجال الهندسة والتطوير العمراني.'
                                : 'Building tomorrow\'s vision with global standards and deep local expertise in engineering and urban development.'}
                        </p>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <Button size="lg" variant="primary" className="group min-w-[200px] text-lg py-7 shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)] hover:scale-105 transition-all duration-300">
                                {dict.hero.cta_primary}
                                {isRTL ? <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />}
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/5 backdrop-blur-md hover:bg-white hover:text-primary min-w-[200px] text-lg py-7 hover:border-white">
                                {dict.hero.cta_secondary}
                            </Button>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
                <span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
            </motion.div>
        </section>
    );
}
