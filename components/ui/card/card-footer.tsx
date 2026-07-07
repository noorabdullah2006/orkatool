import type { CardSectionProps } from "./card.types";

export default function CardFooter({
  children,
  className = "",
  ...props
}: CardSectionProps) {

  return (
    <div
      className={`card-footer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}