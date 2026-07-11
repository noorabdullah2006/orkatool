import { blogs } from "./blog-data";

import type { Blog } from "./blog.types";

/* =========================================================
   All Blogs
========================================================= */

export function getAllBlogs(): Blog[] {

  return [...blogs]

    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    );

}

/* =========================================================
   Published Blogs
========================================================= */

export function getPublishedBlogs(): Blog[] {

  return getAllBlogs().filter(
    (blog) => blog.published,
  );

}

/* =========================================================
   Latest Blogs
========================================================= */

export function getLatestBlogs(
  limit = 3,
): Blog[] {

  return getPublishedBlogs()

    .slice(0, limit);

}

/* =========================================================
   Featured Blogs
========================================================= */

export function getFeaturedBlogs(): Blog[] {

  return getPublishedBlogs().filter(
    (blog) => blog.featured,
  );

}

/* =========================================================
   Get Blog By Slug
========================================================= */

export function getBlogBySlug(
  slug: string,
): Blog | undefined {

  return getPublishedBlogs().find(
    (blog) => blog.slug === slug,
  );

}

/* =========================================================
   Blogs By Category
========================================================= */

export function getBlogsByCategory(
  category: string,
): Blog[] {

  return getPublishedBlogs().filter(
    (blog) =>
      blog.category.toLowerCase() ===
      category.toLowerCase(),
  );

}

/* =========================================================
   Blogs By Tag
========================================================= */

export function getBlogsByTag(
  tag: string,
): Blog[] {

  return getPublishedBlogs().filter(
    (blog) =>
      blog.tags.some(
        (item) =>
          item.toLowerCase() ===
          tag.toLowerCase(),
      ),
  );

}

/* =========================================================
   Related Blogs
========================================================= */

export function getRelatedBlogs(
  currentSlug: string,
  limit = 3,
): Blog[] {

  const currentBlog =
    getBlogBySlug(currentSlug);

  if (!currentBlog) {

    return [];

  }

  return getPublishedBlogs()

    .filter((blog) => {

      if (blog.slug === currentSlug) {

        return false;

      }

      return (

        blog.category ===
          currentBlog.category ||

        blog.tags.some((tag) =>
          currentBlog.tags.includes(tag),
        )

      );

    })

    .slice(0, limit);

}

/* =========================================================
   Search Blogs
========================================================= */

export function searchBlogs(
  query: string,
): Blog[] {

  const keyword =
    query.toLowerCase().trim();

  return getPublishedBlogs().filter(
    (blog) =>

      blog.title
        .toLowerCase()
        .includes(keyword) ||

      blog.excerpt
        .toLowerCase()
        .includes(keyword) ||

      blog.category
        .toLowerCase()
        .includes(keyword) ||

      blog.tags.some((tag) =>
        tag
          .toLowerCase()
          .includes(keyword),
      ),

  );

}