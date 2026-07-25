export interface PopularTool {
  id: string;

  title: string;

  description: string;

  icon: string;

  category: string;

  href: string;

  badge?: "Popular" | "New" | "Trending" | "Editor's Pick";
}

export interface ToolFilter {
  id: number;

  label: string;

  value: string;
}