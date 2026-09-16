import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Vilnius–Riga–Tallinn", url: "https://www.seat61.com/trains-and-routes/vilnius-riga-tallinn-by-train.htm", kind: "blog" as const };
const VIVI = { label: "Vivi (Pasažieru vilciens)", url: "https://www.vivi.lv/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, VIVI], notes: "Cercanías eléctricas nuevas desde Riga y diésel al resto; billete en la app de Vivi o al revisor" });

export const cities: City[] = [
  {
    id: "lv-riga",
    name: "Riga",
    coords: [56.9496, 24.1052],
    isCapital: true,
    population: 600_000,
    urban: { modes: ["tranvia", "bus", "bolt", "a-pie"], score: 8, ticket: "1,50 € con contactless en el validador; trolebuses y tranvías a todo", app: "Bolt", note: "la capital báltica grande; el centro, el mercado y el Moscú de Riga se andan; la estación central está en obras por Rail Baltica" },
  },
  {
    id: "lv-jurmala",
    name: "Jūrmala",
    coords: [56.968, 23.7703],
    population: 50_000,
    urban: { modes: ["tren", "a-pie"], score: 6, ticket: "cercanías desde Riga 1,50-2,50 €; las estaciones van pegadas a la playa", note: "30 km de balneario con dachas de madera y sanatorios soviéticos; Ķemeri al final de la línea" },
  },
  {
    id: "lv-sigulda",
    name: "Sigulda",
    coords: [57.1537, 24.8533],
    population: 15_000,
    urban: { modes: ["a-pie", "bus"], score: 5, ticket: "todo a pie; teleférico sobre el Gauja 8 €", note: "la «Suiza letona» con pista de bobsleigh soviética; Līgatne a una parada" },
  },
  {
    id: "lv-liepaja",
    name: "Liepāja",
    coords: [56.5047, 21.0108],
    population: 65_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 6, ticket: "tranvía 1 €; el tranvía 1 llega a Karosta", note: "la ciudad del viento y de la base naval de Karosta al norte" },
  },
  {
    id: "lv-daugavpils",
    name: "Daugavpils",
    coords: [55.8714, 26.5161],
    population: 80_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 6, ticket: "tranvía 0,50 €", note: "la segunda ciudad, rusófona al 80 %, con la fortaleza zarista y Rothko" },
  },
];

export const airports: Airport[] = [
  { code: "RIX", name: "Riga", cityId: "lv-riga", coords: [56.9236, 23.9711], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "lv-riga-jurmala-kemeri",
    name: "Cercanías Riga–Jūrmala–Ķemeri",
    stops: ["lv-riga", "lv-jurmala"],
    kind: "regional",
    frequency: "cada 20-30 min",
    durationNote: "≈ 30 min a Majori (el centro de Jūrmala) y 55 a Ķemeri, en los trenes eléctricos nuevos de Škoda; paradas cada dos kilómetros por el balneario",
    price: "≈ 1,50-2,50 €",
    operator: "Vivi",
    booking: "app de Vivi, máquina o al revisor; sin reserva",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "lv-riga-sigulda-valga",
    name: "Riga–Sigulda–Cēsis–Valga (y Tartu/Tallin)",
    stops: ["lv-riga", "lv-sigulda"],
    kind: "regional",
    frequency: "cada 1-2 h a Sigulda; a Valga, 3-4 al día con enlace a Tartu",
    durationNote: "≈ 1 h a Sigulda (Līgatne a 15 min más); el directo a Tallin desde enero de 2026 pasa por aquí (6 h)",
    price: "≈ 3 € a Sigulda; 20-30 € a Tallin",
    operator: "Vivi / Elron",
    booking: "app de Vivi; el eje báltico en ltglink.lt",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "lv-riga-liepaja",
    name: "Riga–Liepāja",
    stops: ["lv-riga", "lv-liepaja"],
    kind: "intercity",
    frequency: "2-3 al día",
    durationNote: "≈ 3 h por Jelgava y los bosques de Curlandia; el bus tarda lo mismo y va cada hora",
    price: "≈ 8 €",
    operator: "Vivi",
    booking: "app de Vivi",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "lv-riga-daugavpils",
    name: "Riga–Daugavpils",
    stops: ["lv-riga", "lv-daugavpils"],
    kind: "intercity",
    frequency: "3-4 al día",
    durationNote: "≈ 3 h siguiendo el Daugava hacia Latgale, la Letonia católica y rusófona",
    price: "≈ 8 €",
    operator: "Vivi",
    booking: "app de Vivi",
    quality: 6,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [];
