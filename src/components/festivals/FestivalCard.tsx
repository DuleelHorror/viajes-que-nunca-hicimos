import { Link } from "react-router-dom";
import { CATEGORY_META, monthName } from "@/lib/constants";
import type { Festival } from "@/lib/schema";
import { fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";
import { CategoryBadge } from "@/components/ui/Badge";
import { Flag } from "@/components/ui/Flag";
import { ScoreBar } from "@/components/score/ScoreBar";
import { SourceFooter } from "@/components/score/SourceFooter";

interface FestivalCardProps {
  f: Festival & { countryId?: string; countryName?: string; flag?: string };
  className?: string;
  showCountry?: boolean;
}

export function FestivalCard({ f, className, showCountry }: FestivalCardProps) {
  const cat = CATEGORY_META[f.category];
  return (
    <article className={cn("panel flex flex-col p-4", f.planTripAround && "border-orange-500/40", className)} style={{ ["--glow" as string]: `${cat.color}66` }}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="label-stencil" style={{ color: cat.color }}>
            {monthName(f.month)} · {f.dateApprox}
          </div>
          <h3 className="text-base leading-tight">{f.name}</h3>
          <div className="text-xs text-concrete-400">
            {showCountry && f.countryId && (
              <Link to={`/pais/${f.countryId}`} className="mr-1 inline-flex items-center gap-1 hover:text-neon-cyan">
                {f.flag && <Flag code={f.flag} name={f.countryName ?? ""} size={11} />} {f.countryName} ·
              </Link>
            )}
            {f.city}, {f.regionName} · {f.durationDays} {f.durationDays === 1 ? "día" : "días"}
          </div>
        </div>
        <CategoryBadge category={f.category} short />
      </div>
      <p className="mt-2 text-sm text-concrete-200">{f.whatHappens}</p>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
        <ScoreBar label="Rareza" value={f.scores.rareza} size="sm" />
        <ScoreBar label="Espectacularidad" value={f.scores.espectacularidad} size="sm" />
        <ScoreBar label="Fácil de llegar" value={f.scores.facilidadAcceso} size="sm" />
        <ScoreBar label="Sin guiris (10 = petado)" value={f.scores.nivelTurismo} size="sm" invert />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        {f.planTripAround ? (
          <span className="rounded-sharp border border-orange-500/50 bg-orange-500/10 px-1.5 py-0.5 font-semibold text-orange-200">🔥 Monta el viaje alrededor de esto</span>
        ) : (
          <span className="rounded-sharp border border-ink-700 px-1.5 py-0.5 text-concrete-300">Si coincide, bonus</span>
        )}
        {f.needsBooking && <span className="text-amber-300">🎟 {f.needsBooking}</span>}
      </div>
      {f.links && f.links.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {f.links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="text-concrete-400 underline decoration-ink-600 hover:text-neon-cyan">
              {l.label}
            </a>
          ))}
        </div>
      )}
      <SourceFooter meta={f.meta} className="mt-auto" />
      <span className="sr-only">{fmtScore(f.scores.rareza)}</span>
    </article>
  );
}
