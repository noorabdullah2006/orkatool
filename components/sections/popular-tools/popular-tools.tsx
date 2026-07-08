import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import PopularToolsHeader from "./popular-tools-header";
import PopularToolsFilter from "./popular-tools-filter";
import PopularToolCard from "./popular-tool-card";
import PopularToolsLoadMore from "./popular-tools-load-more";

import { popularTools } from "./popular-tools-data";

export default function PopularTools() {
  return (
    <Section className="popular-tools">
      <Container>

        <PopularToolsHeader
          badge="Popular Tools"
          title="Most Used Online Tools"
          description="Quick access to our most popular free online tools. Fast, accurate, and trusted by thousands of users."
        />

        <PopularToolsFilter />

        <div className="popular-tools-grid">
          {popularTools.map((tool) => (
            <PopularToolCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>

        <PopularToolsLoadMore />

      </Container>
    </Section>
  );
}