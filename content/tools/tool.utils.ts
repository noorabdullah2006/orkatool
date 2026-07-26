import { tools } from "./tool.data";

import type { Tool } from "./tool.types";

/* =========================================================
   All Tools
========================================================= */

export function getAllTools(): Tool[] {

  return tools;

}

/* =========================================================
   Get Tools By Category
========================================================= */

export function getToolsByCategory(
  category: string,
): Tool[] {

  return tools.filter(

    (tool) =>
      tool.category === category,

  );

}

/* =========================================================
   Get Tool By Slug
========================================================= */

export function getToolBySlug(
  slug: string,
): Tool | undefined {

  return tools.find(

    (tool) =>
      tool.slug === slug,

  );

}

/* =========================================================
   Get Tool URL
========================================================= */

export function getToolUrl(
  tool: Pick<Tool, "slug" | "category">
): string {

  const categorySegment = tool.category === "calculators" ? "calculator-tools" : tool.category;
  return `/${categorySegment}/${tool.slug}`;

}