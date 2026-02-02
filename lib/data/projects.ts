
import { Locale } from "@/types";

export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    images?: string[];
    location: string;
    year: string;
    desc: string;
}

export interface GalleryProject {
    id: number;
    image: string;
    title?: string;
}

export const getProjects = (lang: Locale): Project[] => [
    {
        id: 0,
        title: lang === 'ar' ? "صيانه وتحوير مسجد بلال بن رباح" : "Maintenance and Modification of Bilal Bin Rabah Mosque",
        category: lang === 'ar' ? "عمارة إسلامية" : "Islamic Architecture",
        image: "/images/bilal-mosque.jpg",
        location: lang === 'ar' ? "البيضاء، ليبيا" : "Al Bayda, Libya",
        year: "2026",
        desc: lang === 'ar'
            ? "صرح ديني ومعماري متميز يتم تنفيذه بأعلى المعايير الهندسية، يمزج بين الأصالة والتصميم الحديث."
            : "A distinguished religious landmark under development, blending authenticity with modern design."
    },
    {
        id: 1,
        title: lang === 'ar' ? "تصميم وتطوير سوق الجمعه-شحات" : "Design and Development of Souq Al-Jumaa - Shahat",
        category: lang === 'ar' ? "مجمع تجاري" : "Commercial Complex",
        image: "/images/shahat-mall.jpg",
        location: lang === 'ar' ? "شحات، سوق الجمعة" : "Shahat, Souq Al-Jumaa",
        year: "2026",
        desc: lang === 'ar'
            ? "مجمع تجاري متكامل يتم إنشاؤه بأحدث التقنيات العالمية، ليكون وجهة تسوق عصرية."
            : "An integrated commercial complex built with the latest global technologies."
    },
    {
        id: 2,
        title: lang === 'ar' ? "قسم الإصدار - وحدة الاستقرار المالي ليبيا" : "Issue Department - Financial Stability Unit Libya",
        category: lang === 'ar' ? "مبنى حكومي" : "Government Building",
        image: "/images/central-bank.jpg",
        location: "",
        year: "2024",
        desc: lang === 'ar'
            ? "تصميم وتنفيذ مبنى إداري متطور يتميز بأعلى معايير الأمان والأنظمة الذكية."
            : "Design and construction of an advanced administrative building with top-tier security."
    },
    {
        id: 3,
        title: lang === 'ar' ? "تصميم داخلي وخارجي لمركز مبيعات ليبيانا" : "Internal and External Design for Libyana Sales Center",
        category: lang === 'ar' ? "تصميم تجاري" : "Commercial Design",
        image: "/images/libyana-center.jpg",
        location: lang === 'ar' ? "ليبيا" : "Libya",
        year: "",
        desc: lang === 'ar'
            ? "تصميم عصري متكامل يعكس هوية الشركة ويعزز تجربة العملاء من خلال مساحات ذكية وجذابة."
            : "A modern integrated design reflecting the company identity and enhancing customer experience through smart, attractive spaces."
    },

    {
        id: 5,
        title: lang === 'ar' ? "مصرف ليبيا المركزي / شحات" : "Central Bank of Libya / Shahat",
        category: lang === 'ar' ? "مبنى حكومي" : "Government Building",
        image: "/images/cbl-shahat.jpg",
        location: lang === 'ar' ? "شحات، ليبيا" : "Shahat, Libya",
        year: "",
        desc: lang === 'ar'
            ? "تصميم وتنفيذ مبنى فرع المصرف المركزي وفق أحدث المعايير الأمنية والإنشائية."
            : "Design and execution of the Central Bank branch building according to the latest security and structural standards."
    },
    {
        id: 6,
        title: lang === 'ar' ? "المصرف التجاري الوطني - فرع الفائدية" : "National Commercial Bank - Al-Faidiya Branch",
        category: lang === 'ar' ? "مبنى مصرفي" : "Banking Building",
        image: "/images/ncb-faidiya.jpg",
        location: lang === 'ar' ? "ليبيا، الفائدية" : "Al-Faidiya, Libya",
        year: "",
        desc: lang === 'ar'
            ? "إنشاء مبنى جديد - ليبيا الفائدية"
            : "Construction of a new building - Al-Faidiya, Libya"
    }
];

export const getGalleryProjects = (): GalleryProject[] => [
    { id: 101, image: "/images/othman-mosque.jpg" },
    { id: 102, image: "/images/othman-mosque-1.jpg" },
    { id: 103, image: "/images/gallery-project-1.jpg" },
    { id: 104, image: "/images/gallery-project-2.jpg" },
    { id: 105, image: "/images/gallery-project-3.jpg" },
    { id: 106, image: "/images/gallery-project-4.jpg" },
    { id: 107, image: "/images/gallery-project-5.jpg" },
    { id: 108, image: "/images/gallery-project-6.jpg" },
    { id: 109, image: "/images/gallery-project-7.png" },
    { id: 110, image: "/images/gallery-project-8.jpg" },
    { id: 111, image: "/images/gallery-project-9.jpg" },
    { id: 112, image: "/images/gallery-project-10.jpg" },
];
