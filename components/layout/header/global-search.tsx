"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { tools } from "@/content/tools/tool.data";
import { Search, X, CornerDownLeft } from "lucide-react";
import { getToolUrl } from "@/content/tools";

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Filter tools
  const filteredTools = useMemo(() => {
    return query.trim().length >= 1
      ? tools.filter((tool) => {
          if (!tool.published) return false;
          const q = query.toLowerCase();
          return (
            tool.title.toLowerCase().includes(q) ||
            tool.description.toLowerCase().includes(q) ||
            tool.slug.toLowerCase().includes(q) ||
            tool.category.toLowerCase().includes(q) ||
            (tool.keywords &&
              tool.keywords.some((kw) => kw.toLowerCase().includes(q)))
          );
        })
      : [];
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setQuery("");
        setSelectedIndex(0);
        inputRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Keyboard navigation inside search results
  useEffect(() => {
    function handleKeys(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredTools.length > 0 ? (prev + 1) % filteredTools.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredTools.length > 0
            ? (prev - 1 + filteredTools.length) % filteredTools.length
            : 0
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredTools[selectedIndex]) {
          const path = getToolUrl(filteredTools[selectedIndex]);
          router.push(path);
          onClose();
        }
      }
    }

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [isOpen, filteredTools, selectedIndex, onClose, router]);

  // Auto-scroll inside list of suggestions
  useEffect(() => {
    if (resultsRef.current) {
      const activeEl = resultsRef.current.querySelector(
        `.search-result-item[data-selected="true"]`
      );
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  // Helper to highlight matching text
  const highlightText = (text: string, search: string) => {
    if (!search || !search.trim()) return <span>{text}</span>;
    const regex = new RegExp(
      `(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
      "gi"
    );
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="search-highlight">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div
      className="global-search-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Global Tool Search"
    >
      <div
        className="global-search-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="global-search-header">
          <Search
            className="global-search-icon"
            size={20}
          />
          <input
            ref={inputRef}
            type="text"
            className="global-search-input"
            placeholder="Type at least 1 character to search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button
            className="global-search-clear"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {query.trim().length > 0 && (
          <div
            className="global-search-results"
            ref={resultsRef}
          >
            {filteredTools.length > 0 ? (
              <>
                <div className="global-search-section-title">
                  Calculators & Tools ({filteredTools.length})
                </div>
                <div className="search-results-list">
                  {filteredTools.map((tool, idx) => (
                    <div
                      key={tool.id}
                      className="search-result-item"
                      data-selected={idx === selectedIndex}
                      onClick={() => {
                        router.push(getToolUrl(tool));
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className="search-result-icon-wrapper">
                        <span className="search-result-icon">{tool.icon}</span>
                      </div>
                      <div className="search-result-meta">
                        <div className="search-result-title-row">
                          <span className="search-result-title">
                            {highlightText(tool.title, query)}
                          </span>
                          <span className="search-result-category">
                            {tool.category}
                          </span>
                        </div>
                        <p className="search-result-desc">
                          {highlightText(tool.description, query)}
                        </p>
                      </div>
                      <div className="search-result-action">
                        {idx === selectedIndex && (
                          <span className="search-enter-badge">
                            <CornerDownLeft size={12} /> Enter
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="global-search-empty">
                <p className="empty-title">No tools found</p>
                <p className="empty-desc">
                  Try another keyword like &quot;zakat&quot; or &quot;calculator&quot;.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="global-search-footer">
          <div className="search-help-tip">
            <kbd>↑↓</kbd> to navigate
          </div>
          <div className="search-help-tip">
            <kbd>↵</kbd> to select
          </div>
          <div className="search-help-tip">
            <kbd>ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  );
}
