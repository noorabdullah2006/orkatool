import type { LucideIcon } from "lucide-react";

export type CategoryIconName =
  | "calculator"
  | "pdf"
  | "image"
  | "seo"
  | "developer"
  | "text"
  | "ai"
  | "converter";

export interface Category {
  id: string;

  title: string;

  description: string;

  icon: CategoryIconName;

  totalTools: number;

  href: string;
}

export type CategoryIconMap = Record<
  CategoryIconName,
  LucideIcon
>;