import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  className?: string;
}

export default function Main({
  children,
  className = "",
}: MainProps) {
  return (
    <main
      id="main-content"
      className={`site-main ${className}`.trim()}
    >
      {children}
    </main>
  );
}