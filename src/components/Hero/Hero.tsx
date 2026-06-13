import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariant, ButtonSize } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SpecChip } from "@/components/SpecChip";
import { TranslationNamespace } from "@/i18n/types";
import { PHONE_TEL } from "@/constants/content";
import { cn } from "@/lib/cn";

import type { HeroProps } from "./Hero.types";
import { useTyreFinder } from "./useTyreFinder";
import "./Hero.styles.css";

export const Hero = ({ className }: HeroProps) => {
  const { t } = useTranslation(TranslationNamespace.HERO);
  const { size, error, inputRef, handleChange, handleSubmit } = useTyreFinder();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={cn("relative overflow-hidden bg-ink py-16 md:py-24 lg:py-32", className)}
    >
      {/* Background photo — responsive <img>, decorative (alt=""), fetchpriority high (above fold) */}
      <img
        src="/photos/hero-1280.webp"
        srcSet="/photos/hero-640.webp 640w, /photos/hero-1280.webp 1280w, /photos/hero-1920.webp 1920w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="hero-photo"
      />
      {/* Theme-aware gradient overlay */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Content grid */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-12 lg:gap-12">
        {/* Left column: hero copy */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="hero-animate hero-animate--1">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </div>

          <div className="hero-animate hero-animate--2">
            <Heading level={1} id="hero-heading">
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
              className="inline-flex min-h-13 items-center gap-2 rounded-md border border-border-strong px-8 py-4 font-display text-lg uppercase tracking-wider text-heading transition-colors duration-200 hover:border-accent hover:text-accent-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Phone size={18} aria-hidden="true" />
              {t("cta2")}
            </a>
          </div>

          {/* Spec chips row */}
          <div className="hero-animate hero-animate--5 flex flex-wrap gap-2">
            <SpecChip>205/55 R16</SpecChip>
            <SpecChip>225/45 R17</SpecChip>
            <SpecChip>195/65 R15</SpecChip>
            <SpecChip>32 PSI</SpecChip>
          </div>
        </div>

        {/* Right column: tyre finder card */}
        <div className="hero-animate hero-animate--5 flex items-start lg:col-span-5">
          <Card className="w-full bg-surface/90 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-display text-xl uppercase tracking-wide text-heading">
                  {t("quick.title")}
                </p>
                <p className="text-sm text-muted">{t("quick.sub")}</p>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="hero-tyre-size" className="text-sm font-medium text-body">
                  {t("quick.size")}
                </label>
                <input
                  ref={inputRef}
                  id="hero-tyre-size"
                  type="text"
                  value={size}
                  onChange={(e) => handleChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit();
                  }}
                  placeholder={t("quick.placeholder")}
                  aria-invalid={error !== null}
                  aria-describedby={error !== null ? "hero-tyre-error" : undefined}
                  className={cn(
                    "rounded-sm border bg-surface-raised px-4 py-3 font-mono text-base text-body placeholder:text-faint focus-visible:border-accent focus-visible:outline-none",
                    error !== null ? "border-danger" : "border-border",
                  )}
                />
                {error !== null && (
                  <p
                    id="hero-tyre-error"
                    role="alert"
                    className="text-sm text-danger"
                  >
                    {t("quick.err")}
                  </p>
                )}
              </div>

              <Button
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.MD}
                className="w-full"
                onClick={handleSubmit}
              >
                {t("quick.btn")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
