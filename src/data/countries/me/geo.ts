import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Belgrade–Bar", url: "https://www.seat61.com/belgrade-to-bar-railway.htm", kind: "blog" as const };
const ZPCG = { label: "ŽPCG (Ferrocarriles de Montenegro)", url: "https://zpcg.me/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "alta", sources: [SEAT61, ZPCG], notes: "Dos líneas: la del Bar (la mitad montenegrina del Belgrado–Bar) y el ramal a Nikšić; baratísimas y en taquilla" });

export const cities: City[] = [
  {
    id: "me-podgorica",
    name: "Podgorica",
    coords: [42.4304, 19.2594],
    isCapital: true,
    population: 190_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 5, ticket: "bus urbano 0,90 €; taxi 2-4 € en el centro", note: "la capital de hormigón que nadie visita; Blok 5 a 20 min a pie del centro, la estación de tren y la de buses juntas" },
  },
  {
    id: "me-cetinje",
    name: "Cetinje",
    coords: [42.3931, 18.9116],
    population: 14_000,
    urban: { modes: ["a-pie", "taxi", "bus"], score: 4, ticket: "todo a pie; taxi a Lovćen con espera 25-30 €", note: "la antigua capital real, con embajadas vacías; Barutana en la carretera desde Podgorica" },
  },
  {
    id: "me-kotor",
    name: "Kotor",
    coords: [42.4247, 18.7712],
    population: 13_000,
    urban: { modes: ["a-pie", "bus", "ferry"], score: 5, ticket: "bus Blue Line por la bahía 1-2 €; teleférico a Lovćen desde 2023, ≈ 25 €", note: "la bahía con murallas y cruceros; donde estuvo el hotel Fjord" },
  },
  {
    id: "me-bar",
    name: "Bar",
    coords: [42.0938, 19.1002],
    population: 17_000,
    urban: { modes: ["bus", "a-pie"], score: 4, ticket: "bus urbano a Stari Bar 1 €", note: "el final del tren de Belgrado y el puerto de los ferries a Italia; la ciudad vieja en ruinas a 4 km" },
  },
  {
    id: "me-niksic",
    name: "Nikšić",
    coords: [42.7731, 18.9445],
    population: 57_000,
    urban: { modes: ["a-pie", "bus"], score: 4, ticket: "todo a pie; el espomenik en la colina del parque", note: "la ciudad de la cerveza y de la acería, con tren desde Podgorica" },
  },
  {
    id: "me-kolasin",
    name: "Kolašin",
    coords: [42.8225, 19.5169],
    population: 3_000,
    urban: { modes: ["a-pie", "tren"], score: 3, ticket: "parada de la línea del Bar; todo a pie", note: "el pueblo de montaña con el memorial brutalista en la plaza" },
  },
  {
    id: "me-zabljak",
    name: "Žabljak (Durmitor)",
    coords: [43.1547, 19.1225],
    population: 2_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "bus a Podgorica 2-3 al día, 2 h 20, 10 €", note: "la puerta del Durmitor y del cañón del Tara; el pueblo más alto del país" },
  },
];

export const airports: Airport[] = [
  { code: "TGD", name: "Podgorica", cityId: "me-podgorica", coords: [42.3594, 19.2519], international: true },
  { code: "TIV", name: "Tivat", cityId: "me-kotor", coords: [42.4047, 18.7233], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "me-bar-podgorica-kolasin",
    name: "Bar–Podgorica–Kolašin (la mitad montenegrina del Belgrado–Bar)",
    stops: ["me-bar", "me-podgorica", "me-kolasin"],
    kind: "intercity",
    frequency: "Bar–Podgorica 10 al día (1 h, 2,40 €); a Kolašin, 3-4 al día más el internacional de Belgrado",
    durationNote: "Podgorica–Kolašin ≈ 1 h 30 por el tramo más espectacular de la línea: el viaducto de Mala Rijeka (200 m, el más alto del mundo cuando se abrió en 1976), el cañón del Morača y 40 túneles seguidos",
    price: "2,40 € a Bar; ≈ 5 € a Kolašin; Belgrado, 21,60 € desde Podgorica",
    operator: "ŽPCG",
    booking: "taquilla de Podgorica (la estación está junto a la de buses); el nocturno a Belgrado, con 60 días de antelación",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "me-podgorica-niksic",
    name: "Podgorica–Nikšić",
    stops: ["me-podgorica", "me-niksic"],
    kind: "regional",
    frequency: "varios al día",
    durationNote: "≈ 1 h en trenes eléctricos de 2013 (los más nuevos del país) por el valle de la Zeta",
    price: "≈ 2,50 €",
    operator: "ŽPCG",
    booking: "taquilla",
    quality: 6,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "me-bus-podgorica-cetinje", label: "Bus Podgorica → Cetinje", from: "me-podgorica", to: "me-cetinje", mode: "bus", note: "≈ 40 min, cada hora, 3 €; pasa por Barutana (pide bajar)" },
  { id: "me-bus-cetinje-kotor", label: "Bus Cetinje → Kotor", from: "me-cetinje", to: "me-kotor", mode: "bus", note: "≈ 1 h por las 25 curvas de la serpentina de Lovćen, varios al día" },
  { id: "me-bus-podgorica-zabljak", label: "Bus Podgorica → Žabljak", from: "me-podgorica", to: "me-zabljak", mode: "bus", note: "2-3 al día, 2 h 20, ≈ 10 €; cruza el puente del Tara" },
  { id: "me-bus-kotor-bar", label: "Bus Kotor → Budva → Bar", from: "me-kotor", to: "me-bar", mode: "bus", note: "≈ 2 h por la costa, cada hora en verano" },
];
