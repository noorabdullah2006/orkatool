import { heroContent } from "./hero-data";

import HeroBadge from "./hero-badges";
import HeroActions from "./hero-actions";
import HeroStats from "./hero-stats";
import HeroPreview from "./hero-preview";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export default function Hero() {
  return (
    <Section className="hero">
      <Container>
        <div className="hero-layout">

          {/* Left Content */}
          <div className="hero-content">

            <HeroBadge
              text={heroContent.badge}
            />

            <h1 className="hero-title">
              {heroContent.title}
            </h1>

            <p className="hero-description">
              {heroContent.description}
            </p>

            <HeroActions
              buttons={heroContent.buttons}
            />

            <HeroStats
              stats={heroContent.stats}
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