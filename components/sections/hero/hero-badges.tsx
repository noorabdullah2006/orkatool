interface HeroBadgesProps {
  text: string;
}

export default function HeroBadges({
  text,
}: HeroBadgesProps) {
  return (
    <div className="hero-badge">
      <span className="hero-badge-icon">
        🚀
      </span>

      <span className="hero-badge-text">
        {text}
      </span>
    </div>
  );
}