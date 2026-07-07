import type { SwitchProps } from "./switch.types";

export default function Switch({
  label,
  helperText,
  error,
  className = "",
  id,
  ...props
}: SwitchProps) {

  const classes = [
    "switch",
    error ? "switch--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="switch-wrapper">

      <label
        htmlFor={id}
        className="switch-label"
      >

        <input
          id={id}
          type="checkbox"
          className={classes}
          {...props}
        />

        <span className="switch-track">
          <span className="switch-thumb" />
        </span>

        {label && (
          <span className="switch-text">
            {label}
          </span>
        )}

      </label>

      {helperText && !error && (
        <p className="switch-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p className="switch-error">
          {error}
        </p>
      )}

    </div>
  );
}