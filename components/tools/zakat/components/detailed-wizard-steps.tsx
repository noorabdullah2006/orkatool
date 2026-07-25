"use client";

import React from "react";
import { Save, Printer, Copy, Share2, Sparkles, RotateCcw } from "lucide-react";
import { ZakatInput } from "./zakat-input";
import type { ZakatFormData, NisabRates } from "../types";
import { CURRENCIES, MADHABS, NISAB_OPTIONS } from "../options";

/* ==========================================
   Step 1: Profile & Core Standards
   ========================================== */
interface StepProfileProps {
  personalDetails: { name: string; email: string };
  setPersonalDetails: React.Dispatch<React.SetStateAction<{ name: string; email: string }>>;
  form: ZakatFormData;
  setForm: (form: ZakatFormData) => void;
  rates: NisabRates;
}

export function StepProfile({
  personalDetails,
  setPersonalDetails,
  form,
  setForm,
  rates,
}: StepProfileProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 1: Profile & Core Standards</h2>
        <p>Identify yourself and select your school of thought guidelines.</p>
      </div>

      <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="form-group">
          <label className="form-label">Full Name (Optional)</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your name"
            value={personalDetails.name}
            onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address (Optional)</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            value={personalDetails.email}
            onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })}
          />
        </div>

        <div className="selector-grid">
          <div className="form-group">
            <label className="form-label">Default Currency</label>
            <select
              className="form-select"
              value={form.currency}
              onChange={(e) => setForm({ ...form, currency: e.target.value as any })}
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Jurisdiction / Madhab</label>
            <select
              className="form-select"
              value={form.madhab}
              onChange={(e) => setForm({ ...form, madhab: e.target.value as any })}
            >
              {MADHABS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label} Guide
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="zakat-field-wrapper">
          <label className="form-label">Select Nisab Standard</label>
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
      </div>
    </section>
  );
}

/* ==========================================
   Step 2: Cash & Savings
   ========================================== */
interface StepCashProps {
  form: ZakatFormData;
  setForm: (form: ZakatFormData) => void;
  currencySymbol: string;
  cashSubtotal: number;
}

export function StepCash({ form, setForm, currencySymbol, cashSubtotal }: StepCashProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 2: Cash & Savings</h2>
        <p>State all cash and bank holdings, including future savings funds.</p>
      </div>

      <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <ZakatInput
          label="Bank balance"
          value={form.cash.bankBalance}
          onChange={(val) => setForm({ ...form, cash: { ...form.cash, bankBalance: val } })}
          symbol={currencySymbol}
          tooltipText="Ready bank settings or deposits."
        />
        <ZakatInput
          label="Physical Cash"
          value={form.cash.cashInHand}
          onChange={(val) => setForm({ ...form, cash: { ...form.cash, cashInHand: val } })}
          symbol={currencySymbol}
          tooltipText="Cash at home."
        />
        <ZakatInput
          label="Receivables / Money Lent"
          value={form.cash.lentMoney}
          onChange={(val) => setForm({ ...form, cash: { ...form.cash, lentMoney: val } })}
          symbol={currencySymbol}
          tooltipText="Outstanding receivables likely to return."
        />
        <ZakatInput
          label="Undistributed Savings"
          value={form.cash.futureSavings}
          onChange={(val) => setForm({ ...form, cash: { ...form.cash, futureSavings: val } })}
          symbol={currencySymbol}
          tooltipText="Other cash assets saved for future usage."
        />

        <div className="readonly-box">
          <label>Liquid Cash Subtotal</label>
          <strong>{currencySymbol} {cashSubtotal.toLocaleString()}</strong>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   Step 3: Gold Assets
   ========================================== */
interface StepGoldProps {
  form: ZakatFormData;
  setForm: (form: ZakatFormData) => void;
  currencySymbol: string;
  goldValue: number;
}

export function StepGold({ form, setForm, currencySymbol, goldValue }: StepGoldProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 3: Gold Jewelry & Holdings</h2>
        <p>Gold bars are 100% zakatable. Worn jewelry may have exceptions based on Madhab.</p>
      </div>

      <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <ZakatInput
          label="Pure Gold Weight (Grams)"
          value={form.metals.goldWeight}
          onChange={(val) => setForm({ ...form, metals: { ...form.metals, goldWeight: val } })}
          symbol="g"
          tooltipText="Standard gold bars or coins weight."
        />

        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4 style={{ margin: "0 0 8px", fontSize: "0.9rem", fontWeight: "700" }}>Jewelry Settings</h4>
          
          <ZakatInput
            label="Jewelry Weight (Grams)"
            value={form.metals.jewelryWeight}
            onChange={(val) => setForm({ ...form, metals: { ...form.metals, jewelryWeight: val } })}
            symbol="g"
            tooltipText="Weight of gold jewelry."
          />

          <div className="form-group">
            <label className="form-label">Jewelry Purity Carat</label>
            <select
              className="form-select"
              value={form.metals.jewelryPurity}
              onChange={(e) => setForm({ ...form, metals: { ...form.metals, jewelryPurity: e.target.value as any } })}
            >
              <option value="24K">24K (99.9% Pure)</option>
              <option value="22K">22K (91.6% Pure)</option>
              <option value="21K">21K (87.5% Pure)</option>
              <option value="18K">18K (75.0% Pure)</option>
            </select>
          </div>

          <div className="form-group" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>
            <input
              type="checkbox"
              id="isRegularJewelry"
              checked={form.metals.isRegularJewelry}
              onChange={(e) => setForm({ ...form, metals: { ...form.metals, isRegularJewelry: e.target.checked } })}
              style={{ width: "18px", height: "18px", cursor: "pointer" }}
            />
            <label htmlFor="isRegularJewelry" style={{ margin: 0, fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }}>
              This jewelry is regularly worn (exempt in Shafi&apos;i, Maliki, Hanbali)
            </label>
          </div>
        </div>

        <div className="readonly-box">
          <label>Total Zakatable Gold Value</label>
          <strong>{currencySymbol} {goldValue.toLocaleString()}</strong>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   Step 4: Silver Assets
   ========================================== */
interface StepSilverProps {
  form: ZakatFormData;
  setForm: (form: ZakatFormData) => void;
  currencySymbol: string;
  silverValue: number;
}

export function StepSilver({ form, setForm, currencySymbol, silverValue }: StepSilverProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 4: Silver Holdings</h2>
        <p>Valuate all possessed silver metal items or jewelry.</p>
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
  );
}

/* ==========================================
   Step 5: Business Assets
   ========================================== */
interface StepBusinessProps {
  form: ZakatFormData;
  setForm: (form: ZakatFormData) => void;
  currencySymbol: string;
}

export function StepBusiness({ form, setForm, currencySymbol }: StepBusinessProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 5: Business Assets</h2>
        <p>Quantify assets dedicated for trading, wholesale inventory, or business funds.</p>
      </div>

      <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <ZakatInput
          label="Wholesale Business Inventory"
          value={form.investments.businessInventory}
          onChange={(val) => setForm({ ...form, investments: { ...form.investments, businessInventory: val } })}
          symbol={currencySymbol}
          tooltipText="Wholesale or cost price value of current trading items."
        />
      </div>
    </section>
  );
}

/* ==========================================
   Step 6: Investments
   ========================================== */
interface StepInvestmentsProps {
  form: ZakatFormData;
  setForm: (form: ZakatFormData) => void;
  currencySymbol: string;
  investmentSubtotal: number;
}

export function StepInvestments({ form, setForm, currencySymbol, investmentSubtotal }: StepInvestmentsProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 6: Mutual Funds & Rental Stocks</h2>
        <p>Delineate stock holdings, rental income reserves, and savings certificates.</p>
      </div>

      <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <ZakatInput
          label="Stocks & Fund Portfolios"
          value={form.investments.stocks}
          onChange={(val) => setForm({ ...form, investments: { ...form.investments, stocks: val } })}
          symbol={currencySymbol}
          tooltipText="Enter net value of active trade portfolios."
        />
        <ZakatInput
          label="Rental Income Reserves"
          value={form.investments.rentalIncome}
          onChange={(val) => setForm({ ...form, investments: { ...form.investments, rentalIncome: val } })}
          symbol={currencySymbol}
          tooltipText="Liquid rental returns saved or cash assets."
        />
        <ZakatInput
          label="Savings / Deposit Certificates"
          value={form.investments.savingsCertificates}
          onChange={(val) => setForm({ ...form, investments: { ...form.investments, savingsCertificates: val } })}
          symbol={currencySymbol}
        />

        <div className="readonly-box">
          <label>Investments Subtotal</label>
          <strong>{currencySymbol} {investmentSubtotal.toLocaleString()}</strong>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   Step 7: Debts & Liabilities
   ========================================== */
interface StepDebtsProps {
  form: ZakatFormData;
  setForm: (form: ZakatFormData) => void;
  currencySymbol: string;
  debtSubtotal: number;
}

export function StepDebts({ form, setForm, currencySymbol, debtSubtotal }: StepDebtsProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 7: Deductible Debts & Outstanding Bills</h2>
        <p>Add short term debts, bills, and immediate obligations. Note: Shafi&apos;i does not deduct debts.</p>
      </div>

      <div className="form-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <ZakatInput
          label="Short Term Debt / Personal Loans"
          value={form.debts.shortTermDebt}
          onChange={(val) => setForm({ ...form, debts: { ...form.debts, shortTermDebt: val } })}
          symbol={currencySymbol}
        />
        <ZakatInput
          label="Immediate Utility Bills"
          value={form.debts.utilityBills}
          onChange={(val) => setForm({ ...form, debts: { ...form.debts, utilityBills: val } })}
          symbol={currencySymbol}
        />
        <ZakatInput
          label="Employee Wages / Salaries Due"
          value={form.debts.employeeSalaries}
          onChange={(val) => setForm({ ...form, debts: { ...form.debts, employeeSalaries: val } })}
          symbol={currencySymbol}
        />
        <ZakatInput
          label="Tax Levies Due"
          value={form.debts.taxes}
          onChange={(val) => setForm({ ...form, debts: { ...form.debts, taxes: val } })}
          symbol={currencySymbol}
        />
        {form.madhab === "hanafi" && (
          <ZakatInput
            label="Long Term Debt Installment (Hanafi only)"
            value={form.debts.longTermDebt}
            onChange={(val) => setForm({ ...form, debts: { ...form.debts, longTermDebt: val } })}
            symbol={currencySymbol}
            tooltipText="Next immediate installment due."
          />
        )}

        <div className="readonly-box">
          <label>Net Deductible Debts ({form.madhab} Standard)</label>
          <strong>{currencySymbol} {debtSubtotal.toLocaleString()}</strong>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   Step 8: Overall Review
   ========================================== */
interface StepReviewProps {
  personalDetails: { name: string; email: string };
  form: ZakatFormData;
  currencySymbol: string;
  cashSubtotal: number;
  goldValue: number;
  silverValue: number;
  investmentSubtotal: number;
  debtSubtotal: number;
}

export function StepReview({
  personalDetails,
  form,
  currencySymbol,
  cashSubtotal,
  goldValue,
  silverValue,
  investmentSubtotal,
  debtSubtotal,
}: StepReviewProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 8: Review Detailed Summary</h2>
        <p>Verify all reported parameters before computing the final Zakat obligation.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "16px" }}>
          <h3 style={{ margin: "0 0 12px", fontSize: "1.05rem", fontWeight: "700" }}>Account Profile</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
            <div>Name: <strong>{personalDetails.name || "Not Specified"}</strong></div>
            <div>Email: <strong>{personalDetails.email || "Not Specified"}</strong></div>
            <div>Madhab Guideline: <strong>{form.madhab.toUpperCase()}</strong></div>
            <div>Nisab Standard: <strong>{form.nisabStandard.toUpperCase()}</strong></div>
          </div>
        </div>

        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "16px" }}>
          <h3 style={{ margin: "0 0 12px", fontSize: "1.05rem", fontWeight: "700" }}>Subtotals Overview</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "8px 0", color: "var(--color-text-secondary)" }}>Liquid Cash Settings</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "700" }}>{currencySymbol} {cashSubtotal.toLocaleString()}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "8px 0", color: "var(--color-text-secondary)" }}>Precious Metal Values</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "700" }}>{currencySymbol} {(goldValue + silverValue).toLocaleString()}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "8px 0", color: "var(--color-text-secondary)" }}>Business & Stock Assets</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "700" }}>{currencySymbol} {investmentSubtotal.toLocaleString()}</td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", color: "var(--color-text-secondary)" }}>Deductible Liabilities/Debts</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "700", color: "#ea580c" }}>– {currencySymbol} {debtSubtotal.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   Step 9: Results
   ========================================== */
interface StepResultsProps {
  personalDetails: { name: string; email: string };
  form: ZakatFormData;
  currencySymbol: string;
  result: any;
  handleCopySummary: () => void;
  handleWhatsAppShare: () => void;
  handleReset: () => void;
}

export function StepResults({
  personalDetails,
  form,
  currencySymbol,
  result,
  handleCopySummary,
  handleWhatsAppShare,
  handleReset,
}: StepResultsProps) {
  return (
    <section className="calculator-section">
      <div className="section-heading">
        <h2>Step 9: Final Result Summary</h2>
        <p>Generated calculation results based on {form.madhab} rules configurations.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {personalDetails.name && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-primary)", fontWeight: "600", fontSize: "0.95rem" }}>
            <Sparkles size={16} /> Prepared for {personalDetails.name}
          </div>
        )}

        <div
          className={`zakat-alert-banner ${
            result.eligible ? "zakat-alert-success" : "zakat-alert-warning"
          }`}
        >
          <div>
            <strong>{result.eligible ? "✔ Zakat is obligated!" : "○ Wealth is below Nisab"}</strong>
            <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "inherit", opacity: 0.9 }}>
              Your net assets: {currencySymbol} {result.netWealth.toLocaleString()} (Nisab: {currencySymbol} {result.nisab.toLocaleString()})
            </p>
          </div>
        </div>

        <div 
          className="zakat-final" 
          style={{ 
            background: result.eligible ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #f59e0b, #d97706)", 
            padding: "36px", 
            borderRadius: "18px", 
            color: "#ffffff" 
          }}
        >
          <span className="zakat-final-label">TOTAL OBLIGATORY ZAKAT due</span>
          <span className="zakat-final-amount" style={{ fontSize: "2.8rem", fontWeight: "800", display: "block", marginTop: "10px" }}>
            {currencySymbol} {result.zakat.toLocaleString()}
          </span>
          <span className="zakat-helper-text" style={{ color: "#ffffff", opacity: 0.8, fontSize: "0.75rem", display: "block", marginTop: "8px" }}>
            Computed at standard rate of 2.5% of net wealth.
          </span>
        </div>

        <div className="wealth-breakdown" style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "16px 20px" }}>
          <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
            <span className="breakdown-label">Net Assets Value</span>
            <span className="breakdown-value" style={{ fontWeight: "700" }}>{currencySymbol} {result.totalAssets.toLocaleString()}</span>
          </div>
          <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
            <span className="breakdown-label">Liabilities Deduction</span>
            <span className="breakdown-value" style={{ color: "#ea580c" }}>– {currencySymbol} {result.deductibleDebts.toLocaleString()}</span>
          </div>
          <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
            <span className="breakdown-label">Net Obligated Capital</span>
            <span className="breakdown-value" style={{ fontWeight: "700" }}>{currencySymbol} {result.netWealth.toLocaleString()}</span>
          </div>
          <div className="breakdown-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
            <span className="breakdown-label">Estimated Zakat Date</span>
            <span className="breakdown-value" style={{ color: "var(--color-primary)", fontWeight: "600" }}>
              {new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString()} (Next Lunar Year)
            </span>
          </div>
        </div>

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
  );
}
