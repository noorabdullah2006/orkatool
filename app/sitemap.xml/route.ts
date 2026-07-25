import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://orkatool.com";
  const currentDate = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${baseUrl}/sitemap-tools.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/sitemap-blog.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
