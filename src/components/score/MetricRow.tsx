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

/** Fila: etiqueta · barra · valor · (¿por qué?) */
export function MetricRow({ label, value, max = 10, invert, breakdown, hint, className }: MetricRowProps) {
  return (
    <div className={cn("flex items-end gap-3", className)}>
      <ScoreBar label={label} value={value} max={max} invert={invert} hint={hint} className="flex-1" />
      {breakdown && breakdown.length > 0 && <WhyPopover title={label} breakdown={breakdown} align="right" className="mb-0.5" />}
    </div>
  );
}
