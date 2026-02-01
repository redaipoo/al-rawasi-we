"use client";

import { Locale } from "@/types";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/ui/animation-wrappers";
import { motion } from "framer-motion";

export function ClientsSection({ lang }: { lang: Locale }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // 1. Define Clients Data 
    const clients = [
        { name: lang === 'ar' ? "صندوق تنمية وإعمار ليبيا" : "Libya Reconstruction Fund", logo: "/images/clients/reconstruction-fund-new.png" }, // Updated Logo & Moved to top
        { name: lang === 'ar' ? "ليبيانا للهاتف المحمول" : "Libyana Mobile Phone", logo: "/images/clients/libyana.png" },
        { name: lang === 'ar' ? "المصرف التجاري الوطني" : "National Commercial Bank", logo: "/images/clients/ncb.png" },
        { name: lang === 'ar' ? "مصرف الوحدة" : "Wahda Bank", logo: "/images/clients/wahda.png" },
        { name: lang === 'ar' ? "وزارة المالية" : "Ministry of Finance", logo: "/images/clients/finance-ministry-transparent.png" },
        { name: lang === 'ar' ? "الهيئة العامة للأوقاف" : "General Authority for Awqaf", logo: "/images/clients/awqaf.jpg" },
        { name: lang === 'ar' ? "مصرف التجارة والتنمية" : "Bank of Commerce & Development", logo: "/images/clients/bcd.png" },
        { name: lang === 'ar' ? "مصرف ليبيا المركزي" : "Central Bank of Libya", logo: "/images/clients/cbl-final.png" },
        // Removed Omar Al-Mukhtar University
        { name: lang === 'ar' ? "حكومة الوحدة الوطنية (وزارة الزراعة)" : "Ministry of Agriculture", logo: "/images/clients/ministry-agra.png" },
        { name: lang === 'ar' ? "نادي الأخضر الرياضي" : "Al-Akhdar Sport Club", logo: "/images/clients/akhdar-transparent.png" },
        { name: lang === 'ar' ? "المجلس البلدي البيضاء" : "Al-Bayda Municipal Council", logo: "/images/clients/al-bayda-municipal.png" },
        { name: lang === 'ar' ? "بريد ليبيا" : "Libya Post", logo: "/images/clients/libya-post.png" },
        { name: lang === 'ar' ? "جامعة السيد محمد بن علي السنوسي الإسلامية" : "Al-Senussi Islamic University", logo: "/images/clients/senussi-university.png" },
        { name: lang === 'ar' ? "وزارة الصحة" : "Ministry of Health", logo: "/images/clients/ministry-health.png" },
        { name: lang === 'ar' ? "وزارة العدل" : "Ministry of Justice", logo: "/images/clients/ministry-justice.png" },
        { name: lang === 'ar' ? "مصرف شمال أفريقيا" : "North Africa Bank", logo: "/images/clients/nab-bank.png" },
        { name: lang === 'ar' ? "شركة إعمار ليبيا القابضة" : "Emaar Libya Holding Co.", logo: "/images/clients/emaar-libya.png" },
    ];

    // Triple duplication ensures smooth scrolling
    const displayClients = [...clients, ...clients, ...clients];

    // Auto-Scroll Logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let animationFrameId: number;

        const animate = () => {
            if (scrollContainer && !isPaused) {
                scrollContainer.scrollLeft += 0.8; // Slightly cleaner speed
                const singleSetWidth = scrollContainer.scrollWidth / 3;
                if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
                    scrollContainer.scrollLeft = singleSetWidth;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        if (scrollContainer) {
            const singleSetWidth = scrollContainer.scrollWidth / 3;
            if (scrollContainer.scrollLeft < 10) {
                scrollContainer.scrollLeft = singleSetWidth;
            }
        }

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section className="py-32 bg-secondary-dark relative group/section overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-secondary-dark to-secondary-dark" />
            </div>

            <div className="container-custom relative z-10 mb-16 text-center">
                <FadeIn direction="up">
                    <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-accent text-xs font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
                        {lang === 'ar' ? "شركاء النجاح" : "Our Partners"}
                    </span>
                </FadeIn>

                <div className="mb-6">
                    <TextReveal text={lang === 'ar' ? "نفخر بثقة كبرى المؤسسات" : "Trusted by Major Institutions"} className="justify-center text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white" />
                </div>

                <FadeIn delay={0.2}>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        {lang === 'ar'
                            ? "علاقات استراتيجية راسخة مع وصفوة المؤسسات في القطاعين العام والخاص."
                            : "Established strategic relationships with elite institutions in both public and private sectors."}
                    </p>
                </FadeIn>

                {/* Manual Controls */}
                <div className="flex gap-4 justify-center mt-8 rtl:flex-row-reverse">
                    <button
                        onClick={scrollLeft}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-sm"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-sm"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden" dir="ltr">
                {/* Gradient Masks for seamless fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary-dark to-transparent z-10 pointer-events-none" />

                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto scrollbar-hide py-4 px-4"
                    style={{ scrollBehavior: 'auto' }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {displayClients.map((client, idx) => (
                        <ClientCard key={`${client.name}-${idx}`} client={client} />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}

function ClientCard({ client }: { client: { name: string, logo: string } }) {
    return (
        <div className="group flex flex-col items-center gap-4 shrink-0 cursor-pointer select-none">
            <div className="w-[280px] h-[180px] flex items-center justify-center p-4 transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative w-full h-full">
                    <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain p-2 transition-all duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, 280px"
                    />
                </div>
            </div>
            <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors duration-300 text-center max-w-[240px] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                {client.name}
            </span>
        </div>
    );
}
