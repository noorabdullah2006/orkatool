import type { InputProps } from "./input.types";

export default function Input({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  id,
  ...props
}: InputProps) {
  const classes = [
    "input",
    fullWidth ? "input--full" : "",
    error ? "input--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-wrapper">

      {label && (
        <label
          htmlFor={id}
          className="input-label"
        >
          {label}
        </label>
      )}

      <div className="input-field">

        {leftIcon && (
          <span className="input-icon input-icon--left">
            {leftIcon}
          </span>
        )}

        <input
          id={id}
          className={classes}
          {...props}
        />

        {rightIcon && (
          <span className="input-icon input-icon--right">
            {rightIcon}
          </span>
        )}

      </div>

      {helperText && !error && (
        <p className="input-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p className="input-error">
          {error}
        </p>
      )}

    </div>
  );
}