import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "lv-jani",
    name: "Jāņi, la noche de Līgo",
    city: "Todo el país (el campo)",
    regionName: "Letonia",
    coords: [56.9, 24.6],
    month: 6,
    dateApprox: "noche del 23 al 24 de junio",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "La fiesta nacional de verdad: los hombres llamados Jānis (uno de cada diez) con coronas de roble, las mujeres con coronas de flores, queso de alcaravea, cerveza, hogueras hasta el amanecer (no se puede dormir, trae mala suerte), canciones «līgo» que se repiten sin parar y la búsqueda de la flor del helecho en el bosque. Las ciudades se vacían y el que no tiene una finca a la que ir se apunta a la hoguera del museo etnográfico de Riga.",
    scores: { rareza: 6, espectacularidad: 8, facilidadAcceso: 7, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Alojamiento rural con meses; en Riga, la hoguera del Museo Etnográfico o la orilla del Daugava",
    links: [WIKI("https://es.wikipedia.org/wiki/J%C4%81%C5%86i")],
    meta: f(),
  },
  {
    id: "lv-positivus",
    name: "Positivus",
    city: "Riga (Lucavsala)",
    regionName: "Riga",
    coords: [56.9275, 24.1],
    month: 7,
    dateApprox: "un fin de semana de mediados de julio",
    durationDays: 2,
    category: "festival",
    whatHappens:
      "El festival de música más grande del Báltico, antes en un bosque de Salacgrīva y desde 2022 en una isla del Daugava en Riga, con cabezas de cartel indie y electrónicos y 30.000 personas a la orilla del río. Es un festival normal en un sitio raro, y la excusa para que Riga se llene de lituanos y estonios.",
    scores: { rareza: 3, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Abonos con semanas",
    links: [WIKI("https://en.wikipedia.org/wiki/Positivus_Festival")],
    meta: f(),
  },
  {
    id: "lv-lacplesis-11-noviembre",
    name: "El Día de Lāčplēsis: velas en la muralla",
    city: "Riga",
    regionName: "Riga",
    coords: [56.9508, 24.1036],
    month: 11,
    dateApprox: "11 de noviembre",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "El aniversario de la victoria de 1919 sobre los alemanes del Báltico: al anochecer (a las cuatro), miles de personas van a la muralla del castillo de Riga, junto al Daugava, y dejan velas encendidas en las piedras hasta cubrirla entera, con desfile de antorchas de los estudiantes. Es el momento más bonito de la ciudad y el más oscuro del año, y lo repiten el 18 con los fuegos de la Independencia.",
    scores: { rareza: 7, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; vela en mano",
    links: [WIKI("https://en.wikipedia.org/wiki/L%C4%81%C4%8Dpl%C4%93sis_Day")],
    meta: f(),
  },
  {
    id: "lv-staro-riga",
    name: "Staro Rīga, el festival de la luz",
    city: "Riga",
    regionName: "Riga",
    coords: [56.9496, 24.1052],
    month: 11,
    dateApprox: "del 14 al 18 de noviembre",
    durationDays: 5,
    category: "festival",
    whatHappens:
      "Cuando el sol se va a las cuatro, Riga se llena de proyecciones sobre el art nouveau, la Academia de Ciencias iluminada de colores, instalaciones de luz en los parques y el Daugava con láseres, hasta el Día de la Independencia (el 18) con fuegos. Es la ciudad en el mes más oscuro convertida en cine.",
    scores: { rareza: 5, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://en.wikipedia.org/wiki/Staro_R%C4%ABga")],
    meta: f(),
  },
];
