export enum BadgeVariant {
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
  NEUTRAL = "neutral",
}

export interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}
