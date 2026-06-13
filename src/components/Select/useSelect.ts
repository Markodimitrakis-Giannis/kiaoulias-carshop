import { useCallback, useId, useRef, useState, type KeyboardEvent } from "react";

import { useClickOutside } from "@/hooks/useClickOutside";

import type { SelectOption } from "./Select.types";

interface UseSelectParams {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

interface UseSelectReturn {
  isOpen: boolean;
  activeIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  listboxId: string;
  selectedOption: SelectOption | undefined;
  toggle: () => void;
  selectIndex: (index: number) => void;
  setActiveIndex: (index: number) => void;
  getOptionId: (index: number) => string;
  handleKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}

export const useSelect = ({
  options,
  value,
  onChange,
  onBlur,
}: UseSelectParams): UseSelectReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const idPrefix = useId();

  const selectedIndex = options.findIndex((o) => o.value === value);
  const [activeIndex, setActiveIndex] = useState(selectedIndex >= 0 ? selectedIndex : 0);

  const open = useCallback(() => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
  }, [selectedIndex]);

  const close = useCallback(() => setIsOpen(false), []);

  useClickOutside(containerRef, () => {
    if (isOpen) {
      close();
      onBlur?.();
    }
  });

  const selectIndex = useCallback(
    (index: number) => {
      const opt = options[index];
      if (!opt) return;
      onChange(opt.value);
      close();
    },
    [options, onChange, close],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          if (!isOpen) return open();
          return setActiveIndex(Math.min(activeIndex + 1, options.length - 1));
        case "ArrowUp":
          event.preventDefault();
          if (!isOpen) return open();
          return setActiveIndex(Math.max(activeIndex - 1, 0));
        case "Home":
          if (!isOpen) return;
          event.preventDefault();
          return setActiveIndex(0);
        case "End":
          if (!isOpen) return;
          event.preventDefault();
          return setActiveIndex(options.length - 1);
        case "Enter":
        case " ":
          event.preventDefault();
          return isOpen ? selectIndex(activeIndex) : open();
        case "Escape":
          if (!isOpen) return;
          event.preventDefault();
          return close();
        case "Tab":
          if (isOpen) close();
          return;
        default:
          return;
      }
    },
    [isOpen, activeIndex, options.length, open, close, selectIndex],
  );

  return {
    isOpen,
    activeIndex,
    containerRef,
    listboxId: `${idPrefix}-listbox`,
    selectedOption: selectedIndex >= 0 ? options[selectedIndex] : undefined,
    toggle: () => (isOpen ? close() : open()),
    selectIndex,
    setActiveIndex,
    getOptionId: (index) => `${idPrefix}-opt-${index}`,
    handleKeyDown,
  };
};
