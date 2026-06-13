// Use const object instead of enum so values are inferred as string literals,
// which TanStack Router's type system requires for Link to={...} type resolution.
export const AppRoute = {
  HOME: "/",
  SERVICES: "/services",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
} as const;

export type AppRoute = (typeof AppRoute)[keyof typeof AppRoute];
