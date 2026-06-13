const PUBLIC_ORIGIN = "https://markodimitrakis-giannis.github.io";

const basePath = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const assetPath = (path: string): string =>
  `${basePath}${path.replace(/^\/+/, "")}`;

export const assetSrcSet = (entries: Array<[string, string]>): string =>
  entries.map(([path, descriptor]) => `${assetPath(path)} ${descriptor}`).join(", ");

export const siteUrl = (path = ""): string =>
  new URL(`${basePath}${path.replace(/^\/+/, "")}`, PUBLIC_ORIGIN).toString();

export const absoluteAssetUrl = (path: string): string =>
  new URL(assetPath(path), PUBLIC_ORIGIN).toString();
