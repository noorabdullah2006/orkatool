import type { HeroContent } from "./hero.types";

export const heroContent: HeroContent = {
  badge: "🚀 Trusted by Thousands",

  title: "Fast, Accurate & Free Online Tools",

  description:
    "Everything you need in one place — Calculators, Converters, SEO Tools, PDF Tools, Developer Utilities, AI Tools and much more.",

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
      value: "100+",
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
      title: "PDF Tools",
      subtitle: "Convert & Merge",
    },
    {
      icon: "🌐",
      title: "SEO Tools",
      subtitle: "Website Optimization",
    },
    {
      icon: "🤖",
      title: "AI Tools",
      subtitle: "Smart Utilities",
    },
  ],
};