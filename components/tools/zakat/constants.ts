import type {
  Currency,
  Madhab,
  NisabStandard,
  CalculatorMode,
  WizardStep,
  ZakatFormData,
} from "./types";

/* =========================================================
   Zakat Configuration
========================================================= */

export const ZAKAT_RATE = 0.025;

export const GOLD_NISAB_GRAMS = 87.48;

export const SILVER_NISAB_GRAMS = 612.36;

/* =========================================================
   Supported Currencies
========================================================= */

export const CURRENCIES: {
  value: Currency;
  label: string;
  symbol: string;
}[] = [

  {
    value: "PKR",
    label: "Pakistani Rupee",
    symbol: "₨",
  },

  {
    value: "USD",
    label: "US Dollar",
    symbol: "$",
  },

  {
    value: "GBP",
    label: "British Pound",
    symbol: "£",
  },

  {
    value: "AED",
    label: "UAE Dirham",
    symbol: "د.إ",
  },

  {
    value: "SAR",
    label: "Saudi Riyal",
    symbol: "﷼",
  },

  {
    value: "INR",
    label: "Indian Rupee",
    symbol: "₹",
  },

  {
    value: "BDT",
    label: "Bangladeshi Taka",
    symbol: "৳",
  },

];

/* =========================================================
   Madhab Options
========================================================= */

export const MADHABS: {
  value: Madhab;
  label: string;
}[] = [

  {
    value: "hanafi",
    label: "Hanafi",
  },

  {
    value: "shafii",
    label: "Shafi'i",
  },

  {
    value: "maliki",
    label: "Maliki",
  },

  {
    value: "hanbali",
    label: "Hanbali",
  },

];

/* =========================================================
   Nisab Standards
========================================================= */

export const NISAB_OPTIONS: {
  value: NisabStandard;
  label: string;
  recommended: boolean;
}[] = [

  {
    value: "silver",
    label: "Silver Standard",
    recommended: true,
  },

  {
    value: "gold",
    label: "Gold Standard",
    recommended: false,
  },

];

/* =========================================================
   Calculator Modes
========================================================= */

export const CALCULATOR_MODES: {
  value: CalculatorMode;
  label: string;
}[] = [

  {
    value: "quick",
    label: "Quick Calculate",
  },

  {
    value: "detailed",
    label: "Detailed Calculate",
  },

];

/* =========================================================
   Wizard Steps
========================================================= */

export const WIZARD_STEPS: WizardStep[] = [

  {
    id: 1,
    title: "Cash & Savings",
    description: "Cash, bank balance and money you lent.",
  },

  {
    id: 2,
    title: "Gold & Silver",
    description: "Jewellery, gold and silver assets.",
  },

  {
    id: 3,
    title: "Investments",
    description: "Business assets and investments.",
  },

  {
    id: 4,
    title: "Debts",
    description: "Outstanding liabilities and debts.",
  },

];

/* =========================================================
   Default Form Values
========================================================= */

export const DEFAULT_FORM: ZakatFormData = {

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