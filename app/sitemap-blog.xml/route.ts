import getBlogSitemap from "../sitemap-blog";

export async function GET() {
  const sitemapData = await getBlogSitemap();

  const xmlEntries = sitemapData
    .map(
      (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${
      item.lastModified
        ? item.lastModified instanceof Date
          ? item.lastModified.toISOString()
          : new Date(item.lastModified).toISOString()
        : new Date().toISOString()
    }</lastmod>
    <changefreq>${item.changeFrequency || "weekly"}</changefreq>
    <priority>${item.priority || 0.7}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
