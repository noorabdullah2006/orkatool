"use client";

import { FileText, Layers, Hash, Activity, Clock, Cpu, Clipboard, Star, History, Trash2, Download } from "lucide-react";

export type Stats = {
  charCount: number;
  wordCount: number;
  lineCount: number;
  estimatedSizeKb: number;
  estimatedClipboardKb: number;
  estimatedMemoryMb: number;
};

export type HistoryItem = {
  id: string;
  timestamp: string;
  inputText: string;
  repeatCount: number;
  separator: string;
  repeatMode: string;
  casingOption: string;
};

export type FavoriteItem = {
  id: string;
  name: string;
  inputText: string;
  repeatCount: number;
  separator: string;
};

type Props = {
  outputStats: Stats;
  repeatCount: number;
  separator: string;
  generationTimeMs: number;
  clipboardReady: boolean;

  // Smart History
  historyList: HistoryItem[];
  onRestoreHistory: (item: HistoryItem) => void;
  onExportHistory: () => void;

  // Favorites
  favoritesList: FavoriteItem[];
  onRestoreFavorite: (item: FavoriteItem) => void;
  onDeleteFavorite: (id: string) => void;
  onSaveFavorite: () => void;
};

export default function TextRepeaterSidebar({
  outputStats,
  repeatCount,
  separator,
  generationTimeMs,
  clipboardReady,
  historyList,
  onRestoreHistory,
  onExportHistory,
  favoritesList,
  onRestoreFavorite,
  onDeleteFavorite,
  onSaveFavorite
}: Props) {
  const getSeparatorLabel = (sep: string) => {
    switch (sep) {
      case " ":
        return "Space (\\s)";
      case "\n":
        return "New Line (\\n)";
      case ",":
        return "Comma (,)";
      default:
        return sep === "custom" || sep.length > 5 ? "Custom" : `Custom (${sep})`;
    }
  };

  const formatSize = (kb: number) => {
    if (kb >= 1024) {
      return `${(kb / 1024).toFixed(2)} MB`;
    }
    return `${kb.toFixed(2)} KB`;
  };

  return (
    <aside 
      className="calculator-sidebar" 
      aria-label="Text Repeater workspace panel"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* Sticky Workspace Summary */}
      <div className="calculator-card" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Activity className="text-primary" size={22} style={{ color: "var(--color-primary)" }} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: "800", margin: 0, color: "var(--color-text-primary)" }}>
              Workspace Summary
            </h3>
          </div>
          <button
            onClick={onSaveFavorite}
            type="button"
            className="btn btn-outline"
            style={{ padding: "6px 10px", height: "30px", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "4px", borderRadius: "6px" }}
            title="Save current config to favorites"
          >
            <Star size={12} fill="#eab308" color="#eab308" /> Save
          </button>
        </div>

        <div style={{ paddingBlock: "10px", borderBlock: "1px solid var(--color-border, #e5e7eb)", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
            <span style={{ color: "var(--color-text-secondary, #6b7280)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Layers size={14} /> Repeat Count
            </span>
            <span style={{ fontWeight: "700", color: "var(--color-text-primary)" }}>
              {repeatCount.toLocaleString()}
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
            <span style={{ color: "var(--color-text-secondary, #6b7280)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Hash size={14} /> Separator
            </span>
            <span style={{ fontWeight: "700", color: "var(--color-text-primary)", maxWidth: "120px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", textAlign: "right" }}>
              {getSeparatorLabel(separator)}
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
            <span style={{ color: "var(--color-text-secondary, #6b7280)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Clock size={14} /> Generated In
            </span>
            <span style={{ fontWeight: "700", color: "var(--color-text-primary)" }}>
              {generationTimeMs.toFixed(3)}s
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
            <span style={{ color: "var(--color-text-secondary, #6b7280)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Clipboard size={14} /> Est. Clipboard
            </span>
            <span style={{ fontWeight: "700", color: "var(--color-text-primary)" }}>
              {formatSize(outputStats.estimatedClipboardKb)}
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
            <span style={{ color: "var(--color-text-secondary, #6b7280)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Cpu size={14} /> Est. RAM Use
            </span>
            <span style={{ fontWeight: "700", color: "var(--color-text-primary)" }}>
              {outputStats.estimatedMemoryMb.toFixed(2)} MB
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
            <span style={{ color: "var(--color-text-secondary, #6b7280)", display: "flex", alignItems: "center", gap: "6px" }}>
              <FileText size={14} /> Estimated Size
            </span>
            <span style={{ fontWeight: "800", color: "var(--color-primary, #2563eb)" }}>
              {formatSize(outputStats.estimatedSizeKb)}
            </span>
          </div>
        </div>
      </div>

      {/* Output Metrics Panel */}
      <div className="calculator-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: "800", margin: 0, color: "var(--color-text-primary)" }}>
          Output Metrics
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Total Characters</span>
            <strong style={{ color: "var(--color-text-primary)" }}>{outputStats.charCount.toLocaleString()}</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Total Words</span>
            <strong style={{ color: "var(--color-text-primary)" }}>{outputStats.wordCount.toLocaleString()}</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Total Lines</span>
            <strong style={{ color: "var(--color-text-primary)" }}>{outputStats.lineCount.toLocaleString()}</strong>
          </div>
        </div>
      </div>

      {/* Saved Presets / Favorites */}
      <div className="calculator-card" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Star size={18} fill="#eab308" color="#eab308" />
          <h3 style={{ fontSize: "1.05rem", fontWeight: "800", margin: 0, color: "var(--color-text-primary)" }}>
            Favorites
          </h3>
        </div>

        {favoritesList.length === 0 ? (
          <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--color-text-secondary)", fontStyle: "italic" }}>
            No favorites saved yet. Click Save above to add templates.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "180px", overflowY: "auto", paddingRight: "4px" }}>
            {favoritesList.map((fav) => (
              <div 
                key={fav.id} 
                className="favorite-badge-row"
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  padding: "8px 12px", 
                  borderRadius: "8px", 
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-secondary-subtle, #f9fafb)",
                  cursor: "pointer"
                }}
              >
                <span 
                  onClick={() => onRestoreFavorite(fav)}
                  style={{ fontSize: "0.82rem", fontWeight: "600", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", flex: 1, color: "var(--color-text-primary)" }}
                >
                  {fav.name} ({fav.repeatCount}x)
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteFavorite(fav.id);
                  }}
                  type="button"
                  style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", padding: "2px" }}
                  title="Remove from favorites"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Smart History */}
      <div className="calculator-card" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <History size={18} style={{ color: "var(--color-primary)" }} />
            <h3 style={{ fontSize: "1.05rem", fontWeight: "800", margin: 0, color: "var(--color-text-primary)" }}>
              Recent Runs
            </h3>
          </div>
          {historyList.length > 0 && (
            <button
              onClick={onExportHistory}
              type="button"
              className="btn btn-outline"
              style={{ padding: "4px 8px", height: "26px", fontSize: "0.7rem", display: "flex", alignItems: "center", gap: "4px", borderRadius: "6px" }}
              title="Download local history file"
            >
              <Download size={11} /> Export
            </button>
          )}
        </div>

        {historyList.length === 0 ? (
          <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--color-text-secondary)", fontStyle: "italic" }}>
            No generations recorded yet.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "220px", overflowY: "auto", paddingRight: "4px" }}>
            {historyList.map((hist) => (
              <div
                key={hist.id}
                onClick={() => onRestoreHistory(hist)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "8px 10px",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-secondary-subtle, #f9fafb)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "margin 0.2s"
                }}
                className="history-row"
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>
                  <span>{new Date(hist.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  <span style={{ fontWeight: "700" }}>{hist.repeatMode}</span>
                </div>
                <div 
                  style={{ 
                    fontSize: "0.8rem", 
                    fontWeight: "600", 
                    color: "var(--color-text-primary)", 
                    textOverflow: "ellipsis", 
                    overflow: "hidden", 
                    whiteSpace: "nowrap" 
                  }}
                >
                  "{hist.inputText}"
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>
                  Repeated {hist.repeatCount}x
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
