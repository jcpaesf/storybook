import { ButtonHTMLAttributes } from "react";

export interface IStyledButtonProps {
  $color?: string;
  $transparent?: boolean;
  $size?: "small" | "medium" | "large";
  $fontColor?: string;
}
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  transparent?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  fontColor?: string;
}
