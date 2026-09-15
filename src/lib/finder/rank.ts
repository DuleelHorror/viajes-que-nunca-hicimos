/**
 * rank.ts — Buscador de viajes: ordena países según mes, duración, presupuesto,
 * necesidad de ir sin coche, temperatura e intereses. Puro; explica cada punto.
 */
import { MONTH_RATING_META, monthName, type PlaceCategory } from "@/lib/constants";
import type { Festival, TripRoute } from "@/lib/schema";
import type { Contribution, ScoredCountry } from "@/lib/scoring";
import { round } from "@/lib/utils";

export type NoCarPref = "imprescindible" | "preferible" | "indiferente";
export type TempPref = "frio" | "templado" | "calor" | "indiferente";

export interface FinderInput {
  month: number;
  days: number;
  budgetPerDay: number;
  noCar: NoCarPref;
  temp: TempPref;
  interests: PlaceCategory[];
}

export const FINDER_DEFAULTS: FinderInput = {
  month: 1,
  days: 10,
  budgetPerDay: 90,
  noCar: "imprescindible",
  temp: "indiferente",
  interests: [],
};

export const FINDER_MAX = { month: 25, days: 15, budget: 15, noCar: 15, temp: 10, interests: 20 } as const;

export interface FinderResult {
  country: ScoredCountry;
  total: number;
  components: Contribution[];
  excluded?: string;
  festivalsThatMonth: Festival[];
  monthRating: ScoredCountry["summary"]["months"][number];
}

const NO_CAR_POINTS: Record<NoCarPref, Record<ScoredCountry["noCar"]["light"], number | null>> = {
  imprescindible: { verde: 15, amarillo: 10, naranja: 3, rojo: null },
  preferible: { verde: 15, amarillo: 11, naranja: 7, rojo: 3 },
  indiferente: { verde: 15, amarillo: 13, naranja: 11, rojo: 9 },
};

/** Categoría de interés → sub-score del Circo que la representa */
export function interestSub(c: ScoredCountry, cat: PlaceCategory): number {
  const s = c.subs;
  switch (cat) {
    case "dark":
    case "war":
    case "occult":
      return s.oscuridad;
    case "soviet":
    case "brutalism":
    case "industrial":
    case "infrastructure":
      return s.arquitectura;
    case "abandoned":
    case "disaster":
      return (s.oscuridad + s.rareza) / 2;
    case "folklore":
      return s.folclore;
    case "festival":
      return s.festivales;
    case "weird":
    case "wtf":
      return s.rareza;
    case "historical":
      return s.historia;
    case "nature":
      return s.naturaleza;
  }
}

function tempPoints(pref: TempPref, mean: number): number {
  if (pref === "indiferente") return 7;
  const target = pref === "frio" ? 5 : pref === "templado" ? 17 : 24;
  const dist = pref === "frio" ? Math.max(0, mean - target) : pref === "calor" ? Math.max(0, target - mean) : Math.abs(mean - target) - 5;
  return Math.max(0, 10 * (1 - Math.max(0, dist) / 12));
}

export function rankCountries(countries: ScoredCountry[], input: FinderInput): FinderResult[] {
  const results = countries.map((c) => rankOne(c, input));
  return results.sort((a, b) => {
    if (a.excluded && !b.excluded) return 1;
    if (!a.excluded && b.excluded) return -1;
    return b.total - a.total;
  });
}

export function rankOne(c: ScoredCountry, input: FinderInput): FinderResult {
  const comps: Contribution[] = [];
  const s = c.summary;
  const m = s.months.find((x) => x.month === input.month) ?? s.months[0];
  const festivalsThatMonth = s.festivals.filter((f) => f.month === input.month);

  // Mes
  const ratingPts = { excelente: 25, bueno: 18, normal: 10, malo: 0 }[m.rating];
  let monthPts = ratingPts;
  const monthNotes: string[] = [`${monthName(input.month)}: ${MONTH_RATING_META[m.rating].label}`];
  const plannable = festivalsThatMonth.filter(
    (f) => f.planTripAround && (input.interests.length === 0 || input.interests.includes(f.category) || f.category === "festival"),
  );
  if (plannable.length) {
    monthPts += 3;
    monthNotes.push(`festival: ${plannable[0].name}`);
  }
  if (m.weatherAdds) {
    monthPts += 2;
    monthNotes.push("el clima suma");
  }
  monthPts = Math.min(FINDER_MAX.month, monthPts);
  comps.push({ key: "month", label: monthNotes.join(" · "), points: monthPts, max: FINDER_MAX.month });

  // Duración
  const [rMin, rMax] = c.days.recommended;
  let daysPts: number;
  let daysLabel: string;
  if (input.days >= rMin && input.days <= rMax) {
    daysPts = FINDER_MAX.days;
    daysLabel = `${input.days} días encaja (recomendado ${rMin}-${rMax})`;
  } else if (input.days < c.days.quick[0]) {
    daysPts = 3;
    daysLabel = `${input.days} días se queda muy corto (mínimo ${c.days.quick[0]})`;
  } else {
    const ratio = Math.abs(input.days - c.days.ideal) / c.days.ideal;
    daysPts = round(FINDER_MAX.days * Math.max(0, 1 - ratio), 1);
    daysLabel = input.days > rMax ? `${input.days} días: te sobran (ideal ${c.days.ideal})` : `${input.days} días: algo justo (ideal ${c.days.ideal})`;
  }
  comps.push({ key: "days", label: daysLabel, points: daysPts, max: FINDER_MAX.days });

  // Presupuesto
  const daily = s.inputs.cost.daily;
  const r = input.budgetPerDay / daily.normal;
  let budgetPts: number;
  let budgetLabel: string;
  if (r >= 1.2) {
    budgetPts = 15;
    budgetLabel = `${input.budgetPerDay} €/día holgado (normal ${daily.normal} €)`;
  } else if (r >= 1) {
    budgetPts = round(12 + ((r - 1) / 0.2) * 3, 1);
    budgetLabel = `${input.budgetPerDay} €/día ajustado (normal ${daily.normal} €)`;
  } else if (input.budgetPerDay >= daily.low) {
    budgetPts = round(6 + ((input.budgetPerDay - daily.low) / (daily.normal - daily.low)) * 6, 1);
    budgetLabel = `${input.budgetPerDay} €/día en modo low cost (${daily.low}-${daily.normal} €)`;
  } else {
    budgetPts = 0;
    budgetLabel = `${input.budgetPerDay} €/día no llega (mínimo ${daily.low} €)`;
  }
  comps.push({ key: "budget", label: budgetLabel, points: budgetPts, max: FINDER_MAX.budget });

  // Sin coche
  const light = c.noCar.light;
  const ncp = NO_CAR_POINTS[input.noCar][light];
  let excluded: string | undefined;
  if (ncp == null) {
    excluded = "Necesitarías coche o depender de tours: descartado con 'sin coche imprescindible'";
    comps.push({ key: "noCar", label: "🔴 coche prácticamente necesario", points: 0, max: FINDER_MAX.noCar });
  } else {
    const emoji = { verde: "🟢", amarillo: "🟡", naranja: "🟠", rojo: "🔴" }[light];
    comps.push({ key: "noCar", label: `${emoji} sin coche ${c.noCar.value}/10`, points: ncp, max: FINDER_MAX.noCar });
  }

  // Temperatura
  const mean = (m.tempMin + m.tempMax) / 2;
  const tp = round(tempPoints(input.temp, mean), 1);
  comps.push({
    key: "temp",
    label: input.temp === "indiferente" ? `Temperatura indiferente (${m.tempMin}…${m.tempMax} °C)` : `${m.tempMin}…${m.tempMax} °C para preferencia "${input.temp}"`,
    points: tp,
    max: FINDER_MAX.temp,
  });

  // Intereses
  let intPts: number;
  let intLabel: string;
  if (input.interests.length === 0) {
    intPts = round(c.circo.value * 2, 1);
    intLabel = `Sin intereses concretos: Circo Score ${c.circo.value}`;
  } else {
    const parts = input.interests.map((cat) => {
      const sub = interestSub(c, cat) / 10;
      const n = s.placeStats.byCategory[cat] ?? 0;
      return 0.6 * sub + 0.4 * Math.min(1, n / 4);
    });
    const mean = parts.reduce((a, b) => a + b, 0) / parts.length;
    intPts = round(mean * FINDER_MAX.interests, 1);
    intLabel = `Intereses (${input.interests.length}): media ${round(mean * 10)}/10`;
  }
  comps.push({ key: "interests", label: intLabel, points: intPts, max: FINDER_MAX.interests });

  // Ajustes
  if (c.safety.value < 5) comps.push({ key: "safety", label: "Ojo con la seguridad", points: -5, max: 0 });
  if (c.bcn.value >= 8) comps.push({ key: "bcn", label: "Vuelo directo cómodo desde BCN", points: 3, max: 0 });

  const total = excluded ? 0 : round(Math.max(0, comps.reduce((a, x) => a + x.points, 0)), 1);
  return { country: c, total, components: comps, excluded, festivalsThatMonth, monthRating: m };
}

/** Ruta propuesta cuyo número de días queda más cerca del pedido */
export function closestRoute(routes: TripRoute[], days: number): TripRoute | undefined {
  return [...routes].sort((a, b) => Math.abs(a.days - days) - Math.abs(b.days - days))[0];
}
