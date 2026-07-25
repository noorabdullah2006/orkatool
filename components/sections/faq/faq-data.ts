export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "use-free",
    question: "Are all tools on OrkaTool free to use?",
    answer: "Yes, 100% free! Every tool on OrkaTool, including calculators, converters, SEO tools, and AI utilities, is fully accessible without any subscription plan, hidden fees, or account limits."
  },
  {
    id: "security",
    question: "Is my data secure when using your tools?",
    answer: "Your security is our priority. Most calculations and conversions (like JSON formatting or image compression) process directly inside your browser. No files or personal data are stored on our servers."
  },
  {
    id: "accuracy",
    question: "How accurate are the calculators and converters?",
    answer: "All calculators are verified using standard formulas and standard values (for instance, the BMI and Zakat calculators). While extremely accurate, standard results are for convenience only."
  },
  {
    id: "mobile-support",
    question: "Do the tools work on mobile devices?",
    answer: "Absolutely! OrkaTool is designed from the ground up to be responsive. All components stack and display natively on smartphones, tablets, laptops, and desktop screens."
  },
  {
    id: "new-tools",
    question: "How often do you add new tools?",
    answer: "We regularly expand our library. New converters, developer utils, and AI-powered assets are added every cycle based on user requests and tech industry trends."
  }
];
