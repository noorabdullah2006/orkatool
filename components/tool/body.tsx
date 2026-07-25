import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ToolBody({
  children,
}: Props) {
  return (

    <section className="tool-body" id="calculator-container">

      <div className="tool-container">

        <div className="tool-main">

          {children}

        </div>

      </div>

    </section>

  );
}