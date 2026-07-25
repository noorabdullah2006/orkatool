import BlogCard from "./blog-card";

import type { BlogGridProps } from "./blog.types";

export default function BlogMobileSlider({
  blogs,
}: BlogGridProps) {

  const rows: typeof blogs[] = [];

  for (let i = 0; i < blogs.length; i += 10) {
    rows.push(blogs.slice(i, i + 10));
  }

  return (
    <div className="blog-mobile-slider">

      {rows.map((row, rowIndex) => (

        <div
          key={rowIndex}
          className="blog-mobile-row"
        >

          {row.map((blog) => (

            <div
              key={blog.id}
              className="blog-mobile-card"
            >

              <BlogCard blog={blog} />

            </div>

          ))}

        </div>

      ))}

    </div>
  );
}