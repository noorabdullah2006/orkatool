import {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {

  label?: ReactNode;

  helperText?: string;

  error?: string;
}