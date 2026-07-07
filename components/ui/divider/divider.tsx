import type { DividerProps } from "./divider.types";

export default function Divider({
  orientation = "horizontal",
  spacing = "md",
  className = "",
  ...props
}: DividerProps) {

  const classes = [
    "divider",
    `divider--${orientation}`,
    `divider--${spacing}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <hr
      className={classes}
      {...props}
    />
  );
}