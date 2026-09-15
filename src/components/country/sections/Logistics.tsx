import { ExternalLink } from "lucide-react";
import { ENTRY_META, ENTRY_TYPES, MODE_META } from "@/lib/constants";
import { COST_CONCEPT_LABEL, RAIL_KIND_LABEL, type CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtEur, fmtFx, fmtHours, fmtScore } from "@/lib/format";
import { bcnVoice, costVoice, noCarVoice, transportVoice } from "@/lib/voice";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Badge, ModeBadge } from "@/components/ui/Badge";
import { ScoreBar } from "@/components/score/ScoreBar";
import { MetricRow } from "@/components/score/MetricRow";
import { WhyPopover } from "@/components/score/WhyPopover";
import { TrafficLight } from "@/components/score/TrafficLight";
import { SourceFooter } from "@/components/score/SourceFooter";

export function cityName(d: CountryDetail, id: string): string {
  return d.cities.find((c) => c.id === id)?.name ?? id;
}

function ScoreHead({ label, value, breakdown, voice }: { label: string; value: number; breakdown?: ScoredCountry["transport"]["breakdown"]; voice?: string }) {
  return (
    <div className="flex flex-col items-start gap-0.5 sm:items-end">
      <div className="flex items-center gap-2">
        <span className="label-stencil">{label}</span>
        <span className="tabular text-2xl font-bold text-neon-cyan glow-cyan">{fmtScore(value)}</span>
        {breakdown && <WhyPopover title={label} breakdown={breakdown} align="right" />}
      </div>
      {voice && <span className="text-sm text-concrete-200">{voice}</span>}
    </div>
  );
}

export function TransportSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const rail = c.summary.inputs.rail;
  const t = d.transport;
  return (
    <section className="space-y-4">
      <SectionHeader id="transporte" title="Moverse por el país" kicker="04 · Sin coche, que es lo nuestro">
        <ScoreHead label="Transporte público" value={c.transport.value} breakdown={c.transport.breakdown} voice={transportVoice(c.transport.value)} />
      </SectionHeader>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel className="p-5">
          <div className="label-stencil mb-2">🚆 El tren · {fmtScore(c.rail.value)}/10</div>
          <p className="text-base text-concrete-200">{t.railText}</p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            <ScoreBar label="Calidad" value={rail.calidad} size="sm" />
            <ScoreBar label="Llega a los sitios" value={rail.cobertura} size="sm" />
            <ScoreBar label="Frecuencia" value={rail.frecuencia} size="sm" />
            <ScoreBar label="Puntualidad" value={rail.puntualidad} size="sm" />
            <ScoreBar label="Barato (10 = regalado)" value={rail.precio} size="sm" />
            <ScoreBar label="Comprar billete sin sufrir" value={rail.facilidadBilletes} size="sm" />
            <ScoreBar label="Compra online" value={rail.online} size="sm" />
            <ScoreBar label="Nocturnos" value={rail.nocturnos} size="sm" />
            <ScoreBar label="Alta velocidad" value={rail.altaVelocidad} size="sm" />
          </div>
        </Panel>

        <Panel className="p-5">
          <div className="label-stencil mb-2">Las líneas que te importan</div>
          {t.corridorsIntro && <p className="mb-3 text-sm text-concrete-300">{t.corridorsIntro}</p>}
          <ul className="space-y-2">
            {d.railCorridors.map((r) => (
              <li key={r.id} className="rounded-sharp border border-ink-700 bg-ink-900/50 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-base font-semibold text-concrete-50">{r.name}</span>
                  <Badge className="border-ink-600 text-concrete-300">{RAIL_KIND_LABEL[r.kind]}</Badge>
                </div>
                <div className="mt-1 text-sm font-medium text-neon-cyan">{r.stops.map((s) => cityName(d, s)).join(" → ")}</div>
                <div className="mt-1 text-sm text-concrete-300">
                  {r.frequency} · {r.durationNote}
                  {r.price && ` · ${r.price}`}
                </div>
                <div className="text-xs text-concrete-400">
                  {r.operator} · {r.booking}
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-5">
          <div className="label-stencil mb-2">🚌 Buses y demás</div>
          <p className="text-base text-concrete-200">{t.busText}</p>
          {t.busCompanies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {t.busCompanies.map((b) => (
                <Badge key={b} className="border-ink-600 text-concrete-200">
                  {b}
                </Badge>
              ))}
            </div>
          )}
          <div className="label-stencil mb-2 mt-5">📱 Apps que te salvan</div>
          <ul className="space-y-1.5 text-sm">
            {t.apps.map((a) => (
              <li key={a.name} className="flex gap-2">
                <span className="shrink-0 font-semibold text-concrete-50">
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-neon-cyan">
                      {a.name} <ExternalLink size={11} />
                    </a>
                  ) : (
                    a.name
                  )}
                </span>
                <span className="text-concrete-300">{a.use}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-5">
          <div className="label-stencil mb-2">🏙 Dentro de cada ciudad</div>
          <ul className="divide-y divide-ink-800">
            {d.cities.map((ct) => (
              <li key={ct.id} className="py-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-base font-semibold text-concrete-50">{ct.name}</span>
                  <span className="flex gap-1 text-sm">
                    {ct.urban.modes.map((m) => (
                      <span key={m} title={MODE_META[m].label}>
                        {MODE_META[m].emoji}
                      </span>
                    ))}
                  </span>
                  <span className="tabular text-sm text-concrete-100">{fmtScore(ct.urban.score)}/10</span>
                </div>
                <div className="text-sm text-concrete-300">
                  {ct.urban.ticket}
                  {ct.urban.app && ` · ${ct.urban.app}`}
                  {ct.urban.note && ` · ${ct.urban.note}`}
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="panel-neon p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="label-stencil text-neon-cyan/90">¿Se puede sin coche?</div>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-display text-4xl font-bold tabular text-concrete-50">{fmtScore(c.noCar.value)}</span>
              <span className="text-concrete-400">/ 10</span>
              <WhyPopover title="Moverse sin coche" breakdown={c.noCar.breakdown} />
              <span className="basis-full text-base font-medium text-concrete-100 sm:basis-auto">{noCarVoice(c.noCar.value)}</span>
            </div>
          </div>
          <TrafficLight light={c.noCar.light} />
        </div>
        <p className="mt-3 text-base text-concrete-100">{t.noCarVerdictText}</p>
        {t.hardWithoutCar.length > 0 && (
          <div className="mt-4">
            <div className="label-stencil mb-1 text-amber-300">Donde empieza el circo</div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-200">
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
  const cur = c.summary.facts.currency;
  return (
    <section className="space-y-4">
      <SectionHeader id="coste" title="¿Cuánto me va a costar?" kicker="06 · En euros, para no engañarnos">
        <ScoreHead label="Coste (10 = sangría)" value={c.cost.value} breakdown={c.cost.breakdown} voice={costVoice(c.cost.value)} />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Panel className="p-5">
          <div className="label-stencil mb-2">Precios de andar por casa (aproximados)</div>
          <table className="w-full text-sm">
            <tbody>
              {d.cost.table.map((r) => (
                <tr key={r.concept} className="border-t border-ink-800">
                  <td className="py-2 pr-2 text-concrete-200">
                    {COST_CONCEPT_LABEL[r.concept]}
                    {r.note && <span className="ml-1 text-xs text-concrete-400">{r.note}</span>}
                  </td>
                  <td className="py-2 text-right tabular text-base font-semibold text-concrete-50">{fmtEur(r.eur, r.eur < 5 ? 2 : 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 text-sm font-medium text-neon-cyan">
            {cur.name} · {fmtFx(c.summary.fx.rate, cur.code)}
          </div>
          <SourceFooter meta={d.cost.meta} />
        </Panel>
        <div className="space-y-4">
          <Panel className="panel-neon p-5">
            <div className="label-stencil text-neon-cyan/90">En una frase</div>
            <p className="mt-1 text-base text-concrete-50">{costVoice(c.cost.value)}</p>
          </Panel>
          {d.cost.tips.length > 0 && (
            <Panel className="p-5">
              <div className="label-stencil mb-2">Trucos de bolsillo</div>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-concrete-200">
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
      <SectionHeader id="vuelos" title="Llegar desde Barcelona" kicker="07 · Desde El Prat, que es nuestra casa">
        <ScoreHead label="Facilidad" value={c.bcn.value} breakdown={c.bcn.breakdown} voice={bcnVoice(c.bcn.value)} />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel className="p-5">
          <div className="label-stencil mb-2">✈️ Directos</div>
          {d.flights.directRoutes.length === 0 ? (
            <p className="text-base text-amber-200">No hay directo. Toca escala y llegar con cara de zombi.</p>
          ) : (
            <table className="w-full text-sm">
              <tbody>
                {d.flights.directRoutes.map((r) => (
                  <tr key={r.to} className="border-t border-ink-800">
                    <td className="py-2 pr-2 font-semibold text-concrete-50">
                      {r.to}
                      {r.airport && <span className="ml-1 font-mono text-xs text-concrete-400">{r.airport}</span>}
                    </td>
                    <td className="py-2 pr-2 text-concrete-200">
                      {r.airlines.join(", ")}
                      {r.lowCost && <Badge className="ml-1 border-lime-500/40 text-lime-200">low-cost</Badge>}
                      {r.seasonal && <Badge className="ml-1 border-amber-500/40 text-amber-200">solo temporada</Badge>}
                    </td>
                    <td className="py-2 text-right tabular text-concrete-100">
                      {fmtHours(r.hours)} · {r.weekly}/sem
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="label-stencil mb-2 mt-5">Con una escala</div>
          <ul className="space-y-1 text-sm text-concrete-200">
            {d.flights.oneStop.map((o) => (
              <li key={o.via}>
                vía <span className="font-semibold text-concrete-50">{o.via}</span> · {o.airlines.join(", ")} · unas {fmtHours(o.totalHours)} de puerta a puerta
              </li>
            ))}
          </ul>
          <SourceFooter meta={d.flights.meta} />
        </Panel>
        <Panel className="p-5">
          <div className="label-stencil mb-2">Apuntes de viajero</div>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-concrete-200">
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
      <SectionHeader id="documentacion" title="Papeles" kicker="08 · Con pasaporte español" />
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
                    : { borderColor: "#2a2d31", color: "#6b7280" }
                }
              >
                {ENTRY_META[e].short}
              </span>
            ))}
          </div>
          <div className="mt-3 text-lg font-semibold" style={{ color: m.color }}>
            {m.label}
          </div>
          <dl className="mt-3 space-y-1.5 text-sm">
            <div className="flex justify-between gap-2">
              <dt className="text-concrete-300">Te dejan quedarte</dt>
              <dd className="tabular text-concrete-50">{docs.maxStayDays} días</dd>
            </div>
            {docs.passportValidityMonths != null && (
              <div className="flex justify-between gap-2">
                <dt className="text-concrete-300">Pasaporte</dt>
                <dd className="text-concrete-50">{docs.passportValidityMonths === 0 ? "vigente durante el viaje" : `≥ ${docs.passportValidityMonths} meses de validez`}</dd>
              </div>
            )}
            <div className="flex justify-between gap-2">
              <dt className="text-concrete-300">Seguro obligatorio</dt>
              <dd className="text-concrete-50">{docs.insuranceMandatory ? "Sí" : "No (pero llévalo)"}</dd>
            </div>
          </dl>
        </Panel>
        <Panel className="p-5">
          <p className="text-base text-concrete-100">{d.docs.text}</p>
          {d.docs.steps && (
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-concrete-200">
              {d.docs.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          )}
          {d.docs.warnings && d.docs.warnings.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm text-amber-200">
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
