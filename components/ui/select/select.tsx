import type { SelectProps } from "./select.types";

export default function Select({
  label,
  helperText,
  error,
  options,
  placeholder,
  fullWidth = false,
  className = "",
  id,
  ...props
}: SelectProps) {

  const classes = [
    "select",
    fullWidth ? "select--full" : "",
    error ? "select--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="select-wrapper">

      {label && (
        <label
          htmlFor={id}
          className="select-label"
        >
          {label}
        </label>
      )}

      <div className="select-field">

        <select
          id={id}
          className={classes}
          {...props}
        >

          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}

        </select>

      </div>

      {helperText && !error && (
        <p className="select-helper">
          {helperText}
        </p>
      )}

      {error && (
        <p className="select-error">
          {error}
        </p>
      )}

    </div>
  );
}