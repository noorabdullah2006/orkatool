import type { Category } from "@/content/categories/category.types";

type Props = {
  category: Category;
};

export default function CategoryHero({
  category,
}: Props) {
  return (
    <section className="category-hero">

      <div className="category-hero-container">

        <div className="category-hero-content">

          <span className="category-badge">

            Free Online Tools

          </span>

          <h1 className="category-title">

            {category.title}

          </h1>

          <p className="category-description">

            {category.description}

          </p>

        </div>

      </div>

    </section>
  );
}