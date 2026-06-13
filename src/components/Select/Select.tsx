import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";

import { SelectTone } from "./Select.types";
import type { SelectProps } from "./Select.types";
import { useSelect } from "./useSelect";
import "./Select.styles.css";

export const Select = ({
  id,
  options,
  value,
  onChange,
  onBlur,
  placeholder,
  tone = SelectTone.DEFAULT,
  "aria-invalid": ariaInvalid,
  "aria-describedby": ariaDescribedby,
}: SelectProps) => {
  const {
    isOpen,
    activeIndex,
    containerRef,
    listboxId,
    selectedOption,
    toggle,
    selectIndex,
    setActiveIndex,
    getOptionId,
    handleKeyDown,
  } = useSelect({ options, value, onChange, onBlur });

  // tone is reserved for future light-surface variants; both tones currently
  // share the surface-raised treatment, which reads correctly on dark + navy.
  void tone;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id={id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={isOpen ? getOptionId(activeIndex) : undefined}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm border bg-surface-raised px-4 py-3 text-base transition-colors duration-200",
          "focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          isOpen ? "border-accent" : "border-border hover:border-border-strong",
        )}
      >
        <span className={cn(selectedOption ? "text-body" : "text-faint")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={cn(
            "shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180 text-accent" : "text-muted",
          )}
        />
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={placeholder}
          className="select-panel absolute z-20 flex w-full flex-col overflow-hidden rounded-md border border-border bg-surface py-1 shadow-lg"
        >
          {options.map((opt, index) => {
            const isSelected = opt.value === value;
            const isActive = index === activeIndex;

            return (
              <li
                key={opt.value}
                id={getOptionId(index)}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(event) => {
                  // preventDefault keeps focus on the trigger so onBlur doesn't fire mid-select.
                  event.preventDefault();
                  selectIndex(index);
                }}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-2 px-4 py-3 text-base transition-colors duration-150",
                  isActive ? "bg-surface-raised" : "bg-transparent",
                  isSelected ? "text-accent-text" : "text-body",
                )}
              >
                <span>{opt.label}</span>
                {isSelected && <Check size={16} aria-hidden="true" className="shrink-0 text-accent" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
