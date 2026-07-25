"use client";

import React, { memo, useEffect, useState } from "react";
import type { Tool } from "@/content/tools";
import { CheckCircle } from "lucide-react";
import { IslamicTrustBar } from "./hero-trust-bar";
import { DEFAULT_METALS_RATES } from "./hero-data";

type MetalsRates = {
  goldRate: number;
  silverRate: number;
  goldThreshold: number;
  silverThreshold: number;
};

type Props = { tool: Tool; onScrollToCalculator: () => void; onScrollToFooter: () => void };

const HeroZakat = memo(function HeroZakat({ onScrollToCalculator, onScrollToFooter }: Props) {
  const [rates, setRates] = useState<MetalsRates>(DEFAULT_METALS_RATES);
  const [loadingRates, setLoadingRates] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("/api/metals");
        if (response.ok) {
          const data: MetalsRates = await response.json();
          if (data && typeof data.goldRate === "number" && typeof data.silverRate === "number") {
            setRates(data);
          }
        }
      } catch {
        // Fallback to defaults on network error
      } finally {
        setLoadingRates(false);
      }
    };
    fetchRates();
  }, []);

  return (
    <section className="tool-hero-custom" aria-label="Zakat Calculator Hero">
      <div className="custom-hero-grid">
        <div className="custom-hero-left">
          <div className="tool-badge">FREE FINANCIAL TOOL</div>

          <div className="custom-hero-icon-title">
            <span className="custom-hero-icon">🕌</span>
            <h1 className="custom-hero-title">
              Professional <br />
              <span className="text-highlight">Zakat</span> Calculator <br />
              with Live Nisab
            </h1>
          </div>

          <p className="custom-hero-description">
            Calculate your annual Zakat instantly using live Nisab values, assets, liabilities, and Madhab-specific rules.
          </p>

          <div className="custom-hero-pills">
            <span className="pill">✓ 100% Free</span>
            <span className="pill">✓ Mobile Friendly</span>
            <span className="pill">✓ Live Nisab</span>
            <span className="pill">✓ All Sunni Madhabs</span>
            <span className="pill">✓ Assets &amp; Debts</span>
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
          <article className="summary-card" aria-label="Nisab Rates &amp; Overview">
            <div className="card-header">
              <h3>Quick Overview</h3>
              <span className="verified-badge" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <CheckCircle size={12} /> Verified
              </span>
            </div>
            <div className="card-body-custom">
              {[
                ["Live Gold Price:", loadingRates ? "Loading..." : `${rates.goldRate.toLocaleString()} /g`],
                ["Live Silver Price:", loadingRates ? "Loading..." : `${rates.silverRate.toLocaleString()} /g`],
                ["Gold Nisab (87.48g):", loadingRates ? "Loading..." : `${Math.round(rates.goldThreshold).toLocaleString()}`],
                ["Silver Nisab (612.36g):", loadingRates ? "Loading..." : `${Math.round(rates.silverThreshold).toLocaleString()}`],
                ["Supported Madhabs:", "Sunni (4 Schools)"],
                ["Calculation Steps:", "4 Steps (Quick & Detailed)"],
                ["Estimated Time:", "< 2 Minutes"],
                ["Access Tier:", "Free Forever"],
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

export default HeroZakat;
