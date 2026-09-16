import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "ee-jaanipaev",
    name: "Jaanipäev, la noche de San Juan",
    city: "Todo el país (mejor en el campo)",
    regionName: "Estonia",
    coords: [58.6, 25.0],
    month: 6,
    dateApprox: "noche del 23 al 24 de junio",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "La fiesta más importante del año, más que la Navidad: hogueras enormes en cada pueblo y cada finca, salto del fuego, búsqueda de la flor del helecho en el bosque (que no existe, y por eso se va en pareja), sauna, cerveza y una noche en la que no anochece del todo. Las ciudades se vacían y el campo se llena. Cae junto al Día de la Victoria (el 23, la batalla de Võnnu de 1919), así que son dos días festivos seguidos.",
    scores: { rareza: 6, espectacularidad: 8, facilidadAcceso: 7, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Alojamiento rural con meses; en Tallin hay hoguera oficial en el museo al aire libre de Rocca al Mare",
    links: [WIKI("https://en.wikipedia.org/wiki/Jaanip%C3%A4ev")],
    meta: f(),
  },
  {
    id: "ee-viljandi-folk",
    name: "Viljandi Folk",
    city: "Viljandi",
    regionName: "Viljandi",
    coords: [58.3639, 25.59],
    month: 7,
    dateApprox: "último fin de semana de julio",
    durationDays: 4,
    category: "folklore",
    whatHappens:
      "El festival de folk más grande del Báltico en las ruinas de un castillo de la Orden Teutónica sobre un lago: 20.000 personas, gaitas estonias (torupill), cítaras kannel, coros de runo (la poesía cantada que la UNESCO protege), bandas de todo el mundo fino-ugrio y baile en la hierba hasta las tres con luz de verano. Viljandi está a 2 h 30 de Tallin en tren.",
    scores: { rareza: 7, espectacularidad: 7, facilidadAcceso: 8, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Abonos con semanas; camping o cama con meses",
    links: [WIKI("https://en.wikipedia.org/wiki/Viljandi_Folk_Music_Festival")],
    meta: f(),
  },
  {
    id: "ee-seto-reino",
    name: "El Día del Reino Seto",
    city: "Setomaa (cada año en un pueblo distinto)",
    regionName: "Võru",
    coords: [57.85, 27.5],
    month: 8,
    dateApprox: "primer sábado de agosto",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Los setos, un pueblo ortodoxo de la frontera con Rusia con su propia lengua y sus cantos polifónicos de mujeres (leelo, patrimonio UNESCO), eligen cada año a su «ülemsootska», el virrey de su reino simbólico, con concursos de la mejor cerveza casera, el mejor queso, la mejor cantante y el hombre más fuerte, trajes de plata (las mujeres llevan kilos de monedas colgadas) y un desfile del ejército seto. Es el folclore más raro de Estonia, en su rincón más olvidado.",
    scores: { rareza: 9, espectacularidad: 7, facilidadAcceso: 3, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Bus a Värska u Obinitsa desde Tartu (1 h 30) y el pueblo del año, anunciado en primavera",
    links: [WIKI("https://en.wikipedia.org/wiki/Seto_people")],
    meta: f("El pueblo anfitrión cambia cada año", "media"),
  },
  {
    id: "ee-tallinn-music-week",
    name: "Tallinn Music Week",
    city: "Tallin",
    regionName: "Tallin",
    coords: [59.437, 24.7536],
    month: 4,
    dateApprox: "principios de abril (a veces en mayo)",
    durationDays: 5,
    category: "festival",
    whatHappens:
      "Un festival de ciudad con 200 conciertos en 30 sitios, de iglesias a fábricas de Telliskivi y al búnker de Linnahall cuando lo dejan, con bandas del Báltico, los nórdicos y Ucrania, y un aire de feria de la industria que hace que veas grupos de Kazajistán en un sótano. Es la manera de ver Tallin funcionar por dentro fuera de temporada.",
    scores: { rareza: 5, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Abono con semanas; entradas sueltas por concierto",
    links: [WIKI("https://en.wikipedia.org/wiki/Tallinn_Music_Week")],
    meta: f(),
  },
];
