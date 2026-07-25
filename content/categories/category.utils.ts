import { categories } from "./category.data";
import { getToolsByCategory } from "../tools/tool.utils";

export function getAllCategories() {
  return categories.map((category) => ({
    ...category,
    totalTools: getToolsByCategory(category.slug).filter((t) => t.published).length,
  }));
}

export function getCategoryBySlug(slug: string) {
  const cat = categories.find(
    (category) => category.slug === slug
  );
  if (!cat) return undefined;
  return {
    ...cat,
    totalTools: getToolsByCategory(cat.slug).filter((t) => t.published).length,
  };
}