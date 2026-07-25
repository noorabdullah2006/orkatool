/* =========================================================
   Currency
========================================================= */

export type Currency =
  | "PKR"
  | "USD"
  | "GBP"
  | "AED"
  | "SAR"
  | "INR"
  | "BDT";

/* =========================================================
   Madhab
========================================================= */

export type Madhab =
  | "hanafi"
  | "shafii"
  | "maliki"
  | "hanbali";

/* =========================================================
   Nisab Standard
========================================================= */

export type NisabStandard =
  | "gold"
  | "silver";

/* =========================================================
   Calculator Mode
========================================================= */

export type CalculatorMode =
  | "quick"
  | "detailed";

/* =========================================================
   Cash Assets
========================================================= */

export interface CashAssets {

  bankBalance: number;

  cashInHand: number;

  lentMoney: number;

  futureSavings: number;

}

/* =========================================================
   Gold & Silver
========================================================= */

export type GoldPurity =
  | "24K"
  | "22K"
  | "21K"
  | "18K";

export interface PreciousMetals {

  goldWeight: number;

  silverWeight: number;

  jewelryWeight: number;

  jewelryPurity: GoldPurity;

  isRegularJewelry: boolean;

}

/* =========================================================
   Investments
========================================================= */

export interface Investments {

  stocks: number;

  businessInventory: number;

  rentalIncome: number;

  savingsCertificates: number;

}

/* =========================================================
   Debts
========================================================= */

export interface Debts {

  shortTermDebt: number;

  longTermDebt: number;

  taxes: number;

  utilityBills: number;

  employeeSalaries: number;

}

/* =========================================================
   Complete Form
========================================================= */

export interface ZakatFormData {

  currency: Currency;

  madhab: Madhab;

  nisabStandard: NisabStandard;

  mode: CalculatorMode;

  cash: CashAssets;

  metals: PreciousMetals;

  investments: Investments;

  debts: Debts;

}

/* =========================================================
   Breakdown
========================================================= */

export interface ZakatBreakdown {

  cash: number;

  metals: number;

  investments: number;

  debts: number;

}

/* =========================================================
   Live Metal Rates
========================================================= */

export interface NisabRates {

  goldRate: number;

  silverRate: number;

  goldThreshold: number;

  silverThreshold: number;

  lastUpdated: string;

  source: string;

  isCachedPastDay?: boolean;

}

/* =========================================================
   Calculation Result
========================================================= */

export interface ZakatResult {

  totalAssets: number;

  deductibleDebts: number;

  netWealth: number;

  nisab: number;

  eligible: boolean;

  zakat: number;

  breakdown: ZakatBreakdown;

}

/* =========================================================
   Wizard Step
========================================================= */

export interface WizardStep {

  id: number;

  title: string;

  description: string;

}

/* =========================================================
   Currency Option
========================================================= */

export interface CurrencyOption {

  value: Currency;

  code: Currency;

  name: string;

  symbol: string;

  flag: string;

}

/* =========================================================
   Madhab Option
========================================================= */

export interface MadhabOption {

  value: Madhab;

  label: string;

  description: string;

}

/* =========================================================
   Nisab Option
========================================================= */

export interface NisabOption {

  value: NisabStandard;

  label: string;

  grams: number;

  recommended: boolean;

  description: string;

}