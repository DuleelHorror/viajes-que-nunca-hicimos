import type { Contribution } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";
import { WhyPopover } from "@/components/score/WhyPopover";

interface FichaScore {
  label: string;
  value: number;
  /** true si 10 es malo: la cifra no brilla en cian */
  invert?: boolean;
  voice?: string;
  breakdown?: Contribution[];
}

interface FichaProps {
  id: string;
  n: string;
  title: string;
  emoji?: string;
  score?: FichaScore;
  children: React.ReactNode;
  className?: string;
}

/**
 * Tarjeta de sección "práctica" (pasta, papeles, seguridad...). Es una sección de pleno derecho
 * (ancla para la navegación) pero vive en una rejilla de dos columnas: cabecera con número de
 * sección, título y nota, y el contenido debajo. Así siete secciones caben en el espacio de tres.
 */
export function Ficha({ id, n, title, emoji, score, children, className }: FichaProps) {
  return (
    <section id={id} className={cn("panel flex scroll-mt-28 flex-col p-4 sm:p-5", className)}>
      <header className="mb-3 flex flex-col gap-2 border-b border-ink-800 pb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <div className="label-stencil">
            <span className="tabular text-concrete-500">{n}</span>
            {emoji && (
              <span className="ml-1.5" aria-hidden>
                {emoji}
              </span>
            )}
          </div>
          <h2 className="mt-0.5 text-xl leading-tight">{title}</h2>
        </div>
        {score && (
          <div className="flex shrink-0 flex-col items-start text-left sm:items-end sm:text-right">
            <div className="flex items-center gap-1.5">
              <span className={cn("tabular text-2xl font-bold leading-none", score.invert ? "text-concrete-50" : "text-neon-cyan glow-cyan")}>{fmtScore(score.value)}</span>
              <span className="text-xs text-concrete-500">/10</span>
              {score.breakdown && <WhyPopover title={score.label} breakdown={score.breakdown} align="right" compact />}
            </div>
            <div className="label-stencil mt-0.5 text-concrete-500">{score.label}</div>
            {score.voice && <div className="mt-0.5 max-w-[20rem] text-xs leading-snug text-concrete-300 sm:max-w-[16rem]">{score.voice}</div>}
          </div>
        )}
      </header>
      <div className="flex-1">{children}</div>
    </section>
  );
}
