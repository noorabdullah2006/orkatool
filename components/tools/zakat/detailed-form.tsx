"use client";

import { useState, useEffect, useMemo } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ZakatFormData, NisabRates } from "./types";
import { CURRENCIES } from "./options";
import { calculateZakat, formatMoney } from "./utils";
import { ArrowLeft, ArrowRight, RotateCcw, Save } from "lucide-react";
import {
  StepProfile,
  StepCash,
  StepGold,
  StepSilver,
  StepBusiness,
  StepInvestments,
  StepDebts,
  StepReview,
  StepResults,
} from "./components/detailed-wizard-steps";

type Props = {
  form: ZakatFormData;
  rates: NisabRates;
  setForm: Dispatch<SetStateAction<ZakatFormData>>;
};

const STORAGE_KEY_FORM = "orkatool-zakat-form-progress";
const STORAGE_KEY_STEP = "orkatool-zakat-step-progress";

export default function DetailedForm({ form, rates, setForm }: Props) {
  const [step, setStep] = useState(1);
  const totalSteps = 9;

  // Personal details state
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
  });

  // Calculate currency symbol
  const currencySymbol = useMemo(() => {
    const currency = CURRENCIES.find((c) => c.code === form.currency);
    return currency ? currency.symbol : "$";
  }, [form.currency]);

  // Load progress from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedForm = localStorage.getItem(STORAGE_KEY_FORM);
      const savedStep = localStorage.getItem(STORAGE_KEY_STEP);
      const savedPersonal = localStorage.getItem("orkatool-zakat-personal");

      setTimeout(() => {
        if (savedForm) {
          try {
            setForm(JSON.parse(savedForm));
          } catch (e) {
            console.error("Error parsing saved form", e);
          }
        }
        if (savedStep) {
          setStep(parseInt(savedStep, 10));
        }
        if (savedPersonal) {
          try {
            setPersonalDetails(JSON.parse(savedPersonal));
          } catch (e) {}
        }
      }, 0);
    }
  }, [setForm]);

  // Save progress handler
  const handleSaveProgress = () => {
    localStorage.setItem(STORAGE_KEY_FORM, JSON.stringify(form));
    localStorage.setItem(STORAGE_KEY_STEP, step.toString());
    localStorage.setItem("orkatool-zakat-personal", JSON.stringify(personalDetails));
    alert("Your Zakat calculation progress has been saved locally!");
  };

  // Auto-save form changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_FORM, JSON.stringify(form));
    localStorage.setItem("orkatool-zakat-personal", JSON.stringify(personalDetails));
  }, [form, personalDetails]);

  // Auto-save step location
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_STEP, step.toString());
  }, [step]);

  // Calculations for subtotals
  const result = useMemo(() => calculateZakat(form, rates), [form, rates]);

  const cashSubtotal = useMemo(() => {
    return (
      (form.cash.bankBalance || 0) +
      (form.cash.cashInHand || 0) +
      (form.cash.lentMoney || 0) +
      (form.cash.futureSavings || 0)
    );
  }, [form.cash]);

  const goldValue = useMemo(() => {
    const mainGold = (form.metals.goldWeight || 0) * (rates.goldRate || 0);
    // Calculated purity-adjusted jewelry weight
    let purityFactor = 1;
    switch (form.metals.jewelryPurity) {
      case "22K": purityFactor = 22 / 24; break;
      case "21K": purityFactor = 21 / 24; break;
      case "18K": purityFactor = 18 / 24; break;
    }
    const jewelryVal = (form.metals.jewelryWeight || 0) * purityFactor * (rates.goldRate || 0);
    
    // Apply Madhab rules for jewelry
    const includesJewelry =
      form.madhab === "hanafi" || !form.metals.isRegularJewelry;
    return mainGold + (includesJewelry ? jewelryVal : 0);
  }, [form.metals, rates.goldRate, form.madhab]);

  const silverValue = useMemo(() => {
    return (form.metals.silverWeight || 0) * (rates.silverRate || 0);
  }, [form.metals.silverWeight, rates.silverRate]);

  const investmentSubtotal = useMemo(() => {
    return (
      (form.investments.stocks || 0) +
      (form.investments.businessInventory || 0) +
      (form.investments.rentalIncome || 0) +
      (form.investments.savingsCertificates || 0)
    );
  }, [form.investments]);

  const debtSubtotal = useMemo(() => {
    // Shafi'i madhab does not deduct debts
    if (form.madhab === "shafii") return 0;

    let total =
      (form.debts.shortTermDebt || 0) +
      (form.debts.utilityBills || 0) +
      (form.debts.employeeSalaries || 0) +
      (form.debts.taxes || 0);

    // Hanafi allows long term debt deductions too
    if (form.madhab === "hanafi") {
      total += (form.debts.longTermDebt || 0);
    }
    return total;
  }, [form.debts, form.madhab]);

  // Copy report summary
  const handleCopySummary = () => {
    const text = `OrkaTool Detailed Zakat Report (${form.currency}):\n` +
      `Prepared for: ${personalDetails.name || "Valued User"}\n` +
      `- Total Nisab Limit: ${formatMoney(result.nisab, form.currency)}\n` +
      `- Cash & Savings: ${formatMoney(cashSubtotal, form.currency)}\n` +
      `- Precious Metals: ${formatMoney(goldValue + silverValue, form.currency)}\n` +
      `- Investments: ${formatMoney(investmentSubtotal, form.currency)}\n` +
      `- Deductible Debts: ${formatMoney(debtSubtotal, form.currency)}\n` +
      `- Net Wealth: ${formatMoney(result.netWealth, form.currency)}\n` +
      `- Zakat Amount Due: ${formatMoney(result.zakat, form.currency)}\n` +
      `Date Calculated: ${new Date().toLocaleDateString()}\n` +
      `Calculate online: ${window.location.origin}/tools/zakat-calculator`;
    navigator.clipboard.writeText(text);
    alert("Full detailed summary report copied to clipboard!");
  };

  // WhatsApp sharing
  const handleWhatsAppShare = () => {
    const text = `My OrkaTool Detailed Zakat report summary:\n` +
      `Net Assets: ${formatMoney(result.totalAssets, form.currency)}\n` +
      `Obligated Wealth: ${formatMoney(result.netWealth, form.currency)}\n` +
      `Zakat contribution: ${formatMoney(result.zakat, form.currency)}\n` +
      `Calculate yours: ${window.location.origin}/tools/zakat-calculator`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Reset progress and values
  const handleReset = () => {
    if (confirm("Are you sure you want to reset all progress settings?")) {
      localStorage.removeItem(STORAGE_KEY_FORM);
      localStorage.removeItem(STORAGE_KEY_STEP);
      localStorage.removeItem("orkatool-zakat-personal");
      setPersonalDetails({ name: "", email: "" });
      setForm({
        currency: "PKR",
        madhab: "hanafi",
        nisabStandard: "silver",
        mode: "detailed",
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
    }
  };

  return (
    <div className="zakat-wizard-container">
      {/* progress headers */}
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "8px" 
        }}
      >
        <span 
          style={{ 
            fontSize: "0.85rem", 
            fontWeight: "600", 
            color: "var(--color-primary)" 
          }}
        >
          Detailed Wizard
        </span>
        <button
          type="button"
          onClick={handleSaveProgress}
          className="btn btn-outline"
          style={{ 
            fontSize: "0.75rem", 
            padding: "6px 12px", 
            display: "flex", 
            gap: "6px", 
            alignItems: "center" 
          }}
        >
          <Save size={12} /> Save Progress
        </button>
      </div>

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

      <div style={{ minHeight: "380px" }}>
        {step === 1 && (
          <StepProfile
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
            form={form}
            setForm={setForm}
            rates={rates}
          />
        )}
        {step === 2 && (
          <StepCash
            form={form}
            setForm={setForm}
            currencySymbol={currencySymbol}
            cashSubtotal={cashSubtotal}
          />
        )}
        {step === 3 && (
          <StepGold
            form={form}
            setForm={setForm}
            currencySymbol={currencySymbol}
            goldValue={goldValue}
          />
        )}
        {step === 4 && (
          <StepSilver
            form={form}
            setForm={setForm}
            currencySymbol={currencySymbol}
            silverValue={silverValue}
          />
        )}
        {step === 5 && (
          <StepBusiness
            form={form}
            setForm={setForm}
            currencySymbol={currencySymbol}
          />
        )}
        {step === 6 && (
          <StepInvestments
            form={form}
            setForm={setForm}
            currencySymbol={currencySymbol}
            investmentSubtotal={investmentSubtotal}
          />
        )}
        {step === 7 && (
          <StepDebts
            form={form}
            setForm={setForm}
            currencySymbol={currencySymbol}
            debtSubtotal={debtSubtotal}
          />
        )}
        {step === 8 && (
          <StepReview
            personalDetails={personalDetails}
            form={form}
            currencySymbol={currencySymbol}
            cashSubtotal={cashSubtotal}
            goldValue={goldValue}
            silverValue={silverValue}
            investmentSubtotal={investmentSubtotal}
            debtSubtotal={debtSubtotal}
          />
        )}
        {step === 9 && (
          <StepResults
            personalDetails={personalDetails}
            form={form}
            currencySymbol={currencySymbol}
            result={result}
            handleCopySummary={handleCopySummary}
            handleWhatsAppShare={handleWhatsAppShare}
            handleReset={handleReset}
          />
        )}
      </div>

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