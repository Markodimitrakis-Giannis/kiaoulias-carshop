import { createFileRoute } from "@tanstack/react-router";

import i18n from "@/i18n";
import { absoluteAssetUrl, siteUrl } from "@/lib/asset";

export const Route = createFileRoute("/privacy")({

  head: () => {
    const t = (key: string) => i18n.t(key, { ns: "privacy" });
    return {
      meta: [
        { title: t("meta.title") || "Privacy Policy | Kiaoulias Tires" },
        {
          name: "description",
          content:
            t("meta.description") ||
            "Privacy policy for Kiaoulias Tires. We only collect what you give us in the booking form and never sell your data.",
        },
        { property: "og:title", content: t("meta.title") || "Privacy Policy | Kiaoulias Tires" },
        {
          property: "og:description",
          content:
            t("meta.description") ||
            "Privacy policy for Kiaoulias Tires. We only collect what you give us in the booking form and never sell your data.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl("/privacy") },
        { property: "og:image", content: absoluteAssetUrl("/og-image.jpg") },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: siteUrl("/privacy") }],
    };
  },
});
