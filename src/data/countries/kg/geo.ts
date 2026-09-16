import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const CARAVANISTAN = { label: "Caravanistan · Kyrgyzstan transport", url: "https://caravanistan.com/transport/train/kyrgyzstan/", kind: "blog" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "media", sources: [CARAVANISTAN], notes: "Un solo tren útil: el de verano al Issyk-Kul. La línea del sur está partida por Uzbekistán y no funciona desde 2010" });

export const cities: City[] = [
  {
    id: "kg-biskek",
    name: "Biskek",
    coords: [42.8746, 74.5698],
    isCapital: true,
    population: 1_100_000,
    urban: { modes: ["bus", "tranvia", "taxi", "a-pie"], score: 6, ticket: "trolebús y marshrutka 0,15-0,20 €; Yandex Go 1-2 €", app: "Yandex Go", note: "cuadrícula soviética con montañas al sur y chopos; el centro se anda. Las marshrutkas al Issyk-Kul salen de la estación Este (Vostochny), las del sur y Osh, de la Oeste" },
  },
  {
    id: "kg-balykchy",
    name: "Balykchy",
    coords: [42.46, 76.185],
    population: 45_000,
    urban: { modes: ["a-pie", "bus"], score: 3, ticket: "marshrutkas a Cholpon-Ata y Karakol desde la parada del tren", note: "el puerto muerto del Issyk-Kul, con astilleros y fábricas cerradas; fin del tren de verano" },
  },
  {
    id: "kg-cholpon-ata",
    name: "Cholpon-Ata",
    coords: [42.65, 77.0833],
    population: 15_000,
    urban: { modes: ["a-pie", "taxi", "bus"], score: 4, ticket: "marshrutkas por la orilla norte cada 15 min; taxi al museo de petroglifos 2 €", note: "la costa de los sanatorios soviéticos; sede de los Juegos Nómadas" },
  },
  {
    id: "kg-karakol",
    name: "Karakol",
    coords: [42.4907, 78.3936],
    population: 80_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 5, ticket: "marshrutka urbana 0,15 €; a Bishkek 600-800 som (6-8 €), 6-7 h", note: "la ciudad rusa del este del lago, base de los Tian Shan; mezquita dungana y Przhevalski" },
  },
  {
    id: "kg-kochkor",
    name: "Kochkor",
    coords: [42.2167, 75.7],
    population: 15_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "de aquí salen los taxis y jeeps al Song-Kul (CBT)", note: "el pueblo de las oficinas de CBT; base para las yurtas del Song-Kul" },
  },
  {
    id: "kg-osh",
    name: "Osh",
    coords: [40.5283, 72.7985],
    population: 320_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 5, ticket: "marshrutka 0,15 €; Yandex Go 1 €", app: "Yandex Go", note: "la capital del sur, uzbeka a medias, con el bazar más antiguo de Asia Central y una montaña sagrada en medio" },
  },
  {
    id: "kg-jalal-abad",
    name: "Jalal-Abad",
    coords: [40.9333, 73.0],
    population: 120_000,
    urban: { modes: ["taxi", "bus", "a-pie"], score: 3, ticket: "taxi compartido a Mailuu-Suu 300-800 som según asientos", note: "ciudad-balneario del Ferganá; base para la ciudad del uranio" },
  },
];

export const airports: Airport[] = [
  { code: "FRU", name: "Biskek Manas", cityId: "kg-biskek", coords: [43.0613, 74.4776], international: true },
  { code: "OSS", name: "Osh", cityId: "kg-osh", coords: [40.609, 72.7932], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "kg-tren-verano-issyk-kul",
    name: "El tren de verano Biskek-2–Balykchy (Issyk-Kul)",
    stops: ["kg-biskek", "kg-balykchy"],
    kind: "turistico",
    frequency: "del 5 al 21 de junio, viernes a domingo; del 26 de junio al 13 de septiembre, diario. Sale a las 8:06, llega a las 12:12 (12:37 en «Balykchy Playa»); vuelve por la tarde",
    durationNote: "≈ 4 h por el desfiladero del Chu con vagones de la URSS pintados de nuevo (14 coches, ocho de «alta comodidad»), a 40 km/h con las montañas a los dos lados. Es el único tren de pasajeros del país y es un sitio circo",
    price: "desde 150 som (≈ 1,50 €); los cómodos, 300",
    operator: "Kyrgyz Temir Jolu",
    booking: "taquilla de la estación Biskek-2 el día antes; los fines de semana de julio se llena de familias",
    quality: 5,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "kg-marshrutka-balykchy-karakol", label: "Marshrutka Balykchy → Cholpon-Ata → Karakol", from: "kg-balykchy", to: "kg-karakol", mode: "bus", note: "por la orilla norte, 3 h hasta Karakol parando en cada pueblo; desde Biskek directo, 6-7 h y 600-800 som" },
  { id: "kg-marshrutka-biskek-kochkor", label: "Marshrutka Biskek → Kochkor", from: "kg-biskek", to: "kg-kochkor", mode: "bus", note: "≈ 3 h desde la estación Oeste; también desde Balykchy en 1 h" },
  { id: "kg-vuelo-biskek-osh", label: "Vuelo Biskek → Osh", from: "kg-biskek", to: "kg-osh", mode: "avion", note: "45 min con TezJet, Asman o Aero Nomad, desde 45 €; la marshrutka son 10-12 h por el paso de Töö-Ashuu" },
  { id: "kg-taxi-osh-jalal-abad", label: "Taxi compartido Osh → Jalal-Abad", from: "kg-osh", to: "kg-jalal-abad", mode: "bus", note: "≈ 1 h 30, desde la estación de Osh; a Mailuu-Suu, otro taxi de 1 h 30" },
];
