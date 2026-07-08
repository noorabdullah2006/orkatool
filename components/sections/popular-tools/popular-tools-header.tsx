interface PopularToolsHeaderProps {
  badge: string;

  title: string;

  description: string;
}

export default function PopularToolsHeader({
  badge,
  title,
  description,
}: PopularToolsHeaderProps) {
  return (
    <div className="popular-tools-header">

      <span className="popular-tools-badge">
        {badge}
      </span>

      <h2 className="popular-tools-title">
        {title}
      </h2>

      <p className="popular-tools-description">
        {description}
      </p>

    </div>
  );
}