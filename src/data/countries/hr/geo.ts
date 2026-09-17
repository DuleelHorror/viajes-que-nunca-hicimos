import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Croatia", url: "https://www.seat61.com/Croatia.htm", kind: "blog" as const };
const HZPP = { label: "HŽ Putnički prijevoz", url: "https://www.hzpp.hr/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence: "alta", sources: [SEAT61, HZPP], notes: "Red lenta y barata; el nocturno a Split diario solo en verano (22/6–30/8 de 2026), domingos el resto; la costa va en bus" });

export const cities: City[] = [
  {
    id: "hr-zagreb",
    name: "Zagreb",
    coords: [45.815, 15.9819],
    isCapital: true,
    population: 770_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 7, ticket: "tranvía ZET 0,80 € (30 min) o 1,20 € (90 min); a Novi Zagreb, tranvías 6, 7 y 14", note: "la capital con tranvías azules; Novi Zagreb al otro lado del Sava; estación de tren y de buses a 20 min una de otra" },
  },
  {
    id: "hr-rijeka",
    name: "Rijeka",
    coords: [45.3271, 14.4422],
    population: 110_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 1,60 €", note: "el puerto de los torpedos y del Galeb; buses a Rab desde aquí" },
  },
  {
    id: "hr-rab",
    name: "Rab",
    coords: [44.7569, 14.7603],
    population: 8_000,
    urban: { modes: ["a-pie", "ferry"], score: 3, ticket: "todo a pie; los barcos a Goli Otok desde el puerto", note: "la isla de los cuatro campanarios y la puerta del gulag de Tito; bus desde Rijeka o Zagreb con ferry incluido" },
  },
  {
    id: "hr-pula",
    name: "Pula",
    coords: [44.8666, 13.8496],
    population: 55_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 1,50 €; a Fažana (Brijuni), bus 21, 25 min", note: "el anfiteatro, los túneles austrohúngaros y el barco a la isla de Tito" },
  },
  {
    id: "hr-vukovar",
    name: "Vukovar",
    coords: [45.3519, 18.9986],
    population: 23_000,
    urban: { modes: ["a-pie", "taxi", "tren"], score: 3, ticket: "todo a pie; a Ovčara, taxi de 10 €", note: "la ciudad del asedio de 1991, en el Danubio; tren desde Zagreb con cambio en Vinkovci" },
  },
  {
    id: "hr-split",
    name: "Split",
    coords: [43.5081, 16.4402],
    population: 160_000,
    urban: { modes: ["bus", "ferry", "a-pie"], score: 6, ticket: "bus urbano 1,50 €; ferris a las islas desde el puerto", note: "el final del nocturno y el palacio de Diocleciano habitado; base para Sinj" },
  },
];

export const airports: Airport[] = [
  { code: "ZAG", name: "Zagreb Franjo Tuđman", cityId: "hr-zagreb", coords: [45.7429, 16.0688], international: true },
  { code: "SPU", name: "Split", cityId: "hr-split", coords: [43.5389, 16.2981], international: true },
  { code: "PUY", name: "Pula", cityId: "hr-pula", coords: [44.8935, 13.9222], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "hr-zagreb-split-nocturno",
    name: "Zagreb–Knin–Split (el nocturno de la costa)",
    stops: ["hr-zagreb", "hr-split"],
    kind: "nocturno",
    frequency: "diario del 22 de junio al 30 de agosto; los domingos el resto del año; el diurno, 2 al día",
    durationNote: "22:06 → 06:53 (8 h 44) en literas de seis por el Lika y el Velebit; el diurno ≈ 6 h por las montañas",
    price: "≈ 20-30 € (litera aparte)",
    operator: "HŽPP",
    booking: "web y app de HŽPP; el nocturno se llena en agosto",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "hr-zagreb-vinkovci-vukovar",
    name: "Zagreb–Vinkovci–Vukovar (la línea de Eslavonia)",
    stops: ["hr-zagreb", "hr-vukovar"],
    kind: "regional",
    frequency: "≈ 13 conexiones al día con cambio en Vinkovci",
    durationNote: "≈ 5-6 h en total (Zagreb–Vinkovci 3-4 h en IC, Vinkovci–Vukovar 20 min); en verano hay nocturno Vukovar–Zagreb–Split",
    price: "≈ 19 €",
    operator: "HŽPP",
    booking: "app HŽPP o taquilla",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "hr-zagreb-rijeka",
    name: "Zagreb–Karlovac–Rijeka",
    stops: ["hr-zagreb", "hr-rijeka"],
    kind: "regional",
    frequency: "3-4 al día",
    durationNote: "≈ 4 h por el Gorski kotar en trenes viejos; el bus lo hace en 2 h 30 y es lo que usa todo el mundo",
    price: "≈ 12 €",
    operator: "HŽPP",
    booking: "app HŽPP o taquilla",
    quality: 4,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "hr-bus-rijeka-rab", label: "Bus Rijeka → Rab", from: "hr-rijeka", to: "hr-rab", mode: "bus", note: "3-4 al día, 3 h con el ferry de Jablanac incluido, ≈ 20 €; también desde Zagreb (5 h)" },
  { id: "hr-bus-zagreb-pula", label: "Bus Zagreb → Pula", from: "hr-zagreb", to: "hr-pula", mode: "bus", note: "FlixBus y Arriva, 4-5 h, desde 15 €; sin tren directo" },
  { id: "hr-bus-rijeka-pula", label: "Bus Rijeka → Pula", from: "hr-rijeka", to: "hr-pula", mode: "bus", note: "cada hora, 2 h, ≈ 12 €" },
  { id: "hr-tren-zagreb-vukovar", label: "Tren Zagreb → Vukovar", from: "hr-zagreb", to: "hr-vukovar", mode: "tren", note: "5-6 h con cambio en Vinkovci; el bus, 4 h" },
];
