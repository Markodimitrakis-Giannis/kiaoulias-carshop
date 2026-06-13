import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { AppRoute } from "@/constants/routes";

const TYRE_SIZE_KEY = "tyreSize";

interface UseTyreFinderReturn {
  size: string;
  error: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleChange: (value: string) => void;
  handleSubmit: () => void;
}

export const useTyreFinder = (): UseTyreFinderReturn => {
  const [size, setSize] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    setSize(value);
    if (error && value.trim()) {
      setError(null);
    }
  };

  const handleSubmit = () => {
    const trimmed = size.trim();
    if (!trimmed) {
      setError("required");
      inputRef.current?.focus();
      return;
    }
    sessionStorage.setItem(TYRE_SIZE_KEY, trimmed);
    void navigate({ to: AppRoute.CONTACT });
  };

  return { size, error, inputRef, handleChange, handleSubmit };
};
