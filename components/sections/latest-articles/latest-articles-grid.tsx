import {
  getLatestBlogs,
} from "@/content/blogs";

import ArticleCard from "./article-card";

import {
  latestArticlesConfig,
} from "./latest-articles-config";

import type {
  LatestArticlesGridProps,
} from "./latest-articles.types";

export default function LatestArticlesGrid({
  limit = latestArticlesConfig.homepageLimit,
}: LatestArticlesGridProps) {

  const blogs = getLatestBlogs(limit);

  return (

    <div className="latest-articles-grid">

      {blogs.map((blog) => (

        <ArticleCard
          key={blog.id}
          blog={blog}
        />

      ))}

    </div>

  );

}