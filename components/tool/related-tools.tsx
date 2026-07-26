import Link from "next/link";
import { getToolsByCategory, getToolUrl } from "@/content/tools/tool.utils";

interface RelatedToolsProps {
  category: string;
  currentSlug: string;
}

export default function RelatedTools({
  category,
  currentSlug,
}: RelatedToolsProps) {
  // Get dynamic related tools (same category, published, exclude active current)
  let related = getToolsByCategory(category)
    .filter((tool) => tool.published && tool.slug !== currentSlug)
    .slice(0, 4);

  // Fallback to calculators if no related tools are available in the current category
  if (related.length === 0) {
    related = getToolsByCategory("calculators")
      .filter((tool) => tool.published && tool.slug !== currentSlug)
      .slice(0, 4);
  }

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="related-tools">
      <h2 className="related-tools-title">Related Tools</h2>
      <div className="related-tools-grid">
        {related.map((tool) => (
          <Link
            key={tool.id}
            href={getToolUrl(tool)}
            className="related-tool-card"
          >
            <div className="related-tool-icon">{tool.icon}</div>
            <div className="related-tool-content">
              <h4 className="related-tool-title-card">{tool.title}</h4>
              <p className="related-tool-description">{tool.description}</p>
            </div>
            <span className="related-tool-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
