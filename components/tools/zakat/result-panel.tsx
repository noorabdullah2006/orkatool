"use client";

import type {
  Currency,
  ZakatResult,
} from "./types";

import {
  formatMoney,
} from "./utils";

type Props = {
  result: ZakatResult;
  currency: Currency;
};

export default function ResultPanel({

  result,

  currency,

}: Props) {

  return (

    <section className="zakat-result">

      {/* ================================
          Header
      ================================= */}

      <div className="result-header">

        <div>

          <h2>

            Your Zakat Summary

          </h2>

          <p>

            Calculated using your selected
            Nisab standard.

          </p>

        </div>

      </div>

      {/* ================================
          Main Cards
      ================================= */}

      <div className="result-grid">

        <div className="result-card">

          <span>

            Total Assets

          </span>

          <strong>

            {formatMoney(

              result.totalAssets,

              currency,

            )}

          </strong>

        </div>

        <div className="result-card">

          <span>

            Deductible Debts

          </span>

          <strong>

            {formatMoney(

              result.deductibleDebts,

              currency,

            )}

          </strong>

        </div>

        <div className="result-card">

          <span>

            Net Wealth

          </span>

          <strong>

            {formatMoney(

              result.netWealth,

              currency,

            )}

          </strong>

        </div>

        <div className="result-card">

          <span>

            Nisab

          </span>

          <strong>

            {formatMoney(

              result.nisab,

              currency,

            )}

          </strong>

        </div>

      </div>

      {/* ================================
          Eligibility
      ================================= */}

      <div

        className={
          result.eligible

            ? "status success"

            : "status warning"
        }

      >

        <h3>

          {

            result.eligible

              ? "Zakat is Obligatory"

              : "Zakat is Not Obligatory"

          }

        </h3>

        <p>

          {

            result.eligible

              ? "Your net wealth is above the Nisab threshold."

              : "Your net wealth is below the Nisab threshold."

          }

        </p>

      </div>

      {/* ================================
          Final Amount
      ================================= */}

      <div className="zakat-total">

        <span>

          Total Zakat Payable

        </span>

        <strong>

          {formatMoney(

            result.zakat,

            currency,

          )}

        </strong>

      </div>

      {/* ================================
          Breakdown
      ================================= */}

      <div className="breakdown">

        <h3>

          Assets Breakdown

        </h3>

        <div className="breakdown-item">

          <span>

            Cash

          </span>

          <strong>

            {formatMoney(

              result.breakdown.cash,

              currency,

            )}

          </strong>

        </div>

        <div className="breakdown-item">

          <span>

            Gold & Silver

          </span>

          <strong>

            {formatMoney(

              result.breakdown.metals,

              currency,

            )}

          </strong>

        </div>

        <div className="breakdown-item">

          <span>

            Investments

          </span>

          <strong>

            {formatMoney(

              result.breakdown.investments,

              currency,

            )}

          </strong>

        </div>

        <div className="breakdown-item">

          <span>

            Debts

          </span>

          <strong>

            -

            {formatMoney(

              result.breakdown.debts,

              currency,

            )}

          </strong>

        </div>

      </div>

      {/* ================================
          Actions
      ================================= */}

      <div className="result-actions">

        <button
          type="button"
          className="btn-primary"
        >

          Download PDF

        </button>

        <button
          type="button"
          className="btn-outline"
        >

          Share on WhatsApp

        </button>

      </div>

    </section>

  );

}