import Link from "next/link";

import type { ArticleCardProps } from "./latest-articles.types";

export default function ArticleCard({
  blog,
}: ArticleCardProps) {

  return (

    <article className="article-card">

      <Link
        href={`/blog/${blog.slug}`}
        className="article-card-link"
      >

        {/* Image */}

        <div className="article-card-image-wrapper">

          <img
            src={blog.image}
            alt={blog.imageAlt}
            className="article-card-image"
            loading="lazy"
          />

        </div>

        {/* Content */}

        <div className="article-card-content">

          <span className="article-card-category">
            {blog.category}
          </span>

          <h3 className="article-card-title">
            {blog.title}
          </h3>

          <p className="article-card-excerpt">
            {blog.excerpt}
          </p>

        </div>

        {/* Footer */}

        <div className="article-card-footer">

          <span className="article-card-date">
            {blog.publishedAt}
          </span>

          <span className="article-card-reading-time">
            {blog.readingTime} min read
          </span>

        </div>

      </Link>

    </article>

  );

}