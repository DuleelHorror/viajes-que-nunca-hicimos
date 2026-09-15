import type { Tag } from "@/lib/constants";
import type { ScoredCountry } from "./types";
import { TAG_THRESHOLDS as T } from "./weights";

const WINTER = [12, 1, 2];
const SUMMER = [6, 7, 8];

export function deriveTags(c: Omit<ScoredCountry, "tags">): Tag[] {
  const tags: Tag[] = [];
  const s = c.summary;
  const goodMonths = (months: number[]) =>
    s.months.filter((m) => months.includes(m.month) && (m.rating === "excelente" || m.rating === "bueno")).length;

  if (c.cost.value <= T.barato) tags.push("barato");
  if (c.transport.value >= T.buenTransporte) tags.push("buen-transporte");
  if (c.noCar.light === "verde" || c.noCar.light === "amarillo") tags.push("sin-coche");
  if (c.safety.value >= T.seguro) tags.push("seguro");
  if (s.traits.sovietico) tags.push("sovietico");
  if (s.traits.brutalista) tags.push("brutalista");
  if (c.subs.oscuridad >= T.oscuro) tags.push("oscuro");
  if (c.subs.rareza >= T.raro) tags.push("raro");
  if (c.subs.festivales >= T.festivales || s.festivals.filter((f) => f.planTripAround).length >= T.festivalesPlanificables) tags.push("festivales");
  if (c.subs.naturaleza >= T.naturaleza) tags.push("naturaleza");
  if (goodMonths(WINTER) >= T.estacionMinMesesBuenos) tags.push("invierno");
  if (s.traits.nieveFiable) tags.push("nieve");
  if (goodMonths(SUMMER) >= T.estacionMinMesesBuenos) tags.push("verano");
  if (s.traits.turismoMasivo <= T.pocoTurismo) tags.push("poco-turismo");
  if (s.traits.distanciaCultural >= T.muyDistinto) tags.push("muy-distinto");
  if (c.bcn.value >= T.facilBcn) tags.push("facil-desde-bcn");
  return tags;
}

/** ¿Encaja un viaje de N días en este país? (dentro de "rápida" o "recomendada") */
export function fitsDays(c: Pick<ScoredCountry, "days">, n: number): boolean {
  const inRange = ([a, b]: readonly [number, number]) => n >= a && n <= b;
  return inRange(c.days.quick) || inRange(c.days.recommended);
}
