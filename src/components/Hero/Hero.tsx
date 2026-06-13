import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariant, ButtonSize } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { TyreFinder } from "@/components/TyreFinder";
import { TranslationNamespace } from "@/i18n/types";
import { PHONE_TEL } from "@/constants/content";
import { assetPath, assetSrcSet } from "@/lib/asset";
import { cn } from "@/lib/cn";

import type { HeroProps } from "./Hero.types";
import "./Hero.styles.css";

export const Hero = ({ className }: HeroProps) => {
  const { t } = useTranslation(TranslationNamespace.HERO);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={cn("relative overflow-hidden bg-ink py-16 md:py-24 lg:py-32", className)}
    >
      {/* Background photo — responsive <img>, decorative (alt=""), fetchpriority high (above fold) */}
      <img
        src={assetPath("/photos/hero-1280.webp")}
        srcSet={assetSrcSet([
          ["/photos/hero-640.webp", "640w"],
          ["/photos/hero-1280.webp", "1280w"],
          ["/photos/hero-1920.webp", "1920w"],
        ])}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="hero-photo"
      />
      {/* Theme-aware gradient overlay */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Content — copy column (left) + tyre-size finder (right on desktop) */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6 lg:flex-row lg:items-center lg:gap-12">
        {/* Left: copy + CTAs */}
        <div className="hero-copy flex flex-col gap-6 lg:flex-1">
          <div className="hero-animate hero-animate--1">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </div>

          <div className="hero-animate hero-animate--2 max-w-2xl">
            <Heading level={1} id="hero-heading" className="text-2xl md:text-3xl">
              {t("title")}
            </Heading>
          </div>

          <div className="hero-animate hero-animate--3">
            <p className="max-w-prose text-lg leading-relaxed text-body">{t("sub")}</p>
          </div>

          {/* CTA row */}
          <div className="hero-animate hero-animate--4 flex flex-wrap gap-4">
            <Button
              variant={ButtonVariant.PRIMARY}
              size={ButtonSize.LG}
              onClick={() => {
                document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("cta1")}
            </Button>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex max-w-full min-h-13 min-w-0 items-center justify-center gap-2 rounded-md border border-border-strong px-6 py-4 text-center font-display text-lg uppercase leading-snug tracking-wider text-heading transition-colors duration-200 hover:border-accent hover:text-accent-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-8"
            >
              <Phone size={18} aria-hidden="true" />
              {t("cta2")}
            </a>
          </div>
        </div>

        {/* Right: tyre-size finder */}
        <div className="hero-animate hero-animate--5 w-full lg:w-2/5 lg:max-w-md lg:shrink-0">
          <TyreFinder />
        </div>
      </div>
    </section>
  );
};
