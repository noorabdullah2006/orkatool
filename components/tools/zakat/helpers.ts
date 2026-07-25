import {
  CURRENCIES,
} from "./options";

import type {
  Currency,
  NisabRates,
  NisabStandard,
} from "./types";

/* =========================================================
   Currency
========================================================= */

export function getCurrencyData(
  currency: Currency,
) {
  return (
    CURRENCIES.find(
      (item) =>
        item.code === currency,
    ) ?? CURRENCIES[0]
  );
}

export function getCurrencySymbol(
  currency: Currency,
): string {

  return getCurrencyData(
    currency,
  ).symbol;

}

/* =========================================================
   Number Formatting
========================================================= */

export function formatNumber(
  value: number,
): string {

  return value.toLocaleString(
    undefined,
    {
      maximumFractionDigits: 2,
    },
  );

}

/* =========================================================
   Currency Formatting
========================================================= */

export function formatCurrency(
  currency: Currency,
  value: number,
): string {

  const symbol =
    getCurrencySymbol(
      currency,
    );

  return `${symbol} ${formatNumber(
    value,
  )}`;

}

/* =========================================================
   Round Money
========================================================= */

export function roundMoney(
  value: number,
): number {

  return Math.round(
    value * 100,
  ) / 100;

}

/* =========================================================
   Positive Number
========================================================= */

export function positive(
  value: number,
): number {

  return Math.max(
    0,
    value,
  );

}

/* =========================================================
   Nisab Value
========================================================= */

export function calculateNisabValue(

  rates: NisabRates,

  standard: NisabStandard,

): number {

  if (
    standard === "gold"
  ) {

    return roundMoney(

      rates.goldRate *

      87.48,

    );

  }

  return roundMoney(

    rates.silverRate *

    612.36,

  );

}

/* =========================================================
   Percentage
========================================================= */

export function percentageOf(

  value: number,

  percentage: number,

): number {

  return roundMoney(

    value *

      (percentage / 100),

  );

}

/* =========================================================
   Empty Value
========================================================= */

export function safeNumber(
  value: unknown,
): number {

  const number =
    Number(value);

  if (
    Number.isNaN(number)
  ) {

    return 0;

  }

  return positive(
    number,
  );

}