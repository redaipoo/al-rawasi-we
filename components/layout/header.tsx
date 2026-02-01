import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/types";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { HeaderClient } from "./header-client";

export async function Header({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    const logo = (
        <Link href={`/${lang}`} className="flex items-center gap-4 group">
            {/* Logo Icon */}
            <div className="relative h-14 w-14 md:h-16 md:w-16 overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Image
                    src="/images/logo.png"
                    alt="Al-Rawasi Logo"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                />
            </div>
            {/* Company Name */}
            <div className="flex flex-col items-start">
                <span className="font-heading font-black text-2xl md:text-3xl leading-tight transition-all duration-300 group-hover:tracking-wider">
                    <span className="bg-gradient-to-r from-white via-white to-primary-200 bg-clip-text text-transparent drop-shadow-lg group-hover:from-primary-100 group-hover:to-white transition-all duration-500">
                        {lang === 'ar' ? 'الرواسـي' : 'Al-Rawasi'}
                    </span>
                </span>
                <span className="text-[11px] md:text-xs text-white/80 tracking-[0.2em] font-medium uppercase mt-0.5 transition-all duration-300 group-hover:text-white group-hover:tracking-[0.3em]">
                    {lang === 'ar' ? 'للاستشارات الهندسية' : 'Engineering Consultants'}
                </span>
            </div>
        </Link>
    );

    return <HeaderClient lang={lang} dict={dict} logo={logo} />;
}

