import { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {

  children: ReactNode;

  variant?: BadgeVariant;

  size?: BadgeSize;

  rounded?: boolean;
}