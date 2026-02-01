"use client";

import { motion } from "framer-motion";
import { Locale } from "@/types";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/ui/animation-wrappers";
import { Target, Lightbulb, Users } from "lucide-react";

export function VisionMission({ lang }: { lang: Locale }) {
    const isRTL = lang === 'ar';

    return (
        <section className="py-32 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark/90 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side - 3D Floating Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative h-[500px] lg:h-[600px]"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-95" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-2xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-700">
                            {/* Abstract Decorative Elements inside the card */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white/20 text-9xl font-black font-heading uppercase tracking-tighter">
                                    Vision
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        <StaggerContainer>
                            {/* Vision Block */}
                            <StaggerItem>
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Lightbulb className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white">
                                            {lang === 'ar' ? 'رؤيتنــا' : 'Our Vision'}
                                        </h2>
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed pl-4 rtl:pl-0 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/40">
                                        {lang === 'ar'
                                            ? 'الارتقاء بمعايير الجودة والأمان والوقاية والخدمة ضمن نطاق المشاريع الهندسية العامة والخاصة من خلال تقديم تصاميم مميزة والإشراف على تنفيذ المشاريع بالشكل المتطور والذي يحاكي المشاريع العالمية.'
                                            : 'Elevating standards of quality, safety, prevention, and service within public and private engineering projects by providing distinctive designs and supervising execution in an advanced manner that emulates global projects.'}
                                    </p>
                                </div>
                            </StaggerItem>

                            {/* Divider */}
                            <StaggerItem>
                                <motion.div
                                    className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </StaggerItem>

                            {/* Mission Block */}
                            <StaggerItem>
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-secondary-dark transition-colors duration-300">
                                            <Target className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white">
                                            {lang === 'ar' ? 'مهمتنــا' : 'Our Mission'}
                                        </h2>
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed pl-4 rtl:pl-0 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent/40">
                                        {lang === 'ar'
                                            ? 'تسخير أحدث التقنيات والخبرات العالمية لتقديم خدمات هندسية دقيقة ومبتكرة، تضمن لعملائنا الجودة العالية، والكفاءة الاقتصادية، والتميز المعماري.'
                                            : 'Harnessing the latest technologies and global expertise to provide precise and innovative engineering services, ensuring our clients high quality, economic efficiency, and architectural excellence.'}
                                    </p>
                                </div>
                            </StaggerItem>

                            {/* Divider */}
                            <StaggerItem>
                                <motion.div
                                    className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </StaggerItem>

                            {/* Environment Block */}
                            <StaggerItem>
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-green-500/20 rounded-xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                            <Users className="w-8 h-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white">
                                            {lang === 'ar' ? 'بيئة العمل' : 'Our Environment'}
                                        </h2>
                                    </div>
                                    <div className="text-gray-300 text-lg leading-relaxed pl-4 rtl:pl-0 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-green-500/40 space-y-4">
                                        <p>
                                            {lang === 'ar'
                                                ? 'تهدف الشركة إلى خلق بيئة للعمل تطبق المسؤوليات الإدارية العليا وتضمن تفاعل الأفراد والأساليب والسياسات والتكنولوجيا لتحقيق جودة عالية للمخرجات، وتنظيم العلاقة بين الأفراد وتعزيزها والوضوح في فهم المسؤوليات والمهام وتنمية التكامل والتفاعل الهادف بين جميع أطراف المشروع.'
                                                : 'The company aims to create a work environment that applies senior management responsibilities and ensures the interaction of individuals, methods, policies, and technology to achieve high-quality outputs. We organize and strengthen relationships between individuals, ensuring clarity in understanding responsibilities and tasks, and fostering integration and meaningful interaction between all project parties.'}
                                        </p>
                                        <p>
                                            {lang === 'ar'
                                                ? 'كذلك بيئة تعطي فرصة القيادة الجماعية والمشاركة في اتخاذ القرارات وزيادة الحوافز المعنوية بالإضافة إلى المادية لرفع كفاءة الأفراد.'
                                                : 'An environment that provides opportunities for collective leadership and participation in decision-making, increasing moral and material incentives to raise individual efficiency.'}
                                        </p>
                                        <p>
                                            {lang === 'ar'
                                                ? 'بيئة تدعم النشاطات الاجتماعية التي من شأنها تعزيز الروابط والتواصل بين أفراد الشركة.'
                                                : 'An environment that supports social activities to strengthen bonds and communication among company members.'}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
