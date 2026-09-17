import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Slovenia", url: "https://www.seat61.com/Slovenia.htm", kind: "blog" as const };
const SZ = { label: "Slovenske železnice", url: "https://potniski.sz.si/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence: "alta", sources: [SEAT61, SZ], notes: "Red pequeña, barata y puntual; billetes en la app SŽ o en taquilla; el Bohinj es la línea bonita" });

export const cities: City[] = [
  {
    id: "si-liubliana",
    name: "Liubliana",
    coords: [46.0569, 14.5058],
    isCapital: true,
    population: 295_000,
    urban: { modes: ["bus", "a-pie"], score: 6, ticket: "tarjeta Urbana: 1,30 € el viaje de 90 min; el centro es peatonal", note: "la capital de Plečnik y de Metelkova; estación de tren y de buses juntas, a 10 min del centro" },
  },
  {
    id: "si-postojna",
    name: "Postojna",
    coords: [45.7745, 14.2135],
    population: 9_000,
    urban: { modes: ["bus", "a-pie"], score: 4, ticket: "bus urbano Furman gratis de la estación a la cueva", note: "la cueva con tren y Predjama; en la línea a Koper" },
  },
  {
    id: "si-idrija",
    name: "Idrija",
    coords: [46.0027, 14.0275],
    population: 6_000,
    urban: { modes: ["a-pie", "bus"], score: 3, ticket: "todo a pie; bus 6 desde Liubliana, 1 h", note: "la mina de mercurio UNESCO y el encaje; Cerkno (Franja) a 20 min en bus" },
  },
  {
    id: "si-vrhnika",
    name: "Vrhnika (Zaplana)",
    coords: [45.9639, 14.2953],
    population: 8_000,
    urban: { modes: ["bus", "a-pie"], score: 3, ticket: "bus desde Liubliana cada 30 min, 30 min", note: "la puerta de la línea Rupnik: los búnkeres de Zaplana a 1 h a pie" },
  },
  {
    id: "si-kobarid",
    name: "Kobarid",
    coords: [46.2475, 13.5789],
    population: 1_000,
    urban: { modes: ["a-pie", "bus"], score: 2, ticket: "todo a pie; bus desde Nova Gorica o Tolmin", note: "Caporetto: el museo, el osario de Mussolini y el valle del Soča" },
  },
  {
    id: "si-nova-gorica",
    name: "Nova Gorica",
    coords: [45.9558, 13.6489],
    population: 13_000,
    urban: { modes: ["tren", "bus", "a-pie"], score: 4, ticket: "final de la línea de Bohinj; bus a Kobarid 1 h", note: "la ciudad socialista pegada a la Gorizia italiana, Capital de la Cultura 2025 las dos juntas; la plaza partida por la frontera" },
  },
  {
    id: "si-ptuj",
    name: "Ptuj",
    coords: [46.42, 15.87],
    population: 18_000,
    urban: { modes: ["tren", "a-pie"], score: 4, ticket: "tren desde Liubliana con cambio en Pragersko, 2 h 30", note: "la ciudad más vieja del país y el Kurentovanje" },
  },
];

export const airports: Airport[] = [
  { code: "LJU", name: "Liubliana Jože Pučnik", cityId: "si-liubliana", coords: [46.2237, 14.4576], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "si-liubliana-postojna-koper",
    name: "Liubliana–Postojna–Divača–Koper (con Hrastovlje)",
    stops: ["si-liubliana", "si-postojna"],
    kind: "regional",
    frequency: "cada hora a Postojna; a Koper, 4-6 al día",
    durationNote: "1 h 20 a Postojna; 2 h 30 a Koper por el Karst, con el apeadero de Hrastovlje (la danza de la muerte) a 20 min de Koper",
    price: "≈ 7 € a Postojna; 12 € a Koper",
    operator: "Slovenske železnice",
    booking: "app SŽ o taquilla; sin reserva",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "si-bohinj-liubliana-nova-gorica",
    name: "La línea de Bohinj: Liubliana–Jesenice–Bled–Bohinjska Bistrica–Nova Gorica",
    stops: ["si-liubliana", "si-nova-gorica"],
    kind: "regional",
    frequency: "4-5 al día (cambio en Jesenice)",
    durationNote: "≈ 3 h 30 en total: la línea austrohúngara de 1906 por Bled, el túnel de Bohinj (6,3 km) y el puente de piedra de Solkan (el arco de piedra más grande del mundo, 85 m); desde Nova Gorica, bus a Kobarid 1 h",
    price: "≈ 12 €",
    operator: "Slovenske železnice",
    booking: "app SŽ o taquilla; en verano hay tren-museo de vapor",
    quality: 7,
    meta: railMeta,
  },
  {
    id: "si-liubliana-ptuj",
    name: "Liubliana–Celje–Pragersko–Ptuj (con Trbovlje)",
    stops: ["si-liubliana", "si-ptuj"],
    kind: "regional",
    frequency: "cada 1-2 h (cambio en Pragersko)",
    durationNote: "≈ 2 h 30; la línea del Sava pasa por Trbovlje (la chimenea de 360 m) y Celje",
    price: "≈ 12 €",
    operator: "Slovenske železnice",
    booking: "app SŽ o taquilla",
    quality: 6,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "si-bus-liubliana-idrija", label: "Bus Liubliana → Idrija", from: "si-liubliana", to: "si-idrija", mode: "bus", note: "bus 6, cada 1-2 h, 1 h, ≈ 6 €; sigue a Cerkno" },
  { id: "si-bus-liubliana-vrhnika", label: "Bus Liubliana → Vrhnika", from: "si-liubliana", to: "si-vrhnika", mode: "bus", note: "cada 30 min, 30 min, 3 €; para la línea Rupnik" },
  { id: "si-bus-nova-gorica-kobarid", label: "Bus Nova Gorica → Kobarid", from: "si-nova-gorica", to: "si-kobarid", mode: "bus", note: "varios al día, 1 h por el Soča; o desde Liubliana directo viernes y domingo (2 h 30)" },
];
