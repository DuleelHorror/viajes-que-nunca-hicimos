import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Japan", url: "https://www.seat61.com/Japan.htm", kind: "blog" as const };
const JR = { label: "Japan Rail Pass (JR)", url: "https://japanrailpass.net", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, JR], notes: "Precios en yenes convertidos a ojo; el JR Pass de 7 días cuesta 50.000 ¥ y solo compensa con 3 trayectos largos" });

export const cities: City[] = [
  {
    id: "jp-tokio",
    name: "Tokio",
    coords: [35.6762, 139.6503],
    isCapital: true,
    population: 14_000_000,
    urban: { modes: ["metro", "tren", "bus", "taxi", "a-pie"], score: 10, ticket: "180-330 ¥ (1-2 €) por trayecto con la tarjeta Suica; se paga tocando el torno", app: "Google Maps + Suica en el móvil", note: "13 líneas de metro y otras tantas de tren; el sistema más grande del mundo y funciona al segundo" },
  },
  {
    id: "jp-kioto",
    name: "Kioto",
    coords: [35.0116, 135.7681],
    population: 1_450_000,
    urban: { modes: ["bus", "metro", "tren", "a-pie"], score: 7, ticket: "bus 230 ¥ el trayecto; bono de día 1.100 ¥", note: "los buses van llenos de turistas; el metro (dos líneas) y las bicis, no" },
  },
  {
    id: "jp-osaka",
    name: "Osaka",
    coords: [34.6937, 135.5023],
    population: 2_750_000,
    urban: { modes: ["metro", "tren", "bus", "a-pie"], score: 9, ticket: "190-400 ¥ con la tarjeta ICOCA (vale la Suica)", note: "base para Koyasan (Nankai desde Namba) y para la Torre del Sol (monorraíl)" },
  },
  {
    id: "jp-hiroshima",
    name: "Hiroshima",
    coords: [34.3853, 132.4553],
    population: 1_200_000,
    urban: { modes: ["tranvia", "bus", "ferry", "a-pie"], score: 8, ticket: "tranvía 220 ¥ plano; algunos vagones son de antes de la bomba", note: "base para Okunoshima y Kure" },
  },
  {
    id: "jp-nagasaki",
    name: "Nagasaki",
    coords: [32.7503, 129.8777],
    population: 400_000,
    urban: { modes: ["tranvia", "bus", "ferry", "a-pie"], score: 7, ticket: "tranvía 140 ¥ plano: el más barato de Japón", note: "los barcos a Gunkanjima salen del puerto, a 10 min de la estación" },
  },
  {
    id: "jp-beppu",
    name: "Beppu",
    coords: [33.2846, 131.4914],
    population: 115_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "bus a los infiernos ≈ 400 ¥; bono de día para turistas", note: "la ciudad humea por todas partes: 2.000 fuentes termales" },
  },
  {
    id: "jp-sendai",
    name: "Sendai",
    coords: [38.2682, 140.8694],
    population: 1_100_000,
    urban: { modes: ["metro", "bus", "a-pie"], score: 7, ticket: "metro 210-360 ¥", note: "base para la línea Joban por la zona de Fukushima" },
  },
  {
    id: "jp-aomori",
    name: "Aomori",
    coords: [40.8246, 140.7406],
    population: 270_000,
    urban: { modes: ["bus", "tren", "a-pie"], score: 5, ticket: "bus 200 ¥", note: "base para Osorezan (tren Ominato a Shimokita + bus) y para el Nebuta en agosto" },
  },
];

export const airports: Airport[] = [
  { code: "NRT", name: "Tokio Narita", cityId: "jp-tokio", coords: [35.772, 140.3929], international: true },
  { code: "HND", name: "Tokio Haneda", cityId: "jp-tokio", coords: [35.5494, 139.7798], international: true },
  { code: "KIX", name: "Osaka Kansai", cityId: "jp-osaka", coords: [34.4347, 135.244], international: true },
  { code: "HIJ", name: "Hiroshima", cityId: "jp-hiroshima", coords: [34.4361, 132.9194], international: true },
  { code: "NGS", name: "Nagasaki", cityId: "jp-nagasaki", coords: [32.9169, 129.9136], international: false },
  { code: "OIT", name: "Oita (Beppu)", cityId: "jp-beppu", coords: [33.4794, 131.7372], international: false },
  { code: "SDJ", name: "Sendai", cityId: "jp-sendai", coords: [38.1397, 140.917], international: true },
  { code: "AOJ", name: "Aomori", cityId: "jp-aomori", coords: [40.7347, 140.6908], international: false },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "jp-tokaido-sanyo",
    name: "Tokaido y Sanyo Shinkansen: Tokio–Kioto–Osaka–Hiroshima",
    stops: ["jp-tokio", "jp-kioto", "jp-osaka", "jp-hiroshima"],
    kind: "alta-velocidad",
    frequency: "un Nozomi cada 5-10 minutos, en serio",
    durationNote: "Tokio–Kioto 2 h 10 · Kioto–Osaka 15 min · Osaka–Hiroshima 1 h 25, a 300 km/h y con retraso medio de 24 segundos",
    price: "Tokio–Kioto ≈ 14.000 ¥ (85 €); el Nozomi no entra en el JR Pass sin suplemento",
    operator: "JR Central y JR West",
    booking: "app SmartEX con tarjeta extranjera, o máquinas en la estación en inglés; sin reserva vas en los coches libres y casi siempre hay sitio",
    quality: 10,
    meta: railMeta,
  },
  {
    id: "jp-nishi-kyushu",
    name: "A Nagasaki: Sanyo Shinkansen, relevo en Takeo-Onsen y Kamome",
    stops: ["jp-hiroshima", "jp-nagasaki"],
    kind: "alta-velocidad",
    frequency: "cada 30 min",
    durationNote: "≈ 2 h 30 con dos cambios (Hakata y Takeo-Onsen); el tramo final es el Shinkansen más nuevo de Japón (2022)",
    price: "≈ 12.000 ¥ (75 €)",
    operator: "JR West y JR Kyushu",
    booking: "máquinas o SmartEX; el relevo en Takeo-Onsen es de andén a andén",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "jp-tohoku",
    name: "Tohoku Shinkansen: Tokio–Sendai–Shin-Aomori",
    stops: ["jp-tokio", "jp-sendai", "jp-aomori"],
    kind: "alta-velocidad",
    frequency: "cada 30 min hasta Sendai; cada hora hasta Aomori",
    durationNote: "Tokio–Sendai 1 h 30 · Tokio–Shin-Aomori 3 h en el Hayabusa a 320 km/h, el más rápido del país",
    price: "Tokio–Aomori ≈ 17.500 ¥ (110 €); este sí entra en el JR Pass",
    operator: "JR East",
    booking: "reserva obligatoria en el Hayabusa: app JR East o máquinas",
    quality: 10,
    meta: railMeta,
  },
  {
    id: "jp-joban",
    name: "Línea Joban: el tren que cruza la zona de exclusión de Fukushima",
    stops: ["jp-sendai", "jp-tokio"],
    kind: "intercity",
    frequency: "el expreso Hitachi cada hora; algunos paran en Futaba y Namie",
    durationNote: "Sendai–Futaba 1 h 15 · Sendai–Tokio 4 h 30 por la costa, con las pantallas de radiación en los andenes de Okuma y Futaba",
    price: "≈ 3.000 ¥ (20 €) Sendai–Futaba",
    operator: "JR East",
    booking: "sin reserva en los locales; el Hitachi con reserva. Reabrió entera en 2020 tras nueve años cortada",
    quality: 7,
    meta: meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61], notes: "Mira qué Hitachi paran en Futaba: no todos" }),
  },
  {
    id: "jp-sonic-beppu",
    name: "A Beppu: Shinkansen a Kokura y expreso Sonic",
    stops: ["jp-hiroshima", "jp-beppu"],
    kind: "intercity",
    frequency: "cada 30 min",
    durationNote: "≈ 2 h 10: Sanyo Shinkansen a Kokura (50 min) y el Sonic basculante por la costa (1 h 20)",
    price: "≈ 8.000 ¥ (50 €)",
    operator: "JR West y JR Kyushu",
    booking: "máquinas; el Sonic tiene asientos de cuero y forma de tren de dibujos",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "jp-sunrise",
    name: "Sunrise Seto / Izumo: el último tren cama de Japón",
    stops: ["jp-tokio", "jp-osaka"],
    kind: "nocturno",
    frequency: "diario, sale de Tokio a las 21:50",
    durationNote: "Para en Osaka de madrugada solo en sentido este; hacia el oeste sigue a Okayama, Takamatsu e Izumo. Para nosotros: la experiencia de dormir en tren en un país que las ha eliminado todas",
    price: "de 15.000 ¥ en «nobinobi» (moqueta) a 30.000 ¥ en cabina",
    operator: "JR West / JR Central",
    booking: "solo en taquilla JR con un mes de antelación y se agota el primer día; la moqueta nobinobi entra en el JR Pass",
    quality: 7,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "jp-vuelo-tokio-nagasaki", label: "Vuelo Tokio → Nagasaki", from: "jp-tokio", to: "jp-nagasaki", mode: "avion", note: "2 h con ANA, JAL o las low-cost Peach y Jetstar desde Narita; para no deshacer el país entero en tren" },
  { id: "jp-ferry-beppu-osaka", label: "Ferry nocturno Sunflower Beppu → Osaka", from: "jp-beppu", to: "jp-osaka", mode: "ferry", note: "12 h con camarote, onsen a bordo y llegada a Osaka al amanecer; la forma más rara de volver de Kyushu" },
  { id: "jp-vuelo-nagasaki-tokio", label: "Vuelo Nagasaki → Tokio", from: "jp-nagasaki", to: "jp-tokio", mode: "avion", note: "2 h; combina con el vuelo de vuelta a casa desde Haneda o Narita" },
];
