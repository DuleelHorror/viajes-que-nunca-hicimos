import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "mk-vevcani-carnaval",
    name: "El carnaval de Vevčani",
    city: "Vevčani",
    regionName: "Struga",
    coords: [41.2403, 20.5936],
    month: 1,
    dateApprox: "13 y 14 de enero (el Año Nuevo del calendario juliano)",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "Un carnaval pagano de 1.400 años en el pueblo de los manantiales: máscaras de demonios, novias barbudas, un cortejo con un «muerto» al que resucitan, y sátiras de la política del año (los alcaldes y presidentes salen siempre mal parados), con rakia, cerdo y fuego en la nieve. Es de los carnavales más antiguos y más raros de Europa, y se hace en enero porque los ortodoxos van por el otro calendario.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 5, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Cama en Struga u Ohrid; bus y taxi hasta el pueblo, con nieve",
    links: [WIKI("https://en.wikipedia.org/wiki/Vev%C4%8Dani_Carnival")],
    meta: f(),
  },
  {
    id: "mk-galicnik-boda",
    name: "La boda de Galičnik",
    city: "Galičnik",
    regionName: "Mavrovo",
    coords: [41.6, 20.65],
    month: 7,
    dateApprox: "el fin de semana más cercano al 12 de julio (San Pedro)",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "Un pueblo de pastores vacío en la montaña de Mavrovo revive cada julio una boda tradicional completa con una pareja real elegida por sorteo: dos días de ritos (el novio a caballo, la novia con 30 kilos de traje bordado y monedas, la despedida de la madre, el afeitado del novio, el baile teškoto de los hombres al tambor) ante miles de personas en la plaza. Es el folclore macedonio en su versión más pura y más fotografiada.",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 3, nivelTurismo: 5 },
    planTripAround: true,
    needsBooking: "Sin transporte público: buses especiales desde Skopje ese fin de semana, o taxi desde Mavrovo; no hay camas en el pueblo",
    links: [WIKI("https://en.wikipedia.org/wiki/Gali%C4%8Dnik_Wedding_Festival")],
    meta: f(),
  },
  {
    id: "mk-ilinden-krusevo",
    name: "Ilinden en Kruševo",
    city: "Kruševo",
    regionName: "Pelagonia",
    coords: [41.3742, 21.2422],
    month: 8,
    dateApprox: "2 de agosto",
    durationDays: 1,
    category: "historical",
    whatHappens:
      "La fiesta nacional (el levantamiento de 1903 y la asamblea partisana de 1944, el mismo día) en el sitio donde pasó: el presidente y el gobierno suben al Makedonium, hay guardia de honor, discursos, coronas, y luego el pueblo entero de fiesta con música y cordero. Es el único día en que el espomenik tiene multitud, y en el que se ve qué significa para el país.",
    scores: { rareza: 6, espectacularidad: 6, facilidadAcceso: 6, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Buses extra desde Skopje y Prilep; cama en Kruševo con semanas",
    links: [WIKI("https://es.wikipedia.org/wiki/Levantamiento_de_Ilinden")],
    meta: f(),
  },
  {
    id: "mk-ohrid-verano",
    name: "El Festival de Verano de Ohrid",
    city: "Ohrid",
    regionName: "Ohrid",
    coords: [41.1122, 20.7947],
    month: 7,
    dateApprox: "del 12 de julio al 20 de agosto",
    durationDays: 40,
    category: "festival",
    whatHappens:
      "Conciertos de clásica y teatro en el teatro griego, en la iglesia de Santa Sofía y en el patio de Plaošnik, con el lago detrás, desde 1961: orquestas de todo el mundo, coros ortodoxos, y entradas de 5-15 €. Es la excusa cultural de la temporada alta del lago, y las noches en el teatro griego con el lago a oscuras valen el viaje.",
    scores: { rareza: 4, espectacularidad: 7, facilidadAcceso: 9, nivelTurismo: 5 },
    planTripAround: false,
    needsBooking: "Entradas en el momento; alojamiento en Ohrid en agosto, con antelación",
    links: [WIKI("https://en.wikipedia.org/wiki/Ohrid_Summer_Festival")],
    meta: f(),
  },
];
