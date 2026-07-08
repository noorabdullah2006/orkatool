import type { PopularTool } from "./popular-tools.types";

interface PopularToolCardProps {
  tool: PopularTool;
}

export default function PopularToolCard({
  tool,
}: PopularToolCardProps) {
  return (
    <a
      href={tool.href}
      className="popular-tool-card"
    >
      <div className="popular-tool-card-top">

        <div className="popular-tool-icon">
          {tool.icon}
        </div>

        {tool.badge && (
          <span
            className={`popular-tool-badge ${
              tool.badge === "Popular"
                ? "popular-tool-badge-popular"
                : "popular-tool-badge-new"
            }`}
          >
            {tool.badge}
          </span>
        )}

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

    </a>
  );
}