import type { Blog } from "@/content/blogs";

/* =========================================================
   Article Card
========================================================= */

export interface ArticleCardProps {

  blog: Blog;

}

/* =========================================================
   Articles Grid
========================================================= */

export interface LatestArticlesGridProps {

  limit?: number;

}