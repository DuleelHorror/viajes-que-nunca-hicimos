/**
 * print-scores.ts — Imprime las puntuaciones calculadas de todos los países (calibración de pesos).
 * Uso: npx tsx scripts/print-scores.ts
 */
import { scoreCountry } from "../src/lib/scoring/index";
import { summary as uz } from "../src/data/countries/uz/summary";
import { summary as sco } from "../src/data/countries/sco/summary";
import { summary as it } from "../src/data/countries/it/summary";
import { summary as at } from "../src/data/countries/at/summary";
import { summary as se } from "../src/data/countries/se/summary";
import { summary as jp } from "../src/data/countries/jp/summary";
import { summary as ge } from "../src/data/countries/ge/summary";
import { summary as am } from "../src/data/countries/am/summary";

for (const s of [uz, sco, it, at, se, jp, ge, am]) {
  const c = scoreCountry(s);
  console.log(`\n=== ${s.name}: DUKE ${c.duke.value}/100 (${c.duke.verdict}) · circo ${c.circo.value} · días ${c.days.ideal} (rápida ${c.days.quick.join("-")} · rec ${c.days.recommended.join("-")} · completa ${c.days.complete.join("-")})`);
  console.log(`  transporte ${c.transport.value} · rail ${c.rail.value} · sin coche ${c.noCar.value} ${c.noCar.light} · coste ${c.cost.value} · bcn ${c.bcn.value} · seguridad ${c.safety.value} · idioma ${c.language.value} · digital ${c.digital.value} · temporada ${c.season.value} · estabilidad ${c.stability}`);
  console.log(`  subs ${Object.entries(c.subs).map(([k, v]) => `${k}=${v}`).join(" ")}`);
  console.log(`  duke ${c.duke.breakdown.map((b) => `${b.key}=${b.points}/${b.max}`).join(" ")} · penalizaciones: ${c.duke.penalties.map((p) => p.key).join(",") || "ninguna"}`);
  console.log(`  tags ${c.tags.join(", ")}`);
}
