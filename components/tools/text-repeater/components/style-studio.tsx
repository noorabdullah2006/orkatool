"use client";

import React from "react";
import { Star } from "lucide-react";
import { STYLES_LIST, DECORATIONS_LIST, applyTextStyle } from "../utils";
import { UnifiedFavorite } from "./template-library";

interface StyleStudioProps {
  stylesOpen: boolean;
  onToggleStyles: () => void;
  decorationsOpen: boolean;
  onToggleDecorations: () => void;
  inputText: string;
  favoritesNew: UnifiedFavorite[];
  onToggleFavorite: (item: Omit<UnifiedFavorite, "id">) => void;
  handleCopy: (customText?: string) => Promise<void>;
  handleInputMutation: (newVal: string) => void;
}

export function StyleStudio({
  stylesOpen,
  onToggleStyles,
  decorationsOpen,
  onToggleDecorations,
  inputText,
  favoritesNew,
  onToggleFavorite,
  handleCopy,
  handleInputMutation,
}: StyleStudioProps) {
  const previewInput = inputText || "OrkaTool";

  return (
    <>
      {/* TEXT STYLE STUDIO CARD */}
      <div className="calculator-card" style={{ padding: "20px" }}>
        <button onClick={onToggleStyles} className="accordion-header" type="button">
          <div className="accordion-title">
            <span>✨</span> Text Style Studio
          </div>
          <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", fontWeight: "bold" }}>
            {stylesOpen ? "▲ Collapse" : "▼ Expand"}
          </span>
        </button>

        {stylesOpen && (
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px", overflowX: "auto", borderBottom: "1px solid var(--color-border)", paddingBottom: "6px" }}>
              {["All Styles", "⭐ Favorites"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    fontWeight: "700",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              className="no-scrollbar"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxHeight: "350px",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              {STYLES_LIST.map((style) => {
                const previewText = applyTextStyle(previewInput, style.id);
                const isFav = favoritesNew.some((f) => f.type === "style" && f.name === style.name);
                return (
                  <div key={style.id} className="style-hover-row studio-row-container">
                    <div className="studio-text-preview">
                      <span style={{ fontSize: "0.7rem", color: "var(--color-text-secondary)", fontWeight: "bold", display: "block" }}>
                        {style.name}
                      </span>
                      <span>{previewText}</span>
                    </div>

                    <div className="studio-btn-row">
                      <button
                        onClick={() => onToggleFavorite({ type: "style", name: style.name, content: previewText })}
                        type="button"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
                      >
                        <Star size={11} fill={isFav ? "#eab308" : "none"} color={isFav ? "#eab308" : "#ccc"} />
                      </button>
                      <button
                        onClick={() => handleCopy(previewText)}
                        type="button"
                        style={{
                          height: "24px",
                          paddingInline: "8px",
                          fontSize: "0.7rem",
                          borderRadius: "4px",
                          border: "1px solid var(--color-border)",
                          background: "var(--color-surface)",
                          cursor: "pointer",
                        }}
                      >
                        Copy
                      </button>
                      <button
                        onClick={() => handleInputMutation(previewText)}
                        type="button"
                        style={{
                          height: "24px",
                          paddingInline: "8px",
                          fontSize: "0.7rem",
                          borderRadius: "4px",
                          border: "1px solid var(--color-border)",
                          background: "var(--color-surface)",
                          cursor: "pointer",
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* FANCY TEXT DECORATIONS CARD */}
      <div className="calculator-card" style={{ padding: "20px" }}>
        <button onClick={onToggleDecorations} className="accordion-header" type="button">
          <div className="accordion-title">
            <span>🌸</span> Fancy Text Decorations
          </div>
          <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", fontWeight: "bold" }}>
            {decorationsOpen ? "▲ Collapse" : "▼ Expand"}
          </span>
        </button>

        {decorationsOpen && (
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              className="no-scrollbar"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxHeight: "350px",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              {DECORATIONS_LIST.map((dec, idx) => {
                const decoratedVal = `${dec.prefix}${previewInput}${dec.suffix}`;
                const isFav = favoritesNew.some((f) => f.type === "decoration" && f.name === `dec-${idx}`);
                return (
                  <div key={idx} className="style-hover-row studio-row-container">
                    <span className="studio-text-preview" style={{ fontWeight: "700" }}>
                      {decoratedVal}
                    </span>

                    <div className="studio-btn-row">
                      <button
                        onClick={() =>
                          onToggleFavorite({ type: "decoration", name: `dec-${idx}`, content: decoratedVal })
                        }
                        type="button"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
                      >
                        <Star size={11} fill={isFav ? "#eab308" : "none"} color={isFav ? "#eab308" : "#ccc"} />
                      </button>
                      <button
                        onClick={() => handleCopy(decoratedVal)}
                        type="button"
                        style={{
                          height: "24px",
                          paddingInline: "8px",
                          fontSize: "0.7rem",
                          borderRadius: "4px",
                          border: "1px solid var(--color-border)",
                          background: "var(--color-surface)",
                          cursor: "pointer",
                        }}
                      >
                        Copy
                      </button>
                      <button
                        onClick={() => handleInputMutation(decoratedVal)}
                        type="button"
                        style={{
                          height: "24px",
                          paddingInline: "8px",
                          fontSize: "0.7rem",
                          borderRadius: "4px",
                          border: "1px solid var(--color-border)",
                          background: "var(--color-surface)",
                          cursor: "pointer",
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
