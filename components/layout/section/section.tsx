import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function Section({
  children,
  className = "",
  ariaLabel,
}: SectionProps) {
  return (
    <section
      className={`section ${className}`.trim()}
      role="region"
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}