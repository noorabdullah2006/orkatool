import CategoryCard from "./category-card";
import { getAllCategories } from "@/content/categories";
import type { CategoryIconName } from "./categories.types";

export default function CategoriesGrid() {
  const allCategories = getAllCategories();

  return (
    <div className="categories-grid">
      {allCategories.map((category) => (
        <CategoryCard
          key={category.id}
          category={{
            ...category,
            icon: category.icon as CategoryIconName,
            href: `/categories/${category.slug}`,
          }}
        />
      ))}
    </div>
  );
}