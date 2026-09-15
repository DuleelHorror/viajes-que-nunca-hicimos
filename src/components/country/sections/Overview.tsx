import { CIRCO_SUB_LABEL, CIRCO_SUB_SHORT, CIRCO_SUBS } from "@/lib/constants";
import type { CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtArea, fmtFx, fmtPopulation, fmtScore } from "@/lib/format";
import { bcnVoice, circoVoice, costVoice, daysLadder, daysVoice, digitalVoice, languageVoice, noCarVoice, safetyVoice, stabilityVoice, transportVoice } from "@/lib/voice";
import { cn } from "@/lib/utils";
import { KV, Panel, SectionHeader } from "@/components/ui/Card";
import { Clamp } from "@/components/ui/Disclosure";
import { ScoreRing } from "@/components/score/ScoreRing";
import { ScoreBar } from "@/components/score/ScoreBar";
import { ScoreTile } from "@/components/score/ScoreTile";
import { WhyPopover } from "@/components/score/WhyPopover";
import { SourceFooter } from "@/components/score/SourceFooter";
import { RadarChart } from "@/components/charts/RadarChart";

export function SummarySection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const f = d.summary.facts;
  const s = c.summary;
  return (
    <section className="space-y-4">
      <SectionHeader id="resumen" title="Lo básico" kicker="01 · Para situarnos" />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <Panel className="p-4 sm:p-5">
          <KV
            items={[
              { k: "Capital", v: f.capital },
              { k: "Gente", v: fmtPopulation(f.population) },
              { k: "Tamaño", v: fmtArea(f.areaKm2) },
              { k: "Se habla", v: f.languages.join(", ") },
              { k: "Se paga en", v: `${f.currency.name} (${f.currency.code}) · ${fmtFx(s.fx.rate, f.currency.code)}` },
              ...(f.religions ? [{ k: "Religión", v: f.religions }] : []),
              { k: "Hora", v: f.timezone },
              { k: "Enchufe", v: `Tipo ${f.plugTypes.join(" / ")}` },
              { k: "Conducen", v: f.drivingSide === "derecha" ? "por la derecha (da igual, no vas a conducir)" : "por la izquierda (da igual, no vas a conducir)" },
            ]}
          />
          <SourceFooter meta={f.meta} />
        </Panel>
        <Panel className="p-4 sm:p-5">
          <div className="label-stencil mb-2 text-neon-magenta/90">¿Por qué te iba a interesar este sitio?</div>
          <Clamp lines={6}>
            <p className="prose-dossier max-w-prose text-base text-concrete-100">{s.whyMe}</p>
          </Clamp>
        </Panel>
      </div>
    </section>
  );
}

export function ScoresSection({ c }: { c: ScoredCountry }) {
  const axes = CIRCO_SUBS.map((k) => ({ key: k, label: CIRCO_SUB_SHORT[k] }));
  return (
    <section className="space-y-4">
      <SectionHeader id="puntuaciones" title="Notas para nuestra forma de viajar" kicker="02 · Con números y con palabras" />
      <Panel className="p-4 sm:p-5">
        <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex flex-col items-center gap-2 text-center lg:w-44">
            <ScoreRing value={c.circo.value} max={10} size={132} stroke={9} decimals={1} sub="/ 10" label="Circo Score" />
            <p className="text-sm font-medium text-concrete-100">{circoVoice(c.circo.value)}</p>
            <WhyPopover title={`Circo Score ${fmtScore(c.circo.value)}`} breakdown={c.circo.breakdown} total={`${fmtScore(c.circo.value)} / 10`} />
          </div>
          <div>
            <div className="label-stencil mb-2">De qué está hecho el circo</div>
            <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {CIRCO_SUBS.map((k) => (
                <ScoreBar key={k} label={CIRCO_SUB_LABEL[k]} value={c.subs[k]} size="sm" />
              ))}
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <RadarChart axes={axes} series={[{ id: c.id, label: c.summary.name, values: CIRCO_SUBS.map((k) => c.subs[k]) }]} size={240} legend={false} />
          </div>
        </div>
      </Panel>
      <div>
        <div className="label-stencil mb-2">Logística y contexto, en cristiano</div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <ScoreTile label="Transporte público" value={c.transport.value} breakdown={c.transport.breakdown} voice={transportVoice(c.transport.value)} />
          <ScoreTile label="Moverse sin coche" value={c.noCar.value} breakdown={c.noCar.breakdown} voice={noCarVoice(c.noCar.value)} />
          <ScoreTile label="Coste (10 = sangría)" value={c.cost.value} invert breakdown={c.cost.breakdown} voice={costVoice(c.cost.value)} />
          <ScoreTile label="Llegar desde Barcelona" value={c.bcn.value} breakdown={c.bcn.breakdown} voice={bcnVoice(c.bcn.value)} />
          <ScoreTile label="Seguridad" value={c.safety.value} breakdown={c.safety.breakdown} voice={safetyVoice(c.safety.value)} />
          <ScoreTile label="Idioma (10 = por señas)" value={c.language.value} invert breakdown={c.language.breakdown} voice={languageVoice(c.language.value)} />
          <ScoreTile label="Sobrevivir con el móvil" value={c.digital.value} breakdown={c.digital.breakdown} voice={digitalVoice(c.digital.value)} />
          <ScoreTile label="Estabilidad política" value={c.stability} voice={stabilityVoice(c.stability)} />
        </div>
      </div>
    </section>
  );
}

const TONE_CLS = {
  no: "border-ink-700 text-concrete-400",
  meh: "border-amber-500/40 text-amber-200",
  ok: "border-cyan-500/40 text-cyan-100",
  sweet: "border-neon-lime/60 bg-neon-lime/10 text-lime-100",
  full: "border-neon-magenta/50 text-fuchsia-100",
  over: "border-ink-700 text-concrete-400",
} as const;

export function DaysSection({ c }: { c: ScoredCountry }) {
  const d = c.days;
  const ladder = daysLadder(d);
  return (
    <section className="space-y-4">
      <SectionHeader id="dias" title="¿Cuántos días le echo?" kicker="03 · Ni de más ni de menos" />
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <Panel className="p-4 sm:p-5">
          <ol className="space-y-1.5">
            {ladder.map((step) => (
              <li key={step.n} className={cn("flex items-center gap-3 rounded-sharp border px-3 py-2 sm:gap-4", TONE_CLS[step.tone])}>
                <span className="w-[4.5rem] shrink-0 whitespace-nowrap text-lg font-bold tabular sm:w-20">{step.n} días</span>
                <span className="shrink-0 text-lg" aria-hidden>
                  {step.emoji}
                </span>
                <span className="min-w-0 text-sm sm:text-base">{step.text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-3 grid gap-3 text-sm text-concrete-300 sm:grid-cols-3">
            <div>
              <div className="label-stencil">Rápido</div>
              {d.quick[0]}-{d.quick[1]} días · capital y lo gordo
            </div>
            <div>
              <div className="label-stencil">Recomendado</div>
              {d.recommended[0]}-{d.recommended[1]} días · la ruta principal
            </div>
            <div>
              <div className="label-stencil">Completo</div>
              {d.complete[0]}-{d.complete[1]} días · te lo pateas entero
            </div>
          </div>
        </Panel>
        <Panel className="panel-neon flex flex-col items-center justify-center px-8 py-5 text-center lg:w-72">
          <div className="label-stencil text-neon-cyan/90">🔥 Para ti</div>
          <div className="font-display text-6xl font-bold tabular text-neon-cyan glow-cyan">{d.ideal}</div>
          <div className="text-base text-concrete-200">días</div>
          <p className="mt-3 text-sm text-concrete-200">{daysVoice(d)}</p>
          <div className="mt-3 flex items-center gap-2">
            <WhyPopover title={`¿Por qué ${d.ideal} días?`} breakdown={d.breakdown} total={`${d.ideal} días`} align="right" />
            {d.overridden && <span className="label-stencil text-amber-300">rangos a mano</span>}
          </div>
        </Panel>
      </div>
    </section>
  );
}
