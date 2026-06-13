import { StrictMode } from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import "@/i18n";
import "@/styles/global.css";
import { routeTree } from "./routeTree.gen";

// Dev-only accessibility auditing — logs axe violations to the console.
if (import.meta.env.DEV) {
  void Promise.all([
    import("react"),
    import("react-dom"),
    import("@axe-core/react"),
  ]).then(([React, ReactDOM, axe]) => {
    axe.default(React.default, ReactDOM, 1000);
  });
}

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
