import Link from "next/link";

import type { Tool } from "@/content/tools";

type Props = {
  tool: Tool;
};

export default function ToolCategoryCard({
  tool,
}: Props) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="category-card category-card-link"
    >

      <div className="category-card-icon">

        {tool.icon}

      </div>

      <div className="category-card-content">

        <h3 className="category-card-title">

          {tool.title}

        </h3>

        <p className="category-card-description">

          {tool.description}

        </p>

      </div>

    </Link>
  );
}
