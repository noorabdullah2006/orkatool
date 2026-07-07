import {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {

  children: ReactNode;

  hover?: boolean;

  bordered?: boolean;

  padding?: "none" | "sm" | "md" | "lg";
}

export interface CardSectionProps
  extends HTMLAttributes<HTMLDivElement> {

  children: ReactNode;
}