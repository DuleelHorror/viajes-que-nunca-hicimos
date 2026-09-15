/**
 * data-stats.ts — Imprime el bloque `placeStats` calculado a partir de places.ts de un país.
 * Uso: npm run data:stats -- uz
 */
import { computePlaceStats } from "../src/lib/scoring/placeStats";

const id = process.argv[2];
if (!id) {
  console.error("Uso: npm run data:stats -- <countryId>");
  process.exit(1);
}

const mod = await import(`../src/data/countries/${id}/places.ts`);
const stats = computePlaceStats(mod.places);
console.log(`// placeStats para ${id} (pegar en summary.ts)`);
console.log(JSON.stringify(stats, null, 2));
