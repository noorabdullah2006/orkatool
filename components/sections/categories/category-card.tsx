import Link from "next/link";

import { categoryIcons } from "./category-icons";
import type { Category } from "./categories.types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {

  const Icon = categoryIcons[category.icon];

  return (
    <Link
      href={category.href}
      className="category-card"
    >
      <div className="category-card-icon">
        <Icon
          size={34}
          strokeWidth={2.2}
        />
      </div>

      <h3 className="category-card-title">
        {category.title}
      </h3>

      <p className="category-card-description">
        {category.description}
      </p>

      <span className="category-card-count">
        {category.totalTools} Tools
      </span>
    </Link>
  );
}