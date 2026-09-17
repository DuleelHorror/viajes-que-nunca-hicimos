import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";

export const cities: City[] = [
  {
    id: "cy-nicosia",
    name: "Nicosia (Lefkosia / Lefkoşa)",
    coords: [35.1856, 33.3823],
    isCapital: true,
    population: 330_000,
    urban: { modes: ["bus", "a-pie", "taxi"], score: 5, ticket: "bus urbano OSEL 1,50 €; el casco viejo, a pie", note: "la última capital dividida: el paso de Ledra Street está en la calle comercial y se cruza a pie con el DNI" },
  },
  {
    id: "cy-larnaca",
    name: "Larnaca",
    coords: [34.9003, 33.6232],
    population: 90_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 1,50 €; al aeropuerto, bus 425, 20 min", note: "donde aterriza todo desde BCN; el lago salado y la mezquita a un paso" },
  },
  {
    id: "cy-famagusta",
    name: "Famagusta (Gazimağusa)",
    coords: [35.125, 33.9417],
    population: 50_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 4, ticket: "todo a pie; a Salamina, bus local o taxi de 8 €", note: "en el norte: la ciudad amurallada, Varosha al lado y Salamina a 9 km; bus İtimat cada hora desde Nicosia norte" },
  },
  {
    id: "cy-kyrenia",
    name: "Kyrenia (Girne)",
    coords: [35.3403, 33.3192],
    population: 40_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 4, ticket: "todo a pie; a Bellapais, taxi de 10 €", note: "en el norte: el puerto veneciano, el castillo y Bellapais en la montaña" },
  },
  {
    id: "cy-limassol",
    name: "Limassol",
    coords: [34.6786, 33.0413],
    population: 240_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus EMEL 1,50 €; a Kourion, bus 16 desde el castillo", note: "la ciudad de los rusos y del carnaval, con Kourion y la base de Akrotiri al lado" },
  },
  {
    id: "cy-pafos",
    name: "Pafos",
    coords: [34.7754, 32.4245],
    population: 40_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 1,50 €", note: "las tumbas de los reyes y los mosaicos; sin directo desde BCN, se llega en InterCity desde Nicosia o Limassol" },
  },
];

export const airports: Airport[] = [
  { code: "LCA", name: "Larnaca", cityId: "cy-larnaca", coords: [34.8751, 33.6249], international: true },
  { code: "PFO", name: "Pafos", cityId: "cy-pafos", coords: [34.718, 32.4857], international: true },
];

// Chipre no tiene ferrocarril desde 1951: todo va en bus.
export const railCorridors: RailCorridor[] = [];

export const mapRoutes: MapRoute[] = [
  { id: "cy-bus-larnaca-nicosia", label: "InterCity Larnaca → Nicosia", from: "cy-larnaca", to: "cy-nicosia", mode: "bus", note: "cada 30-60 min, ≈ 45 min, 4 €; desde el aeropuerto, directo también" },
  { id: "cy-bus-nicosia-famagusta", label: "Bus İtimat Nicosia norte → Famagusta", from: "cy-nicosia", to: "cy-famagusta", mode: "bus", note: "cada hora de 07:00 a 18:00, ≈ 1 h, ≈ 2-3 € (liras o euros); sale a 10 min del paso de Ledra Street" },
  { id: "cy-bus-nicosia-kyrenia", label: "Bus Nicosia norte → Kyrenia", from: "cy-nicosia", to: "cy-kyrenia", mode: "bus", note: "VirgoBus cada 30 min, 45-55 min, ≈ 2 €" },
  { id: "cy-bus-nicosia-limassol", label: "InterCity Nicosia → Limassol", from: "cy-nicosia", to: "cy-limassol", mode: "bus", note: "cada hora, ≈ 1 h 15, 5 €; para junto a Choirokoitia si lo pides" },
  { id: "cy-bus-limassol-pafos", label: "InterCity Limassol → Pafos", from: "cy-limassol", to: "cy-pafos", mode: "bus", note: "cada hora, ≈ 1 h, 4 €; pasa por la base de Akrotiri y Kourion" },
];
