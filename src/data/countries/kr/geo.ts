import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · South Korea", url: "https://www.seat61.com/SouthKorea.htm", kind: "blog" as const };
const KORAIL = { label: "Korail", url: "https://www.letskorail.com/ebizbf/EbizBfIndex.do", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "alta", sources: [SEAT61, KORAIL], notes: "KTX a 300 km/h y Mugunghwa lentos y baratos; sin nocturnos; billetes online en inglés o en máquina" });

export const cities: City[] = [
  {
    id: "kr-seul",
    name: "Seúl",
    coords: [37.5665, 126.978],
    isCapital: true,
    population: 9_400_000,
    urban: { modes: ["metro", "bus", "taxi", "a-pie"], score: 10, ticket: "T-money: metro y bus desde 1.550 ₩ (≈ 1 €); taxi de 4.800 ₩ de bajada", note: "el metro más grande y más limpio que vas a ver; los tours a la DMZ salen de aquí" },
  },
  {
    id: "kr-busan",
    name: "Busan",
    coords: [35.1796, 129.0756],
    population: 3_300_000,
    urban: { modes: ["metro", "bus", "taxi"], score: 8, ticket: "metro 1.550 ₩ con T-money", note: "el puerto del sur, con Gamcheon y el cementerio de la ONU; a 2 h 15 de Seúl en KTX" },
  },
  {
    id: "kr-gwangju",
    name: "Gwangju",
    coords: [35.1595, 126.8526],
    population: 1_400_000,
    urban: { modes: ["metro", "bus", "taxi"], score: 7, ticket: "metro y bus 1.400 ₩", note: "la ciudad de la masacre de 1980; el cementerio nacional a 40 min en bus" },
  },
  {
    id: "kr-cheorwon",
    name: "Cheorwon",
    coords: [38.1469, 127.3131],
    population: 40_000,
    urban: { modes: ["bus", "tour", "taxi"], score: 3, ticket: "bus desde Dong Seoul a Sincheorwon o Dongsong, 2 h; el tour de seguridad, desde la oficina de turismo", note: "la ciudad partida por la DMZ, con las ruinas del Partido y el segundo túnel" },
  },
  {
    id: "kr-gangneung",
    name: "Gangneung",
    coords: [37.7519, 128.8761],
    population: 210_000,
    urban: { modes: ["bus", "taxi", "tren"], score: 6, ticket: "KTX desde Seúl 2 h; bus a Jeongdongjin 40 min", note: "la costa este con Jeongdongjin, la estación más cerca del mar" },
  },
  {
    id: "kr-andong",
    name: "Andong",
    coords: [36.5684, 128.7294],
    population: 160_000,
    urban: { modes: ["bus", "taxi"], score: 5, ticket: "bus 46 a Hahoe, 50 min, 1.500 ₩", note: "la ciudad confuciana y del festival de máscaras; KTX-Eum desde Seúl en 2 h" },
  },
];

export const airports: Airport[] = [
  { code: "ICN", name: "Seúl Incheon", cityId: "kr-seul", coords: [37.4602, 126.4407], international: true },
  { code: "GMP", name: "Seúl Gimpo", cityId: "kr-seul", coords: [37.5583, 126.7906], international: true },
  { code: "PUS", name: "Busan Gimhae", cityId: "kr-busan", coords: [35.1795, 128.9382], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "kr-ktx-seul-busan",
    name: "KTX Seúl–Daejeon–Daegu–Busan (la Gyeongbu)",
    stops: ["kr-seul", "kr-busan"],
    kind: "alta-velocidad",
    frequency: "cada 10-20 min",
    durationNote: "2 h 15 a 300 km/h; el Mugunghwa lento hace lo mismo en 5 h 20 por la mitad de precio (8 al día)",
    price: "59.800 ₩ (≈ 38 €); Mugunghwa 28.600 ₩",
    operator: "Korail",
    booking: "app o web Korail en inglés (con pasaporte), máquinas en inglés en la estación; el Korail Pass para extranjeros (3 días, ≈ 85 €) compensa con dos KTX",
    quality: 10,
    meta: railMeta,
  },
  {
    id: "kr-ktx-seul-gangneung",
    name: "KTX Seúl (Cheongnyangni)–Gangneung",
    stops: ["kr-seul", "kr-gangneung"],
    kind: "alta-velocidad",
    frequency: "cada 30-60 min",
    durationNote: "2 h cruzando las montañas del Taebaek (la línea de los JJ.OO. de 2018); desde Gangneung, tren o bus a Jeongdongjin",
    price: "27.600 ₩ (≈ 18 €)",
    operator: "Korail",
    booking: "app Korail o máquina",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "kr-ktx-seul-gwangju",
    name: "KTX Seúl (Yongsan)–Gwangju Songjeong (la Honam)",
    stops: ["kr-seul", "kr-gwangju"],
    kind: "alta-velocidad",
    frequency: "cada 30 min",
    durationNote: "1 h 50; SRT desde Suseo, igual",
    price: "46.800 ₩ (≈ 30 €)",
    operator: "Korail / SRT",
    booking: "app Korail o SRT; máquina",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "kr-eum-seul-andong",
    name: "KTX-Eum Seúl (Cheongnyangni)–Andong",
    stops: ["kr-seul", "kr-andong"],
    kind: "intercity",
    frequency: "8 al día",
    durationNote: "2 h en el KTX-Eum (el eléctrico nuevo a 260 km/h); desde Andong, Mugunghwa a Busan por el interior",
    price: "25.100 ₩ (≈ 16 €)",
    operator: "Korail",
    booking: "app Korail o máquina",
    quality: 8,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "kr-bus-seul-cheorwon", label: "Bus Seúl → Cheorwon", from: "kr-seul", to: "kr-cheorwon", mode: "bus", note: "desde la terminal de Dong Seoul a Sincheorwon o Dongsong, ≈ 2 h, cada 30-60 min" },
  { id: "kr-tren-gwangju-busan", label: "Tren Gwangju → Busan", from: "kr-gwangju", to: "kr-busan", mode: "tren", note: "Mugunghwa por el sur (Suncheon), ≈ 4 h; o bus exprés 3 h" },
  { id: "kr-tren-andong-busan", label: "Tren Andong → Busan", from: "kr-andong", to: "kr-busan", mode: "tren", note: "Mugunghwa por Yeongcheon, ≈ 3 h 30; o bus 2 h 30" },
];
