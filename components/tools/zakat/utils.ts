import type {
  Debts,
  Madhab,
  NisabRates,
  PreciousMetals,
  ZakatFormData,
  ZakatResult,
} from "./types";

import {
  GOLD_NISAB_GRAMS,
  SILVER_NISAB_GRAMS,
  ZAKAT_RATE,
} from "./constants";

/* =========================================================
   Number Helpers
========================================================= */

export function sanitizeNumber(
  value: unknown,
): number {

  const number = Number(value);

  if (!Number.isFinite(number)) {

    return 0;

  }

  return Math.max(0, number);

}

/* =========================================================
   Round Currency
========================================================= */

export function roundCurrency(
  value: number,
): number {

  return Math.round(value);

}

/* =========================================================
   Format Money
========================================================= */

export function formatMoney(

  value: number,

  currency: string,

): string {

  return `${currency} ${new Intl.NumberFormat(

    "en-PK",

    {

      maximumFractionDigits: 0,

    },

  ).format(roundCurrency(value))}`;

}

/* =========================================================
   Purity
========================================================= */

export function getPurityFactor(

  purity: PreciousMetals["jewelryPurity"],

): number {

  switch (purity) {

    case "24K":
      return 1;

    case "22K":
      return 22 / 24;

    case "21K":
      return 21 / 24;

    case "18K":
      return 18 / 24;

    default:
      return 1;

  }

}

/* =========================================================
   Gold Value
========================================================= */

export function calculateGoldValue(

  weight: number,

  rate: number,

): number {

  return roundCurrency(

    sanitizeNumber(weight) *

    sanitizeNumber(rate),

  );

}

/* =========================================================
   Silver Value
========================================================= */

export function calculateSilverValue(

  weight: number,

  rate: number,

): number {

  return roundCurrency(

    sanitizeNumber(weight) *

    sanitizeNumber(rate),

  );

}

/* =========================================================
   Jewellery Value
========================================================= */

export function calculateJewelryValue(

  metals: PreciousMetals,

  rates: NisabRates,

): number {

  return roundCurrency(

    sanitizeNumber(
      metals.jewelryWeight,
    ) *

    getPurityFactor(
      metals.jewelryPurity,
    ) *

    sanitizeNumber(
      rates.goldRate,
    ),

  );

}

/* =========================================================
   Jewellery Rule
========================================================= */

export function getJewelryValue(

  madhab: Madhab,

  metals: PreciousMetals,

  rates: NisabRates,

): number {

  const value = calculateJewelryValue(

    metals,

    rates,

  );

  switch (madhab) {

    case "hanafi":

      return value;

    case "shafii":

    case "maliki":

    case "hanbali":

      return metals.isRegularJewelry

        ? 0

        : value;

    default:

      return value;

  }

}

/* =========================================================
   Debt Rules
========================================================= */

export function getDeductibleDebt(

  madhab: Madhab,

  debts: Debts,

): number {

  const currentDebts =

    sanitizeNumber(
      debts.shortTermDebt,
    ) +

    sanitizeNumber(
      debts.taxes,
    ) +

    sanitizeNumber(
      debts.utilityBills,
    ) +

    sanitizeNumber(
      debts.employeeSalaries,
    );

  switch (madhab) {

    case "hanafi":

      return currentDebts +

        sanitizeNumber(
          debts.longTermDebt,
        );

    case "maliki":

    case "hanbali":

      return currentDebts;

    case "shafii":

      return 0;

    default:

      return currentDebts;

  }

}

/* =========================================================
   Nisab
========================================================= */

export function calculateNisab(

  rates: NisabRates,

  standard: "gold" | "silver",

): number {

  if (standard === "gold") {

    return roundCurrency(

      rates.goldRate *

      GOLD_NISAB_GRAMS,

    );

  }

  return roundCurrency(

    rates.silverRate *

    SILVER_NISAB_GRAMS,

  );

}

/* =========================================================
   Assets Breakdown
========================================================= */

export function calculateAssets(

  data: ZakatFormData,

  rates: NisabRates,

): ZakatResult["breakdown"] {

  const cash =

    sanitizeNumber(data.cash.bankBalance) +

    sanitizeNumber(data.cash.cashInHand) +

    sanitizeNumber(data.cash.lentMoney) +

    sanitizeNumber(data.cash.futureSavings);

  const metals =

    calculateGoldValue(

      data.metals.goldWeight,

      rates.goldRate,

    ) +

    calculateSilverValue(

      data.metals.silverWeight,

      rates.silverRate,

    ) +

    getJewelryValue(

      data.madhab,

      data.metals,

      rates,

    );

  const investments =

    sanitizeNumber(data.investments.stocks) +

    sanitizeNumber(data.investments.businessInventory) +

    sanitizeNumber(data.investments.rentalIncome) +

    sanitizeNumber(data.investments.savingsCertificates);

  const debts =

    getDeductibleDebt(

      data.madhab,

      data.debts,

    );

  return {

    cash,

    metals,

    investments,

    debts,

  };

}

/* =========================================================
   Total Assets
========================================================= */

export function calculateTotalAssets(

  breakdown: ZakatResult["breakdown"],

): number {

  return roundCurrency(

    breakdown.cash +

    breakdown.metals +

    breakdown.investments,

  );

}

/* =========================================================
   Net Worth
========================================================= */

export function calculateNetWorth(

  assets: number,

  debts: number,

): number {

  return roundCurrency(

    Math.max(

      0,

      assets - debts,

    ),

  );

}

/* =========================================================
   Eligibility
========================================================= */

export function isEligible(

  wealth: number,

  nisab: number,

): boolean {

  return wealth >= nisab;

}

/* =========================================================
   Zakat Amount
========================================================= */

export function calculateZakatAmount(

  wealth: number,

): number {

  return roundCurrency(

    wealth *

    ZAKAT_RATE,

  );

}

/* =========================================================
   Main Calculator
========================================================= */

export function calculateZakat(

  data: ZakatFormData,

  rates: NisabRates,

): ZakatResult {

  const breakdown =

    calculateAssets(

      data,

      rates,

    );

  const totalAssets =

    calculateTotalAssets(

      breakdown,

    );

  const deductibleDebts =

    breakdown.debts;

  const netWealth =

    calculateNetWorth(

      totalAssets,

      deductibleDebts,

    );

  const nisab =

    calculateNisab(

      rates,

      data.nisabStandard,

    );

  const eligible =

    isEligible(

      netWealth,

      nisab,

    );

  const zakat =

    eligible

      ? calculateZakatAmount(

          netWealth,

        )

      : 0;

  return {

    totalAssets,

    deductibleDebts,

    netWealth,

    nisab,

    eligible,

    zakat,

    breakdown,

  };

}


/* =========================================================
   Daily Cache
========================================================= */

const CACHE_KEY = "zakat-metal-rates";

const CACHE_DURATION =
  24 * 60 * 60 * 1000;

/* =========================================================
   Read Cache
========================================================= */

function getCachedRates():
  NisabRates | null {

  if (
    typeof window ===
    "undefined"
  ) {

    return null;

  }

  const raw =
    localStorage.getItem(
      CACHE_KEY,
    );

  if (!raw) {

    return null;

  }

  try {

    const cache =
      JSON.parse(raw);

    if (

      Date.now() -
        cache.timestamp <
      CACHE_DURATION

    ) {

      return cache.data;

    }

  } catch {

    return null;

  }

  return null;

}

/* =========================================================
   Save Cache
========================================================= */

function saveRates(

  data: NisabRates,

): void {

  if (
    typeof window ===
    "undefined"
  ) {

    return;

  }

  localStorage.setItem(

    CACHE_KEY,

    JSON.stringify({

      timestamp:
        Date.now(),

      data,

    }),

  );

}

/* =========================================================
   Manual Fallback
========================================================= */

function getManualRates():
  NisabRates {

  return {

    goldRate: 40086.9,

    silverRate: 581.19,

    goldThreshold:
      roundCurrency(
        GOLD_NISAB_GRAMS *
          40086.9,
      ),

    silverThreshold:
      roundCurrency(
        SILVER_NISAB_GRAMS *
          581.19,
      ),

    lastUpdated:
      new Date()
        .toLocaleDateString(),

    source: "manual",

  };

}

/* =========================================================
   GoldAPI
========================================================= */

async function fetchGoldApi():
Promise<NisabRates> {

  throw new Error(
    "GoldAPI not connected yet.",
  );

}

/* =========================================================
   MetalPriceAPI
========================================================= */

async function fetchMetalPriceApi():
Promise<NisabRates> {

  throw new Error(
    "MetalPriceAPI not connected yet.",
  );

}

/* =========================================================
   Pakistan Rates
========================================================= */

async function fetchPakistanRates():
Promise<NisabRates> {

  throw new Error(
    "Pakistan API not connected yet.",
  );

}


/* =========================================================
   Public API
========================================================= */

export async function fetchMetalRates():
Promise<NisabRates> {

  const cached =
    getCachedRates();

  if (cached) {

    return cached;

  }

  try {

    const data =
      await fetchGoldApi();

    saveRates(data);

    return data;

  } catch (error) {

    console.warn(
      "GoldAPI failed",
      error,
    );

  }

  try {

    const data =
      await fetchMetalPriceApi();

    saveRates(data);

    return data;

  } catch (error) {

    console.warn(
      "MetalPriceAPI failed",
      error,
    );

  }

  try {

    const data =
      await fetchPakistanRates();

    saveRates(data);

    return data;

  } catch (error) {

    console.warn(
      "Pakistan API failed",
      error,
    );

  }

  const manual =
    getManualRates();

  saveRates(manual);

  return manual;

}

/* =========================================================
   Currency Conversion
========================================================= */

export function convertCurrency(

  amount: number,

  exchangeRate: number,

): number {

  return roundCurrency(

    sanitizeNumber(amount) *

    sanitizeNumber(exchangeRate),

  );

}

/* =========================================================
   Percentage Helper
========================================================= */

export function percentage(

  value: number,

  total: number,

): number {

  if (total <= 0) {

    return 0;

  }

  return Number(

    (

      (value / total) *

      100

    ).toFixed(2),

  );

}

/* =========================================================
   Empty Form Check
========================================================= */

export function isFormEmpty(

  data: ZakatFormData,

): boolean {

  const breakdown =
    calculateAssets(

      data,

      getManualRates(),

    );

  return (

    breakdown.cash === 0 &&

    breakdown.metals === 0 &&

    breakdown.investments === 0

  );

}

/* =========================================================
   Validation
========================================================= */

export function validateForm(

  data: ZakatFormData,

): string[] {

  const errors: string[] = [];

  if (

    data.metals.goldWeight < 0

  ) {

    errors.push(

      "Gold weight cannot be negative.",

    );

  }

  if (

    data.metals.silverWeight < 0

  ) {

    errors.push(

      "Silver weight cannot be negative.",

    );

  }

  if (

    data.cash.bankBalance < 0

  ) {

    errors.push(

      "Cash cannot be negative.",

    );

  }

  return errors;

}

/* =========================================================
   Reset Form
========================================================= */

export function resetForm(): ZakatFormData {

  return {

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

  };

}