import {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {

  label?: string;

  helperText?: string;

  error?: string;

  options: SelectOption[];

  placeholder?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  fullWidth?: boolean;
}