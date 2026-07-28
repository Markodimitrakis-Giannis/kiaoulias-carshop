import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

import { AppRoute } from "@/constants/routes";
import {
  ADDRESS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  FOUNDING_YEAR,
  INSTAGRAM_URL,
  MOBILE_NUMBER,
  MOBILE_TEL,
  PHONE_NUMBER,
  PHONE_TEL,
} from "@/constants/content";
import { TranslationNamespace } from "@/i18n/types";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/cn";

import type { FooterProps } from "./Footer.types";

/* Brand icon components — lucide-react removed social/brand icons.
   SVG paths from Simple Icons (https://simpleicons.org), MIT-licensed. */
const InstagramIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const CURRENT_YEAR = new Date().getFullYear();
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(`${COMPANY_NAME}, ${ADDRESS}`)}`;

export const Footer = ({ className }: FooterProps) => {
  const { t } = useTranslation(TranslationNamespace.COMMON);

  return (
    <footer className={cn("border-t border-border bg-ink", className)}>
      {/* pb-24 on mobile clears the fixed MobileBookCTA bar; removed at md+ where the bar is hidden */}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-24 pt-12 md:flex-row md:justify-between md:px-6 md:py-12">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-3">
          <Link
            to={AppRoute.HOME}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={cn(
              "flex w-fit items-center gap-2",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
            )}
            aria-label={t("nav.homeLabel", { company: COMPANY_NAME })}
          >
            <img src={assetPath("/photos/logo-dark-800.webp")} alt="" className="logo-on-dark h-14 w-auto" />
            <img src={assetPath("/photos/logo-800.webp")} alt="" className="logo-on-light h-14 w-auto" />
          </Link>
          <p className="max-w-xs text-sm text-muted">{t("foot.tag")}</p>
          <p className="text-xs text-muted">
            {t("foot.copyright", { year: CURRENT_YEAR })}
          </p>
        </div>

        {/* Contact + footer nav */}
        <address className="not-italic">
          <nav aria-label={t("nav.labelFooter")}>
            <ul className="flex flex-col gap-1 font-mono text-sm text-muted">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  aria-label={`${t("phone.landline")} ${PHONE_NUMBER}`}
                  className={cn(
                    "transition-colors duration-200 hover:text-body",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
                  )}
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${MOBILE_TEL}`}
                  aria-label={`${t("phone.mobile")} ${MOBILE_NUMBER}`}
                  className={cn(
                    "transition-colors duration-200 hover:text-body",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
                  )}
                >
                  {t("phone.mobile")}: {MOBILE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={cn(
                    "transition-colors duration-200 hover:text-body",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
                  )}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>{ADDRESS}</li>
              <li>{t("foot.hours")}</li>
              <li className="pt-1">
                <Link
                  to={AppRoute.PRIVACY}

                  className={cn(
                    "text-muted transition-colors duration-200 hover:text-body",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
                  )}
                >
                  {t("foot.privacy")}
                </Link>
              </li>
            </ul>
          </nav>
        </address>

        {/* Social links */}
        <div className="flex items-start gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("social.instagram")}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-md border border-border",
              "text-muted transition-colors duration-200",
              "hover:border-accent hover:text-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            )}
          >
            <InstagramIcon />
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("social.map")}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-md border border-border",
              "text-muted transition-colors duration-200",
              "hover:border-accent hover:text-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            )}
          >
            <MapPin size={20} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Structured data — AutoRepair LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "Kiaoulias Tyres",
            foundingDate: String(FOUNDING_YEAR),
            address: {
              "@type": "PostalAddress",
              streetAddress: "Efodou 10, Heraklion 713 03",
              addressLocality: "Heraklion",
              addressCountry: "GR",
            },
            telephone: PHONE_NUMBER,
            email: CONTACT_EMAIL,
            openingHours: "Mo-Fr 08:00-17:00, Sa 08:00-15:00",
            url: "https://www.kiaoulias.gr",
            sameAs: [INSTAGRAM_URL],
          }),
        }}
      />
    </footer>
  );
};
