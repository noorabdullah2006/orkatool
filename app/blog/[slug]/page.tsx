import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getBlogBySlug, getPublishedBlogs } from "@/content/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const blogs = getPublishedBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: blog.seo.metaTitle,
    description: blog.seo.metaDescription,
    keywords: blog.seo.keywords,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.seo.metaTitle,
      description: blog.seo.metaDescription,
      url: `https://orkatool.com/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt ?? blog.publishedAt,
      authors: [blog.author.name],
      images: blog.image
        ? [{ url: blog.image, alt: blog.imageAlt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo.metaTitle,
      description: blog.seo.metaDescription,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.seo.metaDescription,
    url: `https://orkatool.com/blog/${blog.slug}`,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt ?? blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author.name,
    },
    publisher: {
      "@id": "https://orkatool.com/#organization",
    },
    image: blog.image
      ? { "@type": "ImageObject", url: `https://orkatool.com${blog.image}`, description: blog.imageAlt }
      : undefined,
    keywords: blog.seo.keywords.join(", "),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orkatool.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://orkatool.com/blog" },
        { "@type": "ListItem", position: 3, name: blog.title, item: `https://orkatool.com/blog/${blog.slug}` },
      ],
    },
  };

  const BlogComponent = blog.component;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <BlogComponent />
    </>
  );
}