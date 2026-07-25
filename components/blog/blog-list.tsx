import { getAllBlogs } from "@/content/blogs";

import BlogEmpty from "./blog-empty";
import BlogGrid from "./blog-grid";
import BlogListHeader from "./blog-list-header";

const BLOGS_PER_ROW = 10;

export default function BlogList() {
  const blogs = getAllBlogs();

  if (blogs.length === 0) {
    return (
      <section className="blog-list">
        <BlogListHeader />
        <BlogEmpty />
      </section>
    );
  }

  const rows = [];

  for (let i = 0; i < blogs.length; i += BLOGS_PER_ROW) {
    rows.push(blogs.slice(i, i + BLOGS_PER_ROW));
  }

  return (
    <section className="blog-list">
      <BlogListHeader />

      <div className="blog-rows">
        {rows.map((row, index) => (
          <BlogGrid
            key={index}
            blogs={row}
          />
        ))}
      </div>
    </section>
  );
}