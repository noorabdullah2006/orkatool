import { ReactNode } from "react";

interface ButtonGroupProps {
  children: ReactNode;
}

export default function ButtonGroup({
  children,
}: ButtonGroupProps) {
  return (
    <div className="button-group">
      {children}
    </div>
  );
}