"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Locale } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ProjectsGridProps {
    projects: {
        id: number;
        image: string;
        title?: string; // Optional title
    }[];
    lang: Locale;
}

export function ProjectsGrid({ projects, lang }: ProjectsGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });
    const isRTL = lang === 'ar';

    return (
        <section className="relative py-24 bg-gradient-to-b from-secondary-dark to-black text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10" ref={containerRef}>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            {lang === 'ar' ? "المزيد من الأعمال" : "More Works"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                            {lang === 'ar' ? "معرض المشاريع" : "Project Gallery"}
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/5"
                        >
                            {/* Image */}
                            <Image
                                src={project.image}
                                alt={project.title || "Project Image"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content appearing on hover */}
                            {project.title && (
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-lg text-white font-heading">
                                            {project.title}
                                        </h3>
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
