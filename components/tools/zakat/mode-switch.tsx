"use client";

import type { CalculatorMode } from "./types";

type Props = {
  mode: CalculatorMode;
  onChange: (mode: CalculatorMode) => void;
};

export default function ModeSwitch({
  mode,
  onChange,
}: Props) {
  return (
    <div className="mode-switch">

      <button
        type="button"
        className={
          mode === "quick"
            ? "mode-btn active"
            : "mode-btn"
        }
        onClick={() => onChange("quick")}
      >
        Quick Calculator
      </button>

      <button
        type="button"
        className={
          mode === "detailed"
            ? "mode-btn active"
            : "mode-btn"
        }
        onClick={() => onChange("detailed")}
      >
        Detailed Calculator
      </button>

    </div>
  );
}