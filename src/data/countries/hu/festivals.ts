import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "hu-busojaras",
    name: "Busójárás, el carnaval de los demonios de Mohács",
    city: "Mohács",
    regionName: "Baranya",
    coords: [45.9931, 18.6795],
    month: 2,
    dateApprox: "los seis días hasta el martes de carnaval (12-17 de febrero en 2026)",
    durationDays: 6,
    category: "folklore",
    whatHappens:
      "Cientos de busós (hombres con máscaras de madera talladas con cuernos de carnero, pieles de oveja, cencerros y carracas) cruzan el Danubio en barcas al amanecer del domingo, desfilan por el pueblo asustando y abrazando a la gente, queman un ataúd con el invierno en la plaza y beben pálinka hasta el martes. Los croatas šokci lo trajeron hace 300 años para espantar a los turcos, dicen. UNESCO desde 2009 y el carnaval más bruto de Europa central.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 7, nivelTurismo: 5 },
    planTripAround: true,
    needsBooking: "Cama en Pécs (Mohács se llena) y bus extra el domingo; llegar antes de las 10 para las barcas",
    links: [WIKI("https://es.wikipedia.org/wiki/Bus%C3%B3j%C3%A1r%C3%A1s")],
    meta: f(),
  },
  {
    id: "hu-holloko-pascua",
    name: "La Pascua de Hollókő",
    city: "Hollókő",
    regionName: "Nógrád",
    coords: [47.9967, 19.5892],
    month: 4,
    dateApprox: "de Viernes Santo a Lunes de Pascua (3-6 de abril en 2026)",
    durationDays: 4,
    category: "folklore",
    whatHappens:
      "El pueblo palóc con todo el mundo en traje de flores, huevos pintados con cera, y el lunes el «riego»: los chicos mojan a las chicas con cubos de agua del pozo (antes, en el arroyo) a cambio de huevos y pálinka, con una rima. Hay talleres, música y buses especiales desde Budapest. Es el folclore de Pascua más fotografiado de Hungría, y lo hacen para sí mismos igual.",
    scores: { rareza: 7, espectacularidad: 7, facilidadAcceso: 6, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Buses especiales desde Budapest esos días; cama en el pueblo con meses",
    links: [WIKI("https://es.wikipedia.org/wiki/Holl%C3%B3k%C5%91")],
    meta: f("Fecha de Pascua"),
  },
  {
    id: "hu-sziget",
    name: "Sziget",
    city: "Budapest (isla de Óbuda)",
    regionName: "Budapest",
    coords: [47.55, 19.05],
    month: 8,
    dateApprox: "del 11 al 15 de agosto en 2026 (segunda semana de agosto)",
    durationDays: 5,
    category: "festival",
    whatHappens:
      "Una isla del Danubio convertida en ciudad de 400.000 personas durante una semana, con 60 escenarios, cabezas de cartel de estadio y una «Isla de la Libertad» que empezó en 1993 como festival estudiantil. Es el festival más grande de Europa del Este y una ciudad de tiendas de campaña con su propio ayuntamiento. Si no es lo tuyo, Budapest esa semana está llena de holandeses.",
    scores: { rareza: 4, espectacularidad: 9, facilidadAcceso: 10, nivelTurismo: 9 },
    planTripAround: false,
    needsBooking: "Abonos con meses; el suburbano H5 va hasta la isla",
    links: [WIKI("https://es.wikipedia.org/wiki/Sziget_Festival")],
    meta: f(),
  },
  {
    id: "hu-20-agosto",
    name: "El 20 de agosto: San Esteban y los fuegos del Danubio",
    city: "Budapest",
    regionName: "Budapest",
    coords: [47.4979, 19.0402],
    month: 8,
    dateApprox: "20 de agosto",
    durationDays: 1,
    category: "festival",
    whatHappens:
      "La fiesta nacional: procesión de la Santa Diestra (la mano momificada de San Esteban) desde la basílica, desfile aéreo sobre el Danubio, la bendición del pan nuevo, y a las 21:00 media hora de espectáculo con drones, proyecciones sobre el Parlamento y diez minutos de fuegos desde los puentes con un millón de personas en las orillas. Es el mayor espectáculo pirotécnico de Europa y la ciudad entera cortada.",
    scores: { rareza: 5, espectacularidad: 9, facilidadAcceso: 10, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Ninguna; sitio en la orilla desde las 19:00",
    links: [WIKI("https://es.wikipedia.org/wiki/D%C3%ADa_de_San_Esteban_(Hungr%C3%ADa)")],
    meta: f(),
  },
];
