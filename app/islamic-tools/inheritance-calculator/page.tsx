import { notFound } from "next/navigation";
import { getToolBySlug } from "@/content/tools";
import ToolHero from "@/components/tool/hero";
import ToolBody from "@/components/tool/body";
import RelatedTools from "@/components/tool/related-tools";
import Container from "@/components/layout/container";
import InheritanceForm from "@/components/tools/inheritance/form";
import InheritanceCalculatorContent from "@/components/tools/inheritance/educational-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Inheritance Calculator | OrkaTool",
  description: "Calculate Islamic Estate & Inheritance shares distribution according to Faraid Fiqh.",
  keywords: ["inheritance", "calculator", "faraid", "islamic inheritance", "estate distribution", "wasiyyah"],
  alternates: {
    canonical: "/islamic-tools/inheritance-calculator",
  },
};

export default function IslamicInheritancePage() {
  const tool = getToolBySlug("inheritance-calculator");

  if (!tool) {
    notFound();
  }

  return (
    <main className="tool-page" style={{ paddingTop: "0px" }}>
      <ToolHero tool={tool} />
      <ToolBody>
        <InheritanceForm />
      </ToolBody>
      <InheritanceCalculatorContent />
      <Container>
        <RelatedTools category={tool.category} currentSlug={tool.slug} />
      </Container>
    </main>
  );
}
