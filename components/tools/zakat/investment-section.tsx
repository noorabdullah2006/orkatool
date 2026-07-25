"use client";

import type { Dispatch, SetStateAction } from "react";
import type { ZakatFormData, Investments } from "./types";

type Props = {
  form: ZakatFormData;
  setForm: Dispatch<SetStateAction<ZakatFormData>>;
};

function parseValue(value: string): number {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return 0;
  }
  return Math.max(0, num);
}

export default function InvestmentSection({
  form,
  setForm,
}: Props) {
  
  const update = (
    key: keyof Investments,
    value: number,
  ) => {
    setForm({
      ...form,
      investments: {
        ...form.investments,
        [key]: value,
      },
    });
  };

  return (
    <section className="calculator-section">

      <div className="section-header">
        <h2>Investments</h2>
        <p>
          Include only investments that are subject to Zakat.
        </p>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label className="form-label">Stocks & Shares</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.investments.stocks === 0 ? "" : form.investments.stocks}
            onChange={(e) => update("stocks", parseValue(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Business Inventory</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.investments.businessInventory === 0 ? "" : form.investments.businessInventory}
            onChange={(e) => update("businessInventory", parseValue(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Rental Income</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.investments.rentalIncome === 0 ? "" : form.investments.rentalIncome}
            onChange={(e) => update("rentalIncome", parseValue(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Savings Certificates / Funds</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.investments.savingsCertificates === 0 ? "" : form.investments.savingsCertificates}
            onChange={(e) => update("savingsCertificates", parseValue(e.target.value))}
          />
        </div>

      </div>

    </section>
  );
}