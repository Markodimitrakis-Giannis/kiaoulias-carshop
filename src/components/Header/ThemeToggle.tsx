import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "@/i18n/types";
import { cn } from "@/lib/cn";

import type { ThemeToggleProps } from "./Header.types";

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const { t } = useTranslation(TranslationNamespace.COMMON);

  const ariaLabel =
    theme === "dark" ? t("theme.toggleLight") : t("theme.toggleDark");

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
      className={cn(
        "site-icon-button grid h-9 w-9 place-items-center rounded-md border border-border",
        "text-body transition-colors duration-200",
        "hover:border-accent hover:text-accent",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      )}
    >
      {theme === "dark" ? (
        <Moon size={16} aria-hidden="true" />
      ) : (
        <Sun size={16} aria-hidden="true" />
      )}
    </button>
  );
};
