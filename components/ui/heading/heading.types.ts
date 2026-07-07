import {
  HTMLAttributes,
  ReactNode,
} from "react";

export type HeadingLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {

  children: ReactNode;

  level?: HeadingLevel;

  align?: "left" | "center" | "right";

  color?: "default" | "primary" | "muted";
}