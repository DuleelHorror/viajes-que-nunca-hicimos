/**
 * archiveMap.ts — Geometrías para el mapa de la home.
 * Siluetas de países de Natural Earth 1:110m vía `world-atlas` (TopoJSON, 108 KB para el mundo entero)
 * más Escocia recortada aparte (`data/geo/scotland.json`), porque los atlas la traen pegada al Reino Unido.
 */
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { Feature, Geometry } from "geojson";
import world from "world-atlas/countries-110m.json";
import scotland from "@/data/geo/scotland.json";

/** ISO 3166-1 numérico (como lo usa world-atlas) de cada país con ficha. Escocia va aparte. */
export const FICHA_NUMERIC: Record<string, string> = {
  gr: "300",
  cy: "196",
  kr: "410",
  me: "499",
  mk: "807",
  sk: "703",
  hu: "348",
  kg: "417",
  tr: "792",
  pl: "616",
  lt: "440",
  lv: "428",
  ee: "233",
  md: "498",
  al: "008",
  ba: "070",
  rs: "688",
  bg: "100",
  ro: "642",
  cn: "156",
  mn: "496",
  kz: "398",
  am: "051",
  ge: "268",
  uz: "860",
  it: "380",
  at: "040",
  se: "752",
  jp: "392",
};

/** Los del radar (`data/candidates.ts`), por su alpha-2. */
export const CANDIDATE_NUMERIC: Record<string, string> = {
  de: "276",
  si: "705",
  hr: "191",
  fi: "246",
};

export type MapFeature = Feature<Geometry, { name?: string }>;

export function worldFeatures(): MapFeature[] {
  const topo = world as unknown as Topology<{ countries: GeometryCollection<{ name: string }> }>;
  return feature(topo, topo.objects.countries).features as MapFeature[];
}

export const SCOTLAND = scotland as MapFeature;
