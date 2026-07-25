import BlogCard from "./blog-card";
import type { BlogGridProps } from "./blog.types";

export default function BlogGrid({
  blogs,
}: BlogGridProps) {
  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-grid-item"
        >
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
}