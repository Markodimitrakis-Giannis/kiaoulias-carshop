# Build Status & Remaining Work

> Kiaoulias Tyres — React/TS/Tailwind v4/TanStack tyre-shop site. Updated 2026-06-13.
> Design refs: [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) · approved static preview in [preview/index.html](preview/index.html).
> Run: `npm run dev` (http://localhost:5173) · `npm run build` · `npm run lint` · `npm run size`.

## DONE

- **Phases 1–6 complete:** foundations, primitives, Header/Footer, homepage sections, all routes (`/ /services /about /contact /privacy`), SEO heads/OG/JSON-LD. Bilingual EN/EL. Build + lint + size budget green; a11y AA pass (incl. light-mode contrast fixes); responsive + reduced-motion.
- **Modern navbar:** floating glass "island" (rounded, blurred, detached); mobile dropdown floats to match.
- **Brand name:** renamed everywhere to **Kiaoulias Tyres** (EN) — `COMPANY_NAME` + all translation meta/copyright. (Greek brand visually = ΚΙΑΟΥΛΙΑΣ via logo.)
- **Owner photos processed** → `public/photos/` (1.9 MB total, optimized WebP + responsive widths):
  - License plates (HZI-3630) **mosaic-blurred** on the 3 alignment shots — verified illegible. Unblurred originals were deleted (not shipped).
  - Set: `hero-{640,1280,1920}`, `torque-{640,1280}`, `tyre-fitting-{480,960}`, `balancing-{480,960}`, `workshop-{640,1280,1600}`, `alignment-{640,1280}`, `align-portrait-{480,960}`, `align-low-{640,1280}` (all `.webp`).
  - **Logo:** `logo-800.webp` — white background keyed to transparent. Black elements (ΕΥΘΥΓΡΑΜΜΙΣΗ, outlines) vanish on dark, so it's shown on a small **white rounded badge** in Header + Footer (already wired).
- Photo→slot mapping (decided, see below) is ready to wire.

## NEXT SESSION — pick up here

### 1. Integrate photos into components (mapping decided)
| Photo base | Component / slot |
|---|---|
| `hero-*` (impact wrench, orange gloves) | **Hero** background — replace the `/hero.png` ref in `Hero.styles.css`; keep the theme-aware gradient overlay (dark/light already handled) |
| `tyre-fitting-*` | Services → Tyre fitting card |
| `alignment-*` (Puma front, blurred) | Services → Wheel alignment card |
| `balancing-*` (KIAOULIAS screen) | Services → Balancing card + About human shot |
| `torque-*` | Services → puncture/repair card or gallery |
| `workshop-*` (ΕΥΘΥΓΡΑΜΜΙΣΗ banner) | About establishing shot + Contact "find us" |
| `align-portrait-*`, `align-low-*` | **Gallery** (new section) |
- Service cards currently show a Lucide icon; decide icon vs photo (photo = richer). `ServiceCard` is in `src/components/Services/`.
- Build a lightweight **Gallery** component (responsive grid, native `loading="lazy"`, `aspect-*`, no heavy lightbox lib). Place on home and/or `/about` (ASK user which).
- Use `<picture>`/`srcset` with the responsive widths; **alt text via i18n** (EN+EL) — add keys per image.

### 2. UI skills assessment + "modern & rich" pass (user: "this is our best shot")
- Run `ui-ux-pro-max` (`python3 .claude/skills/ui-ux-pro-max/scripts/search.py "tyre shop landing modern rich" --design-system`) and apply `frontend-design` judgement.
- Candidate enhancements (keep accessible + under bundle budget): photo-backed hero with the real shot, image service cards, the gallery, refined scroll-reveal/motion, a stats/marquee band, sticky mobile "Book" CTA. Spend boldness in ONE signature place, keep the rest quiet.

### 3. Quality gate re-check
- `npm run build` + `npm run lint` + `npm run size` (initial JS budget 150 kB — adding images is fine, they're not JS, but watch any new components) + axe in dev console + light/dark contrast on any new photo overlays (dark text must not land on dark images — reuse the hero gradient pattern).

## Still needs real data (owner)
- Real phone / address / hours / founding year — placeholders in `src/constants/content.ts` ("210 000 0000", "123 Mechanic St", 2005) and prices in `services.json`.
- About page real story (placeholder, marked TODO in `about.lazy.tsx`).
- `og-image.jpg` (1200×630) for social shares — could derive from the hero photo.
- Privacy policy legal review (GDPR).
- Google Maps embed on `/contact` (needs a `VITE_`-prefixed key via `lib/env.ts`).
- Deployment host (static SPA → `dist/`).
- A **vector logo** (SVG) would beat the keyed PNG/WebP for crispness; and ideally a **white/inverted logo** variant for dark surfaces so the white badge isn't needed.

## Notes
- Build delegated to sonnet subagents; Opus did image processing + quality gate.
- `AppRoute` is a `const` object (not enum) — required for TanStack typed `Link`s.
- Social brand icons are inline Simple Icons SVGs (lucide-react v1.18 dropped them).
- Image processing used system Python (`/usr/bin/python3`, Pillow 11.3) — homebrew py3.14 pip is broken (expat). cwebp also available.
