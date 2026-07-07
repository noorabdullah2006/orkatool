import Spinner from "../spinner";

import ButtonIcon from "./button-icon";

import type { ButtonProps } from "./button.types";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--full" : "",
    loading ? "button--loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner
            size="sm"
            color={variant === "primary" ? "white" : "primary"}
          />

          <span className="button-label">
            {children}
          </span>
        </>
      ) : (
        <>
          {leftIcon && (
            <ButtonIcon>
              {leftIcon}
            </ButtonIcon>
          )}

          <span className="button-label">
            {children}
          </span>

          {rightIcon && (
            <ButtonIcon>
              {rightIcon}
            </ButtonIcon>
          )}
        </>
      )}
    </button>
  );
}