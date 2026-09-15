import { LIGHT_META, type NoCarLight } from "@/lib/constants";
import type { MonthRating, PlaceStats, ScoreInputs } from "@/lib/schema";
import { clamp, round } from "@/lib/utils";
import type { Contribution, ScoreResult } from "./types";
import {
  BCN_DIRECT,
  BCN_ONE_STOP,
  COST_CURVE,
  DIGITAL_BLOCK_PENALTY,
  DIGITAL_WEIGHTS,
  LANGUAGE_ALPHABET_PENALTY,
  LANGUAGE_WEIGHTS,
  NO_CAR_EXCURSION_PENALTY,
  NO_CAR_LIGHTS,
  NO_CAR_WEIGHTS,
  PLACE_COUNT_SATURATION,
  RAIL_BONUS,
  RAIL_WEIGHTS,
  SAFETY_COMPOSITE,
  SAFETY_WEIGHTS,
  TIER_WEIGHTS,
  TRANSPORT_WEIGHTS,
} from "./weights";

const row = (key: string, label: string, points: number, max: number, extra?: Partial<Contribution>): Contribution => ({
  key,
  label,
  points: round(points, 2),
  max: round(max, 2),
  ...extra,
});

/** Media ponderada; `values` puede traer claves extra (p. ej. `meta`) que se ignoran. */
function weighted<K extends string>(
  values: Record<string, unknown>,
  weights: Record<K, number>,
  labels: Record<K, string>,
): ScoreResult {
  const breakdown: Contribution[] = [];
  let total = 0;
  for (const k of Object.keys(weights) as K[]) {
    const w = weights[k];
    const v = Number(values[k] ?? 0);
    total += v * w;
    breakdown.push(row(k, labels[k], v * w, 10 * w, { weight: w, input: v }));
  }
  return { value: round(clamp(total, 0, 10)), breakdown };
}

// ---------- Cantidad de lugares ----------
export function placeCountScore(stats: PlaceStats): ScoreResult {
  const t1 = stats.byTier[1] * TIER_WEIGHTS[1];
  const t2 = stats.byTier[2] * TIER_WEIGHTS[2];
  const t3 = stats.byTier[3] * TIER_WEIGHTS[3];
  const w = t1 + t2 + t3;
  const value = w >= PLACE_COUNT_SATURATION ? 10 : 10 * Math.sqrt(w / PLACE_COUNT_SATURATION);
  return {
    value: round(value),
    breakdown: [
      row("tier1", "Imprescindibles (×3)", t1, PLACE_COUNT_SATURATION, { input: stats.byTier[1] }),
      row("tier2", "Notables (×1,5)", t2, PLACE_COUNT_SATURATION, { input: stats.byTier[2] }),
      row("tier3", "Si pasas cerca (×0,75)", t3, PLACE_COUNT_SATURATION, { input: stats.byTier[3] }),
      row("total", `Puntos ponderados ${round(w)} de ${PLACE_COUNT_SATURATION} → raíz cuadrada`, value, 10),
    ],
  };
}

// ---------- Transporte ----------
export function railScore(rail: ScoreInputs["rail"]): ScoreResult {
  const base = weighted(rail, RAIL_WEIGHTS, {
    cobertura: "Cobertura",
    frecuencia: "Frecuencia",
    facilidadBilletes: "Facilidad para comprar billetes",
    calidad: "Calidad",
    puntualidad: "Puntualidad",
    precio: "Precio (10 = barato)",
  });
  let value = base.value;
  const breakdown = [...base.breakdown];
  if (rail.nocturnos >= RAIL_BONUS.threshold) {
    value += RAIL_BONUS.nocturnos;
    breakdown.push(row("nocturnos", "Bonus trenes nocturnos", RAIL_BONUS.nocturnos, RAIL_BONUS.nocturnos, { input: rail.nocturnos }));
  }
  if (rail.altaVelocidad >= RAIL_BONUS.threshold) {
    value += RAIL_BONUS.altaVelocidad;
    breakdown.push(row("av", "Bonus alta velocidad", RAIL_BONUS.altaVelocidad, RAIL_BONUS.altaVelocidad, { input: rail.altaVelocidad }));
  }
  return { value: round(clamp(value, 0, 10)), breakdown };
}

export function transportScore(inputs: ScoreInputs, rail: number): ScoreResult {
  return weighted(
    { rail, bus: inputs.bus.cobertura, urban: inputs.urban.media, apps: inputs.apps.cobertura },
    TRANSPORT_WEIGHTS,
    { rail: "Ferrocarril", bus: "Autobuses interurbanos", urban: "Transporte urbano", apps: "Apps de transporte" },
  );
}

export function noCarLight(value: number): NoCarLight {
  if (value >= NO_CAR_LIGHTS.verde) return "verde";
  if (value >= NO_CAR_LIGHTS.amarillo) return "amarillo";
  if (value >= NO_CAR_LIGHTS.naranja) return "naranja";
  return "rojo";
}

export function noCarViability(transport: number, stats: PlaceStats): ScoreResult & { light: NoCarLight } {
  const a = transport * NO_CAR_WEIGHTS.transport;
  const b = stats.accesoSinCocheMedio * NO_CAR_WEIGHTS.accesoLugares;
  let value = a + b;
  const breakdown = [
    row("transport", "Transporte público del país", a, 10 * NO_CAR_WEIGHTS.transport, { weight: NO_CAR_WEIGHTS.transport, input: transport }),
    row("acceso", "Acceso sin coche medio de los sitios", b, 10 * NO_CAR_WEIGHTS.accesoLugares, { weight: NO_CAR_WEIGHTS.accesoLugares, input: stats.accesoSinCocheMedio }),
  ];
  const ratio = stats.total > 0 ? stats.excursiones / stats.total : 0;
  if (ratio > NO_CAR_EXCURSION_PENALTY.ratio) {
    value -= NO_CAR_EXCURSION_PENALTY.points;
    breakdown.push(row("excursiones", `Muchos sitios dependen de excursión (${Math.round(ratio * 100)} %)`, -NO_CAR_EXCURSION_PENALTY.points, 0));
  }
  const v = round(clamp(value, 0, 10));
  const light = noCarLight(v);
  breakdown.push(row("light", `Semáforo: ${LIGHT_META[light].emoji} ${LIGHT_META[light].label}`, 0, 0));
  return { value: v, breakdown, light };
}

// ---------- Coste ----------
export function costFromDaily(eur: number): number {
  const pts = COST_CURVE;
  if (eur <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) {
    const [x1, y1] = pts[i];
    const [x0, y0] = pts[i - 1];
    if (eur <= x1) return y0 + ((eur - x0) / (x1 - x0)) * (y1 - y0);
  }
  return pts[pts.length - 1][1];
}

export function costScore(cost: ScoreInputs["cost"]): ScoreResult & { manual: boolean } {
  const computed = round(costFromDaily(cost.daily.normal));
  if (cost.override != null) {
    return {
      value: cost.override,
      manual: true,
      breakdown: [
        row("override", "Valor fijado manualmente", cost.override, 10, { note: `Curva daría ${computed} con ${cost.daily.normal} €/día` }),
      ],
    };
  }
  return {
    value: computed,
    manual: false,
    breakdown: [
      row("daily", `Presupuesto diario "normal": ${cost.daily.normal} €`, computed, 10, { input: cost.daily.normal, note: "Curva 40 €→1 · 70→3 · 100→5 · 140→7 · 200→9 · 260→10" }),
    ],
  };
}

// ---------- Barcelona ----------
export function bcnEase(f: ScoreInputs["flights"]): ScoreResult {
  const breakdown: Contribution[] = [];
  let value: number;
  if (f.direct) {
    const h = f.directHours ?? 3;
    const penalty = Math.max(0, h - BCN_DIRECT.freeHours) * BCN_DIRECT.perHour;
    value = BCN_DIRECT.base - penalty;
    breakdown.push(row("direct", "Vuelo directo desde BCN", BCN_DIRECT.base, 10));
    if (penalty > 0) breakdown.push(row("hours", `Duración ${h} h (−0,5 por hora sobre ${BCN_DIRECT.freeHours})`, -penalty, 0, { input: h }));
    if (f.lowCostDirect) {
      value += BCN_DIRECT.lowCostBonus;
      breakdown.push(row("lowcost", "Low-cost directo", BCN_DIRECT.lowCostBonus, BCN_DIRECT.lowCostBonus));
    }
    if ((f.directWeekly ?? 0) >= BCN_DIRECT.weeklyThreshold) {
      value += BCN_DIRECT.weeklyBonus;
      breakdown.push(row("weekly", "Al menos diario", BCN_DIRECT.weeklyBonus, BCN_DIRECT.weeklyBonus, { input: f.directWeekly }));
    }
  } else {
    const penalty = Math.max(0, f.oneStopMinHours - BCN_ONE_STOP.freeHours) * BCN_ONE_STOP.perHour;
    value = BCN_ONE_STOP.base - penalty;
    breakdown.push(row("onestop", "Sin directo: base con una escala", BCN_ONE_STOP.base, 10));
    if (penalty > 0) breakdown.push(row("hours", `Mejor tiempo total ${f.oneStopMinHours} h (−0,25 por hora sobre ${BCN_ONE_STOP.freeHours})`, -penalty, 0, { input: f.oneStopMinHours }));
    if (f.oneStopDailyOptions >= BCN_ONE_STOP.optionsThreshold) {
      value += BCN_ONE_STOP.optionsBonus;
      breakdown.push(row("options", "Varias combinaciones diarias", BCN_ONE_STOP.optionsBonus, BCN_ONE_STOP.optionsBonus, { input: f.oneStopDailyOptions }));
    }
  }
  return { value: round(clamp(value, 0, 10)), breakdown };
}

// ---------- Seguridad ----------
export function safetyScore(s: ScoreInputs["safety"]): { raw: ScoreResult; composite: ScoreResult } {
  const raw = weighted(s, SAFETY_WEIGHTS, {
    delincuencia: "Criminalidad",
    robos: "Robos",
    timos: "Estafas",
    zonasConflicto: "Zonas conflictivas",
    terrorismo: "Terrorismo",
    transporte: "Transporte público",
    camaraEnCalle: "Caminar con cámara",
    noche: "Noche",
  });
  const a = raw.value * SAFETY_COMPOSITE.safety;
  const b = s.solo * SAFETY_COMPOSITE.solo;
  return {
    raw,
    composite: {
      value: round(a + b),
      breakdown: [
        row("safety", "Seguridad general", a, 10 * SAFETY_COMPOSITE.safety, { weight: SAFETY_COMPOSITE.safety, input: raw.value }),
        row("solo", "Viajero solo", b, 10 * SAFETY_COMPOSITE.solo, { weight: SAFETY_COMPOSITE.solo, input: s.solo }),
      ],
    },
  };
}

// ---------- Idioma (10 = difícil) ----------
export function languageDifficulty(l: ScoreInputs["language"]): ScoreResult {
  const ease = weighted(l, LANGUAGE_WEIGHTS, {
    ingles: "Nivel de inglés",
    senaleticaBilingue: "Señalización bilingüe",
    maquinasEnIngles: "Máquinas en inglés",
    traductorFunciona: "Traductor móvil útil",
  });
  let value = 10 - ease.value;
  const breakdown = ease.breakdown.map((c) => ({ ...c, label: `${c.label} (resta dificultad)`, points: -c.points }));
  breakdown.unshift(row("base", "Dificultad base", 10, 10));
  if (l.alfabetoDistinto) {
    value += LANGUAGE_ALPHABET_PENALTY;
    breakdown.push(row("alfabeto", "Alfabeto distinto", LANGUAGE_ALPHABET_PENALTY, LANGUAGE_ALPHABET_PENALTY));
  }
  return { value: round(clamp(value, 0, 10)), breakdown };
}

// ---------- Digital ----------
export function digitalEase(d: ScoreInputs["digital"]): ScoreResult {
  const lvl = (n: number) => (n / 2) * 10;
  const base = weighted(
    {
      googleMaps: lvl(d.googleMaps),
      googleTranslate: lvl(d.googleTranslate),
      tarjetas: d.tarjetas,
      contactless: d.contactless,
      efectivo: 10 - d.efectivoNecesario,
      esim: lvl(d.esim),
      cobertura: d.cobertura,
      wifi: d.wifi,
    },
    DIGITAL_WEIGHTS,
    {
      googleMaps: "Google Maps funciona",
      googleTranslate: "Google Translate funciona",
      tarjetas: "Tarjetas aceptadas",
      contactless: "Apple/Google Pay",
      efectivo: "Poca necesidad de efectivo",
      esim: "eSIM disponible",
      cobertura: "Cobertura móvil",
      wifi: "Wi-Fi",
    },
  );
  let value = base.value;
  const breakdown = [...base.breakdown];
  if (d.bloqueos.length) {
    const p = d.bloqueos.length * DIGITAL_BLOCK_PENALTY;
    value -= p;
    breakdown.push(row("bloqueos", `Servicios bloqueados: ${d.bloqueos.join(", ")}`, -p, 0));
  }
  return { value: round(clamp(value, 0, 10)), breakdown };
}

// ---------- Temporada ----------
export function seasonScore(months: MonthRating[]): ScoreResult {
  const exc = months.filter((m) => m.rating === "excelente").length;
  const good = months.filter((m) => m.rating === "bueno").length;
  const value = ((exc + 0.5 * good) / 12) * 10;
  return {
    value: round(value),
    breakdown: [
      row("exc", "Meses excelentes (×1)", (exc / 12) * 10, 10, { input: exc }),
      row("good", "Meses buenos (×0,5)", ((0.5 * good) / 12) * 10, 10, { input: good }),
    ],
  };
}
