import { notFound } from "next/navigation";

import {
  getBlogBySlug,
} from "@/content/blogs";

interface BlogPageProps {

  params: {

    slug: string;

  };

}

export default function BlogPage({
  params,
}: BlogPageProps) {

  const blog = getBlogBySlug(
    params.slug,
  );

  if (!blog) {

    notFound();

  }

  const BlogComponent =
    blog.component;

  return (

    <BlogComponent />

  );

}