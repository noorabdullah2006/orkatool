"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import { 
  Play, AlertTriangle, CheckCircle2, Star, Save, Search, RefreshCcw, 
  HelpCircle, Laptop
} from "lucide-react";
import Calculator from "@/components/tool/calculator";
import TextRepeaterSidebar, { HistoryItem, FavoriteItem } from "./sidebar";
import { 
  EMOJI_DB, applyTextStyle, getEmojiMatches
} from "./utils";
import { InputWorkspace, OutputWorkspace } from "./components/workspace-panels";
import { TemplateLibrary, UnifiedFavorite } from "./components/template-library";
import { EmojiKeyboard } from "./components/emoji-keyboard";
import { StyleStudio } from "./components/style-studio";
import { AdvancedOptions } from "./components/advanced-options";

export default function TextRepeaterForm() {
  const [inputText, setInputText] = useState("");
  const [repeatCount, setRepeatCount] = useState(10);
  const [separator, setSeparator] = useState(" ");
  const [customSeparator, setCustomSeparator] = useState("");
  const [lineNumbering, setLineNumbering] = useState(false);
  const [outputText, setOutputText] = useState("");

  const [repeatMode, setRepeatMode] = useState("normal");
  const [casingOption, setCasingOption] = useState("original");
  const [autoTrim, setAutoTrim] = useState(false);
  const [removeEmptyLines, setRemoveEmptyLines] = useState(false);
  const [duplicateLineFilter, setDuplicateLineFilter] = useState(false);

  const [undoStack, setUndoStack] = useState<string[]>([""]);
  const [redoStack, setRedoStack] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);
  const [matchCount, setMatchCount] = useState(0);
  const [matchOffsets, setMatchOffsets] = useState<number[]>([]);

  const [generationTimeMs, setGenerationTimeMs] = useState(0);
  const [statusText, setStatusText] = useState("Ready");
  const [toastMessage, setToastMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const [historyList, setHistoryList] = useState<HistoryItem[]>([]);
  const [favoritesList, setFavoritesList] = useState<FavoriteItem[]>([]);

  const [activeTemplateTab, setActiveTemplateTab] = useState("Social");
  const [templateSearchVal, setTemplateSearchVal] = useState("");

  const [activeEmojiTab, setActiveEmojiTab] = useState("Smileys");
  const [emojiSearchVal, setEmojiSearchVal] = useState("");
  const [recentEmojis, setRecentEmojis] = useState<string[]>([]);
  const [emojiUsageCount, setEmojiUsageCount] = useState<Record<string, number>>({});
  
  const [favoritesNew, setFavoritesNew] = useState<UnifiedFavorite[]>([]);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    templates: false,
    emoji: false,
    styles: false,
    decorations: false,
    advanced: false
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const hist = localStorage.getItem("orkatool_repeater_history");
      if (hist) setHistoryList(JSON.parse(hist));
      const favs = localStorage.getItem("orkatool_repeater_favorites");
      if (favs) setFavoritesList(JSON.parse(favs));
      const recs = localStorage.getItem("orkatool_recent_emojis_new");
      if (recs) setRecentEmojis(JSON.parse(recs));
      const usage = localStorage.getItem("orkatool_emoji_usage");
      if (usage) setEmojiUsageCount(JSON.parse(usage));
      const favsNew = localStorage.getItem("orkatool_favorites_new");
      if (favsNew) setFavoritesNew(JSON.parse(favsNew));
    } catch (e) {
      console.warn("Storage access failed", e);
    }
  }, []);

  const triggerStatus = (status: string, message: string) => {
    setStatusText(status);
    setToastMessage(message);
    setTimeout(() => {
      setStatusText("Ready");
      setToastMessage("");
    }, 2000);
  };

  const handleInputMutation = (newVal: string) => {
    setRedoStack([]);
    if (newVal !== inputText) {
      setUndoStack((prev) => [...prev, inputText]);
      setInputText(newVal);
    }
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const prev = undoStack[undoStack.length - 1];
      setRedoStack((prevRedo) => [...prevRedo, inputText]);
      setUndoStack((prevUndo) => prevUndo.slice(0, prevUndo.length - 1));
      setInputText(prev);
      triggerStatus("Ready", "Undone successfully");
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const next = redoStack[redoStack.length - 1];
      setUndoStack((prevUndo) => [...prevUndo, inputText]);
      setRedoStack((prevRedo) => prevRedo.slice(0, prevRedo.length - 1));
      setInputText(next);
      triggerStatus("Ready", "Redone successfully");
    }
  };

  const selectTemplate = (input: string, sep: string, count: number, name: string) => {
    setInputText(input);
    setSeparator(sep);
    setRepeatCount(count);
    triggerStatus("Ready", `${name} loaded`);
  };

  const handleEmojiClick = (emoji: string) => {
    const el = inputRef.current;
    let newVal = inputText;
    if (el) {
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const text = el.value;
      newVal = text.substring(0, start) + emoji + text.substring(end);
      handleInputMutation(newVal);
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(start + emoji.length, start + emoji.length);
      }, 50);
    } else {
      newVal = inputText + emoji;
      handleInputMutation(newVal);
    }

    const nextRecents = [emoji, ...recentEmojis.filter((e) => e !== emoji)].slice(0, 10);
    setRecentEmojis(nextRecents);
    localStorage.setItem("orkatool_recent_emojis_new", JSON.stringify(nextRecents));

    const nextUsage = { ...emojiUsageCount, [emoji]: (emojiUsageCount[emoji] || 0) + 1 };
    setEmojiUsageCount(nextUsage);
    localStorage.setItem("orkatool_emoji_usage", JSON.stringify(nextUsage));
  };

  const toggleStarFavorite = (item: Omit<UnifiedFavorite, "id">) => {
    const itemId = item.type === "emoji" ? `emoji:${item.char}` : 
                  item.type === "style" ? `style:${item.name}` :
                  item.type === "decoration" ? `dec:${item.name}` : `tpl:${item.name}`;
    
    const exists = favoritesNew.some(f => f.id === itemId);
    let nextFavs;
    if (exists) {
      nextFavs = favoritesNew.filter(f => f.id !== itemId);
      triggerStatus("Ready", "Removed from favorites");
    } else {
      nextFavs = [...favoritesNew, { ...item, id: itemId }];
      triggerStatus("Ready", "Added to favorites ⭐");
    }
    setFavoritesNew(nextFavs);
    localStorage.setItem("orkatool_favorites_new", JSON.stringify(nextFavs));
  };

  const handleFileUpload = (file: File) => {
    if (!file.name.endsWith(".txt")) {
      triggerStatus("Ready", "Only plain txt files are supported.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        handleInputMutation(text);
        triggerStatus("Ready", "Loaded content from file.");
      }
    };
    reader.readAsText(file);
  };

  const processRepeating = () => {
    const t0 = performance.now();
    let baseText = inputText;
    if (!baseText) {
      setOutputText("");
      setGenerationTimeMs(0);
      return;
    }
    if (autoTrim) baseText = baseText.trim().replace(/\s+/g, " ");
    if (removeEmptyLines) baseText = baseText.split("\n").filter(l => l.trim() !== "").join("\n");
    if (duplicateLineFilter) baseText = Array.from(new Set(baseText.split("\n"))).join("\n");

    if (casingOption === "uppercase") baseText = baseText.toUpperCase();
    else if (casingOption === "lowercase") baseText = baseText.toLowerCase();

    const count = Math.max(1, Math.min(100000, repeatCount));
    const activeSep = separator === "custom" ? customSeparator : separator;
    let result = "";

    if (repeatMode === "pyramid") {
      const lines = [];
      const capLines = Math.min(count, 500);
      for (let i = 1; i <= capLines; i++) {
        lines.push(Array(i).fill(baseText).join(activeSep));
      }
      result = lines.join("\n");
    } else if (repeatMode === "wave") {
      const lines = [];
      let asc = true;
      let width = 1;
      const capLines = Math.min(count, 1000);
      for (let i = 1; i <= capLines; i++) {
        lines.push(Array(width).fill(baseText).join(activeSep));
        if (asc) {
          width++;
          if (width >= 6) asc = false;
        } else {
          width--;
          if (width <= 1) asc = true;
        }
      }
      result = lines.join("\n");
    } else if (repeatMode === "reverse") {
      const rev = baseText.split("").reverse().join("");
      result = Array(count).fill(rev).join(activeSep);
    } else if (repeatMode === "mirror") {
      const mir = baseText + " " + baseText.split("").reverse().join("");
      result = Array(count).fill(mir).join(activeSep);
    } else {
      if (lineNumbering && separator === "\n") {
        const lines = [];
        for (let i = 1; i <= count; i++) lines.push(`${i}. ${baseText}`);
        result = lines.join("\n");
      } else {
        result = Array(count).fill(baseText).join(activeSep);
      }
    }
    setOutputText(result);
    setGenerationTimeMs((performance.now() - t0) / 1000);
  };

  useEffect(() => {
    const handler = setTimeout(processRepeating, 150);
    return () => clearTimeout(handler);
  }, [inputText, repeatCount, separator, customSeparator, lineNumbering, repeatMode, casingOption, autoTrim, removeEmptyLines, duplicateLineFilter]);

  useEffect(() => {
    if (!searchQuery) {
      setMatchCount(0);
      setCurrentMatchIndex(-1);
      return;
    }
    const matches = [...outputText.matchAll(new RegExp(searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"))];
    setMatchOffsets(matches.map(m => m.index || 0));
    setMatchCount(matches.length);
    setCurrentMatchIndex(matches.length > 0 ? 0 : -1);
  }, [searchQuery, outputText]);

  const navigateMatches = (dir: "next" | "prev") => {
    if (matchCount === 0) return;
    const nextIdx = dir === "next" ? (currentMatchIndex + 1) % matchCount : (currentMatchIndex - 1 + matchCount) % matchCount;
    setCurrentMatchIndex(nextIdx);
    const offset = matchOffsets[nextIdx];
    const el = outputRef.current;
    if (el) {
      el.focus();
      el.setSelectionRange(offset, offset + searchQuery.length);
      const linePos = outputText.slice(0, offset).split("\n").length;
      el.scrollTop = (linePos - 4) * 22;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") { e.preventDefault(); handleUndo(); }
      if ((e.ctrlKey || e.metaKey) && e.key === "y") { e.preventDefault(); handleRedo(); }
      if ((e.ctrlKey || e.metaKey) && e.key === "c" && !window.getSelection()?.toString()) { e.preventDefault(); handleCopy(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [outputText, inputText, repeatCount, separator]);

  const handleCopy = async (customText?: string) => {
    const copyTarget = customText !== undefined ? customText : outputText;
    if (!copyTarget) return;
    try {
      await navigator.clipboard.writeText(copyTarget);
      triggerStatus("Copied", "Copied Successfully ✓");
    } catch {
      triggerStatus("Copied", "Copied Successfully");
    }
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    setRepeatCount(10);
    setSeparator(" ");
    setUndoStack([""]);
    setRedoStack([]);
    triggerStatus("Ready", "Workspace cleared");
  };

  const triggerDownload = (format: "txt" | "csv" | "json" | "md" | "html") => {
    if (!outputText) return;
    let mime = "text/plain";
    let data = outputText;
    if (format === "json") { data = JSON.stringify({ repeatedOutput: outputText }, null, 2); mime = "application/json"; }
    else if (format === "csv") { data = outputText.split("\n").map(l => `"${l.replace(/"/g, '""')}"`).join("\n"); mime = "text/csv"; }
    const url = URL.createObjectURL(new Blob([data], { type: `${mime};charset=utf-8` }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `orkatool-repeater-output.${format}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveFavorite = () => {
    const nameInput = prompt("Enter a name for this Custom preset:", `Preset ${favoritesList.length + 1}`);
    if (!nameInput) return;
    const item = { id: Math.random().toString(), name: nameInput, inputText, repeatCount, separator };
    const list = [...favoritesList, item];
    setFavoritesList(list);
    localStorage.setItem("orkatool_repeater_favorites", JSON.stringify(list));
    triggerStatus("Saved", "Added to favorites");
  };

  const handleDeleteFavorite = (id: string) => {
    const list = favoritesList.filter(f => f.id !== id);
    setFavoritesList(list);
    localStorage.setItem("orkatool_repeater_favorites", JSON.stringify(list));
  };

  const topEmojis = Object.entries(emojiUsageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(entry => entry[0]);

  return (
    <Calculator
      title="Text Repeater"
      description="Repeat text, words, paragraphs, or emojis up to 100,000 times instantly with custom separators and line numbering."
    >
      <div 
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 18px",
          background: "var(--color-bg-secondary-subtle, #f3f4f6)",
          border: "1px solid var(--color-border)",
          borderRadius: "12px",
          fontSize: "0.82rem",
          fontWeight: "600",
          marginBottom: "24px"
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-text-primary)" }}>
          <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: statusText === "Ready" ? "#10b981" : "#eab308" }} />
          Status: <strong>{statusText}</strong>
        </span>
        <span style={{ color: "var(--color-text-secondary)" }}>
          Timings: <strong>{generationTimeMs.toFixed(3)}s</strong>
        </span>
      </div>

      <div className="text-repeater-grid">
        <style dangerouslySetInnerHTML={{ __html: `
          .text-repeater-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 380px;
            gap: 32px;
            align-items: start;
            width: 100%;
            box-sizing: border-box;
          }
          @media (max-width: 1200px) {
            .text-repeater-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .text-repeater-sidebar-col {
              grid-column: span 2 !important;
            }
          }
          @media (max-width: 820px) {
            .text-repeater-grid {
              grid-template-columns: 1fr !important;
            }
            .text-repeater-sidebar-col {
              grid-column: span 1 !important;
            }
          }
          .accordion-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            text-align: left;
          }
          .accordion-title {
            font-size: 1.05rem;
            font-weight: 800;
            color: var(--color-text-primary);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .emoji-btn:hover {
            transform: scale(1.15);
            background: var(--color-bg-secondary-subtle) !important;
          }
          .style-hover-row:hover {
            background: var(--color-bg-secondary-subtle) !important;
          }
          .studio-row-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            min-width: 0;
            width: 100%;
            box-sizing: border-box;
          }
          .studio-text-preview {
            flex: 1;
            min-width: 0;
            overflow-wrap: anywhere;
            word-break: break-word;
            font-weight: 600;
            color: var(--color-text-primary);
          }
          .studio-btn-row {
            display: flex;
            gap: 6px;
            align-items: center;
            flex-shrink: 0;
          }
          .control-group-title {
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            display: block;
          }
          .sub-card-option {
            background: var(--color-bg-secondary-subtle, #f9fafb);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          @media (max-width: 1024px) {
            .studio-row-container {
              flex-wrap: wrap;
            }
            .studio-btn-row {
              flex-shrink: 1;
            }
          }
          @media (max-width: 767px) {
            .studio-row-container {
              flex-direction: column;
              align-items: stretch;
              gap: 12px;
            }
            .studio-btn-row {
              width: 100%;
              justify-content: space-between;
              gap: 8px;
            }
            .studio-btn-row button {
              flex: 1;
              width: 100%;
              justify-content: center;
            }
          }
        ` }} />

        {/* ================================== LEFT PANEL ================================== */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", overflow: "hidden", maxWidth: "100%", minWidth: "0px" }}>
          
          {/* 1. INPUT WORKSPACE CARD */}
          <InputWorkspace
            inputText={inputText}
            handleInputMutation={handleInputMutation}
            handleUndo={handleUndo}
            handleRedo={handleRedo}
            undoStackLength={undoStack.length}
            redoStackLength={redoStack.length}
            handleClear={handleClear}
            handleFileUpload={handleFileUpload}
            triggerStatus={triggerStatus}
            inputRef={inputRef}
          />

          {/* 2. REPEAT SETTINGS CARD (Always Visible) */}
          <div className="calculator-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span style={{ fontSize: "1.1rem" }}>⚙️</span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "var(--color-text-primary)", margin: 0 }}>
                Repeat Settings
              </h3>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span className="form-label" style={{ margin: 0 }}>
                  Repeat Multiplier
                </span>
                {repeatCount > 10000 && (
                  <span style={{ fontSize: "0.75rem", color: "#d97706", display: "inline-flex", alignItems: "center", gap: "2px", fontWeight: "700" }}>
                    <AlertTriangle size={12} /> Large size alert
                  </span>
                )}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 80px", gap: "12px", alignItems: "center" }}>
                <input
                  type="range"
                  min="1"
                  max="10000"
                  value={repeatCount > 10000 ? 10000 : repeatCount}
                  onChange={(e) => setRepeatCount(Number(e.target.value))}
                  style={{ width: "100%", height: "6px", cursor: "pointer" }}
                />
                <input
                  type="number"
                  min="1"
                  max="100000"
                  value={repeatCount}
                  onChange={(e) => setRepeatCount(Math.min(100000, Math.max(1, Number(e.target.value))))}
                  className="form-input"
                  style={{ height: "36px", borderRadius: "6px", textAlign: "center", padding: "0 4px" }}
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <span className="form-label" style={{ margin: 0, marginBottom: "4px", display: "block" }}>
                Smart Repeat Mode
              </span>
              <select
                value={repeatMode}
                onChange={(e) => setRepeatMode(e.target.value)}
                className="form-select text-left"
                style={{ height: "40px", borderRadius: "8px", width: "100%" }}
              >
                <option value="normal">Normal Repeat</option>
                <option value="reverse">Reverse Characters</option>
                <option value="mirror">Mirror Repeat</option>
                <option value="pyramid">Pyramid Repeat</option>
                <option value="wave">Wave Repeat</option>
              </select>
            </div>
          </div>

          {/* 3. COLLAPSIBLE TEMPLATES CARD */}
          <TemplateLibrary
            isOpen={openSections.templates}
            onToggle={() => toggleSection("templates")}
            activeTab={activeTemplateTab}
            setActiveTab={setActiveTemplateTab}
            searchVal={templateSearchVal}
            setSearchVal={setTemplateSearchVal}
            favoritesNew={favoritesNew}
            recentFavoritesList={favoritesList}
            onToggleFavorite={toggleStarFavorite}
            onSelectTemplate={selectTemplate}
          />

          {/* 4. COLLAPSIBLE EMOJI KEYBOARD PICKER CARD */}
          <EmojiKeyboard
            isOpen={openSections.emoji}
            onToggle={() => toggleSection("emoji")}
            activeTab={activeEmojiTab}
            setActiveTab={setActiveEmojiTab}
            searchVal={emojiSearchVal}
            setSearchVal={setEmojiSearchVal}
            favoritesNew={favoritesNew}
            recentEmojis={recentEmojis}
            topEmojis={topEmojis}
            onEmojiClick={handleEmojiClick}
            onToggleFavorite={toggleStarFavorite}
          />

          {/* 5. TEXT STYLE STUDIO CARD & 6. FANCY TEXT DECORATIONS CARD */}
          <StyleStudio
            stylesOpen={openSections.styles}
            onToggleStyles={() => toggleSection("styles")}
            decorationsOpen={openSections.decorations}
            onToggleDecorations={() => toggleSection("decorations")}
            inputText={inputText}
            favoritesNew={favoritesNew}
            onToggleFavorite={toggleStarFavorite}
            handleCopy={handleCopy}
            handleInputMutation={handleInputMutation}
          />

          {/* 7. COLLAPSIBLE ADVANCED OPTIONS CARD */}
          <AdvancedOptions
            isOpen={openSections.advanced}
            onToggle={() => toggleSection("advanced")}
            casingOption={casingOption}
            setCasingOption={setCasingOption}
            separator={separator}
            setSeparator={setSeparator}
            customSeparator={customSeparator}
            setCustomSeparator={setCustomSeparator}
            autoTrim={autoTrim}
            setAutoTrim={setAutoTrim}
            removeEmptyLines={removeEmptyLines}
            setRemoveEmptyLines={setRemoveEmptyLines}
            duplicateLineFilter={duplicateLineFilter}
            setDuplicateLineFilter={setDuplicateLineFilter}
            lineNumbering={lineNumbering}
            setLineNumbering={setLineNumbering}
          />
        </div>

        {/* ================================== CENTER PANEL ================================== */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", overflow: "hidden", maxWidth: "100%", minWidth: "0px" }} className="w-100">
          <OutputWorkspace
            outputText={outputText}
            isPending={isPending}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            matchCount={matchCount}
            currentMatchIndex={currentMatchIndex}
            navigateMatches={navigateMatches}
            outputRef={outputRef}
            handleCopy={handleCopy}
            triggerDownload={triggerDownload}
          />
        </div>

        {/* ================================== RIGHT SIDEBAR ================================== */}
        <div style={{ minWidth: "0px", maxWidth: "100%", overflow: "hidden" }} className="w-100">
          <TextRepeaterSidebar
            outputStats={{
              charCount: outputText.length,
              wordCount: outputText.trim() === "" ? 0 : outputText.trim().split(/\s+/).length,
              lineCount: outputText === "" ? 0 : outputText.split("\n").length,
              estimatedSizeKb: (outputText.length * 2) / 1024,
              estimatedClipboardKb: (outputText.length * 2) / 1024,
              estimatedMemoryMb: (outputText.length * 4) / (1024 * 1024)
            }}
            repeatCount={repeatCount}
            separator={separator === "custom" ? customSeparator : separator}
            generationTimeMs={generationTimeMs}
            clipboardReady={outputText.length > 0}
            
            historyList={historyList}
            onRestoreHistory={(item) => {
              setInputText(item.inputText);
              setRepeatCount(item.repeatCount);
              setSeparator(item.separator);
              setRepeatMode(item.repeatMode);
              setCasingOption(item.casingOption);
              triggerStatus("Ready", "Restored history item");
            }}
            onExportHistory={() => {
              const url = URL.createObjectURL(new Blob([JSON.stringify(historyList, null, 2)], { type: "application/json" }));
              const a = document.createElement("a"); a.href = url; a.download = "history.json"; a.click();
            }}

            favoritesList={favoritesList}
            onRestoreFavorite={(item) => {
              setInputText(item.inputText);
              setRepeatCount(item.repeatCount);
              setSeparator(item.separator);
              triggerStatus("Ready", `Restored favorite: ${item.name}`);
            }}
            onDeleteFavorite={handleDeleteFavorite}
            onSaveFavorite={handleSaveFavorite}
          />
        </div>

      </div>

      {toastMessage && (
        <div 
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "#1f2937",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.9rem",
            fontWeight: "600",
            border: "1px solid #374151"
          }}
        >
          <CheckCircle2 size={16} style={{ color: "#10b981" }} />
          {toastMessage}
        </div>
      )}
    </Calculator>
  );
}
