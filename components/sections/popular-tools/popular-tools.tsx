import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import PopularToolsHeader from "./popular-tools-header";
import PopularToolCard from "./popular-tool-card";

import { getAllTools } from "@/content/tools";

export default function PopularTools() {
  const tools = getAllTools().filter(
    (tool) => tool.popular && tool.published
  );

  return (
    <Section className="popular-tools" ariaLabel="Popular Online Tools">
      <Container>

        <PopularToolsHeader
          title="Most Used Online Tools"
          description="Quick access to our most popular free online tools. Fast, accurate, and trusted by thousands of users."
        />

        <div className="popular-tools-grid">
          {tools.map((tool) => (
            <PopularToolCard
              key={tool.id}
              tool={{
                id: tool.id,
                title: tool.title,
                description: tool.description,
                icon: tool.icon,
                category: tool.category,
                href: `/tools/${tool.slug}`,
                badge: tool.featured ? "Editor's Pick" : "Popular",
              }}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}