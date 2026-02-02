"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Locale } from "@/types";

interface ProjectSceneProps {
    project: {
        id: number;
        title: string;
        category: string;
        image: string;
        images?: string[]; // Optional array for multiple images
        location: string;
        year: string;
        desc: string;
    };
    index: number;
    lang: Locale;
}

export function ProjectScene({ project, index, lang }: ProjectSceneProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isRTL = lang === 'ar';
    const isEven = index % 2 === 0;

    // Check if project has multiple images
    const hasMultipleImages = project.images && project.images.length > 1;

    // Scroll Animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
    const imageParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[90vh] py-24 flex items-center justify-center overflow-hidden"
        >
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02] bg-[length:40px_40px]" />
            </div>

            <div className="container-custom relative z-10 w-full">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                    isEven ? (isRTL ? "lg:flex-row-reverse" : "lg:flex-row") : (isRTL ? "lg:flex-row" : "lg:flex-row-reverse")
                )}>

                    {/* Image Column */}
                    <motion.div
                        className="w-full lg:w-3/5 relative group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Decorative Frame Elements */}
                        <div className={cn(
                            "absolute -inset-4 border border-white/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                            isEven ? "translate-x-4 translate-y-4" : "-translate-x-4 translate-y-4"
                        )} />

                        {/* Multi-Image Layout or Single Image */}
                        {hasMultipleImages ? (
                            <div className="relative flex gap-3 md:gap-4">
                                {/* First Image - Larger */}
                                <div className="relative w-[60%] aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-2xl shadow-black/50 bg-secondary-dark/50 group/img1">
                                    <motion.div style={{ scale: imageScale }} className="relative h-full w-full">
                                        <Image
                                            src={project.images![0]}
                                            alt={`${project.title} - 1`}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover/img1:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-secondary-dark/20 mix-blend-multiply group-hover/img1:bg-transparent transition-colors duration-700" />
                                    </motion.div>
                                </div>

                                {/* Second Image - Smaller with offset */}
                                <div className="relative w-[45%] aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-2xl shadow-black/50 bg-secondary-dark/50 group/img2 -ml-[8%] mt-8 md:mt-12 border-4 border-secondary-dark">
                                    <motion.div style={{ scale: imageScale, y: imageParallax }} className="relative h-full w-full">
                                        <Image
                                            src={project.images![1]}
                                            alt={`${project.title} - 2`}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover/img2:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-secondary-dark/20 mix-blend-multiply group-hover/img2:bg-transparent transition-colors duration-700" />
                                    </motion.div>
                                </div>

                                {/* Glass Overlay Details - Positioned at bottom of first image */}
                                <div className="absolute bottom-4 left-4 right-[42%] flex items-center justify-between p-4 md:p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-3 text-white">
                                        <span className="flex items-center gap-2 text-xs md:text-sm font-medium">
                                            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                                            {project.location}
                                        </span>
                                    </div>
                                    <span className="text-white/60 text-xs font-bold tracking-widest">{project.year}</span>
                                </div>
                            </div>
                        ) : (
                            /* Single Image Layout */
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50 bg-secondary-dark/50">
                                <motion.div style={{ scale: imageScale, y: imageParallax }} className="relative h-[120%] w-full -top-[10%]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:grayscale-[0.5]"
                                    />
                                    <div className="absolute inset-0 bg-secondary-dark/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700" />
                                </motion.div>

                                {/* Glass Overlay Details */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-4 text-white">
                                        <span className="flex items-center gap-2 text-sm font-medium">
                                            <MapPin className="w-4 h-4 text-accent" />
                                            {project.location}
                                        </span>
                                    </div>
                                    <span className="text-white/60 text-sm font-bold tracking-widest">{project.year}</span>
                                </div>
                            </div>
                        )}

                        {/* Floating Number (Behind) */}
                        <div className={cn(
                            "absolute top-[-10%] z-[-1] text-[12rem] leading-none font-bold text-white/[0.02] font-heading select-none pointer-events-none",
                            isRTL ? "right-[-5%]" : "left-[-5%]"
                        )}>
                            {String(index + 1).padStart(2, '0')}
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        style={{ y: yContent }}
                        className="w-full lg:w-2/5 flex flex-col gap-8"
                    >
                        {/* Category & Badge */}
                        <div className="flex items-center gap-4 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 60 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-[2px] bg-accent"
                            />
                            <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold">
                                {project.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-[1.1]">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-400 leading-relaxed dark:text-gray-300">
                            {project.desc}
                        </p>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
