import Link from "next/link";
import { getCategoryBySlug } from "@/content/categories";
import type { PopularTool } from "./popular-tools.types";

interface PopularToolCardProps {
  tool: PopularTool;
}

export default function PopularToolCard({
  tool,
}: PopularToolCardProps) {
  const categoryData = getCategoryBySlug(tool.category);
  const categoryName = categoryData ? categoryData.title : tool.category;

  return (
    <Link
      href={tool.href}
      className="popular-tool-card"
    >
      <div className="popular-tool-card-top">

        <div className="popular-tool-icon">
          {tool.icon}
        </div>

        <div className="popular-tool-card-badges">
          {categoryName && (
            <span className="popular-tool-category-badge">
              {categoryName}
            </span>
          )}

          {tool.badge && (
            <span
              className={`popular-tool-badge ${
                tool.badge === "Popular"
                  ? "popular-tool-badge-popular"
                  : tool.badge === "Trending"
                  ? "popular-tool-badge-trending"
                  : tool.badge === "New"
                  ? "popular-tool-badge-new"
                  : "popular-tool-badge-editor"
              }`}
            >
              {tool.badge}
            </span>
          )}
        </div>

      </div>

      <h3 className="popular-tool-title">
        {tool.title}
      </h3>

      <p className="popular-tool-description">
        {tool.description}
      </p>

      <span className="popular-tool-link">
        Open Tool
      </span>

    </Link>
  );
}