import { Panel, SectionHeader } from "@/components/ui/Card";
import { CIRCO_SUB_LABEL, CIRCO_SUBS, LIGHT_META } from "@/lib/constants";
import {
  BCN_DIRECT,
  BCN_ONE_STOP,
  CIRCO_WEIGHTS,
  COST_CURVE,
  DAYS,
  DIGITAL_WEIGHTS,
  DUKE_LABELS,
  DUKE_PENALTIES,
  DUKE_POINTS,
  DUKE_VERDICT,
  LANGUAGE_WEIGHTS,
  NO_CAR_LIGHTS,
  NO_CAR_WEIGHTS,
  PLACE_COUNT_SATURATION,
  RAIL_WEIGHTS,
  SAFETY_WEIGHTS,
  TIER_WEIGHTS,
  TRANSPORT_WEIGHTS,
} from "@/lib/scoring";
import { fmtScore } from "@/lib/format";

function WeightTable({ rows, unit = "peso" }: { rows: Array<[string, number | string]>; unit?: string }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="label-stencil text-left">
          <th className="py-1 font-normal">Componente</th>
          <th className="py-1 text-right font-normal">{unit}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k} className="border-t border-ink-800">
            <td className="py-1.5 text-concrete-300">{k}</td>
            <td className="py-1.5 text-right tabular text-concrete-100">{typeof v === "number" ? fmtScore(v) : v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function MethodologyPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="label-stencil mb-1">Cómo se calcula todo</div>
        <h1 className="text-3xl">Metodología</h1>
        <p className="mt-2 max-w-3xl text-sm text-concrete-400">
          Todas las puntuaciones salen de fórmulas fijas sobre datos curados a mano. Los pesos de esta página son los mismos
          que usa la app (una única fuente de verdad), así que cualquier "¿por qué?" de una ficha se reduce a estas tablas.
          Ningún número se ajusta a ojo: si un país sale mal parado, o cambian los datos o cambian los pesos, y ambos quedan
          registrados.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <Panel className="p-5">
          <SectionHeader title="Duke Score (0-100)" kicker="Suma de puntos" as="h3" />
          <p className="mt-2 text-xs text-concrete-400">
            Cada componente aporta como máximo los puntos indicados (proporcional a su valor 0-10). Coste e idioma van
            invertidos: cuanto más barato / más fácil, más puntos.
          </p>
          <div className="mt-3">
            <WeightTable rows={(Object.keys(DUKE_POINTS) as Array<keyof typeof DUKE_POINTS>).map((k) => [DUKE_LABELS[k], DUKE_POINTS[k]])} unit="máx. puntos" />
          </div>
          <div className="mt-3 text-xs text-concrete-400">
            <div className="label-stencil mb-1">Penalizaciones</div>
            <ul className="list-disc space-y-0.5 pl-4">
              <li>
                {DUKE_PENALTIES.riskZone.label}: {DUKE_PENALTIES.riskZone.points}
              </li>
              <li>
                {DUKE_PENALTIES.needsCar.label}: {DUKE_PENALTIES.needsCar.points}
              </li>
            </ul>
            <div className="label-stencil mb-1 mt-3">Veredicto</div>
            🔥 MUCHO ≥ {DUKE_VERDICT.mucho} · 👍 SÍ ≥ {DUKE_VERDICT.si} · 🤔 DEPENDE ≥ {DUKE_VERDICT.depende} · 👎 POCO por debajo
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionHeader title="Circo Score (0-10)" kicker="Media ponderada" as="h3" />
          <p className="mt-2 text-xs text-concrete-400">
            Nueve sub-puntuaciones asignadas a mano más "cantidad de lugares", que se calcula: imprescindibles ×{TIER_WEIGHTS[1]},
            notables ×{TIER_WEIGHTS[2]}, menores ×{TIER_WEIGHTS[3]}; con {PLACE_COUNT_SATURATION} puntos ponderados se alcanza el 10 (raíz cuadrada por debajo).
          </p>
          <div className="mt-3">
            <WeightTable rows={CIRCO_SUBS.map((k) => [CIRCO_SUB_LABEL[k], CIRCO_WEIGHTS[k]])} />
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionHeader title="Transporte público y viabilidad sin coche" as="h3" />
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <div className="label-stencil mb-1">Ferrocarril</div>
              <WeightTable rows={Object.entries(RAIL_WEIGHTS)} />
              <p className="mt-1 text-[11px] text-concrete-500">+0,25 si nocturnos ≥ 7 · +0,25 si alta velocidad ≥ 7</p>
            </div>
            <div>
              <div className="label-stencil mb-1">Transporte total</div>
              <WeightTable rows={Object.entries(TRANSPORT_WEIGHTS)} />
              <div className="label-stencil mb-1 mt-3">Sin coche</div>
              <WeightTable rows={[["Transporte del país", NO_CAR_WEIGHTS.transport], ["Acceso medio de los sitios", NO_CAR_WEIGHTS.accesoLugares]]} />
              <p className="mt-1 text-[11px] text-concrete-500">
                −0,5 si más del 40 % de los sitios dependen de excursión. Semáforo: {LIGHT_META.verde.emoji} ≥ {NO_CAR_LIGHTS.verde} ·{" "}
                {LIGHT_META.amarillo.emoji} ≥ {NO_CAR_LIGHTS.amarillo} · {LIGHT_META.naranja.emoji} ≥ {NO_CAR_LIGHTS.naranja} · {LIGHT_META.rojo.emoji} resto
              </p>
            </div>
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionHeader title="Días ideales" as="h3" />
          <div className="mt-3 text-sm text-concrete-300">
            <p className="text-xs text-concrete-400">
              {DAYS.base} días base + sitios (imprescindible {DAYS.tier[1]}, notable {DAYS.tier[2]}, menor {DAYS.tier[3]}) + desplazamientos
              (extensión en km entre {DAYS.travelKmBase} + {DAYS.travelKmPerTransportPoint}·transporte km/día) + {DAYS.excursion} por excursión +{" "}
              {DAYS.regionExtra} por región a partir de la tercera + {DAYS.festivalBonus} si hay festival que justifica el viaje {DAYS.expensivePenalty} si
              coste ≥ {DAYS.expensiveThreshold} / +{DAYS.cheapBonus} si coste ≤ {DAYS.cheapThreshold}. Acotado a {DAYS.min}-{DAYS.max}.
            </p>
            <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-concrete-400">
              <li>
                Visita rápida: {Math.round(DAYS.quick.min * 100)}-{Math.round(DAYS.quick.max * 100)} % del ideal (mínimo {DAYS.quick.floor})
              </li>
              <li>
                Viaje recomendado: ideal −{DAYS.recommended.below} … +{DAYS.recommended.above}
              </li>
              <li>
                Viaje completo: ideal +{DAYS.complete.above} … ×{DAYS.complete.factor} (máx. {DAYS.complete.cap})
              </li>
            </ul>
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionHeader title="Coste, Barcelona, seguridad" as="h3" />
          <div className="mt-3 space-y-3 text-xs text-concrete-400">
            <div>
              <div className="label-stencil mb-1">Coste (10 = carísimo) sobre €/día "normal"</div>
              {COST_CURVE.map(([e, s]) => `${e} € → ${s}`).join(" · ")}
            </div>
            <div>
              <div className="label-stencil mb-1">Facilidad desde Barcelona</div>
              Directo: {BCN_DIRECT.base} − {BCN_DIRECT.perHour} por hora sobre {BCN_DIRECT.freeHours} h, +{BCN_DIRECT.lowCostBonus} low-cost, +{BCN_DIRECT.weeklyBonus} si ≥{" "}
              {BCN_DIRECT.weeklyThreshold}/semana. Con escala: {BCN_ONE_STOP.base} − {BCN_ONE_STOP.perHour} por hora sobre {BCN_ONE_STOP.freeHours} h, +
              {BCN_ONE_STOP.optionsBonus} si ≥ {BCN_ONE_STOP.optionsThreshold} combinaciones diarias.
            </div>
            <div>
              <div className="label-stencil mb-1">Seguridad</div>
              <WeightTable rows={Object.entries(SAFETY_WEIGHTS)} />
              <p className="mt-1">Para el Duke: 0,7 · seguridad + 0,3 · viajero solo.</p>
            </div>
          </div>
        </Panel>

        <Panel className="p-5">
          <SectionHeader title="Idioma y facilidad digital" as="h3" />
          <div className="mt-3 grid gap-4 sm:grid-cols-2 text-xs text-concrete-400">
            <div>
              <div className="label-stencil mb-1">Dificultad de idioma (10 = difícil)</div>
              <WeightTable rows={Object.entries(LANGUAGE_WEIGHTS)} />
              <p className="mt-1">10 − facilidad ponderada, +1 si alfabeto distinto.</p>
            </div>
            <div>
              <div className="label-stencil mb-1">Facilidad digital</div>
              <WeightTable rows={Object.entries(DIGITAL_WEIGHTS)} />
              <p className="mt-1">−0,5 por cada servicio occidental bloqueado.</p>
            </div>
          </div>
        </Panel>
      </section>

      <Panel className="p-5">
        <SectionHeader title="Honestidad de los datos" as="h3" />
        <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-concrete-300">
          <li>Cada sección de cada ficha lleva fuente, fecha de actualización, confianza y volatilidad.</li>
          <li>Visados, seguridad, vuelos, cambio, precios, política, eventos y horarios son volátiles: caducan a los 6 meses y la app lo avisa.</li>
          <li>Los precios en euros son estimaciones orientativas, no tarifas.</li>
          <li>Si un valor se fija a mano en vez de calcularse, aparece marcado como "(manual)".</li>
          <li>No se inventan fotos: solo se enlazan imágenes con licencia y crédito verificados.</li>
        </ul>
      </Panel>
    </div>
  );
}
