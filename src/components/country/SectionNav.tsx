import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface SectionDef {
  id: string;
  label: string;
  emoji?: string;
}

export const COUNTRY_SECTIONS: SectionDef[] = [
  { id: "resumen", label: "Lo básico", emoji: "📋" },
  { id: "puntuaciones", label: "Notas", emoji: "🎯" },
  { id: "dias", label: "¿Cuántos días?", emoji: "⏱" },
  { id: "transporte", label: "Moverse", emoji: "🚆" },
  { id: "mapa", label: "Mapa", emoji: "🗺" },
  { id: "coste", label: "Pasta", emoji: "💸" },
  { id: "vuelos", label: "Desde BCN", emoji: "✈️" },
  { id: "documentacion", label: "Papeles", emoji: "🛂" },
  { id: "seguridad", label: "Seguridad", emoji: "🛡️" },
  { id: "politica", label: "Política", emoji: "🏛" },
  { id: "digital", label: "Móvil", emoji: "📱" },
  { id: "idioma", label: "Idioma", emoji: "🗣" },
  { id: "epoca", label: "¿Cuándo?", emoji: "📅" },
  { id: "eventos", label: "Eventos", emoji: "🔥" },
  { id: "sitios", label: "Sitios circo", emoji: "🎪" },
  { id: "rutas", label: "Rutas", emoji: "🧭" },
  { id: "pros-contras", label: "Bueno y malo", emoji: "⚖️" },
  { id: "veredicto", label: "Veredicto", emoji: "🏁" },
];

/** Navegación sticky horizontal con resaltado de la sección visible. */
export function SectionNav({ sections = COUNTRY_SECTIONS }: { sections?: SectionDef[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-14 z-20 -mx-4 border-b border-ink-700 bg-ink-950/90 px-4 backdrop-blur">
      <ul className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        {sections.map((s) => (
          <li key={s.id} className="shrink-0">
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "inline-flex items-center gap-1 rounded-sharp border px-2.5 py-1 text-xs font-medium transition-colors",
                active === s.id ? "border-neon-cyan/60 bg-neon-cyan/10 text-concrete-50" : "border-transparent text-concrete-300 hover:text-concrete-50",
              )}
            >
              {s.emoji && <span aria-hidden>{s.emoji}</span>}
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
