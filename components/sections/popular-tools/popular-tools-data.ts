import type {
  PopularTool,
  ToolFilter,
} from "./popular-tools.types";

export const toolFilters: ToolFilter[] = [
  {
    id: 1,
    label: "All",
    value: "all",
  },
  {
    id: 2,
    label: "Calculators",
    value: "calculators",
  },
  {
    id: 3,
    label: "PDF",
    value: "pdf",
  },
  {
    id: 4,
    label: "Image",
    value: "image",
  },
  {
    id: 5,
    label: "SEO",
    value: "seo",
  },
  {
    id: 6,
    label: "Developer",
    value: "developer",
  },
];

export const popularTools: PopularTool[] = [
  {
    id: 1,
    title: "Age Calculator",
    description: "Calculate your exact age instantly.",
    icon: "🎂",
    category: "calculators",
    href: "/tools/age-calculator",
    badge: "Popular",
  },
  {
    id: 2,
    title: "BMI Calculator",
    description: "Check your body mass index.",
    icon: "⚕️",
    category: "calculators",
    href: "/tools/bmi-calculator",
  },
  {
    id: 3,
    title: "PDF Merge",
    description: "Merge PDF files in seconds.",
    icon: "📄",
    category: "pdf",
    href: "/tools/pdf-merge",
    badge: "Popular",
  },
  {
    id: 4,
    title: "Image Compressor",
    description: "Reduce image size without losing quality.",
    icon: "🖼️",
    category: "image",
    href: "/tools/image-compressor",
  },
  {
    id: 5,
    title: "JSON Formatter",
    description: "Beautify and validate JSON instantly.",
    icon: "💻",
    category: "developer",
    href: "/tools/json-formatter",
  },
  {
    id: 6,
    title: "Meta Tag Generator",
    description: "Generate SEO meta tags easily.",
    icon: "🌐",
    category: "seo",
    href: "/tools/meta-tag-generator",
    badge: "New",
  },
  {
    id: 7,
    title: "Password Generator",
    description: "Create strong and secure passwords.",
    icon: "🔐",
    category: "developer",
    href: "/tools/password-generator",
  },
  {
    id: 8,
    title: "Keyword Density Checker",
    description: "Analyze keyword usage for SEO.",
    icon: "📈",
    category: "seo",
    href: "/tools/keyword-density-checker",
  },
];