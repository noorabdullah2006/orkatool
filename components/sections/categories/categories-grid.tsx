import CategoryCard from "./category-card";
import { categories } from "./categories-data";

export default function CategoriesGrid() {
  return (
    <div className="categories-grid">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}