import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orkatool.com";
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/sitemap-tools.xml`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: currentDate,
    },
  ];
}
