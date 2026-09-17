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
import { summary as se } from "./countries/se/summary";
import { summary as jp } from "./countries/jp/summary";
import { summary as ge } from "./countries/ge/summary";
import { summary as am } from "./countries/am/summary";
import { summary as kz } from "./countries/kz/summary";
import { summary as mn } from "./countries/mn/summary";
import { summary as cn } from "./countries/cn/summary";
import { summary as ro } from "./countries/ro/summary";
import { summary as bg } from "./countries/bg/summary";
import { summary as rs } from "./countries/rs/summary";
import { summary as ba } from "./countries/ba/summary";
import { summary as al } from "./countries/al/summary";
import { summary as md } from "./countries/md/summary";
import { summary as ee } from "./countries/ee/summary";
import { summary as lv } from "./countries/lv/summary";
import { summary as lt } from "./countries/lt/summary";
import { summary as pl } from "./countries/pl/summary";
import { summary as tr } from "./countries/tr/summary";
import { summary as kg } from "./countries/kg/summary";
import { summary as hu } from "./countries/hu/summary";
import { summary as sk } from "./countries/sk/summary";
import { summary as mk } from "./countries/mk/summary";
import { summary as me } from "./countries/me/summary";
import { summary as kr } from "./countries/kr/summary";
import { summary as cy } from "./countries/cy/summary";
import { summary as gr } from "./countries/gr/summary";
import { summary as si } from "./countries/si/summary";
import { summary as hr } from "./countries/hr/summary";
import { summary as de } from "./countries/de/summary";
import { summary as fi } from "./countries/fi/summary";

const RAW: CountrySummary[] = [uz, sco, it, at, se, jp, ge, am, kz, mn, cn, ro, bg, rs, ba, al, md, ee, lv, lt, pl, tr, kg, hu, sk, mk, me, kr, cy, gr, si, hr, de, fi];

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
  se: () => import("./countries/se"),
  jp: () => import("./countries/jp"),
  ge: () => import("./countries/ge"),
  am: () => import("./countries/am"),
  kz: () => import("./countries/kz"),
  mn: () => import("./countries/mn"),
  cn: () => import("./countries/cn"),
  ro: () => import("./countries/ro"),
  bg: () => import("./countries/bg"),
  rs: () => import("./countries/rs"),
  ba: () => import("./countries/ba"),
  al: () => import("./countries/al"),
  md: () => import("./countries/md"),
  ee: () => import("./countries/ee"),
  lv: () => import("./countries/lv"),
  lt: () => import("./countries/lt"),
  pl: () => import("./countries/pl"),
  tr: () => import("./countries/tr"),
  kg: () => import("./countries/kg"),
  hu: () => import("./countries/hu"),
  sk: () => import("./countries/sk"),
  mk: () => import("./countries/mk"),
  me: () => import("./countries/me"),
  kr: () => import("./countries/kr"),
  cy: () => import("./countries/cy"),
  gr: () => import("./countries/gr"),
  si: () => import("./countries/si"),
  hr: () => import("./countries/hr"),
  de: () => import("./countries/de"),
  fi: () => import("./countries/fi"),
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
