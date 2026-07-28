export const ANIMATION_DURATION_MS = 200;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

export const MAX_CONTENT_WIDTH = "max-w-7xl";

/** Netlify Forms registration name — must match the hidden form in index.html. */
export const BOOKING_FORM_NAME = "booking";
/** Honeypot field Netlify discards submissions for when filled (netlify-honeypot). */
export const BOOKING_HONEYPOT_FIELD = "bot-field";

/** Hero tyre-size finder → booking form handoff (sessionStorage key + window event). */
export const TYRE_SIZE_STORAGE_KEY = "kiaoulias:tyreSize";
export const TYRE_SIZE_EVENT = "kiaoulias:tyre-size";

/** Common passenger-car tyre dimensions for the finder dropdowns. */
export const TYRE_WIDTHS = [175, 185, 195, 205, 215, 225, 235, 245, 255, 265] as const;
export const TYRE_PROFILES = [35, 40, 45, 50, 55, 60, 65, 70] as const;
export const TYRE_RIMS = [14, 15, 16, 17, 18, 19, 20, 21] as const;
