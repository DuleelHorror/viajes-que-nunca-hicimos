import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "si-kurentovanje",
    name: "Kurentovanje, el carnaval de los kurenti",
    city: "Ptuj",
    regionName: "Estiria",
    coords: [46.42, 15.87],
    month: 2,
    dateApprox: "los diez días antes del martes de carnaval (febrero o principios de marzo)",
    durationDays: 10,
    category: "folklore",
    whatHappens:
      "Los kurenti, hombres cubiertos de pieles de oveja con máscaras de cuero, cuernos, lenguas rojas colgando y cencerros de vaca en la cintura, recorren Ptuj saltando para espantar el invierno y recogen pañuelos de las chicas en el garrote de erizo que llevan; con desfile de carrozas, los «arados» que labran la nieve, los diablos y las brujas, y lo que dura una borrachera de diez días. Patrimonio de la UNESCO y el carnaval más pagano de los Alpes; tren desde Liubliana con cambio.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 8, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Cama en Ptuj o Maribor con semanas el fin de semana grande",
    links: [WIKI("https://en.wikipedia.org/wiki/Kurentovanje")],
    meta: f("Ligado al carnaval"),
  },
  {
    id: "si-cerknica-pust",
    name: "El carnaval de las brujas de Cerknica",
    city: "Cerknica",
    regionName: "Notranjska",
    coords: [45.7947, 14.3625],
    month: 2,
    dateApprox: "el fin de semana de carnaval",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "El pueblo del lago que desaparece (Cerknica, un lago kárstico que se seca cada verano) se declara «Butale», la república de los tontos, y su carnaval es el más sarcástico de Eslovenia: brujas de la montaña Slivnica, un dragón de la cueva, los «cortadores de brujas» y carrozas que se ríen del gobierno de turno, con un juicio y quema de la bruja el martes. Bus desde Liubliana o Postojna, 45 min.",
    scores: { rareza: 7, espectacularidad: 6, facilidadAcceso: 7, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Ninguna; bus y volver a Liubliana o Postojna",
    links: [WIKI("https://en.wikipedia.org/wiki/Cerknica")],
    meta: f("Ligado al carnaval"),
  },
  {
    id: "si-kravji-bal",
    name: "Kravji bal, el baile de las vacas",
    city: "Bohinj (Ukanc)",
    regionName: "Alpes Julianos",
    coords: [46.2833, 13.8333],
    month: 9,
    dateApprox: "el tercer domingo de septiembre",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "El día en que las vacas bajan de los pastos de altura del Triglav, adornadas con coronas de flores y cencerros, y el valle de Bohinj lo celebra desde 1954 con el desfile del ganado junto al lago, quesos, lucha eslovena, bandas de acordeón y un baile de pueblo hasta la noche. Es el folclore alpino de verdad, sin disfraz, y se llega en el tren de Bohinj y bus por el lago.",
    scores: { rareza: 6, espectacularidad: 6, facilidadAcceso: 7, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Ninguna; tren a Bohinjska Bistrica y bus al lago",
    links: [WIKI("https://en.wikipedia.org/wiki/Bohinj")],
    meta: f(),
  },
  {
    id: "si-ana-desetnica",
    name: "Ana Desetnica, teatro de calle",
    city: "Liubliana",
    regionName: "Liubliana",
    coords: [46.0511, 14.5061],
    month: 7,
    dateApprox: "la primera semana de julio",
    durationDays: 5,
    category: "festival",
    whatHappens:
      "Cinco días de teatro de calle, circo y payasos serios de toda Europa en las plazas y los puentes del centro de Liubliana, gratis, desde 1998: acróbatas en el mercado de Plečnik, marionetas gigantes en el Triple Puente y compañías que hacen cosas raras con fuego en el Congreso. Después va de gira por Maribor y otros pueblos.",
    scores: { rareza: 4, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://en.wikipedia.org/wiki/Ana_Desetnica")],
    meta: f(),
  },
];
