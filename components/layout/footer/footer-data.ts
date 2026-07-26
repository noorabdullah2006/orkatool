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
      { label: "Zakat Calculator", href: "/calculator-tools/zakat-calculator" },
      { label: "Inheritance Calculator", href: "/calculator-tools/inheritance-calculator" },
      { label: "Text Repeater", href: "/text-tools/text-repeater" },
    ],
  },
];

export const socialLinks: SocialLink[] = [];