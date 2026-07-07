import type { TextareaProps } from "./textarea.types";

export default function Textarea({
  label,
  helperText,
  error,
  fullWidth = false,
  resize = true,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const classes = [
    "textarea",
    fullWidth ? "textarea--full" : "",
    error ? "textarea--error" : "",
    !resize ? "textarea--no-resize" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="textarea-wrapper">

      {label && (
        <label
          htmlFor={id}
          className="textarea-label"
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        className={classes}
        {...props}
      />

      {helperText && !error && (
        <p className="textarea-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p className="textarea-error">
          {error}
        </p>
      )}

    </div>
  );
}