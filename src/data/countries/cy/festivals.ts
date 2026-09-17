import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "cy-kataklysmos",
    name: "Kataklysmós, la fiesta del diluvio",
    city: "Larnaca",
    regionName: "Larnaca",
    coords: [34.9142, 33.6383],
    month: 6,
    dateApprox: "el fin de semana de Pentecostés ortodoxo (50 días después de la Pascua ortodoxa; a finales de mayo o en junio)",
    durationDays: 4,
    category: "folklore",
    whatHappens:
      "Solo en Chipre: Pentecostés se celebra recordando el Diluvio y a Noé (y a Afrodita saliendo del mar, que es lo que era antes) tirándose agua unos a otros en el paseo de Larnaca, con carreras de barcas, concursos de chatistá (versos improvisados a insulto limpio), puestos de loukoumades y conciertos hasta las tantas. Es la fiesta más grande de la isla y la más rara: una batalla de agua con tres mil años de excusa.",
    scores: { rareza: 8, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Ninguna; cama en Larnaca con semanas ese fin de semana",
    links: [WIKI("https://en.wikipedia.org/wiki/Kataklysmos")],
    meta: f("Fecha ligada a la Pascua ortodoxa"),
  },
  {
    id: "cy-carnaval-limassol",
    name: "El carnaval de Limassol",
    city: "Limassol",
    regionName: "Limassol",
    coords: [34.6786, 33.0413],
    month: 2,
    dateApprox: "las dos semanas antes de la cuaresma ortodoxa (febrero o principios de marzo)",
    durationDays: 12,
    category: "folklore",
    whatHappens:
      "El carnaval más grande del Mediterráneo oriental, con raíces venecianas: el Rey del Carnaval entra en la ciudad el primer jueves, hay un desfile de niños, serenatas por las tabernas, el Tsiknopempti (el jueves de la carne asada, con la ciudad entera oliendo a souvla) y el gran desfile del último domingo con carrozas y cien mil personas en el paseo. Termina con el Lunes Limpio, cometas y comida sin carne en el campo.",
    scores: { rareza: 5, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Ninguna; InterCity desde Nicosia y Larnaca",
    links: [WIKI("https://en.wikipedia.org/wiki/Limassol_Carnival")],
    meta: f("Fecha ligada a la cuaresma ortodoxa"),
  },
  {
    id: "cy-fiesta-vino-limassol",
    name: "La Fiesta del Vino de Limassol",
    city: "Limassol",
    regionName: "Limassol",
    coords: [34.6786, 33.0413],
    month: 9,
    dateApprox: "primera quincena de septiembre, unos diez días",
    durationDays: 10,
    category: "folklore",
    whatHappens:
      "Desde 1961, en el jardín municipal: entras pagando la entrada y el vino de las bodegas de la isla (commandaria, el vino dulce más antiguo del mundo con nombre, y los tintos de Troodos) es gratis y sin límite, con bailes folclóricos, un pisado de uva en un lagar y los chipriotas cenando souvla en mesas de plástico. Es una fiesta de pueblo a escala de ciudad, y el commandaria a las once de la noche explica muchas cosas.",
    scores: { rareza: 5, espectacularidad: 5, facilidadAcceso: 10, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://en.wikipedia.org/wiki/Limassol_Wine_Festival")],
    meta: f(),
  },
  {
    id: "cy-pafos-afrodita",
    name: "El festival de ópera Afrodita de Pafos",
    city: "Pafos",
    regionName: "Pafos",
    coords: [34.7536, 32.4064],
    month: 9,
    dateApprox: "un fin de semana de principios de septiembre",
    durationDays: 3,
    category: "festival",
    whatHappens:
      "Una ópera grande (Verdi, Puccini, Bizet) montada en la plaza del castillo medieval del puerto, con el mar de fondo y compañías invitadas de Europa del Este, desde 1999. Entradas de 30-60 €, tres noches, y la ciudad de los mosaicos llena de gente con vestido de noche entre las tabernas.",
    scores: { rareza: 3, espectacularidad: 7, facilidadAcceso: 9, nivelTurismo: 5 },
    planTripAround: false,
    needsBooking: "Entradas con semanas",
    links: [WIKI("https://en.wikipedia.org/wiki/Pafos_Aphrodite_Festival")],
    meta: f(),
  },
];
