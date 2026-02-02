import { Locale } from "@/types";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { ContactContent } from "@/components/contact/contact-content";
import { PageHeader } from "@/components/ui/page-header";

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);

    return (
        <main>
            <PageHeader
                title={params.lang === 'ar' ? "كن واحداً من قيمنا" : "Be One of Our Values"}
                subtitle={params.lang === 'ar' ? "نحن هنا لمساعدتك والإجابة على استفساراتك" : "We are here to help and answer your queries"}
                lang={params.lang}
                bgImage="/images/contact-hero.jpg"
                withBlur={true}
            />
            <ContactContent dict={dict} lang={params.lang} />
        </main>
    );
}
