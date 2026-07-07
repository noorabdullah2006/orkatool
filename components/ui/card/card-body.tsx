import type { CardSectionProps } from "./card.types";

export default function CardBody({
  children,
  className = "",
  ...props
}: CardSectionProps) {

  return (
    <div
      className={`card-body ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}