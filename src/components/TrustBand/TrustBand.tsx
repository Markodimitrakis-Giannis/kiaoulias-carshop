import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { BRANDS, YEARS_IN_BUSINESS } from "@/constants/content";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { TranslationNamespace } from "@/i18n/types";

import type { TrustBandProps } from "./TrustBand.types";
import "./TrustBand.styles.css";

interface Stat {
  /** Numeric value to animate */
  numericValue: number;
  /** Number of decimal places to display */
  decimals: number;
  /** Text before the number (e.g. "~") */
  prefix: string;
  /** Text after the number (e.g. "+", " ★", " min") */
  suffix: string;
  captionKey: string;
}

const STATS: Stat[] = [
  {
    numericValue: YEARS_IN_BUSINESS,
    decimals: 0,
    prefix: "",
    suffix: "+",
    captionKey: "band.1",
  },
  {
    numericValue: 49,
    decimals: 1,
    prefix: "",
    suffix: " ★",
    captionKey: "band.2",
  },
  {
    numericValue: 45,
    decimals: 0,
    prefix: "~",
    suffix: " min",
    captionKey: "band.3",
  },
] as const;

interface StatCountProps {
  stat: Stat;
  isVisible: boolean;
}

const StatCount = ({ stat, isVisible }: StatCountProps) => {
  const prefersReduced = useReducedMotion();
  const raw = useCountUp({
    target: stat.numericValue,
    isVisible,
    prefersReduced,
    durationMs: 1200,
  });

  const formatted =
    stat.decimals > 0
      ? (raw / Math.pow(10, stat.decimals)).toFixed(stat.decimals)
      : String(raw);

  return (
    <span className="font-mono text-4xl font-bold text-white" aria-live="off">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
};

// Duplicated brand list for seamless marquee loop.
// The outer <div> is aria-hidden; a static accessible list exists for AT below.
const BrandMarquee = () => {
  // Duplicate brand list for seamless CSS infinite scroll
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <div className="brand-marquee" aria-hidden="true">
      <div className="brand-track">
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="font-display text-lg uppercase tracking-wider text-white/60 transition-colors duration-200 hover:text-accent"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export const TrustBand = ({ className }: TrustBandProps) => {
  const { t } = useTranslation(TranslationNamespace.SERVICES);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (el == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper
      id="brands"
      labelledBy="brands-heading"
      variant={SectionBackground.NAVY}
      className={className}
    >
      <Heading level={2} id="brands-heading" className="text-white">
        {t("band.h")}
      </Heading>

      {/* Accessible static brand list for screen readers */}
      <ul
        className="sr-only"
        aria-label={t("band.h")}
      >
        {BRANDS.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>

      {/* Animated marquee — aria-hidden, decorative motion of already-listed brands */}
      {/* TODO: swap brand text with SVG logos when available */}
      <BrandMarquee />

      {/* Stats row — count-up animation on scroll into view */}
      <div ref={sectionRef} className="flex flex-col gap-8 sm:flex-row sm:gap-12">
        {STATS.map((stat) => (
          <div key={stat.captionKey} className="flex flex-col gap-1">
            <StatCount stat={stat} isVisible={isVisible} />
            <span className="text-sm text-white/70">{t(stat.captionKey)}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
