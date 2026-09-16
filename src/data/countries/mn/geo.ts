import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Mongolia", url: "https://www.seat61.com/Mongolia.htm", kind: "blog" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61], notes: "Una sola línea (el Transmongoliano) y un ramal; billetes en taquilla o vía agencia" });

export const cities: City[] = [
  {
    id: "mn-ulan-bator",
    name: "Ulán Bator",
    coords: [47.8864, 106.9057],
    isCapital: true,
    population: 1_700_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 5, ticket: "bus ≈ 0,15 € con tarjeta U-money; taxi 0,50 €/km (cualquier coche es un taxi si levantas la mano)", app: "UBCab", note: "atascos monumentales y el centro se anda; la mitad del país vive aquí" },
  },
  {
    id: "mn-sainshand",
    name: "Sainshand",
    coords: [44.895, 110.137],
    population: 25_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "taxi al monasterio de Khamar ≈ 15 € ida y vuelta con espera", note: "capital del Gobi oriental, en la línea del Transmongoliano" },
  },
  {
    id: "mn-darkhan",
    name: "Darkhan",
    coords: [49.4867, 105.9228],
    population: 80_000,
    urban: { modes: ["bus", "a-pie", "taxi"], score: 4, ticket: "bus urbano ≈ 0,15 €", note: "la ciudad industrial soviética de 1961; parada del tren a Rusia" },
  },
  {
    id: "mn-erdenet",
    name: "Erdenet",
    coords: [49.0333, 104.0833],
    population: 100_000,
    urban: { modes: ["bus", "a-pie", "taxi"], score: 4, ticket: "bus urbano; taxi a la mina negociado", note: "la ciudad de la mina de cobre, al final de un ramal de tren" },
  },
  {
    id: "mn-kharkhorin",
    name: "Kharkhorin (Karakórum)",
    coords: [47.1975, 102.8239],
    population: 15_000,
    urban: { modes: ["a-pie"], score: 3, ticket: "todo a pie; el monasterio está en el pueblo", note: "la antigua capital del imperio mongol, a 7 h de bus de Ulán Bator" },
  },
  {
    id: "mn-dalanzadgad",
    name: "Dalanzadgad",
    coords: [43.5708, 104.425],
    population: 25_000,
    urban: { modes: ["a-pie", "taxi"], score: 2, ticket: "jeep contratado para el Gobi; no hay otra", note: "la puerta del Gobi: se llega en avión o en 12 h de bus" },
  },
];

export const airports: Airport[] = [
  { code: "UBN", name: "Ulán Bator Chinggis Khaan (nuevo, a 50 km)", cityId: "mn-ulan-bator", coords: [47.6517, 106.8197], international: true },
  { code: "DLZ", name: "Dalanzadgad Gurvan Saikhan", cityId: "mn-dalanzadgad", coords: [43.5917, 104.43], international: false },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "mn-transmongoliano-sur",
    name: "El Transmongoliano hacia China: Ulán Bator–Choir–Sainshand–Zamyn-Üüd",
    stops: ["mn-ulan-bator", "mn-sainshand"],
    kind: "nocturno",
    frequency: "diario (más en verano)",
    durationNote: "≈ 10 h hasta Sainshand por el Gobi, a menudo de noche; sigue a la frontera china y, en el internacional, a Pekín",
    price: "≈ 8-15 € en litera",
    operator: "UBTZ (ferrocarril mongol-ruso)",
    booking: "taquilla de la estación de Ulán Bator con pasaporte, o la app e-ticket en mongol; los hostales lo gestionan por una pequeña comisión",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "mn-transmongoliano-norte",
    name: "El Transmongoliano hacia Rusia: Ulán Bator–Darkhan–Sükhbaatar",
    stops: ["mn-ulan-bator", "mn-darkhan"],
    kind: "regional",
    frequency: "diario",
    durationNote: "≈ 5-6 h a Darkhan; el internacional sigue a Ulán-Udé e Irkutsk",
    price: "≈ 5-10 €",
    operator: "UBTZ",
    booking: "taquilla",
    quality: 4,
    meta: railMeta,
  },
  {
    id: "mn-ramal-erdenet",
    name: "Ramal Darkhan–Erdenet",
    stops: ["mn-darkhan", "mn-erdenet"],
    kind: "regional",
    frequency: "diario, de noche",
    durationNote: "≈ 4-5 h por un ramal minero; hay directo desde Ulán Bator (≈ 11 h nocturno)",
    price: "≈ 5 €",
    operator: "UBTZ",
    booking: "taquilla",
    quality: 3,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "mn-bus-ub-kharkhorin", label: "Bus Ulán Bator → Kharkhorin", from: "mn-ulan-bator", to: "mn-kharkhorin", mode: "bus", note: "≈ 7 h desde la estación Dragon, uno o dos al día; ≈ 10 €" },
  { id: "mn-vuelo-ub-dalanzadgad", label: "Vuelo Ulán Bator → Dalanzadgad", from: "mn-ulan-bator", to: "mn-dalanzadgad", mode: "avion", note: "1 h 30 con MIAT o Hunnu; el bus son 12 h de pista" },
  { id: "mn-bus-ub-darkhan", label: "Bus Ulán Bator → Darkhan", from: "mn-ulan-bator", to: "mn-darkhan", mode: "bus", note: "≈ 3 h 30 por la única autopista del país; más rápido que el tren" },
];
