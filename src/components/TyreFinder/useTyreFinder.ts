import { useMemo, useState } from "react";

import type { SelectOption } from "@/components/Select";
import {
  TYRE_PROFILES,
  TYRE_RIMS,
  TYRE_SIZE_EVENT,
  TYRE_SIZE_STORAGE_KEY,
  TYRE_WIDTHS,
} from "@/constants/ui";

interface UseTyreFinderReturn {
  width: string;
  profile: string;
  rim: string;
  setWidth: (value: string) => void;
  setProfile: (value: string) => void;
  setRim: (value: string) => void;
  widthOptions: SelectOption[];
  profileOptions: SelectOption[];
  rimOptions: SelectOption[];
  size: string | null;
  canSubmit: boolean;
  handleSubmit: () => void;
}

const toOptions = (values: readonly number[], suffix = ""): SelectOption[] =>
  values.map((v) => ({ value: String(v), label: `${suffix}${v}` }));

export const useTyreFinder = (): UseTyreFinderReturn => {
  const [width, setWidth] = useState("");
  const [profile, setProfile] = useState("");
  const [rim, setRim] = useState("");

  const canSubmit = Boolean(width && profile && rim);
  const size = canSubmit ? `${width}/${profile} R${rim}` : null;

  const handleSubmit = () => {
    if (!size) return;
    try {
      sessionStorage.setItem(TYRE_SIZE_STORAGE_KEY, size);
    } catch {
      // sessionStorage may be unavailable (private mode) — handoff is best-effort.
    }
    window.dispatchEvent(new CustomEvent(TYRE_SIZE_EVENT, { detail: size }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    width,
    profile,
    rim,
    setWidth,
    setProfile,
    setRim,
    widthOptions: useMemo(() => toOptions(TYRE_WIDTHS), []),
    profileOptions: useMemo(() => toOptions(TYRE_PROFILES), []),
    rimOptions: useMemo(() => toOptions(TYRE_RIMS, "R"), []),
    size,
    canSubmit,
    handleSubmit,
  };
};
