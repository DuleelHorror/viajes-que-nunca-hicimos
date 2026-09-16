import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Bulgaria", url: "https://www.seat61.com/Bulgaria.htm", kind: "blog" as const };
const BDZ = { label: "BDZ", url: "https://www.bdz.bg/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61, BDZ], notes: "Trenes viejos, lentos y de risa de baratos; la web de BDZ vende online, a ratos" });

export const cities: City[] = [
  {
    id: "bg-sofia",
    name: "Sofía",
    coords: [42.6977, 23.3219],
    isCapital: true,
    population: 1_300_000,
    urban: { modes: ["metro", "tranvia", "bus", "bolt", "a-pie"], score: 8, ticket: "1,60 lv ≈ 0,80 € cualquier medio; metro con contactless directamente", app: "Bolt / Yandex Go", note: "cuatro líneas de metro nuevas y tranvías viejos; el centro se anda" },
  },
  {
    id: "bg-plovdiv",
    name: "Plovdiv",
    coords: [42.1354, 24.7453],
    population: 350_000,
    urban: { modes: ["bus", "a-pie", "bolt"], score: 6, ticket: "bus 0,50 €", app: "Bolt", note: "la ciudad más antigua de Europa habitada sin parar; todo a pie" },
  },
  {
    id: "bg-kazanlak",
    name: "Kazanlak",
    coords: [42.6194, 25.3933],
    population: 45_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 4, ticket: "bus a Shipka 1 €; taxi a Buzludzha con espera ≈ 30 €", note: "el valle de las rosas y de los tracios; base para Buzludzha" },
  },
  {
    id: "bg-veliko-tarnovo",
    name: "Veliko Tarnovo",
    coords: [43.0757, 25.6172],
    population: 70_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 0,50 €; la estación de Gorna Oryahovitsa, a 15 min en bus", note: "la capital medieval colgada del río; la estación de los trenes rápidos es Gorna Oryahovitsa" },
  },
  {
    id: "bg-varna",
    name: "Varna",
    coords: [43.2141, 27.9147],
    population: 350_000,
    urban: { modes: ["bus", "a-pie", "bolt"], score: 6, ticket: "bus 0,80 €", app: "Bolt", note: "el mar Negro; base para el bosque de piedra y para Shumen" },
  },
  {
    id: "bg-shumen",
    name: "Shumen",
    coords: [43.2712, 26.9361],
    population: 75_000,
    urban: { modes: ["bus", "a-pie"], score: 4, ticket: "bus 0,50 €; al monumento, 1.300 escalones o taxi de 5 €", note: "ciudad de provincia con el monumento de hormigón más grande del país encima" },
  },
  {
    id: "bg-ruse",
    name: "Ruse",
    coords: [43.8564, 25.9708],
    population: 140_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 0,50 €", note: "la «pequeña Viena» del Danubio, con Rumanía enfrente por el puente de la Amistad" },
  },
];

export const airports: Airport[] = [
  { code: "SOF", name: "Sofía", cityId: "bg-sofia", coords: [42.6967, 23.4114], international: true },
  { code: "VAR", name: "Varna", cityId: "bg-varna", coords: [43.2321, 27.8251], international: true },
  { code: "PDV", name: "Plovdiv", cityId: "bg-plovdiv", coords: [42.0678, 24.8508], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "bg-sofia-plovdiv",
    name: "Sofía–Plovdiv",
    stops: ["bg-sofia", "bg-plovdiv"],
    kind: "intercity",
    frequency: "cada hora o dos",
    durationNote: "≈ 2 h 30 los rápidos por el desfiladero; los lentos, 3 h 30 parando en cada huerto",
    price: "≈ 6 €",
    operator: "BDZ",
    booking: "bdz.bg o taquilla; nunca se llena",
    quality: 4,
    meta: railMeta,
  },
  {
    id: "bg-sofia-karlovo-kazanlak",
    name: "Sofía–Karlovo–Kazanlak (el valle de las rosas)",
    stops: ["bg-sofia", "bg-kazanlak"],
    kind: "regional",
    frequency: "3-4 al día",
    durationNote: "≈ 3 h 30-4 h por el valle sub-balcánico; desde Plovdiv, 2 h con cambio en Karlovo o directo",
    price: "≈ 6 €",
    operator: "BDZ",
    booking: "taquilla",
    quality: 3,
    meta: railMeta,
  },
  {
    id: "bg-sofia-gorna-varna",
    name: "Sofía–Gorna Oryahovitsa (Veliko Tarnovo)–Shumen–Varna",
    stops: ["bg-sofia", "bg-veliko-tarnovo", "bg-shumen", "bg-varna"],
    kind: "intercity",
    frequency: "varios al día, con un nocturno",
    durationNote: "≈ 4 h 30 a Gorna Oryahovitsa (bus de 15 min a Veliko Tarnovo), 6 h a Shumen y 7-8 h a Varna; el nocturno con literas hace Sofía–Varna durmiendo",
    price: "≈ 12 € a Varna; litera, 20 €",
    operator: "BDZ",
    booking: "bdz.bg o taquilla; la litera, en taquilla mejor",
    quality: 4,
    meta: railMeta,
  },
  {
    id: "bg-gorna-ruse",
    name: "Gorna Oryahovitsa–Ruse",
    stops: ["bg-veliko-tarnovo", "bg-ruse"],
    kind: "regional",
    frequency: "varios al día",
    durationNote: "≈ 2 h; Ruse enlaza con Bucarest en 2 h más por el puente del Danubio",
    price: "≈ 4 €",
    operator: "BDZ",
    booking: "taquilla",
    quality: 3,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "bg-bus-sofia-vt", label: "Bus Sofía → Veliko Tarnovo", from: "bg-sofia", to: "bg-veliko-tarnovo", mode: "bus", note: "3 h por autopista, cada hora desde la estación central; más rápido que el tren" },
  { id: "bg-bus-kazanlak-vt", label: "Bus Kazanlak → Veliko Tarnovo", from: "bg-kazanlak", to: "bg-veliko-tarnovo", mode: "bus", note: "≈ 2 h 30 por el paso de Shipka; pasa por debajo de Buzludzha" },
  { id: "bg-bus-vt-varna", label: "Bus Veliko Tarnovo → Varna", from: "bg-veliko-tarnovo", to: "bg-varna", mode: "bus", note: "≈ 3 h 30; también tren desde Gorna Oryahovitsa" },
];
