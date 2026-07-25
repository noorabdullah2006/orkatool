export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;

  totalTools: number;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}