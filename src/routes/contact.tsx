import { createFileRoute } from "@tanstack/react-router";

import i18n from "@/i18n";
import { absoluteAssetUrl, siteUrl } from "@/lib/asset";

export const Route = createFileRoute("/contact")({

  head: () => {
    const t = (key: string) => i18n.t(key, { ns: "contact" });
    return {
      meta: [
        { title: t("meta.title") || "Contact | Kiaoulias Tires" },
        {
          name: "description",
          content:
            t("meta.description") ||
            "Book a tire or alignment appointment at Kiaoulias Tires in central Heraklion. Call us or use the online booking form.",
        },
        { property: "og:title", content: t("meta.title") || "Contact | Kiaoulias Tires" },
        {
          property: "og:description",
          content:
            t("meta.description") ||
            "Book a tire or alignment appointment at Kiaoulias Tires in central Heraklion. Call us or use the online booking form.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl("/contact") },
        { property: "og:image", content: absoluteAssetUrl("/og-image.jpg") },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: siteUrl("/contact") }],
    };
  },
});
