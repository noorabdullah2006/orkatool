import BlogCard from "./blog-card";

import type {
  BlogGridProps,
} from "./blog.types";

export default function BlogGrid({
  blogs,
}: BlogGridProps) {

  return (

    <div className="blog-grid">

      {blogs.map((blog) => (

        <BlogCard
          key={blog.id}
          blog={blog}
        />

      ))}

    </div>

  );

}