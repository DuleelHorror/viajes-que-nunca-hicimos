import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Finland", url: "https://www.seat61.com/Finland.htm", kind: "blog" as const };
const VR = { label: "VR", url: "https://www.vr.fi/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence: "alta", sources: [SEAT61, VR], notes: "VR con precios dinámicos: barato con antelación, caro el día antes; el nocturno a Laponia es el sitio circo sobre ruedas" });

export const cities: City[] = [
  {
    id: "fi-helsinki",
    name: "Helsinki",
    coords: [60.1699, 24.9384],
    isCapital: true,
    population: 680_000,
    urban: { modes: ["metro", "tranvia", "bus", "ferry", "a-pie"], score: 8, ticket: "HSL AB 3,30 € (80 min, incluye el ferry a Suomenlinna); día 9 €", note: "la capital con tranvías verdes y un ferry urbano a una fortaleza; la estación de Saarinen en el centro" },
  },
  {
    id: "fi-tampere",
    name: "Tampere",
    coords: [61.4978, 23.761],
    population: 250_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 7, ticket: "tranvía 2,80 €", note: "el Manchester finlandés, con las fábricas de Finlayson, la sauna más vieja del país y el antiguo museo de Lenin; 1 h 30 de Helsinki" },
  },
  {
    id: "fi-turku",
    name: "Turku",
    coords: [60.4518, 22.2666],
    population: 200_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "bus Föli 3 €; a Paimio, bus 7 desde el centro, 40 min", note: "la antigua capital y la base para el sanatorio de Paimio; 2 h de Helsinki en tren" },
  },
  {
    id: "fi-hanko",
    name: "Hanko",
    coords: [59.8236, 22.9681],
    population: 8_000,
    urban: { modes: ["a-pie", "bus"], score: 3, ticket: "todo a pie; el museo del frente a 20 km, bus 1-2 al día o taxi", note: "la península que la URSS arrendó en 1940; tren con cambio en Karis, 1 h 50" },
  },
  {
    id: "fi-lappeenranta",
    name: "Lappeenranta",
    coords: [61.0587, 28.1887],
    population: 72_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 3 €", note: "Karelia del sur, a 30 km de la frontera rusa cerrada; fortaleza, lago Saimaa y castillos de arena; 2 h de Helsinki" },
  },
  {
    id: "fi-kemi",
    name: "Kemi",
    coords: [65.7364, 24.5637],
    population: 20_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "todo a pie desde la estación (15 min al castillo de nieve)", note: "parada del Santa Claus Express: el castillo de nieve y el rompehielos Sampo" },
  },
  {
    id: "fi-rovaniemi",
    name: "Rovaniemi",
    coords: [66.5039, 25.7294],
    population: 65_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 8 al pueblo de Santa Claus y al aeropuerto, 4 €", note: "la capital de Laponia, reconstruida por Aalto tras arrasarla los alemanes en 1944, en el Círculo Polar" },
  },
  {
    id: "fi-oulu",
    name: "Oulu",
    coords: [65.0121, 25.4651],
    population: 210_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "bus 3,30 €", note: "la ciudad del campeonato mundial de guitarra invisible; parada del tren a Laponia" },
  },
];

export const airports: Airport[] = [
  { code: "HEL", name: "Helsinki-Vantaa", cityId: "fi-helsinki", coords: [60.3172, 24.9633], international: true },
  { code: "RVN", name: "Rovaniemi", cityId: "fi-rovaniemi", coords: [66.5648, 25.8304], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "fi-santa-claus-express",
    name: "Santa Claus Express: Helsinki–Tampere–Oulu–Kemi–Rovaniemi (nocturno)",
    stops: ["fi-helsinki", "fi-rovaniemi"],
    kind: "nocturno",
    frequency: "2-3 al día (19:00-21:30 aprox.), más los diurnos",
    durationNote: "≈ 12 h en trenes de dos pisos con cabinas de dos literas (las de arriba con ducha), coche restaurante y vagón para coches; cruza el Círculo Polar de madrugada; parada en Kemi (castillo de nieve) y Oulu",
    price: "cabina desde ≈ 49-89 € por persona según demanda; con ducha desde ≈ 74 €; asiento desde 30 €",
    operator: "VR",
    booking: "vr.fi con hasta dos años de antelación; en Navidad se agota con meses",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "fi-helsinki-tampere",
    name: "Helsinki–Tampere (Pendolino / IC)",
    stops: ["fi-helsinki", "fi-tampere"],
    kind: "intercity",
    frequency: "cada 30 min",
    durationNote: "1 h 30 en Pendolino o IC de dos pisos; la línea más usada del país",
    price: "desde 6,90 € con antelación; 30 € el día antes",
    operator: "VR",
    booking: "app VR Matkalla o vr.fi",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "fi-helsinki-turku-paimio",
    name: "Helsinki–Turku (y Paimio en bus)",
    stops: ["fi-helsinki", "fi-turku"],
    kind: "intercity",
    frequency: "cada hora",
    durationNote: "≈ 2 h; desde Turku, bus 7 a Paimio (40 min) para el sanatorio de Aalto",
    price: "desde 8 €",
    operator: "VR",
    booking: "app VR",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "fi-helsinki-hanko",
    name: "Helsinki–Karis–Hanko",
    stops: ["fi-helsinki", "fi-hanko"],
    kind: "regional",
    frequency: "cada 1-2 h con cambio en Karis (Karjaa)",
    durationNote: "≈ 1 h 50; la línea de la costa sueca del sur, con carteles bilingües",
    price: "desde 10 €",
    operator: "VR",
    booking: "app VR",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "fi-helsinki-lappeenranta",
    name: "Helsinki–Lahti–Lappeenranta (Karelia)",
    stops: ["fi-helsinki", "fi-lappeenranta"],
    kind: "intercity",
    frequency: "cada 1-2 h",
    durationNote: "≈ 2 h en IC; antes seguía a San Petersburgo (el Allegro, parado desde 2022) y ahora acaba a 30 km de una frontera cerrada",
    price: "desde 10 €",
    operator: "VR",
    booking: "app VR",
    quality: 8,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "fi-ferry-helsinki-suomenlinna", label: "Ferry HSL Helsinki → Suomenlinna", from: "fi-helsinki", to: "fi-helsinki", mode: "ferry", note: "15 min desde la plaza del Mercado, cada 20-40 min, con el billete AB de 3,30 €" },
  { id: "fi-tren-kemi-rovaniemi", label: "Tren Kemi → Rovaniemi", from: "fi-kemi", to: "fi-rovaniemi", mode: "tren", note: "1 h 30 en IC o en el nocturno de madrugada" },
];
