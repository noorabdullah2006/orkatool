import type { CardSectionProps } from "./card.types";

export default function CardHeader({
  children,
  className = "",
  ...props
}: CardSectionProps) {

  return (
    <div
      className={`card-header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}