import { ExternalLink } from "lucide-react";
import { ENTRY_META, ENTRY_TYPES, MODE_META } from "@/lib/constants";
import { COST_CONCEPT_LABEL, RAIL_KIND_LABEL, type CountryDetail, type RailCorridor } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtEur, fmtFx, fmtHours, fmtScore } from "@/lib/format";
import { bcnVoice, costVoice, noCarVoice, transportVoice } from "@/lib/voice";
import { cn } from "@/lib/utils";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Badge, ModeBadge } from "@/components/ui/Badge";
import { Clamp, Disclosure } from "@/components/ui/Disclosure";
import { ScoreBar, scoreTone } from "@/components/score/ScoreBar";
import { MetricRow } from "@/components/score/MetricRow";
import { WhyPopover } from "@/components/score/WhyPopover";
import { TrafficLight } from "@/components/score/TrafficLight";
import { SourceFooter } from "@/components/score/SourceFooter";
import { Ficha } from "../Ficha";

export function cityName(d: CountryDetail, id: string): string {
  return d.cities.find((c) => c.id === id)?.name ?? id;
}

function ScoreHead({ label, value, breakdown, voice }: { label: string; value: number; breakdown?: ScoredCountry["transport"]["breakdown"]; voice?: string }) {
  return (
    <div className="flex flex-col items-start gap-0.5 sm:items-end">
      <div className="flex items-center gap-2">
        <span className="label-stencil">{label}</span>
        <span className="tabular text-2xl font-bold text-neon-cyan glow-cyan">{fmtScore(value)}</span>
        {breakdown && <WhyPopover title={label} breakdown={breakdown} align="right" compact />}
      </div>
      {voice && <span className="text-sm text-concrete-200">{voice}</span>}
    </div>
  );
}

const KIND_CLS: Record<RailCorridor["kind"], string> = {
  "alta-velocidad": "border-neon-cyan/50 text-neon-cyan",
  intercity: "border-cyan-700/60 text-cyan-200",
  regional: "border-ink-600 text-concrete-300",
  nocturno: "border-neon-violet/50 text-violet-200",
  turistico: "border-amber-500/40 text-amber-200",
};

/** Corredor ferroviario en una fila: lo que decide (trayecto, tiempo, precio) a la vista; cómo reservar, al abrir. */
function CorridorRow({ r, d }: { r: RailCorridor; d: CountryDetail }) {
  const q = scoreTone(r.quality);
  return (
    <details className="group border-t border-ink-800 first:border-0">
      <summary className="cursor-pointer list-none py-2 hover:bg-ink-850/40 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Badge className={cn("shrink-0", KIND_CLS[r.kind])}>{RAIL_KIND_LABEL[r.kind]}</Badge>
              <span className="text-sm font-semibold text-concrete-50">{r.name}</span>
            </div>
            <div className="mt-0.5 text-xs text-neon-cyan/90">{r.stops.map((s) => cityName(d, s)).join(" → ")}</div>
            <div className="mt-0.5 text-xs text-concrete-400">
              {r.durationNote}
              {r.price && ` · ${r.price}`} · {r.frequency}
            </div>
          </div>
          <span className="shrink-0 tabular text-sm" style={{ color: q.color }} title="Calidad de la línea">
            {fmtScore(r.quality)}
          </span>
        </div>
      </summary>
      <div className="pb-2 text-xs text-concrete-300">
        <span className="text-concrete-500">Opera</span> {r.operator} · <span className="text-concrete-500">Billetes</span> {r.booking}
        {r.meta.notes && <div className="mt-1 text-concrete-500">{r.meta.notes}</div>}
      </div>
    </details>
  );
}

function CityRow({ ct }: { ct: CountryDetail["cities"][number] }) {
  const tone = scoreTone(ct.urban.score);
  return (
    <li className="min-w-0 py-1.5">
      <div className="flex items-center gap-2">
        <span className="truncate text-sm font-semibold text-concrete-50">{ct.name}</span>
        <span className="flex shrink-0 gap-0.5 text-xs">
          {ct.urban.modes.map((m) => (
            <span key={m} title={MODE_META[m].label}>
              {MODE_META[m].emoji}
            </span>
          ))}
        </span>
        <span className="ml-auto shrink-0 tabular text-xs" style={{ color: tone.color }}>
          {fmtScore(ct.urban.score)}
        </span>
      </div>
      <div className="truncate text-xs text-concrete-400" title={[ct.urban.ticket, ct.urban.app, ct.urban.note].filter(Boolean).join(" · ")}>
        {ct.urban.ticket}
        {ct.urban.app && ` · ${ct.urban.app}`}
        {ct.urban.note && ` · ${ct.urban.note}`}
      </div>
    </li>
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

      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <Panel className="p-4 sm:p-5">
            <div className="label-stencil mb-2">🚆 El tren · {fmtScore(c.rail.value)}/10</div>
            <Clamp lines={4}>
              <p className="max-w-prose text-[15px] leading-relaxed text-concrete-200">{t.railText}</p>
            </Clamp>
            <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1.5 sm:grid-cols-3">
              <ScoreBar label="Calidad" value={rail.calidad} size="sm" />
              <ScoreBar label="Llega a los sitios" value={rail.cobertura} size="sm" />
              <ScoreBar label="Frecuencia" value={rail.frecuencia} size="sm" />
              <ScoreBar label="Puntualidad" value={rail.puntualidad} size="sm" />
              <ScoreBar label="Barato" value={rail.precio} size="sm" />
              <ScoreBar label="Billete sin sufrir" value={rail.facilidadBilletes} size="sm" />
              <ScoreBar label="Compra online" value={rail.online} size="sm" />
              <ScoreBar label="Nocturnos" value={rail.nocturnos} size="sm" />
              <ScoreBar label="Alta velocidad" value={rail.altaVelocidad} size="sm" />
            </div>
          </Panel>
          <Panel className="p-4 sm:p-5">
            <div className="label-stencil mb-2">🚌 Buses y demás</div>
            <Clamp lines={3}>
              <p className="max-w-prose text-[15px] leading-relaxed text-concrete-200">{t.busText}</p>
            </Clamp>
            {t.busCompanies.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {t.busCompanies.map((b) => (
                  <Badge key={b} className="border-ink-600 text-concrete-300">
                    {b}
                  </Badge>
                ))}
              </div>
            )}
            <div className="label-stencil mb-1.5 mt-4">📱 Apps que te salvan</div>
            <ul className="space-y-1 text-xs">
              {t.apps.map((a) => (
                <li key={a.name} className="flex gap-2">
                  <span className="shrink-0 font-semibold text-concrete-50">
                    {a.url ? (
                      <a href={a.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-neon-cyan">
                        {a.name} <ExternalLink size={10} />
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
        </div>

        <div className="space-y-4">
          <Panel className="p-4 sm:p-5">
            <div className="label-stencil mb-1">Las líneas que te importan</div>
            {t.corridorsIntro && <p className="mb-2 text-xs text-concrete-400">{t.corridorsIntro}</p>}
            <div>
              {d.railCorridors.map((r) => (
                <CorridorRow key={r.id} r={r} d={d} />
              ))}
            </div>
          </Panel>
          <Panel className="p-4 sm:p-5">
            <div className="label-stencil mb-1">🏙 Dentro de cada ciudad</div>
            <ul className="grid gap-x-6 sm:grid-cols-2">
              {d.cities.map((ct) => (
                <CityRow key={ct.id} ct={ct} />
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel className="panel-neon p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="label-stencil text-neon-cyan/90">¿Se puede sin coche?</div>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-display text-4xl font-bold tabular text-concrete-50">{fmtScore(c.noCar.value)}</span>
              <span className="text-concrete-400">/ 10</span>
              <WhyPopover title="Moverse sin coche" breakdown={c.noCar.breakdown} compact />
              <span className="basis-full text-base font-medium text-concrete-100 sm:basis-auto">{noCarVoice(c.noCar.value)}</span>
            </div>
          </div>
          <TrafficLight light={c.noCar.light} />
        </div>
        <p className="mt-3 max-w-prose text-base text-concrete-100">{t.noCarVerdictText}</p>
        {t.hardWithoutCar.length > 0 && (
          <div className="mt-3">
            <div className="label-stencil mb-1 text-amber-300">Donde empieza el circo</div>
            <ul className="grid gap-x-6 gap-y-1 text-sm text-concrete-200 sm:grid-cols-2">
              {t.hardWithoutCar.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-amber-300">▸</span>
                  <span>{h}</span>
                </li>
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
    <Ficha id="coste" n="06" emoji="💸" title="¿Cuánto me va a costar?" score={{ label: "Coste (10 = sangría)", value: c.cost.value, invert: true, breakdown: c.cost.breakdown, voice: costVoice(c.cost.value) }}>
      <table className="w-full text-sm">
        <tbody>
          {d.cost.table.map((r) => (
            <tr key={r.concept} className="border-t border-ink-800 first:border-0">
              <td className="py-1.5 pr-2 text-concrete-200">
                {COST_CONCEPT_LABEL[r.concept]}
                {r.note && <span className="ml-1 text-xs text-concrete-500">{r.note}</span>}
              </td>
              <td className="py-1.5 text-right tabular font-semibold text-concrete-50">{fmtEur(r.eur, r.eur < 5 ? 2 : 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 text-xs font-medium text-neon-cyan">
        {cur.name} · {fmtFx(c.summary.fx.rate, cur.code)}
      </div>
      {d.cost.tips.length > 0 && (
        <Disclosure label="Trucos de bolsillo" count={d.cost.tips.length} className="mt-3">
          <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-200">
            {d.cost.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Disclosure>
      )}
      <SourceFooter meta={d.cost.meta} />
    </Ficha>
  );
}

export function FlightsSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  return (
    <Ficha id="vuelos" n="07" emoji="✈️" title="Llegar desde Barcelona" score={{ label: "Facilidad", value: c.bcn.value, breakdown: c.bcn.breakdown, voice: bcnVoice(c.bcn.value) }}>
      {d.flights.directRoutes.length === 0 ? (
        <p className="text-sm text-amber-200">No hay directo. Toca escala y llegar con cara de zombi.</p>
      ) : (
        <ul>
          {d.flights.directRoutes.map((r) => (
            <li key={r.to} className="border-t border-ink-800 py-1.5 first:border-0">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-concrete-50">
                  {r.to}
                  {r.airport && <span className="ml-1 font-mono text-[11px] font-normal text-concrete-500">{r.airport}</span>}
                </span>
                <span className="shrink-0 tabular text-xs text-concrete-100">
                  {fmtHours(r.hours)} · {r.weekly}/sem
                </span>
              </div>
              <div className="text-xs text-concrete-400">
                {r.airlines.join(", ")}
                {r.lowCost && <span className="ml-1.5 text-lime-300/90">low-cost</span>}
                {r.seasonal && <span className="ml-1.5 text-amber-300/90">solo temporada</span>}
              </div>
            </li>
          ))}
        </ul>
      )}
      {d.flights.oneStop.length > 0 && (
        <div className="mt-3">
          <div className="label-stencil mb-1">Con una escala</div>
          <ul className="space-y-0.5 text-xs text-concrete-300">
            {d.flights.oneStop.map((o) => (
              <li key={o.via}>
                vía <span className="font-semibold text-concrete-100">{o.via}</span> · {o.airlines.join(", ")} · unas {fmtHours(o.totalHours)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {d.flights.tips.length > 0 && (
        <Disclosure label="Apuntes de viajero" count={d.flights.tips.length} className="mt-3">
          <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-200">
            {d.flights.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Disclosure>
      )}
      <SourceFooter meta={d.flights.meta} />
    </Ficha>
  );
}

export function DocsSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const docs = c.summary.inputs.docs;
  const m = ENTRY_META[docs.entry];
  const extras = (d.docs.steps?.length ?? 0) + (d.docs.warnings?.length ?? 0);
  return (
    <Ficha id="documentacion" n="08" emoji="🛂" title="Papeles">
      <div className="flex flex-wrap items-center gap-1.5">
        {ENTRY_TYPES.map((e) => (
          <span
            key={e}
            className="rounded-sharp border px-1.5 py-0.5 text-[11px] font-semibold"
            style={e === docs.entry ? { borderColor: `${ENTRY_META[e].color}99`, backgroundColor: `${ENTRY_META[e].color}1f`, color: ENTRY_META[e].color } : { borderColor: "#2a2d31", color: "#4f545b" }}
          >
            {ENTRY_META[e].short}
          </span>
        ))}
      </div>
      <div className="mt-2 text-lg font-semibold leading-tight" style={{ color: m.color }}>
        {m.label}
      </div>
      <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-concrete-300">
        <div>
          <dt className="inline text-concrete-500">Estancia </dt>
          <dd className="inline tabular text-concrete-100">{docs.maxStayDays} días</dd>
        </div>
        {docs.passportValidityMonths != null && (
          <div>
            <dt className="inline text-concrete-500">Pasaporte </dt>
            <dd className="inline text-concrete-100">{docs.passportValidityMonths === 0 ? "vigente durante el viaje" : `≥ ${docs.passportValidityMonths} meses`}</dd>
          </div>
        )}
        <div>
          <dt className="inline text-concrete-500">Seguro </dt>
          <dd className="inline text-concrete-100">{docs.insuranceMandatory ? "obligatorio" : "no obligatorio (llévalo)"}</dd>
        </div>
      </dl>
      <Clamp lines={3} className="mt-3">
        <p className="max-w-prose text-[15px] leading-relaxed text-concrete-100">{d.docs.text}</p>
      </Clamp>
      {extras > 0 && (
        <Disclosure label="Pasos y avisos" count={extras} className="mt-3">
          {d.docs.steps && (
            <ol className="list-decimal space-y-0.5 pl-5 text-sm text-concrete-200">
              {d.docs.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          )}
          {d.docs.warnings && d.docs.warnings.length > 0 && (
            <ul className="mt-2 space-y-0.5 text-sm text-amber-200">
              {d.docs.warnings.map((w) => (
                <li key={w}>⚠️ {w}</li>
              ))}
            </ul>
          )}
        </Disclosure>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {d.docs.links.map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-sharp border border-ink-600 px-2 py-0.5 text-[11px] text-concrete-300 hover:border-neon-cyan/60 hover:text-neon-cyan">
            {l.label} <ExternalLink size={10} />
          </a>
        ))}
      </div>
      <SourceFooter meta={d.docs.meta} />
    </Ficha>
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
