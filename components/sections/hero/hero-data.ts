import type { HeroContent } from "./hero.types";
import { getAllTools } from "@/content/tools";

export const heroContent: HeroContent = {
  badge: "Top Rated Utilities",

  title: "Fast, Free & Secure Online Tools",

  description:
    "Free tools, converters, and smart online utilities in one place. Secure processing and instant performance, zero account limits.",

  buttons: [
    {
      label: "Explore Tools",
      href: "/tools",
      variant: "primary",
    },
    {
      label: "Browse Categories",
      href: "/categories",
      variant: "secondary",
    },
  ],

  stats: [
    {
      value: `${getAllTools().filter(t => t.published).length}`,
      label: "Free Tools",
    },
    {
      value: "24/7",
      label: "Available",
    },
    {
      value: "Fast",
      label: "Performance",
    },
  ],

  previewCards: [
    {
      icon: "🧮",
      title: "Calculator",
      subtitle: "Fast & Accurate",
    },
    {
      icon: "📄",
      title: "Text Tools",
      subtitle: "Format & Transform",
    },
  ],
};