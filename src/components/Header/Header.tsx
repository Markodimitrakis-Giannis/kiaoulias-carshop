import { Menu, Phone, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import i18n from "i18next";

import { AppRoute } from "@/constants/routes";
import { COMPANY_NAME, PHONE_NUMBER, PHONE_TEL } from "@/constants/content";
import { ensureLanguageLoaded } from "@/i18n";
import { TranslationNamespace } from "@/i18n/types";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/cn";
import { useTheme } from "@/hooks/useTheme";

import { useHeader } from "./useHeader";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import "./Header.styles.css";

interface NavLink {
  to: AppRoute;
  labelKey: string;
}

const NAV_LINKS: NavLink[] = [
  { to: AppRoute.SERVICES, labelKey: "nav.services" },
  { to: AppRoute.ABOUT, labelKey: "nav.about" },
  { to: AppRoute.CONTACT, labelKey: "nav.contact" },
];

export const Header = () => {
  const { t } = useTranslation(TranslationNamespace.COMMON);
  const { theme, toggleTheme } = useTheme();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, menuButtonRef } =
    useHeader();

  const currentLanguage = i18n.language?.split("-")[0] ?? "en";

  const handleLanguageChange = (lang: string) => {
    void ensureLanguageLoaded(lang).then(() => i18n.changeLanguage(lang));
  };

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-4 md:pt-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-charcoal/70 px-3 py-2.5 shadow-lg backdrop-blur-md sm:gap-4 sm:px-5 md:gap-8 md:px-8 md:py-4">
        {/* Logo — theme-aware (orange+white on dark, orange+black on light) */}
        <Link
          to={AppRoute.HOME}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "flex shrink-0 items-center",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
          )}
          aria-label={t("nav.homeLabel", { company: COMPANY_NAME })}
        >
          <img src={assetPath("/photos/logo-dark-800.webp")} alt="" className="logo-on-dark h-8 w-auto sm:h-10 md:h-12" />
          <img src={assetPath("/photos/logo-800.webp")} alt="" className="logo-on-light h-8 w-auto sm:h-10 md:h-12" />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="ml-auto hidden items-center gap-9 md:flex lg:gap-12"
          aria-label={t("nav.label")}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{
                "aria-current": "page" as const,
                className: "text-accent-text",
              }}
              className={cn(
                "nav-link font-display text-sm uppercase tracking-wider text-body",
                "transition-colors duration-200 hover:text-accent-text",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
              )}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className={cn("flex items-center gap-2 sm:gap-3", "ml-auto md:ml-0")}>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <LanguageToggle
            currentLanguage={currentLanguage}
            onChangeLanguage={handleLanguageChange}
          />

          {/* Phone link — shown only at lg+ to keep the bar uncluttered on tablets */}
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={t("phone.label")}
            className={cn(
              "hidden items-center gap-1 font-mono text-sm text-body",
              "transition-colors duration-200 hover:text-accent-text",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
              "lg:flex",
            )}
          >
            <Phone size={14} aria-hidden="true" />
            {PHONE_NUMBER}
          </a>

          {/* CTA — hidden below md */}
          <Link
            to={AppRoute.CONTACT}
            className={cn(
              "hidden rounded-md bg-accent px-4 py-2",
              "font-display text-sm uppercase tracking-wider text-on-accent",
              "transition-colors duration-200 hover:bg-accent-hover",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              "md:inline-flex md:items-center",
            )}
          >
            {t("cta.book")}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? t("menu.close") : t("menu.open")}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-md border border-border",
              "text-body transition-colors duration-200",
              "hover:border-accent hover:text-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              "md:hidden",
            )}
          >
            {isMobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

        {/* Mobile menu panel */}
        <div id="mobile-menu">
          <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </div>
      </div>
    </header>
  );
};
