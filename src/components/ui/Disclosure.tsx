import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Primitivas de "primero escanear, luego leer".
 * - Clamp: recorta un texto a N líneas y ofrece "leer más" SOLO si de verdad desborda.
 * - Disclosure: bloque plegado con un botón que dice qué hay dentro y cuántas cosas.
 */

interface ClampProps {
  lines?: number;
  children: React.ReactNode;
  className?: string;
  more?: string;
  less?: string;
}

export function Clamp({ lines = 3, children, className, more = "leer más", less = "menos" }: ClampProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      if (open) return;
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, children]);

  return (
    <div className={className}>
      <div
        ref={ref}
        style={open ? undefined : { display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: lines, overflow: "hidden" }}
      >
        {children}
      </div>
      {(overflows || open) && (
        <button type="button" onClick={() => setOpen((v) => !v)} className="mt-1 text-xs font-medium text-neon-cyan/90 hover:text-neon-cyan">
          {open ? less : `${more} ↓`}
        </button>
      )}
    </div>
  );
}

interface DisclosureProps {
  label: string;
  count?: number;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  /** Se desplega solo en pantallas anchas (≥ lg) y queda plegado en móvil. */
  openOnDesktop?: boolean;
}

export function Disclosure({ label, count, children, className, defaultOpen = false, openOnDesktop = false }: DisclosureProps) {
  const [open, setOpen] = useState(defaultOpen);
  useEffect(() => {
    if (openOnDesktop && window.matchMedia("(min-width: 1024px)").matches) setOpen(true);
  }, [openOnDesktop]);
  return (
    <div className={cn("border-t border-ink-800 pt-2", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 py-1 text-left text-sm font-medium text-concrete-200 hover:text-concrete-50"
      >
        <span>
          {label}
          {count != null && <span className="ml-1.5 tabular text-xs text-concrete-500">{count}</span>}
        </span>
        <ChevronDown size={14} className={cn("shrink-0 text-concrete-500 transition-transform", open && "rotate-180")} />
      </button>
      {open && <div className="animate-fade-in pt-1">{children}</div>}
    </div>
  );
}
