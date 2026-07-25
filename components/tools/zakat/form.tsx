"use client";

import { useMemo, useState, useEffect } from "react";
import Calculator from "@/components/tool/calculator";
import { DEFAULT_FORM } from "./constants";
import { calculateZakat, formatMoney } from "./utils";
import type { NisabRates, ZakatFormData } from "./types";
import QuickForm from "./quick-form";
import DetailedForm from "./detailed-form";
import ZakatResult from "./result";
import { Loader2 } from "lucide-react";

/* =========================================================
   Static Default Rates (Prevents SSR Hydration Mismatch)
   ========================================================= */
const DEFAULT_RATES: NisabRates = {
  goldRate: 30000,
  silverRate: 350,
  goldThreshold: 30000 * 87.48,
  silverThreshold: 350 * 612.36,
  lastUpdated: "2026-07-16",
  source: "manual",
};

export default function ZakatForm() {
  const [form, setForm] = useState<ZakatFormData>(DEFAULT_FORM);
  const [mode, setMode] = useState<"quick" | "detailed">("quick");

  // Dynamic rates logic
  const [rates, setRates] = useState<NisabRates>({
    ...DEFAULT_RATES,
    isCachedPastDay: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/metals");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to load live metal prices");
      }
      if (data && typeof data.goldRate === "number" && typeof data.silverRate === "number") {
        setRates(data);
      } else {
        throw new Error("Rates format error");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error fetching live rates";
      setError(msg);
      setRates({
        goldRate: 0,
        silverRate: 0,
        goldThreshold: 0,
        silverThreshold: 0,
        lastUpdated: "",
        source: "",
        isCachedPastDay: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRates();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const isRatesValid = rates.goldRate > 0 && rates.silverRate > 0;

  const result = useMemo(
    () => calculateZakat(form, rates),
    [form, rates]
  );

  return (
    <Calculator
      title="Zakat Calculator"
      description="Calculate your Zakat accurately using different Nisab standards and Madhab rules. Dynamic local rates sourced instantly."
    >
      <div className="calculator-grid">
        <div className="calculator-main text-left">
          {/* Live Rates Status Indicator */}
          <div className="live-rates-status" style={{ marginBottom: "1.5rem" }}>
            {isLoading ? (
              <span className="rates-status-text" style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "6px" }}>
                <Loader2 className="spinner-animate" size={14} /> Fetching spot metal prices...
              </span>
            ) : error && !isRatesValid ? (
              <div 
                style={{ 
                  padding: "16px", 
                  borderRadius: "12px", 
                  border: "1px solid #ef4444", 
                  background: "rgba(239, 68, 68, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  width: "100%"
                }}
              >
                <span className="rates-status-text" style={{ fontSize: "0.85rem", color: "#ef4444", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                  ⚠️ Unable to retrieve today&apos;s market prices.
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>
                  Please try again later. Zakat calculations are disabled until valid rates are available.
                </span>
              </div>
            ) : (
              <div 
                className="live-rates-info-banner" 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "10px", 
                  width: "100%", 
                  background: "var(--color-bg-secondary-subtle, rgba(0,0,0,0.02))",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                  padding: "12px 16px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span 
                      style={{ 
                        display: "inline-block", 
                        width: "8px", 
                        height: "8px", 
                        borderRadius: "50%", 
                        background: rates.isCachedPastDay ? "#eab308" : "#10b981" 
                      }} 
                    />
                    <strong style={{ fontSize: "0.85rem", color: rates.isCachedPastDay ? "#d97706" : "#059669" }}>
                      {rates.isCachedPastDay ? "Using Cached Market Prices" : "Updated Today"}
                    </strong>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>
                    Source: <strong>{rates.source}</strong>
                  </span>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", borderTop: "1px solid var(--color-border)", paddingTop: "10px", fontSize: "0.85rem" }}>
                  <div>
                    <span style={{ color: "var(--color-text-secondary)", display: "block", fontSize: "0.75rem" }}>GOLD VALUE</span>
                    <strong>{formatMoney(rates.goldRate, form.currency)} / gram</strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--color-text-secondary)", display: "block", fontSize: "0.75rem" }}>SILVER VALUE</span>
                    <strong>{formatMoney(rates.silverRate, form.currency)} / gram</strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--color-text-secondary)", display: "block", fontSize: "0.75rem" }}>LAST UPDATED</span>
                    <strong>
                      {rates.lastUpdated ? new Date(rates.lastUpdated).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "N/A"}
                    </strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {isRatesValid ? (
            <>
              {/* Calculator mode switcher */}
              <div className="button-group" style={{ marginBottom: "2rem" }}>
                <button
                  type="button"
                  className={mode === "quick" ? "btn btn-primary" : "btn btn-outline"}
                  onClick={() => setMode("quick")}
                >
                  Quick step Wizard
                </button>

                <button
                  type="button"
                  className={mode === "detailed" ? "btn btn-primary" : "btn btn-outline"}
                  onClick={() => setMode("detailed")}
                >
                  Detailed step Wizard
                </button>
              </div>

              {mode === "quick" ? (
                <QuickForm
                  form={form}
                  rates={rates}
                  setForm={setForm}
                />
              ) : (
                <DetailedForm
                  form={form}
                  rates={rates}
                  setForm={setForm}
                />
              )}
            </>
          ) : !isLoading ? (
            <div 
              style={{ 
                padding: "24px", 
                borderRadius: "12px", 
                border: "1px solid #ef4444", 
                background: "rgba(239, 68, 68, 0.05)",
                margin: "2rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <h3 style={{ color: "#ef4444", margin: 0, fontSize: "1.1rem" }}>⚠️ Zakat Calculation Disabled</h3>
              <p style={{ fontSize: "0.9rem", margin: 0, color: "var(--color-text-primary)", lineHeight: "1.5" }}>
                We cannot perform Zakat calculations because current gold and silver market prices are not available. Please ensure you are connected to the internet and click retry to attempt reload.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start", marginTop: "8px" }}
                onClick={fetchRates}
              >
                Retry Fetching Rates
              </button>
            </div>
          ) : null}
        </div>

        {/* Sidebar Panel */}
        <div className="calculator-sidebar">
          <ZakatResult
            result={result}
            currency={form.currency}
            rates={rates}
            nisabStandard={form.nisabStandard}
          />
        </div>
      </div>

      {/* Part 8: Mobile Sticky Result Footer display */}
      <div className="zakat-mobile-sticky-footer" style={{ display: "none" }}>
        <div>
          <span style={{ fontSize: "0.7rem", color: "var(--color-text-secondary)", display: "block" }}>ZAKAT DUE (2.5%)</span>
          <strong style={{ fontSize: "1.2rem", color: "var(--color-primary)" }}>
            {formatMoney(result.zakat, form.currency)}
          </strong>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ padding: "8px 16px", fontSize: "0.85rem" }}
          onClick={() => {
            const resultCard = document.querySelector(".zakat-result-sticky");
            if (resultCard) resultCard.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Breakdown
        </button>
      </div>

      <style jsx global>{`
        @media (max-width: 991px) {
          .zakat-mobile-sticky-footer {
            display: flex !important;
          }
          /* Adjust page margins to prevent overlap by sticky bar */
          body {
            padding-bottom: 70px !important;
          }
        }
      `}</style>
    </Calculator>
  );
}