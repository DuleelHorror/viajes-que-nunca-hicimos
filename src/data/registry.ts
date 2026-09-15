/**
 * registry.ts — Registro de países.
 *  - SUMMARIES: importación eager de los summaries (ligeros) → scoring en el arranque.
 *  - loadCountry(id): importación dinámica memoizada de la ficha completa (lazy chunk por país).
 *  - FESTIVALS: todos los festivales aplanados con countryId (explorador global).
 */
import type { CountryDetail, CountrySummary, Festival } from "@/lib/schema";
import { CountrySummarySchema, CountryDetailSchema } from "@/lib/schema";
import { scoreCountry, type ScoredCountry } from "@/lib/scoring";
import { flagCode } from "@/lib/flags";
import { summary as uz } from "./countries/uz/summary";
import { summary as sco } from "./countries/sco/summary";
import { summary as it } from "./countries/it/summary";
import { summary as at } from "./countries/at/summary";

const RAW: CountrySummary[] = [uz, sco, it, at];

const DEV = import.meta.env.DEV;

export const SUMMARIES: Record<string, CountrySummary> = Object.fromEntries(
  RAW.map((s) => [s.id, DEV ? CountrySummarySchema.parse(s) : s]),
);

export const COUNTRIES: ScoredCountry[] = RAW.map((s) => scoreCountry(SUMMARIES[s.id])).sort(
  (a, b) => b.duke.value - a.duke.value,
);

export const COUNTRY_IDS = COUNTRIES.map((c) => c.id);

export function getCountry(id: string | undefined): ScoredCountry | undefined {
  return COUNTRIES.find((c) => c.id === id);
}

/** `flag` es el código para flagcdn (uz, gb-sct), no el emoji. */
export type FestivalWithCountry = Festival & { countryId: string; countryName: string; flag: string };

export const FESTIVALS: FestivalWithCountry[] = COUNTRIES.flatMap((c) =>
  c.summary.festivals.map((f) => ({ ...f, countryId: c.id, countryName: c.summary.name, flag: flagCode(c.summary) })),
).sort((a, b) => a.month - b.month);

const loaders: Record<string, () => Promise<{ default: CountryDetail }>> = {
  uz: () => import("./countries/uz"),
  sco: () => import("./countries/sco"),
  it: () => import("./countries/it"),
  at: () => import("./countries/at"),
};

const cache = new Map<string, Promise<CountryDetail>>();

export function loadCountry(id: string): Promise<CountryDetail> {
  const loader = loaders[id];
  if (!loader) return Promise.reject(new Error(`País desconocido: ${id}`));
  let p = cache.get(id);
  if (!p) {
    p = loader().then((m) => (DEV ? CountryDetailSchema.parse(m.default) : m.default));
    cache.set(id, p);
  }
  return p;
}

export const LOADER_IDS = Object.keys(loaders);
