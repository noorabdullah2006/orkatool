import {
  blogConfig,
} from "./blog-config";

export default function BlogEmpty() {

  return (

    <div className="blog-empty">

      <h2 className="blog-empty-title">

        {blogConfig.emptyTitle}

      </h2>

      <p className="blog-empty-description">

        {blogConfig.emptyDescription}

      </p>

    </div>

  );

}