import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getToolBySlug, getAllTools } from "@/content/tools";

import ToolHero from "@/components/tool/hero";
import ToolBody from "@/components/tool/body";
import RelatedTools from "@/components/tool/related-tools";
import Container from "@/components/layout/container";

import ZakatForm from "@/components/tools/zakat/form";
import InheritanceForm from "@/components/tools/inheritance/form";
import TextRepeaterForm from "@/components/tools/text-repeater/form";
import ZakatCalculatorContent from "@/components/tools/zakat/educational-content";
import InheritanceCalculatorContent from "@/components/tools/inheritance/educational-content";
import TextRepeaterCalculatorContent from "@/components/tools/text-repeater/educational-content";
import FinalCTA from "@/components/sections/final-cta/final-cta";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const tools = getAllTools().filter((t) => t.published);
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = tool.seoTitle ?? `${tool.title} — Free Online Tool`;
  const description = tool.seoDescription ?? tool.description;

  return {
    title,
    description,
    keywords: tool.keywords,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://orkatool.com/tools/${tool.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const seoTitle = tool.seoTitle ?? `${tool.title} — Free Online Tool`;
  const seoDescription = tool.seoDescription ?? tool.description;

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    url: `https://orkatool.com/tools/${tool.slug}`,
    description: seoDescription,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@id": "https://orkatool.com/#organization",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orkatool.com" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://orkatool.com/tools" },
        { "@type": "ListItem", position: 3, name: tool.title, item: `https://orkatool.com/tools/${tool.slug}` },
      ],
    },
  };

  return (
    <main className="tool-page" style={{ paddingTop: "0px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      <ToolHero tool={tool} />

      {tool.slug === "zakat-calculator" ? (
        <>
          <ToolBody>
            <ZakatForm />
          </ToolBody>

          <Container>
            <RelatedTools category={tool.category} currentSlug={tool.slug} />
          </Container>

          <ZakatCalculatorContent />

          <FinalCTA />
        </>
      ) : tool.slug === "inheritance-calculator" ? (
        <>
          <ToolBody>
            <InheritanceForm />
          </ToolBody>

          <InheritanceCalculatorContent />

          <Container>
            <RelatedTools category={tool.category} currentSlug={tool.slug} />
          </Container>
        </>
      ) : tool.slug === "text-repeater" ? (
        <>
          <ToolBody>
            <TextRepeaterForm />
          </ToolBody>

          <TextRepeaterCalculatorContent />

          <Container>
            <RelatedTools category={tool.category} currentSlug={tool.slug} />
          </Container>
        </>
      ) : (
        <>
          <ToolBody>
            <>
              <h2>
                Calculator Coming Soon
              </h2>

              <p>
                We are building this tool.
              </p>
            </>
          </ToolBody>

          <Container>
            <RelatedTools category={tool.category} currentSlug={tool.slug} />
          </Container>
        </>
      )}

    </main>
  );
}