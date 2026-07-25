import { Category } from "./category.types";

export const categories: Category[] = [

  {
    id: "calculators",
    slug: "calculators",
    title: "Calculators",
    description: "Professional online calculators for everyday use.",
    icon: "calculator",
    totalTools: 0, // Will be computed dynamically in utils

    seo: {
      title: "Free Online Calculators - OrkaTool",
      description:
        "Use free online calculators including Zakat and more.",
      keywords: [
        "calculator",
        "online calculator",
        "free calculator",
      ],
    },
  },


  {
    id: "text-tools",
    slug: "text-tools",
    title: "Text Tools",
    description: "Edit, clean and transform text instantly.",
    icon: "text",
    totalTools: 0,

    seo: {
      title: "Text & String Utilities - OrkaTool",
      description:
        "Clean, split, and transform text online without limits.",
      keywords: [
        "text tools",
        "text formatter",
        "string editor",
      ],
    },
  },

];