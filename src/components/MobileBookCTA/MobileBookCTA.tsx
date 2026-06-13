import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "@/i18n/types";
import { AppRoute } from "@/constants/routes";
import { PHONE_TEL } from "@/constants/content";
import { cn } from "@/lib/cn";

import type { MobileBookCTAProps } from "./MobileBookCTA.types";

/**
 * Sticky bottom bar visible only on mobile (md:hidden).
 * Provides a persistent Book CTA and quick-dial phone button.
 * Does not cover content in a disruptive way — sits as a slim action bar.
 */
export const MobileBookCTA = ({ className }: MobileBookCTAProps) => {
  const { t } = useTranslation(TranslationNamespace.COMMON);

  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-30 md:hidden",
        "bg-charcoal/90 backdrop-blur-sm border-t border-border",
        "flex items-center gap-3 px-4 py-3",
        className,
      )}
    >
      {/* Book CTA — fills remaining space */}
      <Link
        to={AppRoute.CONTACT}
        className={cn(
          "flex min-h-11 flex-1 items-center justify-center",
          "rounded-md bg-accent",
          "font-display text-sm uppercase tracking-wider text-on-accent",
          "transition-colors duration-200 hover:bg-accent-hover",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        )}
      >
        {t("cta.book")}
      </Link>

      {/* Phone icon button */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={t("phone.label")}
        className={cn(
          "flex min-h-11 min-w-11 items-center justify-center",
          "rounded-md border border-border-strong",
          "text-body transition-colors duration-200 hover:border-accent hover:text-accent-text",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        )}
      >
        <Phone size={18} aria-hidden="true" />
      </a>
    </div>
  );
};
