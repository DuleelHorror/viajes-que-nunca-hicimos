import { Scale } from "lucide-react";
import { LIGHT_META, REGION_LABEL, monthName } from "@/lib/constants";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtEur, fmtInt, fmtScore } from "@/lib/format";
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
          <div className="label-stencil text-neon-cyan/80">
            Expediente · {REGION_LABEL[s.region]}
            {s.parentState && ` · ${s.parentState} (destino tratado aparte)`}
          </div>
          <h1 className="mt-1 flex items-center gap-3 text-3xl sm:text-4xl">
            <Flag code={flagCode(s)} name={s.name} size={30} />
            {s.name}
            {s.nameLocal && <span className="font-mono text-base font-normal text-concrete-500">{s.nameLocal}</span>}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-concrete-300">{s.tagline}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <VerdictBadge verdict={c.duke.verdict} size="lg" />
            <TrafficLight light={c.noCar.light} />
            <Button variant={inCompare ? "neon" : "outline"} size="sm" onClick={() => toggle(c.id)}>
              <Scale size={13} /> {inCompare ? "En comparación" : "Añadir a comparar"}
            </Button>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <Kpi k="Duración ideal" v={`${c.days.ideal} días`} hint={`rec. ${c.days.recommended.join("-")}`} />
            <Kpi k="Circo Score" v={`${fmtScore(c.circo.value)} / 10`} hint="rareza + oscuridad + …" />
            <Kpi k="Mejor época" v={best.length ? best.slice(0, 3).join(", ") : "ver meses"} hint={best.length > 3 ? `+${best.length - 3} meses` : undefined} />
            <Kpi k="Presupuesto normal" v={`${fmtEur(s.inputs.cost.daily.normal)}/día`} hint={`coste ${fmtScore(c.cost.value)}/10`} />
            <Kpi k="Sin coche" v={`${fmtScore(c.noCar.value)} / 10`} hint={light.label} color={light.color} />
          </dl>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <ScoreRing value={c.duke.value} size={168} stroke={10} sub="/ 100" label="Duke Score" />
          <WhyPopover
            title={`¿Por qué ${fmtInt(c.duke.value)}?`}
            breakdown={c.duke.breakdown}
            penalties={c.duke.penalties}
            total={`${fmtInt(c.duke.value)} / 100`}
            align="right"
          />
        </div>
      </div>
    </header>
  );
}

function Kpi({ k, v, hint, color }: { k: string; v: string; hint?: string; color?: string }) {
  return (
    <div className="rounded-sharp border border-ink-700/70 bg-ink-900/50 px-3 py-2">
      <dt className="label-stencil">{k}</dt>
      <dd className={cn("mt-0.5 text-sm font-semibold text-concrete-100")} style={color ? { color } : undefined}>
        {v}
      </dd>
      {hint && <dd className="text-[10px] text-concrete-500">{hint}</dd>}
    </div>
  );
}
