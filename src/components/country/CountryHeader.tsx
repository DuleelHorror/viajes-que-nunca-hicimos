import { Scale } from "lucide-react";
import { LIGHT_META, REGION_LABEL, VERDICT_META, monthName } from "@/lib/constants";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtInt, fmtScore } from "@/lib/format";
import { circoVoice, costVoice, noCarVoice } from "@/lib/voice";
import { cn } from "@/lib/utils";
import { useCompareStore } from "@/store/useCompareStore";
import { Button } from "@/components/ui/Button";
import { ScoreRing } from "@/components/score/ScoreRing";
import { VerdictBadge } from "@/components/score/VerdictBadge";
import { WhyPopover } from "@/components/score/WhyPopover";
import { TrafficLight } from "@/components/score/TrafficLight";
import { Flag, flagCode } from "@/components/ui/Flag";

export function CountryHeader({ c }: { c: ScoredCountry }) {
  const s = c.summary;
  const inCompare = useCompareStore((st) => st.ids.includes(c.id));
  const toggle = useCompareStore((st) => st.toggle);
  const best = s.months.filter((m) => m.rating === "excelente").map((m) => monthName(m.month));
  const light = LIGHT_META[c.noCar.light];

  return (
    <header className="panel-neon relative overflow-hidden p-5 sm:p-6">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon-magenta/10 blur-3xl" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <div className="label-stencil text-neon-cyan/90">
            {REGION_LABEL[s.region]}
            {s.parentState && ` · técnicamente ${s.parentState}, pero lo tratamos aparte`}
          </div>
          <h1 className="mt-1 flex items-center gap-3 text-3xl sm:text-4xl">
            <Flag code={flagCode(s)} name={s.name} size={30} />
            {s.name}
            {s.nameLocal && <span className="text-lg font-normal text-concrete-400">{s.nameLocal}</span>}
          </h1>
          <p className="mt-2 max-w-2xl text-base text-concrete-200">{s.tagline}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <VerdictBadge verdict={c.duke.verdict} size="lg" />
            <span className="text-base font-medium text-concrete-100">{VERDICT_META[c.duke.verdict].phrase}</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <TrafficLight light={c.noCar.light} />
            <Button variant={inCompare ? "neon" : "outline"} size="sm" onClick={() => toggle(c.id)}>
              <Scale size={13} /> {inCompare ? "En la comparación" : "Añadir a comparar"}
            </Button>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <Kpi k="Yo me quedaría" v={`${c.days.ideal} días`} hint={`entre ${c.days.recommended[0]} y ${c.days.recommended[1]} va bien`} />
            <Kpi k="Nivel de circo" v={`${fmtScore(c.circo.value)} / 10`} hint={circoVoice(c.circo.value)} />
            <Kpi k="Cuándo ir" v={best.length ? best.slice(0, 3).join(", ") : "mira el mes a mes"} hint={best.length > 3 ? `y ${best.length - 3} ${best.length - 3 === 1 ? "mes más" : "meses más"}` : undefined} />
            <Kpi k="Nivel de precios" v={`${fmtScore(c.cost.value)} / 10`} hint={costVoice(c.cost.value)} />
            <Kpi k="Sin coche" v={`${fmtScore(c.noCar.value)} / 10`} hint={noCarVoice(c.noCar.value)} color={light.color} />
          </dl>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <ScoreRing value={c.duke.value} size={168} stroke={10} sub="/ 100" label="Duke Score" />
          <WhyPopover title={`¿Por qué ${fmtInt(c.duke.value)} y no más?`} breakdown={c.duke.breakdown} penalties={c.duke.penalties} total={`${fmtInt(c.duke.value)} / 100`} align="right" />
        </div>
      </div>
    </header>
  );
}

function Kpi({ k, v, hint, color }: { k: string; v: string; hint?: string; color?: string }) {
  return (
    <div className="rounded-sharp border border-ink-700/70 bg-ink-900/50 px-3 py-2">
      <dt className="label-stencil">{k}</dt>
      <dd className={cn("mt-0.5 text-base font-semibold text-concrete-50")} style={color ? { color } : undefined}>
        {v}
      </dd>
      {hint && <dd className="mt-0.5 text-xs leading-snug text-concrete-400">{hint}</dd>}
    </div>
  );
}
