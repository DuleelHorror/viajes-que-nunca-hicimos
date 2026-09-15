import { LIGHT_META, VERDICT_META, monthName } from "@/lib/constants";
import type { CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtEur, fmtInt, fmtScore } from "@/lib/format";
import { logisticsVoice, noCarVoice } from "@/lib/voice";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { VerdictBadge } from "@/components/score/VerdictBadge";
import { ScoreRing } from "@/components/score/ScoreRing";
import { SourceFooter } from "@/components/score/SourceFooter";

export function ProsConsSection({ d }: { d: CountryDetail }) {
  return (
    <section className="space-y-4">
      <SectionHeader id="pros-contras" title="Lo bueno y lo malo" kicker="17 · Para nosotros, no para un folleto" />
      <div className="grid gap-4 md:grid-cols-2">
        <Panel className="p-5">
          <div className="label-stencil mb-3 text-neon-lime">A favor</div>
          <ul className="space-y-2.5 text-base text-concrete-100">
            {d.verdict.pros.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-neon-lime">＋</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel className="p-5">
          <div className="label-stencil mb-3 text-red-400">En contra</div>
          <ul className="space-y-2.5 text-base text-concrete-100">
            {d.verdict.cons.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-red-400">－</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </section>
  );
}

export function VerdictSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const manual = d.verdict.verdict;
  const disagree = manual && manual !== c.duke.verdict;
  const best = c.summary.months.filter((m) => m.rating === "excelente").map((m) => monthName(m.month));
  const light = LIGHT_META[c.noCar.light];
  const logistica = 10 - c.noCar.value * 0.6 - c.transport.value * 0.4;
  return (
    <section className="space-y-4">
      <SectionHeader id="veredicto" title="¿Te pega este país?" kicker="18 · La conclusión" />
      <Panel className="panel-neon p-6">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
          <div className="flex flex-col items-center gap-3 text-center">
            <ScoreRing value={c.duke.value} size={140} stroke={10} sub="/ 100" label="Duke Score" />
            <VerdictBadge verdict={c.duke.verdict} size="lg" />
            <p className="max-w-[14rem] text-base font-medium text-concrete-50">{VERDICT_META[c.duke.verdict].phrase}</p>
            {disagree && (
              <div className="text-sm text-concrete-400">
                El que escribe la ficha opina otra cosa:
                <div className="mt-1">
                  <VerdictBadge verdict={manual} size="sm" manual />
                </div>
              </div>
            )}
          </div>
          <div>
            <p className="text-lg leading-relaxed text-concrete-50">{d.verdict.text}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <V k="Yo me quedaría" v={`${c.days.recommended[0]}-${c.days.recommended[1]} días`} hint={`el punto dulce está en ${c.days.ideal}`} />
              <V k="Mejor mes" v={best[0] ?? "mira el mes a mes"} hint={best.slice(1, 3).join(", ")} />
              <V k="Presupuesto" v={`${fmtEur(c.summary.inputs.cost.daily.normal)}/día`} hint={`coste ${fmtScore(c.cost.value)}/10`} />
              <V k="Circo logístico" v={`${fmtScore(logistica)} / 10`} hint={logisticsVoice(logistica)} />
              <V k="Nivel de circo" v={`${fmtScore(c.circo.value)} / 10`} />
              <V k="Sin coche" v={`${light.emoji} ${fmtScore(c.noCar.value)}`} hint={noCarVoice(c.noCar.value)} />
            </dl>
            <div className="mt-4 text-sm text-concrete-400">
              {c.summary.name}: {fmtInt(c.duke.value)}/100
            </div>
          </div>
        </div>
        <SourceFooter meta={d.verdict.meta} />
      </Panel>
    </section>
  );
}

function V({ k, v, hint }: { k: string; v: string; hint?: string }) {
  return (
    <div className="rounded-sharp border border-ink-700/70 bg-ink-900/50 px-3 py-2">
      <dt className="label-stencil">{k}</dt>
      <dd className="mt-0.5 text-base font-semibold text-concrete-50">{v}</dd>
      {hint && <dd className="mt-0.5 text-xs leading-snug text-concrete-400">{hint}</dd>}
    </div>
  );
}
