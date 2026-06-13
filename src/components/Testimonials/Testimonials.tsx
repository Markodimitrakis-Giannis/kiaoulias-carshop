import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { TranslationNamespace } from "@/i18n/types";
import { useScrollSlider } from "@/hooks/useScrollSlider";

import type { ReviewEntry, TestimonialsProps } from "./Testimonials.types";

const REVIEW_INDICES = [0, 1, 2, 3, 4, 5, 6, 7] as const;

interface ReviewCardProps {
  review: ReviewEntry;
  source: string;
}

const ReviewCard = ({ review, source }: ReviewCardProps) => (
  <article className="flex h-full flex-col gap-4 rounded-lg border border-border-strong bg-surface-raised p-6 shadow-lg">
    <Quote size={28} className="fill-accent text-accent" aria-hidden="true" />

    <div className="flex gap-1" role="img" aria-label={`${review.stars} out of 5 stars`}>
      {Array.from({ length: review.stars }, (_, i) => (
        <Star key={i} size={18} className="fill-accent text-accent" aria-hidden="true" />
      ))}
    </div>

    <blockquote className="flex flex-1 flex-col gap-4">
      <p className="text-lg leading-relaxed text-heading">{review.quote}</p>
      <footer className="mt-auto flex items-center gap-2 text-sm text-muted">
        <Star size={14} className="fill-accent text-accent" aria-hidden="true" />
        {source}
      </footer>
    </blockquote>
  </article>
);

export const Testimonials = ({ className }: TestimonialsProps) => {
  const { t } = useTranslation(TranslationNamespace.TESTIMONIALS);
  const { trackRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useScrollSlider<HTMLDivElement>();

  const reviews = REVIEW_INDICES.map(
    (i): ReviewEntry => ({ quote: t(`reviews.${i}.quote`), stars: 5 }),
  );

  const arrowClass =
    "grid h-11 w-11 place-items-center rounded-md border border-border-strong text-body transition-colors duration-200 hover:border-accent hover:text-accent-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <SectionWrapper
      id="reviews"
      labelledBy="reviews-heading"
      variant={SectionBackground.INK}
      className={className}
    >
      <div className="flex flex-col gap-2">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <Heading level={2} id="reviews-heading">
            {t("h")}
          </Heading>
          <div className="flex items-center gap-4">
            <p className="font-mono text-sm font-bold text-accent-text">{t("aggregate")}</p>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={scrollPrev} disabled={!canScrollPrev} aria-label={t("prev")} className={arrowClass}>
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button type="button" onClick={scrollNext} disabled={!canScrollNext} aria-label={t("next")} className={arrowClass}>
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Labelled focusable region wraps the list so keyboard users can scroll it. */}
      <div
        ref={trackRef}
        role="region"
        aria-label={t("regionLabel")}
        tabIndex={0}
        className="no-scrollbar snap-x snap-mandatory overflow-x-auto pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <ul className="flex gap-4">
          {reviews.map((review, i) => (
            <li key={i} className="w-4/5 shrink-0 snap-start sm:w-1/2 lg:w-1/3">
              <ReviewCard review={review} source={t("source")} />
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};
