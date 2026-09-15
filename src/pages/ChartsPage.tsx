import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "@/data/registry";
import { CIRCO_SUB_LABEL, CIRCO_SUB_SHORT, CIRCO_SUBS, MONTH_RATING_META, MONTHS_SHORT, TAG_META, TAGS, type CircoSub } from "@/lib/constants";
import { fmtInt, fmtScore } from "@/lib/format";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Field";
import { RankBars } from "@/components/charts/RankBars";
import { ScatterChart } from "@/components/charts/ScatterChart";
import { RadarChart } from "@/components/charts/RadarChart";
import { Heatmap } from "@/components/charts/Heatmap";
import { DumbbellChart } from "@/components/charts/DumbbellChart";

const RANK_METRICS = {
  duke: { label: "Duke Score", max: 100, get: (c: (typeof COUNTRIES)[number]) => c.duke.value, fmt: (v: number) => fmtInt(v), color: "#c026d3" },
  circo: { label: "Circo Score", max: 10, get: (c: (typeof COUNTRIES)[number]) => c.circo.value, fmt: fmtScore, color: "#0891b2" },
  noCar: { label: "Viabilidad sin coche", max: 10, get: (c: (typeof COUNTRIES)[number]) => c.noCar.value, fmt: fmtScore, color: "#0891b2" },
  transport: { label: "Transporte público", max: 10, get: (c: (typeof COUNTRIES)[number]) => c.transport.value, fmt: fmtScore, color: "#0891b2" },
  cheap: { label: "Barato (10 − coste)", max: 10, get: (c: (typeof COUNTRIES)[number]) => 10 - c.cost.value, fmt: fmtScore, color: "#d97706" },
  safety: { label: "Seguridad", max: 10, get: (c: (typeof COUNTRIES)[number]) => c.safety.value, fmt: fmtScore, color: "#0891b2" },
  bcn: { label: "Facilidad desde BCN", max: 10, get: (c: (typeof COUNTRIES)[number]) => c.bcn.value, fmt: fmtScore, color: "#0891b2" },
  places: { label: "Sitios circo en ficha", max: 40, get: (c: (typeof COUNTRIES)[number]) => c.summary.placeStats.total, fmt: (v: number) => fmtInt(v), color: "#d97706" },
} as const;
type RankKey = keyof typeof RANK_METRICS;

export function ChartsPage() {
  const nav = useNavigate();
  const go = (id: string) => nav(`/pais/${id}`);
  const [rank, setRank] = useState<RankKey>("duke");
  const [sub, setSub] = useState<CircoSub>("oscuridad");
  const rm = RANK_METRICS[rank];
  const top4 = useMemo(() => COUNTRIES.slice(0, 4), []);

  return (
    <div className="space-y-8">
      <div>
        <div className="label-stencil mb-1">La sala de mapas y gráficas</div>
        <h1 className="text-3xl">Todos los países de un vistazo</h1>
        <p className="mt-2 max-w-2xl text-base text-concrete-300">Pasa el ratón para ver los números y haz clic en un país para abrir su ficha. Aquí es donde se ve quién gana y por qué.</p>
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        <Panel className="p-5">
          <SectionHeader title="Ranking" kicker="Elige una cosa y mira quién manda" as="h3" />
          <div className="mt-3 flex flex-wrap gap-1">
            {(Object.keys(RANK_METRICS) as RankKey[]).map((k) => (
              <Chip key={k} on={rank === k} onClick={() => setRank(k)}>
                {RANK_METRICS[k].label}
              </Chip>
            ))}
          </div>
          <RankBars className="mt-4" items={COUNTRIES.map((c) => ({ id: c.id, label: c.summary.name, value: rm.get(c) }))} max={rm.max} format={rm.fmt} color={rm.color} onSelect={go} />
        </Panel>

        <Panel className="p-5">
          <SectionHeader title="Cuánto circo por euro" kicker="Cuanto más arriba a la izquierda, mejor · burbuja = días que le echaría" as="h3" />
          <ScatterChart
            className="mt-3"
            points={COUNTRIES.map((c) => ({ id: c.id, label: c.summary.name, x: c.cost.value, y: c.circo.value, r: c.days.ideal }))}
            xLabel="Coste (10 = sangría)"
            yLabel="Circo Score"
            xMax={10}
            yMax={10}
            quadrants={["barato y con mandanga", "caro pero con mandanga", "barato y flojo", "caro y flojo: huye"]}
            rLabel="días"
            onSelect={go}
          />
        </Panel>

        <Panel className="p-5">
          <SectionHeader title="¿Dónde llego sin conducir?" kicker="Red de transporte contra lo remotos que están los sitios" as="h3" />
          <ScatterChart
            className="mt-3"
            points={COUNTRIES.map((c) => ({ id: c.id, label: c.summary.name, x: c.transport.value, y: c.noCar.value, r: c.summary.placeStats.total, color: "#d97706" }))}
            xLabel="Transporte público"
            yLabel="Viabilidad sin coche"
            xMax={10}
            yMax={10}
            xMin={2}
            yMin={2}
            quadrants={["sitios a mano, red floja", "el paraíso sin coche", "circo logístico", "buena red, sitios remotos"]}
            rLabel="sitios"
            onSelect={go}
          />
        </Panel>

        <Panel className="flex flex-col items-center p-5">
          <SectionHeader title="Los 4 mejores, superpuestos" kicker="De qué va el circo de cada uno" as="h3" className="self-stretch" />
          <RadarChart className="mt-3" axes={CIRCO_SUBS.map((k) => ({ key: k, label: CIRCO_SUB_SHORT[k] }))} series={top4.map((c) => ({ id: c.id, label: c.summary.name, values: CIRCO_SUBS.map((k) => c.subs[k]) }))} size={380} />
        </Panel>
      </section>

      <Panel className="p-5">
        <SectionHeader title="¿Cuándo ir a cada sitio?" kicker="El calendario cruzado: verde para ir, rojo para huir" as="h3" />
        <Heatmap
          className="mt-3"
          rows={COUNTRIES.map((c) => ({ id: c.id, label: c.summary.name }))}
          cols={[...MONTHS_SHORT]}
          cell={(id, i) => {
            const c = COUNTRIES.find((x) => x.id === id)!;
            const m = c.summary.months[i];
            const fest = c.summary.festivals.filter((f) => f.month === i + 1).length;
            return { value: MONTH_RATING_META[m.rating].points, color: MONTH_RATING_META[m.rating].color, title: `${c.summary.name} · ${MONTHS_SHORT[i]}: ${MONTH_RATING_META[m.rating].label} · ${m.tempMin}…${m.tempMax} °C${fest ? ` · ${fest} festival` : ""}`, label: fest ? "🔥" : m.snow ? "❄" : "" };
          }}
          onRowClick={go}
          legend={(Object.keys(MONTH_RATING_META) as Array<keyof typeof MONTH_RATING_META>).map((k) => ({ color: MONTH_RATING_META[k].color, label: MONTH_RATING_META[k].label }))}
        />
      </Panel>

      <section className="grid gap-4 lg:grid-cols-2">
        <Panel className="p-5">
          <SectionHeader title="¿Cuántos días pide cada uno?" kicker="Rápido, recomendado y completo, en la misma regla" as="h3" />
          <DumbbellChart className="mt-4" rows={COUNTRIES.map((c) => ({ id: c.id, label: c.summary.name, quick: c.days.quick, recommended: c.days.recommended, complete: c.days.complete, ideal: c.days.ideal }))} onSelect={go} />
        </Panel>
        <Panel className="p-5">
          <SectionHeader title="Cada ingrediente del circo" kicker="Elige uno y mira quién lo tiene" as="h3" />
          <div className="mt-3 flex flex-wrap gap-1">
            {CIRCO_SUBS.map((k) => (
              <Chip key={k} on={sub === k} onClick={() => setSub(k)}>
                {CIRCO_SUB_LABEL[k]}
              </Chip>
            ))}
          </div>
          <RankBars className="mt-4" items={COUNTRIES.map((c) => ({ id: c.id, label: c.summary.name, value: c.subs[sub] }))} max={10} color="#c026d3" onSelect={go} />
        </Panel>
      </section>

      <Panel className="p-5">
        <SectionHeader title="Etiquetas" kicker="Cuántos países cumplen cada cosa · clic para filtrar" as="h3" />
        <RankBars className="mt-4" items={TAGS.map((t) => ({ id: t, label: `${TAG_META[t].emoji} ${TAG_META[t].label}`, value: COUNTRIES.filter((c) => c.tags.includes(t)).length }))} max={COUNTRIES.length} format={(v) => fmtInt(v)} color="#0891b2" winnerMark={false} onSelect={(t) => nav(`/paises?tags=${t}`)} />
      </Panel>
    </div>
  );
}
