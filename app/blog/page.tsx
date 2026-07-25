import type { Metadata } from "next";
import Container from "@/components/layout/container";
import BlogList from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog — Online Tool Guides, Tutorials & Calculators",
  description:
    "Read free guides, tutorials and tips on using online calculators and tools. Learn how to calculate age, BMI, Zakat, and more.",
  keywords: [
    "calculator guides",
    "online tool tutorials",
    "zakat guide",
    "age calculator guide",
    "bmi guide",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Online Tool Guides, Tutorials & Calculators",
    description:
      "Free guides and tutorials on using online calculators and tools.",
    url: "https://orkatool.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Online Tool Guides & Tutorials",
    description:
      "Free guides and tutorials on using online calculators and tools.",
  },
};

export default function BlogPage() {

  return (

    <Container>

      <BlogList />

    </Container>

  );

}