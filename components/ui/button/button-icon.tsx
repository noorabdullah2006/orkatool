import { ReactNode } from "react";

interface ButtonIconProps {
  children: ReactNode;
}

export default function ButtonIcon({
  children,
}: ButtonIconProps) {
  return (
    <span className="button-icon">
      {children}
    </span>
  );
}