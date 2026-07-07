import type { IconProps } from "./icon.types";

export default function Icon({
  icon: LucideIcon,
  size = "md",
  color = "default",
  strokeWidth = 2,
  className = "",
  ...props
}: IconProps) {

  const classes = [
    "icon",
    `icon--${size}`,
    `icon--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      aria-hidden="true"
      {...props}
    >
      <LucideIcon strokeWidth={strokeWidth} />
    </span>
  );
}