import type { HeroStat } from "./hero.types";

interface HeroStatsProps {
  stats: HeroStat[];
}

export default function HeroStats({
  stats,
}: HeroStatsProps) {
  return (
    <div className="hero-stats">
      {stats.map((item) => (
        <div
          key={item.label}
          className="hero-stat"
        >
          <h3 className="hero-stat-value">
            {item.value}
          </h3>

          <p className="hero-stat-label">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}