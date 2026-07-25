import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllTools } from "@/content/tools";
import { getAllCategories } from "@/content/categories";

export default async function getToolsSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://orkatool.com";
  const currentDate = new Date();

  // 1. Core static routes
  const coreRoutes = [
    "",
    "/tools",
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
    let routePath = `/tools/${tool.slug}`;

    // Look for category-specific custom folders under app/
    const pathsToCheck = [
      path.join("app", tool.category, tool.slug, "page.tsx"),
      path.join("app", "islamic-tools", tool.slug, "page.tsx"),
      path.join("app", "text-tools", tool.slug, "page.tsx"),
    ];

    for (const checkPath of pathsToCheck) {
      const absolutePath = path.join(process.cwd(), checkPath);
      if (fs.existsSync(absolutePath)) {
        // Derive path from the matching folder structure
        const relativeAppPath = checkPath.replace("app" + path.sep, "").replace(path.sep + "page.tsx", "");
        const normalizedUrlPath = relativeAppPath.split(path.sep).join("/");
        routePath = `/${normalizedUrlPath}`;
        break;
      }
    }

    return {
      url: `${baseUrl}${routePath}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  return [...coreRoutes, ...categoryRoutes, ...toolRoutes];
}
