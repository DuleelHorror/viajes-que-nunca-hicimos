import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Greece", url: "https://www.seat61.com/Greece.htm", kind: "blog" as const };
const HT = { label: "Hellenic Train", url: "https://www.hellenictrain.gr/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence: "media", sources: [SEAT61, HT], notes: "La red sigue en obras tras Tempi y la tormenta Daniel: cortes y tramos en bus cada pocos meses; mirar hellenictrain.gr la semana antes" });

export const cities: City[] = [
  {
    id: "gr-atenas",
    name: "Atenas",
    coords: [37.9838, 23.7275],
    isCapital: true,
    population: 3_150_000,
    urban: { modes: ["metro", "tranvia", "bus", "a-pie", "taxi"], score: 8, ticket: "billete de 90 min 1,20 €; al aeropuerto en metro 9 €; 3 días con aeropuerto 20 €", note: "metro con museo arqueológico en cada estación; la estación de tren de Larissa en la línea 2" },
  },
  {
    id: "gr-tesalonica",
    name: "Tesalónica",
    coords: [40.6401, 22.9444],
    population: 1_100_000,
    urban: { modes: ["metro", "bus", "a-pie"], score: 7, ticket: "bus OASTH 1 €; el metro nuevo (2024) 0,60 €", note: "la segunda ciudad, judía y otomana, con el metro que tardó 20 años por las ruinas" },
  },
  {
    id: "gr-kalambaka",
    name: "Kalambaka (Meteora)",
    coords: [39.7064, 21.6275],
    population: 12_000,
    urban: { modes: ["bus", "a-pie"], score: 4, ticket: "bus local a los monasterios 2 € (2-3 al día); o 4 h a pie", note: "sin tren directo hasta que reabra la línea: bus exprés desde Atenas 4 h 30" },
  },
  {
    id: "gr-kalavryta",
    name: "Kalavryta",
    coords: [38.0322, 22.1097],
    population: 2_000,
    urban: { modes: ["a-pie", "tren"], score: 3, ticket: "el cremallera desde Diakofto, 9,50 € el trayecto", note: "el pueblo de la masacre de 1943 y del tren de cremallera" },
  },
  {
    id: "gr-heraklion",
    name: "Heraklion (Creta)",
    coords: [35.3387, 25.1442],
    population: 210_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "bus urbano 1,20 €; KTEL a Agios Nikolaos cada hora, 1 h 30, 8 €", note: "la puerta de Creta: Knossos en bus urbano y Spinalonga en KTEL y barco" },
  },
  {
    id: "gr-agios-nikolaos",
    name: "Agios Nikolaos / Plaka",
    coords: [35.1908, 25.7164],
    population: 12_000,
    urban: { modes: ["bus", "ferry", "a-pie"], score: 5, ticket: "bus a Elounda y Plaka 2 €; barco a Spinalonga 12 €", note: "la base para Spinalonga: bus cada hora a Plaka y barco de 5 min" },
  },
];

export const airports: Airport[] = [
  { code: "ATH", name: "Atenas Eleftherios Venizelos", cityId: "gr-atenas", coords: [37.9364, 23.9445], international: true },
  { code: "SKG", name: "Tesalónica Macedonia", cityId: "gr-tesalonica", coords: [40.5197, 22.9709], international: true },
  { code: "HER", name: "Heraklion Nikos Kazantzakis", cityId: "gr-heraklion", coords: [35.3397, 25.1803], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "gr-atenas-tesalonica",
    name: "Atenas (Larissa)–Larisa–Tesalónica",
    stops: ["gr-atenas", "gr-tesalonica"],
    kind: "intercity",
    frequency: "4-6 al día",
    durationNote: "≈ 5 h (antes de Tempi eran 4) con tramos a vía única y cortes por obras; en Palaiofarsalos, enlace en bus de Hellenic Train a Kalambaka mientras el ramal siga cerrado",
    price: "25-35 € en turista; 45-60 en primera",
    operator: "Hellenic Train",
    booking: "web y app de Hellenic Train en inglés; con descuento reservando días antes",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "gr-atenas-kalavryta-cremallera",
    name: "Atenas–Kiato/Aigio (Proastiakós) y Diakofto–Kalavryta (el cremallera Odontotós)",
    stops: ["gr-atenas", "gr-kalavryta"],
    kind: "turistico",
    frequency: "el cremallera, 2-4 al día; el Proastiakós, cada hora",
    durationNote: "Atenas–Diakofto ≈ 2 h 30 (Proastiakós hasta Aigio y regional, o bus KTEL desde Kiato), y luego 1 h de cremallera de 75 cm de ancho por el desfiladero de Vouraikos, con túneles y el tren colgado del barranco",
    price: "≈ 15 € hasta Diakofto; 9,50 € el cremallera",
    operator: "Hellenic Train",
    booking: "el cremallera se agota los fines de semana: reservar en hellenictrain.gr",
    quality: 7,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "gr-bus-atenas-kalambaka", label: "Bus exprés Atenas → Kalambaka", from: "gr-atenas", to: "gr-kalambaka", mode: "bus", note: "4 h 30 directo desde la estación de Liosion o con Hellenic Train (tren a Palaiofarsalos + bus), 5-6 h; mientras el tren no vuelva" },
  { id: "gr-ferry-atenas-heraklion", label: "Ferry Pireo → Heraklion", from: "gr-atenas", to: "gr-heraklion", mode: "ferry", note: "nocturno de Minoan o ANEK, 9 h, desde 40 € en butaca; o vuelo de 50 min" },
  { id: "gr-bus-heraklion-agios", label: "KTEL Heraklion → Agios Nikolaos", from: "gr-heraklion", to: "gr-agios-nikolaos", mode: "bus", note: "cada hora, 1 h 30, 8 €; y bus a Plaka para Spinalonga" },
  { id: "gr-tren-tesalonica-atenas", label: "Tren Tesalónica → Atenas", from: "gr-tesalonica", to: "gr-atenas", mode: "tren", note: "4-6 al día, ≈ 5 h; comprobar cortes" },
];
