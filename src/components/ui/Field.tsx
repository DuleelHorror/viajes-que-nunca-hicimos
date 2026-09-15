import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const baseInput =
  "w-full rounded-sharp bg-ink-900 border border-ink-600 px-2.5 py-1.5 text-sm text-concrete-100 " +
  "placeholder:text-concrete-500 focus:border-neon-cyan/60 transition-colors";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return <input ref={ref} className={cn(baseInput, className)} {...props} />;
});

export const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(function Select(
  { className, children, ...props },
  ref,
) {
  return (
    <select ref={ref} className={cn(baseInput, "appearance-none cursor-pointer pr-8", className)} {...props}>
      {children}
    </select>
  );
});

interface FieldProps {
  label: string;
  htmlFor?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

export function Field({ label, htmlFor, hint, className, children }: FieldProps) {
  return (
    <label htmlFor={htmlFor} className={cn("block", className)}>
      <span className="label-stencil mb-1 block">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-concrete-500">{hint}</span>}
    </label>
  );
}

/** Chip toggle (filtros) */
export function Chip({
  on,
  onClick,
  children,
  className,
  title,
}: {
  on?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <button type="button" title={title} onClick={onClick} className={cn("chip", on && "chip-on", className)} aria-pressed={on}>
      {children}
    </button>
  );
}

export function Range({
  value,
  onChange,
  min,
  max,
  step = 1,
  className,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  className?: string;
}) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className={cn("w-full accent-neon-cyan", className)}
    />
  );
}
