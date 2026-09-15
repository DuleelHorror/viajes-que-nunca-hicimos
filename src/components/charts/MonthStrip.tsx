import { MONTH_RATING_META, MONTHS_SHORT } from "@/lib/constants";
import type { MonthRating } from "@/lib/schema";
import { cn } from "@/lib/utils";

interface MonthStripProps {
  months: MonthRating[];
  selected?: number;
  onSelect?: (month: number) => void;
  className?: string;
  compact?: boolean;
  /** meses con festival (resalta un punto) */
  festivalMonths?: number[];
}

/** 12 celdas coloreadas por valoración, temperatura debajo; clic para ver detalle. */
export function MonthStrip({ months, selected, onSelect, className, compact, festivalMonths = [] }: MonthStripProps) {
  return (
    <div className={cn("grid grid-cols-6 gap-1 sm:grid-cols-12", className)}>
      {months.map((m) => {
        const meta = MONTH_RATING_META[m.rating];
        const active = selected === m.month;
        return (
          <button
            key={m.month}
            type="button"
            onClick={() => onSelect?.(m.month)}
            className={cn(
              "group flex flex-col items-center rounded-sharp border px-1 py-1.5 text-center transition-colors",
              active ? "border-concrete-200 bg-ink-750" : "border-ink-700 bg-ink-850 hover:border-ink-500",
            )}
            title={`${MONTHS_SHORT[m.month - 1]}: ${meta.label} · ${m.tempMin}…${m.tempMax} °C`}
            aria-pressed={active}
          >
            <span className="label-stencil">{MONTHS_SHORT[m.month - 1]}</span>
            <span
              className={cn("my-1 w-full rounded-sharp", compact ? "h-2" : "h-4")}
              style={{ backgroundColor: meta.color, boxShadow: active ? `0 0 8px ${meta.color}` : undefined, opacity: m.rating === "malo" ? 0.7 : 1 }}
            />
            {!compact && (
              <span className="tabular text-xs text-concrete-400">
                {m.tempMin}…{m.tempMax}°
              </span>
            )}
            <span className="flex h-2 items-center gap-0.5">
              {m.snow && <span className="text-xs" title="Nieve">❄</span>}
              {festivalMonths.includes(m.month) && <span className="text-xs" title="Festival">🔥</span>}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function MonthLegend({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-1", className)}>
      {(Object.keys(MONTH_RATING_META) as Array<keyof typeof MONTH_RATING_META>).map((k) => (
        <li key={k} className="flex items-center gap-1.5 text-xs text-concrete-300">
          <span className="h-2.5 w-2.5 rounded-sharp" style={{ backgroundColor: MONTH_RATING_META[k].color }} />
          {MONTH_RATING_META[k].label}
        </li>
      ))}
    </ul>
  );
}
