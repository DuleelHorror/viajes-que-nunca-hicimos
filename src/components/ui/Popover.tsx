import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
  panelClassName?: string;
}

/** Popover mínimo: clic en el trigger abre; clic fuera o ESC cierra. */
export function Popover({ trigger, children, align = "left", className, panelClassName }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right">(align);
  const ref = useRef<HTMLDivElement>(null);

  // En móvil el panel (320 px) se saldría de la pantalla: se alinea según dónde quede el disparador.
  useEffect(() => {
    if (!open || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const panelW = Math.min(320, window.innerWidth * 0.9);
    if (rect.left + panelW > window.innerWidth - 8) setSide("right");
    else if (rect.right - panelW < 8) setSide("left");
    else setSide(align);
  }, [open, align]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <button type="button" onClick={() => setOpen((v) => !v)} className="inline-flex" aria-expanded={open}>
        {trigger}
      </button>
      {open && (
        <div
          className={cn(
            "absolute z-40 mt-2 w-80 max-w-[90vw] panel rounded-sharp p-3 shadow-panel animate-scale-in",
            side === "right" ? "right-0" : "left-0",
            panelClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
