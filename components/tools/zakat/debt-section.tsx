"use client";

import type { Dispatch, SetStateAction } from "react";
import type { ZakatFormData, Debts } from "./types";

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

export default function DebtSection({
  form,
  setForm,
}: Props) {

  const update = (
    key: keyof Debts,
    value: number,
  ) => {
    setForm({
      ...form,
      debts: {
        ...form.debts,
        [key]: value,
      },
    });
  };

  return (
    <section className="calculator-section">

      <div className="section-header">
        <h2>Debts & Liabilities</h2>
        <p>
          Include standard debts and liabilities deductible from Zakat.
        </p>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label className="form-label">Short Term Debts (Less than 1 year)</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.debts.shortTermDebt === 0 ? "" : form.debts.shortTermDebt}
            onChange={(e) => update("shortTermDebt", parseValue(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Long Term Debts (E.g. Mortgages, Loans)</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.debts.longTermDebt === 0 ? "" : form.debts.longTermDebt}
            onChange={(e) => update("longTermDebt", parseValue(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Pending Taxes</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.debts.taxes === 0 ? "" : form.debts.taxes}
            onChange={(e) => update("taxes", parseValue(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Outstanding Utility Bills</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.debts.utilityBills === 0 ? "" : form.debts.utilityBills}
            onChange={(e) => update("utilityBills", parseValue(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Due Employee Salaries</label>
          <input
            className="form-input"
            type="number"
            min="0"
            placeholder="0"
            value={form.debts.employeeSalaries === 0 ? "" : form.debts.employeeSalaries}
            onChange={(e) => update("employeeSalaries", parseValue(e.target.value))}
          />
        </div>

      </div>

    </section>
  );
}
