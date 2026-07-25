export type Currency =
  | "PKR"
  | "USD"
  | "GBP"
  | "AED"
  | "SAR"
  | "INR"
  | "BDT";

export type Madhab =
  | "hanafi"
  | "shafii"
  | "maliki"
  | "hanbali";

export interface HeirsCount {
  husband: number;
  wife: number;
  sons: number;
  daughters: number;
  grandsons: number; // Son's sons
  granddaughters: number; // Son's daughters
  father: number;
  mother: number;
  paternalGrandfather: number;
  paternalGrandmother: number;
  maternalGrandmother: number;
  fullBrothers: number;
  fullSisters: number;
  consanguineBrothers: number;
  consanguineSisters: number;
  uterineBrothers: number;
  uterineSisters: number;
}

export interface InheritanceFormData {
  deceasedGender: "male" | "female";
  madhab: Madhab;
  currency: Currency;
  estate: number;
  funeral: number;
  debts: number;
  wasiyyah: number;
  heirs: HeirsCount;
}

export interface HeirShare {
  id: string;
  name: string;
  relation: string;
  fraction: string;      // E.g. "1/6" or "Asaba"
  percentage: number;    // E.g. 16.67
  amount: number;        // Share value in PKR/USD
  reason: string;        // E.g. "Fixed share when deceased has child"
  isExcluded: boolean;
  excludedBy?: string;
}

export interface CalculationTraceStep {
  title: string;
  description: string;
}

export interface InheritanceResult {
  grossEstate: number;
  funeralExpenses: number;
  debts: number;
  wasiyyah: number;
  wasiyyahCapped: boolean;
  netEstate: number;
  totalDistributed: number;
  remainingEstate: number;
  heirsCount: number;
  shares: HeirShare[];
  trace: CalculationTraceStep[];
  raddWarning?: string;
}
