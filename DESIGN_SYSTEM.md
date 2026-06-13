# Kiaoulias Carshop — Design System

> Dark · restrained-modern · tyre & alignment shop. Confident and clean, not flashy.
> Tokens live in [`src/styles/global.css`](src/styles/global.css) as Tailwind v4 `@theme` vars.

**One-line identity:** a well-lit workshop bay at night — charcoal steel, one orange hazard pop, navy for the trust talk, mono digits for the tyre specs.

---

## 1. Principles

- **Restraint over decoration.** Spend boldness in one place: the orange CTA. Everything else stays quiet (charcoal, hairline borders, generous space).
- **On-subject, not generic.** Tyre vernacular (sizes `205/55 R16`, PSI, tread depth, alignment angles) appears in real UI, set in mono — that's the signature, used sparingly.
- **Trust is the job.** People pick a tyre shop on confidence: certifications, brands stocked, guarantees, before/after. Navy "trust bands" carry that.
- **Mobile-first, accessible floor.** 16px min body, visible focus, 44px touch targets, reduced-motion respected, AA contrast.

---

## 2. Color

### Surfaces (dark, layered)
| Token | Hex | Use |
|---|---|---|
| `ink` | `#0F0F0F` | Page base / deepest |
| `charcoal` | `#141414` | Default section background |
| `surface` | `#1E1E1E` | Cards, panels |
| `surface-raised` | `#262626` | Hover/raised card, input fields |
| `border` | `#333333` | Hairline dividers, card borders |
| `border-strong` | `#4A4A4A` | Emphasized borders |

### Trust blue (proof / credential bands)
| Token | Hex | Use |
|---|---|---|
| `navy` | `#0F2A44` | Trust-section background |
| `navy-raised` | `#16395C` | Cards inside navy bands |

### Text
| Token | Hex | Use | On charcoal |
|---|---|---|---|
| `heading` | `#FFFFFF` | H1–H2 | 18.1:1 ✅ |
| `body` | `#E5E5E5` | Paragraphs | 14.6:1 ✅ |
| `muted` | `#A1A1A1` | Labels, secondary | 6.4:1 ✅ |
| `faint` | `#6B6B6B` | Captions, placeholder, disabled | 3.1:1 — large/non-text only |

### Accent — electric orange (logo-matched)
| Token | Hex | Use |
|---|---|---|
| `accent` | `#F26419` | Primary CTA, active state, key highlights |
| `accent-hover` | `#FF7A2E` | Hover |
| `accent-pressed` | `#D9540F` | Pressed/active |
| `accent-subtle` | `#2A1A0F` | Tinted background behind accent content |
| `on-accent` | `#0F0F0F` | **Black** text/icon on orange (logo-matched, 5.9:1 ✅) |

> Orange is a *spice*, not a base. Target ≤10% of any screen: CTAs, active nav, one icon set, the focus ring. Never orange body text on charcoal (fails AA at small sizes — only large/bold).

### Semantic
| Token | Hex | Use |
|---|---|---|
| `success` | `#3FB950` | Booking confirmed, in-stock |
| `warning` | `#F5B301` | Low stock, attention |
| `danger` | `#E5484D` | Form errors, out-of-stock |
| `info` | `#4493F8` | Neutral notices |

---

## 3. Typography

| Role | Font | Treatment |
|---|---|---|
| Display / headings | **Sora** | UPPERCASE, `tracking` ~0.01em (runs wide), weight 700, `leading-tight` |
| Body / UI | **Manrope** | sentence case, weight 400–500, `leading-normal` (1.6) |
| Specs / data | **JetBrains Mono** | tyre sizes, PSI, prices, phone — weight 500 |

Load via Google Fonts (per CLAUDE.md — no system fallbacks, no Inter). Never Garamond/serif (that was Martin's generic skin). Sora is geometric/modern — keep heading tracking tight since the face is already wide.

### Scale (rem @ 16px, ~1.25 major third)
| Token | Size | Role |
|---|---|---|
| `text-4xl` | 60px | H1 hero (desktop) |
| `text-3xl` | 44px | H2 section |
| `text-2xl` | 32px | H3 |
| `text-xl` | 24px | H4 / card title |
| `text-lg` | 20px | Lead paragraph |
| `text-base` | 16px | Body (mobile min) |
| `text-sm` | 14px | Meta, labels |
| `text-xs` | 12px | Captions, badges |

Mobile: drop hero to `text-2xl`/`text-3xl` (`text-3xl md:text-4xl`). Line length 65–75ch.

**Eyebrow pattern** (above section H2): `font-mono text-sm uppercase tracking-wider text-accent` — e.g. `// TYRE FITTING`.

---

## 4. Spacing, Radius, Elevation

- **Spacing:** Tailwind default scale only (`gap-2 … gap-12`). No arbitrary values, no margin — parents own spacing via `gap`/`padding` (CLAUDE.md).
- **Section rhythm:** `py-20` (`--section-pad-y` = 5rem) between major sections, `py-12` on mobile.
- **Container:** `max-w-7xl` (1280px), `px-4 md:px-6 lg:px-8`.
- **Radius:** `sm 4px` inputs/badges · `md 8px` buttons/cards (default) · `lg 12px` panels/media · `pill` chips/filters only. Restrained — not pill-everything.
- **Elevation:** dark UI leans on **borders**, not heavy shadows. `shadow-sm/md` for raised cards; `shadow-accent` (orange glow) reserved for primary CTA hover.

---

## 5. Components

### Button
| Variant | Style |
|---|---|
| **Primary** | `bg-accent text-on-accent` · `rounded-md` · `px-6 py-3` · uppercase `font-display tracking-wider` · hover `bg-accent-hover shadow-accent` · pressed `bg-accent-pressed` |
| **Secondary** | `bg-transparent text-heading border border-border-strong` · hover `border-accent text-accent` |
| **Ghost** | `text-body` · hover `bg-surface-raised` |
| Sizes | `sm` py-2 px-4 · `md` py-3 px-6 · `lg` py-4 px-8 |
| States | `disabled` opacity-50 cursor-not-allowed · `isLoading` spinner + disabled · focus-visible ring (global) |

One primary CTA per view: **"Book alignment" / "Get tyre quote"**.

### Card
`bg-surface border border-border rounded-md p-6` · hover `border-border-strong -translate-y-0.5 transition` (transform only, no layout shift). Service cards: icon (Lucide, `text-accent`) → title (`font-display text-xl`) → body (`text-muted`) → optional price (`font-mono`).

### Spec chip (signature)
Tyre size / data pill: `font-mono text-sm bg-surface-raised border border-border rounded-pill px-3 py-1 text-body`. e.g. `205/55 R16` · `32 PSI` · `1.6mm min`.

### Badge
`text-xs uppercase tracking-wider rounded-sm px-2 py-0.5`. In-stock → `success`, low → `warning`, out → `danger`.

### Input / form field
`bg-surface-raised border border-border rounded-sm px-4 py-3 text-body` · placeholder `text-faint` · focus `border-accent` · error `border-danger` + `role="alert"` message in `text-danger text-sm`. Always a visible `<label>`. (TanStack Form, validation via i18n — CLAUDE.md.)

### Navigation
Sticky `bg-charcoal/90 backdrop-blur border-b border-border`. Logo left · links `font-display uppercase text-sm tracking-wider` · active link `text-accent aria-current="page"` · phone + primary CTA right. Mobile: hamburger (`aria-expanded`) → full-screen `bg-ink` panel, focus-trapped, Esc closes.

### Section wrapper
`<section aria-labelledby>` · `py-20` · inner `max-w-7xl mx-auto px-4 md:px-6`. Alternate `bg-charcoal` / `bg-ink` to separate bands; `bg-navy` for trust bands.

---

## 6. Page Layout (IA borrowed from Martin's funnel, reskinned)

```
┌─────────────────────────────────────────────┐
│ HEADER  logo ········ nav ······ ☏  [BOOK]   │  sticky, blur
├─────────────────────────────────────────────┤
│ HERO   eyebrow // TYRES & ALIGNMENT          │  charcoal, bg photo
│        H1 big condensed claim                │  + dark gradient overlay
│        sub (DM Sans, muted)                  │
│        [GET TYRE QUOTE]  (☏ secondary)       │
├─────────────────────────────────────────────┤
│ TRUST CARDS  3-col                           │  ink
│  ◦ Fair pricing  ◦ Same-day fit  ◦ Guarantee │  Lucide icon + title + body
├─────────────────────────────────────────────┤
│ SERVICES  filterable cards                   │  charcoal
│  [All][Tyres][Alignment][Balancing][Brakes]  │  pill filters (accent active)
│  card grid → ServiceCard                      │
├─────────────────────────────────────────────┤
│ TRUST BAND  brands stocked / certs           │  NAVY band
│  brand logos row · "ASE/cert" · 5★ snippet   │
├─────────────────────────────────────────────┤
│ WHY US  feature grid (specifics, numbers)    │  ink
├─────────────────────────────────────────────┤
│ FAQ  location · hours · do-i-need-appt        │  charcoal, accordion
├─────────────────────────────────────────────┤
│ BOOK CTA  form (name/phone/car/service)      │  navy, high-contrast
├─────────────────────────────────────────────┤
│ FOOTER  logo · contact · map · social · hrs  │  ink
└─────────────────────────────────────────────┘
```

Routes (TanStack): `/` `/services` `/about` `/contact`. Each gets translated `head` (title + description). One `<h1>` per page, sequential headings, landmark elements.

---

## 7. Responsive

`sm 640 · md 768 · lg 1024 · xl 1280`. Patterns: `flex-col md:flex-row`, `w-full md:w-1/2 lg:w-1/3`, `text-3xl md:text-4xl`. Test at 320px, zero horizontal scroll, 44px touch targets.

---

## 8. Motion (subtle)

- CSS-first: `transition-colors`/`transform` `duration-200 ease-out` on hover/focus.
- Framer Motion only for section reveals: `opacity 0→1, y 16→0`, `viewport once`, ≤300ms.
- Respect `prefers-reduced-motion` (handled globally in `global.css`). No animation gates content.

---

## 9. Imagery

- Real workshop/tyre photos, desaturated slightly to sit with charcoal. WebP + `srcset`, `loading="lazy"` below fold, `aspect-*` to avoid CLS.
- Hero gets a left-to-bottom dark gradient overlay for text contrast.
- Icons: **Lucide** (consistent 24×24), `text-accent` for feature icons, `text-muted` for UI. No emoji.

---

## 10. Quick rules (from CLAUDE.md)

`any` banned · strict TS · no inline styles · no arbitrary Tailwind values · no margin (use gap/padding) · flex-first · ≤600 lines/file · semantic HTML · zero axe critical/serious · every string via i18n (en + el) · conventional commits.
