"use client";

import type {
  Dispatch,
  SetStateAction,
} from "react";

import type {
  ZakatFormData,
} from "./types";

type Props = {
  form: ZakatFormData;

  setForm: Dispatch<
    SetStateAction<ZakatFormData>
  >;
};

/* ==========================================
   Helpers
========================================== */

function parseValue(
  value: string,
): number {

  const number = Number(value);

  if (!Number.isFinite(number)) {

    return 0;

  }

  return Math.max(0, number);

}

/* ==========================================
   Component
========================================== */

export default function CashSection({

  form,

  setForm,

}: Props) {

  const updateCash = (
    key: keyof ZakatFormData["cash"],
    value: number,
  ) => {

    setForm({

      ...form,

      cash: {

        ...form.cash,

        [key]: value,

      },

    });

  };

  return (

    <section className="calculator-section">

      <div className="section-header">

        <h2>

          Cash & Savings

        </h2>

        <p>

          Include all cash that has remained in your possession
          for one lunar year.

        </p>

      </div>

      <div className="form-grid">

        <Input

          label="Cash in Hand"

          placeholder="Enter amount"

          value={form.cash.cashInHand}

          onChange={(value)=>

            updateCash(
              "cashInHand",
              value,
            )

          }

        />

        <Input

          label="Bank Balance"

          placeholder="Enter amount"

          value={form.cash.bankBalance}

          onChange={(value)=>

            updateCash(
              "bankBalance",
              value,
            )

          }

        />

        <Input

          label="Money Lent"

          placeholder="Enter amount"

          value={form.cash.lentMoney}

          onChange={(value)=>

            updateCash(
              "lentMoney",
              value,
            )

          }

        />

        <Input

          label="Future Savings"

          placeholder="Optional"

          value={form.cash.futureSavings}

          onChange={(value)=>

            updateCash(
              "futureSavings",
              value,
            )

          }

        />

      </div>

    </section>

  );

}

/* ==========================================
   Reusable Input
========================================== */

type InputProps = {

  label: string;

  placeholder?: string;

  value: number;

  onChange: (
    value: number,
  ) => void;

};

function Input({

  label,

  placeholder,

  value,

  onChange,

}: InputProps) {

  return (

    <div className="form-group">

      <label className="form-label">

        {label}

      </label>

      <input

        className="form-input"

        type="number"

        min="0"

        inputMode="decimal"

        placeholder={placeholder}

        value={

          value === 0
            ? ""
            : value

        }

        onChange={(event)=>

          onChange(

            parseValue(
              event.target.value,
            ),

          )

        }

      />

    </div>

  );

}