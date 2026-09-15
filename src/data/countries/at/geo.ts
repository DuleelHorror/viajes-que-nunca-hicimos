import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Austria", url: "https://www.seat61.com/Austria.htm", kind: "blog" as const };
const OEBB = { label: "ÖBB", url: "https://www.oebb.at", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, OEBB], notes: "Horarios de ÖBB; los precios Sparschiene bajan mucho comprando con antelación" });

export const cities: City[] = [
  {
    id: "at-viena",
    name: "Viena",
    coords: [48.2082, 16.3738],
    isCapital: true,
    population: 2_000_000,
    urban: { modes: ["metro", "tranvia", "bus", "taxi", "a-pie"], score: 10, ticket: "2,40 € el sencillo; 24 h por 8 €; sin tornos, por confianza (y multas)", app: "WienMobil", note: "cinco líneas de metro y la red de tranvías más larga que vas a ver; el 71 va al cementerio" },
  },
  {
    id: "at-graz",
    name: "Graz",
    coords: [47.0707, 15.4395],
    population: 300_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 8, ticket: "2,90 € / 1 h; el centro es gratis en tranvía", app: "GrazMobil", note: "casco viejo a pie; el funicular al Schlossberg va con el billete" },
  },
  {
    id: "at-salzburgo",
    name: "Salzburgo",
    coords: [47.8095, 13.055],
    population: 155_000,
    urban: { modes: ["bus", "a-pie"], score: 7, ticket: "2,30 € en bus; trolebuses eléctricos", note: "base para Werfen y para la ruta a Hallstatt en bus 150" },
  },
  {
    id: "at-linz",
    name: "Linz",
    coords: [48.3069, 14.2858],
    population: 210_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 8, ticket: "2,80 € / trayecto", note: "base para Mauthausen y Hartheim; el LILO a Alkoven sale de la estación central" },
  },
  {
    id: "at-innsbruck",
    name: "Innsbruck",
    coords: [47.2692, 11.4041],
    population: 130_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 7, ticket: "3 € / trayecto", note: "el funicular de Hungerburg está diseñado por Zaha Hadid, para que veas cómo se gastan la pasta" },
  },
  {
    id: "at-hallstatt",
    name: "Hallstatt",
    coords: [47.5622, 13.6493],
    population: 750,
    urban: { modes: ["a-pie", "ferry", "bus"], score: 5, ticket: "el ferry estación–pueblo cruza el lago en 10 min por 4 €", note: "750 habitantes y un millón de visitas al año: madruga o duerme allí" },
  },
  {
    id: "at-bad-gastein",
    name: "Bad Gastein",
    coords: [47.1153, 13.1347],
    population: 4_000,
    urban: { modes: ["a-pie", "bus"], score: 5, ticket: "el pueblo es una cuesta con ascensores públicos; bus del valle incluido con la Gastein Card", note: "estación en el pueblo, en la línea del Tauern" },
  },
];

export const airports: Airport[] = [
  { code: "VIE", name: "Viena Schwechat", cityId: "at-viena", coords: [48.1103, 16.5697], international: true },
  { code: "GRZ", name: "Graz Thalerhof", cityId: "at-graz", coords: [46.9911, 15.4396], international: true },
  { code: "SZG", name: "Salzburgo W. A. Mozart", cityId: "at-salzburgo", coords: [47.7933, 13.0043], international: true },
  { code: "LNZ", name: "Linz Blue Danube", cityId: "at-linz", coords: [48.2332, 14.1875], international: true },
  { code: "INN", name: "Innsbruck Kranebitten", cityId: "at-innsbruck", coords: [47.2602, 11.344], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "at-westbahn",
    name: "La Westbahn: Viena–Linz–Salzburgo–Innsbruck",
    stops: ["at-viena", "at-linz", "at-salzburgo", "at-innsbruck"],
    kind: "alta-velocidad",
    frequency: "cada 30 min hasta Salzburgo; cada hora hasta Innsbruck",
    durationNote: "Viena–Linz 1 h 15 · Viena–Salzburgo 2 h 20 · Viena–Innsbruck 4 h 15",
    price: "Railjet de 20 € (Sparschiene) a 60 €; WESTbahn a menudo más barato",
    operator: "ÖBB (Railjet) y WESTbahn (privada)",
    booking: "oebb.at o westbahn.at; sin reserva obligatoria, pero la Sparschiene solo con antelación",
    quality: 10,
    meta: railMeta,
  },
  {
    id: "at-suedbahn-semmering",
    name: "Südbahn por el Semmering: Viena–Graz",
    stops: ["at-viena", "at-graz"],
    kind: "intercity",
    frequency: "cada hora",
    durationNote: "2 h 35, con la subida al Semmering por viaductos de 1854 en medio",
    price: "de 15 € (Sparschiene) a 45 €",
    operator: "ÖBB (Railjet)",
    booking: "oebb.at; siéntate a la izquierda subiendo desde Viena para los viaductos",
    quality: 9,
    meta: meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence: "alta", sources: [SEAT61, OEBB], notes: "Cuando abra el túnel de base del Semmering, los Railjet dejarán de pasar por el paso histórico; los regionales seguirán" }),
  },
  {
    id: "at-salzkammergut",
    name: "Salzkammergutbahn: Linz–Attnang-Puchheim–Hallstatt",
    stops: ["at-linz", "at-hallstatt"],
    kind: "regional",
    frequency: "cada hora, con cambio en Attnang-Puchheim",
    durationNote: "≈ 2 h 20 hasta la estación de Hallstatt, que está al otro lado del lago: ferry de 10 min",
    price: "≈ 20 €",
    operator: "ÖBB regional",
    booking: "oebb.at o en el tren; el ferry se paga a bordo y espera al tren",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "at-tauernbahn",
    name: "Tauernbahn: Salzburgo–Bad Gastein",
    stops: ["at-salzburgo", "at-bad-gastein"],
    kind: "intercity",
    frequency: "cada 1-2 h",
    durationNote: "≈ 1 h 30 por el valle del Gastein; sigue a Villach y a Italia",
    price: "≈ 15-25 €",
    operator: "ÖBB",
    booking: "oebb.at; parada en Werfen para la cueva de hielo",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "at-nightjet",
    name: "Nightjet: la casa madre de los nocturnos europeos",
    stops: ["at-viena", "at-innsbruck"],
    kind: "nocturno",
    frequency: "diario a Zúrich, Bregenz, Roma, Berlín, Hamburgo, Ámsterdam…",
    durationNote: "Viena–Innsbruck de noche ≈ 7 h; útil sobre todo para entrar o salir del país durmiendo",
    price: "de 30 € en asiento a 150 € en cabina con ducha",
    operator: "ÖBB Nightjet",
    booking: "nightjet.com con meses de antelación; los coches cama nuevos vuelan",
    quality: 9,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "at-bus-salzburgo-hallstatt", label: "Bus 150 Salzburgo → Bad Ischl + tren a Hallstatt", from: "at-salzburgo", to: "at-hallstatt", mode: "bus", note: "≈ 2 h 30 en total; más bonito y más rápido que rodear por Attnang" },
  { id: "at-bus-innsbruck-salzburgo", label: "Railjet Innsbruck → Salzburgo por el corredor alemán", from: "at-innsbruck", to: "at-salzburgo", mode: "tren", note: "1 h 50 cruzando Baviera sin parar: lleva el DNI por si acaso" },
];
