import type { ServiceCategory } from "@/constants/services";

export interface BookingFormValues {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: ServiceCategory | "";
  consent: boolean;
}

export interface BookingFormProps {
  className?: string;
}
