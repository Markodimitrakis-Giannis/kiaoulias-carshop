# CLAUDE.md — Car Mechanic Shop Portfolio

> A portfolio website for a car mechanic shop. Trustworthy, professional, and grounded — communicating expertise and reliability to customers looking for automotive repair services.

**Stack:** React · TypeScript · Tailwind CSS · TanStack Router · TanStack Form

---

## Table of Contents

1. [Design Direction](#design-direction)
2. [Project Structure](#project-structure)
3. [Components](#components)
4. [Styling](#styling)
5. [Responsive Design](#responsive-design)
6. [TypeScript](#typescript)
7. [Constants & Enums](#constants--enums)
8. [Semantic HTML, Accessibility & SEO](#semantic-html-accessibility--seo)
9. [Accessibility Testing — axe](#accessibility-testing--axe)
10. [Internationalization — i18n](#internationalization--i18n)
11. [Routing — TanStack Router](#routing--tanstack-router)
12. [Forms — TanStack Form](#forms--tanstack-form)
13. [Error Handling](#error-handling)
14. [Animation](#animation)
15. [Images & Media](#images--media)
16. [Performance & Bundle Size](#performance--bundle-size)
17. [Linting & Formatting](#linting--formatting)
18. [Git Conventions](#git-conventions)
19. [Content Tone](#content-tone)
20. [Hard Rules — Quick Reference](#hard-rules--quick-reference)

---

## Design Direction

### Aesthetic

Industrial-refined. Think clean workshop — not sterile corporate. The design should evoke the confidence of a well-organized garage: structured, no-nonsense, with moments of warmth. Dark tones grounded by metallic accents and pops of a bold signature color (burnt orange, safety yellow, or oil-slick teal — pick one and commit).

### Typography

Use two fonts imported via Google Fonts:

- **Display/Headings:** A bold, mechanical-feeling font. Consider condensed or slab-serif families (e.g., Barlow Condensed, Bebas Neue, or Archivo Black). All-caps for section headers.
- **Body:** A clean, highly readable sans-serif that contrasts the display font (e.g., Source Sans 3, DM Sans, or Outfit).

Never fall back to Inter, Arial, or system defaults.

### Color Palette

Define all colors as Tailwind theme extensions:

- **Background:** Near-black or deep charcoal (`#1a1a1a`, `#0f0f0f`)
- **Surface:** Slightly lighter grays for cards/sections (`#2a2a2a`)
- **Primary accent:** One bold color used sparingly — CTA buttons, highlights, active states
- **Text:** Off-white for body (`#e5e5e5`), bright white for headings
- **Muted:** Medium gray for secondary text and borders

Avoid: pastel palettes, gradients-on-white, anything that reads as "tech startup."

---

## Project Structure

All components live in a single flat `components/` folder. Each component is a directory containing the component file, its types, its logic hook (if needed), its styles, and any sub-components. No nested category folders.

```
src/
├── components/
│   ├── Button/
│   │   ├── index.ts               # Public export (barrel file)
│   │   ├── Button.tsx             # Presentation component
│   │   ├── Button.types.ts        # Props interface & local types
│   │   └── Button.styles.css      # Component-scoped styles (if needed)
│   ├── Card/
│   │   ├── index.ts
│   │   ├── Card.tsx
│   │   └── Card.types.ts
│   ├── Badge/
│   ├── Heading/
│   ├── Icon/
│   ├── SectionWrapper/
│   ├── Header/
│   │   ├── index.ts
│   │   ├── Header.tsx             # Presentation
│   │   ├── useHeader.ts           # Logic hook
│   │   ├── Header.types.ts
│   │   └── Header.styles.css
│   ├── Footer/
│   ├── PageContainer/
│   ├── Navigation/
│   ├── Hero/
│   │   ├── index.ts
│   │   ├── Hero.tsx
│   │   ├── useHero.ts
│   │   ├── Hero.types.ts
│   │   ├── Hero.styles.css
│   │   └── HeroBackground.tsx     # Sub-component
│   ├── Services/
│   │   ├── index.ts
│   │   ├── Services.tsx
│   │   ├── useServices.ts
│   │   ├── Services.types.ts
│   │   ├── Services.styles.css
│   │   └── ServiceCard.tsx
│   ├── About/
│   ├── Testimonials/
│   ├── Gallery/
│   ├── Contact/
│   ├── BookingForm/
│   │   ├── index.ts
│   │   ├── BookingForm.tsx
│   │   ├── useBookingForm.ts
│   │   ├── BookingForm.types.ts
│   │   ├── BookingForm.styles.css
│   │   └── BookingFormField.tsx
│   └── ServiceFilter/
│
├── routes/                        # File-based routes (TanStack Router)
│   ├── __root.tsx
│   ├── index.tsx                  # → /
│   ├── services.tsx               # → /services
│   ├── services.lazy.tsx
│   ├── about.tsx                  # → /about
│   ├── contact.tsx                # → /contact
│   └── contact.lazy.tsx
│
├── hooks/                         # Global custom hooks
│   ├── useMediaQuery.ts
│   ├── useScrollPosition.ts
│   ├── useReducedMotion.ts
│   └── useClickOutside.ts
│
├── constants/
│   ├── routes.ts                  # Route path enum
│   ├── services.ts                # Service names, IDs, categories
│   ├── ui.ts                      # Breakpoints, animation durations
│   └── content.ts                 # Static text, labels
│
├── types/                         # Shared/global types only
│   ├── common.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── contact.ts
│
├── translations/                  # All translation files
│   ├── en/
│   │   ├── common.json
│   │   ├── hero.json
│   │   ├── services.json
│   │   ├── about.json
│   │   ├── contact.json
│   │   └── validation.json
│   ├── el/                        # Greek (mirrors en/ exactly)
│   │   └── ...
│   └── index.ts
│
├── i18n/                          # Config only — no content here
│   ├── index.ts                   # i18next init, plugins
│   └── types.ts                   # TranslationNamespace enum
│
├── lib/
│   ├── cn.ts                      # clsx/twMerge wrapper
│   ├── env.ts                     # Typed env variable access
│   └── formatters.ts              # Phone, price, date formatters
│
├── assets/
│   ├── images/
│   └── icons/
│
├── data/
│   ├── services.ts
│   └── testimonials.ts
│
└── styles/
    └── global.css                 # Tailwind directives, CSS variables
```

Root-level: `.env.example` (committed, values blank), `.env.local` (gitignored).

### Barrel Exports

Every component folder has an `index.ts` re-exporting its public API:

```ts
// components/Button/index.ts
export { Button } from "./Button";
export type { ButtonProps } from "./Button.types";

// Usage
import { Button } from "@/components/Button";
```

### Where Types Live

- **Component-specific types** → `ComponentName.types.ts` inside the component folder.
- **Shared types** (used by 2+ unrelated components) → `src/types/`, organized by domain.
- If a type starts local and later gets imported elsewhere, promote it to `src/types/`.

### Environment Variables

All env vars must be prefixed with `VITE_`. Define a typed helper in `lib/env.ts` that validates at startup:

```ts
export const ENV = {
  GOOGLE_MAPS_KEY: import.meta.env.VITE_GOOGLE_MAPS_KEY as string,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL as string,
} as const;

Object.entries(ENV).forEach(([key, value]) => {
  if (!value) throw new Error(`Missing environment variable: VITE_${key}`);
});
```

---

## Components

### Small, Focused, Reusable

- **Hard limit: 600 lines per file.** Aim for 50–150 lines.
- Each component does one thing. If you need "and" to describe it, split it.
- Build bottom-up: primitives → compositions → sections → pages.

### Presentation vs. Logic — Strict Separation

Components with non-trivial logic split into two files:

**`ComponentName.tsx`** — Presentation. Receives props, renders JSX. Zero business logic. Given the same props, always the same output.

**`useComponentName.ts`** — Logic hook. State, effects, data transforms, handlers. Returns a typed object the presentation component consumes.

```tsx
// useServices.ts
import { useState, useMemo } from "react";
import { ServiceCategory } from "@/types/services";
import { SERVICES_DATA } from "@/data/services";

interface UseServicesReturn {
  activeCategory: ServiceCategory;
  filteredServices: typeof SERVICES_DATA;
  handleCategoryChange: (category: ServiceCategory) => void;
}

export const useServices = (): UseServicesReturn => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(ServiceCategory.ALL);

  const filteredServices = useMemo(
    () =>
      activeCategory === ServiceCategory.ALL
        ? SERVICES_DATA
        : SERVICES_DATA.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return {
    activeCategory,
    filteredServices,
    handleCategoryChange: setActiveCategory,
  };
};
```

```tsx
// Services.tsx
import { useServices } from "./useServices";
import { ServiceCard } from "./ServiceCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import "./Services.styles.css";

export const Services = () => {
  const { activeCategory, filteredServices, handleCategoryChange } = useServices();

  return (
    <SectionWrapper id="services">
      <h2 className="font-display text-3xl uppercase tracking-wide text-white">
        Our Services
      </h2>
      <div className="flex flex-wrap gap-3">
        {/* category filter buttons */}
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
};
```

**Skip the hook** when a component is purely presentational (no state, no effects, no handlers) — e.g., `Badge`, `Heading`, `Icon`.

### Props

- **`any` is banned.** No exceptions, no `as any`. Use `unknown` with narrowing if needed.
- Every component has a `ComponentName.types.ts` for its props.
- Props interfaces named `ComponentNameProps`.
- Extend native HTML props with `React.ComponentPropsWithoutRef<"element">`.
- Discriminated unions for variant-based components.

```ts
// Button.types.ts
export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
}

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isLoading?: boolean;
}
```

### General Patterns

- **Functional components only.** Class components are allowed only for error boundaries.
- **Named exports** for all components. Default exports only if required by TanStack Router file-based routes.
- One component per file. File name matches component name in PascalCase.
- Avoid prop drilling beyond 2 levels — use composition or context.
- Prefer **composition over configuration** — pass children instead of building mega-components with dozens of props.

---

## Styling

### No Inline CSS — Ever

Zero `style={{}}` props in JSX.

### Tailwind — Ready Classes Only

- **Use Tailwind's built-in spacing scale** (`p-4`, `gap-6`, `max-w-xl`). Never use arbitrary values like `p-[13px]` or `w-[247px]`. Pick the nearest value from the scale.
- **Extend the theme** in `tailwind.config.ts` for project tokens (colors, fonts). No hardcoded hex in class strings.
- Group classes logically: layout → sizing → spacing → typography → colors → effects → states.
- Use `cn()` (clsx + twMerge) for conditional classes. Never string-concatenate.

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        surface: "#2a2a2a",
        accent: "#e87a1e",
        "accent-hover": "#f59035",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
    },
  },
};
```

### Component-Scoped CSS

Components needing CSS beyond Tailwind get a `ComponentName.styles.css` file in their folder. Use this for complex animations/keyframes and pseudo-element styling. It's the exception, not the norm.

### Flexbox First

Default to `flex` for all layouts. Use `gap-*` for spacing between children. Only use `grid` when you genuinely need a two-dimensional layout that flex can't handle.

### No Margin

Avoid `m-*` classes. Margin creates invisible coupling between components. Use `gap-*` on parent containers and `p-*` for internal spacing. If margin is truly unavoidable, add a comment explaining why.

```tsx
// ✅ Parent owns the spacing
<div className="flex flex-col gap-6">
  <Heading>Our Services</Heading>
  <ServiceList />
  <CallToAction />
</div>

// ❌ Children manage their own spacing
<div className="flex flex-col">
  <Heading className="mb-6">Our Services</Heading>
  <ServiceList className="mb-8" />
  <CallToAction className="mt-4" />
</div>
```

---

## Responsive Design

Every component must work on mobile by default. Build mobile-first, then enhance.

- Use Tailwind responsive prefixes: `sm:` (640), `md:` (768), `lg:` (1024), `xl:` (1280).
- Common patterns: `flex-col md:flex-row`, `w-full md:w-1/2 lg:w-1/3`, `text-2xl md:text-4xl`.
- Test at **320px minimum width**. No horizontal scrolling on any viewport.
- Touch targets: at least **44×44px** on mobile.

---

## TypeScript

- **Strict mode always.** `tsconfig.json` → `"strict": true`.
- **`any` is banned.** Not in props, state, handlers, utilities, or "temporarily." Use `unknown` + type guards.
- **Event handlers:** `React.MouseEvent<HTMLButtonElement>`, `React.ChangeEvent<HTMLInputElement>`, etc.

### Types Folder

Global types in `src/types/`, organized by domain: `common.ts`, `services.ts`, `testimonials.ts`, `contact.ts`. Component-specific types stay in `ComponentName.types.ts`. Promote to `src/types/` only when shared across unrelated components.

---

## Constants & Enums

Zero magic strings or numbers in component code.

**Enums** for finite sets referenced in logic (routes, categories, variants, statuses):

```ts
// constants/routes.ts
export enum AppRoute {
  HOME = "/",
  SERVICES = "/services",
  ABOUT = "/about",
  CONTACT = "/contact",
}

// constants/services.ts
export enum ServiceCategory {
  ALL = "all",
  MAINTENANCE = "maintenance",
  REPAIR = "repair",
  DIAGNOSTICS = "diagnostics",
  BODYWORK = "bodywork",
}

// types/common.ts
export enum LoadingState {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
```

**Constants** for static values (company info, config, thresholds):

```ts
// constants/ui.ts
export const ANIMATION_DURATION_MS = 300;
export const MAX_CONTENT_WIDTH = "max-w-7xl";

// constants/content.ts
export const COMPANY_NAME = "AutoPro Garage";
export const PHONE_NUMBER = "+30 210 123 4567";
export const ADDRESS = "123 Mechanic Street, Athens";
export const FOUNDING_YEAR = 2005;
```

---

## Semantic HTML, Accessibility & SEO

These three concerns overlap heavily. Proper semantic HTML serves accessibility AND search engines simultaneously. This section covers all three.

### Document Structure

Every page must follow this landmark structure:

```html
<body>
  <a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>
  <header>
    <nav aria-label="Main navigation">
      <!-- primary navigation -->
    </nav>
  </header>
  <main id="main-content">
    <section aria-labelledby="hero-heading">
      <h1 id="hero-heading">...</h1>
    </section>
    <section aria-labelledby="services-heading">
      <h2 id="services-heading">...</h2>
    </section>
    <!-- more sections -->
  </main>
  <footer>
    <nav aria-label="Footer navigation">...</nav>
  </footer>
</body>
```

### Heading Hierarchy

- **One `<h1>` per page** — the page's primary heading. Google and screen readers use this as the page topic.
- Heading levels must be sequential: `<h1>` → `<h2>` → `<h3>`. Never skip levels.
- Every `<section>` should have a heading. If it must be hidden visually, use `sr-only`.

### Landmark Elements

Use the correct element for the job:

| Purpose | Element | Notes |
|---|---|---|
| Page header | `<header>` | Contains logo, nav |
| Navigation | `<nav>` | Add `aria-label` if multiple navs |
| Main content | `<main>` | One per page |
| Content section | `<section>` | Must have a heading |
| Sidebar/supplementary | `<aside>` | Related but not primary |
| Page footer | `<footer>` | Links, contact, copyright |
| Actions | `<button>` | Never use `<div onClick>` |
| Navigation links | `<a>` / `<Link>` | Internal routes use TanStack `<Link>` |
| Form inputs | `<input>`, `<select>`, `<textarea>` | Always paired with `<label>` |

### Keyboard Navigation

- All interactive elements must be reachable and operable via keyboard.
- Tab order follows visual order. Never hack it with `tabIndex`.
- Focus states must be visible: `focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none`.
- Modals/menus trap focus while open and restore it on close.
- `Escape` closes overlays, `Enter`/`Space` activates buttons.

### ARIA

- `aria-label` on icon-only buttons and image links.
- `aria-expanded` on toggle buttons (hamburger menu, accordions).
- `aria-current="page"` on active navigation links.
- `aria-live="polite"` for dynamic content (form errors, toasts).
- **Never use ARIA when a native HTML element does the same job.**

### Color & Contrast

- WCAG AA minimum: **4.5:1** for body text, **3:1** for large text.
- Never convey information through color alone — pair with text, icons, or patterns.

### SEO — Meta Tags

Every route must define its meta via TanStack Router's `head` option:

- `<title>` — unique per page, format: `Page Name | Company Name`
- `<meta name="description">` — 150–160 chars, includes location and primary service
- `<link rel="canonical">` — canonical URL

All meta content must be translated via i18n.

### SEO — Open Graph

```html
<meta property="og:title" content="AutoPro Garage — Expert Car Repair in Athens" />
<meta property="og:description" content="Professional auto repair and maintenance..." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.autoprogarage.gr" />
```

Provide a dedicated OG image (1200×630px).

### SEO — Structured Data (JSON-LD)

Add `LocalBusiness` schema for Google rich results:

```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "AutoPro Garage",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Mechanic Street",
    "addressLocality": "Athens",
    "addressCountry": "GR"
  },
  "telephone": "+30 210 123 4567",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
  "url": "https://www.autoprogarage.gr"
}
```

### Component Completion Checklist

A component is not done until:

1. Can it be used with keyboard only?
2. Does it have visible focus indication?
3. Does it use semantic HTML (correct elements, heading hierarchy)?
4. Are ARIA attributes correct and minimal?
5. Does it meet contrast requirements?
6. Does it make sense read by a screen reader?
7. Does it pass axe with zero critical/serious violations?

---

## Accessibility Testing — axe

### Development

Use `@axe-core/react` to log violations to the browser console in development:

```tsx
// main.tsx — dev only
if (import.meta.env.DEV) {
  import("@axe-core/react").then((axe) => {
    import("react-dom").then((ReactDOM) => {
      axe.default(React, ReactDOM, 1000);
    });
  });
}
```

### Testing

Add axe checks to component tests with `jest-axe` or `vitest-axe`:

```tsx
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

it("ServiceCard has no a11y violations", async () => {
  const { container } = render(<ServiceCard service={mockService} />);
  expect(await axe(container)).toHaveNoViolations();
});
```

### Rules

- Zero `critical` or `serious` violations per component.
- Never disable axe rules globally.
- Run the axe browser extension or Lighthouse a11y audit before any release.

---

## Internationalization — i18n

All user-facing text is externalized via [react-i18next](https://react.i18next.com/).

### Setup

`i18next` + `react-i18next` + `i18next-browser-languagedetector` for automatic locale detection.

Translations live in `src/translations/` (content), config in `src/i18n/` (setup). Translators work in `translations/` without touching code.

### Translation Keys

Dot-separated, namespaced, descriptive:

```json
// translations/en/services.json
{
  "heading": "Our Services",
  "oilChange": {
    "title": "Oil Change",
    "description": "Full synthetic and conventional oil changes for all makes and models.",
    "price": "from €40"
  }
}
```

### Usage

```tsx
import { useTranslation } from "react-i18next";
import { TranslationNamespace } from "@/i18n/types";

export const Services = () => {
  const { t } = useTranslation(TranslationNamespace.SERVICES);
  return <h2>{t("heading")}</h2>;
};
```

### Namespaces

```ts
// i18n/types.ts
export enum TranslationNamespace {
  COMMON = "common",
  HERO = "hero",
  SERVICES = "services",
  ABOUT = "about",
  CONTACT = "contact",
  BOOKING_FORM = "bookingForm",
  VALIDATION = "validation",
}
```

### New Component — Translation Checklist

When creating any new component:

1. Create `translations/en/myComponent.json` and `translations/el/myComponent.json`.
2. Add the namespace to `TranslationNamespace` enum.
3. Use `useTranslation` in the component from day one.
4. Populate both locale files. Use `[TODO: translate]` for untranslated Greek strings.

**No component is complete until its translation files exist in all locales.**

### Rules

- Zero hardcoded user-facing strings in components — headings, labels, buttons, placeholders, error messages, `alt` text, `aria-label`, `placeholder`.
- All locale folders mirror each other exactly with identical keys.
- Date, number, and currency formatting use `Intl` APIs or i18next formatting.
- Default locale: **English (en)**. Primary additional locale: **Greek (el)**.
- Lazy-load namespaces per route/section.

---

## Routing — TanStack Router

Full type-safety for routes, params, and search params.

### File-Based Routes

Use `@tanstack/router-vite-plugin` to auto-generate the route tree from `src/routes/`. The plugin creates `routeTree.gen.ts` — never edit it manually.

### Root Route

```tsx
// routes/__root.tsx
import { createRootRoute, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  ),
  notFoundComponent: () => <NotFoundPage />,
});
```

### Page Route with Head

```tsx
// routes/services.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services | AutoPro Garage" },
      { name: "description", content: "Professional auto repair services in Athens..." },
    ],
  }),
});
```

### Lazy Routes

Split page components out of the initial bundle:

```tsx
// routes/services.tsx — route definition
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/services")({});

// routes/services.lazy.tsx — lazy component
import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/services")({
  component: ServicesPage,
});
```

### Type-Safe Navigation

```tsx
import { Link } from "@tanstack/react-router";

// Compile-time checked — only valid routes accepted
<Link to="/services">Our Services</Link>

// With typed search params
<Link to="/services" search={{ category: "maintenance" }}>Maintenance</Link>
```

### Type-Safe Search Params

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { ServiceCategory } from "@/constants/services";

interface ServicesSearchParams {
  category?: ServiceCategory;
}

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>): ServicesSearchParams => ({
    category: Object.values(ServiceCategory).includes(search.category as ServiceCategory)
      ? (search.category as ServiceCategory)
      : undefined,
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { category } = Route.useSearch();
  // category is ServiceCategory | undefined — fully typed
}
```

### Rules

- File-based routing only. All routes in `src/routes/`.
- Navigation uses `<Link>` from TanStack Router — never `<a>` for internal routes.
- Active links use `activeProps`/`activeOptions` with `aria-current="page"`.
- Every route defines `errorComponent` or relies on root's.
- Every route defines `head` with title and description, translated via i18n.
- `ScrollRestoration` in root route.

---

## Forms — TanStack Form

Use `@tanstack/react-form` for all forms.

### Types

```ts
// components/ContactForm/ContactForm.types.ts
import { ServiceCategory } from "@/constants/services";

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: ServiceCategory;
}
```

### Logic Hook

```tsx
// components/ContactForm/useContactForm.ts
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";
import { ContactFormValues } from "./ContactForm.types";
import { TranslationNamespace } from "@/i18n/types";
import { LoadingState } from "@/types/common";

export const useContactForm = () => {
  const { t } = useTranslation(TranslationNamespace.VALIDATION);
  const [submitState, setSubmitState] = useState<LoadingState>(LoadingState.IDLE);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "" as ContactFormValues["service"],
    },
    onSubmit: async ({ value }) => {
      setSubmitState(LoadingState.LOADING);
      try {
        // submission logic
        setSubmitState(LoadingState.SUCCESS);
      } catch {
        setSubmitState(LoadingState.ERROR);
      }
    },
  });

  return { form, submitState, t };
};
```

### Field-Level Validation

```tsx
<form.Field
  name="email"
  validators={{
    onBlur: ({ value }) => {
      if (!value) return t("validation.emailRequired");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t("validation.emailInvalid");
      return undefined;
    },
  }}
>
  {(field) => (
    <div className="flex flex-col gap-1">
      <label htmlFor="email">{t("emailLabel")}</label>
      <input
        id="email"
        type="email"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        aria-invalid={field.state.meta.errors.length > 0}
        aria-describedby={field.state.meta.errors.length > 0 ? "email-error" : undefined}
      />
      {field.state.meta.errors.length > 0 && (
        <span id="email-error" role="alert" className="text-sm text-red-400">
          {field.state.meta.errors[0]}
        </span>
      )}
    </div>
  )}
</form.Field>
```

### Submit Button

```tsx
<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
  {([canSubmit, isSubmitting]) => (
    <button type="submit" disabled={!canSubmit || isSubmitting}>
      {isSubmitting ? t("common.submitting") : t("contact.submitButton")}
    </button>
  )}
</form.Subscribe>
```

### Validation Timing

- **`onBlur`** (default) — validates on focus loss. Best for most fields.
- **`onChange`** — validates as the user types. Use for instant feedback (email format, password strength).
- **`onSubmit`** — validates only on submission. Use for multi-step flows.

### Rules

- All validation messages from translation files.
- No native HTML validation (`required`, `minlength` attributes) — TanStack Form handles it.
- Form types are explicit interfaces in `.types.ts`.
- Every field has a visible `<label>` via `htmlFor`/`id`.
- Errors use `role="alert"` and `aria-invalid`.
- Submission feedback via `aria-live="polite"`.

---

## Error Handling

### Error Boundaries

Wrap major sections in error boundaries. This is the **one exception** where class components are allowed.

```tsx
// components/ErrorBoundary/ErrorBoundary.tsx
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to monitoring service — never console.log
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### Fallback Patterns

- **Lazy-loaded chunks:** `<ErrorBoundary>` around `<Suspense>`.
- **Images:** `onError` swaps to placeholder. Never show broken image icons.
- **API/submissions:** Inline error messages at point of failure using `LoadingState` enum.
- **Network errors:** Show a retry option.

### Rules

- Never let an unhandled error crash the full page.
- Never show raw error messages or stack traces to users.
- Every async operation handles its error case.
- Error fallback UIs are styled consistently and translated via i18n.

---

## Animation

### CSS First

Default to Tailwind's `transition-*`, `duration-*`, `ease-*` for hover/focus/color shifts. Use `@keyframes` in `.styles.css` files for repeatable animations.

### Framer Motion — Complex Cases Only

Use only when CSS can't handle it: page transitions, staggered list entrances, scroll-triggered reveals, drag, layout animations.

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: ANIMATION_DURATION_MS / 1000 }}
>
```

### Rules

- No animation delays content visibility. Entrance animations are subtle (opacity, small translate).
- `viewport: { once: true }` — play once, not on every re-entry.
- **Respect `prefers-reduced-motion`.** Use `motion-safe:`/`motion-reduce:` in Tailwind or the `useReducedMotion` hook.
- Durations from `constants/ui.ts`. Max **400ms**.
- Must run at 60fps on mid-range mobile devices.

---

## Images & Media

- `loading="lazy"` on all images below the fold.
- `alt` text always — descriptive for informational, `alt=""` for decorative.
- Tailwind `aspect-*` utilities to prevent layout shift.
- Prefer `webp`. Serve responsive sizes via `srcset`.
- Hero/background images get a gradient overlay for text readability.

---

## Performance & Bundle Size

### General

- Question every `npm install`. If you only need one utility, write it.
- Lazy-load routes (TanStack Router `.lazy.tsx`) and heavy components.
- Set explicit dimensions on images and embeds to avoid layout shift.
- Prefer CSS animations over JS-driven.
- Use native APIs: `Intl.DateTimeFormat` over date libraries, `fetch` over axios.

### Monitoring

- **`vite-plugin-visualizer`** — bundle treemap after every build.
- **bundlephobia.com** — check package size before installing. Over 10KB gzipped? Justify it.
- **`size-limit`** — hard budget that fails the build if exceeded.

### Budgets

```json
[
  { "path": "dist/**/*.js", "limit": "150 kB", "gzip": true },
  { "path": "dist/**/*.css", "limit": "30 kB", "gzip": true }
]
```

### Pre-Install Checklist

Before adding any dependency:

1. Can I do this in 20 lines of code?
2. What's the gzipped size? (bundlephobia)
3. Does it support tree-shaking?
4. Is it actively maintained?

---

## Linting & Formatting

### Tools

- **ESLint** — `@typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`
- **Prettier** — formatting

### Key Rules

```json
{
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-unused-vars": "error",
  "no-console": "error",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "jsx-a11y/alt-text": "error",
  "jsx-a11y/no-static-element-interactions": "error",
  "jsx-a11y/click-events-have-key-events": "error",
  "import/no-cycle": "error",
  "import/order": ["error", {
    "groups": ["builtin", "external", "internal", "parent", "sibling"],
    "newlines-between": "always"
  }]
}
```

### Prettier

```json
{ "semi": true, "singleQuote": false, "trailingComma": "all", "printWidth": 100, "tabWidth": 2 }
```

### Enforcement

- **No warnings in CI.** All lint warnings are errors.
- **Format on save** in every editor.
- **Pre-commit hook** via `husky` + `lint-staged`.
- **Import order enforced:** built-in → external → internal → parent → sibling, blank lines between groups.

---

## Git Conventions

### Branches

```
feature/hero-section
fix/mobile-nav-overflow
chore/update-dependencies
refactor/services-component-split
docs/update-claude-md
```

Format: `type/short-kebab-description`

### Commits — Conventional Commits

```
feat(hero): add parallax background effect
fix(nav): resolve hamburger menu not closing on route change
chore(deps): update react-i18next to v14
refactor(services): split into ServiceCard sub-component
style(global): adjust accent color contrast ratio
```

Format: `type(scope): lowercase description`

Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`

### Rules

- Every commit passes lint and type-check (enforced by hooks).
- Atomic commits — one logical change each.
- No `WIP` or `temp` on main.
- Squash-merge feature branches.

---

## Content Tone

- **Direct and confident.** "We fix it right the first time." Not "We strive to provide excellent service."
- **Human, not corporate.** Write like a person, not a brochure.
- **Specific.** Actual services, years in business, brands serviced — concrete details build trust.

No filler words, buzzwords, or vague promises.

---

## Hard Rules — Quick Reference

| Category | Rule |
|---|---|
| TypeScript | `any` banned — no exceptions |
| TypeScript | Strict mode always |
| Styling | No inline styles (`style={{}}`) |
| Styling | No arbitrary Tailwind values (`p-[17px]`) |
| Styling | No margin — use `gap` or `padding` |
| Styling | No `grid` unless flex truly can't do it |
| Styling | No `!important` |
| Components | Max 600 lines per file |
| Components | No prop drilling past 2 levels |
| Components | No `<div>` for interactive elements — use `<button>` or `<a>` |
| Code quality | No `console.log` |
| Code quality | No magic strings — use constants or enums |
| Code quality | No magic numbers — use named constants |
| Code quality | No commented-out code |
| i18n | No hardcoded user-facing strings |
| i18n | Every component has translation files in all locales |
| Accessibility | Zero axe critical/serious violations |
| Accessibility | No removed focus outlines without replacement |
| SEO | Every page has `<title>` and `<meta description>` |
| Routing | No hardcoded route paths — use type-safe `<Link>` |
| Forms | Every field has a visible `<label>` |
| Animation | No animations blocking content visibility |
| Animation | Must support `prefers-reduced-motion` |
| Responsive | No horizontal scroll on any viewport |
| Dependencies | Check bundlephobia before installing |
| Git | Conventional commit messages |
| Git | All commits pass lint + type-check |
| Design | No generic hero with "Welcome to our website" |
| Design | No carousels for critical content |
