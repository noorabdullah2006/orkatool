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