import type { AlertProps } from "./alert.types";

export default function Alert({
  title,
  children,
  variant = "info",
  className = "",
  ...props
}: AlertProps) {

  const classes = [
    "alert",
    `alert--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      role="alert"
      {...props}
    >

      {title && (
        <h4 className="alert-title">
          {title}
        </h4>
      )}

      {children && (
        <div className="alert-content">
          {children}
        </div>
      )}

    </div>
  );
}