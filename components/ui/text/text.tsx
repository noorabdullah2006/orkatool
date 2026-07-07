import type { TextProps } from "./text.types";

export default function Text({
  children,
  variant = "body",
  color = "default",
  align = "left",
  className = "",
  ...props
}: TextProps) {

  const classes = [
    "text",
    `text--${variant}`,
    `text--${color}`,
    `text--${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <p
      className={classes}
      {...props}
    >
      {children}
    </p>
  );
}