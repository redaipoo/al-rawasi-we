import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { ClientsSection } from "@/components/home/clients-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { Locale } from "@/types";
import { getDictionary } from "@/dictionaries/get-dictionary";

import { CTASection } from "@/components/home/cta-section";

export default async function HomePage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);

    return (
        <div className="flex flex-col">
            <HeroSection lang={params.lang} dict={dict} />
            <ClientsSection lang={params.lang} />
            {/* Limit Services to 4 (approx half of 9) */}
            <ServicesPreview lang={params.lang} limit={4} />
            <ProjectsSection lang={params.lang} />
            <CTASection lang={params.lang} />
        </div>
    );
}
