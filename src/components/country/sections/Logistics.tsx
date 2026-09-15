import { ExternalLink } from "lucide-react";
import { ENTRY_META, ENTRY_TYPES, MODE_META } from "@/lib/constants";
import { COST_CONCEPT_LABEL, RAIL_KIND_LABEL, type CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtEur, fmtFx, fmtHours, fmtScore } from "@/lib/format";
import { Panel, SectionHeader, Stat } from "@/components/ui/Card";
import { Badge, ModeBadge } from "@/components/ui/Badge";
import { ScoreBar } from "@/components/score/ScoreBar";
import { MetricRow } from "@/components/score/MetricRow";
import { WhyPopover } from "@/components/score/WhyPopover";
import { TrafficLight } from "@/components/score/TrafficLight";
import { SourceFooter } from "@/components/score/SourceFooter";

export function cityName(d: CountryDetail, id: string): string {
  return d.cities.find((c) => c.id === id)?.name ?? id;
}

export function TransportSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const rail = c.summary.inputs.rail;
  const t = d.transport;
  return (
    <section className="space-y-4">
      <SectionHeader id="transporte" title="Transporte público" kicker="04 · Moverse sin coche">
        <div className="flex items-center gap-2 text-sm">
          <span className="label-stencil">Public transport score</span>
          <span className="tabular text-xl font-bold text-neon-cyan glow-cyan">{fmtScore(c.transport.value)}</span>
          <WhyPopover title="Transporte público" breakdown={c.transport.breakdown} align="right" />
        </div>
      </SectionHeader>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel className="p-5">
          <div className="label-stencil mb-2">🚆 Ferrocarril · {fmtScore(c.rail.value)}/10</div>
          <p className="text-sm text-concrete-300">{t.railText}</p>
          <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
            <ScoreBar label="Calidad" value={rail.calidad} size="sm" />
            <ScoreBar label="Cobertura" value={rail.cobertura} size="sm" />
            <ScoreBar label="Frecuencia" value={rail.frecuencia} size="sm" />
            <ScoreBar label="Puntualidad" value={rail.puntualidad} size="sm" />
            <ScoreBar label="Precio (10 = barato)" value={rail.precio} size="sm" />
            <ScoreBar label="Comprar billetes" value={rail.facilidadBilletes} size="sm" />
            <ScoreBar label="Compra online" value={rail.online} size="sm" />
            <ScoreBar label="Trenes nocturnos" value={rail.nocturnos} size="sm" />
            <ScoreBar label="Alta velocidad" value={rail.altaVelocidad} size="sm" />
          </div>
        </Panel>

        <Panel className="p-5">
          <div className="label-stencil mb-2">Corredores útiles para el viajero</div>
          {t.corridorsIntro && <p className="mb-2 text-xs text-concrete-400">{t.corridorsIntro}</p>}
          <ul className="space-y-2">
            {d.railCorridors.map((r) => (
              <li key={r.id} className="rounded-sharp border border-ink-700 bg-ink-900/50 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-concrete-100">{r.name}</span>
                  <Badge className="border-ink-600 text-concrete-300">{RAIL_KIND_LABEL[r.kind]}</Badge>
                </div>
                <div className="mt-1 font-mono text-xs text-neon-cyan">{r.stops.map((s) => cityName(d, s)).join(" → ")}</div>
                <div className="mt-1 text-[11px] text-concrete-400">
                  {r.frequency} · {r.durationNote}
                  {r.price && ` · ${r.price}`} · {r.operator} · {r.booking}
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-5">
          <div className="label-stencil mb-2">🚌 Autobuses interurbanos</div>
          <p className="text-sm text-concrete-300">{t.busText}</p>
          {t.busCompanies.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {t.busCompanies.map((b) => (
                <Badge key={b} className="border-ink-600 text-concrete-200">
                  {b}
                </Badge>
              ))}
            </div>
          )}
          <div className="label-stencil mb-2 mt-4">📱 Apps útiles</div>
          <ul className="space-y-1 text-sm">
            {t.apps.map((a) => (
              <li key={a.name} className="flex gap-2">
                <span className="shrink-0 font-semibold text-concrete-100">
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-neon-cyan">
                      {a.name} <ExternalLink size={11} />
                    </a>
                  ) : (
                    a.name
                  )}
                </span>
                <span className="text-concrete-400">{a.use}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-5">
          <div className="label-stencil mb-2">🏙 Transporte urbano por ciudad</div>
          <table className="w-full text-xs">
            <tbody>
              {d.cities.map((ct) => (
                <tr key={ct.id} className="border-t border-ink-800">
                  <td className="py-1.5 pr-2 font-semibold text-concrete-100">{ct.name}</td>
                  <td className="py-1.5 pr-2">
                    <span className="flex flex-wrap gap-1">
                      {ct.urban.modes.map((m) => (
                        <span key={m} title={MODE_META[m].label}>
                          {MODE_META[m].emoji}
                        </span>
                      ))}
                    </span>
                  </td>
                  <td className="py-1.5 pr-2 tabular text-concrete-200">{fmtScore(ct.urban.score)}</td>
                  <td className="py-1.5 text-concrete-400">
                    {ct.urban.ticket}
                    {ct.urban.app && ` · ${ct.urban.app}`}
                    {ct.urban.note && ` · ${ct.urban.note}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>

      <Panel className="panel-neon p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="label-stencil text-neon-cyan/80">Viabilidad sin coche</div>
            <div className="mt-1 flex items-center gap-3">
              <span className="font-display text-4xl font-bold tabular text-concrete-50">{fmtScore(c.noCar.value)}</span>
              <span className="text-concrete-500">/ 10</span>
              <WhyPopover title="Viabilidad sin coche" breakdown={c.noCar.breakdown} />
            </div>
          </div>
          <TrafficLight light={c.noCar.light} />
        </div>
        <p className="mt-3 text-sm text-concrete-200">{t.noCarVerdictText}</p>
        {t.hardWithoutCar.length > 0 && (
          <div className="mt-3">
            <div className="label-stencil mb-1 text-amber-300">Lo que se complica sin coche</div>
            <ul className="list-disc space-y-0.5 pl-5 text-sm text-concrete-300">
              {t.hardWithoutCar.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}
        <SourceFooter meta={t.meta} />
      </Panel>
    </section>
  );
}

export function CostSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const cost = c.summary.inputs.cost;
  const cur = c.summary.facts.currency;
  return (
    <section className="space-y-4">
      <SectionHeader id="coste" title="Nivel de precios" kicker="06 · Coste de viaje">
        <div className="flex items-center gap-2 text-sm">
          <span className="label-stencil">Coste (10 = carísimo)</span>
          <span className="tabular text-xl font-bold text-concrete-50">{fmtScore(c.cost.value)}</span>
          <WhyPopover title="Coste de viaje" breakdown={c.cost.breakdown} align="right" />
        </div>
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Panel className="p-5">
          <div className="label-stencil mb-2">Estimaciones en euros (orientativas)</div>
          <table className="w-full text-sm">
            <tbody>
              {d.cost.table.map((r) => (
                <tr key={r.concept} className="border-t border-ink-800">
                  <td className="py-1.5 pr-2 text-concrete-300">
                    {COST_CONCEPT_LABEL[r.concept]}
                    {r.note && <span className="ml-1 text-[11px] text-concrete-500">{r.note}</span>}
                  </td>
                  <td className="py-1.5 text-right tabular font-semibold text-concrete-100">{fmtEur(r.eur, r.eur < 5 ? 2 : 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 font-mono text-xs text-neon-cyan">
            {cur.name} · {fmtFx(c.summary.fx.rate, cur.code)}
          </div>
          <SourceFooter meta={d.cost.meta} />
        </Panel>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Low cost" value={`${fmtEur(cost.daily.low)}`} hint="por día" accent="lime" />
            <Stat label="Normal" value={`${fmtEur(cost.daily.normal)}`} hint="por día" accent="cyan" />
            <Stat label="Cómodo" value={`${fmtEur(cost.daily.comfortable)}`} hint="por día" accent="magenta" />
          </div>
          {d.cost.tips.length > 0 && (
            <Panel className="p-5">
              <div className="label-stencil mb-2">Consejos de bolsillo</div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-300">
                {d.cost.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Panel>
          )}
        </div>
      </div>
    </section>
  );
}

export function FlightsSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  return (
    <section className="space-y-4">
      <SectionHeader id="vuelos" title="Vuelos desde Barcelona (BCN)" kicker="07 · Llegar">
        <div className="flex items-center gap-2 text-sm">
          <span className="label-stencil">Facilidad desde BCN</span>
          <span className="tabular text-xl font-bold text-neon-cyan glow-cyan">{fmtScore(c.bcn.value)}</span>
          <WhyPopover title="Facilidad desde Barcelona" breakdown={c.bcn.breakdown} align="right" />
        </div>
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel className="p-5">
          <div className="label-stencil mb-2">✈️ Vuelos directos</div>
          {d.flights.directRoutes.length === 0 ? (
            <p className="text-sm text-amber-300">No hay vuelo directo regular desde Barcelona.</p>
          ) : (
            <table className="w-full text-sm">
              <tbody>
                {d.flights.directRoutes.map((r) => (
                  <tr key={r.to} className="border-t border-ink-800">
                    <td className="py-1.5 pr-2 font-semibold text-concrete-100">
                      {r.to}
                      {r.airport && <span className="ml-1 font-mono text-[11px] text-concrete-500">{r.airport}</span>}
                    </td>
                    <td className="py-1.5 pr-2 text-concrete-300">
                      {r.airlines.join(", ")}
                      {r.lowCost && <Badge className="ml-1 border-lime-500/40 text-lime-200">low-cost</Badge>}
                      {r.seasonal && <Badge className="ml-1 border-amber-500/40 text-amber-200">estacional</Badge>}
                    </td>
                    <td className="py-1.5 text-right tabular text-concrete-200">
                      {fmtHours(r.hours)} · {r.weekly}/sem
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="label-stencil mb-2 mt-4">Con una escala</div>
          <ul className="space-y-1 text-sm text-concrete-300">
            {d.flights.oneStop.map((o) => (
              <li key={o.via}>
                vía <span className="font-semibold text-concrete-100">{o.via}</span> · {o.airlines.join(", ")} · ≈ {fmtHours(o.totalHours)} en total
              </li>
            ))}
          </ul>
          <SourceFooter meta={d.flights.meta} />
        </Panel>
        <Panel className="p-5">
          <div className="label-stencil mb-2">Consejos</div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-300">
            {d.flights.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Panel>
      </div>
    </section>
  );
}

export function DocsSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const docs = c.summary.inputs.docs;
  const m = ENTRY_META[docs.entry];
  return (
    <section className="space-y-4">
      <SectionHeader id="documentacion" title="Documentación (nacionalidad española)" kicker="08 · Papeles" />
      <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
        <Panel className="p-5 lg:w-80">
          <div className="label-stencil mb-2">Qué necesitas</div>
          <div className="flex flex-wrap gap-1.5">
            {ENTRY_TYPES.map((e) => (
              <span
                key={e}
                className="rounded-sharp border px-2 py-1 text-xs font-semibold"
                style={
                  e === docs.entry
                    ? { borderColor: `${ENTRY_META[e].color}99`, backgroundColor: `${ENTRY_META[e].color}1f`, color: ENTRY_META[e].color }
                    : { borderColor: "#2a2d31", color: "#4f545b" }
                }
              >
                {ENTRY_META[e].short}
              </span>
            ))}
          </div>
          <div className="mt-3 text-lg font-semibold" style={{ color: m.color }}>
            {m.label}
          </div>
          <dl className="mt-3 space-y-1 text-sm">
            <div className="flex justify-between gap-2">
              <dt className="text-concrete-400">Estancia máxima</dt>
              <dd className="tabular text-concrete-100">{docs.maxStayDays} días</dd>
            </div>
            {docs.passportValidityMonths != null && (
              <div className="flex justify-between gap-2">
                <dt className="text-concrete-400">Validez del pasaporte</dt>
                <dd className="text-concrete-100">{docs.passportValidityMonths === 0 ? "vigente durante la estancia" : `≥ ${docs.passportValidityMonths} meses`}</dd>
              </div>
            )}
            <div className="flex justify-between gap-2">
              <dt className="text-concrete-400">Seguro obligatorio</dt>
              <dd className="text-concrete-100">{docs.insuranceMandatory ? "Sí" : "No"}</dd>
            </div>
          </dl>
        </Panel>
        <Panel className="p-5">
          <p className="text-sm text-concrete-200">{d.docs.text}</p>
          {d.docs.steps && (
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-concrete-300">
              {d.docs.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          )}
          {d.docs.warnings && d.docs.warnings.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm text-amber-300">
              {d.docs.warnings.map((w) => (
                <li key={w}>⚠️ {w}</li>
              ))}
            </ul>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            {d.docs.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-sharp border border-ink-600 px-2 py-1 text-xs text-concrete-200 hover:border-neon-cyan/60 hover:text-neon-cyan">
                {l.label} <ExternalLink size={11} />
              </a>
            ))}
          </div>
          <SourceFooter meta={d.docs.meta} />
        </Panel>
      </div>
    </section>
  );
}

export function LogisticsModes({ modes }: { modes: Array<keyof typeof MODE_META> }) {
  return (
    <div className="flex flex-wrap gap-1">
      {modes.map((m) => (
        <ModeBadge key={m} mode={m} />
      ))}
    </div>
  );
}

export { MetricRow };
