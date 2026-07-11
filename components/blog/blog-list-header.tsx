import {
  blogConfig,
} from "./blog-config";

export default function BlogListHeader() {

  return (

    <header className="blog-list-header">

      <h1 className="blog-list-title">

        {blogConfig.title}

      </h1>

      <p className="blog-list-description">

        {blogConfig.description}

      </p>

    </header>

  );

}