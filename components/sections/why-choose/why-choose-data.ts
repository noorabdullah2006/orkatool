import {
  Zap,
  ShieldCheck,
  Clock3,
  Smartphone,
  Globe,
  BadgeCheck,
} from "lucide-react";

import type { WhyChooseItem } from "./why-choose.types";

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "fast",
    title: "Lightning Fast",
    description:
      "Instant results without waiting.",
    icon: Zap,
  },

  {
    id: "secure",
    title: "100% Secure",
    description:
      "Your files never leave your device.",
    icon: ShieldCheck,
  },

  {
    id: "free",
    title: "Always Free",
    description:
      "Use every tool without paying.",
    icon: BadgeCheck,
  },

  {
    id: "responsive",
    title: "Responsive",
    description:
      "Perfect experience on every device.",
    icon: Smartphone,
  },

  {
    id: "available",
    title: "24/7 Available",
    description:
      "Access tools anytime you need.",
    icon: Clock3,
  },

  {
    id: "global",
    title: "Global Access",
    description:
      "Use OrkaTool from anywhere.",
    icon: Globe,
  },
];