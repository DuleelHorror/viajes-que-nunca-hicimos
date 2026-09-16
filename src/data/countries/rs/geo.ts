import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Serbia", url: "https://www.seat61.com/Serbia.htm", kind: "blog" as const };
const SRBVOZ = { label: "Srbija Voz", url: "https://www.srbvoz.rs/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61, SRBVOZ], notes: "Alta velocidad nueva al norte, vías de los ochenta al sur; el Belgrado–Bar es el viaje" });

export const cities: City[] = [
  {
    id: "rs-belgrado",
    name: "Belgrado",
    coords: [44.8125, 20.4612],
    isCapital: true,
    population: 1_700_000,
    urban: { modes: ["bus", "tranvia", "bolt", "a-pie"], score: 6, ticket: "gratis desde 2025 (el transporte urbano de Belgrado dejó de cobrar billete)", app: "Yandex Go / CarGo", note: "sin metro (llevan 50 años prometiéndolo); tranvías viejos y buses gratis. Prokop, la estación central, está lejos del centro: bus 36 o taxi" },
  },
  {
    id: "rs-novi-sad",
    name: "Novi Sad",
    coords: [45.2671, 19.8335],
    population: 300_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "bus 0,80 €", note: "la capital de Voivodina, austrohúngara y llana; Petrovaradin al otro lado del puente" },
  },
  {
    id: "rs-subotica",
    name: "Subotica",
    coords: [46.1, 19.665],
    population: 100_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 0,70 €", note: "art nouveau húngaro a 10 km de la frontera; a 80 minutos de Belgrado en el Soko" },
  },
  {
    id: "rs-nis",
    name: "Niš",
    coords: [43.3209, 21.8958],
    population: 260_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 0,60 €", note: "la tercera ciudad, donde nació Constantino; base para la torre de cráneos y el campo de la Cruz Roja" },
  },
  {
    id: "rs-kragujevac",
    name: "Kragujevac",
    coords: [44.0128, 20.9114],
    population: 150_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 0,60 €; Šumarice a 20 min a pie", note: "la primera capital de la Serbia moderna y la ciudad del Yugo; el memorial de Šumarice a las afueras" },
  },
  {
    id: "rs-uzice",
    name: "Užice",
    coords: [43.8586, 19.8425],
    population: 50_000,
    urban: { modes: ["bus", "a-pie", "taxi"], score: 4, ticket: "bus a Kadinjača 1 €; taxi con espera 15 €", note: "parada del Belgrado–Bar; base para Kadinjača, Mokra Gora y el Šargan 8" },
  },
];

export const airports: Airport[] = [
  { code: "BEG", name: "Belgrado Nikola Tesla", cityId: "rs-belgrado", coords: [44.8184, 20.3091], international: true },
  { code: "INI", name: "Niš Constantino el Grande", cityId: "rs-nis", coords: [43.3373, 21.8537], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "rs-soko-belgrado-novi-sad-subotica",
    name: "Soko: Belgrado–Novi Sad–Subotica a 200 km/h",
    stops: ["rs-belgrado", "rs-novi-sad", "rs-subotica"],
    kind: "alta-velocidad",
    frequency: "cada hora o dos",
    durationNote: "≈ 36 min a Novi Sad y 80 min a Subotica desde Belgrado Centar (Prokop); la línea sigue a Budapest desde 2025",
    price: "≈ 5-10 €",
    operator: "Srbija Voz",
    booking: "srbvoz.rs o la app con tarjeta; reserva de asiento obligatoria y los de tarde se agotan con uno o dos días",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "rs-belgrado-bar",
    name: "El Belgrado–Bar (hasta Užice, en Serbia)",
    stops: ["rs-belgrado", "rs-uzice"],
    kind: "nocturno",
    frequency: "diario: un nocturno (Lovćen) y un diurno (Tara) en verano",
    durationNote: "≈ 3 h 30 a Užice; el tren sigue 8 h más por 254 túneles y el viaducto de Mala Rijeka hasta el Adriático montenegrino. El nocturno sale de Belgrado Centar a las 21:10",
    price: "≈ 8 € a Užice; a Bar, 24 € más 6-15 € de litera",
    operator: "Srbija Voz / ŽPCG",
    booking: "solo en taquilla (Belgrado Centar) con 60 días de antelación; no se vende online. Pasaporte para seguir a Montenegro",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "rs-belgrado-nis",
    name: "Belgrado–Niš",
    stops: ["rs-belgrado", "rs-nis"],
    kind: "intercity",
    frequency: "3-4 al día",
    durationNote: "≈ 4-5 h por vías en obras (la alta velocidad a Niš llega hacia 2027); el bus tarda 3 h y va cada hora",
    price: "≈ 8 €",
    operator: "Srbija Voz",
    booking: "srbvoz.rs o taquilla",
    quality: 3,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "rs-bus-belgrado-kragujevac", label: "Bus Belgrado → Kragujevac", from: "rs-belgrado", to: "rs-kragujevac", mode: "bus", note: "≈ 2 h desde la estación de autobuses de Belgrado, cada hora; el tren es lento y raro" },
  { id: "rs-bus-kragujevac-nis", label: "Bus Kragujevac → Niš", from: "rs-kragujevac", to: "rs-nis", mode: "bus", note: "≈ 2 h 30 por la autopista" },
  { id: "rs-bus-nis-belgrado", label: "Bus Niš → Belgrado", from: "rs-nis", to: "rs-belgrado", mode: "bus", note: "≈ 3 h, cada hora; más rápido que el tren hasta que abra la alta velocidad" },
];
