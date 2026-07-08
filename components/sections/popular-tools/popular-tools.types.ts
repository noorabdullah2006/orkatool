export interface PopularTool {
  id: number;

  title: string;

  description: string;

  icon: string;

  category: string;

  href: string;

  badge?: "Popular" | "New";
}

export interface ToolFilter {
  id: number;

  label: string;

  value: string;
}