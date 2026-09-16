import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Kazakhstan", url: "https://www.seat61.com/Kazakhstan.htm", kind: "blog" as const };
const KTZ = { label: "Tickets.kz (KTZ)", url: "https://tickets.kz/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61, KTZ], notes: "Todo son nocturnos de 12-26 h; precios de risa, reservar con días" });

export const cities: City[] = [
  {
    id: "kz-almaty",
    name: "Almaty",
    coords: [43.222, 76.8512],
    population: 2_200_000,
    urban: { modes: ["metro", "bus", "tranvia", "bolt", "taxi"], score: 7, ticket: "≈ 0,20 € metro y bus con la tarjeta Onay; Yandex Go 1-2 €", app: "Yandex Go", note: "una línea de metro soviético-tardío a 80 m de profundidad; la ciudad es una cuadrícula con montañas al sur" },
  },
  {
    id: "kz-astana",
    name: "Astaná",
    coords: [51.1694, 71.4491],
    isCapital: true,
    population: 1_400_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 6, ticket: "≈ 0,20 € en bus con tarjeta; Yandex Go 1-3 €", app: "Yandex Go", note: "el metro ligero lleva 15 años en obras; las distancias son enormes y el viento te empuja" },
  },
  {
    id: "kz-karaganda",
    name: "Karagandá",
    coords: [49.8047, 73.1094],
    population: 500_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 5, ticket: "bus ≈ 0,20 €; marshrutka a Dolinka ≈ 1 €", note: "la capital del carbón y del Gulag, a 3 h de Astaná en Talgo" },
  },
  {
    id: "kz-semey",
    name: "Semey (Semipalátinsk)",
    coords: [50.4111, 80.2275],
    population: 350_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 4, ticket: "bus ≈ 0,20 €", note: "base para Kurchatov y el Polígono; la agencia del permiso está aquí" },
  },
  {
    id: "kz-turkestan",
    name: "Turkestán",
    coords: [43.2973, 68.2517],
    population: 200_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 4, ticket: "bus urbano y taxi de 1 €", note: "estación de tren a 4 km del mausoleo; todo es nuevo desde 2021" },
  },
  {
    id: "kz-aralsk",
    name: "Aralsk",
    coords: [46.7833, 61.6667],
    population: 32_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "todo a pie; jeep contratado para ir al mar", note: "el antiguo puerto sin mar; estación en la línea principal" },
  },
];

export const airports: Airport[] = [
  { code: "ALA", name: "Almaty", cityId: "kz-almaty", coords: [43.3521, 77.0405], international: true },
  { code: "NQZ", name: "Astaná Nursultán Nazarbáyev", cityId: "kz-astana", coords: [51.0222, 71.4669], international: true },
  { code: "KGF", name: "Karagandá Sary-Arka", cityId: "kz-karaganda", coords: [49.6708, 73.3344], international: false },
  { code: "PLX", name: "Semey", cityId: "kz-semey", coords: [50.3513, 80.2344], international: false },
  { code: "HSA", name: "Turkestán Hazrat Sultan", cityId: "kz-turkestan", coords: [43.3167, 68.5333], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "kz-talgo-almaty-astana",
    name: "Talgo nocturno Almaty–Karagandá–Astaná",
    stops: ["kz-almaty", "kz-karaganda", "kz-astana"],
    kind: "nocturno",
    frequency: "diario, varios trenes",
    durationNote: "≈ 12 h en el Talgo (los clásicos, 18-24 h) para 1.350 km de estepa; sales de noche y desayunas en la capital",
    price: "≈ 25-40 € en kupe de 4",
    operator: "KTZ (Kazakhstan Temir Zholy)",
    booking: "tickets.kz o la app KTZ con tarjeta extranjera; con una semana de antelación en verano",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "kz-almaty-turkestan",
    name: "Nocturno Almaty–Turkestán",
    stops: ["kz-almaty", "kz-turkestan"],
    kind: "nocturno",
    frequency: "diario",
    durationNote: "≈ 17-18 h: sale a las 21:00 y llega a media tarde del día siguiente",
    price: "≈ 12-25 €",
    operator: "KTZ",
    booking: "tickets.kz; kupe de 4 con sábanas y samovar",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "kz-turkestan-aralsk",
    name: "Turkestán–Kyzylorda–Aralsk, la línea del Aral",
    stops: ["kz-turkestan", "kz-aralsk"],
    kind: "nocturno",
    frequency: "varios al día (es la línea principal a Moscú)",
    durationNote: "≈ 12-14 h por el desierto de Kyzylkum; Kyzylorda a mitad de camino (base para Baikonur)",
    price: "≈ 10-20 €",
    operator: "KTZ",
    booking: "tickets.kz; Aralsk es parada de todos los trenes Almaty–Aktobe–Moscú",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "kz-astana-semey",
    name: "Nocturno Astaná–Pavlodar–Semey",
    stops: ["kz-astana", "kz-semey"],
    kind: "nocturno",
    frequency: "diario",
    durationNote: "≈ 13-15 h; pasa por Ekibastuz, con la chimenea más alta del mundo a la izquierda",
    price: "≈ 15-25 €",
    operator: "KTZ",
    booking: "tickets.kz",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "kz-aralsk-astana",
    name: "Aralsk–Astaná, el largo",
    stops: ["kz-aralsk", "kz-astana"],
    kind: "nocturno",
    frequency: "diario o casi",
    durationNote: "≈ 26 h de estepa: es la alternativa al vuelo desde Kyzylorda para quien va sobrado de tiempo",
    price: "≈ 20-30 €",
    operator: "KTZ",
    booking: "tickets.kz; lleva comida, que el vagón restaurante es una lotería",
    quality: 4,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "kz-vuelo-almaty-astana", label: "Vuelo Almaty → Astaná", from: "kz-almaty", to: "kz-astana", mode: "avion", note: "1 h 45, muchos al día, 40-80 €; el Talgo es más bonito" },
  { id: "kz-vuelo-semey-almaty", label: "Vuelo Semey → Almaty", from: "kz-semey", to: "kz-almaty", mode: "avion", note: "1 h 40 con SCAT o Qazaq Air; evita 20 h de tren de vuelta" },
  { id: "kz-vuelo-turkestan-astana", label: "Vuelo Turkestán → Astaná", from: "kz-turkestan", to: "kz-astana", mode: "avion", note: "2 h; el aeropuerto nuevo de Turkestán tiene más vuelos de los que parece" },
];
