import type {
  Currency,
  Madhab,
  NisabStandard,
} from "./types";

/* =========================================================
   Currency Options
========================================================= */

export const CURRENCIES: {
  code: Currency;
  name: string;
  symbol: string;
  flag: string;
}[] = [

  {
    code: "PKR",
    name: "Pakistani Rupee",
    symbol: "₨",
    flag: "🇵🇰",
  },

  {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
  },

  {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    flag: "🇬🇧",
  },

  {
    code: "AED",
    name: "UAE Dirham",
    symbol: "د.إ",
    flag: "🇦🇪",
  },

  {
    code: "SAR",
    name: "Saudi Riyal",
    symbol: "﷼",
    flag: "🇸🇦",
  },

  {
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
  },

  {
    code: "BDT",
    name: "Bangladeshi Taka",
    symbol: "৳",
    flag: "🇧🇩",
  },

];

/* =========================================================
   Madhab Options
========================================================= */

export const MADHABS: {
  value: Madhab;
  label: string;
  description: string;
}[] = [

  {
    value: "hanafi",
    label: "Hanafi",
    description:
      "Includes all gold and silver jewellery. Debts are deductible.",
  },

  {
    value: "shafii",
    label: "Shafi'i",
    description:
      "Regularly worn jewellery is generally exempt. Debts are not deducted.",
  },

  {
    value: "maliki",
    label: "Maliki",
    description:
      "Regular jewellery is exempt. Eligible debts are deductible.",
  },

  {
    value: "hanbali",
    label: "Hanbali",
    description:
      "Regular jewellery is exempt. Eligible debts are deductible.",
  },

];

/* =========================================================
   Nisab Standards
========================================================= */

export const NISAB_OPTIONS: {
  value: NisabStandard;
  label: string;
  grams: number;
  recommended: boolean;
  description: string;
}[] = [

  {
    value: "silver",
    label: "Silver Standard",
    grams: 612.36,
    recommended: true,
    description:
      "Recommended because it allows more Muslims to identify their Zakat obligation.",
  },

  {
    value: "gold",
    label: "Gold Standard",
    grams: 87.48,
    recommended: false,
    description:
      "Uses the traditional gold Nisab threshold.",
  },

];