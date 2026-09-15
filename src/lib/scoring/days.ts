import type { CountrySummary, Range } from "@/lib/schema";
import { clamp, round } from "@/lib/utils";
import type { Contribution, DaysResult } from "./types";
import { DAYS } from "./weights";

export function idealDays(summary: CountrySummary, transport: number, cost: number): DaysResult {
  const s = summary.placeStats;
  const b: Contribution[] = [];
  const add = (key: string, label: string, points: number, input?: number, note?: string) => {
    b.push({ key, label, points: round(points, 2), max: 0, input, note });
    return points;
  };

  let total = 0;
  total += add("base", "Llegada + salida", DAYS.base);
  total += add(
    "places",
    "Sitios (0,6 por imprescindible · 0,3 notable · 0,1 menor)",
    s.byTier[1] * DAYS.tier[1] + s.byTier[2] * DAYS.tier[2] + s.byTier[3] * DAYS.tier[3],
    s.total,
  );
  const kmPerDay = DAYS.travelKmBase + DAYS.travelKmPerTransportPoint * transport;
  total += add("travel", `Desplazamientos: ${s.spreadKm} km a ~${Math.round(kmPerDay)} km/día de viaje`, s.spreadKm / kmPerDay, s.spreadKm);
  total += add("excursions", "Excursiones (0,5 cada una)", s.excursiones * DAYS.excursion, s.excursiones);
  total += add("regions", `Regiones distintas (0,5 por cada una sobre ${DAYS.regionFree})`, Math.max(0, s.regiones - DAYS.regionFree) * DAYS.regionExtra, s.regiones);
  const hasPlannable = summary.festivals.some((f) => f.planTripAround);
  if (hasPlannable) total += add("festival", "Hay festival que justifica organizar el viaje", DAYS.festivalBonus);
  if (cost >= DAYS.expensiveThreshold) total += add("expensive", "País caro: recorta", DAYS.expensivePenalty, cost);
  else if (cost <= DAYS.cheapThreshold) total += add("cheap", "País barato: alarga", DAYS.cheapBonus, cost);

  const ideal = Math.round(clamp(total, DAYS.min, DAYS.max));
  b.push({ key: "ideal", label: `Suma ${round(total)} → acotado a ${DAYS.min}-${DAYS.max}`, points: ideal, max: DAYS.max });

  const computed = {
    quick: [Math.max(DAYS.quick.floor, Math.round(ideal * DAYS.quick.min)), Math.round(ideal * DAYS.quick.max)] as Range,
    recommended: [ideal - DAYS.recommended.below, ideal + DAYS.recommended.above] as Range,
    complete: [ideal + DAYS.complete.above, Math.min(DAYS.complete.cap, Math.round(ideal * DAYS.complete.factor))] as Range,
  };
  const o = summary.daysOverride;
  return {
    ideal,
    quick: o?.quick ?? computed.quick,
    recommended: o?.recommended ?? computed.recommended,
    complete: o?.complete ?? computed.complete,
    breakdown: b,
    overridden: Boolean(o),
  };
}
