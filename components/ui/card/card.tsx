import type { CardProps } from "./card.types";

export default function Card({
  children,
  hover = false,
  bordered = true,
  padding = "md",
  className = "",
  ...props
}: CardProps) {

  const classes = [
    "card",
    hover && "card--hover",
    bordered && "card--bordered",
    `card--padding-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
}