import type { Metadata } from "next";

import Hero from "@/components/sections/hero";
import TrustedCompanies from "@/components/sections/trusted-companies/trusted-companies";
import Categories from "@/components/sections/categories";
import PopularTools from "@/components/sections/popular-tools";
import WhyChoose from "@/components/sections/why-choose/why-choose";
import HowItWorks from "@/components/sections/how-it-works/how-it-works";
import FAQ from "@/components/sections/faq/faq";
import LatestArticles from "@/components/sections/latest-articles/latest-articles";
import FinalCTA from "@/components/sections/final-cta/final-cta";

export const metadata: Metadata = {
  title: "OrkaTool — Free Online Tools, Calculators & Converters",
  description:
    "Free online tools, calculators, and converters. Zakat Calculator, Islamic Inheritance Calculator, Text Repeater, and more — fast, accurate, and free forever.",
  keywords: [
    "free online tools",
    "online calculator",
    "zakat calculator",
    "islamic inheritance calculator",
    "text repeater",
    "unit converter",
    "free utilities",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OrkaTool — Free Online Tools, Calculators & Converters",
    description:
      "Free online tools, calculators, and converters — fast, accurate, and free forever.",
    url: "https://orkatool.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrkaTool — Free Online Tools, Calculators & Converters",
    description:
      "Free online tools, calculators, and converters — fast, accurate, and free forever.",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://orkatool.com/#webpage",
  url: "https://orkatool.com",
  name: "OrkaTool — Free Online Tools, Calculators & Converters",
  description:
    "Free online tools, calculators, and converters. Zakat Calculator, Islamic Inheritance Calculator, Text Repeater and more.",
  isPartOf: { "@id": "https://orkatool.com/#website" },
  publisher: { "@id": "https://orkatool.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://orkatool.com",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      <TrustedCompanies />

      <Categories />

      <PopularTools />
      <WhyChoose />
      <HowItWorks />
      <LatestArticles />
      <FAQ />
      <FinalCTA />
    </>
  );
}
