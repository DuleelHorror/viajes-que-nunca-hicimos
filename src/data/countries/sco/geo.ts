import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SCOTRAIL = { label: "ScotRail", url: "https://www.scotrail.co.uk", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "media", sources: [SCOTRAIL], notes: "Precios 'advance' orientativos; el billete del día puede costar el doble" });

export const cities: City[] = [
  { id: "sco-edimburgo", name: "Edimburgo", coords: [55.9533, -3.1883], isCapital: true, population: 530_000, urban: { modes: ["bus", "tranvia", "a-pie"], score: 8, ticket: "Lothian Buses 2 £ contactless, tope diario 5 £; tranvía al aeropuerto", app: "Transport for Edinburgh" } },
  { id: "sco-glasgow", name: "Glasgow", coords: [55.8642, -4.2518], population: 635_000, urban: { modes: ["metro", "bus", "tren"], score: 7, ticket: "Subway 1,85 £; trenes suburbanos ScotRail", app: "ScotRail, First Bus" } },
  { id: "sco-inverness", name: "Inverness", coords: [57.4778, -4.2247], population: 47_000, urban: { modes: ["bus", "a-pie"], score: 6, ticket: "Stagecoach 2-3 £", note: "base para Culloden, Loch Ness y la Far North Line" } },
  { id: "sco-fort-william", name: "Fort William", coords: [56.8198, -5.1052], population: 10_000, urban: { modes: ["bus", "tren"], score: 5, ticket: "Citylink y West Highland Line", note: "base para Glencoe" } },
  { id: "sco-oban", name: "Oban", coords: [56.4152, -5.471], population: 8_000, urban: { modes: ["ferry", "tren", "bus"], score: 5, ticket: "ferris CalMac; tren a Glasgow", note: "puerto de las Hébridas" } },
  { id: "sco-st-andrews", name: "St Andrews", coords: [56.3398, -2.7967], population: 17_000, urban: { modes: ["bus"], score: 5, ticket: "Stagecoach 95 por la costa de Fife; estación de tren en Leuchars (bus 10 min)", note: "base para el Secret Bunker" } },
  { id: "sco-aberdeen", name: "Aberdeen", coords: [57.1497, -2.0943], population: 200_000, urban: { modes: ["bus", "tren"], score: 6, ticket: "First Bus contactless", note: "ferris NorthLink a Orkney y Shetland" } },
  { id: "sco-thurso", name: "Thurso", coords: [58.5936, -3.5221], population: 8_000, urban: { modes: ["tren", "bus"], score: 4, ticket: "Far North Line desde Inverness; bus al puerto de Scrabster (3 km)" } },
  { id: "sco-kirkwall", name: "Kirkwall", coords: [58.981, -2.9605], population: 9_000, urban: { modes: ["bus", "a-pie"], score: 4, ticket: "Stagecoach Orkney 2-4 £; bus T11 a los yacimientos solo en verano", note: "aeropuerto y ferris" } },
  { id: "sco-lerwick", name: "Lerwick", coords: [60.155, -1.145], population: 7_000, urban: { modes: ["bus", "a-pie"], score: 4, ticket: "buses ZetTrans 2-4 £", note: "ferri nocturno desde Aberdeen (12 h)" } },
];

export const airports: Airport[] = [
  { code: "EDI", name: "Edimburgo", cityId: "sco-edimburgo", coords: [55.95, -3.3725], international: true },
  { code: "GLA", name: "Glasgow", cityId: "sco-glasgow", coords: [55.8719, -4.4331], international: true },
  { code: "ABZ", name: "Aberdeen", cityId: "sco-aberdeen", coords: [57.2019, -2.1978], international: true },
  { code: "INV", name: "Inverness", cityId: "sco-inverness", coords: [57.5425, -4.0475], international: true },
  { code: "KOI", name: "Kirkwall", cityId: "sco-kirkwall", coords: [58.9578, -2.905], international: false },
  { code: "LSI", name: "Sumburgh (Shetland)", cityId: "sco-lerwick", coords: [59.8789, -1.2956], international: false },
];

export const railCorridors: RailCorridor[] = [
  { id: "sco-edinburgh-glasgow", name: "Edimburgo ↔ Glasgow", stops: ["sco-edimburgo", "sco-glasgow"], kind: "intercity", frequency: "cada 15 min", durationNote: "50 min", price: "≈ 15 £ ida", operator: "ScotRail", booking: "app ScotRail o contactless en la estación", quality: 8, meta: railMeta },
  { id: "sco-highland-main-line", name: "Highland Main Line Edimburgo → Inverness", stops: ["sco-edimburgo", "sco-inverness"], kind: "intercity", frequency: "cada 1-2 h", durationNote: "3 h 30 por Perth y los Cairngorms", price: "≈ 20-45 £ advance", operator: "ScotRail", booking: "reservar 'advance' en la app con semanas; asiento numerado", quality: 7, meta: railMeta },
  { id: "sco-west-highland-line", name: "West Highland Line Glasgow → Fort William", stops: ["sco-glasgow", "sco-fort-william"], kind: "turistico", frequency: "3-4 al día", durationNote: "3 h 50; sigue a Mallaig por el viaducto de Glenfinnan", price: "≈ 30 £", operator: "ScotRail", booking: "app ScotRail; sentarse a la izquierda subiendo", quality: 8, meta: railMeta },
  { id: "sco-far-north-line", name: "Far North Line Inverness → Thurso", stops: ["sco-inverness", "sco-thurso"], kind: "regional", frequency: "4 al día", durationNote: "3 h 50; enlaza con el ferri de Scrabster a Orkney", price: "≈ 20 £", operator: "ScotRail", booking: "app ScotRail", quality: 6, meta: railMeta },
  { id: "sco-glasgow-oban", name: "Glasgow → Oban", stops: ["sco-glasgow", "sco-oban"], kind: "turistico", frequency: "3-6 al día", durationNote: "3 h; parada a petición en Falls of Cruachan (verano)", price: "≈ 25 £", operator: "ScotRail", booking: "app ScotRail", quality: 7, meta: railMeta },
  { id: "sco-edinburgh-aberdeen", name: "Edimburgo → Aberdeen", stops: ["sco-edimburgo", "sco-aberdeen"], kind: "intercity", frequency: "cada hora", durationNote: "2 h 30; cruza el Forth Bridge", price: "≈ 25-40 £", operator: "ScotRail / LNER", booking: "app ScotRail o LNER", quality: 7, meta: railMeta },
];

export const mapRoutes: MapRoute[] = [
  { id: "sco-aberdeen-lerwick", label: "NorthLink Aberdeen → Lerwick", from: "sco-aberdeen", to: "sco-lerwick", mode: "ferry", note: "12-14 h nocturno, cabina o butaca; diario" },
  { id: "sco-aberdeen-kirkwall", label: "NorthLink Aberdeen → Kirkwall", from: "sco-aberdeen", to: "sco-kirkwall", mode: "ferry", note: "6 h, 3-4 por semana" },
  { id: "sco-thurso-kirkwall", label: "NorthLink Scrabster → Stromness (bus a Kirkwall)", from: "sco-thurso", to: "sco-kirkwall", mode: "ferry", note: "90 min, 2-3 al día" },
  { id: "sco-lerwick-kirkwall", label: "NorthLink Lerwick → Kirkwall", from: "sco-lerwick", to: "sco-kirkwall", mode: "ferry", note: "≈ 8 h, pocas frecuencias" },
  { id: "sco-glasgow-fort-william-bus", label: "Citylink Glasgow → Fort William por Glencoe", from: "sco-glasgow", to: "sco-fort-william", mode: "bus", note: "3 h; para en Glencoe" },
  { id: "sco-fort-william-inverness-bus", label: "Citylink Fort William → Inverness", from: "sco-fort-william", to: "sco-inverness", mode: "bus", note: "2 h por el Gran Glen y Loch Ness" },
  { id: "sco-edinburgh-standrews-bus", label: "Bus X59 Edimburgo → St Andrews", from: "sco-edimburgo", to: "sco-st-andrews", mode: "bus", note: "2 h" },
  { id: "sco-kirkwall-edinburgh-vuelo", label: "Vuelo Kirkwall → Edimburgo (Loganair)", from: "sco-kirkwall", to: "sco-edimburgo", mode: "avion", note: "1 h" },
  { id: "sco-lerwick-edinburgh-vuelo", label: "Vuelo Sumburgh → Edimburgo (Loganair)", from: "sco-lerwick", to: "sco-edimburgo", mode: "avion", note: "1 h 15" },
];
