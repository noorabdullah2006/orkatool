"use client";

import React, { memo } from "react";
import type { Tool } from "@/content/tools";
import { CheckCircle } from "lucide-react";
import { TextRepeaterTrustBar } from "./hero-trust-bar";

type Props = { tool: Tool; onScrollToCalculator: () => void; onScrollToFooter: () => void };

const HeroTextRepeater = memo(function HeroTextRepeater({ onScrollToCalculator, onScrollToFooter }: Props) {
  return (
    <section className="tool-hero-custom" aria-label="Text Repeater Hero">
      <div className="custom-hero-grid">
        <div className="custom-hero-left">
          <div className="tool-badge">FREE TEXT TOOL</div>

          <div className="custom-hero-icon-title">
            <span className="custom-hero-icon">🔁</span>
            <h1 className="custom-hero-title">
              Professional <br />
              <span className="text-highlight">Text Repeater</span> <br />
              with Smart Formatting
            </h1>
          </div>

          <p className="custom-hero-description">
            Instantly repeat text, words, names, emojis, paragraphs, hashtags and custom templates up to 100,000 times with smart formatting, separators, styling and one-click export.
          </p>

          <div className="custom-hero-pills">
            <span className="pill">✓ 100% Free</span>
            <span className="pill">✓ Live Preview</span>
            <span className="pill">✓ Smart Formatting</span>
            <span className="pill">✓ Emoji Ready</span>
            <span className="pill">✓ Text Styles</span>
            <span className="pill">✓ Export TXT/CSV/JSON</span>
            <span className="pill">✓ WhatsApp Share</span>
            <span className="pill">✓ Mobile Friendly</span>
          </div>

          <div className="custom-hero-ctas">
            <button onClick={onScrollToCalculator} className="btn btn-primary" type="button">
              Start Repeating
            </button>
            <button onClick={onScrollToFooter} className="btn btn-outline" type="button">
              How It Works
            </button>
          </div>

          <div className="custom-hero-supported">
            Supports: Words &bull; Names &bull; Emojis &bull; Paragraphs &bull; Hashtags &bull; Unicode Text
          </div>
        </div>

        <div className="custom-hero-right">
          <article className="summary-card" aria-label="Tool Features Overview">
            <div className="card-header">
              <h3>Tool Features</h3>
              <span className="verified-badge" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <CheckCircle size={12} fill="#22c55e" stroke="#22c55e" style={{ color: "#fff" }} /> Verified
              </span>
            </div>
            <div className="card-body-custom">
              {[
                ["Maximum Repeat:", "100,000×"],
                ["Output Formats:", "TXT • CSV • JSON • MD • HTML"],
                ["Templates:", "10+ Categories"],
                ["Emoji Library:", "500+ Emojis"],
                ["Unicode Styles:", "40+ Styles"],
                ["Share Options:", "WhatsApp • Telegram"],
                ["Live Processing:", "Instant"],
                ["Processing:", "100% Browser Based"],
              ].map(([label, value]) => (
                <div key={label} className="summary-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
      <TextRepeaterTrustBar />
    </section>
  );
});

export default HeroTextRepeater;
