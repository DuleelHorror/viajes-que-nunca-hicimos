import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Bosnia", url: "https://www.seat61.com/trains-and-routes/sarajevo-to-mostar-by-train.htm", kind: "blog" as const };
const ZFBH = { label: "ŽFBH", url: "https://www.zfbh.ba/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, ZFBH], notes: "Una línea que importa (Sarajevo–Mostar, Talgo) y dos trenes al día; el resto del país va en bus" });

export const cities: City[] = [
  {
    id: "ba-sarajevo",
    name: "Sarajevo",
    coords: [43.8563, 18.4131],
    isCapital: true,
    population: 420_000,
    urban: { modes: ["tranvia", "bus", "a-pie", "taxi"], score: 6, ticket: "tranvía y bus 0,90 € (1,80 KM) en quiosco, más caro al conductor", note: "el tranvía más viejo de Europa (1885) recorre la Sniper Alley; el centro se anda. Dos estaciones de bus: la central (Federación) y Lukavica/Sarajevo Este (Republika Srpska), a 20 min" },
  },
  {
    id: "ba-konjic",
    name: "Konjic",
    coords: [43.6503, 17.9603],
    population: 25_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "el búnker de Tito solo con transporte de la agencia desde el pueblo", note: "parada del Talgo; el puente otomano y el búnker a 7 km" },
  },
  {
    id: "ba-jablanica",
    name: "Jablanica",
    coords: [43.6597, 17.7611],
    population: 10_000,
    urban: { modes: ["a-pie"], score: 3, ticket: "todo a pie desde la estación", note: "el puente volado de la batalla del Neretva; parada del Talgo" },
  },
  {
    id: "ba-mostar",
    name: "Mostar",
    coords: [43.3438, 17.8078],
    population: 100_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 5, ticket: "bus urbano 0,80 €", note: "el puente, la torre del francotirador y dos ciudades en una; todo a pie desde la estación" },
  },
  {
    id: "ba-srebrenica",
    name: "Srebrenica",
    coords: [44.1067, 19.2967],
    population: 5_000,
    urban: { modes: ["a-pie", "taxi"], score: 2, ticket: "taxi a Potočari 5 €; el bus de línea para en el memorial", note: "el memorial está en Potočari, a 6 km, en la carretera de Bratunac" },
  },
  {
    id: "ba-trebinje",
    name: "Trebinje",
    coords: [42.7119, 18.3436],
    population: 30_000,
    urban: { modes: ["a-pie", "bus"], score: 4, ticket: "todo a pie; buses a Dubrovnik (40 min)", note: "la Herzegovina serbia, con plátanos y vino; salida a Dubrovnik. El bus desde Sarajevo pasa por Tjentište" },
  },
];

export const airports: Airport[] = [
  { code: "SJJ", name: "Sarajevo", cityId: "ba-sarajevo", coords: [43.8246, 18.3315], international: true },
  { code: "OMO", name: "Mostar", cityId: "ba-mostar", coords: [43.2829, 17.8459], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "ba-talgo-sarajevo-mostar",
    name: "El Talgo Sarajevo–Konjic–Jablanica–Mostar",
    stops: ["ba-sarajevo", "ba-konjic", "ba-jablanica", "ba-mostar"],
    kind: "intercity",
    frequency: "2 al día (07:15 y 16:46 desde Sarajevo), más extras en verano y fines de semana",
    durationNote: "≈ 2 h por el cañón del Neretva, el tramo de tren más bonito de los Balcanes después del Bar: túneles, el lago de Jablanica y las paredes verdes del cañón",
    price: "≈ 6 €",
    operator: "ŽFBH",
    booking: "taquilla de la estación de Sarajevo (junto a la de buses) el mismo día o el anterior; no online",
    quality: 7,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "ba-bus-sarajevo-srebrenica", label: "Bus Sarajevo → Srebrenica", from: "ba-sarajevo", to: "ba-srebrenica", mode: "bus", note: "≈ 3 h desde la estación de Lukavica (Sarajevo Este, Republika Srpska), 2-3 al día; para en Potočari a la ida" },
  { id: "ba-bus-sarajevo-trebinje", label: "Bus Sarajevo → Trebinje (por Tjentište)", from: "ba-sarajevo", to: "ba-trebinje", mode: "bus", note: "≈ 4 h desde Lukavica; pasa por delante del espomenik de Tjentište, donde se puede bajar" },
  { id: "ba-bus-mostar-trebinje", label: "Bus Mostar → Trebinje", from: "ba-mostar", to: "ba-trebinje", mode: "bus", note: "≈ 2 h 30; Trebinje enlaza con Dubrovnik en 40 min" },
];
