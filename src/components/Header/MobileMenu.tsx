import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { AppRoute } from "@/constants/routes";
import { TranslationNamespace } from "@/i18n/types";
import { cn } from "@/lib/cn";

import type { MobileMenuProps } from "./Header.types";

interface NavItem {
  to: AppRoute;
  labelKey: string;
  isAccent?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: AppRoute.SERVICES, labelKey: "nav.services" },
  { to: AppRoute.ABOUT, labelKey: "nav.about" },
  { to: AppRoute.CONTACT, labelKey: "nav.contact" },
  { to: AppRoute.CONTACT, labelKey: "cta.book", isAccent: true },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useTranslation(TranslationNamespace.COMMON);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-border bg-charcoal/95 shadow-lg backdrop-blur-md md:hidden">
      <nav
        className="flex flex-col px-4 py-2"
        aria-label={t("nav.labelMobile")}
      >
        {NAV_ITEMS.map((item, index) => {
          const isLast = index === NAV_ITEMS.length - 1;
          return (
            <Link
              key={`${item.to}-${item.labelKey}`}
              to={item.to}

              onClick={onClose}
              activeProps={{ "aria-current": "page" as const }}
              className={cn(
                "py-3 font-display text-sm uppercase tracking-wider transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent",
                !isLast && "border-b border-border",
                item.isAccent ? "text-accent-text" : "text-body hover:text-accent-text",
              )}
            >
              {t(item.labelKey)}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
