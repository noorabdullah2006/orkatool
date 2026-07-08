import type { HeroCard } from "./hero.types";

interface HeroPreviewProps {
  cards: HeroCard[];
}

export default function HeroPreview({
  cards,
}: HeroPreviewProps) {
  return (
    <div className="hero-preview">
      <div className="hero-preview-grid">
        {cards.map((card) => (
          <article
            key={card.title}
            className="hero-preview-card"
          >
            <div className="hero-preview-icon">
              {card.icon}
            </div>

            <div className="hero-preview-content">
              <h3 className="hero-preview-title">
                {card.title}
              </h3>

              <p className="hero-preview-subtitle">
                {card.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}