import type { HeroButton } from "./hero.types";

interface HeroActionsProps {
  buttons: HeroButton[];
}

export default function HeroActions({
  buttons,
}: HeroActionsProps) {
  return (
    <div className="hero-actions">
      {buttons.map((button) => (
        <a
          key={button.href}
          href={button.href}
          className={`hero-button hero-button-${button.variant}`}
        >
          {button.label}
        </a>
      ))}
    </div>
  );
}