"use client";

import type {
  Currency,
  ZakatResult,
} from "./types";

type Props = {
  result: ZakatResult;
  currency: Currency;
};

export default function Breakdown({
  result,
  currency,
}: Props) {
  return (

    <section className="zakat-breakdown">

      <div className="breakdown-header">

        <h3>
          Wealth Breakdown
        </h3>

        <p>
          A detailed summary of your assets and liabilities.
        </p>

      </div>

      <div className="breakdown-table">

        <div className="breakdown-row">

          <span>
            Cash & Savings
          </span>

          <strong>
            {currency}{" "}
            {result.breakdown.cash.toLocaleString()}
          </strong>

        </div>

        <div className="breakdown-row">

          <span>
            Gold & Silver
          </span>

          <strong>
            {currency}{" "}
            {result.breakdown.metals.toLocaleString()}
          </strong>

        </div>

        <div className="breakdown-row">

          <span>
            Investments
          </span>

          <strong>
            {currency}{" "}
            {result.breakdown.investments.toLocaleString()}
          </strong>

        </div>

        <div className="breakdown-row negative">

          <span>
            Deductible Debts
          </span>

          <strong>

            - {currency}{" "}
            {result.breakdown.debts.toLocaleString()}

          </strong>

        </div>

        <div className="breakdown-divider" />

        <div className="breakdown-row total">

          <span>
            Net Wealth
          </span>

          <strong>

            {currency}{" "}
            {result.netWealth.toLocaleString()}

          </strong>

        </div>

      </div>

    </section>

  );
}