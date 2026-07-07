import type { CheckboxProps } from "./checkbox.types";

export default function Checkbox({
  label,
  helperText,
  error,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const classes = [
    "checkbox",
    error ? "checkbox--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="checkbox-wrapper">

      <label
        htmlFor={id}
        className="checkbox-label"
      >
        <input
          id={id}
          type="checkbox"
          className={classes}
          {...props}
        />

        <span className="checkbox-box" />

        {label && (
          <span className="checkbox-text">
            {label}
          </span>
        )}
      </label>

      {helperText && !error && (
        <p className="checkbox-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p className="checkbox-error">
          {error}
        </p>
      )}

    </div>
  );
}