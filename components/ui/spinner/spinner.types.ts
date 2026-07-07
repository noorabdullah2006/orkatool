export type SpinnerSize =
  | "sm"
  | "md"
  | "lg";

export type SpinnerColor =
  | "primary"
  | "white"
  | "current";

export interface SpinnerProps {
  size?: SpinnerSize;

  color?: SpinnerColor;

  className?: string;
}