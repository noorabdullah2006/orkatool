import {
  LucideIcon,
} from "lucide-react";

import {
  HTMLAttributes,
} from "react";

export type IconSize =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type IconColor =
  | "default"
  | "primary"
  | "muted"
  | "success"
  | "warning"
  | "danger";

export interface IconProps
  extends HTMLAttributes<HTMLSpanElement> {

  icon: LucideIcon;

  size?: IconSize;

  color?: IconColor;

  strokeWidth?: number;
}