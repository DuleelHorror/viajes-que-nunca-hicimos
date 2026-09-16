import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Hungary", url: "https://www.seat61.com/Hungary.htm", kind: "blog" as const };
const MAV = { label: "MÁV", url: "https://jegy.mav.hu/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "alta", sources: [SEAT61, MAV], notes: "Red radial desde Budapest, barata y con retrasos; billetes en la app MÁV o en máquina" });

export const cities: City[] = [
  {
    id: "hu-budapest",
    name: "Budapest",
    coords: [47.4979, 19.0402],
    isCapital: true,
    population: 1_700_000,
    urban: { modes: ["metro", "tranvia", "bus", "bolt", "a-pie"], score: 9, ticket: "450 Ft (≈ 1,20 €) el sencillo; 24 h por 2.500 Ft; cuatro líneas de metro, la M1 de 1896", app: "Bolt / BudapestGO", note: "el tranvía 2 por el Danubio y el 4/6 por la Gran Avenida; Kelenföld (M4) es la puerta de Memento Park" },
  },
  {
    id: "hu-pecs",
    name: "Pécs",
    coords: [46.0727, 18.2323],
    population: 140_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "bus 500 Ft", note: "la ciudad del uranio, de Zsolnay y de la mezquita convertida en iglesia; 3 h 40 de tren" },
  },
  {
    id: "hu-eger",
    name: "Eger",
    coords: [47.9025, 20.3772],
    population: 50_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 1350 a Recsk cada hora desde Bartakovics út, 39 min, ≈ 3 €", note: "vino, castillo turco y la base para el campo de Recsk" },
  },
  {
    id: "hu-veszprem",
    name: "Veszprém",
    coords: [47.0933, 17.9115],
    population: 55_000,
    urban: { modes: ["bus", "a-pie", "taxi"], score: 5, ticket: "bus local hacia Szentkirályszabadja; taxi 10 €", note: "la ciudad de las reinas, a 7 km de la ciudad fantasma soviética y a 15 del Balatón" },
  },
  {
    id: "hu-balatonaliga",
    name: "Balatonaliga (Balatonvilágos)",
    coords: [46.9761, 18.1728],
    population: 1_300,
    urban: { modes: ["tren", "a-pie"], score: 3, ticket: "apeadero de la línea sur del Balatón; todo a pie", note: "el resort del Partido, en la punta oriental del lago" },
  },
  {
    id: "hu-mohacs",
    name: "Mohács",
    coords: [45.9931, 18.6795],
    population: 17_000,
    urban: { modes: ["a-pie", "bus"], score: 3, ticket: "todo a pie; bus desde Pécs 1 h", note: "el Danubio, la batalla de 1526 y los busós de febrero" },
  },
];

export const airports: Airport[] = [
  { code: "BUD", name: "Budapest Ferenc Liszt", cityId: "hu-budapest", coords: [47.4369, 19.2556], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "hu-budapest-pecs",
    name: "Budapest–Pécs",
    stops: ["hu-budapest", "hu-pecs"],
    kind: "intercity",
    frequency: "7 directos al día",
    durationNote: "≈ 3 h 40 desde Keleti por Dombóvár; IC con reserva de asiento obligatoria (barata)",
    price: "desde ≈ 10 €",
    operator: "MÁV",
    booking: "jegy.mav.hu o la app MÁV, con el suplemento de asiento del IC",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "hu-budapest-eger",
    name: "Budapest–Eger",
    stops: ["hu-budapest", "hu-eger"],
    kind: "regional",
    frequency: "cada hora, con cambio en Füzesabony o directo",
    durationNote: "≈ 2 h desde Keleti; el bus de Recsk sale de la estación de autobuses, a 10 min",
    price: "≈ 8 €",
    operator: "MÁV",
    booking: "app MÁV",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "hu-budapest-veszprem",
    name: "Budapest–Székesfehérvár–Veszprém",
    stops: ["hu-budapest", "hu-veszprem"],
    kind: "intercity",
    frequency: "cada hora",
    durationNote: "≈ 1 h 40 desde Déli; la ciudad fantasma soviética queda a 7 km de la estación",
    price: "≈ 7 €",
    operator: "MÁV",
    booking: "app MÁV",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "hu-budapest-balaton-sur",
    name: "Budapest–Siófok (la línea sur del Balatón)",
    stops: ["hu-budapest", "hu-balatonaliga"],
    kind: "regional",
    frequency: "cada hora en verano, cada 2 h en invierno",
    durationNote: "≈ 1 h 20 desde Déli hasta el apeadero de Balatonaliga, pegado al resort del Partido; la línea sigue por toda la orilla sur",
    price: "≈ 6 €",
    operator: "MÁV",
    booking: "app MÁV; en verano, los trenes de playa van llenos",
    quality: 5,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "hu-bus-pecs-mohacs", label: "Bus Pécs → Mohács", from: "hu-pecs", to: "hu-mohacs", mode: "bus", note: "≈ 1 h, cada hora desde la estación de autobuses de Pécs; en Busójárás, buses extra" },
];
