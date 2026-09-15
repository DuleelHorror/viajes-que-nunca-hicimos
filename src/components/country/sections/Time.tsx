import { useState } from "react";
import { MONTH_RATING_META, MONTHS_ES, monthName } from "@/lib/constants";
import { EVENT_KIND_META, type CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { seasonVoice } from "@/lib/voice";
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
      <SectionHeader id="epoca" title="¿Cuándo me voy?" kicker="13 · Mes a mes, sin el típico «de abril a octubre»">
        <div className="flex flex-col items-end gap-0.5">
          <div className="flex items-center gap-2">
            <span className="label-stencil">Temporada</span>
            <span className="tabular text-2xl font-bold text-neon-cyan glow-cyan">{fmtScore(c.season.value)}</span>
            <WhyPopover title="Meses buenos" breakdown={c.season.breakdown} align="right" />
          </div>
          <span className="text-sm text-concrete-200">{seasonVoice(c.season.value)}</span>
        </div>
      </SectionHeader>
      <Panel className="p-5">
        <MonthStrip months={s.months} selected={sel} onSelect={setSel} festivalMonths={festivalMonths} />
        <MonthLegend className="mt-3" />
      </Panel>
      <Panel className="p-5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl">{monthName(m.month)}</h3>
          <Badge className={meta.badge}>{meta.label}</Badge>
          <span className="tabular text-base text-concrete-200">
            🌡 {m.tempMin}…{m.tempMax} °C
          </span>
          <span className="text-sm text-concrete-400">
            lluvia {m.precip} · {m.snow ? "nieve posible ❄" : "sin nieve"}
            {m.daylightHours != null && ` · ${m.daylightHours} h de luz`} · turistas: {m.crowds} · precios: {m.prices}
          </span>
        </div>
        <ul className="mt-3 space-y-1.5 text-base text-concrete-100">
          {m.reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {m.weatherAdds && (
          <div className="mt-3 rounded-sharp border border-neon-lime/40 bg-neon-lime/10 px-3 py-2 text-base text-lime-100">
            ✨ Aquí el clima suma: {m.weatherAdds}
          </div>
        )}
        <div className="mt-2 space-y-1 text-sm text-concrete-300">
          {m.closures && <div>🚧 Cerrado o a medio gas: {m.closures}</div>}
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
      <SectionHeader id="eventos" title="Qué pasa cada mes" kicker="14 · Fiestas, cierres y avisos" />
      <Panel className="p-5">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {MONTHS_ES.map((name, i) => (
            <div key={name} className="rounded-sharp border border-ink-800 bg-ink-900/40 p-3">
              <div className="label-stencil mb-1">{name}</div>
              {byMonth[i].length === 0 ? (
                <div className="text-sm text-concrete-500">Nada especial</div>
              ) : (
                <ul className="space-y-1">
                  {byMonth[i].map((e, j) => (
                    <li key={j} className="text-sm text-concrete-200">
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
          <div className="label-stencil mb-2">🔥 Los festivales que justifican mirar el calendario</div>
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
