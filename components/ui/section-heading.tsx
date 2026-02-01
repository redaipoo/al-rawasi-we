interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
    dark?: boolean;
}

export function SectionHeading({ title, subtitle, className = "", align = "center", dark = false }: SectionHeadingProps) {
    const alignClass = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
    };

    return (
        <div className={`flex flex-col mb-12 ${alignClass[align]} ${className}`}>
            {subtitle && (
                <span className={`font-semibold uppercase tracking-wider mb-2 text-sm ${dark ? 'text-accent' : 'text-secondary'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-heading font-bold relative ${dark ? 'text-white' : 'text-primary'}`}>
                {title}
                <span className={`absolute -bottom-4 left-1/2 w-20 h-1 -translate-x-1/2 block rounded-full ${dark ? 'bg-primary' : 'bg-secondary'}`} />
            </h2>
        </div>
    );
}
