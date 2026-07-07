import type {
  FooterSection,
  SocialLink,
} from "./footer.types";

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Categories", href: "/categories" },
      { label: "All Tools", href: "/tools" },
      { label: "Blog", href: "/blog" },
    ],
  },

  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },

  {
    title: "Popular Tools",
    links: [
      { label: "Age Calculator", href: "/tools/age-calculator" },
      { label: "BMI Calculator", href: "/tools/bmi-calculator" },
      { label: "Percentage Calculator", href: "/tools/percentage-calculator" },
      { label: "Password Generator", href: "/tools/password-generator" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "#",
  },

  {
    label: "LinkedIn",
    href: "#",
  },

  {
    label: "GitHub",
    href: "#",
  },
];