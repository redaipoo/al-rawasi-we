import { Locale } from "@/types";
import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    lang: Locale;
    bgImage?: string;
}

export function PageHeader({ title, subtitle, lang, bgImage }: PageHeaderProps) {
    return (
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
            {/* Background Image */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Overlay Gradient - Darker at bottom for legibility, but clearer overall */}
            <div className={`absolute inset-0 ${bgImage ? 'bg-gradient-to-b from-black/20 via-black/40 to-black/60' : 'bg-gradient-to-r from-primary to-primary-light'} z-10`} />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-10 opacity-10" style={{
                backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "30px 30px"
            }}></div>

            <div className="container-custom relative z-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
