import {
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {

  label?: string;

  helperText?: string;

  error?: string;

  fullWidth?: boolean;

  resize?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}