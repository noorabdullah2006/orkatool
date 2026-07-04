import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

export default function Input({
  label,
  helperText,
  error,
  fullWidth = false,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputClasses = [
    "input",
    fullWidth && "input--full",
    error && "input--error",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="input-group">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={inputClasses}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${id}-error`
            : helperText
            ? `${id}-helper`
            : undefined
        }
        {...props}
      />

      {helperText && !error && (
        <p
          id={`${id}-helper`}
          className="input-helper"
        >
          {helperText}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="input-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}