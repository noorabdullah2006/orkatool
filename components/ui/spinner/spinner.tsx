import type { SpinnerProps } from "./spinner.types";

export default function Spinner({
  size = "md",
  color = "primary",
  className = "",
}: SpinnerProps) {
  const classes = [
    "spinner",
    `spinner--${size}`,
    `spinner--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      aria-hidden="true"
    />
  );
}