import type { RadioProps } from "./radio.types";

export default function Radio({
  label,
  helperText,
  error,
  className = "",
  id,
  ...props
}: RadioProps) {

  const classes = [
    "radio",
    error ? "radio--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="radio-wrapper">

      <label
        htmlFor={id}
        className="radio-label"
      >

        <input
          id={id}
          type="radio"
          className={classes}
          {...props}
        />

        <span className="radio-circle" />

        {label && (
          <span className="radio-text">
            {label}
          </span>
        )}

      </label>

      {helperText && !error && (
        <p className="radio-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p className="radio-error">
          {error}
        </p>
      )}

    </div>
  );
}