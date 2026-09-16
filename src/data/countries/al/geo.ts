import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";

export const cities: City[] = [
  {
    id: "al-tirana",
    name: "Tirana",
    coords: [41.3275, 19.8187],
    isCapital: true,
    population: 900_000,
    urban: { modes: ["bus", "a-pie", "taxi"], score: 5, ticket: "bus urbano 0,40 € (40 lek) al cobrador; taxi 3-5 € pactado", note: "sin metro ni tranvía; buses de colores por línea (el 11 azul a Bunk'Art 1). La terminal de furgones está a las afueras, en la carretera de Durrës" },
  },
  {
    id: "al-shkoder",
    name: "Shkodër",
    coords: [42.0683, 19.5126],
    population: 100_000,
    urban: { modes: ["a-pie", "taxi"], score: 4, ticket: "bicis en cada hostal; todo a pie", note: "la ciudad de las bicicletas; base para el ferry del Koman y la cárcel de la Sigurimi" },
  },
  {
    id: "al-berat",
    name: "Berat",
    coords: [40.7058, 19.9522],
    population: 60_000,
    urban: { modes: ["a-pie"], score: 4, ticket: "todo a pie", note: "la ciudad de las mil ventanas; furgones desde Tirana cada hora" },
  },
  {
    id: "al-gjirokaster",
    name: "Gjirokastër",
    coords: [40.0758, 20.1389],
    population: 25_000,
    urban: { modes: ["a-pie", "taxi"], score: 3, ticket: "taxi del bazar a la carretera 3 €", note: "la ciudad de piedra de Hoxha e Ismail Kadaré; los furgones paran abajo, en la carretera" },
  },
  {
    id: "al-vlore",
    name: "Vlorë",
    coords: [40.4667, 19.4897],
    population: 130_000,
    urban: { modes: ["bus", "a-pie", "ferry"], score: 4, ticket: "bus urbano 0,30 €; barcos a Sazan y Karaburun desde el puerto", note: "base para la isla militar de Sazan y la base de submarinos; bus a la costa" },
  },
];

export const airports: Airport[] = [
  { code: "TIA", name: "Tirana Madre Teresa (Rinas)", cityId: "al-tirana", coords: [41.4147, 19.7206], international: true },
  { code: "VLO", name: "Vlorë (abierto en 2025)", cityId: "al-vlore", coords: [40.4761, 19.4753], international: true },
];

/** Albania no tiene trenes en 2026: la línea Tirana–Durrës se reconstruye y no circulará antes de 2027. */
export const railCorridors: RailCorridor[] = [];

export const mapRoutes: MapRoute[] = [
  { id: "al-furgon-tirana-shkoder", label: "Furgón Tirana → Shkodër", from: "al-tirana", to: "al-shkoder", mode: "bus", note: "≈ 2 h desde la terminal norte, cada media hora, 3 €" },
  { id: "al-furgon-tirana-berat", label: "Furgón Tirana → Berat", from: "al-tirana", to: "al-berat", mode: "bus", note: "≈ 2 h 30, cada hora, 4 €" },
  { id: "al-bus-berat-gjirokaster", label: "Bus Berat → Gjirokastër", from: "al-berat", to: "al-gjirokaster", mode: "bus", note: "≈ 3 h con cambio en Fier, o bus directo de la mañana; 6 €" },
  { id: "al-bus-gjirokaster-vlore", label: "Bus Gjirokastër → Vlorë", from: "al-gjirokaster", to: "al-vlore", mode: "bus", note: "≈ 3 h por el paso de Llogara y la costa, o 2 h por Fier; 6 €" },
  { id: "al-bus-vlore-tirana", label: "Bus Vlorë → Tirana", from: "al-vlore", to: "al-tirana", mode: "bus", note: "≈ 2 h 30 por autopista, cada media hora" },
];
