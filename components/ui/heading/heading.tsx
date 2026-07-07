import type { HeadingProps } from "./heading.types";

export default function Heading({
  children,
  level = 2,
  align = "left",
  color = "default",
  className = "",
  ...props
}: HeadingProps) {
  const classes = [
    "heading",
    `heading--h${level}`,
    `heading--${align}`,
    `heading--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  switch (level) {
    case 1:
      return (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      );

    case 2:
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      );

    case 3:
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      );

    case 4:
      return (
        <h4 className={classes} {...props}>
          {children}
        </h4>
      );

    case 5:
      return (
        <h5 className={classes} {...props}>
          {children}
        </h5>
      );

    case 6:
      return (
        <h6 className={classes} {...props}>
          {children}
        </h6>
      );

    default:
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      );
  }
}