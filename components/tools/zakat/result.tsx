"use client";

import type { Currency, ZakatResult as ResultType, NisabRates, NisabStandard } from "./types";
import { formatMoney } from "./utils";
import { ShieldCheck, Landmark, Percent, Ban } from "lucide-react";


type Props = {
  result: ResultType;
  currency: Currency;
  rates: NisabRates;
  nisabStandard: NisabStandard;
};

export default function ZakatResult({
  result,
  currency,
  rates,
  nisabStandard,
}: Props) {
  return (
    <aside className="zakat-result-sticky" aria-label="Zakat Live calculations summary">
      {/* Live Metal Rates Card */}
      <div 
        className="calculator-card" 
        style={{ 
          padding: "20px", 
          border: "1px solid var(--color-border)", 
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <h3 className="zakat-section-title" style={{ fontSize: "1rem", margin: 0 }}>
          Live Metal Spot prices
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Gold Rate (1g):</span>
            <span style={{ fontWeight: "700" }}>{formatMoney(rates.goldRate, currency)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Silver Rate (1g):</span>
            <span style={{ fontWeight: "700" }}>{formatMoney(rates.silverRate, currency)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "6px", borderTop: "1px dashed var(--color-border)" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Nisab Limit ({nisabStandard}):</span>
            <span style={{ fontWeight: "700", color: "var(--color-primary)" }}>{formatMoney(result.nisab, currency)}</span>
          </div>
        </div>
      </div>

      {/* Main calculation results card */}
      <div
        className={`calculator-card ${result.eligible ? "eligible" : "not-eligible"}`}
        style={{
          padding: "24px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "18px",
          borderColor: result.eligible ? "#6ee7b7" : "#fcd34d",
          background: result.eligible ? "var(--color-bg-success-subtle)" : "var(--color-bg-warning-subtle)",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {result.eligible ? (
            <ShieldCheck className="text-emerald-500" size={24} style={{ color: "#10b981" }} />
          ) : (
            <Ban className="text-amber-500" size={24} style={{ color: "#f59e0b" }} />
          )}
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", margin: 0, color: result.eligible ? "#065f46" : "#92400e" }}>
            {result.eligible ? "Zakat Duty Obligated" : "Below Nisab threshold"}
          </h2>
        </div>

        <div style={{ margin: "4px 0" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.05em" }}>
            ZAKAT CONTRIBUTION (2.5%)
          </span>
          <span style={{ display: "block", fontSize: "2.4rem", fontWeight: "900", lineHeight: "1.1", marginTop: "4px", color: result.eligible ? "#10b981" : "var(--color-text-secondary)" }}>
            {formatMoney(result.zakat, currency)}
          </span>
        </div>

        <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
          {result.eligible
            ? "Your net wealth has met the Nisab threshold. Zakat is due at 2.5% on qualifying wealth assets."
            : "Your net wealth doesn't exceed the Nisab. You are currently exempt from the Zakat obligation."}
        </p>
      </div>

      {/* Live detailed metrics */}
      <div 
        className="calculator-card" 
        style={{ 
          padding: "24px", 
          border: "1px solid var(--color-border)", 
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}
      >
        <h3 className="zakat-section-title" style={{ fontSize: "1.05rem", margin: 0 }}>
          Live calculations Ledger
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Landmark size={14} /> Gross Assets
            </span>
            <span style={{ fontWeight: "700" }}>{formatMoney(result.totalAssets, currency)}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Percent size={14} /> Deductible Liabilities
            </span>
            <span style={{ fontWeight: "700", color: "#ef4444" }}>– {formatMoney(result.deductibleDebts, currency)}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px", borderTop: "1px solid var(--color-border)" }}>
            <span style={{ fontWeight: "700", color: "var(--color-text-primary)" }}>
              Net Worth Net Wealth
            </span>
            <span style={{ fontWeight: "800", color: "var(--color-primary)", fontSize: "1rem" }}>
              {formatMoney(result.netWealth, currency)}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}