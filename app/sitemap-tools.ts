import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllTools, getToolUrl } from "@/content/tools";
import { getAllCategories } from "@/content/categories";

export default async function getToolsSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://orkatool.com";
  const currentDate = new Date();

  // 1. Core static routes
  const coreRoutes = [
    "",
    "/calculator-tools",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/categories",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Categories
  const categories = getAllCategories();
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Dynamic Tools
  const tools = getAllTools().filter((tool) => tool.published);
  const toolRoutes = tools.map((tool) => {
    const routePath = getToolUrl(tool);

    return {
      url: `${baseUrl}${routePath}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  return [...coreRoutes, ...categoryRoutes, ...toolRoutes];
}
