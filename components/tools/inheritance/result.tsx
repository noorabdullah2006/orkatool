"use client";

import type { Currency, InheritanceResult, HeirShare } from "./types";
import { Printer, Copy, Share2, Info, CheckCircle2, AlertCircle } from "lucide-react";

type Props = {
  result: InheritanceResult;
  currency: Currency;
  onReset: () => void;
};

export default function InheritanceResultView({ result, currency, onReset }: Props) {
  const formatMoney = (val: number) => {
    return `${currency} ${val.toLocaleString()}`;
  };

  const activeShares = result.shares.filter((s) => !s.isExcluded && s.percentage > 0);

  const handleCopySummary = () => {
    let text = `OrkaTool Islamic Inheritance Calculation Summary (${currency}):\n`;
    text += `--------------------------------------------------\n`;
    text += `Net Estate Value: ${formatMoney(result.netEstate)}\n`;
    text += `Total Allocated: ${formatMoney(result.totalDistributed)}\n`;
    text += `--------------------------------------------------\n`;
    text += `Heir Shares:\n`;
    activeShares.forEach((s) => {
      text += `- ${s.name} (${s.relation}): ${s.fraction} | ${s.percentage}% | Only share: ${formatMoney(s.amount)}\n`;
    });
    text += `--------------------------------------------------\n`;
    text += `Generated via OrkaTool: ${window.location.origin}/calculator-tools/inheritance-calculator`;
    
    navigator.clipboard.writeText(text);
    alert("Inheritance calculation summary copied to clipboard!");
  };

  const handleWhatsAppShare = () => {
    let text = `My Islamic Inheritance (Faraid) calculation summary via OrkaTool:\n`;
    text += `Net Estate: ${formatMoney(result.netEstate)}\n`;
    activeShares.forEach((s) => {
      text += `* ${s.name}: ${s.fraction} (${s.percentage}%) = ${formatMoney(s.amount)}\n`;
    });
    text += `Calculate yours: ${window.location.origin}/calculator-tools/inheritance-calculator`;
    
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      {/* 1. Header Banner */}
      <div
        className="eligibility eligible"
        style={{
          padding: "24px",
          borderRadius: "18px",
          textAlign: "left",
          border: "1px solid #6ee7b7",
          background: "var(--color-bg-success-subtle)",
          display: "flex",
          gap: "14px",
          alignItems: "flex-start",
        }}
      >
        <CheckCircle2 className="text-emerald-500" size={24} style={{ color: "#10b981", flexShrink: 0, marginTop: "2px" }} />
        <div>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "800", margin: 0, color: "#065f46" }}>
            Inheritance Distributed Succesfully
          </h2>
          <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
            The Faraid algorithm has processed all exclusion rules and allocated shares out of {formatMoney(result.netEstate)}.
          </p>
        </div>
      </div>

      {result.raddWarning && (
        <div
          className="eligibility warning"
          style={{
            padding: "20px",
            borderRadius: "16px",
            textAlign: "left",
            border: "1px solid #fde047",
            background: "var(--color-bg-warning-subtle, #fefce8)",
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          <AlertCircle className="text-amber-500" size={20} style={{ color: "#d97706", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: "700", margin: 0, color: "#92400e" }}>
              Remaining Estate Notice
            </h4>
            <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
              {result.raddWarning}
            </p>
          </div>
        </div>
      )}

      {/* 2. Visual Proportional Shares Chart */}
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "12px", color: "var(--color-text-primary)" }}>
          Visual Share Breakdown
        </h3>
        
        {activeShares.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Multi-segmented pure CSS progress bar */}
            <div
              style={{
                height: "28px",
                width: "100%",
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                background: "#f1f5f9",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.06)",
              }}
            >
              {activeShares.map((s, idx) => {
                const colors = [
                  "var(--color-primary)",
                  "#10b981",
                  "#f59e0b",
                  "#ec4899",
                  "#8b5cf6",
                  "#06b6d4",
                  "#f97316",
                  "#14b8a6"
                ];
                return (
                  <div
                    key={s.id}
                    style={{
                      width: `${s.percentage}%`,
                      height: "100%",
                      background: colors[idx % colors.length],
                      transition: "width 0.5s ease",
                    }}
                    title={`${s.name}: ${s.percentage}%`}
                  />
                );
              })}
            </div>
            
            {/* Color key legends */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "4px" }}>
              {activeShares.map((s, idx) => {
                const colors = [
                  "var(--color-primary)",
                  "#10b981",
                  "#f59e0b",
                  "#ec4899",
                  "#8b5cf6",
                  "#06b6d4",
                  "#f97316",
                  "#14b8a6"
                ];
                return (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem" }}>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        background: colors[idx % colors.length],
                        display: "inline-block"
                      }}
                    />
                    <span style={{ fontWeight: "600", color: "var(--color-text-primary)" }}>{s.name}</span>
                    <span style={{ color: "var(--color-text-secondary)" }}>({s.percentage}%)</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
            No heirs qualified for distribution.
          </p>
        )}
      </div>

      {/* 3. Detailed Shares Ledger Table */}
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "12px", color: "var(--color-text-primary)" }}>
          Detailed Shares Table
        </h3>
        <div style={{ overflowX: "auto", border: "1px solid var(--color-border)", borderRadius: "12px" }}>
          <table className="zakat-glossary-table" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--color-bg-secondary-subtle)", borderBottom: "1px solid var(--color-border)" }}>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Relation</th>
                <th style={{ textAlign: "left", padding: "12px 16px" }}>Heir Category</th>
                <th style={{ textAlign: "center", padding: "12px 16px" }}>Faraid Share</th>
                <th style={{ textAlign: "center", padding: "12px 16px" }}>Percentage</th>
                <th style={{ textAlign: "right", padding: "12px 16px" }}>Inherited Net Value</th>
              </tr>
            </thead>
            <tbody>
              {result.shares.map((s) => (
                <tr
                  key={s.id}
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                    opacity: s.isExcluded ? 0.45 : 1,
                    background: s.isExcluded ? "var(--color-bg-secondary-subtle)" : "transparent"
                  }}
                >
                  <td style={{ padding: "14px 16px", fontWeight: "600" }}>{s.relation}</td>
                  <td style={{ padding: "14px 16px" }}>
                    <div>
                      <strong>{s.name}</strong>
                      {s.isExcluded && (
                        <span style={{ fontSize: "0.75rem", display: "block", color: "#ef4444", fontWeight: "500" }}>
                          Excluded
                        </span>
                      )}
                    </div>
                  </td>
                  <td style={{ padding: "14px 16px", textAlign: "center", fontFamily: "monospace", fontSize: "0.95rem" }}>
                    {s.isExcluded ? "—" : s.fraction}
                  </td>
                  <td style={{ padding: "14px 16px", textAlign: "center", fontWeight: "600" }}>
                    {s.isExcluded ? "0%" : `${s.percentage}%`}
                  </td>
                  <td style={{ padding: "14px 16px", textAlign: "right", fontWeight: "700" }}>
                    {s.isExcluded ? formatMoney(0) : formatMoney(s.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Trace Log / Faraid Canonical Explanations */}
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "12px", color: "var(--color-text-primary)" }}>
          Faraid Rules Applied
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {result.shares.map((s) => (
            <div
              key={s.id}
              className="calculator-card"
              style={{
                padding: "16px",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                fontSize: "0.85rem",
              }}
            >
              <Info size={16} className="text-primary" style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>{s.name} share reasoning:</strong>
                <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)", lineHeight: "1.4" }}>
                  {s.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Math Step-by-Step Tracers */}
      <div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "12px", color: "var(--color-text-primary)" }}>
          Calculation Steps History
        </h3>
        <div
          style={{
            borderLeft: "2px solid var(--color-primary)",
            paddingLeft: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginLeft: "8px"
          }}
        >
          {result.trace.map((step, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "-25px",
                  top: "2px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                  border: "3px solid #fff",
                  boxShadow: "0 0 0 2px var(--color-primary)",
                }}
              />
              <strong style={{ fontSize: "0.9rem", color: "var(--color-text-primary)" }}>
                Step {idx + 1}: {step.title}
              </strong>
              <p style={{ margin: "4px 0 0", fontSize: "0.825rem", color: "var(--color-text-secondary)", lineHeight: "1.4" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Interaction Actions Panel */}
      <div
        className="button-group"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <button
          type="button"
          className="btn btn-outline"
          style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}
          onClick={() => window.print()}
        >
          <Printer size={16} /> Print Report
        </button>
        <button
          type="button"
          className="btn btn-outline"
          style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}
          onClick={handleCopySummary}
        >
          <Copy size={16} /> Copy Summary
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}
          onClick={handleWhatsAppShare}
        >
          <Share2 size={16} /> Share WhatsApp
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}
          onClick={onReset}
        >
          Calculate New
        </button>
      </div>

      {/* 7. Permanent Scope Disclosure */}
      <div
        className="calculator-card"
        style={{
          padding: "24px",
          border: "1px solid var(--color-border)",
          borderRadius: "16px",
          background: "var(--color-bg-secondary-subtle, #f8fafc)",
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          marginTop: "12px",
        }}
      >
        <Info size={24} className="text-primary" style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
        <div style={{ fontSize: "0.875rem", lineHeight: "1.6" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "700", margin: "0 0 12px 0", color: "var(--color-text-primary)" }}>
            Scope of this Calculator
          </h3>
          <p style={{ margin: "0 0 8px 0", color: "var(--color-text-secondary)" }}>
            This calculator currently supports:
          </p>
          <ul style={{ margin: "0 0 16px 0", paddingLeft: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "4px", color: "var(--color-text-secondary)" }}>
            <li>Husband</li>
            <li>Wife/Wives</li>
            <li>Sons</li>
            <li>Daughters</li>
            <li>Son&apos;s sons</li>
            <li>Son&apos;s daughters</li>
            <li>Father</li>
            <li>Mother</li>
            <li>Grandparents</li>
            <li>Full siblings</li>
            <li>Consanguine siblings</li>
            <li>Uterine siblings</li>
          </ul>
          <p style={{ margin: "0 0 8px 0", color: "var(--color-text-secondary)" }}>
            The following relatives are <strong>NOT</strong> currently supported:
          </p>
          <ul style={{ margin: "0 0 16px 0", paddingLeft: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "4px", color: "var(--color-text-secondary)" }}>
            <li>Nephews</li>
            <li>Nieces</li>
            <li>Uncles</li>
            <li>Aunts</li>
            <li>Cousins</li>
            <li>Dhawul Arham (distant relatives)</li>
          </ul>
          <p style={{ margin: "12px 0 0 0", color: "var(--color-text-primary)", fontWeight: "500" }}>
            If the deceased is survived only by unsupported relatives, the result must be verified with a qualified Islamic scholar.
          </p>
        </div>
      </div>
    </div>
  );
}
