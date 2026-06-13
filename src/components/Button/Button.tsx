import { Loader2 } from "lucide-react";

import { cn } from "@/lib/cn";

import { ButtonSize, ButtonVariant } from "./Button.types";
import type { ButtonProps } from "./Button.types";

const variantClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]:
    "bg-accent text-on-accent hover:bg-accent-hover hover:shadow-accent active:bg-accent-pressed",
  [ButtonVariant.SECONDARY]:
    "bg-transparent text-heading border border-border-strong hover:border-accent hover:text-accent-text",
  [ButtonVariant.GHOST]: "text-body hover:bg-surface-raised",
};

const sizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.SM]: "py-2 px-4 text-sm min-h-9",
  [ButtonSize.MD]: "py-3 px-6 text-base min-h-11",
  [ButtonSize.LG]: "py-4 px-8 text-lg min-h-13",
};

export const Button = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MD,
  isLoading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      className={cn(
        "inline-flex max-w-full min-w-0 cursor-pointer items-center justify-center gap-2 rounded-md text-center font-display uppercase leading-snug tracking-wider transition-colors duration-200 whitespace-normal",
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...props}
    >
      {isLoading && (
        <Loader2
          size={16}
          className="animate-spin"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
};
