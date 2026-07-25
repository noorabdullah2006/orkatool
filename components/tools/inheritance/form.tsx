"use client";

import { useMemo, useState } from "react";
import Calculator from "@/components/tool/calculator";
import { DEFAULT_FORM, CURRENCIES, MADHABS } from "./constants";
import { calculateInheritance } from "./engine";
import type { InheritanceFormData, HeirsCount } from "./types";
import InheritanceSidebar from "./sidebar";
import InheritanceResultView from "./result";
import { ArrowLeft, ArrowRight, RotateCcw, User, Heart, Users, HelpCircle } from "lucide-react";

/* =========================================================
   Standard Numeric Input Component with Increment/Decrement
   ========================================================= */
type NumericFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  tooltipText?: string;
};

function NumericField({ label, value, onChange, min = 0, max = 20, tooltipText }: NumericFieldProps) {
  return (
    <div className="zakat-field-wrapper form-group" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px dashed var(--color-border)" }}>
      <div style={{ flex: 1, paddingRight: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <label className="form-label" style={{ margin: 0, fontWeight: "600" }}>{label}</label>
          {tooltipText && (
            <div className="tooltip-container">
              <span className="tooltip-trigger" style={{ cursor: "pointer", fontSize: "0.8rem" }}>ⓘ</span>
              <div className="tooltip-content">{tooltipText}</div>
            </div>
          )}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <button
          type="button"
          className="btn btn-outline"
          style={{ width: "36px", height: "36px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          -
        </button>
        <span style={{ minWidth: "32px", textAlign: "center", fontWeight: "700", fontSize: "1rem" }}>{value}</span>
        <button
          type="button"
          className="btn btn-outline"
          style={{ width: "36px", height: "36px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   Standard Currency Input Field
   ========================================================= */
type CurrencyFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  symbol: string;
  tooltipText?: string;
};

function CurrencyField({ label, value, onChange, symbol, tooltipText }: CurrencyFieldProps) {
  const [displayVal, setDisplayVal] = useState(value === 0 ? "" : value.toLocaleString("en-US"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const clean = raw.replace(/[^0-9]/g, "");
    const parsed = clean === "" ? 0 : parseInt(clean, 10);
    
    onChange(parsed);
    setDisplayVal(clean === "" ? "" : parsed.toLocaleString("en-US"));
  };

  return (
    <div className="zakat-field-wrapper form-group">
      <div className="zakat-field-header" style={{ display: "flex", justifyContent: "space-between" }}>
        <label className="form-label">{label}</label>
        {tooltipText && (
          <div className="tooltip-container">
            <span className="tooltip-trigger" style={{ cursor: "pointer" }}>ⓘ</span>
            <div className="tooltip-content">{tooltipText}</div>
          </div>
        )}
      </div>
      <div className="input-with-symbol" style={{ position: "relative" }}>
        <span className="input-symbol-prefix" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>
          {symbol}
        </span>
        <input
          type="text"
          className="form-input"
          style={{ paddingLeft: "32px", width: "100%" }}
          value={displayVal}
          onChange={handleChange}
          placeholder="0"
        />
      </div>
    </div>
  );
}

/* =========================================================
   Main Form Code
   ========================================================= */
export default function InheritanceForm() {
  const [form, setForm] = useState<InheritanceFormData>(DEFAULT_FORM);
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const currencySymbol = useMemo(() => {
    const curr = CURRENCIES.find((c) => c.code === form.currency);
    return curr ? curr.symbol : "$";
  }, [form.currency]);

  const result = useMemo(() => calculateInheritance(form), [form]);

  const handleReset = () => {
    setForm(DEFAULT_FORM);
    setStep(1);
  };

  const updateHeir = (key: keyof HeirsCount, val: number) => {
    setForm((prev) => ({
      ...prev,
      heirs: {
        ...prev.heirs,
        [key]: val,
      },
    }));
  };

  return (
    <Calculator
      title="Islamic Inheritance Calculator"
      description="Perform complex Faraid math calculations for deceased relative estates. Accounts for Sunni schools of thought rules, exclusions, Awl, and Radd."
    >
      <div className="calculator-grid">
        {/* Main Wizard Form Panel */}
        <div className="calculator-main text-left">
          {/* Wizard step tracker */}
          <div className="wizard-progress-bar" style={{ marginBottom: "2.5rem" }}>
            <div className="wizard-progress-line" />
            <div
              className="wizard-progress-line-active"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            />
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
              <div
                key={s}
                className={`wizard-step-node ${s === step ? "active" : ""} ${
                  s < step ? "completed" : ""
                }`}
              >
                <div className="wizard-step-circle">{s}</div>
                <span className="wizard-step-label">Step {s}</span>
              </div>
            ))}
          </div>

          <div style={{ minHeight: "360px" }}>
            {/* STEP 1: DECEASED INFO & CONFIG */}
            {step === 1 && (
              <section className="calculator-section">
                <div className="section-heading">
                  <h2>Step 1: Deceased relative settings</h2>
                  <p>Define the config variables regarding the deceased gender, madhab rules, and display currencies.</p>
                </div>

                <div className="selector-grid">
                  <div className="form-group">
                    <label className="form-label">Deceased relative Gender</label>
                    <select
                      className="form-select"
                      value={form.deceasedGender}
                      onChange={(e) => {
                        const val = e.target.value as "male" | "female";
                        setForm((prev) => ({
                          ...prev,
                          deceasedGender: val,
                          heirs: {
                            ...prev.heirs,
                            husband: 0,
                            wife: 0,
                          },
                        }));
                      }}
                    >
                      <option value="male">Male (Decendent has Wife/Wives)</option>
                      <option value="female">Female (Decendent has Husband)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Select Currency</label>
                    <select
                      className="form-select"
                      value={form.currency}
                      onChange={(e) => setForm((prev) => ({ ...prev, currency: e.target.value as any }))}
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code} - {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: "12px" }}>
                  <label className="form-label">Madhab rules (Faraid Standard)</label>
                  <select
                    className="form-select"
                    value={form.madhab}
                    onChange={(e) => setForm((prev) => ({ ...prev, madhab: e.target.value as any }))}
                  >
                    {MADHABS.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.label} – {m.value === "hanafi" ? "Grandfather excludes siblings" : "Grandfather shares with siblings"}
                      </option>
                    ))}
                  </select>
                  <span className="zakat-helper-text" style={{ display: "block", marginTop: "8px" }}>
                    {MADHABS.find((m) => m.value === form.madhab)?.description}
                  </span>
                </div>
              </section>
            )}

            {/* STEP 2: ESTATE VALUE & LIABILITIES */}
            {step === 2 && (
              <section className="calculator-section">
                <div className="section-heading">
                  <h2>Step 2: Estate & Liabilities details</h2>
                  <p>Input estate values, funeral costs, debts, and wasiyyah details. Deductions occur in canonical order.</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <CurrencyField
                    label="Gross Estate Value"
                    value={form.estate}
                    onChange={(val) => setForm((prev) => ({ ...prev, estate: val }))}
                    symbol={currencySymbol}
                    tooltipText="Total cash, banking assets, gold properties, and land valuations belonging to the deceased relative."
                  />

                  <CurrencyField
                    label="Funeral Expenses"
                    value={form.funeral}
                    onChange={(val) => setForm((prev) => ({ ...prev, funeral: val }))}
                    symbol={currencySymbol}
                    tooltipText="Reasonable funeral cost, burial expenses, to be deducted first."
                  />

                  <CurrencyField
                    label="Outstanding Debts"
                    value={form.debts}
                    onChange={(val) => setForm((prev) => ({ ...prev, debts: val }))}
                    symbol={currencySymbol}
                    tooltipText="Unpaid debts or credits belonging to creditors that must be cleared prior to inheritance distribution."
                  />

                  <CurrencyField
                    label="Wasiyyah (Bequest wishes)"
                    value={form.wasiyyah}
                    onChange={(val) => setForm((prev) => ({ ...prev, wasiyyah: val }))}
                    symbol={currencySymbol}
                    tooltipText="Legitimate wills or donations to non-inheritors. Max limit is capped at 1/3 of net assets after clearing funeral and debts."
                  />
                </div>
              </section>
            )}

            {/* STEP 3: RELATIVES SELECTOR */}
            {step === 3 && (
              <section className="calculator-section">
                <div className="section-heading">
                  <h2>Step 3: Select Survivors (Heirs)</h2>
                  <p>Specify the quantities of surviving family relatives. Sub-sections collapse for layout ease.</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {/* Category A: Spouse */}
                  <div style={{ padding: "18px", border: "1px solid var(--color-border)", borderRadius: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid var(--color-border)", paddingBottom: "6px" }}>
                      <Heart size={18} className="text-primary" style={{ color: "var(--color-primary)" }} />
                      <strong style={{ fontSize: "1rem" }}>Spouse Survivors</strong>
                    </div>
                    {form.deceasedGender === "female" ? (
                      <NumericField
                        label="Husband"
                        value={form.heirs.husband}
                        onChange={(val) => updateHeir("husband", val)}
                        max={1}
                        tooltipText="Note: Deceased was female, so has up to 1 husband."
                      />
                    ) : (
                      <NumericField
                        label="Wife / Wives count"
                        value={form.heirs.wife}
                        onChange={(val) => updateHeir("wife", val)}
                        max={4}
                        tooltipText="Note: Deceased was male, so has up to 4 wives who will split their share equally."
                      />
                    )}
                  </div>

                  {/* Category B: Children */}
                  <div style={{ padding: "18px", border: "1px solid var(--color-border)", borderRadius: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid var(--color-border)", paddingBottom: "6px" }}>
                      <Users size={18} className="text-primary" style={{ color: "var(--color-primary)" }} />
                      <strong style={{ fontSize: "1rem" }}>Children & Descendants</strong>
                    </div>
                    <NumericField label="Sons" value={form.heirs.sons} onChange={(val) => updateHeir("sons", val)} max={12} />
                    <NumericField label="Daughters" value={form.heirs.daughters} onChange={(val) => updateHeir("daughters", val)} max={12} />
                    <NumericField
                      label="Son's Sons (Grandsons)"
                      value={form.heirs.grandsons}
                      onChange={(val) => updateHeir("grandsons", val)}
                      max={10}
                      tooltipText="Excluded if any Son is surviving."
                    />
                    <NumericField
                      label="Son's Daughters (Granddaughters)"
                      value={form.heirs.granddaughters}
                      onChange={(val) => updateHeir("granddaughters", val)}
                      max={10}
                      tooltipText="Excluded if any Son is surviving or if there are 2+ daughters and no grandson."
                    />
                  </div>

                  {/* Category C: Parents & Grandparents */}
                  <div style={{ padding: "18px", border: "1px solid var(--color-border)", borderRadius: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid var(--color-border)", paddingBottom: "6px" }}>
                      <User size={18} className="text-primary" style={{ color: "var(--color-primary)" }} />
                      <strong style={{ fontSize: "1rem" }}>Parents & Grandparents</strong>
                    </div>
                    <NumericField label="Father" value={form.heirs.father} onChange={(val) => updateHeir("father", val)} max={1} />
                    <NumericField label="Mother" value={form.heirs.mother} onChange={(val) => updateHeir("mother", val)} max={1} />
                    <NumericField
                      label="Paternal Grandfather"
                      value={form.heirs.paternalGrandfather}
                      onChange={(val) => updateHeir("paternalGrandfather", val)}
                      max={1}
                      tooltipText="Excluded by Father."
                    />
                    <NumericField
                      label="Paternal Grandmother"
                      value={form.heirs.paternalGrandmother}
                      onChange={(val) => updateHeir("paternalGrandmother", val)}
                      max={1}
                      tooltipText="Excluded by Mother or Father."
                    />
                    <NumericField
                      label="Maternal Grandmother"
                      value={form.heirs.maternalGrandmother}
                      onChange={(val) => updateHeir("maternalGrandmother", val)}
                      max={1}
                      tooltipText="Excluded by Mother."
                    />
                  </div>

                  {/* Category D: Siblings */}
                  <div style={{ padding: "18px", border: "1px solid var(--color-border)", borderRadius: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid var(--color-border)", paddingBottom: "6px" }}>
                      <Users size={18} className="text-primary" style={{ color: "var(--color-primary)" }} />
                      <strong style={{ fontSize: "1rem" }}>Siblings</strong>
                    </div>
                    <NumericField label="Full Brothers" value={form.heirs.fullBrothers} onChange={(val) => updateHeir("fullBrothers", val)} max={10} />
                    <NumericField label="Full Sisters" value={form.heirs.fullSisters} onChange={(val) => updateHeir("fullSisters", val)} max={10} />
                    <NumericField label="Consanguine Brothers (Paternal)" value={form.heirs.consanguineBrothers} onChange={(val) => updateHeir("consanguineBrothers", val)} max={10} />
                    <NumericField label="Consanguine Sisters (Paternal)" value={form.heirs.consanguineSisters} onChange={(val) => updateHeir("consanguineSisters", val)} max={10} />
                    <NumericField label="Uterine Brothers (Maternal)" value={form.heirs.uterineBrothers} onChange={(val) => updateHeir("uterineBrothers", val)} max={10} />
                    <NumericField label="Uterine Sisters (Maternal)" value={form.heirs.uterineSisters} onChange={(val) => updateHeir("uterineSisters", val)} max={10} />
                  </div>
                </div>
              </section>
            )}

            {/* STEP 4: REVIEW ENTIRED DATA */}
            {step === 4 && (
              <section className="calculator-section">
                <div className="section-heading">
                  <h2>Step 4: Review entered quantities</h2>
                  <p>Double check that the configurables and survivors counts align perfectly prior to calculations.</p>
                </div>

                <div className="wealth-breakdown" style={{ border: "1px solid var(--color-border)", borderRadius: "12px", padding: "16px 20px" }}>
                  <div className="breakdown-row">
                    <span className="breakdown-label">Deceased Gender:</span>
                    <span className="breakdown-value" style={{ textTransform: "capitalize" }}>{form.deceasedGender}</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-label">Madhab Rules:</span>
                    <span className="breakdown-value" style={{ textTransform: "capitalize" }}>{form.madhab}</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-label">Gross Estate:</span>
                    <span className="breakdown-value">{currencySymbol} {form.estate.toLocaleString()}</span>
                  </div>
                  <div className="breakdown-row">
                    <span className="breakdown-label">Net Estate (After deductions):</span>
                    <span className="breakdown-value" style={{ color: "var(--color-primary)" }}>{currencySymbol} {result.netEstate.toLocaleString()}</span>
                  </div>
                  
                  {/* Selected Active Survivors Listing */}
                  <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--color-border)" }}>
                    <strong style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", display: "block", marginBottom: "8px" }}>
                      Surviving Relatives:
                    </strong>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {Object.entries(form.heirs)
                        .filter(([_, q]) => q > 0)
                        .map(([k, q]) => (
                          <span
                            key={k}
                            style={{
                              background: "var(--color-bg-secondary-subtle)",
                              border: "1px solid var(--color-border)",
                              padding: "4px 10px",
                              borderRadius: "8px",
                              fontSize: "0.8rem",
                              fontWeight: "600",
                            }}
                          >
                            {k.replace(/([A-Z])/g, " $1").trim()}: {q}
                          </span>
                        ))}
                      {Object.values(form.heirs).every((q) => q === 0) && (
                        <span style={{ fontSize: "0.8rem", color: "#ef4444" }}>No heirs selected yet.</span>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* STEP 5: RESULTS SCREEN */}
            {step === 5 && (
              <InheritanceResultView
                result={result}
                currency={form.currency}
                onReset={handleReset}
              />
            )}
          </div>

          {/* Action buttons footer */}
          <div className="wizard-actions" style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "24px" }}>
            <button
              type="button"
              className="btn btn-outline"
              disabled={step === 1}
              style={{ display: "flex", gap: "8px", alignItems: "center" }}
              onClick={() => setStep((s) => Math.max(1, s - 1))}
            >
              <ArrowLeft size={16} /> Previous
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                className="btn btn-primary"
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
                onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
              >
                Continue & Next <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline"
                style={{ display: "flex", gap: "8px", alignItems: "center", color: "#f87171", borderColor: "#f87171" }}
                onClick={handleReset}
              >
                <RotateCcw size={16} /> Reset All
              </button>
            )}
          </div>
        </div>

        {/* Sidebar calculations display */}
        <div className="calculator-sidebar">
          <InheritanceSidebar result={result} currency={form.currency} />
        </div>
      </div>
    </Calculator>
  );
}
