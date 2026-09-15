import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { COUNTRIES } from "@/data/registry";
import { CIRCO_SUB_SHORT, CIRCO_SUBS, LIGHT_META, SERIES_COLORS, SERIES_TEXT, monthName } from "@/lib/constants";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtEur, fmtInt, fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";
import { COMPARE_MAX, useCompareStore } from "@/store/useCompareStore";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Field";
import { EmptyState } from "@/components/ui/Misc";
import { RadarChart } from "@/components/charts/RadarChart";
import { VerdictBadge } from "@/components/score/VerdictBadge";
import { Flag, flagCode } from "@/components/ui/Flag";

interface Metric {
  key: string;
  label: string;
  get: (c: ScoredCountry) => number;
  format?: (v: number, c: ScoredCountry) => string;
  /** true → gana el menor */
  lowerIsBetter?: boolean;
  max?: number;
}

const METRICS: Metric[] = [
  { key: "duke", label: "Duke Score", get: (c) => c.duke.value, format: (v) => `${fmtInt(v)}/100`, max: 100 },
  { key: "circo", label: "Circo Score", get: (c) => c.circo.value },
  { key: "cost", label: "Coste (10 = caro)", get: (c) => c.cost.value, lowerIsBetter: true, format: (v, c) => `${fmtScore(v)} · ${fmtEur(c.summary.inputs.cost.daily.normal)}/día` },
  { key: "safety", label: "Seguridad", get: (c) => c.safety.value },
  { key: "transport", label: "Transporte público", get: (c) => c.transport.value },
  { key: "noCar", label: "Viajar sin coche", get: (c) => c.noCar.value, format: (v, c) => `${LIGHT_META[c.noCar.light].emoji} ${fmtScore(v)}` },
  { key: "bcn", label: "Facilidad desde Barcelona", get: (c) => c.bcn.value },
  { key: "language", label: "Dificultad de idioma", get: (c) => c.language.value, lowerIsBetter: true },
  { key: "digital", label: "Facilidad digital", get: (c) => c.digital.value },
  { key: "season", label: "Clima / temporada", get: (c) => c.season.value, format: (v, c) => `${fmtScore(v)} · ${c.summary.months.filter((m) => m.rating === "excelente").length} meses excelentes` },
  { key: "places", label: "Cantidad de cosas", get: (c) => c.summary.placeStats.total, format: (v) => `${v} sitios`, max: 40 },
  { key: "festivals", label: "Festivales", get: (c) => c.subs.festivales, format: (v, c) => `${fmtScore(v)} · ${c.summary.festivals.length} en ficha` },
  { key: "nature", label: "Naturaleza", get: (c) => c.subs.naturaleza },
  { key: "history", label: "Historia", get: (c) => c.subs.historia },
  { key: "weird", label: "Rareza", get: (c) => c.subs.rareza },
  { key: "adventure", label: "Nivel de aventura", get: (c) => c.subs.aventura },
  { key: "days", label: "Duración recomendada", get: (c) => c.days.ideal, format: (_, c) => `${c.days.ideal} días (${c.days.recommended.join("-")})`, max: 18 },
];

export function ComparePage() {
  const ids = useCompareStore((s) => s.ids);
  const toggle = useCompareStore((s) => s.toggle);
  const setIds = useCompareStore((s) => s.set);
  const [params, setParams] = useSearchParams();

  // URL ↔ store: ?ids=uz,sco manda al cargar; después el store escribe la URL.
  useEffect(() => {
    const fromUrl = params.get("ids")?.split(",").filter((id) => COUNTRIES.some((c) => c.id === id)) ?? [];
    if (fromUrl.length >= 1 && fromUrl.join(",") !== ids.join(",")) setIds(fromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setParams((p) => {
      ids.length ? p.set("ids", ids.join(",")) : p.delete("ids");
      return p;
    }, { replace: true });
  }, [ids, setParams]);

  const selected = useMemo(() => ids.map((id) => COUNTRIES.find((c) => c.id === id)).filter(Boolean) as ScoredCountry[], [ids]);
  const winners = useMemo(() => {
    const out: Record<string, string[]> = {};
    for (const m of METRICS) {
      const vals = selected.map((c) => m.get(c));
      const best = m.lowerIsBetter ? Math.min(...vals) : Math.max(...vals);
      out[m.key] = selected.filter((c) => m.get(c) === best).map((c) => c.id);
    }
    return out;
  }, [selected]);
  const wins = (id: string) => METRICS.filter((m) => winners[m.key]?.length === 1 && winners[m.key][0] === id).length;

  return (
    <div className="space-y-6">
      <SectionHeader title="Comparador" kicker={`Elige entre 2 y ${COMPARE_MAX} países`} as="h1" />
      <Panel className="flex flex-wrap items-center gap-1.5 p-3">
        {COUNTRIES.map((c) => (
          <Chip key={c.id} on={ids.includes(c.id)} onClick={() => toggle(c.id)}>
            <Flag code={flagCode(c.summary)} name={c.summary.name} size={12} /> {c.summary.name} <span className="tabular text-concrete-500">{fmtInt(c.duke.value)}</span>
          </Chip>
        ))}
        {ids.length > 0 && (
          <button type="button" className="ml-auto text-xs text-concrete-400 underline hover:text-neon-cyan" onClick={() => setIds([])}>
            Vaciar
          </button>
        )}
      </Panel>

      {selected.length < 2 ? (
        <EmptyState title="Selecciona al menos dos países" description="Marca países arriba o desde sus tarjetas con el botón «Comparar»." />
      ) : (
        <>
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <Panel className="flex flex-col items-center p-4">
              <div className="label-stencil mb-1 self-start">Perfil circo</div>
              <RadarChart axes={CIRCO_SUBS.map((k) => ({ key: k, label: CIRCO_SUB_SHORT[k] }))} series={selected.map((c) => ({ id: c.id, label: c.summary.name, values: CIRCO_SUBS.map((k) => c.subs[k]) }))} size={360} />
            </Panel>
            <Panel className="flex flex-col items-center p-4">
              <div className="label-stencil mb-1 self-start">Perfil logístico</div>
              <RadarChart
                axes={[
                  { key: "noCar", label: "Sin coche" },
                  { key: "transport", label: "Transporte" },
                  { key: "cheap", label: "Barato" },
                  { key: "safety", label: "Seguridad" },
                  { key: "bcn", label: "Desde BCN" },
                  { key: "lang", label: "Idioma fácil" },
                  { key: "digital", label: "Digital" },
                  { key: "season", label: "Temporada" },
                ]}
                series={selected.map((c) => ({ id: c.id, label: c.summary.name, values: [c.noCar.value, c.transport.value, 10 - c.cost.value, c.safety.value, c.bcn.value, 10 - c.language.value, c.digital.value, c.season.value] }))}
                size={360}
              />
            </Panel>
          </div>

          <Panel className="overflow-x-auto p-0">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-ink-700">
                  <th className="p-3 text-left label-stencil font-normal">Métrica</th>
                  {selected.map((c, i) => (
                    <th key={c.id} className="p-3 text-left">
                      <Link to={`/pais/${c.id}`} className="flex items-center gap-2 hover:underline">
                        <span className="h-2.5 w-2.5 rounded-sharp" style={{ backgroundColor: SERIES_COLORS[i] }} />
                        <Flag code={flagCode(c.summary)} name={c.summary.name} size={16} />
                        <span className="font-semibold" style={{ color: SERIES_TEXT[i] }}>
                          {c.summary.name}
                        </span>
                      </Link>
                      <div className="mt-1 flex items-center gap-2">
                        <VerdictBadge verdict={c.duke.verdict} size="sm" />
                        <span className="label-stencil">🏆 × {wins(c.id)}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {METRICS.map((m) => (
                  <tr key={m.key} className="border-b border-ink-800 last:border-0">
                    <td className="p-3 text-concrete-300">
                      {m.label}
                      {m.lowerIsBetter && <span className="ml-1 text-[10px] text-concrete-500">(menor gana)</span>}
                    </td>
                    {selected.map((c, i) => {
                      const v = m.get(c);
                      const win = winners[m.key]?.includes(c.id);
                      const max = m.max ?? 10;
                      return (
                        <td key={c.id} className={cn("p-3 align-top", win && "bg-neon-lime/5")}>
                          <div className="flex items-center gap-2">
                            <span className={cn("tabular font-semibold", win ? "text-neon-lime glow-lime" : "text-concrete-100")}>{m.format ? m.format(v, c) : fmtScore(v)}</span>
                            {win && <span aria-label="ganador">🏆</span>}
                          </div>
                          <div className="mt-1 h-1 w-full max-w-[160px] overflow-hidden rounded-sharp bg-ink-800">
                            <div className="h-full" style={{ width: `${(Math.min(v, max) / max) * 100}%`, backgroundColor: SERIES_COLORS[i] }} />
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-3 text-concrete-300">Mejor mes</td>
                  {selected.map((c) => (
                    <td key={c.id} className="p-3 text-concrete-100">
                      {c.summary.months
                        .filter((m) => m.rating === "excelente")
                        .slice(0, 3)
                        .map((m) => monthName(m.month))
                        .join(", ") || "—"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Panel>
        </>
      )}
    </div>
  );
}
