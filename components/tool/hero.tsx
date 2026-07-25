"use client";

import type { Tool } from "@/content/tools";
import HeroInheritance from "./hero-inheritance";
import HeroZakat from "./hero-zakat";
import HeroTextRepeater from "./hero-text-repeater";
import HeroDefault from "./hero-default";

type Props = { tool: Tool };

const TOOL_HERO_MAP: Record<string, React.ComponentType<{ tool: Tool; onScrollToCalculator: () => void; onScrollToFooter: () => void }>> = {
  "inheritance-calculator": HeroInheritance,
  "zakat-calculator": HeroZakat,
  "text-repeater": HeroTextRepeater,
};

export default function ToolHero({ tool }: Props) {
  const scrollToCalculator = () => {
    document.getElementById("calculator-container")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFooter = () => {
    const el = document.querySelector(".related-tools") ?? document.querySelector("footer");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const HeroComponent = TOOL_HERO_MAP[tool.slug] ?? HeroDefault;

  return (
    <HeroComponent
      tool={tool}
      onScrollToCalculator={scrollToCalculator}
      onScrollToFooter={scrollToFooter}
    />
  );
}