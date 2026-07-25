import type { InheritanceFormData } from "./types";

export const CURRENCIES = [
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
] as const;

export const MADHABS = [
  {
    value: "hanafi",
    label: "Hanafi (Default)",
    description: "Traditional Hanafi jurisprudence. Grandfather excludes siblings.",
  },
  {
    value: "shafii",
    label: "Shafi'i",
    description: "Shafi'i jurisprudence. Grandfather shares with siblings (Muqasamah).",
  },
  {
    value: "maliki",
    label: "Maliki",
    description: "Maliki jurisprudence. Grandfather shares with siblings (Muqasamah).",
  },
  {
    value: "hanbali",
    label: "Hanbali",
    description: "Hanbali jurisprudence. Grandfather shares with siblings (Muqasamah).",
  },
] as const;

export const DEFAULT_FORM: InheritanceFormData = {
  deceasedGender: "male",
  madhab: "hanafi",
  currency: "PKR",
  estate: 0,
  funeral: 0,
  debts: 0,
  wasiyyah: 0,
  heirs: {
    husband: 0,
    wife: 0,
    sons: 0,
    daughters: 0,
    grandsons: 0,
    granddaughters: 0,
    father: 0,
    mother: 0,
    paternalGrandfather: 0,
    paternalGrandmother: 0,
    maternalGrandmother: 0,
    fullBrothers: 0,
    fullSisters: 0,
    consanguineBrothers: 0,
    consanguineSisters: 0,
    uterineBrothers: 0,
    uterineSisters: 0,
  },
};
