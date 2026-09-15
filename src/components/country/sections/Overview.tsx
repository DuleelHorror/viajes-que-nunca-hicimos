import { CIRCO_SUB_LABEL, CIRCO_SUB_SHORT, CIRCO_SUBS } from "@/lib/constants";
import type { CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtArea, fmtFx, fmtPopulation, fmtScore } from "@/lib/format";
import { KV, Panel, SectionHeader } from "@/components/ui/Card";
import { ScoreRing } from "@/components/score/ScoreRing";
import { ScoreBar } from "@/components/score/ScoreBar";
import { MetricRow } from "@/components/score/MetricRow";
import { WhyPopover } from "@/components/score/WhyPopover";
import { SourceFooter } from "@/components/score/SourceFooter";
import { RadarChart } from "@/components/charts/RadarChart";

export function SummarySection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const f = d.summary.facts;
  const s = c.summary;
  return (
    <section className="space-y-4">
      <SectionHeader id="resumen" title="Resumen" kicker="01 · Ficha" />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <Panel className="p-5">
          <KV
            items={[
              { k: "Capital", v: f.capital },
              { k: "Población", v: fmtPopulation(f.population) },
              { k: "Superficie", v: fmtArea(f.areaKm2) },
              { k: "Idioma", v: f.languages.join(", ") },
              { k: "Moneda", v: `${f.currency.name} (${f.currency.code}) · ${fmtFx(s.fx.rate, f.currency.code)}` },
              ...(f.religions ? [{ k: "Religión", v: f.religions }] : []),
              { k: "Zona horaria", v: f.timezone },
              { k: "Enchufe", v: `Tipo ${f.plugTypes.join(" / ")}` },
              { k: "Conducción", v: f.drivingSide === "derecha" ? "Por la derecha" : "Por la izquierda" },
            ]}
          />
          <SourceFooter meta={f.meta} />
        </Panel>
        <Panel className="p-5">
          <div className="label-stencil mb-2 text-neon-magenta/80">¿Por qué podría interesarme este país?</div>
          <p className="prose-dossier text-sm leading-relaxed text-concrete-200">{s.whyMe}</p>
        </Panel>
      </div>
    </section>
  );
}

export function ScoresSection({ c }: { c: ScoredCountry }) {
  const axes = CIRCO_SUBS.map((k) => ({ key: k, label: CIRCO_SUB_SHORT[k] }));
  return (
    <section className="space-y-4">
      <SectionHeader id="puntuaciones" title="Puntuaciones para mi tipo de viaje" kicker="02 · Nota general" />
      <div className="grid gap-4 lg:grid-cols-[auto_1fr_1fr]">
        <Panel className="flex flex-col items-center justify-center gap-2 p-5">
          <ScoreRing value={c.circo.value} max={10} size={150} stroke={10} decimals={1} sub="/ 10" label="Circo Score" />
          <WhyPopover title={`Circo Score ${fmtScore(c.circo.value)}`} breakdown={c.circo.breakdown} total={`${fmtScore(c.circo.value)} / 10`} />
        </Panel>
        <Panel className="p-5">
          <div className="label-stencil mb-3">Sub-puntuaciones</div>
          <div className="space-y-2.5">
            {CIRCO_SUBS.map((k) => (
              <ScoreBar key={k} label={CIRCO_SUB_LABEL[k]} value={c.subs[k]} size="sm" />
            ))}
          </div>
        </Panel>
        <Panel className="flex items-center justify-center p-3">
          <RadarChart axes={axes} series={[{ id: c.id, label: c.summary.name, values: CIRCO_SUBS.map((k) => c.subs[k]) }]} size={300} legend={false} />
        </Panel>
      </div>
      <Panel className="p-5">
        <div className="label-stencil mb-3">Logística y contexto</div>
        <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
          <MetricRow label="Transporte público" value={c.transport.value} breakdown={c.transport.breakdown} />
          <MetricRow label="Viabilidad sin coche" value={c.noCar.value} breakdown={c.noCar.breakdown} />
          <MetricRow label="Coste (10 = carísimo)" value={c.cost.value} invert breakdown={c.cost.breakdown} />
          <MetricRow label="Facilidad desde Barcelona" value={c.bcn.value} breakdown={c.bcn.breakdown} />
          <MetricRow label="Seguridad" value={c.safety.value} breakdown={c.safety.breakdown} />
          <MetricRow label="Dificultad de idioma (10 = difícil)" value={c.language.value} invert breakdown={c.language.breakdown} />
          <MetricRow label="Facilidad digital" value={c.digital.value} breakdown={c.digital.breakdown} />
          <MetricRow label="Estabilidad política" value={c.stability} />
        </div>
      </Panel>
    </section>
  );
}

export function DaysSection({ c }: { c: ScoredCountry }) {
  const d = c.days;
  const tiles: Array<{ k: string; r: [number, number]; hint: string }> = [
    { k: "Visita rápida", r: d.quick, hint: "capital + alrededores" },
    { k: "Viaje recomendado", r: d.recommended, hint: "ruta principal" },
    { k: "Viaje completo", r: d.complete, hint: "recorrido entero" },
  ];
  return (
    <section className="space-y-4">
      <SectionHeader id="dias" title="¿Cuántos días merece?" kicker="03 · Duración" />
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="grid gap-3 sm:grid-cols-3">
          {tiles.map((t) => (
            <Panel key={t.k} className="p-4">
              <div className="label-stencil">{t.k}</div>
              <div className="mt-1 text-2xl font-semibold tabular text-concrete-100">
                {t.r[0]}-{t.r[1]} <span className="text-sm font-normal text-concrete-500">días</span>
              </div>
              <div className="text-xs text-concrete-500">{t.hint}</div>
            </Panel>
          ))}
        </div>
        <Panel className="panel-neon flex flex-col items-center justify-center px-8 py-4 text-center">
          <div className="label-stencil text-neon-cyan/80">Duración ideal para ti</div>
          <div className="font-display text-5xl font-bold tabular text-neon-cyan glow-cyan">{d.ideal}</div>
          <div className="text-sm text-concrete-300">días</div>
          <div className="mt-2 flex items-center gap-2">
            <WhyPopover title={`¿Por qué ${d.ideal} días?`} breakdown={d.breakdown} total={`${d.ideal} días`} align="right" />
            {d.overridden && <span className="label-stencil text-amber-300">rangos manuales</span>}
          </div>
        </Panel>
      </div>
    </section>
  );
}
