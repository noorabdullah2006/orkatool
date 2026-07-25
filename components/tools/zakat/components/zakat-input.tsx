"use client";

import { useState } from "react";

type ZakatInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  symbol: string;
  placeholder?: string;
  tooltipText?: string;
  helperText?: string;
};

export function ZakatInput({
  label,
  value,
  onChange,
  symbol,
  placeholder = "0",
  tooltipText,
  helperText,
}: ZakatInputProps) {
  const [displayValue, setDisplayValue] = useState(value === 0 ? "" : value.toLocaleString("en-US"));
  const [prevValue, setPrevValue] = useState(value);

  // Sync prop changes during render to avoid useEffect warnings
  if (value !== prevValue) {
    setPrevValue(value);
    setDisplayValue(value === 0 ? "" : value.toLocaleString("en-US"));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    
    // Allow only digits
    const cleanVal = rawVal.replace(/[^0-9]/g, "");
    const parsed = cleanVal === "" ? 0 : parseInt(cleanVal, 10);

    onChange(parsed);
    setDisplayValue(cleanVal === "" ? "" : parsed.toLocaleString("en-US"));
  };

  return (
    <div className="zakat-field-wrapper form-group">
      <div className="zakat-field-header">
        <label className="form-label">{label}</label>
        {tooltipText && (
          <div className="tooltip-container">
            <span className="tooltip-trigger" aria-label="Info">ⓘ</span>
            <div className="tooltip-content">{tooltipText}</div>
          </div>
        )}
      </div>
      <div className="input-with-symbol">
        <span className="input-symbol-prefix">{symbol}</span>
        <input
          type="text"
          className="form-input text-left"
          style={{ paddingLeft: "2.5rem" }}
          value={displayValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
      {helperText && <span className="zakat-helper-text">{helperText}</span>}
    </div>
  );
}
