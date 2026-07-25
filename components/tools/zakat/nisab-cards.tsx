"use client";

import {
  NISAB_OPTIONS,
  GOLD_NISAB_GRAMS,
  SILVER_NISAB_GRAMS,
} from "./constants";

import type {
  NisabRates,
  NisabStandard,
} from "./types";

type Props = {
  selected: NisabStandard;
  rates: NisabRates;

  onChange: (
    value: NisabStandard,
  ) => void;
};

export default function NisabCards({
  selected,
  rates,
  onChange,
}: Props) {

  return (

    <section className="nisab-section">

      <div className="section-heading">

        <h2>

          Nisab Standard

        </h2>

        <p>

          Choose the Nisab basis used for your
          Zakat calculation.

        </p>

      </div>

      <div className="nisab-grid">

        {NISAB_OPTIONS.map((item) => {

          const isGold =
            item.value === "gold";

          const grams =
            isGold
              ? GOLD_NISAB_GRAMS
              : SILVER_NISAB_GRAMS;

          const value =
            isGold
              ? rates.goldRate *
                GOLD_NISAB_GRAMS
              : rates.silverRate *
                SILVER_NISAB_GRAMS;

          const active =
            selected === item.value;

          return (

            <button
              key={item.value}
              type="button"
              className={
                active
                  ? "nisab-card active"
                  : "nisab-card"
              }
              onClick={() =>
                onChange(item.value)
              }
            >

              <div className="nisab-card-top">

                <h3>

                  {item.label}

                </h3>

                {item.recommended && (

                  <span className="recommended-badge">

                    Recommended

                  </span>

                )}

              </div>

              <div className="nisab-grams">

                {grams.toLocaleString()} g

              </div>

              <div className="nisab-price">

                Rs{" "}

                {value.toLocaleString(
                  undefined,
                  {
                    maximumFractionDigits: 0,
                  },
                )}

              </div>

              {active && (

                <div className="selected-tag">

                  ✓ Selected

                </div>

              )}

            </button>

          );

        })}

      </div>

    </section>

  );

}