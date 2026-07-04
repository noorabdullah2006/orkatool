import { ReactNode } from "react";

type SectionSpacing = "default" | "sm" | "lg";

type SectionVariant = "default" | "gray" | "dark";

interface SectionProps {
  children: ReactNode;
  id?: string;
  spacing?: SectionSpacing;
  variant?: SectionVariant;
}

export default function Section({
  children,
  id,
}: SectionProps) {
  return <section id={id}>{children}</section>;
}