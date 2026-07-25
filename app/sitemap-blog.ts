import type { MetadataRoute } from "next";
import { getPublishedBlogs } from "@/content/blogs/blog.utils";

export default async function getBlogSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://orkatool.com";
  const currentDate = new Date();

  // 1. Blog home route
  const blogHomeRoute = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // 2. Dynamic Blog Articles
  const blogs = getPublishedBlogs();
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...blogHomeRoute, ...blogRoutes];
}
