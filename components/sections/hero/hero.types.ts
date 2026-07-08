export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCard {
  title: string;
  subtitle: string;
  icon: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  description: string;

  buttons: HeroButton[];

  stats: HeroStat[];

  previewCards: HeroCard[];
}