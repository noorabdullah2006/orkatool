import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "success"
    | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth && "button--full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}