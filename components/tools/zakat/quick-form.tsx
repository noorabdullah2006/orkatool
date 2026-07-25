"use client";

import { useState, useMemo } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ZakatFormData, NisabRates, Currency, Madhab } from "./types";
import { CURRENCIES, MADHABS, NISAB_OPTIONS } from "./options";
import { calculateZakat, formatMoney } from "./utils";
import { ArrowLeft, ArrowRight, RotateCcw, Copy, Printer, Share2 } from "lucide-react";
import { ZakatInput } from "./components/zakat-input";

type Props = {
  form: ZakatFormData;
  rates: NisabRates;
  setForm: Dispatch<SetStateAction<ZakatFormData>>;
};

/* =========================================================
   QuickForm Multi-step Wizard
   ========================================================= */
export default function QuickForm({ form, rates, setForm }: Props) {
  const [step, setStep] = useState(1);
  const totalSteps = 7;

  // Retrieve Active Currency Symbol
  const currencySymbol = useMemo(() => {
    const currency = CURRENCIES.find((c) => c.code === form.currency);
    return currency ? currency.symbol : "$";
  }, [form.currency]);

  // Live Calculations for Subtotals
  const result = useMemo(() => calculateZakat(form, rates), [form, rates]);

  const cashSubtotal = useMemo(() => {
    return (
      (form.cash.bankBalance || 0) +
      (form.cash.cashInHand || 0) +
      (form.cash.lentMoney || 0)
    );
  }, [form.cash]);

  const goldValue = useMemo(() => {
    return (form.metals.goldWeight || 0) * (rates.goldRate || 0);
  }, [form.metals.goldWeight, rates.goldRate]);

  const silverValue = useMemo(() => {
    return (form.metals.silverWeight || 0) * (rates.silverRate || 0);
  }, [form.metals.silverWeight, rates.silverRate]);

  const investmentSubtotal = useMemo(() => {
    return (
      (form.investments.stocks || 0) +
      (form.investments.businessInventory || 0)
    );
  }, [form.investments]);

  const debtSubtotal = useMemo(() => {
    return (
      (form.debts.shortTermDebt || 0) +
      (form.debts.utilityBills || 0) +
      (form.debts.employeeSalaries || 0)
    );
  }, [form.debts]);

  // Copy Zakat Calculation Summary to Clipboard
  const handleCopySummary = () => {
    const text = `OrkaTool Zakat Summary (${form.currency}):\n` +
      `- Total Nisab Limit: ${formatMoney(result.nisab, form.currency)}\n` +
      `- Total Net Wealth: ${formatMoney(result.netWealth, form.currency)}\n` +
      `- Total Zakat Due: ${formatMoney(result.zakat, form.currency)}\n` +
      `Date Calculated: ${new Date().toLocaleDateString()}`;
    navigator.clipboard.writeText(text);
    alert("Zakat summary copied to clipboard!");
  };

  // Share via Whatsapp Web link
  const handleWhatsAppShare = () => {
    const text = `My OrkaTool Zakat calculation summary:\n` +
      `Total Net Wealth: ${formatMoney(result.netWealth, form.currency)}\n` +
      `Total Zakat Due (2.5%): ${formatMoney(result.zakat, form.currency)}\n` +
      `Try it free: ${window.location.origin}/tools/zakat-calculator`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Reset Form back to default empty fields
  const handleReset = () => {
    setForm({
      currency: "PKR",
      madhab: "hanafi",
      nisabStandard: "silver",
      mode: "quick",
      cash: {
        bankBalance: 0,
        cashInHand: 0,
        lentMoney: 0,
        futureSavings: 0,
      },
      metals: {
        goldWeight: 0,
        silverWeight: 0,
        jewelryWeight: 0,
        jewelryPurity: "24K",
        isRegularJewelry: true,
      },
      investments: {
        stocks: 0,
        businessInventory: 0,
        rentalIncome: 0,
        savingsCertificates: 0,
      },
      debts: {
        shortTermDebt: 0,
        longTermDebt: 0,
        taxes: 0,
        utilityBills: 0,
        employeeSalaries: 0,
      },
    });
    setStep(1);
  };

  return (
    <div className="zakat-wizard-container">
      {/* Wizard Step Progress Tracker */}
      <div className="wizard-progress-bar">
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
        {/* STEP 1: INITIAL SETTINGS */}
        {step === 1 && (
          <section className="calculator-section">
            <div className="section-heading">
              <h2>Step 1: Core Configuration</h2>
              <p>State your default parameters to compute local thresholds of gold and silver Nisab.</p>
            </div>
            
            <div className="selector-grid">
              <div className="form-group">
                <label className="form-label">Select Currency</label>
                <select
                  className="form-select"
                  value={form.currency}
                  onChange={(e) => setForm({ ...form, currency: e.target.value as Currency })}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code} - {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">School of Thought (Madhab)</label>
                <select
                  className="form-select"
                  value={form.madhab}
                  onChange={(e) => setForm({ ...form, madhab: e.target.value as Madhab })}
                >
                  {MADHABS.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label} ({m.value === "hanafi" ? "Jewelry Zakatable" : "Jewelry Exempt"})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="zakat-field-header">
                <label className="form-label">Nisab Threshold Standard</label>
                <div className="tooltip-container">
                  <span className="tooltip-trigger" style={{ cursor: "pointer" }}>ⓘ</span>
                  <div className="tooltip-content">
                    Nisab is the minimum wealth standard threshold. Gold standard uses 87.48g; Silver standard uses 612.36g (recommended).
                  </div>
                </div>
              </div>
              <div className="nisab-grid">
                {NISAB_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`nisab-card ${form.nisabStandard === opt.value ? "active" : ""}`}
                    onClick={() => setForm({ ...form, nisabStandard: opt.value })}
                  >
                    <div className="nisab-card-top">
                      <h3>{opt.label}</h3>
                      {opt.recommended && <span className="recommended-badge">Recommended</span>}
                    </div>
                    <div className="nisab-grams">{opt.grams}g</div>
                    <div className="nisab-price">
                      {form.currency}{" "}
                      {opt.value === "gold"
                        ? Math.round(rates.goldThreshold).toLocaleString()
                        : Math.round(rates.silverThreshold).toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="readonly-box" style={{ height: "auto", padding: "12px 18px" }}>
              <label>Live Metals Rates (per gram)</label>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                <span>Gold Rate: <strong>{currencySymbol} {Math.round(rates.goldRate).toLocaleString()}</strong></span>
                <span>Silver Rate: <strong>{currencySymbol} {Math.round(rates.silverRate).toLocaleString()}</strong></span>
              </div>
              <span className="zakat-helper-text" style={{ display: "block", marginTop: "6px" }}>
                Prices last synced on: {rates.lastUpdated}
              </span>
            </div>
          </section>
        )}

        {/* STEP 2: CASH & BANK */}
        {step === 2 && (
          <section className="calculator-section">
            <div className="section-heading">
              <h2>Step 2: Liquid Cash & Bank Balances</h2>
              <p>Provide your total fluid cash savings, bank balance, and short term loaned money.</p>
            </div>
            
            <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <ZakatInput
                label="Bank Account Balance"
                value={form.cash.bankBalance}
                onChange={(val) => setForm({ ...form, cash: { ...form.cash, bankBalance: val } })}
                symbol={currencySymbol}
                tooltipText="All funds stored securely in checking, savings, or joint bank accounts."
                helperText="Includes liquid cash holdings in currency reserves."
              />
              <ZakatInput
                label="Physical Cash in Hand"
                value={form.cash.cashInHand}
                onChange={(val) => setForm({ ...form, cash: { ...form.cash, cashInHand: val } })}
                symbol={currencySymbol}
                tooltipText="Any money you keep physically at home or in wallets."
              />
              <ZakatInput
                label="Money Lent to Others"
                value={form.cash.lentMoney}
                onChange={(val) => setForm({ ...form, cash: { ...form.cash, lentMoney: val } })}
                symbol={currencySymbol}
                tooltipText="Money you lent to friends or family that you reasonably expect to be repaid."
              />

              <div className="readonly-box">
                <label>Liquid Cash Subtotal</label>
                <strong>{currencySymbol} {cashSubtotal.toLocaleString()}</strong>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3: GOLD ASSETS */}
        {step === 3 && (
          <section className="calculator-section">
            <div className="section-heading">
              <h2>Step 3: Gold Possessions</h2>
              <p>Add all owned precious gold assets or ornaments. Valuation is auto-calculated based on live rates.</p>
            </div>
            
            <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <ZakatInput
                label="Gold Weight (Grams)"
                value={form.metals.goldWeight}
                onChange={(val) => setForm({ ...form, metals: { ...form.metals, goldWeight: val } })}
                symbol="g"
                tooltipText="Total weight in grams of gold items, coins, or bars."
                helperText="Valuation is based on standard spot prices."
              />

              <div className="readonly-box">
                <label>Estimated Gold Value</label>
                <strong>{currencySymbol} {goldValue.toLocaleString()}</strong>
              </div>
            </div>
          </section>
        )}

        {/* STEP 4: SILVER ASSETS */}
        {step === 4 && (
          <section className="calculator-section">
            <div className="section-heading">
              <h2>Step 4: Silver Possessions</h2>
              <p>Add all owned silver assets. Material values are calculated automatically.</p>
            </div>
            
            <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <ZakatInput
                label="Silver Weight (Grams)"
                value={form.metals.silverWeight}
                onChange={(val) => setForm({ ...form, metals: { ...form.metals, silverWeight: val } })}
                symbol="g"
                tooltipText="Enter the total silver grams."
              />

              <div className="readonly-box">
                <label>Estimated Silver Value</label>
                <strong>{currencySymbol} {silverValue.toLocaleString()}</strong>
              </div>
            </div>
          </section>
        )}

        {/* STEP 5: INVESTMENTS */}
        {step === 5 && (
          <section className="calculator-section">
            <div className="section-heading">
              <h2>Step 5: Portfolios & Stock Holdings</h2>
              <p>Input stock market values, business inventories, and cash equivalent portfolios.</p>
            </div>
            
            <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <ZakatInput
                label="Stocks / Cryptocurrencies"
                value={form.investments.stocks}
                onChange={(val) => setForm({ ...form, investments: { ...form.investments, stocks: val } })}
                symbol={currencySymbol}
                tooltipText="Current value of equity shares, mutual funds, or digital crypto tokens."
              />
              <ZakatInput
                label="Business Inventory"
                value={form.investments.businessInventory}
                onChange={(val) => setForm({ ...form, investments: { ...form.investments, businessInventory: val } })}
                symbol={currencySymbol}
                tooltipText="The net wholesale value of goods held for trade or retail business operation."
              />

              <div className="readonly-box">
                <label>Investments Subtotal</label>
                <strong>{currencySymbol} {investmentSubtotal.toLocaleString()}</strong>
              </div>
            </div>
          </section>
        )}

        {/* STEP 6: LIABILITIES / DEBTS */}
        {step === 6 && (
          <section className="calculator-section">
            <div className="section-heading">
              <h2>Step 6: Liabilities & Deductible Debts</h2>
              <p>Subtract upcoming short term liabilities, immediate loans, and utility bills falling due.</p>
            </div>
            
            <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <ZakatInput
                label="Short Term Debt / Loans Outstanding"
                value={form.debts.shortTermDebt}
                onChange={(val) => setForm({ ...form, debts: { ...form.debts, shortTermDebt: val } })}
                symbol={currencySymbol}
                tooltipText="Immediate loans or credit card balances due within the next month."
              />
              <ZakatInput
                label="Overdue Utility Bills"
                value={form.debts.utilityBills}
                onChange={(val) => setForm({ ...form, debts: { ...form.debts, utilityBills: val } })}
                symbol={currencySymbol}
              />
              <ZakatInput
                label="Employee Salaries / Liabilities due"
                value={form.debts.employeeSalaries}
                onChange={(val) => setForm({ ...form, debts: { ...form.debts, employeeSalaries: val } })}
                symbol={currencySymbol}
              />

              <div className="readonly-box">
                <label>Deductible Liabilities Subtotal</label>
                <strong>{currencySymbol} {debtSubtotal.toLocaleString()}</strong>
              </div>
            </div>
          </section>
        )}

        {/* STEP 7: SUMMARY RESULTS SCREEN */}
        {step === 7 && (
          <section className="calculator-section">
            <div className="section-heading">
              <h2>Step 7: Zakat Calculations Results</h2>
              <p>Review the comprehensive asset metrics and your resulting Zakat contribution.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                className={`zakat-alert-banner ${
                  result.eligible ? "zakat-alert-success" : "zakat-alert-warning"
                }`}
              >
                <div>
                  <strong>{result.eligible ? "✔ Zakat obligation is due!" : "○ Wealth is below Nisab threshold"}</strong>
                  <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "inherit", opacity: 0.9 }}>
                    {result.eligible
                      ? `Your net wealth (${currencySymbol} ${result.netWealth.toLocaleString()}) exceeds the Nisab limit of ${currencySymbol} ${result.nisab.toLocaleString()}.`
                      : `Your net wealth (${currencySymbol} ${result.netWealth.toLocaleString()}) has not yet met the threshold limit of ${currencySymbol} ${result.nisab.toLocaleString()}.`}
                  </p>
                </div>
              </div>

              {/* Large Result Output Card */}
              <div 
                className="zakat-final" 
                style={{ 
                  background: result.eligible ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #f59e0b, #d97706)", 
                  padding: "36px", 
                  borderRadius: "18px", 
                  color: "#ffffff" 
                }}
              >
                <span className="zakat-final-label">TOTAL ZAKAT DUE (2.5%)</span>
                <span className="zakat-final-amount" style={{ fontSize: "2.8rem", fontWeight: "800", display: "block", marginTop: "10px" }}>
                  {currencySymbol} {result.zakat.toLocaleString()}
                </span>
              </div>

              <div className="wealth-breakdown" style={{ marginTop: "12px", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "16px 20px" }}>
                <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span className="breakdown-label">Gross Assets</span>
                  <span className="breakdown-value" style={{ fontWeight: "700" }}>{currencySymbol} {result.totalAssets.toLocaleString()}</span>
                </div>
                <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span className="breakdown-label">Deductible Debts</span>
                  <span className="breakdown-value" style={{ color: "#ea580c" }}>– {currencySymbol} {result.deductibleDebts.toLocaleString()}</span>
                </div>
                <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span className="breakdown-label">Net Obligated Wealth</span>
                  <span className="breakdown-value" style={{ fontWeight: "700" }}>{currencySymbol} {result.netWealth.toLocaleString()}</span>
                </div>
                <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
                  <span className="breakdown-label">Nisab Threshold ({form.nisabStandard})</span>
                  <span className="breakdown-value" style={{ color: "var(--color-primary)" }}>{currencySymbol} {result.nisab.toLocaleString()}</span>
                </div>
              </div>

              {/* Utility Share / Print Controls */}
              <div 
                className="button-group" 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", 
                  gap: "10px", 
                  marginTop: "16px" 
                }}
              >
                <button type="button" className="btn btn-outline" style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }} onClick={() => window.print()}>
                  <Printer size={16} /> Print Report
                </button>
                <button type="button" className="btn btn-outline" style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }} onClick={handleCopySummary}>
                  <Copy size={16} /> Copy Summary
                </button>
                <button type="button" className="btn btn-secondary" style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }} onClick={handleWhatsAppShare}>
                  <Share2 size={16} /> WhatsApp
                </button>
                <button type="button" className="btn btn-outline" style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", color: "#f87171", borderColor: "#f87171" }} onClick={handleReset}>
                  <RotateCcw size={16} /> Reset
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Button Controls for Step Navigation */}
      <div className="wizard-actions" style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "16px" }}>
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
            className="btn btn-secondary"
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
            onClick={handleReset}
          >
            Calculate New <RotateCcw size={16} />
          </button>
        )}
      </div>
    </div>
  );
}