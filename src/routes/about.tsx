import { createFileRoute } from "@tanstack/react-router";

import i18n from "@/i18n";
import { absoluteAssetUrl, siteUrl } from "@/lib/asset";

export const Route = createFileRoute("/about")({

  head: () => {
    const t = (key: string) => i18n.t(key, { ns: "about" });
    return {
      meta: [
        { title: t("meta.title") || "About Us | Kiaoulias Tyres" },
        {
          name: "description",
          content:
            t("meta.description") ||
            "Family-run tyre and alignment shop in central Heraklion since 2005. Honest pricing, precision alignment, same-day fitting.",
        },
        { property: "og:title", content: t("meta.title") || "About Us | Kiaoulias Tyres" },
        {
          property: "og:description",
          content:
            t("meta.description") ||
            "Family-run tyre and alignment shop in central Heraklion since 2005. Honest pricing, precision alignment, same-day fitting.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl("/about") },
        { property: "og:image", content: absoluteAssetUrl("/photos/workshop-1280.webp") },
      ],
      links: [{ rel: "canonical", href: siteUrl("/about") }],
    };
  },
});
