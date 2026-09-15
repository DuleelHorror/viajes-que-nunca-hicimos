import { CATEGORY_META, monthName } from "@/lib/constants";
import type { Festival } from "@/lib/schema";
import { fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";
import { scoreTone } from "@/components/score/ScoreBar";
import { SourceFooter } from "@/components/score/SourceFooter";

/**
 * Festival en una fila plegable: fecha, nombre, sitio y dos cifras a la vista; el qué-pasa, la
 * reserva y las fuentes, al abrir. Para la ficha de país, donde la tarjeta completa era demasiado.
 */
export function FestivalRow({ f, className }: { f: Festival; className?: string }) {
  const cat = CATEGORY_META[f.category];
  const rare = scoreTone(f.scores.rareza);
  const show = scoreTone(f.scores.espectacularidad);
  return (
    <details className={cn("group rounded-sharp border border-ink-800 bg-ink-900/40", f.planTripAround && "border-orange-500/30", className)}>
      <summary className="flex cursor-pointer list-none flex-wrap items-center gap-x-3 gap-y-1 px-3 py-2.5 hover:bg-ink-850/60 [&::-webkit-details-marker]:hidden">
        <span className="w-24 shrink-0 text-xs font-semibold" style={{ color: cat.color }}>
          {monthName(f.month)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="text-base font-semibold text-concrete-50">{f.name}</span>
          <span className="ml-2 text-xs text-concrete-400">
            {f.city} · {f.dateApprox}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-3 text-xs tabular">
          <span title="Rareza">
            <span className="text-concrete-500">raro </span>
            <span style={{ color: rare.color }}>{fmtScore(f.scores.rareza)}</span>
          </span>
          <span title="Espectacularidad">
            <span className="text-concrete-500">espect. </span>
            <span style={{ color: show.color }}>{fmtScore(f.scores.espectacularidad)}</span>
          </span>
          {f.planTripAround && (
            <span className="rounded-sharp border border-orange-500/50 bg-orange-500/10 px-1.5 py-0.5 font-sans font-semibold text-orange-200" title="Monta el viaje alrededor de esto">
              🔥 el viaje va aquí
            </span>
          )}
        </span>
      </summary>
      <div className="border-t border-ink-800 px-3 pb-3 pt-2">
        <p className="text-sm text-concrete-200">{f.whatHappens}</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-concrete-400">
          <span>
            {f.regionName} · {f.durationDays} {f.durationDays === 1 ? "día" : "días"} · {cat.emoji} {cat.label}
          </span>
          <span>fácil de llegar {fmtScore(f.scores.facilidadAcceso)}/10</span>
          <span>turismo {fmtScore(f.scores.nivelTurismo)}/10</span>
        </div>
        {f.needsBooking && <p className="mt-2 text-xs text-amber-300">🎟 {f.needsBooking}</p>}
        {f.links && f.links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {f.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="text-concrete-400 underline decoration-ink-600 hover:text-neon-cyan">
                {l.label}
              </a>
            ))}
          </div>
        )}
        <SourceFooter meta={f.meta} />
      </div>
    </details>
  );
}
