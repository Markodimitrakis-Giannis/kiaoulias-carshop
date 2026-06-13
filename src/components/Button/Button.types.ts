export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
}

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
}
