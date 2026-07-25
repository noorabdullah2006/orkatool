"use client";

import type { Currency, InheritanceResult } from "./types";
import { Landmark, ShieldAlert, BadgePercent, Coins, UserCheck, HelpCircle } from "lucide-react";

type Props = {
  result: InheritanceResult;
  currency: Currency;
};

export default function InheritanceSidebar({ result, currency }: Props) {
  // Helper to format money
  const formatMoney = (val: number) => {
    return `${currency} ${val.toLocaleString()}`;
  };

  return (
    <aside className="zakat-result-sticky" aria-label="Inheritance Live calculation summary">
      {/* Net Distributable Estate Card */}
      <div
        className="calculator-card"
        style={{
          padding: "24px",
          border: "1px solid var(--color-border)",
          borderRadius: "18px",
          borderColor: result.netEstate > 0 ? "var(--color-primary)" : "var(--color-border)",
          background: result.netEstate > 0 ? "var(--color-bg-success-subtle)" : "transparent",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Coins className="text-primary" size={24} style={{ color: "var(--color-primary)" }} />
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", margin: 0, color: "var(--color-text-primary)" }}>
            Net Estate Value
          </h2>
        </div>

        <div style={{ margin: "4px 0" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.05em" }}>
            DISTRIBUTABLE BALANCE
          </span>
          <span style={{ display: "block", fontSize: "2.4rem", fontWeight: "900", lineHeight: "1.1", marginTop: "4px", color: "var(--color-primary)" }}>
            {formatMoney(result.netEstate)}
          </span>
        </div>

        <p style={{ margin: 0, fontSize: "0.85rem", lineHeight: "1.5", color: "var(--color-text-secondary)" }}>
          This is the final net estate value that must be distributed among relatives under Faraid.
        </p>

        {result.wasiyyahCapped && (
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", padding: "10px 14px", background: "#fee2e2", borderRadius: "10px", color: "#b91c1c", fontSize: "0.8rem" }}>
            <ShieldAlert size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
            <span>
              <strong>Note:</strong> Wasiyyah (Will) exceeded the canonical limit of 1/3 of the net assets. It has been capped at {formatMoney(result.wasiyyah)}.
            </span>
          </div>
        )}
      </div>

      {/* Math Ledger Card */}
      <div
        className="calculator-card"
        style={{
          padding: "24px",
          border: "1px solid var(--color-border)",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h3 className="zakat-section-title" style={{ fontSize: "1.05rem", margin: 0 }}>
          Deductions Ledger
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "6px" }}>
              <Landmark size={14} /> Gross Estate Value
            </span>
            <span style={{ fontWeight: "700" }}>{formatMoney(result.grossEstate)}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>
              – Funeral Expenses
            </span>
            <span style={{ fontWeight: "700", color: "#ef4444" }}>– {formatMoney(result.funeralExpenses)}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>
              – Outstanding Debts
            </span>
            <span style={{ fontWeight: "700", color: "#ef4444" }}>– {formatMoney(result.debts)}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>
              – Wasiyyah (Will)
            </span>
            <span style={{ fontWeight: "700", color: "#ef4444" }}>– {formatMoney(result.wasiyyah)}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px", borderTop: "1px solid var(--color-border)" }}>
            <span style={{ fontWeight: "700", color: "var(--color-text-primary)" }}>
              Net Distributable
            </span>
            <span style={{ fontWeight: "800", color: "var(--color-primary)", fontSize: "1rem" }}>
              {formatMoney(result.netEstate)}
            </span>
          </div>
        </div>
      </div>

      {/* Heirs calculation overview */}
      <div
        className="calculator-card"
        style={{
          padding: "20px",
          border: "1px solid var(--color-border)",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3 className="zakat-section-title" style={{ fontSize: "1rem", margin: 0 }}>
          Distribution Status
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Qualifying Heirs:</span>
            <span style={{ fontWeight: "700" }}>{result.heirsCount} active heirs</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Amount Allocated:</span>
            <span style={{ fontWeight: "700", color: "#10b981" }}>{formatMoney(result.totalDistributed)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "6px", borderTop: "1px dashed var(--color-border)" }}>
            <span style={{ color: "var(--color-text-secondary)" }}>Undistributed Estate:</span>
            <span style={{ fontWeight: "700" }}>{formatMoney(result.remainingEstate)}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
