"use client";

import React from "react";
import { Search } from "lucide-react";
import { EMOJI_DB, getEmojiMatches } from "../utils";
import { UnifiedFavorite } from "./template-library";

interface EmojiKeyboardProps {
  isOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchVal: string;
  setSearchVal: (val: string) => void;
  favoritesNew: UnifiedFavorite[];
  recentEmojis: string[];
  topEmojis: string[];
  onEmojiClick: (em: string) => void;
  onToggleFavorite: (item: Omit<UnifiedFavorite, "id">) => void;
}

export function EmojiKeyboard({
  isOpen,
  onToggle,
  activeTab,
  setActiveTab,
  searchVal,
  setSearchVal,
  favoritesNew,
  recentEmojis,
  topEmojis,
  onEmojiClick,
  onToggleFavorite,
}: EmojiKeyboardProps) {
  const filteredEmojis = searchVal
    ? getEmojiMatches(searchVal)
    : EMOJI_DB[activeTab] || [];

  const favoritesOfTab = (type: "template" | "emoji" | "style" | "decoration") =>
    favoritesNew.filter((f) => f.type === type);

  return (
    <div className="calculator-card" style={{ padding: "20px" }}>
      <button onClick={onToggle} className="accordion-header" type="button">
        <div className="accordion-title">
          <span>😃</span> Emoji Keyboard
        </div>
        <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", fontWeight: "bold" }}>
          {isOpen ? "▲ Collapse" : "▼ Expand"}
        </span>
      </button>

      {isOpen && (
        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ position: "relative", width: "100%" }}>
            <Search
              size={12}
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--color-text-secondary)",
              }}
            />
            <input
              type="text"
              placeholder="Search Emojis"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              style={{
                height: "26px",
                paddingLeft: "24px",
                fontSize: "0.75rem",
                width: "100%",
                borderRadius: "5px",
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
            {["Recent", "Top 12", "Favorites", ...Object.keys(EMOJI_DB)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  paddingBottom: "4px",
                  fontSize: "0.78rem",
                  fontWeight: "700",
                  color: activeTab === cat ? "var(--color-primary)" : "var(--color-text-secondary)",
                  borderBottom: activeTab === cat ? "2px solid var(--color-primary)" : "2px solid transparent",
                }}
              >
                {cat === "Recent"
                  ? "⏱️ Recent"
                  : cat === "Top 12"
                  ? "🔥 Trending"
                  : cat === "Favorites"
                  ? "⭐ Favorites"
                  : cat}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(36px, 1fr))",
              gap: "6px",
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {activeTab === "Recent" ? (
              recentEmojis.map((em) => (
                <div key={em} style={{ position: "relative" }}>
                  <button
                    onClick={() => onEmojiClick(em)}
                    type="button"
                    className="emoji-btn"
                    style={{
                      width: "100%",
                      height: "36px",
                      fontSize: "1.2rem",
                      background: "none",
                      border: "1px solid var(--color-border)",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "transform 0.1s",
                    }}
                  >
                    {em}
                  </button>
                  <button
                    onClick={() => onToggleFavorite({ type: "emoji", char: em })}
                    type="button"
                    style={{
                      position: "absolute",
                      right: "-1px",
                      top: "-1px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    ★
                  </button>
                </div>
              ))
            ) : activeTab === "Top 12" ? (
              topEmojis.map((em) => (
                <button
                  key={em}
                  onClick={() => onEmojiClick(em)}
                  type="button"
                  className="emoji-btn"
                  style={{
                    height: "36px",
                    fontSize: "1.2rem",
                    background: "none",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "transform 0.1s",
                  }}
                >
                  {em}
                </button>
              ))
            ) : activeTab === "Favorites" ? (
              favoritesOfTab("emoji").map((f) => (
                <button
                  key={f.char}
                  onClick={() => onEmojiClick(f.char || "")}
                  type="button"
                  className="emoji-btn"
                  style={{
                    height: "36px",
                    fontSize: "1.2rem",
                    background: "none",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "transform 0.1s",
                  }}
                >
                  {f.char}
                </button>
              ))
            ) : (
              filteredEmojis.map((em) => {
                const isFav = favoritesNew.some((f) => f.type === "emoji" && f.char === em);
                return (
                  <div key={em} style={{ position: "relative" }}>
                    <button
                      onClick={() => onEmojiClick(em)}
                      type="button"
                      className="emoji-btn"
                      style={{
                        width: "100%",
                        height: "36px",
                        fontSize: "1.2rem",
                        background: "none",
                        border: "1px solid var(--color-border)",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "transform 0.1s",
                      }}
                    >
                      {em}
                    </button>
                    <button
                      onClick={() => onToggleFavorite({ type: "emoji", char: em })}
                      type="button"
                      style={{
                        position: "absolute",
                        right: "-2px",
                        top: "-2px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "9px",
                        color: isFav ? "#eab308" : "#ccc",
                      }}
                    >
                      ⭐
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
