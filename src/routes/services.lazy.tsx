import { createLazyFileRoute } from "@tanstack/react-router";

import { BookingForm } from "@/components/BookingForm";
import { Services } from "@/components/Services";

function ServicesPage() {
  return (
    <>
      <Services />
      <BookingForm />
    </>
  );
}

export const Route = createLazyFileRoute("/services")({
  component: ServicesPage,
});
