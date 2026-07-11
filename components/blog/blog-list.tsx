import {
  getAllBlogs,
} from "@/content/blogs";

import BlogEmpty from "./blog-empty";
import BlogGrid from "./blog-grid";
import BlogListHeader from "./blog-list-header";

export default function BlogList() {

  const blogs = getAllBlogs();

  return (

    <section className="blog-list">

      <BlogListHeader />

      {blogs.length > 0 ? (

        <BlogGrid
          blogs={blogs}
        />

      ) : (

        <BlogEmpty />

      )}

    </section>

  );

}