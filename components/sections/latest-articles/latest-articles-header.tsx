import { latestArticlesConfig } from "./latest-articles-config";

export default function LatestArticlesHeader() {

  return (

    <header className="latest-articles-header">

      <h2 className="latest-articles-title">
        {latestArticlesConfig.title}
      </h2>

      <p className="latest-articles-description">
        {latestArticlesConfig.description}
      </p>

    </header>

  );

}