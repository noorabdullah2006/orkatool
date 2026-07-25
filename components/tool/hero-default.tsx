"use client";

import React, { memo } from "react";
import type { Tool } from "@/content/tools";

type Props = { tool: Tool; onScrollToCalculator: () => void; onScrollToFooter: () => void };

const HeroDefault = memo(function HeroDefault({ tool, onScrollToCalculator, onScrollToFooter }: Props) {
  return (
    <section className="tool-hero">
      <div className="tool-hero-container">
        <div className="tool-badge">Free Online Tool</div>
        <div className="tool-icon">{tool.icon}</div>
        <h1 className="tool-title">{tool.title}</h1>
        <p className="tool-description">{tool.description}</p>
        <div className="custom-hero-ctas">
          <button onClick={onScrollToCalculator} className="btn btn-primary" type="button">
            Open Tool
          </button>
          <button onClick={onScrollToFooter} className="btn btn-outline" type="button">
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
});

export default HeroDefault;
