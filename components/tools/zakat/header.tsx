"use client";

import {
  CURRENCIES,
  MADHABS,
} from "./constants";

import type {
  Currency,
  Madhab,
  NisabRates,
} from "./types";

type Props = {
  currency: Currency;
  madhab: Madhab;

  rates: NisabRates;

  onCurrencyChange: (
    currency: Currency,
  ) => void;

  onMadhabChange: (
    madhab: Madhab,
  ) => void;
};

export default function Header({
  currency,
  madhab,
  rates,
  onCurrencyChange,
  onMadhabChange,
}: Props) {
  return (
    <section className="zakat-header">

      <div className="zakat-header-top">

        <div>

          <h1>
            Zakat Calculator
          </h1>

          <p>
            Calculate your annual Zakat
            accurately using the latest
            Nisab values.
          </p>

        </div>

      </div>

      <div className="zakat-toolbar">

        <div className="toolbar-group">

          <label>

            Currency

          </label>

          <select
            value={currency}
            onChange={(event) =>
              onCurrencyChange(
                event.target
                  .value as Currency,
              )
            }
          >
            {CURRENCIES.map(
              (item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.value}
                </option>
              ),
            )}
          </select>

        </div>

        <div className="toolbar-group">

          <label>

            School of Thought

          </label>

          <select
            value={madhab}
            onChange={(event) =>
              onMadhabChange(
                event.target
                  .value as Madhab,
              )
            }
          >
            {MADHABS.map(
              (item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ),
            )}
          </select>

        </div>

      </div>

      <div className="metal-rates">

        <div className="rate-card">

          <span>

            Gold Rate

          </span>

          <strong>

            Rs{" "}
            {rates.goldRate.toLocaleString()}

          </strong>

          <small>

            Per Gram

          </small>

        </div>

        <div className="rate-card">

          <span>

            Silver Rate

          </span>

          <strong>

            Rs{" "}
            {rates.silverRate.toLocaleString()}

          </strong>

          <small>

            Per Gram

          </small>

        </div>

        <div className="rate-card">

          <span>

            Last Updated

          </span>

          <strong>

            Today

          </strong>

          <small>

            Cached Daily

          </small>

        </div>

      </div>

    </section>
  );
}