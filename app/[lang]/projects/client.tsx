"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, FadeIn } from "@/components/ui/animation-wrappers";
import { ProjectsShowcase } from "@/components/home/projects-showcase";
import { ProjectsGrid } from "@/components/home/projects-grid";
import { Locale } from "@/types";
import { Project, GalleryProject } from "@/lib/data/projects";

interface ProjectsClientProps {
    projects: Project[];
    galleryProjects: GalleryProject[];
    lang: Locale;
}

export default function ProjectsClient({ projects, galleryProjects, lang }: ProjectsClientProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax and Scale effects for the Hero
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 0.8, 0]);
    const blurHero = useTransform(scrollYProgress, [0, 0.2], [0, 10]);

    return (
        <main ref={containerRef} className="relative bg-secondary-dark min-h-screen">
            {/* Cinematic Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: yHero, scale: scaleHero, opacity: opacityHero, filter: `blur(${blurHero}px)` }}
                    className="absolute inset-0 z-0"
                >
                    {/* Color filter to match site theme */}
                    <div className="absolute inset-0 bg-secondary-dark/60 mix-blend-multiply z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-dark/40 to-secondary-dark z-20" />

                    <Image
                        src="/images/projects-hero.jpg"
                        alt="Projects Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <div className="container-custom relative z-30 text-center">
                    <FadeIn direction="up" delay={0.2}>
                        <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-accent text-xs font-bold uppercase tracking-[0.4em] mb-8 shadow-2xl">
                            {lang === 'ar' ? "معرض المشاريع" : "Project Portfolio"}
                        </span>
                    </FadeIn>
                    <TextReveal
                        text={lang === 'ar' ? "نصيغ المستقبل بأدوات الحاضر" : "Crafting the Future with Today's Excellence"}
                        className="text-5xl md:text-8xl font-bold font-heading text-white tracking-tighter mb-8 leading-tight drop-shadow-2xl"
                    />
                    <FadeIn direction="up" delay={0.6}>
                        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed opacity-80 italic">
                            {lang === 'ar'
                                ? "كل مشروع هو قصة نجاح، وتحدٍ هندسي حولناه إلى واقع ملموس يخدم المجتمع."
                                : "Every project is a success story, an engineering challenge transformed into a tangible reality serving the community."}
                        </p>
                    </FadeIn>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -track-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            {/* Professional Engineering Intro Section */}
            <section className="relative py-32 bg-secondary-dark/50 backdrop-blur-sm z-10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full" />
                            <FadeIn direction="left">
                                <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
                                    {lang === 'ar' ? "الدقة في التنفيذ، الإبداع في التصميم" : "Precision in Execution, Creativity in Design"}
                                </h2>
                            </FadeIn>
                            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                                <FadeIn delay={0.2}>
                                    <p>
                                        {lang === 'ar'
                                            ? "نلتزم في الرواسي بالمعايير العالمية في كل تفريعة هندسية، بدءاً من التخطيط الأولي وصولاً إلى أدق التفاصيل في مرحلة التسليم."
                                            : "At Al-Rawasi, we adhere to global standards in every engineering branch, from initial planning to the finest details at the delivery stage."}
                                    </p>
                                </FadeIn>
                                <FadeIn delay={0.4}>
                                    <p>
                                        {lang === 'ar'
                                            ? "نستخدم أحدث التقنيات في نمذجة معلومات البناء (BIM) لضمان أعلى مستويات الدقة وتقليل الفاقد في الوقت والموارد."
                                            : "We utilize latest Building Information Modeling (BIM) technologies to ensure highest levels of precision and reduce time and resource waste."}
                                    </p>
                                </FadeIn>
                            </div>
                        </div>

                        {/* Static/Decorative Image/Element */}
                        <FadeIn direction="right" className="relative aspect-square">
                            <div className="absolute inset-0 border border-white/5 rounded-3xl rotate-3" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
                            <Image
                                src="/images/projects-hero.jpg"
                                alt="Detail View"
                                fill
                                className="object-cover rounded-3xl opacity-40 grayscale sepia brightness-50 contrast-125"
                            />
                            <div className="absolute bottom-10 right-10 bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl max-w-xs">
                                <p className="text-accent font-bold text-4xl mb-2">100%</p>
                                <p className="text-white text-sm uppercase tracking-widest font-bold">
                                    {lang === 'ar' ? "دقة معمارية" : "Architectural Precision"}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Immersive Projects Showcase */}
            <div className="relative z-20">
                <ProjectsShowcase projects={projects} lang={lang} />
            </div>

            {/* Modern Grid Gallery */}
            <div className="relative z-20">
                <ProjectsGrid projects={galleryProjects} lang={lang} />
            </div>
        </main>
    );
}
