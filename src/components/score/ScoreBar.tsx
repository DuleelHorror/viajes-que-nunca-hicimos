import { cn } from "@/lib/utils";
import { fmtScore, pct } from "@/lib/format";

/** Tono según valor 0-10 (menor-es-mejor se invierte antes de llamar) */
export function scoreTone(v: number): { color: string; text: string; glow: string } {
  if (v >= 8) return { color: "#a3e635", text: "text-neon-lime", glow: "glow-lime" };
  if (v >= 6) return { color: "#22d3ee", text: "text-neon-cyan", glow: "glow-cyan" };
  if (v >= 4) return { color: "#fbbf24", text: "text-amber-300", glow: "glow-amber" };
  return { color: "#ef4444", text: "text-red-400", glow: "glow-blood" };
}

interface ScoreBarProps {
  value: number;
  max?: number;
  label?: string;
  /** true si 10 es malo (coste, dificultad idioma): invierte el color */
  invert?: boolean;
  hint?: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  showValue?: boolean;
}

export function ScoreBar({ value, max = 10, label, invert, hint, className, size = "md", showValue = true }: ScoreBarProps) {
  const tone = scoreTone(invert ? max - value : value);
  const width = pct(value, max);
  return (
    <div className={cn("min-w-0", className)}>
      {(label || showValue) && (
        <div className="mb-1 flex items-baseline justify-between gap-2">
          {label && <span className={cn("min-w-0 leading-snug text-concrete-300", size === "sm" ? "text-xs" : "text-sm")}>{label}</span>}
          {showValue && (
            <span className={cn("tabular shrink-0 font-semibold", size === "sm" ? "text-xs" : "text-xs", tone.text)}>
              {fmtScore(value)}
              <span className="text-concrete-500">/{max}</span>
            </span>
          )}
        </div>
      )}
      <div className={cn("w-full overflow-hidden rounded-sharp bg-ink-800", size === "sm" ? "h-1" : "h-1.5")} role="meter" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="h-full rounded-sharp transition-all" style={{ width: `${width}%`, backgroundColor: tone.color, boxShadow: `0 0 8px -1px ${tone.color}` }} />
      </div>
      {hint && <div className="mt-1 text-xs text-concrete-500">{hint}</div>}
    </div>
  );
}
