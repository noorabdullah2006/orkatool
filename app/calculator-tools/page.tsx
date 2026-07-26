import Container from "@/components/layout/container/container";
import DirectoryWrapper from "@/components/directory/directory-wrapper";
import { getAllTools } from "@/content/tools";
import { getAllCategories } from "@/content/categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Free Online Tools & Calculators | OrkaTool",
  description:
    "Explore our full directory of free online tools, converters, and calculators. Search, filter, and sort our collection to find exactly what you need.",
  alternates: {
    canonical: "/calculator-tools",
  },
};

export default function ToolsPage() {
  const tools = getAllTools().filter((t) => t.published);
  const categories = getAllCategories();

  return (
    <section className="section" style={{ minHeight: "80vh", padding: "60px 0" }}>
      <Container>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          All Tools
        </h1>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
          Browse our complete list of free online tools, converters, and calculators.
        </p>

        <DirectoryWrapper initialTools={tools} categories={categories} />
      </Container>
    </section>
  );
}
