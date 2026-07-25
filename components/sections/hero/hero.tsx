import { heroContent } from "./hero-data";

import HeroBadge from "./hero-badges";
import HeroActions from "./hero-actions";
import HeroStats from "./hero-stats";
import HeroPreview from "./hero-preview";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import { getAllTools } from "@/content/tools";

export default function Hero() {
  const publishedToolsCount = getAllTools().filter((t) => t.published).length;

  const dynamicStats = heroContent.stats.map((stat, i) => {
    if (i === 0) {
      return {
        ...stat,
        value: `${publishedToolsCount}+`,
      };
    }
    return stat;
  });

  return (
    <Section className="hero" ariaLabel="Hero Introduction and Stats">
      <Container>
        <div className="hero-layout">

          {/* Left Content */}
          <div className="hero-content">

            <HeroBadge
              text={heroContent.badge}
            />

            <h1 className="hero-title">
              Fast, Free & Secure <span className="hero-title-highlight">Online Tools</span>
            </h1>

            <p className="hero-description">
              {heroContent.description}
            </p>

            <HeroActions
              buttons={heroContent.buttons}
            />

            <HeroStats
              stats={dynamicStats}
            />

          </div>

          {/* Right Preview */}
          <HeroPreview
            cards={heroContent.previewCards}
          />

        </div>
      </Container>
    </Section>
  );
}