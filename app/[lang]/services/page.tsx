"use client";

import { Locale } from "@/types";
import { ServicesPreview } from "@/components/home/services-preview";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, FadeIn } from "@/components/ui/animation-wrappers";

export default function ServicesPage({ params }: { params: { lang: Locale } }) {
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

    return (
        <main ref={containerRef} className="relative bg-secondary-dark min-h-screen">
            {/* Cinematic Hero Section */}
            <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: yHero, scale: scaleHero, opacity: opacityHero, filter: `blur(${blurHero}px)` }}
                    className="absolute inset-0 z-0"
                >
                    {/* Visual styling to match architecture theme */}
                    <div className="absolute inset-0 bg-secondary-dark/65 mix-blend-multiply z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-dark/50 to-secondary-dark z-20" />

                    <Image
                        src="/images/services-hero.jpg"
                        alt="Services Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <div className="container-custom relative z-30 text-center px-4">
                    <FadeIn direction="up" delay={0.2}>
                        <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-accent text-xs font-bold uppercase tracking-[0.4em] mb-8 shadow-2xl">
                            {params.lang === 'ar' ? "خدماتنا الهندسية" : "Engineering Services"}
                        </span>
                    </FadeIn>
                    <TextReveal
                        text={params.lang === 'ar' ? "نبتكر الحلول، نصمم المستقبل" : "Innovating Solutions, Designing the Future"}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-heading text-white tracking-tighter mb-6 md:mb-8 leading-tight drop-shadow-2xl px-2"
                    />
                    <FadeIn direction="up" delay={0.6}>
                        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-2xl font-light leading-relaxed opacity-90 italic">
                            {params.lang === 'ar'
                                ? "نقدم منظومة متكاملة من الخدمات الاستشارية والهندسية التي تضمن تحويل رؤاكم إلى صروح قائمة بذاتها."
                                : "Providing an integrated system of consulting and engineering services that transform your visions into standing landmarks."}
                        </p>
                    </FadeIn>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            {/* Professional Services Narrative Section */}
            <section className="relative py-16 md:py-24 lg:py-32 bg-secondary-dark/40 backdrop-blur-md z-10 border-y border-white/5">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
                        <FadeIn direction="right" className="relative aspect-[4/3] order-2 lg:order-1">
                            <div className="absolute inset-0 border border-primary/20 rounded-3xl -rotate-2" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
                            <Image
                                src="/images/services-hero.jpg"
                                alt="Engineering Details"
                                fill
                                className="object-cover rounded-3xl opacity-50 grayscale contrast-125 brightness-75"
                            />
                            <div className="absolute top-10 left-10 bg-primary/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
                                <p className="text-white text-3xl font-bold mb-1">A+</p>
                                <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold">
                                    {params.lang === 'ar' ? "جودة هندسية" : "Engineering Quality"}
                                </p>
                            </div>
                        </FadeIn>

                        <div className="relative z-10 order-1 lg:order-2">
                            <FadeIn direction="up">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 md:mb-10 leading-tight">
                                    {params.lang === 'ar' ? "فلسفة العمل الهندسية في الرواسي" : "Our Engineering Work Philosophy"}
                                </h2>
                            </FadeIn>
                            <div className="space-y-6 md:space-y-8 text-gray-300 text-base md:text-lg lg:text-xl font-light leading-relaxed">
                                <FadeIn delay={0.2}>
                                    <p>
                                        {params.lang === 'ar'
                                            ? "نحن لا نصمم مجرد مخططات، بل نصيغ بيئات عمل وحياة متكاملة. ترتكز خدماتنا على التوازن الدقيق بين الوظيفة والجمال والاستدامة."
                                            : "We don't just design blueprints; we craft integrated living and working environments. Our services rely on the delicate balance between function, aesthetics, and sustainability."}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={0.4}>
                                    <p>
                                        {params.lang === 'ar'
                                            ? "من خلال فريقنا المكون من نخبة المهندسين، نضمن لك الحصول على دراسات جدوى دقيقة، تصاميم معمارية فريدة، وإشراف هندسي صارم يضمن جودة التنفيذ."
                                            : "Through our team of elite engineers, we ensure you receive accurate feasibility studies, unique architectural designs, and strict engineering supervision ensuring implementation quality."}
                                    </p>
                                </FadeIn>
                            </div>

                            <FadeIn delay={0.6} className="mt-12 flex gap-10">
                                <div>
                                    <p className="text-primary text-4xl font-bold mb-1 font-heading">25+</p>
                                    <p className="text-gray-500 text-xs uppercase tracking-tighter">{params.lang === 'ar' ? "سنوات خبرة" : "Years Experience"}</p>
                                </div>
                                <div className="w-[1px] h-12 bg-white/10" />
                                <div>
                                    <p className="text-primary text-4xl font-bold mb-1 font-heading">50+</p>
                                    <p className="text-gray-500 text-xs uppercase tracking-tighter">{params.lang === 'ar' ? "مشروع منجز" : "Projects Done"}</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Integration */}
            <div className="relative z-20 bg-secondary-dark">
                <ServicesPreview lang={params.lang} />
            </div>

            {/* Bottom Section - Future proofing */}
            <section className="py-16 md:py-24 lg:py-32 bg-secondary-dark flex flex-col items-center justify-center text-center px-4">
                <FadeIn direction="up">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        {params.lang === 'ar' ? "هل لديك مشروع طموح؟" : "Have an Ambitious Project?"}
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                        {params.lang === 'ar'
                            ? "دعنا نساعدك في تحويل أفكارك إلى واقع هندسي ملموس."
                            : "Let us help you transform your ideas into tangible engineering reality."}
                    </p>
                    <a href={`/${params.lang}/contact`} className="inline-block py-4 px-12 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)]">
                        {params.lang === 'ar' ? "تواصل معنا الآن" : "Contact Us Now"}
                    </a>
                </FadeIn>
            </section>
        </main>
    );
}
