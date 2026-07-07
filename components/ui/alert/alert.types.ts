import {
  HTMLAttributes,
  ReactNode,
} from "react";

export type AlertVariant =
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement> {

  title?: string;

  children?: ReactNode;

  variant?: AlertVariant;
}