import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "@/i18n/types";
import { cn } from "@/lib/cn";

import type { LanguageToggleProps } from "./Header.types";

const SUPPORTED_LANGUAGES = ["en", "el"] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: "EN",
  el: "EL",
};

export const LanguageToggle = ({
  currentLanguage,
  onChangeLanguage,
}: LanguageToggleProps) => {
  const { t } = useTranslation(TranslationNamespace.COMMON);

  return (
    <div
      className="flex overflow-hidden rounded-md border border-border text-sm"
      role="group"
      aria-label={t("lang.toggle")}
    >
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = currentLanguage === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => onChangeLanguage(lang)}
            aria-pressed={isActive}
            className={cn(
              "px-3 py-1 font-mono uppercase transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent",
              isActive
                ? "bg-accent text-on-accent"
                : "text-muted hover:text-body",
            )}
          >
            {LANGUAGE_LABELS[lang]}
          </button>
        );
      })}
    </div>
  );
};
