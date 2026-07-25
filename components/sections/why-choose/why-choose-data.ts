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
    description: "Average response under 1 second.",
    icon: Zap,
    metric: "< 1s",
  },

  {
    id: "secure",
    title: "100% Secure",
    description: "Your files never leave your device.",
    icon: ShieldCheck,
    metric: "Client Side",
  },

  {
    id: "free",
    title: "Always Free",
    description: "Most tools available without signup.",
    icon: BadgeCheck,
    metric: "0$ Fees",
  },

  {
    id: "responsive",
    title: "Responsive",
    description: "Perfect experience on every device.",
    icon: Smartphone,
    metric: "Universal",
  },

  {
    id: "available",
    title: "24/7 Available",
    description: "Access tools anytime you need.",
    icon: Clock3,
    metric: "99.9% Up",
  },

  {
    id: "global",
    title: "Global Access",
    description: "Use OrkaTool from anywhere.",
    icon: Globe,
    metric: "Anywhere",
  },
];