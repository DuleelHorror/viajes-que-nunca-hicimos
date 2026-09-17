import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "hr-carnaval-rijeka",
    name: "El carnaval de Rijeka y los zvončari",
    city: "Rijeka",
    regionName: "Kvarner",
    coords: [45.3271, 14.4422],
    month: 2,
    dateApprox: "de mediados de enero al martes de carnaval; el gran desfile, el domingo anterior",
    durationDays: 30,
    category: "folklore",
    whatHappens:
      "El carnaval más grande de Croacia (100.000 personas en el desfile) y, lo raro, los zvončari: hombres de los pueblos del Kvarner con pieles de oveja, máscaras de animales con cuernos y lenguas, mazas y cencerros enormes en la cintura, que recorren los pueblos en grupo haciendo un ruido de terremoto para espantar el invierno y a los turcos, con UNESCO desde 2009. Los ves en el desfile de Rijeka y, mejor, los fines de semana de enero-febrero en Halubje (bus urbano). Con quema del Pust el martes.",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 9, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Cama en Rijeka el fin de semana del desfile con semanas",
    links: [WIKI("https://en.wikipedia.org/wiki/Rijeka_Carnival")],
    meta: f("Ligado al carnaval"),
  },
  {
    id: "hr-sinjska-alka",
    name: "La Sinjska alka",
    city: "Sinj",
    regionName: "Dalmacia",
    coords: [43.7031, 16.6394],
    month: 8,
    dateApprox: "el primer domingo de agosto",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "Desde 1715, cuando 700 sinjanos rechazaron a 60.000 otomanos, los jinetes del pueblo (los alkari, con uniformes del XVIII) galopan por la calle principal con una lanza de 3 metros intentando ensartar la alka, un anillo de hierro colgado a 3,3 metros con tres huecos (el del centro vale tres puntos), ante 20.000 personas, con bandas, cañonazos y el escudero que grita los puntos. UNESCO, machismo militar dálmata en estado puro y bus desde Split (45 min).",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 8, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Entradas de grada con semanas (o de pie, gratis); bus desde Split y volver de noche",
    links: [WIKI("https://en.wikipedia.org/wiki/Sinjska_alka")],
    meta: f(),
  },
  {
    id: "hr-vukovar-18-noviembre",
    name: "La Columna del Recuerdo de Vukovar",
    city: "Vukovar",
    regionName: "Eslavonia",
    coords: [45.3519, 18.9986],
    month: 11,
    dateApprox: "18 de noviembre",
    durationDays: 1,
    category: "historical",
    whatHappens:
      "El día en que cayó la ciudad en 1991, entre 50.000 y 100.000 personas (el presidente, veteranos con boinas, familias con velas) recorren en silencio los 5 km desde el hospital hasta el cementerio de las cruces blancas, y el país entero enciende una vela en la ventana; en Ovčara, misa en la nave. Es festivo nacional desde 2020 y el día en que Croacia se mira al espejo, con el nacionalismo a flor de piel. Se va con respeto y sin cámara en la cara de nadie.",
    scores: { rareza: 6, espectacularidad: 6, facilidadAcceso: 7, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Trenes y buses extra desde Zagreb; cama en Vukovar u Osijek con semanas",
    links: [WIKI("https://en.wikipedia.org/wiki/Battle_of_Vukovar")],
    meta: f(),
  },
  {
    id: "hr-spancirfest",
    name: "Špancirfest, el festival de los paseantes",
    city: "Varaždin",
    regionName: "Zagorje",
    coords: [46.3057, 16.3366],
    month: 8,
    dateApprox: "la última semana de agosto (10 días)",
    durationDays: 10,
    category: "festival",
    whatHappens:
      "La ciudad barroca del norte (la antigua capital, que se quemó en 1776) se llena diez días de teatro de calle, músicos, artesanos, comida y conciertos gratis en cada plaza, con 200.000 personas paseando (špancirati = pasear en el dialecto local), y un cementerio de cipreses recortados que es de los más raros de Europa para el que quiera un descanso. Tren desde Zagreb, 2 h.",
    scores: { rareza: 4, espectacularidad: 6, facilidadAcceso: 9, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Ninguna; tren o bus desde Zagreb y volver",
    links: [WIKI("https://en.wikipedia.org/wiki/%C5%A0pancirfest")],
    meta: f(),
  },
];
