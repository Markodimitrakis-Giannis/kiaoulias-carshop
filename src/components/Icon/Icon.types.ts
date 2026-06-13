import type { LucideIcon } from "lucide-react";

export enum IconSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  label?: string;
  className?: string;
}
