import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · North Macedonia", url: "https://www.seat61.com/Macedonia.htm", kind: "blog" as const };
const MZ = { label: "Ferrocarriles de Macedonia del Norte (MŽ)", url: "https://mzt.mk/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "media", sources: [SEAT61, MZ], notes: "Una línea que sirve (Skopje–Bitola, 4 al día); el resto del país va en bus" });

export const cities: City[] = [
  {
    id: "mk-skopje",
    name: "Skopje",
    coords: [41.9973, 21.4280],
    isCapital: true,
    population: 600_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 5, ticket: "bus 0,60 € (35 den) con tarjeta Skopska; taxi 2-3 € en el centro", note: "el centro de estatuas y el bazar se andan; la estación-bus de Tange (Transporten Centar) está a 15 min al este" },
  },
  {
    id: "mk-bitola",
    name: "Bitola",
    coords: [41.0297, 21.3292],
    population: 70_000,
    urban: { modes: ["a-pie", "taxi"], score: 4, ticket: "todo a pie; a Heraclea, 2 km andando o taxi de 2 €", note: "la ciudad de los cónsules, al final del tren; Heraclea a un paseo" },
  },
  {
    id: "mk-ohrid",
    name: "Ohrid",
    coords: [41.1172, 20.8019],
    population: 40_000,
    urban: { modes: ["a-pie", "bus", "ferry"], score: 5, ticket: "bus a San Naum 2 €; barcos por el lago desde el puerto", note: "el lago UNESCO; sin tren, 9 buses al día desde Skopje" },
  },
  {
    id: "mk-krusevo",
    name: "Kruševo",
    coords: [41.3703, 21.2483],
    population: 5_000,
    urban: { modes: ["a-pie"], score: 3, ticket: "todo a pie; el Makedonium, a 20 min cuesta arriba", note: "la ciudad más alta de los Balcanes (1.350 m), con tres buses al día desde Skopje" },
  },
  {
    id: "mk-tetovo",
    name: "Tetovo",
    coords: [42.0106, 20.9714],
    population: 85_000,
    urban: { modes: ["a-pie", "bus"], score: 4, ticket: "todo a pie desde la estación de buses", note: "la ciudad albanesa a 40 min de Skopje; la mezquita pintada y la tekke bektashi" },
  },
];

export const airports: Airport[] = [
  { code: "SKP", name: "Skopje", cityId: "mk-skopje", coords: [41.9616, 21.6214], international: true },
  { code: "OHD", name: "Ohrid San Pablo Apóstol", cityId: "mk-ohrid", coords: [41.18, 20.7423], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "mk-skopje-bitola",
    name: "Skopje–Veles–Prilep–Bitola",
    stops: ["mk-skopje", "mk-bitola"],
    kind: "regional",
    frequency: "4 al día (el primero a las 14:30, el último a las 20:05)",
    durationNote: "≈ 3 h 25 por el Vardar y Pelagonia en trenes viejos; desde Prilep hay bus a Kruševo (40 min)",
    price: "≈ 5-8 €",
    operator: "MŽ Transport",
    booking: "taquilla de la estación de Tange; sin online que funcione",
    quality: 3,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "mk-bus-skopje-ohrid", label: "Bus Skopje → Ohrid", from: "mk-skopje", to: "mk-ohrid", mode: "bus", note: "9 al día (06:30-19:30), 3-3,5 h, 950-980 den (≈ 16 €); desde el Transporten Centar" },
  { id: "mk-bus-skopje-krusevo", label: "Bus Skopje → Kruševo", from: "mk-skopje", to: "mk-krusevo", mode: "bus", note: "3 directos al día (07:45 el primero, 19:00 el último), 2 h; o vía Prilep" },
  { id: "mk-bus-bitola-ohrid", label: "Bus Bitola → Ohrid", from: "mk-bitola", to: "mk-ohrid", mode: "bus", note: "≈ 1 h 30 por Resen, varios al día" },
  { id: "mk-bus-skopje-tetovo", label: "Bus Skopje → Tetovo", from: "mk-skopje", to: "mk-tetovo", mode: "bus", note: "cada 30 min, 40 min, 2 €" },
];
