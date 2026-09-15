import { Link } from "react-router-dom";
import { Scale } from "lucide-react";
import { LIGHT_META, REGION_LABEL, TAG_META } from "@/lib/constants";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useCompareStore } from "@/store/useCompareStore";
import { ScoreRing } from "@/components/score/ScoreRing";
import { VerdictBadge } from "@/components/score/VerdictBadge";
import { ScoreBar } from "@/components/score/ScoreBar";
import { Flag, flagCode } from "@/components/ui/Flag";

export function CountryCard({ c, className }: { c: ScoredCountry; className?: string }) {
  const inCompare = useCompareStore((s) => s.ids.includes(c.id));
  const toggle = useCompareStore((s) => s.toggle);
  const s = c.summary;
  const bestMonths = s.months.filter((m) => m.rating === "excelente").map((m) => m.month);
  return (
    <article className={cn("panel group relative flex flex-col p-4 transition-colors hover:border-ink-500", inCompare && "border-neon-magenta/50", className)}>
      <div className="flex items-start gap-3">
        <Link to={`/pais/${c.id}`} className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Flag code={flagCode(s)} name={s.name} size={22} />
            <div className="min-w-0">
              <h3 className="truncate text-lg leading-tight group-hover:text-neon-cyan">{s.name}</h3>
              <div className="label-stencil truncate">
                {REGION_LABEL[s.region]}
                {s.parentState && ` · ${s.parentState}`}
              </div>
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-xs text-concrete-400">{s.tagline}</p>
        </Link>
        <Link to={`/pais/${c.id}`} className="shrink-0">
          <ScoreRing value={c.duke.value} size={76} stroke={6} sub="DUKE" />
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <VerdictBadge verdict={c.duke.verdict} size="sm" />
        <span className="inline-flex items-center gap-1 rounded-sharp border border-ink-600 px-1.5 py-0.5 text-[11px] text-concrete-200" title="Duración ideal para ti">
          ⏱ <span className="tabular font-semibold">{c.days.ideal} días</span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-sharp border px-1.5 py-0.5 text-[11px]" style={{ borderColor: `${LIGHT_META[c.noCar.light].color}66`, color: LIGHT_META[c.noCar.light].color }} title={LIGHT_META[c.noCar.light].label}>
          {LIGHT_META[c.noCar.light].emoji} sin coche {fmtScore(c.noCar.value)}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
        <ScoreBar label="Circo" value={c.circo.value} size="sm" />
        <ScoreBar label="Coste" value={c.cost.value} size="sm" invert />
        <ScoreBar label="Transporte" value={c.transport.value} size="sm" />
        <ScoreBar label="Seguridad" value={c.safety.value} size="sm" />
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {c.tags.slice(0, 6).map((t) => (
          <span key={t} className="rounded-sharp border border-ink-700 bg-ink-900/60 px-1.5 py-0.5 text-[10px] text-concrete-400" title={TAG_META[t].label}>
            {TAG_META[t].emoji} {TAG_META[t].label}
          </span>
        ))}
        {c.tags.length > 6 && <span className="px-1 text-[10px] text-concrete-500">+{c.tags.length - 6}</span>}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-ink-800 pt-2 text-[11px] text-concrete-500">
        <span>
          {s.placeStats.total} sitios · {s.festivals.length} festivales
          {bestMonths.length > 0 && ` · mejor: ${bestMonths.length} meses`}
        </span>
        <button
          type="button"
          onClick={() => toggle(c.id)}
          className={cn("inline-flex items-center gap-1 rounded-sharp border px-1.5 py-0.5 transition-colors", inCompare ? "border-neon-magenta/60 bg-neon-magenta/10 text-neon-magenta" : "border-ink-600 text-concrete-400 hover:text-concrete-100")}
          aria-pressed={inCompare}
        >
          <Scale size={11} /> {inCompare ? "En comparación" : "Comparar"}
        </button>
      </div>
    </article>
  );
}
