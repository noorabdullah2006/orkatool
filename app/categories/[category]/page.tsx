import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getCategoryBySlug, getAllCategories } from "@/content/categories";
import { getToolsByCategory } from "@/content/tools/tool.utils";

import CategoryHero from "@/components/category/category-hero";
import CategoryStats from "@/components/category/category-stats";
import CategoryTools from "@/components/category/category-tools";


type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return {
      title: "Category Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: categoryData.seo.title,
    description: categoryData.seo.description,
    keywords: categoryData.seo.keywords,
    alternates: {
      canonical: `/categories/${categoryData.slug}`,
    },
    openGraph: {
      title: categoryData.seo.title,
      description: categoryData.seo.description,
      url: `https://orkatool.com/categories/${categoryData.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: categoryData.seo.title,
      description: categoryData.seo.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const tools = getToolsByCategory(category).filter((t) => t.published);

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: categoryData.seo.title,
    description: categoryData.seo.description,
    url: `https://orkatool.com/categories/${categoryData.slug}`,
    isPartOf: { "@id": "https://orkatool.com/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orkatool.com" },
        { "@type": "ListItem", position: 2, name: "Categories", item: "https://orkatool.com/categories" },
        { "@type": "ListItem", position: 3, name: categoryData.title, item: `https://orkatool.com/categories/${categoryData.slug}` },
      ],
    },
  };

  return (
    <main className="category-page" style={{ paddingTop: "0px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />

      <CategoryHero category={categoryData} />

      <CategoryStats totalTools={tools.length} />

      <CategoryTools tools={tools} />
    </main>
  );
}
