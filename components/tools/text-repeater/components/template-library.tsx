"use client";

import React from "react";
import { Search, Star } from "lucide-react";
import { TEMPLATE_CATEGORIES } from "../utils";

export type UnifiedFavorite = {
  id: string;
  type: "template" | "emoji" | "style" | "decoration";
  name?: string;
  input?: string;
  char?: string;
  separator?: string;
  count?: number;
  content?: string;
};

interface PresetItem {
  id: string;
  name: string;
  inputText: string;
  repeatCount: number;
  separator: string;
}

interface TemplateLibraryProps {
  isOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchVal: string;
  setSearchVal: (val: string) => void;
  favoritesNew: UnifiedFavorite[];
  recentFavoritesList: PresetItem[];
  onToggleFavorite: (item: Omit<UnifiedFavorite, "id">) => void;
  onSelectTemplate: (input: string, sep: string, count: number, name: string) => void;
}

export function TemplateLibrary({
  isOpen,
  onToggle,
  activeTab,
  setActiveTab,
  searchVal,
  setSearchVal,
  favoritesNew,
  recentFavoritesList,
  onToggleFavorite,
  onSelectTemplate,
}: TemplateLibraryProps) {
  const currentTemplates = TEMPLATE_CATEGORIES[activeTab] || [];

  const favoritesOfTab = (type: "template" | "emoji" | "style" | "decoration") =>
    favoritesNew.filter((f) => f.type === type);

  return (
    <div className="calculator-card" style={{ padding: "20px" }}>
      <button onClick={onToggle} className="accordion-header" type="button">
        <div className="accordion-title">
          <span>📋</span> Template Library
        </div>
        <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", fontWeight: "bold" }}>
          {isOpen ? "▲ Collapse" : "▼ Expand"}
        </span>
      </button>

      {isOpen && (
        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ position: "relative", width: "100%" }}>
            <Search
              size={13}
              style={{
                position: "absolute",
                left: "9px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--color-text-secondary)",
              }}
            />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              style={{
                height: "30px",
                paddingLeft: "28px",
                fontSize: "0.78rem",
                width: "100%",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
              }}
            />
          </div>

          <div
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              paddingBottom: "8px",
              borderBottom: "1px solid var(--color-border)",
              scrollbarWidth: "none",
            }}
          >
            {Array.from(new Set([...Object.keys(TEMPLATE_CATEGORIES), "Favorites", "Recent"])).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                type="button"
                style={{
                  background: "none",
                  fontWeight: "700",
                  fontSize: "0.78rem",
                  border: "none",
                  cursor: "pointer",
                  paddingBottom: "6px",
                  color: activeTab === cat ? "var(--color-primary)" : "var(--color-text-secondary)",
                  borderBottom: activeTab === cat ? "2px solid var(--color-primary)" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {cat === "Favorites" ? "⭐ Favorites" : cat === "Recent" ? "⏱️ Recent" : cat}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              maxHeight: "150px",
              overflowY: "auto",
              padding: "4px",
            }}
          >
            {searchVal ? (
              Object.keys(TEMPLATE_CATEGORIES)
                .flatMap((cat) =>
                  TEMPLATE_CATEGORIES[cat].filter((t) =>
                    t.name.toLowerCase().includes(searchVal.toLowerCase())
                  )
                )
                .map((tpl, i) => {
                  const isFav = favoritesNew.some((f) => f.type === "template" && f.name === tpl.name);
                  return (
                    <div
                      key={i}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "20px",
                        padding: "4px 10px",
                      }}
                    >
                      <button
                        onClick={() => onSelectTemplate(tpl.input, tpl.separator, tpl.count, tpl.name)}
                        type="button"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontWeight: "700",
                          fontSize: "0.78rem",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {tpl.name}
                      </button>
                      <button
                        onClick={() =>
                          onToggleFavorite({
                            type: "template",
                            name: tpl.name,
                            input: tpl.input,
                            separator: tpl.separator,
                            count: tpl.count,
                          })
                        }
                        type="button"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "0 2px" }}
                      >
                        <Star
                          size={11}
                          fill={isFav ? "#eab308" : "none"}
                          color={isFav ? "#eab308" : "var(--color-text-secondary)"}
                        />
                      </button>
                    </div>
                  );
                })
            ) : activeTab === "Favorites" ? (
              favoritesOfTab("template").map((tpl, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "20px",
                    padding: "4px 10px",
                  }}
                >
                  <button
                    onClick={() =>
                      onSelectTemplate(tpl.input || "", tpl.separator || " ", tpl.count || 10, tpl.name || "")
                    }
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "0.78rem",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {tpl.name}
                  </button>
                  <button
                    onClick={() =>
                      onToggleFavorite({
                        type: "template",
                        name: tpl.name,
                        input: tpl.input,
                        separator: tpl.separator,
                        count: tpl.count,
                      })
                    }
                    type="button"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "0 2px" }}
                  >
                    <Star size={11} fill="#eab308" color="#eab308" />
                  </button>
                </div>
              ))
            ) : activeTab === "Recent" ? (
              recentFavoritesList.map((fav, i) => (
                <button
                  key={i}
                  onClick={() => onSelectTemplate(fav.inputText, fav.separator, fav.repeatCount, fav.name)}
                  type="button"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "20px",
                    padding: "6px 12px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "0.78rem",
                  }}
                >
                  {fav.name}
                </button>
              ))
            ) : (
              currentTemplates.map((tpl, i) => {
                const isFav = favoritesNew.some((f) => f.type === "template" && f.name === tpl.name);
                return (
                  <div
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "20px",
                      padding: "4px 10px",
                    }}
                  >
                    <button
                      onClick={() => onSelectTemplate(tpl.input, tpl.separator, tpl.count, tpl.name)}
                      type="button"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "700",
                        fontSize: "0.78rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {tpl.name}
                    </button>
                    <button
                      onClick={() =>
                        onToggleFavorite({
                          type: "template",
                          name: tpl.name,
                          input: tpl.input,
                          separator: tpl.separator,
                          count: tpl.count,
                        })
                      }
                      type="button"
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "0 2px" }}
                    >
                      <Star
                        size={11}
                        fill={isFav ? "#eab308" : "none"}
                        color={isFav ? "#eab308" : "#888"}
                      />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
