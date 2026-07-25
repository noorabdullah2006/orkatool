"use client";

import React, { memo } from "react";
import type { Tool } from "@/content/tools";
import { IslamicTrustBar } from "./hero-trust-bar";

type Props = { tool: Tool; onScrollToCalculator: () => void; onScrollToFooter: () => void };

const HeroInheritance = memo(function HeroInheritance({ onScrollToCalculator, onScrollToFooter }: Props) {
  return (
    <section className="tool-hero-custom" aria-label="Islamic Inheritance Calculator Hero">
      <div className="custom-hero-grid">
        <div className="custom-hero-left">
          <div className="tool-badge">FREE FINANCIAL TOOL</div>

          <div className="custom-hero-icon-title">
            <span className="custom-hero-icon">⚖️</span>
            <h1 className="custom-hero-title">
              Calculate Islamic <br />
              According to <br />
              <span className="text-highlight">Inheritance</span> Rules
            </h1>
          </div>

          <p className="custom-hero-description">
            Calculate accurate Islamic inheritance shares using classical Faraid principles including Awl, Radd, Hajb and Madhab rules.
          </p>

          <div className="custom-hero-pills">
            <span className="pill">✓ 100% Free</span>
            <span className="pill">✓ Mobile Friendly</span>
            <span className="pill">✓ Awl &amp; Radd</span>
            <span className="pill">✓ All Sunni Madhabs</span>
            <span className="pill">✓ Calculation Trace</span>
            <span className="pill">✓ PDF Export</span>
          </div>

          <div className="custom-hero-ctas">
            <button onClick={onScrollToCalculator} className="btn btn-primary" type="button">
              Start Calculator
            </button>
            <button onClick={onScrollToFooter} className="btn btn-outline" type="button">
              How It Works
            </button>
          </div>

          <div className="custom-hero-supported">
            Supports: <strong>Hanafi</strong> &bull; <strong>Shafi&apos;i</strong> &bull; <strong>Maliki</strong> &bull; <strong>Hanbali</strong> &bull; No registration required &bull; Works on mobile
          </div>
        </div>

        <div className="custom-hero-right">
          <article className="summary-card" aria-label="Calculator Features Overview">
            <div className="card-header">
              <h3>Calculator Features</h3>
              <span className="verified-badge" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                ✓ Verified
              </span>
            </div>
            <div className="card-body-custom">
              {[
                ["Supported Heirs:", "16+ Categories"],
                ["Exclusions (Hajb):", "Fully Supported"],
                ["Awl (Ratio Inc.):", "Standard Logic"],
                ["Radd (Returns):", "Spouse-aware Options"],
                ["Sunni Schools:", "4 Madhab Rules"],
                ["Explanatory logs:", "Step-by-step Trace"],
                ["Calculations Proofs:", "PDF & Image Export"],
                ["Jurisprudence basis:", "Faraid Canonical Standard"],
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
      <IslamicTrustBar />
    </section>
  );
});

export default HeroInheritance;
