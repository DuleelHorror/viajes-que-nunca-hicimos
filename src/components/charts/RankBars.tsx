import { useState } from "react";
import { cn } from "@/lib/utils";
import { fmtScore, pct } from "@/lib/format";

export interface RankBarItem {
  id: string;
  label: string;
  value: number;
  color?: string;
  sub?: string;
  href?: string;
}

interface RankBarsProps {
  items: RankBarItem[];
  max: number;
  format?: (v: number) => string;
  className?: string;
  /** Color por defecto de la barra (una sola serie) */
  color?: string;
  onSelect?: (id: string) => void;
  winnerMark?: boolean;
}

/** Barras horizontales ordenadas, una sola serie: ranking de países por una métrica. */
export function RankBars({ items, max, format = fmtScore, className, color = "#0891b2", onSelect, winnerMark = true }: RankBarsProps) {
  const [hover, setHover] = useState<string | null>(null);
  const sorted = [...items].sort((a, b) => b.value - a.value);
  return (
    <ol className={cn("space-y-1.5", className)}>
      {sorted.map((it, i) => {
        const c = it.color ?? color;
        const w = pct(it.value, max);
        const active = hover === it.id;
        return (
          <li
            key={it.id}
            className={cn("group grid grid-cols-[1.25rem_minmax(0,9rem)_1fr_3rem] items-center gap-2 rounded-sharp px-1 py-0.5 text-xs sm:grid-cols-[1.5rem_11rem_1fr_3.5rem]", onSelect && "cursor-pointer", active && "bg-ink-800/60")}
            onMouseEnter={() => setHover(it.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onSelect?.(it.id)}
            title={`${it.label}: ${format(it.value)}`}
          >
            <span className="tabular text-concrete-500">{i === 0 && winnerMark ? "🏆" : `${i + 1}.`}</span>
            <span className="line-clamp-2 leading-tight text-concrete-200">
              {it.label}
              {it.sub && <span className="ml-1 text-concrete-500">{it.sub}</span>}
            </span>
            <span className="relative h-2.5 w-full overflow-hidden rounded-sharp bg-ink-800">
              <span
                className="absolute inset-y-0 left-0 rounded-sharp transition-all"
                style={{ width: `${w}%`, backgroundColor: c, boxShadow: active ? `0 0 10px ${c}` : undefined, opacity: hover && !active ? 0.55 : 1 }}
              />
            </span>
            <span className="tabular text-right font-semibold text-concrete-100">{format(it.value)}</span>
          </li>
        );
      })}
    </ol>
  );
}
