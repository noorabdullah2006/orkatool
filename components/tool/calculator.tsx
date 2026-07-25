import type { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Calculator({
  title = "Calculator",
  description,
  children,
}: Props) {
  return (
    <section className="calculator">

      <div className="calculator-card">

        <div className="calculator-header">

          <h2 className="calculator-title">

            {title}

          </h2>

          {description && (

            <p className="calculator-description">

              {description}

            </p>

          )}

        </div>

        <div className="calculator-body">

          {children}

        </div>

      </div>

    </section>
  );
}