import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Georgia", url: "https://www.seat61.com/Georgia.htm", kind: "blog" as const };
const GR = { label: "Georgian Railway (tre.ge)", url: "https://tre.ge/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61, GR], notes: "Horarios de tre.ge; pocos trenes al día y precios de risa" });

export const cities: City[] = [
  {
    id: "ge-tiflis",
    name: "Tiflis",
    coords: [41.7151, 44.8271],
    isCapital: true,
    population: 1_200_000,
    urban: { modes: ["metro", "bus", "bolt", "taxi", "a-pie"], score: 7, ticket: "1 GEL (≈ 0,35 €) metro y bus con la tarjeta Metromoney o contactless", app: "Bolt", note: "dos líneas de metro soviético a 60 m de profundidad; Bolt cuesta 1-3 € por trayecto" },
  },
  {
    id: "ge-gori",
    name: "Gori",
    coords: [41.9842, 44.1158],
    population: 45_000,
    urban: { modes: ["a-pie", "taxi"], score: 5, ticket: "todo a pie; taxi a Uplistsikhe ≈ 8 € ida y vuelta con espera", note: "la ciudad de Stalin, a una hora de Tiflis en tren" },
  },
  {
    id: "ge-kutaisi",
    name: "Kutaisi",
    coords: [42.2679, 42.6946],
    population: 135_000,
    urban: { modes: ["bus", "bolt", "taxi", "a-pie"], score: 6, ticket: "marshrutka urbana ≈ 0,30 €; Bolt 1-2 €", app: "Bolt", note: "base para Tskaltubo, Chiatura y Katskhi; el aeropuerto de Wizz está aquí" },
  },
  {
    id: "ge-zugdidi",
    name: "Zugdidi",
    coords: [42.5088, 41.8709],
    population: 40_000,
    urban: { modes: ["a-pie", "taxi", "bus"], score: 4, ticket: "marshrutkas desde la estación de tren", note: "puerta de Svaneti y de la presa de Enguri; llega el nocturno de Tiflis" },
  },
  {
    id: "ge-batumi",
    name: "Batumi",
    coords: [41.6168, 41.6367],
    population: 170_000,
    urban: { modes: ["bus", "bolt", "a-pie"], score: 6, ticket: "bus 0,30 € con tarjeta; Bolt 1-2 €", app: "Bolt", note: "el paseo marítimo se anda; la estación de tren está a 5 km" },
  },
  {
    id: "ge-akhaltsikhe",
    name: "Akhaltsikhe",
    coords: [41.6392, 42.9826],
    population: 18_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 4, ticket: "marshrutka a Vardzia ≈ 2 €, dos o tres al día", note: "base obligada para Vardzia" },
  },
];

export const airports: Airport[] = [
  { code: "TBS", name: "Tiflis Shota Rustaveli", cityId: "ge-tiflis", coords: [41.6692, 44.9547], international: true },
  { code: "KUT", name: "Kutaisi David el Constructor (Wizz)", cityId: "ge-kutaisi", coords: [42.1767, 42.4826], international: true },
  { code: "BUS", name: "Batumi", cityId: "ge-batumi", coords: [41.6103, 41.5997], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "ge-tiflis-batumi",
    name: "Stadler Tiflis–Batumi por el corazón del país",
    stops: ["ge-tiflis", "ge-batumi"],
    kind: "intercity",
    frequency: "2 al día",
    durationNote: "≈ 5 h 30 en un tren suizo de dos pisos; para en Gori y en Rioni, cerca de Kutaisi",
    price: "≈ 10-20 € según clase",
    operator: "Georgian Railway",
    booking: "tre.ge (app y web) con tarjeta extranjera; se agota en verano y fines de semana",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "ge-tiflis-gori",
    name: "Regionales Tiflis–Gori",
    stops: ["ge-tiflis", "ge-gori"],
    kind: "regional",
    frequency: "4-5 al día (incluidos los que siguen a Batumi)",
    durationNote: "≈ 1 h",
    price: "≈ 1-3 €",
    operator: "Georgian Railway",
    booking: "taquilla o tre.ge; los eléctricos lentos son una experiencia en sí",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "ge-nocturno-zugdidi",
    name: "Nocturno Tiflis → Zugdidi (para Svaneti y Enguri)",
    stops: ["ge-tiflis", "ge-zugdidi"],
    kind: "nocturno",
    frequency: "diario",
    durationNote: "≈ 8 h 30: sale por la noche y te deja de madrugada donde salen las marshrutkas a Mestia",
    price: "≈ 8-15 € en litera",
    operator: "Georgian Railway",
    booking: "tre.ge; vagones soviéticos con sábanas y té, como en Uzbekistán",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "ge-tiflis-kutaisi",
    name: "Tiflis–Kutaisi (lento; la marshrutka gana)",
    stops: ["ge-tiflis", "ge-kutaisi"],
    kind: "regional",
    frequency: "1-2 al día",
    durationNote: "≈ 5 h de tren frente a 3 h 30 de marshrutka: solo si te gustan los trenes",
    price: "≈ 3 €",
    operator: "Georgian Railway",
    booking: "taquilla",
    quality: 4,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "ge-marsh-tiflis-kutaisi", label: "Marshrutka Tiflis → Kutaisi", from: "ge-tiflis", to: "ge-kutaisi", mode: "bus", note: "≈ 3 h 30 desde la estación de Didube, salen cuando se llenan; ≈ 5 €" },
  { id: "ge-marsh-kutaisi-zugdidi", label: "Marshrutka Kutaisi → Zugdidi", from: "ge-kutaisi", to: "ge-zugdidi", mode: "bus", note: "≈ 2 h" },
  { id: "ge-marsh-zugdidi-batumi", label: "Marshrutka Zugdidi → Batumi", from: "ge-zugdidi", to: "ge-batumi", mode: "bus", note: "≈ 2 h 30 por la costa" },
  { id: "ge-marsh-tiflis-akhaltsikhe", label: "Marshrutka Tiflis → Akhaltsikhe", from: "ge-tiflis", to: "ge-akhaltsikhe", mode: "bus", note: "≈ 4 h desde Didube; el paso previo a Vardzia" },
  { id: "ge-vuelo-batumi-tiflis", label: "Vuelo Batumi → Tiflis", from: "ge-batumi", to: "ge-tiflis", mode: "avion", note: "50 min, barato; útil si vuelves desde Tiflis" },
];
