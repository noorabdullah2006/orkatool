import {
  HTMLAttributes,
  ReactNode,
} from "react";

export type TextVariant =
  | "body"
  | "lead"
  | "small"
  | "caption";

export type TextColor =
  | "default"
  | "muted"
  | "primary"
  | "success"
  | "warning"
  | "danger";

export type TextAlign =
  | "left"
  | "center"
  | "right";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement> {

  children: ReactNode;

  variant?: TextVariant;

  color?: TextColor;

  align?: TextAlign;
}