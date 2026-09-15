import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "neon" | "ghost" | "subtle" | "danger" | "outline";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const VARIANTS: Record<Variant, string> = {
  primary: "bg-blood-600 text-concrete-50 hover:bg-blood-500 border border-blood-500/60 shadow-dossier",
  neon: "bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 border border-neon-cyan/50 shadow-glow",
  outline: "bg-transparent text-concrete-200 hover:bg-ink-750 border border-ink-600",
  ghost: "bg-transparent text-concrete-300 hover:bg-ink-800 hover:text-concrete-100 border border-transparent",
  subtle: "bg-ink-750 text-concrete-200 hover:bg-ink-700 border border-ink-600",
  danger: "bg-transparent text-rose-300 hover:bg-rose-500/15 border border-rose-500/40",
};

const SIZES: Record<Size, string> = {
  sm: "h-7 px-2.5 text-xs gap-1.5",
  md: "h-9 px-3.5 text-sm gap-2",
  lg: "h-11 px-5 text-base gap-2",
  icon: "h-8 w-8 p-0 justify-center",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "subtle", size = "md", className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-sharp font-medium",
        "transition-colors disabled:opacity-50 disabled:pointer-events-none select-none",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
});
