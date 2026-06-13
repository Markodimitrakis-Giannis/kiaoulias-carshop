import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { BookingForm } from "@/components/BookingForm";
import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { AppRoute } from "@/constants/routes";
import { FOUNDING_YEAR } from "@/constants/content";
import { TranslationNamespace } from "@/i18n/types";
import { assetPath, assetSrcSet } from "@/lib/asset";
import { cn } from "@/lib/cn";

function AboutPage() {
  const { t } = useTranslation(TranslationNamespace.ABOUT);
  const { t: tGallery } = useTranslation(TranslationNamespace.GALLERY);

  return (
    <>
      {/* Hero section */}
      <SectionWrapper
        id="about"
        labelledBy="about-heading"
        variant={SectionBackground.INK}
      >
        <div className="flex flex-col gap-3">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <Heading level={1} id="about-heading">
            {t("h")}
          </Heading>
          <p className="max-w-2xl text-lg text-body">{t("intro")}</p>
        </div>
      </SectionWrapper>

      {/* Shop story section — workshop photo replaces the stat-only placeholder */}
      <SectionWrapper
        id="about-story"
        labelledBy="about-story-heading"
        variant={SectionBackground.CHARCOAL}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-3/5">
            <Heading level={2} id="about-story-heading">
              {t("story.h")}
            </Heading>
            <p className="text-base leading-relaxed text-body">{t("story.p1")}</p>
            <p className="text-base leading-relaxed text-body">{t("story.p2")}</p>

            {/* Years stat — compact, above the photo on mobile */}
            <div className="flex flex-col gap-1">
              <span className="font-display text-5xl uppercase text-accent-text">
                {new Date().getFullYear() - FOUNDING_YEAR}+
              </span>
              <span className="text-sm uppercase tracking-wider text-muted">
                {t("stat.years")}
              </span>
            </div>
          </div>

          {/* Workshop establishing shot */}
          <div className="overflow-hidden rounded-lg lg:w-2/5">
            <img
              src={assetPath("/photos/workshop-1280.webp")}
              srcSet={assetSrcSet([
                ["/photos/workshop-640.webp", "640w"],
                ["/photos/workshop-1280.webp", "1280w"],
                ["/photos/workshop-1600.webp", "1600w"],
              ])}
              sizes="(min-width:1024px) 40vw, 100vw"
              loading="lazy"
              alt={tGallery("about.workshop")}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Values section — balancing photo as visual anchor alongside the cards */}
      <SectionWrapper
        id="about-values"
        labelledBy="about-values-heading"
        variant={SectionBackground.INK}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-3/5">
            <Heading level={2} id="about-values-heading">
              {t("values.h")}
            </Heading>

            <div className="flex flex-col gap-4">
              {(["honest", "precision", "fast"] as const).map((key) => (
                <div
                  key={key}
                  className="flex flex-col gap-2 rounded-md border border-border bg-charcoal p-5"
                >
                  <h3 className="font-display text-lg uppercase tracking-wider text-heading">
                    {t(`values.${key}.t`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-body">{t(`values.${key}.b`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Balancing machine photo — KIAOULIAS screen visible */}
          <div className="overflow-hidden rounded-lg lg:w-2/5">
            <img
              src={assetPath("/photos/balancing-960.webp")}
              srcSet={assetSrcSet([
                ["/photos/balancing-480.webp", "480w"],
                ["/photos/balancing-960.webp", "960w"],
              ])}
              sizes="(min-width:1024px) 40vw, 100vw"
              loading="lazy"
              alt={tGallery("about.balancing")}
              className="aspect-[3/4] w-full object-cover lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA section */}
      <SectionWrapper
        id="about-cta"
        labelledBy="about-cta-heading"
        variant={SectionBackground.CHARCOAL}
      >
        <div className="flex flex-col items-start gap-4">
          <Heading level={2} id="about-cta-heading">
            {t("cta.h")}
          </Heading>
          <p className="text-base text-body">{t("cta.p")}</p>
          <Link
            to={AppRoute.CONTACT}
            className={cn(
              "rounded-md bg-accent px-6 py-3",
              "font-display text-sm uppercase tracking-wider text-on-accent",
              "transition-colors duration-200 hover:bg-accent-hover",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            )}
          >
            {t("cta.btn")}
          </Link>
        </div>
      </SectionWrapper>

      <BookingForm />
    </>
  );
}

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});
