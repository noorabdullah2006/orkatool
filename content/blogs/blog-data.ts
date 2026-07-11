import type { Blog } from "./blog.types";

import HowToCalculateAge from "./articles/how-to-calculate-age";

export const blogs: Blog[] = [

  {
    id: "how-to-calculate-age",

    slug: "how-to-calculate-age",

    title: "How to Calculate Age from Date of Birth",

    excerpt:
      "Learn how to calculate age accurately with simple methods, formulas and practical examples.",

    component: HowToCalculateAge,

    category: "Age Calculator",

    tags: [
      "Age Calculator",
      "Date of Birth",
      "Age",
    ],

    image:
      "/images/blogs/how-to-calculate-age.webp",

    imageAlt:
      "How to Calculate Age Guide",

    author: {
      name: "OrkaTool Team",
    },

    publishedAt: "2026-07-08",

    readingTime: 6,

    featured: true,

    published: true,

    seo: {

      metaTitle:
        "How to Calculate Age from Date of Birth",

      metaDescription:
        "Complete guide on calculating age with formulas, examples and online tools.",

      keywords: [
        "calculate age",
        "age calculator",
        "date of birth",
      ],

    },

  },

  {
    id: "bmi-calculator-guide",

    slug: "bmi-calculator-guide",

    title: "BMI Calculator Complete Guide",

    excerpt:
      "Everything you need to know about Body Mass Index and healthy weight ranges.",

    component: HowToCalculateAge,

    category: "BMI Calculator",

    tags: [
      "BMI",
      "Health",
      "Calculator",
    ],

    image:
      "/images/blogs/bmi-guide.webp",

    imageAlt:
      "BMI Calculator Guide",

    author: {
      name: "OrkaTool Team",
    },

    publishedAt: "2026-07-05",

    readingTime: 8,

    featured: false,

    published: true,

    seo: {

      metaTitle:
        "BMI Calculator Guide",

      metaDescription:
        "Understand BMI calculation, formulas and healthy BMI ranges.",

      keywords: [
        "BMI",
        "Body Mass Index",
      ],

    },

  },

  {
    id: "calculate-age-excel",

    slug: "calculate-age-in-excel",

    title: "How to Calculate Age in Excel",

    excerpt:
      "Master every Excel formula to calculate age accurately using practical examples.",

    component: HowToCalculateAge,

    category: "Excel",

    tags: [
      "Excel",
      "Age",
      "DATEDIF",
    ],

    image:
      "/images/blogs/excel-age.webp",

    imageAlt:
      "Calculate Age in Excel",

    author: {
      name: "OrkaTool Team",
    },

    publishedAt: "2026-06-28",

    readingTime: 10,

    featured: false,

    published: true,

    seo: {

      metaTitle:
        "Calculate Age in Excel",

      metaDescription:
        "Learn every Excel formula for calculating age.",

      keywords: [
        "Excel Age Formula",
        "DATEDIF",
      ],

    },

  },

];