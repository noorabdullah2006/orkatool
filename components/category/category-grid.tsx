import type { Tool } from "@/content/tools";

import CategoryCard from "./tool-category-card";
import EmptyState from "@/components/shared/empty-state";

type Props = {
  tools: Tool[];
};

export default function CategoryGrid({
  tools,
}: Props) {
  if (tools.length === 0) {
    return (
      <EmptyState
        title="Coming Soon"
        description="We are currently developing tools for this category. Stay tuned, they will check-in soon!"
      />
    );
  }

  return (
    <section className="category-grid">

      {tools.map((tool) => (

        <CategoryCard
          key={tool.id}
          tool={tool}
        />

      ))}

    </section>
  );
}