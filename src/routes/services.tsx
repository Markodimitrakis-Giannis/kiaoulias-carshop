import { createFileRoute } from "@tanstack/react-router";

import i18n from "@/i18n";
import { absoluteAssetUrl, siteUrl } from "@/lib/asset";

export const Route = createFileRoute("/services")({
  head: () => {
    const t = (key: string) => i18n.t(key, { ns: "services" });
    return {
      meta: [
        { title: t("meta.title") || "Services | Kiaoulias Tires" },
        {
          name: "description",
          content:
            t("meta.description") ||
            "Tire sales & fitting, wheel alignment, balancing, TPMS and puncture repair in central Heraklion. Same-day service, honest pricing.",
        },
        { property: "og:title", content: t("meta.title") || "Services | Kiaoulias Tires" },
        {
          property: "og:description",
          content:
            t("meta.description") ||
            "Tire sales & fitting, wheel alignment, balancing, TPMS and puncture repair in central Heraklion. Same-day service, honest pricing.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl("/services") },
        { property: "og:image", content: absoluteAssetUrl("/og-image.jpg") },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: siteUrl("/services") }],
    };
  },
});
