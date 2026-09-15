import type { Contribution } from "@/lib/scoring";
import { fmtScore, pct } from "@/lib/format";
import { cn } from "@/lib/utils";
import { scoreTone } from "./ScoreBar";
import { WhyPopover } from "./WhyPopover";

interface ScoreTileProps {
  label: string;
  value: number;
  max?: number;
  /** true si 10 es malo (coste, dificultad de idioma) */
  invert?: boolean;
  voice?: string;
  breakdown?: Contribution[];
  className?: string;
}

/**
 * Nota compacta: etiqueta, cifra grande, barra fina y la frase de voz. El "¿por qué?" es un icono en
 * la esquina para que ocho notas juntas no sean ocho botones iguales.
 */
export function ScoreTile({ label, value, max = 10, invert, voice, breakdown, className }: ScoreTileProps) {
  const tone = scoreTone(invert ? max - value : value);
  return (
    <div className={cn("relative rounded-sharp border border-ink-700/70 bg-ink-900/50 px-3 py-2.5", className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="label-stencil leading-tight">{label}</div>
        {breakdown && breakdown.length > 0 && <WhyPopover title={label} breakdown={breakdown} align="right" compact className="-mr-1 -mt-0.5" />}
      </div>
      <div className={cn("mt-1 text-2xl font-semibold leading-none tabular", tone.text)}>
        {fmtScore(value)}
        <span className="ml-0.5 text-xs font-normal text-concrete-500">/{max}</span>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-sharp bg-ink-800" role="meter" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="h-full rounded-sharp" style={{ width: `${pct(value, max)}%`, backgroundColor: tone.color }} />
      </div>
      {voice && <div className="mt-1.5 text-xs leading-snug text-concrete-400">{voice}</div>}
    </div>
  );
}
