import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "ro-martisor",
    name: "Mărțișor",
    city: "Todo el país",
    regionName: "Rumanía",
    coords: [44.4268, 26.1025],
    month: 3,
    dateApprox: "1 de marzo",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "El primer día de marzo todo el mundo regala un cordoncito rojo y blanco con un colgante (el mărțișor) a las mujeres, que lo llevan en la solapa hasta que ven el primer árbol en flor y entonces lo cuelgan de una rama. Las calles se llenan de puestos, es patrimonio de la UNESCO y es la manera más barata de ver a un país entero hacer lo mismo a la vez.",
    scores: { rareza: 5, espectacularidad: 4, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://es.wikipedia.org/wiki/M%C4%83r%C8%9Bi%C8%99or")],
    meta: f(),
  },
  {
    id: "ro-sanziene",
    name: "Sânziene, la noche de las hadas",
    city: "Maramureș y el campo entero",
    regionName: "Rumanía",
    coords: [47.9282, 23.8902],
    month: 6,
    dateApprox: "24 de junio (la noche del 23)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "El solsticio rumano: las chicas se hacen coronas de flores amarillas (sânziene), las tiran al tejado para saber si se casan ese año, se salta el fuego y se dice que esa noche las hadas bailan en los claros y el que las ve se vuelve loco. En Maramureș hay pueblos con hoguera, baile y trajes; en las ciudades, coronas en el mercado. Es el pagano que sobrevivió a la Iglesia y al Partido.",
    scores: { rareza: 7, espectacularidad: 6, facilidadAcceso: 6, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Ninguna; pregunta en Sighet o en Breb qué pueblo hace fuego",
    links: [WIKI("https://es.wikipedia.org/wiki/S%C3%A2nziene")],
    meta: f(),
  },
  {
    id: "ro-sighisoara-medieval",
    name: "Festival Medieval de Sighișoara",
    city: "Sighișoara",
    regionName: "Mureș",
    coords: [46.2197, 24.7922],
    month: 7,
    dateApprox: "último fin de semana de julio",
    durationDays: 3,
    category: "festival",
    whatHappens:
      "La ciudadela sajona se llena de caballeros de cartón, juglares, mercadillo y conciertos de música antigua en las plazas empedradas, con los vecinos disfrazados y cerveza en la torre. Es kitsch a conciencia y es divertido, y la ciudadela de noche con antorchas compensa.",
    scores: { rareza: 4, espectacularidad: 6, facilidadAcceso: 9, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Alojamiento en la ciudadela con meses; en el tren no hace falta",
    links: [WIKI("https://es.wikipedia.org/wiki/Sighi%C8%99oara")],
    meta: f(),
  },
  {
    id: "ro-untold",
    name: "Untold",
    city: "Cluj-Napoca",
    regionName: "Cluj",
    coords: [46.7712, 23.6236],
    month: 8,
    dateApprox: "primer fin de semana de agosto",
    durationDays: 4,
    category: "festival",
    whatHappens:
      "El festival de electrónica más grande de Europa del Este en el estadio y el parque de Cluj: 100.000 personas al día, cabezas de cartel de Ibiza y una ciudad que se convierte en una rave de cuatro días. Si no es lo tuyo, es la semana para no estar en Cluj: los precios se triplican.",
    scores: { rareza: 3, espectacularidad: 8, facilidadAcceso: 9, nivelTurismo: 9 },
    planTripAround: false,
    needsBooking: "Abonos con meses; alojamiento imposible esa semana",
    links: [WIKI("https://es.wikipedia.org/wiki/Untold_Festival")],
    meta: f(),
  },
];
