"use client";

import React, { useState } from "react";
import { Clipboard, Undo, Redo, RefreshCcw, Copy, Search, AlertTriangle } from "lucide-react";

interface InputWorkspaceProps {
  inputText: string;
  handleInputMutation: (val: string) => void;
  handleUndo: () => void;
  handleRedo: () => void;
  undoStackLength: number;
  redoStackLength: number;
  handleClear: () => void;
  handleFileUpload: (file: File) => void;
  triggerStatus: (status: string, msg: string) => void;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
}

export function InputWorkspace({
  inputText,
  handleInputMutation,
  handleUndo,
  handleRedo,
  undoStackLength,
  redoStackLength,
  handleClear,
  handleFileUpload,
  triggerStatus,
  inputRef,
}: InputWorkspaceProps) {
  const [dragActive, setDragActive] = useState(false);

  const handlePaste = async () => {
    try {
      const txt = await navigator.clipboard.readText();
      handleInputMutation(txt);
      triggerStatus("Ready", "Pasted clipboard contents.");
    } catch {
      triggerStatus("Error", "Failed to paste clipboard content.");
    }
  };

  return (
    <div className="calculator-card" style={{ padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <label htmlFor="content-input" className="form-label" style={{ margin: 0 }}>
          Input Workspace
        </label>
        
        <div style={{ display: "flex", gap: "4px" }}>
          <button
            type="button"
            onClick={handlePaste}
            className="btn btn-outline"
            style={{ width: "32px", height: "32px", padding: 0, borderRadius: "6px" }}
            title="Paste from clipboard"
          >
            <Clipboard size={14} />
          </button>
          <button
            type="button"
            onClick={handleUndo}
            disabled={undoStackLength <= 1}
            className="btn btn-outline"
            style={{ width: "32px", height: "32px", padding: 0, borderRadius: "6px" }}
            title="Undo"
          >
            <Undo size={14} />
          </button>
          <button
            type="button"
            onClick={handleRedo}
            disabled={redoStackLength === 0}
            className="btn btn-outline"
            style={{ width: "32px", height: "32px", padding: 0, borderRadius: "6px" }}
            title="Redo"
          >
            <Redo size={14} />
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-outline"
            style={{ width: "32px", height: "32px", padding: 0, borderRadius: "6px", borderColor: "#ef4444", color: "#ef4444" }}
            title="Clear"
          >
            <RefreshCcw size={14} />
          </button>
        </div>
      </div>

      <div 
        onDragEnter={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0]); }}
        style={{
          position: "relative",
          borderRadius: "12px",
          border: dragActive ? "2px dashed var(--color-primary)" : "1px solid transparent"
        }}
      >
        <textarea
          id="content-input"
          ref={inputRef}
          className="form-textarea"
          placeholder="📝 Start typing or drag and drop text here..."
          value={inputText}
          onChange={(e) => handleInputMutation(e.target.value)}
          style={{ minHeight: "130px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
        <span style={{ fontSize: "0.76rem", color: "var(--color-text-secondary)" }}>
          Input: <strong>{inputText.length.toLocaleString()} chars</strong>
        </span>
        <label 
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "0.76rem",
            fontWeight: "600",
            cursor: "pointer",
            padding: "4px 8px",
            border: "1px solid var(--color-border)",
            borderRadius: "6px",
            background: "var(--color-surface)"
          }}
        >
          Upload File
          <input
            type="file"
            accept=".txt"
            style={{ display: "none" }}
            onChange={(e) => { if (e.target.files?.[0]) handleFileUpload(e.target.files[0]); }}
          />
        </label>
      </div>
    </div>
  );
}

interface OutputWorkspaceProps {
  outputText: string;
  isPending: boolean;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  matchCount: number;
  currentMatchIndex: number;
  navigateMatches: (dir: "next" | "prev") => void;
  outputRef: React.RefObject<HTMLTextAreaElement | null>;
  handleCopy: (customText?: string) => Promise<void>;
  triggerDownload: (format: "txt" | "csv" | "json" | "md" | "html") => void;
}

export function OutputWorkspace({
  outputText,
  isPending,
  searchQuery,
  setSearchQuery,
  matchCount,
  currentMatchIndex,
  navigateMatches,
  outputRef,
  handleCopy,
  triggerDownload,
}: OutputWorkspaceProps) {
  const wordCount = outputText.trim() === "" ? 0 : outputText.trim().split(/\s+/).length;
  const lineCount = outputText === "" ? 0 : outputText.split("\n").length;

  return (
    <div className="calculator-card" style={{ padding: "24px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <span className="form-label" style={{ margin: 0 }}>
          Live Output Workspace {isPending && <span style={{ fontSize: "0.75rem", fontStyle: "italic", marginLeft: "6px" }}>(regenerating...)</span>}
        </span>
      </div>

      <div style={{ position: "relative", marginBottom: "8px", display: "flex", gap: "4px" }}>
        <div style={{ position: "relative", flex: 1 }}>
          <Search size={14} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }} />
          <input
            type="text"
            placeholder="Search in output (matches)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ height: "32px", paddingLeft: "32px", fontSize: "0.8rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "6px", width: "100%" }}
          />
        </div>
        {matchCount > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "var(--color-bg-secondary-subtle)", border: "1px solid var(--color-border)", borderRadius: "6px", paddingInline: "8px", fontSize: "0.75rem", color: "var(--color-text-primary)" }}>
            <span>{currentMatchIndex + 1} of {matchCount}</span>
            <button type="button" onClick={() => navigateMatches("prev")} style={{ border: "none", background: "none", cursor: "pointer" }}>▲</button>
            <button type="button" onClick={() => navigateMatches("next")} style={{ border: "none", background: "none", cursor: "pointer" }}>▼</button>
          </div>
        )}
      </div>

      <textarea
        id="content-output"
        ref={outputRef}
        className="form-textarea"
        placeholder="✨ Your repeated text duplicates will appear here instantly..."
        value={outputText}
        readOnly
        style={{
          minHeight: "220px",
          fontFamily: "monospace",
          lineHeight: "1.5",
          background: "var(--color-bg-secondary-subtle, #f9fafb)",
          cursor: "default"
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px", fontSize: "0.74rem", color: "var(--color-text-secondary)" }}>
        <span>Chars: <strong>{outputText.length.toLocaleString()}</strong></span>
        <span>Words: <strong>{wordCount}</strong></span>
        <span>Lines: <strong>{lineCount}</strong></span>
      </div>

      {outputText && outputText.length > 50000 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
          <div style={{ display: "flex", gap: "8px", padding: "10px", background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: "8px", color: "#b91c1c", fontSize: "0.78rem" }}>
            <AlertTriangle size={16} style={{ flexShrink: 0 }} />
            <span>Extreme length! Browser clipboard and page transitions could be slow. We recommend clicking Download.</span>
          </div>
        </div>
      )}

      <div style={{ marginTop: "16px", borderTop: "1px solid var(--color-border)", paddingTop: "14px" }}>
        <button
          type="button"
          onClick={() => handleCopy()}
          disabled={!outputText}
          className="btn btn-primary"
          style={{ width: "100%", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "10px", fontWeight: "700" }}
        >
          <Copy size={16} /> Copy Output
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px", marginTop: "12px" }}>
          {(["txt", "csv", "json", "md", "html"] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => triggerDownload(fmt)}
              disabled={!outputText}
              style={{
                height: "36px",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                background: "var(--color-surface)",
                color: "var(--color-text-primary)",
                fontSize: "0.75rem",
                fontWeight: "700",
                cursor: "pointer",
                opacity: outputText ? 1 : 0.5
              }}
              type="button"
            >
              .{fmt.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
