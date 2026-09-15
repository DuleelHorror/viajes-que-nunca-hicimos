import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Armenia", url: "https://www.seat61.com/Armenia.htm", kind: "blog" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61], notes: "Muy pocos trenes; el nocturno a Tiflis va en días alternos" });

export const cities: City[] = [
  {
    id: "am-erevan",
    name: "Ereván",
    coords: [40.1792, 44.4991],
    isCapital: true,
    population: 1_100_000,
    urban: { modes: ["metro", "bus", "bolt", "taxi", "a-pie"], score: 7, ticket: "100 AMD (≈ 0,25 €) metro y bus", app: "Yandex Go · GG", note: "una línea de metro soviético de 10 estaciones; el centro se anda; Yandex Go a 1-2 € el trayecto" },
  },
  {
    id: "am-gyumri",
    name: "Gyumri",
    coords: [40.7942, 43.8453],
    population: 115_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 5, ticket: "marshrutka urbana ≈ 0,25 €", note: "la segunda ciudad, la del terremoto; el centro histórico de toba negra se anda" },
  },
  {
    id: "am-dilijan",
    name: "Dilijan",
    coords: [40.7417, 44.8631],
    population: 17_000,
    urban: { modes: ["a-pie", "taxi"], score: 4, ticket: "todo a pie; taxi a los monasterios ≈ 10 € con espera", note: "la «Suiza armenia» soviética, base para Sevan y el cañón de Debed" },
  },
  {
    id: "am-goris",
    name: "Goris",
    coords: [39.5108, 46.3383],
    population: 20_000,
    urban: { modes: ["a-pie", "taxi", "bus"], score: 4, ticket: "taxi a Tatev y Khndzoresk negociado, 15-25 € con espera", note: "base del sur: Tatev, Khndzoresk y Karahunj" },
  },
];

export const airports: Airport[] = [
  { code: "EVN", name: "Ereván Zvartnots", cityId: "am-erevan", coords: [40.1473, 44.3959], international: true },
  { code: "LWN", name: "Gyumri Shirak", cityId: "am-gyumri", coords: [40.7504, 43.8593], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "am-erevan-gyumri",
    name: "Ereván–Gyumri",
    stops: ["am-erevan", "am-gyumri"],
    kind: "regional",
    frequency: "2-3 al día; el exprés, viernes y sábados",
    durationNote: "≈ 2 h en el exprés, 3 h en el lento",
    price: "≈ 2-5 €",
    operator: "South Caucasus Railway (filial de los ferrocarriles rusos)",
    booking: "taquilla; también en ukzhd.am",
    quality: 4,
    meta: railMeta,
  },
  {
    id: "am-nocturno-tiflis",
    name: "Nocturno Ereván → Tiflis (y vuelta)",
    stops: ["am-erevan", "am-gyumri"],
    kind: "nocturno",
    frequency: "en días alternos: sale de Ereván los días pares",
    durationNote: "Ereván 21:30 → Tiflis 07:35 pasando por Gyumri y el cañón de Debed; la frontera se cruza durmiendo (te despiertan dos veces)",
    price: "15 € en asiento, 22 € en compartimento de 4, 30 € en cabina de 2",
    operator: "South Caucasus Railway",
    booking: "taquilla de Ereván o tre.ge desde el lado georgiano; en verano hay uno diario",
    quality: 6,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "am-marsh-erevan-goris", label: "Marshrutka Ereván → Goris", from: "am-erevan", to: "am-goris", mode: "bus", note: "≈ 4 h 30 desde la estación central; 2-3 al día por la mañana" },
  { id: "am-marsh-erevan-dilijan", label: "Marshrutka Ereván → Dilijan", from: "am-erevan", to: "am-dilijan", mode: "bus", note: "≈ 1 h 45 bordeando el lago Sevan; cada hora" },
  { id: "am-marsh-erevan-gyumri", label: "Marshrutka Ereván → Gyumri", from: "am-erevan", to: "am-gyumri", mode: "bus", note: "≈ 2 h; más frecuente que el tren" },
];
