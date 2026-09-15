import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Uzbekistan", url: "https://www.seat61.com/Uzbekistan.htm", kind: "blog" as const };
const RAILWAY = { label: "O'zbekiston Temir Yo'llari", url: "https://railway.uz", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61, RAILWAY], notes: "Horarios y precios orientativos; comprobar en railway.uz" });

export const cities: City[] = [
  { id: "uz-tashkent", name: "Tashkent", coords: [41.2995, 69.2401], isCapital: true, population: 3_000_000, urban: { modes: ["metro", "bus", "bolt", "taxi"], score: 8, ticket: "3.000 UZS (≈ 0,20 €) metro y bus; contactless en el torno", app: "Yandex Go", note: "metro hasta las 00:00" } },
  { id: "uz-samarcanda", name: "Samarcanda", coords: [39.6542, 66.9597], population: 550_000, urban: { modes: ["bus", "bolt", "taxi"], score: 6, ticket: "bus urbano ≈ 0,15 €; Yandex Go 1-2 € por trayecto", app: "Yandex Go" } },
  { id: "uz-bujara", name: "Bujará", coords: [39.7747, 64.4286], population: 280_000, urban: { modes: ["a-pie", "bus", "bolt", "taxi"], score: 6, ticket: "casco antiguo a pie; estación de tren en Kagan (12 km), taxi ≈ 2 €", app: "Yandex Go" } },
  { id: "uz-khiva", name: "Khiva", coords: [41.3775, 60.3619], population: 90_000, urban: { modes: ["a-pie", "tranvia", "taxi"], score: 6, ticket: "todo a pie dentro de la muralla", note: "estación de tren a 2 km" } },
  { id: "uz-urgench", name: "Urgench", coords: [41.5503, 60.6314], population: 150_000, urban: { modes: ["bus", "tranvia", "taxi"], score: 5, ticket: "trolebús/marshrutka a Khiva ≈ 0,30 €", note: "hub de tren y aeropuerto para Khiva" } },
  { id: "uz-nukus", name: "Nukus", coords: [42.4531, 59.6103], population: 330_000, urban: { modes: ["bus", "bolt", "taxi"], score: 5, ticket: "Yandex Go ≈ 1 € por trayecto", app: "Yandex Go", note: "base para Muynak y el Aral" } },
  { id: "uz-muynak", name: "Muynak", coords: [43.766, 59.021], population: 13_000, urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "todo a pie; taxi local para el vertedero de barcos y la orilla" } },
  { id: "uz-shahrisabz", name: "Shahrisabz", coords: [39.0528, 66.8331], population: 140_000, urban: { modes: ["a-pie", "taxi"], score: 4, ticket: "centro a pie desde la parada de taxis compartidos" } },
];

export const airports: Airport[] = [
  { code: "TAS", name: "Tashkent Islam Karimov", cityId: "uz-tashkent", coords: [41.2579, 69.2812], international: true },
  { code: "SKD", name: "Samarcanda", cityId: "uz-samarcanda", coords: [39.7005, 66.9838], international: true },
  { code: "BHK", name: "Bujará", cityId: "uz-bujara", coords: [39.775, 64.4833], international: true },
  { code: "UGC", name: "Urgench", cityId: "uz-urgench", coords: [41.5843, 60.6417], international: true },
  { code: "NCU", name: "Nukus", cityId: "uz-nukus", coords: [42.4884, 59.6233], international: false },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "uz-afrosiyob",
    name: "Afrosiyob (Talgo de alta velocidad)",
    stops: ["uz-tashkent", "uz-samarcanda", "uz-bujara"],
    kind: "alta-velocidad",
    frequency: "3-4 al día en cada sentido",
    durationNote: "Tashkent–Samarcanda 2 h 10 · Samarcanda–Bujará 1 h 35",
    price: "≈ 8-20 € según clase",
    operator: "O'zbekiston Temir Yo'llari",
    booking: "railway.uz o app Uzrailway con tarjeta extranjera; se agota con días de antelación en temporada",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "uz-sharq",
    name: "Sharq y trenes clásicos Tashkent–Bujará",
    stops: ["uz-tashkent", "uz-samarcanda", "uz-bujara"],
    kind: "intercity",
    frequency: "varios al día",
    durationNote: "Tashkent–Samarcanda 3 h 30 · hasta Bujará ≈ 6 h",
    price: "≈ 5-12 €",
    operator: "O'zbekiston Temir Yo'llari",
    booking: "railway.uz; alternativa barata si el Afrosiyob está lleno",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "uz-bujara-khiva",
    name: "Bujará → Urgench → Khiva",
    stops: ["uz-bujara", "uz-urgench", "uz-khiva"],
    kind: "intercity",
    frequency: "1-2 al día (diurno y nocturno)",
    durationNote: "≈ 6-7 h Bujará–Khiva por el desierto de Kyzylkum",
    price: "≈ 6-10 €",
    operator: "O'zbekiston Temir Yo'llari",
    booking: "railway.uz; el diurno es más cómodo para ver el desierto",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "uz-tashkent-nukus",
    name: "Nocturno Tashkent → Nukus (vía Samarcanda, Bujará y Urgench)",
    stops: ["uz-tashkent", "uz-samarcanda", "uz-bujara", "uz-urgench", "uz-nukus"],
    kind: "nocturno",
    frequency: "diario",
    durationNote: "≈ 16-20 h de Tashkent; ≈ 3-4 h desde Urgench",
    price: "≈ 15-30 € en kupe (compartimento de 4)",
    operator: "O'zbekiston Temir Yo'llari",
    booking: "railway.uz; llevar comida y sum en efectivo para el té",
    quality: 6,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "uz-nukus-muynak", label: "Marshrutka Nukus → Muynak", from: "uz-nukus", to: "uz-muynak", mode: "bus", note: "≈ 3 h, salidas de mañana sin horario fijo" },
  { id: "uz-urgench-khiva", label: "Trolebús / marshrutka Urgench → Khiva", from: "uz-urgench", to: "uz-khiva", mode: "tranvia", note: "35 km, 40 min" },
  { id: "uz-samarcanda-shahrisabz", label: "Taxi compartido Samarcanda → Shahrisabz", from: "uz-samarcanda", to: "uz-shahrisabz", mode: "taxi", note: "1 h 30 por el puerto de Takhtakaracha" },
  { id: "uz-nukus-tashkent-vuelo", label: "Vuelo Nukus → Tashkent", from: "uz-nukus", to: "uz-tashkent", mode: "avion", note: "≈ 2 h, diario" },
  { id: "uz-urgench-tashkent-vuelo", label: "Vuelo Urgench → Tashkent", from: "uz-urgench", to: "uz-tashkent", mode: "avion", note: "≈ 1 h 45, varios diarios" },
];
