import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "lt-uzgavenes",
    name: "Užgavėnės, el carnaval de las máscaras",
    city: "Rumšiškės (y Vilnius)",
    regionName: "Kaunas",
    coords: [54.8667, 24.2],
    month: 2,
    dateApprox: "martes de carnaval (fecha variable, febrero o principios de marzo)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "El carnaval pagano lituano: máscaras de madera de cabras, diablos, judíos y gitanos (el folclore es lo que es), una pelea entre Lašininis (el gordo del invierno) y Kanapinis (el flaco de la cuaresma), tortitas hasta reventar y la quema de Morė, una muñeca de paja gigante que es el invierno. El museo al aire libre de Rumšiškės, entre Vilnius y Kaunas, lo hace a lo grande con todo el país en trajes.",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 7, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Bus Vilnius–Kaunas que pare en Rumšiškės, o buses especiales ese día",
    links: [WIKI("https://es.wikipedia.org/wiki/U%C5%BEgav%C4%97n%C4%97s")],
    meta: f("Fecha ligada a la Pascua"),
  },
  {
    id: "lt-kaziuko-muge",
    name: "Kaziuko mugė, la feria de San Casimiro",
    city: "Vilnius",
    regionName: "Vilnius",
    coords: [54.6872, 25.2797],
    month: 3,
    dateApprox: "primer fin de semana de marzo (en torno al 4)",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "Una feria de artesanos desde 1604 que llena la ciudad vieja entera: verbos (ramos de flores secas de un metro, patrimonio UNESCO), cestas, cuchillos, corazones de pan de jengibre con nombres, cerdos asados y mil puestos de madera tallada, con los lituanos comprando lo que llevarán todo el año. Es el único momento en que Vilnius parece un mercado medieval sin que lo finja.",
    scores: { rareza: 6, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://en.wikipedia.org/wiki/Kaziuko_mug%C4%97")],
    meta: f(),
  },
  {
    id: "lt-uzupis-1-abril",
    name: "El Día de la Independencia de Užupis",
    city: "Vilnius (Užupis)",
    regionName: "Vilnius",
    coords: [54.6811, 25.2967],
    month: 4,
    dateApprox: "1 de abril",
    durationDays: 1,
    category: "wtf",
    whatHappens:
      "La república de broma celebra su independencia: control de pasaportes en el puente con sello, la fuente de la plaza mana cerveza durante una hora, desfile del ejército de doce hombres, discurso del presidente, conciertos en los patios y una bandera nueva cada año. Es el 1 de abril tomado en serio por un barrio entero, con el Dalái Lama de ciudadano.",
    scores: { rareza: 9, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Ninguna; llegar pronto a la fuente",
    links: [WIKI("https://es.wikipedia.org/wiki/U%C5%BEupis")],
    meta: f(),
  },
  {
    id: "lt-rasos-kernave",
    name: "Rasos, el solsticio en Kernavė",
    city: "Kernavė",
    regionName: "Vilnius",
    coords: [54.8853, 24.8417],
    month: 6,
    dateApprox: "noche del 23 al 24 de junio",
    durationDays: 2,
    category: "occult",
    whatHappens:
      "La noche de San Juan báltica en su versión más pagana: en los montículos de la primera capital lituana (Kernavė, patrimonio UNESCO), los neopaganos de Romuva (reconocida como religión en 2019) encienden fuegos en las colinas, coronas de flores en el río, ruedas ardiendo rodando cuesta abajo, canciones sutartinės (polifonía UNESCO) y baile hasta el amanecer, que en junio llega a las cuatro. Lituania fue el último país pagano de Europa (hasta 1387) y aquí se nota.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 5, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Bus Vilnius–Kernavė (1 h, pocos al día; el último de vuelta no espera al amanecer: tienda o taxi)",
    links: [WIKI("https://es.wikipedia.org/wiki/Rasos_(festividad)")],
    meta: f(),
  },
];
