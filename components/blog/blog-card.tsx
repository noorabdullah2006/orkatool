import Link from "next/link";

import type { BlogCardProps } from "./blog.types";

export default function BlogCard({
  blog,
}: BlogCardProps) {

  return (

    <article className="blog-card">

      <Link
        href={`/blog/${blog.slug}`}
        className="blog-card-link"
      >

        {/* Cover Image */}

        <div className="blog-card-image-wrapper">

          <img
            src={blog.image}
            alt={blog.imageAlt}
            className="blog-card-image"
            loading="lazy"
          />

          <span className="blog-card-category">

            {blog.category}

          </span>

        </div>

        {/* Content */}

        <div className="blog-card-content">

          <div className="blog-card-meta">

            <time dateTime={blog.publishedAt}>

              {blog.publishedAt}

            </time>

            <span>

              •

            </span>

            <span>

              {blog.readingTime} min read

            </span>

          </div>

          <h3 className="blog-card-title">

            {blog.title}

          </h3>

          <p className="blog-card-excerpt">

            {blog.excerpt}

          </p>

          <span className="blog-card-button">

            Read Article →

          </span>

        </div>

      </Link>

    </article>

  );

}