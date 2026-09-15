import { cn } from "@/lib/utils";

export interface DumbbellRow {
  id: string;
  label: string;
  /** rangos: rápida, recomendada, completa */
  quick: [number, number];
  recommended: [number, number];
  complete: [number, number];
  ideal: number;
}

interface DumbbellChartProps {
  rows: DumbbellRow[];
  max?: number;
  className?: string;
  onSelect?: (id: string) => void;
}

/** Rangos de días por país sobre una misma escala (una sola serie de color, intensidad = nivel). */
export function DumbbellChart({ rows, max = 21, className, onSelect }: DumbbellChartProps) {
  const pct = (v: number) => `${(Math.min(max, v) / max) * 100}%`;
  return (
    <div className={cn("space-y-2", className)}>
      <div className="grid grid-cols-[8rem_1fr] gap-2">
        <span />
        <div className="relative h-4">
          {[0, 5, 10, 15, 20].map((t) => (
            <span key={t} className="absolute -translate-x-1/2 label-stencil" style={{ left: pct(t) }}>
              {t}
            </span>
          ))}
        </div>
      </div>
      {rows.map((r) => (
        <div key={r.id} className={cn("grid grid-cols-[8rem_1fr] items-center gap-2", onSelect && "cursor-pointer")} onClick={() => onSelect?.(r.id)}>
          <span className="truncate text-xs text-concrete-200">{r.label}</span>
          <div className="relative h-5" title={`Rápida ${r.quick.join("-")} · Recomendada ${r.recommended.join("-")} · Completa ${r.complete.join("-")} · Ideal ${r.ideal}`}>
            {[0, 5, 10, 15, 20].map((t) => (
              <span key={t} className="absolute inset-y-0 w-px bg-ink-750" style={{ left: pct(t) }} />
            ))}
            <span className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-sharp bg-neon-cyan/25" style={{ left: pct(r.quick[0]), width: `calc(${pct(r.complete[1])} - ${pct(r.quick[0])})` }} />
            <span className="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-sharp bg-neon-cyan/60" style={{ left: pct(r.recommended[0]), width: `calc(${pct(r.recommended[1])} - ${pct(r.recommended[0])})` }} />
            <span className="absolute top-1/2 h-4 w-1 -translate-x-1/2 -translate-y-1/2 rounded-sharp bg-neon-lime shadow-glow" style={{ left: pct(r.ideal), ["--glow" as string]: "rgba(163,230,53,.7)" }} />
            <span className="absolute -top-0.5 -translate-x-1/2 text-xs font-mono text-neon-lime" style={{ left: pct(r.ideal) }}>
              {r.ideal}
            </span>
          </div>
        </div>
      ))}
      <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
        <li className="flex items-center gap-1.5 text-xs text-concrete-300"><span className="h-1.5 w-4 rounded-sharp bg-neon-cyan/25" /> rápida → completa</li>
        <li className="flex items-center gap-1.5 text-xs text-concrete-300"><span className="h-2.5 w-4 rounded-sharp bg-neon-cyan/60" /> recomendada</li>
        <li className="flex items-center gap-1.5 text-xs text-concrete-300"><span className="h-3 w-1 rounded-sharp bg-neon-lime" /> ideal para ti</li>
      </ul>
    </div>
  );
}
