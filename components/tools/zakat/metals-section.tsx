"use client";

import type {
  Dispatch,
  SetStateAction,
} from "react";

import type {
  NisabRates,
  ZakatFormData,
} from "./types";

type Props = {

  form: ZakatFormData;

  rates: NisabRates;

  setForm: Dispatch<
    SetStateAction<ZakatFormData>
  >;

};

/* ==========================================
   Helpers
========================================== */

function parseValue(
  value: string,
): number {

  const number = Number(value);

  if (!Number.isFinite(number)) {

    return 0;

  }

  return Math.max(0, number);

}

export default function MetalsSection({

  form,

  rates,

  setForm,

}: Props) {

  const updateMetal = (

    key: keyof ZakatFormData["metals"],

    value: unknown,

  ) => {

    setForm({

      ...form,

      metals: {

        ...form.metals,

        [key]: value,

      },

    });

  };

  const goldValue =

    form.metals.goldWeight *

    rates.goldRate;

  const silverValue =

    form.metals.silverWeight *

    rates.silverRate;

  const jewelryValue =

    form.metals.jewelryWeight *

    rates.goldRate;

  return (

    <section className="calculator-section">

      <div className="section-header">

        <h2>

          Gold & Silver

        </h2>

        <p>

          Enter the weight of your Gold,
          Silver and Jewellery.

        </p>

      </div>

      {/* ===========================
          GOLD
      =========================== */}

      <div className="asset-card">

        <h3>

          Gold

        </h3>

        <div className="form-grid">

          <Input

            label="Gold Weight (grams)"

            value={
              form.metals.goldWeight
            }

            onChange={(value)=>

              updateMetal(

                "goldWeight",

                value,

              )

            }

          />

          <div className="form-group">

            <label>

              Purity

            </label>

            <select

              value={
                form.metals.jewelryPurity
              }

              onChange={(event)=>

                updateMetal(

                  "jewelryPurity",

                  event.target.value,

                )

              }

            >

              <option>

                24K

              </option>

              <option>

                22K

              </option>

              <option>

                21K

              </option>

              <option>

                18K

              </option>

            </select>

          </div>

        </div>

        <div className="readonly-box">

          <span>

            Estimated Gold Value

          </span>

          <strong>

            {form.currency}

            {" "}

            {goldValue.toLocaleString()}

          </strong>

        </div>

      </div>

      {/* ===========================
          SILVER
      =========================== */}

      <div className="asset-card">

        <h3>

          Silver

        </h3>

        <Input

          label="Silver Weight (grams)"

          value={
            form.metals.silverWeight
          }

          onChange={(value)=>

            updateMetal(

              "silverWeight",

              value,

            )

          }

        />

        <div className="readonly-box">

          <span>

            Estimated Silver Value

          </span>

          <strong>

            {form.currency}

            {" "}

            {silverValue.toLocaleString()}

          </strong>

        </div>

      </div>

      {/* ===========================
          JEWELLERY
      =========================== */}

      <div className="asset-card">

        <h3>

          Jewellery

        </h3>

        <Input

          label="Jewellery Weight (grams)"

          value={
            form.metals.jewelryWeight
          }

          onChange={(value)=>

            updateMetal(

              "jewelryWeight",

              value,

            )

          }

        />

        <label className="checkbox">

          <input

            type="checkbox"

            checked={
              form.metals
                .isRegularJewelry
            }

            onChange={(event)=>

              updateMetal(

                "isRegularJewelry",

                event.target.checked,

              )

            }

          />

          Regularly Worn Jewellery

        </label>

        <div className="readonly-box">

          <span>

            Estimated Jewellery Value

          </span>

          <strong>

            {form.currency}

            {" "}

            {jewelryValue.toLocaleString()}

          </strong>

        </div>

      </div>

    </section>

  );

}

/* ==========================================
   Input
========================================== */

type InputProps = {

  label: string;

  value: number;

  onChange: (
    value: number,
  ) => void;

};

function Input({

  label,

  value,

  onChange,

}: InputProps) {

  return (

    <div className="form-group">

      <label>

        {label}

      </label>

      <input

        type="number"

        min="0"

        placeholder="0"

        value={
          value === 0
            ? ""
            : value
        }

        onChange={(event)=>

          onChange(

            parseValue(

              event.target.value,

            ),

          )

        }

      />

    </div>

  );

}