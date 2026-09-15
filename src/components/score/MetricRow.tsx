import { cn } from "@/lib/utils";
import type { Contribution } from "@/lib/scoring";
import { ScoreBar } from "./ScoreBar";
import { WhyPopover } from "./WhyPopover";

interface MetricRowProps {
  label: string;
  value: number;
  max?: number;
  invert?: boolean;
  breakdown?: Contribution[];
  hint?: React.ReactNode;
  className?: string;
}

/** Fila: etiqueta · barra · valor, y debajo la frase de voz con el "¿y esto por qué?" a la derecha. */
export function MetricRow({ label, value, max = 10, invert, breakdown, hint, className }: MetricRowProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <ScoreBar label={label} value={value} max={max} invert={invert} />
      {(hint || (breakdown && breakdown.length > 0)) && (
        <div className="mt-1 flex items-start justify-between gap-3">
          {hint ? <div className="min-w-0 flex-1 text-xs leading-snug text-concrete-400">{hint}</div> : <span />}
          {breakdown && breakdown.length > 0 && <WhyPopover title={label} breakdown={breakdown} align="right" className="shrink-0" />}
        </div>
      )}
    </div>
  );
}
