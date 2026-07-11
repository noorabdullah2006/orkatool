import Link from "next/link";

import Container from "@/components/layout/container";

import LatestArticlesHeader from "./latest-articles-header";
import LatestArticlesGrid from "./latest-articles-grid";

import {
  latestArticlesConfig,
} from "./latest-articles-config";

export default function LatestArticles() {

  return (

    <section className="latest-articles">

      <Container>

        <LatestArticlesHeader />

        <LatestArticlesGrid />

        {latestArticlesConfig.showViewAll && (

          <div className="latest-articles-actions">

            <Link
              href={latestArticlesConfig.viewAllHref}
              className="latest-articles-button"
            >
              {latestArticlesConfig.viewAllText}
            </Link>

          </div>

        )}

      </Container>

    </section>

  );

}