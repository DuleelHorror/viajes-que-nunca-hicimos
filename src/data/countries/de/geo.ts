import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Germany", url: "https://www.seat61.com/Germany.htm", kind: "blog" as const };
const DB = { label: "Deutsche Bahn", url: "https://www.bahn.de/en", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence: "alta", sources: [SEAT61, DB], notes: "ICE entre las grandes y regionales (RE) a todo; con el Deutschlandticket (63 €/mes) los regionales salen gratis; puntualidad alemana en decadencia" });

export const cities: City[] = [
  {
    id: "de-berlin",
    name: "Berlín",
    coords: [52.52, 13.405],
    isCapital: true,
    population: 3_850_000,
    urban: { modes: ["metro", "tranvia", "bus", "a-pie"], score: 9, ticket: "AB 3,80 € (2 h); Deutschlandticket incluido; S-Bahn y RE a Beelitz, Wünsdorf y Eisenhüttenstadt", note: "la capital de las dos Alemanias: el Este empieza en Alexanderplatz y sigue por Lichtenberg" },
  },
  {
    id: "de-leipzig",
    name: "Leipzig",
    coords: [51.3397, 12.3731],
    population: 620_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 7, ticket: "tranvía 3,20 €; Deutschlandticket incluido", note: "la ciudad de la revolución pacífica de 1989 y de la Stasi en la Esquina Redonda; a 1 h 15 de Berlín en ICE" },
  },
  {
    id: "de-chemnitz",
    name: "Chemnitz (Karl-Marx-Stadt)",
    coords: [50.8278, 12.9214],
    population: 250_000,
    urban: { modes: ["tranvia", "a-pie"], score: 5, ticket: "tranvía 2,80 €", note: "Karl-Marx-Stadt de 1953 a 1990: la cabeza de Marx y la ciudad reconstruida socialista; Capital de la Cultura 2025" },
  },
  {
    id: "de-weimar",
    name: "Weimar",
    coords: [50.9795, 11.3235],
    population: 65_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 6 a Buchenwald desde la estación, cada 30 min, 2,50 €", note: "Goethe, la Bauhaus y Buchenwald en el mismo bus" },
  },
  {
    id: "de-binz",
    name: "Binz (Rügen)",
    coords: [54.4, 13.61],
    population: 5_000,
    urban: { modes: ["tren", "a-pie"], score: 4, ticket: "tren local Binz–Prora 5 min; el Rasender Roland de vapor a Göhren", note: "el balneario del Báltico con Prora al lado; IC desde Berlín 3 h" },
  },
  {
    id: "de-eisenhuettenstadt",
    name: "Eisenhüttenstadt",
    coords: [52.15, 14.65],
    population: 23_000,
    urban: { modes: ["a-pie", "bus"], score: 3, ticket: "todo a pie desde la estación (20 min al centro)", note: "Stalinstadt: la primera ciudad socialista de la RDA, con museo; RE desde Berlín 1 h 15" },
  },
];

export const airports: Airport[] = [
  { code: "BER", name: "Berlín Brandeburgo", cityId: "de-berlin", coords: [52.3667, 13.5033], international: true },
  { code: "LEJ", name: "Leipzig/Halle", cityId: "de-leipzig", coords: [51.4324, 12.2416], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "de-ice-berlin-leipzig",
    name: "ICE Berlín–Leipzig (y Chemnitz en RE)",
    stops: ["de-berlin", "de-leipzig"],
    kind: "alta-velocidad",
    frequency: "cada 30-60 min",
    durationNote: "1 h 15 a 300 km/h; desde Leipzig, RE a Chemnitz en 1 h (con Deutschlandticket) y RE a Gräfenhainichen (Ferropolis) en 30 min",
    price: "desde 18 € (Sparpreis) a 60 € (flexible); el regional (2 h 30) va con el Deutschlandticket",
    operator: "Deutsche Bahn",
    booking: "app DB Navigator en inglés; Sparpreis con días de antelación",
    quality: 8,
    meta: railMeta,
  },
  {
    id: "de-berlin-binz-prora",
    name: "Berlín–Stralsund–Binz (Prora)",
    stops: ["de-berlin", "de-binz"],
    kind: "intercity",
    frequency: "IC cada 2 h; regional con cambio en Stralsund",
    durationNote: "3 h en IC directo (más en verano); el regional por el Deutschlandticket, 4 h; parada de Prora a 5 min de Binz",
    price: "desde 20 € (Sparpreis); regional gratis con el ticket",
    operator: "Deutsche Bahn",
    booking: "app DB Navigator",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "de-leipzig-weimar",
    name: "Leipzig–Weimar (y Buchenwald en bus)",
    stops: ["de-leipzig", "de-weimar"],
    kind: "regional",
    frequency: "cada hora",
    durationNote: "≈ 1 h 10 en RE (Deutschlandticket) o 50 min en ICE; desde Weimar, bus 6 a Buchenwald en 20 min",
    price: "gratis con el ticket; ICE desde 15 €",
    operator: "Deutsche Bahn / Abellio",
    booking: "app DB Navigator",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "de-berlin-eisenhuettenstadt",
    name: "RE Berlín–Frankfurt (Oder)–Eisenhüttenstadt",
    stops: ["de-berlin", "de-eisenhuettenstadt"],
    kind: "regional",
    frequency: "cada hora",
    durationNote: "≈ 1 h 15 en RE1 (Deutschlandticket) por el Oder; Frankfurt (Oder) con el puente a Polonia a mitad de camino",
    price: "gratis con el ticket; 15 € suelto",
    operator: "ODEG / DB",
    booking: "app DB Navigator",
    quality: 7,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "de-re-berlin-beelitz", label: "RE7 Berlín → Beelitz-Heilstätten", from: "de-berlin", to: "de-berlin", mode: "tren", note: "45 min desde Hauptbahnhof, cada hora, con estación propia junto al sanatorio; Deutschlandticket" },
  { id: "de-re-berlin-wuensdorf", label: "RE Berlín → Wünsdorf-Waldstadt", from: "de-berlin", to: "de-berlin", mode: "tren", note: "40 min desde Südkreuz, cada hora; la ciudad prohibida a 15 min a pie" },
];
