import { createFileRoute } from "@tanstack/react-router";

import { BookingForm } from "@/components/BookingForm";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TreadDivider } from "@/components/TreadDivider";
import { TrustBand } from "@/components/TrustBand";
import { TrustCards } from "@/components/TrustCards";
import { WhyUs } from "@/components/WhyUs";
import { COMPANY_NAME, FOUNDING_YEAR, GOOGLE_RATING, PHONE_NUMBER, ADDRESS } from "@/constants/content";
import { absoluteAssetUrl, siteUrl } from "@/lib/asset";

const HOME_TITLE = `${COMPANY_NAME} — Tires & Alignment Heraklion`;
const HOME_DESCRIPTION =
  "Family-run tire shop in central Heraklion. Tires, wheel alignment and balancing — same-day fitting, honest pricing.";

// JSON-LD: AggregateRating block extending the LocalBusiness schema in Footer
const AGGREGATE_RATING_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: COMPANY_NAME,
  foundingDate: String(FOUNDING_YEAR),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Efodou 10, Heraklion 713 03",
    addressLocality: "Heraklion",
    addressCountry: "GR",
  },
  telephone: PHONE_NUMBER,
  url: "https://www.kiaoulias.gr",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING,
    bestRating: "5",
    worstRating: "1",
    ratingCount: "67",
  },
};

// JSON-LD: FAQPage schema from the FAQ section content
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Walk-ins are welcome, but booking a slot means we have your tires ready and you're straight in.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a tire fit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A set of four with balancing is usually about 30–45 minutes. Alignment adds around 30.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Kiaoulias Tires located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${ADDRESS}. Open Mon–Fri 08:00–17:00 and Sat 08:00–15:00.`,
      },
    },
  ],
};

function HomePage() {
  return (
    <>
      <Hero />
      <TreadDivider />
      <TrustCards />
      <Services />
      <HowItWorks />
      <TrustBand />
      <WhyUs />
      <Gallery />
      <Faq />
      <TreadDivider />
      <Testimonials />
      <BookingForm />

      {/* Structured data — AggregateRating + Review (complements AutoRepair in Footer) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(AGGREGATE_RATING_JSONLD) }}
      />

      {/* Structured data — FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
    </>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,

  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl() },
        { property: "og:image", content: absoluteAssetUrl("/photos/hero-1280.webp") },
      ],
    links: [{ rel: "canonical", href: siteUrl() }],
  }),
});
