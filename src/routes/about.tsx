import { createFileRoute } from "@tanstack/react-router";

import i18n from "@/i18n";
import { absoluteAssetUrl, siteUrl } from "@/lib/asset";

export const Route = createFileRoute("/about")({

  head: () => {
    const t = (key: string) => i18n.t(key, { ns: "about" });
    return {
      meta: [
        { title: t("meta.title") || "About Us | Kiaoulias Tires" },
        {
          name: "description",
          content:
            t("meta.description") ||
            "Family-run tire and alignment shop in central Heraklion since 1970. Honest pricing, precision alignment, same-day fitting.",
        },
        { property: "og:title", content: t("meta.title") || "About Us | Kiaoulias Tires" },
        {
          property: "og:description",
          content:
            t("meta.description") ||
            "Family-run tire and alignment shop in central Heraklion since 1970. Honest pricing, precision alignment, same-day fitting.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl("/about") },
        { property: "og:image", content: absoluteAssetUrl("/og-image.jpg") },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: siteUrl("/about") }],
    };
  },
});
