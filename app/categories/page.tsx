import Categories from "@/components/sections/categories/categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Free Online Tool Categories | OrkaTool",
  description:
    "Explore our categorized collection of free online tools, including Calculators and Text Tools.",
  alternates: {
    canonical: "/categories",
  },
};

export default function CategoriesPage() {
  return (
    <main style={{ minHeight: "80vh", paddingTop: "40px" }}>
      <Categories />
    </main>
  );
}
