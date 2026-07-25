export interface Tool {

  id: string;

  slug: string;

  title: string;

  description: string;

  category: string;

  icon: string;

  featured: boolean;

  popular: boolean;

  published: boolean;

  keywords: string[];

  dateAdded: string;

  seoTitle?: string;

  seoDescription?: string;

}