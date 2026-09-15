import { useState } from "react";
import { MONTH_RATING_META, MONTHS_ES, monthName } from "@/lib/constants";
import { EVENT_KIND_META, type CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { WhyPopover } from "@/components/score/WhyPopover";
import { MonthLegend, MonthStrip } from "@/components/charts/MonthStrip";
import { FestivalCard } from "@/components/festivals/FestivalCard";

export function BestTimeSection({ c }: { c: ScoredCountry }) {
  const s = c.summary;
  const firstExcellent = s.months.find((m) => m.rating === "excelente")?.month ?? 1;
  const [sel, setSel] = useState<number>(firstExcellent);
  const m = s.months.find((x) => x.month === sel)!;
  const meta = MONTH_RATING_META[m.rating];
  const festivalMonths = s.festivals.map((f) => f.month);
  return (
    <section className="space-y-4">
      <SectionHeader id="epoca" title="Mejor época para ir" kicker="13 · Mes a mes">
        <div className="flex items-center gap-2 text-sm">
          <span className="label-stencil">Temporada</span>
          <span className="tabular text-xl font-bold text-neon-cyan glow-cyan">{fmtScore(c.season.value)}</span>
          <WhyPopover title="Meses buenos" breakdown={c.season.breakdown} align="right" />
        </div>
      </SectionHeader>
      <Panel className="p-5">
        <MonthStrip months={s.months} selected={sel} onSelect={setSel} festivalMonths={festivalMonths} />
        <MonthLegend className="mt-3" />
      </Panel>
      <Panel className="p-5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl">{monthName(m.month)}</h3>
          <Badge className={meta.badge}>{meta.label}</Badge>
          <span className="tabular text-sm text-concrete-300">
            {m.tempMin}…{m.tempMax} °C
          </span>
          <span className="text-xs text-concrete-400">
            lluvia {m.precip} · {m.snow ? "nieve ❄" : "sin nieve"}
            {m.daylightHours != null && ` · ${m.daylightHours} h de luz`} · turistas {m.crowds} · precios {m.prices}
          </span>
        </div>
        <ul className="mt-3 list-disc space-y-0.5 pl-5 text-sm text-concrete-300">
          {m.reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {m.weatherAdds && (
          <div className="mt-3 rounded-sharp border border-neon-lime/40 bg-neon-lime/10 px-3 py-2 text-sm text-lime-200">
            ✨ El clima suma: {m.weatherAdds}
          </div>
        )}
        <div className="mt-2 space-y-1 text-xs text-concrete-400">
          {m.closures && <div>🚧 Cierres: {m.closures}</div>}
          {m.transport && <div>🚆 Transporte: {m.transport}</div>}
        </div>
      </Panel>
    </section>
  );
}

export function EventsSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const byMonth = MONTHS_ES.map((_, i) => d.events.entries.filter((e) => e.month === i + 1));
  const festivals = c.summary.festivals;
  return (
    <section className="space-y-4">
      <SectionHeader id="eventos" title="Eventos del año" kicker="14 · Calendario" />
      <Panel className="p-5">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {MONTHS_ES.map((name, i) => (
            <div key={name} className="rounded-sharp border border-ink-800 bg-ink-900/40 p-2">
              <div className="label-stencil mb-1">{name}</div>
              {byMonth[i].length === 0 ? (
                <div className="text-[11px] text-concrete-600">—</div>
              ) : (
                <ul className="space-y-0.5">
                  {byMonth[i].map((e, j) => (
                    <li key={j} className="text-[11px] text-concrete-300">
                      <span aria-hidden>{EVENT_KIND_META[e.kind].emoji}</span> {e.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Panel>
      {festivals.length > 0 && (
        <div>
          <div className="label-stencil mb-2">🔥 Festivales extraños, paganos, macabros o espectaculares</div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {festivals.map((f) => (
              <FestivalCard key={f.id} f={f} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
