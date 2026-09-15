import { useMemo } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES } from "@/data/registry";
import { CATEGORY_META, MONTHS_ES, PLACE_CATEGORIES, type PlaceCategory } from "@/lib/constants";
import { FINDER_MAX, rankCountries, type NoCarPref, type TempPref } from "@/lib/finder/rank";
import { fmtInt, fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useFinderStore } from "@/store/useFinderStore";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Chip, Field, Range, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { ScoreRing } from "@/components/score/ScoreRing";
import { VerdictBadge } from "@/components/score/VerdictBadge";
import { BreakdownTable } from "@/components/score/WhyPopover";
import { Flag, flagCode } from "@/components/ui/Flag";

const NO_CAR: Array<[NoCarPref, string]> = [
  ["imprescindible", "Obligatorio"],
  ["preferible", "Preferible"],
  ["indiferente", "Indiferente"],
];
const TEMP: Array<[TempPref, string]> = [
  ["indiferente", "Indiferente"],
  ["frio", "Frío / nieve"],
  ["templado", "Templado"],
  ["calor", "Calor"],
];

export function FinderPage() {
  const input = useFinderStore((s) => s.input);
  const patch = useFinderStore((s) => s.patch);
  const reset = useFinderStore((s) => s.reset);
  const results = useMemo(() => rankCountries(COUNTRIES, input), [input]);
  const maxTotal = Object.values(FINDER_MAX).reduce((a, b) => a + b, 0);

  const toggleInterest = (c: PlaceCategory) =>
    patch({ interests: input.interests.includes(c) ? input.interests.filter((x) => x !== c) : [...input.interests, c] });

  return (
    <div className="space-y-6">
      <SectionHeader title="Buscador de viajes" kicker="Dime cuándo, cuánto y qué buscas" as="h1">
        <Button variant="ghost" size="sm" onClick={reset}>
          Reiniciar
        </Button>
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
        <Panel className="h-fit space-y-4 p-4 lg:sticky lg:top-20">
          <Field label="Mes">
            <Select value={input.month} onChange={(e) => patch({ month: Number(e.target.value) })}>
              {MONTHS_ES.map((m, i) => (
                <option key={m} value={i + 1}>
                  {m}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={`Duración: ${input.days} días`}>
            <Range value={input.days} onChange={(v) => patch({ days: v })} min={3} max={21} />
          </Field>
          <Field label={`Presupuesto: ${input.budgetPerDay} €/día`} hint="alojamiento + comida + transporte local">
            <Range value={input.budgetPerDay} onChange={(v) => patch({ budgetPerDay: v })} min={30} max={300} step={5} />
          </Field>
          <div>
            <div className="label-stencil mb-1">Sin coche</div>
            <div className="flex flex-wrap gap-1">
              {NO_CAR.map(([k, l]) => (
                <Chip key={k} on={input.noCar === k} onClick={() => patch({ noCar: k })}>
                  {l}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <div className="label-stencil mb-1">Temperatura</div>
            <div className="flex flex-wrap gap-1">
              {TEMP.map(([k, l]) => (
                <Chip key={k} on={input.temp === k} onClick={() => patch({ temp: k })}>
                  {l}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <div className="label-stencil mb-1">Intereses {input.interests.length > 0 && `(${input.interests.length})`}</div>
            <div className="flex flex-wrap gap-1">
              {PLACE_CATEGORIES.map((c) => (
                <Chip key={c} on={input.interests.includes(c)} onClick={() => toggleInterest(c)} title={CATEGORY_META[c].label}>
                  <span aria-hidden>{CATEGORY_META[c].emoji}</span> {CATEGORY_META[c].label}
                </Chip>
              ))}
            </div>
          </div>
        </Panel>

        <div className="space-y-3">
          {results.map((r, i) => {
            const c = r.country;
            return (
              <Panel key={c.id} className={cn("p-4", r.excluded && "opacity-60", i === 0 && !r.excluded && "panel-neon")}>
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl text-concrete-500">{r.excluded ? "—" : `#${i + 1}`}</span>
                    <ScoreRing value={r.excluded ? 0 : r.total} max={maxTotal} size={72} stroke={6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link to={`/pais/${c.id}`} className="flex items-center gap-2 text-lg font-semibold hover:text-neon-cyan">
                        <Flag code={flagCode(c.summary)} name={c.summary.name} size={16} /> {c.summary.name}
                      </Link>
                      <VerdictBadge verdict={c.duke.verdict} size="sm" />
                      <span className="label-stencil">Duke {fmtInt(c.duke.value)}</span>
                      <span className="label-stencil">ideal {c.days.ideal} días</span>
                    </div>
                    {r.excluded ? (
                      <p className="mt-1 text-sm text-red-300">{r.excluded}</p>
                    ) : (
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {r.components.map((k) => (
                          <li key={k.key} className={cn("rounded-sharp border px-1.5 py-0.5 text-[11px]", k.points < 0 ? "border-red-500/40 text-red-200" : k.points >= k.max * 0.8 && k.max > 0 ? "border-neon-lime/40 text-lime-200" : "border-ink-700 text-concrete-300")}>
                            {k.label} <span className="tabular font-semibold">{k.points > 0 ? "+" : ""}{fmtScore(k.points)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {r.festivalsThatMonth.length > 0 && (
                      <div className="mt-2 text-xs text-orange-200">
                        🔥 Ese mes: {r.festivalsThatMonth.map((f) => `${f.name} (${f.dateApprox})`).join(" · ")}
                      </div>
                    )}
                    <div className="mt-2 text-[11px] text-concrete-500">
                      {MONTHS_ES[input.month - 1]}: {r.monthRating.tempMin}…{r.monthRating.tempMax} °C · {r.monthRating.reasons[0]}
                    </div>
                  </div>
                  {!r.excluded && (
                    <details className="w-full sm:w-72">
                      <summary className="cursor-pointer label-stencil hover:text-neon-cyan">Desglose</summary>
                      <BreakdownTable breakdown={r.components} total={`${fmtScore(r.total)} / ${maxTotal}`} className="mt-2" />
                    </details>
                  )}
                </div>
              </Panel>
            );
          })}
        </div>
      </div>
    </div>
  );
}
