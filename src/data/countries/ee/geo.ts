import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Vilnius–Riga–Tallinn", url: "https://www.seat61.com/trains-and-routes/vilnius-riga-tallinn-by-train.htm", kind: "blog" as const };
const ELRON = { label: "Elron", url: "https://elron.ee/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, ELRON], notes: "Trenes naranjas nuevos, baratos y puntuales; billete en la app o a bordo con tarjeta" });

export const cities: City[] = [
  {
    id: "ee-tallin",
    name: "Tallin",
    coords: [59.437, 24.7536],
    isCapital: true,
    population: 460_000,
    urban: { modes: ["tranvia", "bus", "bolt", "a-pie"], score: 8, ticket: "2 € el billete sencillo con contactless en el validador; gratis para empadronados, no para ti", app: "Bolt", note: "tranvías nuevos y viejos; la ciudad vieja se anda y Kalamaja también. Bolt nació aquí" },
  },
  {
    id: "ee-paldiski",
    name: "Paldiski",
    coords: [59.3567, 24.0531],
    population: 3_500,
    urban: { modes: ["a-pie"], score: 3, ticket: "todo a pie desde la estación; los acantilados, 3 km", note: "la ciudad cerrada de los submarinos nucleares, hoy medio vacía; final de línea de Elron" },
  },
  {
    id: "ee-narva",
    name: "Narva",
    coords: [59.3772, 28.1903],
    population: 55_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 1 €; a Sillamäe, 2 €", note: "la ciudad rusa de Estonia, con Rusia al otro lado del río; la estación es la última antes de la frontera" },
  },
  {
    id: "ee-tartu",
    name: "Tartu",
    coords: [58.378, 26.729],
    population: 100_000,
    urban: { modes: ["bus", "bolt", "a-pie"], score: 6, ticket: "bus 1,50 €", app: "Bolt", note: "la ciudad universitaria; parada del tren a Riga y base para el sureste" },
  },
];

export const airports: Airport[] = [
  { code: "TLL", name: "Tallin Lennart Meri", cityId: "ee-tallin", coords: [59.4133, 24.8328], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "ee-tallin-paldiski",
    name: "Tallin–Paldiski",
    stops: ["ee-tallin", "ee-paldiski"],
    kind: "regional",
    frequency: "cada 1-2 h",
    durationNote: "≈ 1 h 10 en el tren naranja de Elron hasta la antigua ciudad cerrada; para en Klooga, donde estuvo el campo nazi",
    price: "≈ 4 €",
    operator: "Elron",
    booking: "app de Elron o tarjeta a bordo; nunca se llena",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "ee-tallin-narva",
    name: "Tallin–Narva",
    stops: ["ee-tallin", "ee-narva"],
    kind: "intercity",
    frequency: "4-5 al día",
    durationNote: "≈ 2 h 15 hasta la frontera rusa, por la costa de las minas de esquisto (Kohtla-Järve, Jõhvi); el tren sigue hasta el río y para",
    price: "≈ 12 €",
    operator: "Elron",
    booking: "app de Elron con asiento; los de viernes se llenan",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "ee-tallin-tartu-valga-riga",
    name: "Tallin–Tartu–Valga (y Riga)",
    stops: ["ee-tallin", "ee-tartu"],
    kind: "intercity",
    frequency: "cada 1-2 h a Tartu; a Riga, dos directos al día desde enero de 2026",
    durationNote: "≈ 2 h a Tartu; el directo Tallin–Riga hace 6 h por Tartu y Valga (sale 14:50, llega 20:46), y con cambio en Valga hay más",
    price: "≈ 12 € a Tartu; 20-30 € a Riga",
    operator: "Elron / Vivi (Letonia)",
    booking: "Elron a Tartu; el directo a Riga en la web de Elron o de Vivi; el combinado con Vilnius en ltglink.lt",
    quality: 8,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "ee-bus-tartu-narva", label: "Bus Tartu → Narva", from: "ee-tartu", to: "ee-narva", mode: "bus", note: "≈ 3 h con Lux Express; el tren obliga a volver por Tallin" },
];
