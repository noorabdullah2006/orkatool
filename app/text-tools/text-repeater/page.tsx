import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { getToolBySlug } from "@/content/tools";
import ToolHero from "@/components/tool/hero";
import ToolBody from "@/components/tool/body";
import Container from "@/components/layout/container";
import FinalCTA from "@/components/sections/final-cta/final-cta";
import TextRepeaterForm from "@/components/tools/text-repeater/form";
import TextRepeaterCalculatorContent from "@/components/tools/text-repeater/educational-content";

export const metadata: Metadata = {
  title: "Text Repeater Online - Repeat Text, Words & Emojis | OrkaTool",
  description: "Free online Text Repeater tool. Repeat any text, words, paragraphs, or emojis up to 100,000 times instantly with custom separators and line numbering.",
  keywords: ["text repeater", "repeat text online", "word duplicator", "emoji repeater", "text multiplier", "orkatool"],
  alternates: {
    canonical: "/text-tools/text-repeater",
  },
  openGraph: {
    title: "Text Repeater Online - Repeat Text, Words & Emojis | OrkaTool",
    description: "Free online Text Repeater tool. Repeat any text, words, paragraphs, or emojis up to 100,000 times instantly with custom separators and line numbering.",
    type: "article",
  },
};

const RELATED_TEXT_TOOLS = [
  {
    id: "zakat-calculator",
    title: "Zakat Calculator",
    description: "Calculate your Zakat quickly and accurately.",
    icon: "🕌",
    slug: "zakat-calculator",
    href: "/tools/zakat-calculator"
  },
  {
    id: "inheritance-calculator",
    title: "Islamic Inheritance Calculator",
    description: "Calculate Islamic Estate & Inheritance shares distribution according to Faraid Fiqh.",
    icon: "⚖️",
    slug: "inheritance-calculator",
    href: "/islamic-tools/inheritance-calculator"
  }
];

export default function TextRepeaterPage() {
  const tool = getToolBySlug("text-repeater");

  if (!tool) {
    notFound();
  }

  return (
    <main className="tool-page" style={{ paddingTop: "0px" }}>
      <ToolHero tool={tool} />
      
      <ToolBody>
        <TextRepeaterForm />
      </ToolBody>

      <TextRepeaterCalculatorContent />

      <Container>
        <section className="related-tools" aria-label="Text productivity related tools">
          <h2 className="related-tools-title">Related Tools</h2>
          <div className="related-tools-grid">
            {RELATED_TEXT_TOOLS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="related-tool-card"
              >
                <div className="related-tool-icon">{item.icon}</div>
                <div className="related-tool-content">
                  <h4 className="related-tool-title-card">{item.title}</h4>
                  <p className="related-tool-description">{item.description}</p>
                </div>
                <span className="related-tool-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
      
      <FinalCTA />
    </main>
  );
}
