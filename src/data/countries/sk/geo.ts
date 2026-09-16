import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Slovakia", url: "https://www.seat61.com/Slovakia.htm", kind: "blog" as const };
const ZSSK = { label: "ZSSK", url: "https://www.zssk.sk/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "alta", sources: [SEAT61, ZSSK], notes: "Una línea troncal Bratislava–Košice con todo lo demás colgando; ZSSK y RegioJet, baratos y online" });

export const cities: City[] = [
  {
    id: "sk-bratislava",
    name: "Bratislava",
    coords: [48.1486, 17.1077],
    isCapital: true,
    population: 480_000,
    urban: { modes: ["tranvia", "bus", "bolt", "a-pie"], score: 8, ticket: "1,10 € el de 30 min con contactless en el validador; trolebuses y tranvías a todo", app: "Bolt", note: "el casco viejo se anda; Petržalka, al otro lado del puente OVNI, en bus 80 o 93; Devín, en bus 29" },
  },
  {
    id: "sk-banska-stiavnica",
    name: "Banská Štiavnica",
    coords: [48.4586, 18.8931],
    population: 10_000,
    urban: { modes: ["a-pie", "bus"], score: 4, ticket: "todo a pie, cuesta arriba; la estación a 20 min del centro", note: "la ciudad minera UNESCO, con cambio de tren en Hronská Dúbrava" },
  },
  {
    id: "sk-banska-bystrica",
    name: "Banská Bystrica",
    coords: [48.7363, 19.1462],
    population: 78_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 0,90 €", note: "la capital del Levantamiento, con el memorial-platillo en el parque" },
  },
  {
    id: "sk-poprad",
    name: "Poprad (Tatras)",
    coords: [49.0614, 20.2975],
    population: 50_000,
    urban: { modes: ["tren", "a-pie"], score: 6, ticket: "TEŽ (el tranvía eléctrico de los Tatras) 2 € el trayecto, 6 € el día", note: "la puerta de los Altos Tatras; el TEŽ sube a Štrbské Pleso y Starý Smokovec" },
  },
  {
    id: "sk-kosice",
    name: "Košice",
    coords: [48.7164, 21.2611],
    population: 230_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 6, ticket: "tranvía 0,80 €", note: "la segunda ciudad, con la mayor acería de Europa central a las afueras y Ryanair" },
  },
];

export const airports: Airport[] = [
  { code: "BTS", name: "Bratislava M. R. Štefánik", cityId: "sk-bratislava", coords: [48.1702, 17.2127], international: true },
  { code: "KSC", name: "Košice", cityId: "sk-kosice", coords: [48.6631, 21.2411], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "sk-bratislava-poprad-kosice",
    name: "Bratislava–Žilina–Poprad–Košice (la troncal)",
    stops: ["sk-bratislava", "sk-poprad", "sk-kosice"],
    kind: "intercity",
    frequency: "cada hora entre ZSSK y RegioJet",
    durationNote: "≈ 3 h 45 a Poprad y 5 h 15 a Košice por el valle del Váh y bajo los Tatras; RegioJet con café gratis y ZSSK con los gratis para residentes",
    price: "≈ 17-25 € a Košice; 12-18 € a Poprad",
    operator: "ZSSK / RegioJet",
    booking: "zssk.sk o regiojet.com en inglés con asiento; se llenan los viernes",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "sk-bratislava-zvolen-banska-bystrica",
    name: "Bratislava–Zvolen–Banská Bystrica",
    stops: ["sk-bratislava", "sk-banska-bystrica"],
    kind: "intercity",
    frequency: "cada 2 h",
    durationNote: "≈ 3 h 30 por el Hron; Zvolen es el nudo para Banská Štiavnica",
    price: "≈ 10-15 €",
    operator: "ZSSK",
    booking: "zssk.sk",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "sk-zvolen-banska-stiavnica",
    name: "Zvolen–Hronská Dúbrava–Banská Štiavnica",
    stops: ["sk-banska-bystrica", "sk-banska-stiavnica"],
    kind: "regional",
    frequency: "varios al día, con cambio en Hronská Dúbrava",
    durationNote: "≈ 1 h 30 desde Banská Bystrica (o 4 h 45 desde Bratislava con dos cambios); el último tramo es un ramal de vía única que sube por el bosque",
    price: "≈ 5 €",
    operator: "ZSSK",
    booking: "zssk.sk o al revisor",
    quality: 4,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [];
