import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "pl-wianki",
    name: "Wianki, las coronas del solsticio",
    city: "Cracovia",
    regionName: "Pequeña Polonia",
    coords: [50.0536, 19.9331],
    month: 6,
    dateApprox: "fin de semana más cercano al 24 de junio (20-21 de junio en 2026)",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "La noche de San Juan pagana: las chicas tiran coronas de flores con velas al Vístula bajo el castillo de Wawel para saber con quién se casan, con fuegos artificiales, conciertos gratis en el bulevar y, desde hace unos años, discotecas silenciosas en el patio del Collegium Maius. Es la fiesta de verano de Cracovia y la única en que el río se llena de fuego.",
    scores: { rareza: 6, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 5 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://en.wikipedia.org/wiki/Wianki")],
    meta: f(),
  },
  {
    id: "pl-lajkonik",
    name: "El Lajkonik",
    city: "Cracovia",
    regionName: "Pequeña Polonia",
    coords: [50.0614, 19.9366],
    month: 6,
    dateApprox: "el jueves siguiente al Corpus Christi (fecha variable, junio)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Un hombre disfrazado de jinete tártaro con un caballo de madera a la cintura, barba y una maza, recorre desde el convento de Zwierzyniec hasta la plaza del Mercado golpeando a la gente con la maza (da suerte) y cobrando un rescate simbólico al alcalde, en recuerdo de un ataque tártaro del siglo XIII que los balseros del Vístula repelieron. Es folclore medieval de verdad, con banda de música y borrachera de balseros.",
    scores: { rareza: 8, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Ninguna; el recorrido dura toda la tarde",
    links: [WIKI("https://es.wikipedia.org/wiki/Lajkonik")],
    meta: f("Fecha ligada al Corpus; en 2026 el Corpus es el 4 de junio"),
  },
  {
    id: "pl-dni-czolgisty",
    name: "Días del Tanquista de Borne Sulinowo",
    city: "Borne Sulinowo",
    regionName: "Pomerania Occidental",
    coords: [53.5764, 16.5342],
    month: 7,
    dateApprox: "10-12 de julio en 2026 (segundo fin de semana de julio)",
    durationDays: 3,
    category: "weird",
    whatHappens:
      "La antigua ciudad secreta soviética saca a rodar su museo: T-55, transportes blindados y camiones del Pacto de Varsovia haciendo pasadas por la pista de tanques, recreadores con uniformes de los dos bandos, paseos en blindado por 20 zł y salchichas. Es el único sitio de Polonia donde ver arrancar un tanque soviético con público, y va sobre todo gente de la zona.",
    scores: { rareza: 8, espectacularidad: 7, facilidadAcceso: 3, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Tren a Szczecinek y taxi; alojamiento en Borne con semanas",
    links: [WIKI("https://es.wikipedia.org/wiki/Borne_Sulinowo")],
    meta: f("Fecha anunciada por el museo cada primavera", "media"),
  },
  {
    id: "pl-wszystkich-swietych",
    name: "Wszystkich Świętych, Todos los Santos",
    city: "Todo el país (Powązki en Varsovia, Rakowicki en Cracovia)",
    regionName: "Polonia",
    coords: [52.2531, 20.9736],
    month: 11,
    dateApprox: "1 de noviembre (y la víspera)",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "El país entero va a los cementerios con velas de colores en tarros (znicze) y crisantemos, y al anochecer los cementerios se convierten en mares de luz roja con miles de personas andando entre tumbas en silencio, colas de tranvía y puestos de castañas y pan de jengibre en la puerta. Powązki en Varsovia y Rakowicki en Cracovia son los grandes; el día 2 se sigue. No es Halloween: es la noche más bonita de Polonia y la más triste.",
    scores: { rareza: 7, espectacularidad: 9, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: true,
    needsBooking: "Ninguna; los trenes de los días anteriores se llenan de gente volviendo a casa",
    links: [WIKI("https://es.wikipedia.org/wiki/D%C3%ADa_de_Todos_los_Santos")],
    meta: f(),
  },
];
