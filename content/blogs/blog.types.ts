import type { ComponentType } from "react";

/* =========================================================
   Blog SEO
========================================================= */

export interface BlogSEO {

  metaTitle: string;

  metaDescription: string;

  keywords: string[];

}

/* =========================================================
   Blog Author
========================================================= */

export interface BlogAuthor {

  name: string;

  avatar?: string;

}

/* =========================================================
   Blog
========================================================= */

export interface Blog {

  /* =======================================================
     Basic
  ======================================================= */

  id: string;

  slug: string;

  title: string;

  excerpt: string;

  component: ComponentType;

  /* =======================================================
     Organization
  ======================================================= */

  category: string;

  tags: string[];

  /* =======================================================
     Media
  ======================================================= */

  image: string;

  imageAlt: string;

  /* =======================================================
     Publishing
  ======================================================= */

  author: BlogAuthor;

  publishedAt: string;

  updatedAt?: string;

  readingTime: number;

  featured: boolean;

  published: boolean;

  /* =======================================================
     SEO
  ======================================================= */

  seo: BlogSEO;

}