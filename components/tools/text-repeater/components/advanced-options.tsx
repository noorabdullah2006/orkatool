"use client";

import React from "react";

interface AdvancedOptionsProps {
  isOpen: boolean;
  onToggle: () => void;
  casingOption: string;
  setCasingOption: (val: string) => void;
  separator: string;
  setSeparator: (val: string) => void;
  customSeparator: string;
  setCustomSeparator: (val: string) => void;
  autoTrim: boolean;
  setAutoTrim: (val: boolean) => void;
  removeEmptyLines: boolean;
  setRemoveEmptyLines: (val: boolean) => void;
  duplicateLineFilter: boolean;
  setDuplicateLineFilter: (val: boolean) => void;
  lineNumbering: boolean;
  setLineNumbering: (val: boolean) => void;
}

export function AdvancedOptions({
  isOpen,
  onToggle,
  casingOption,
  setCasingOption,
  separator,
  setSeparator,
  customSeparator,
  setCustomSeparator,
  autoTrim,
  setAutoTrim,
  removeEmptyLines,
  setRemoveEmptyLines,
  duplicateLineFilter,
  setDuplicateLineFilter,
  lineNumbering,
  setLineNumbering,
}: AdvancedOptionsProps) {
  return (
    <div className="calculator-card" style={{ padding: "20px" }}>
      <button onClick={onToggle} className="accordion-header" type="button">
        <div className="accordion-title">
          <span>🔧</span> Advanced Options & Filters
        </div>
        <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", fontWeight: "bold" }}>
          {isOpen ? "▲ Collapse" : "▼ Expand"}
        </span>
      </button>

      {isOpen && (
        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Formatting Group */}
          <div className="sub-card-option">
            <span className="control-group-title">🏷️ Case & Formatting</span>
            <div className="form-group" style={{ margin: 0 }}>
              <select
                value={casingOption}
                onChange={(e) => setCasingOption(e.target.value)}
                className="form-select text-left"
                style={{ height: "40px", borderRadius: "8px", width: "100%" }}
              >
                <option value="original">Original Casing</option>
                <option value="uppercase">UPPERCASE</option>
                <option value="lowercase">lowercase</option>
              </select>
            </div>
          </div>

          {/* Separator Group */}
          <div className="sub-card-option">
            <span className="control-group-title">🔗 Separator Settings</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                { key: " ", label: "Space" },
                { key: "\n", label: "New Line" },
                { key: ",", label: "Comma" },
                { key: "custom", label: "Custom Text" },
              ].map((sep) => {
                const check = separator === sep.key;
                return (
                  <button
                    key={sep.key}
                    onClick={() => setSeparator(sep.key)}
                    style={{
                      padding: "8px 12px",
                      textAlign: "left",
                      border: check ? "2px solid var(--color-primary)" : "1px solid var(--color-border)",
                      background: check
                        ? "var(--color-bg-primary-subtle, rgba(37,99,235,0.04))"
                        : "var(--color-surface)",
                      color: "var(--color-text-primary)",
                      fontWeight: "700",
                      fontSize: "0.8rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    type="button"
                  >
                    {sep.label}
                  </button>
                );
              })}
            </div>

            {separator === "custom" && (
              <input
                type="text"
                placeholder="Insert custom separator text..."
                value={customSeparator}
                onChange={(e) => setCustomSeparator(e.target.value)}
                className="form-input"
                style={{ height: "38px", borderRadius: "8px", marginTop: "8px" }}
              />
            )}
          </div>

          {/* Filters Group */}
          <div className="sub-card-option">
            <span className="control-group-title">🧹 Content Filters & Indexes</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" checked={autoTrim} onChange={(e) => setAutoTrim(e.target.checked)} />
                Auto Trim space blocks
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={removeEmptyLines}
                  onChange={(e) => setRemoveEmptyLines(e.target.checked)}
                />
                Remove blank lines
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={duplicateLineFilter}
                  onChange={(e) => setDuplicateLineFilter(e.target.checked)}
                />
                Filter duplicate lines
              </label>

              {separator === "\n" && (
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.8rem",
                    color: "var(--color-text-primary)",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={lineNumbering}
                    onChange={(e) => setLineNumbering(e.target.checked)}
                  />
                  Enable line indexes numbering
                </label>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
