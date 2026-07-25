import type { HeroContent } from "./hero.types";

export const heroContent: HeroContent = {
  badge: "Trusted by Thousands",

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
      icon: "🌐",
      title: "SEO Tools",
      subtitle: "Website Optimization",
    },
    {
      icon: "🤖",
      title: "AI Tools",
      subtitle: "Smart Utilities",
    },
    {
      icon: "🖼️",
      title: "Image Tools",
      subtitle: "Compress & Convert",
    },
    {
      icon: "📄",
      title: "PDF Tools",
      subtitle: "Convert & Merge",
    },
    {
      icon: "💻",
      title: "Developer Tools",
      subtitle: "Format & Validator",
    },
  ],
};