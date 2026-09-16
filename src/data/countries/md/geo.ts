import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Moldova", url: "https://www.seat61.com/Moldova.htm", kind: "blog" as const };
const CFM = { label: "CFM (Calea Ferată din Moldova)", url: "https://www.railway.md", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SEAT61, CFM], notes: "Casi todo el tren interno murió; queda el internacional a Rumanía. A Transnistria no hay tren desde 2022" });

export const cities: City[] = [
  {
    id: "md-chisinau",
    name: "Chișinău",
    coords: [47.0105, 28.8638],
    isCapital: true,
    population: 700_000,
    urban: { modes: ["bus", "tranvia", "bolt", "a-pie"], score: 6, ticket: "trolebús 0,30 € (6 lei) al cobrador; marshrutka 0,30 €; Yandex Go / Bolt 2-3 €", app: "Yandex Go / Bolt", note: "trolebuses soviéticos por avenidas de Stalin; el centro se anda. Las marshrutkas a todo el país salen de la Gara Centrală (junto al mercado) y de la Gara de Nord" },
  },
  {
    id: "md-tiraspol",
    name: "Tiraspol",
    coords: [46.8403, 29.6433],
    population: 130_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 5, ticket: "trolebús 0,15 € en rublos transnistrios, solo efectivo", note: "la capital del país que no existe; todo a pie por la avenida 25 de Octubre. Bender, a 20 min en trolebús" },
  },
  {
    id: "md-soroca",
    name: "Soroca",
    coords: [48.1558, 28.2975],
    population: 22_000,
    urban: { modes: ["a-pie"], score: 3, ticket: "todo a pie: la fortaleza abajo, la colina gitana arriba", note: "el Dniéster con Ucrania enfrente; base de la Colina de los Gitanos" },
  },
  {
    id: "md-comrat",
    name: "Comrat",
    coords: [46.3, 28.6567],
    population: 20_000,
    urban: { modes: ["a-pie"], score: 3, ticket: "todo a pie", note: "capital de Gagauzia, la autonomía turca ortodoxa con Lenin en la plaza" },
  },
  {
    id: "md-ungheni",
    name: "Ungheni",
    coords: [47.2108, 27.7975],
    population: 30_000,
    urban: { modes: ["a-pie"], score: 3, ticket: "frontera con Rumanía; cambio de ancho de vía", note: "donde levantan el tren con gatos para cambiarle las ruedas; el puente de Eiffel sobre el Prut" },
  },
];

export const airports: Airport[] = [
  { code: "RMO", name: "Chișinău", cityId: "md-chisinau", coords: [46.9277, 28.931], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "md-chisinau-ungheni-iasi",
    name: "Chișinău–Ungheni–Iași (y el Prietenia a Bucarest)",
    stops: ["md-chisinau", "md-ungheni"],
    kind: "nocturno",
    frequency: "el Prietenia diario (sale 16:50, llega a Bucarest 06:38) y dos diurnos a Iași",
    durationNote: "≈ 2 h a Ungheni; en la frontera levantan los vagones con gatos hidráulicos para cambiar los bogies del ancho ruso al europeo (1 h 30 de espectáculo). A Bucarest, 14 h con literas de la URSS y samovar",
    price: "≈ 25-40 € a Bucarest en litera; 5 € a Iași",
    operator: "CFM / CFR",
    booking: "taquilla de la Gara de Chișinău o cfrcalatori.ro para el Prietenia; el diurno a Iași, en taquilla",
    quality: 5,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "md-marshrutka-chisinau-tiraspol", label: "Marshrutka Chișinău → Tiraspol", from: "md-chisinau", to: "md-tiraspol", mode: "bus", note: "≈ 1 h 30 desde la Gara Centrală, cada 20 min, 2 €; control en Dubăsari/Bender con tarjeta de 10 h (o 24 con reserva de hotel)" },
  { id: "md-marshrutka-chisinau-soroca", label: "Marshrutka Chișinău → Soroca", from: "md-chisinau", to: "md-soroca", mode: "bus", note: "≈ 3 h desde la Gara de Nord, cada hora, 4 €" },
  { id: "md-marshrutka-chisinau-comrat", label: "Marshrutka Chișinău → Comrat", from: "md-chisinau", to: "md-comrat", mode: "bus", note: "≈ 2 h desde la Gara de Sud, cada hora, 3 €" },
];
