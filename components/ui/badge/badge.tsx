import type { BadgeProps } from "./badge.types";

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = false,
  className = "",
  ...props
}: BadgeProps) {

  const classes = [
    "badge",
    `badge--${variant}`,
    `badge--${size}`,
    rounded ? "badge--rounded" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      {...props}
    >
      {children}
    </span>
  );
}