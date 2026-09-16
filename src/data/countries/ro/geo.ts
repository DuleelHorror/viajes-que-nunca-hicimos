import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Romania", url: "https://www.seat61.com/Romania.htm", kind: "blog" as const };
const CFR = { label: "CFR Călători", url: "https://www.cfrcalatori.ro/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, CFR], notes: "Red enorme, lenta y barata; los nocturnos son la joya. Billetes en cfrcalatori.ro" });

export const cities: City[] = [
  {
    id: "ro-bucarest",
    name: "Bucarest",
    coords: [44.4268, 26.1025],
    isCapital: true,
    population: 1_800_000,
    urban: { modes: ["metro", "tranvia", "bus", "bolt", "a-pie"], score: 7, ticket: "metro 0,60 €; bus y tranvía 0,60 € con tarjeta; Bolt 2-4 €", app: "Bolt", note: "el metro es soviético-tardío y llega a todo; los tranvías, a lo demás" },
  },
  {
    id: "ro-brasov",
    name: "Brașov",
    coords: [45.6427, 25.5887],
    population: 250_000,
    urban: { modes: ["bus", "a-pie", "bolt"], score: 6, ticket: "bus 0,60 €", app: "Bolt", note: "la ciudad sajona entre montañas; base para Bran y para la Transfăgărășan por Sibiu" },
  },
  {
    id: "ro-sibiu",
    name: "Sibiu",
    coords: [45.7983, 24.1256],
    population: 150_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "bus 0,50 €; el Bâlea Bus, 15 € ida y vuelta", note: "base para la Transfăgărășan sin coche (Bâlea Bus en verano)" },
  },
  {
    id: "ro-cluj",
    name: "Cluj-Napoca",
    coords: [46.7712, 23.6236],
    population: 300_000,
    urban: { modes: ["bus", "tranvia", "bolt", "a-pie"], score: 7, ticket: "bus 0,60 €", app: "Bolt", note: "la capital universitaria y del Untold; base para Turda y para el bosque encantado" },
  },
  {
    id: "ro-timisoara",
    name: "Timișoara",
    coords: [45.7489, 21.2087],
    population: 300_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 7, ticket: "tranvía 0,60 €", note: "donde empezó la revolución de 1989; vuelos low-cost desde BCN" },
  },
  {
    id: "ro-sighet",
    name: "Sighetu Marmației",
    coords: [47.9282, 23.8902],
    population: 35_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 4, ticket: "microbús a Săpânța 1,5 €; todo a pie", note: "la frontera ucraniana está al otro lado del río; base para el cementerio alegre y la cárcel" },
  },
  {
    id: "ro-tulcea",
    name: "Tulcea",
    coords: [45.1787, 28.8049],
    population: 65_000,
    urban: { modes: ["ferry", "a-pie"], score: 4, ticket: "ferry a Sulina 10 €", note: "la puerta del delta del Danubio; los barcos salen del muelle" },
  },
  {
    id: "ro-hunedoara",
    name: "Hunedoara",
    coords: [45.75, 22.9],
    population: 55_000,
    urban: { modes: ["a-pie", "bus"], score: 4, ticket: "bus urbano 0,40 €", note: "castillo gótico y siderurgia muerta en el mismo plano; tren de cercanías desde Simeria" },
  },
];

export const airports: Airport[] = [
  { code: "OTP", name: "Bucarest Otopeni", cityId: "ro-bucarest", coords: [44.5711, 26.085], international: true },
  { code: "CLJ", name: "Cluj-Napoca Avram Iancu", cityId: "ro-cluj", coords: [46.7852, 23.6862], international: true },
  { code: "TSR", name: "Timișoara Traian Vuia", cityId: "ro-timisoara", coords: [45.8099, 21.3379], international: true },
  { code: "SBZ", name: "Sibiu", cityId: "ro-sibiu", coords: [45.7856, 24.0913], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "ro-bucarest-brasov-sighisoara-cluj",
    name: "Bucarest–Brașov–Sighișoara–Cluj (el nocturno de Transilvania)",
    stops: ["ro-bucarest", "ro-brasov", "ro-cluj"],
    kind: "nocturno",
    frequency: "diario, más intercitys de día",
    durationNote: "≈ 10 h el nocturno (21:20 → 07:10) con literas; de día, 2 h 30 a Brașov y 7 h a Cluj por los Cárpatos",
    price: "≈ 25 € en litera; 12 € a Brașov de día",
    operator: "CFR Călători",
    booking: "cfrcalatori.ro con tarjeta extranjera, sin drama; en taquilla el mismo día también",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "ro-bucarest-sibiu",
    name: "Bucarest–Sibiu",
    stops: ["ro-bucarest", "ro-sibiu"],
    kind: "intercity",
    frequency: "varios al día",
    durationNote: "≈ 5-6 h por el valle del Olt; lento pero bonito",
    price: "≈ 15 €",
    operator: "CFR Călători",
    booking: "cfrcalatori.ro",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "ro-sibiu-hunedoara-timisoara",
    name: "Sibiu–Simeria (Hunedoara)–Timișoara",
    stops: ["ro-sibiu", "ro-hunedoara", "ro-timisoara"],
    kind: "intercity",
    frequency: "varios al día (Hunedoara con cambio en Simeria)",
    durationNote: "≈ 2 h 30 de Sibiu a Simeria, 15 min de cercanías a Hunedoara y 3 h más a Timișoara",
    price: "≈ 10-15 € por tramo",
    operator: "CFR Călători",
    booking: "cfrcalatori.ro",
    quality: 4,
    meta: railMeta,
  },
  {
    id: "ro-cluj-sighet",
    name: "Cluj–Sighetu Marmației (Maramureș)",
    stops: ["ro-cluj", "ro-sighet"],
    kind: "regional",
    frequency: "1-2 al día, con cambio en Salva o directo",
    durationNote: "≈ 6-7 h por las montañas de Maramureș; hay un nocturno desde Bucarest (12 h) que evita el cambio",
    price: "≈ 12 €",
    operator: "CFR Călători",
    booking: "cfrcalatori.ro; comprobar el cambio en Salva",
    quality: 4,
    meta: railMeta,
  },
  {
    id: "ro-bucarest-tulcea",
    name: "Bucarest–Tulcea (el delta)",
    stops: ["ro-bucarest", "ro-tulcea"],
    kind: "intercity",
    frequency: "1-2 al día",
    durationNote: "≈ 5 h por la llanura; sale temprano para enlazar con el barco",
    price: "≈ 12 €",
    operator: "CFR Călători",
    booking: "cfrcalatori.ro",
    quality: 4,
    meta: railMeta,
  },
  {
    id: "ro-bucarest-timisoara-nocturno",
    name: "Nocturno Bucarest–Timișoara",
    stops: ["ro-bucarest", "ro-timisoara"],
    kind: "nocturno",
    frequency: "diario",
    durationNote: "≈ 9-10 h en litera cruzando el país entero; de día, 6-7 h",
    price: "≈ 25 € en litera",
    operator: "CFR Călători",
    booking: "cfrcalatori.ro",
    quality: 5,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [];
