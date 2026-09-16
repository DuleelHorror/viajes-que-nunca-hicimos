import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Vilnius–Riga–Tallinn", url: "https://www.seat61.com/trains-and-routes/vilnius-riga-tallinn-by-train.htm", kind: "blog" as const };
const LTG = { label: "LTG Link", url: "https://ltglink.lt/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, LTG], notes: "La mejor red de los tres bálticos: trenes nuevos, frecuentes, baratos, online en inglés" });

export const cities: City[] = [
  {
    id: "lt-vilnius",
    name: "Vilnius",
    coords: [54.6872, 25.2797],
    isCapital: true,
    population: 590_000,
    urban: { modes: ["bus", "tranvia", "bolt", "a-pie"], score: 7, ticket: "1 € con la app Trafi o tarjeta en el validador; trolebuses a todo", app: "Bolt", note: "la ciudad vieja y Užupis se andan; la torre de TV y Paneriai, en bus y tren" },
  },
  {
    id: "lt-kaunas",
    name: "Kaunas",
    coords: [54.8985, 23.9036],
    population: 300_000,
    urban: { modes: ["bus", "tranvia", "bolt", "a-pie"], score: 7, ticket: "bus 1 €; al Noveno Fuerte, bus 23", app: "Bolt", note: "la capital de entreguerras, con modernismo, el Noveno Fuerte y aeropuerto Ryanair" },
  },
  {
    id: "lt-siauliai",
    name: "Šiauliai",
    coords: [55.9333, 23.3167],
    population: 100_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 1 €; a la Colina de las Cruces, bus a Joniškis y 2 km a pie", note: "la ciudad del sol y de la base aérea de la OTAN; base para la Colina de las Cruces" },
  },
  {
    id: "lt-plunge",
    name: "Plungė",
    coords: [55.9167, 21.85],
    population: 17_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "taxi a Plokštinė con espera ≈ 30 €", note: "parada del tren a Klaipėda; la base de misiles está a 20 km de bosque" },
  },
  {
    id: "lt-klaipeda",
    name: "Klaipėda",
    coords: [55.7033, 21.1443],
    population: 150_000,
    urban: { modes: ["bus", "ferry", "a-pie"], score: 6, ticket: "bus 1 €; ferry a la Lengua Curlandesa 1 € más bus a Nida", note: "el puerto prusiano; puerta de Nida y del istmo" },
  },
  {
    id: "lt-visaginas",
    name: "Visaginas",
    coords: [55.6, 26.4333],
    population: 18_000,
    urban: { modes: ["bus", "a-pie"], score: 4, ticket: "bus urbano a la central 1 €; la visita, con reserva", note: "la ciudad soviética planificada de la central nuclear tipo Chernóbil; 80 % rusófona" },
  },
  {
    id: "lt-druskininkai",
    name: "Druskininkai",
    coords: [54.0167, 23.9667],
    population: 12_000,
    urban: { modes: ["bus", "a-pie", "taxi"], score: 4, ticket: "bus local a Grūtas 1 €; taxi 8 €", note: "el balneario soviético del bosque; el parque de Stalin a 8 km" },
  },
];

export const airports: Airport[] = [
  { code: "VNO", name: "Vilnius", cityId: "lt-vilnius", coords: [54.6341, 25.2858], international: true },
  { code: "KUN", name: "Kaunas", cityId: "lt-kaunas", coords: [54.9639, 24.0848], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "lt-vilnius-kaunas",
    name: "Vilnius–Kaunas",
    stops: ["lt-vilnius", "lt-kaunas"],
    kind: "intercity",
    frequency: "cada 30-60 min",
    durationNote: "≈ 1 h 10 en trenes eléctricos de dos pisos; el tren pasa por Paneriai a los 10 minutos",
    price: "≈ 6 €",
    operator: "LTG Link",
    booking: "ltglink.lt o la app, en inglés; asiento sin reserva",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "lt-vilnius-siauliai-klaipeda",
    name: "Vilnius–Šiauliai–Plungė–Klaipėda",
    stops: ["lt-vilnius", "lt-siauliai", "lt-plunge", "lt-klaipeda"],
    kind: "intercity",
    frequency: "4-6 al día",
    durationNote: "≈ 2 h a Šiauliai, 3 h 30 a Plungė y 4 h a Klaipėda, con wifi y cafetería; el directo Vilnius–Riga sale por Šiauliai",
    price: "≈ 15-20 € a Klaipėda",
    operator: "LTG Link",
    booking: "ltglink.lt con asiento; los de viernes se llenan",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "lt-vilnius-visaginas",
    name: "Vilnius–Ignalina–Visaginas",
    stops: ["lt-vilnius", "lt-visaginas"],
    kind: "regional",
    frequency: "4-5 al día",
    durationNote: "≈ 2 h hasta la ciudad de la central nuclear, por los lagos de Aukštaitija; la línea seguía a Daugavpils y Rusia",
    price: "≈ 7 €",
    operator: "LTG Link",
    booking: "ltglink.lt",
    quality: 7,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "lt-bus-vilnius-druskininkai", label: "Bus Vilnius → Druskininkai", from: "lt-vilnius", to: "lt-druskininkai", mode: "bus", note: "≈ 2 h desde la estación de autobuses (junto a la de tren), cada hora, 8 €; sin tren" },
  { id: "lt-bus-kaunas-druskininkai", label: "Bus Kaunas → Druskininkai", from: "lt-kaunas", to: "lt-druskininkai", mode: "bus", note: "≈ 2 h, varios al día" },
  { id: "lt-tren-riga", label: "Tren Vilnius → Riga (por Šiauliai)", from: "lt-vilnius", to: "lt-siauliai", mode: "tren", note: "el directo de LTG Link a Riga (4 h) sale por aquí; lo dibujamos hasta Šiauliai. Billete en ltglink.lt" },
];
