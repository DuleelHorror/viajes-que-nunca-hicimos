import type { Place, PlaceStats } from "@/lib/schema";
import { round } from "@/lib/utils";
import { TIER_WEIGHTS } from "./weights";

const R = 6371;
export function haversineKm([lat1, lon1]: [number, number], [lat2, lon2]: [number, number]): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

/**
 * Estadísticas derivadas de la lista de sitios. `summary.placeStats` debe coincidir
 * con esto (test de deriva); `npm run data:stats -- <id>` imprime el bloque.
 */
export function computePlaceStats(places: Place[]): PlaceStats {
  const byTier = { 1: 0, 2: 0, 3: 0 };
  const byCategory: Record<string, number> = {};
  let wSum = 0;
  let wAcc = 0;
  for (const p of places) {
    byTier[p.tier]++;
    const cat = p.categories[0];
    byCategory[cat] = (byCategory[cat] ?? 0) + 1;
    const w = TIER_WEIGHTS[p.tier];
    wSum += w;
    wAcc += w * p.scores.accesoSinCoche;
  }
  const main = places.filter((p) => p.tier <= 2);
  const pts = (main.length ? main : places).map((p) => p.coords);
  let spreadKm = 0;
  if (pts.length >= 2) {
    const lats = pts.map((c) => c[0]);
    const lngs = pts.map((c) => c[1]);
    spreadKm = Math.round(haversineKm([Math.min(...lats), Math.min(...lngs)], [Math.max(...lats), Math.max(...lngs)]) / 10) * 10;
  }
  return {
    total: places.length,
    byTier,
    byCategory,
    accesoSinCocheMedio: wSum ? round(wAcc / wSum) : 0,
    excursiones: places.filter((p) => p.transport.isExcursion).length,
    regiones: new Set(places.map((p) => p.regionName)).size,
    spreadKm,
  };
}
