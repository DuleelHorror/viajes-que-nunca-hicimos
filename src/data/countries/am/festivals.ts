import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "am-trndez",
    name: "Trndez, el salto sobre el fuego",
    city: "Todo el país (Ereván, Gyumri, pueblos)",
    regionName: "Armenia",
    coords: [40.1792, 44.4991],
    month: 2,
    dateApprox: "13 de febrero por la tarde, víspera de la Candelaria armenia",
    durationDays: 0.5,
    category: "folklore",
    whatHappens:
      "Los recién casados y los novios saltan sobre una hoguera encendida en el patio de la iglesia, con la mano cogida, para tener hijos y quemar lo malo del año; detrás saltan las abuelas, los niños y quien quiera. Es un rito zoroástrico de purificación con vela bendecida y cura al lado que hace como que es cristiano. Se hace en cada parroquia del país a la vez.",
    scores: { rareza: 8, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Ninguna: cualquier iglesia de Ereván a las seis de la tarde",
    links: [WIKI("https://en.wikipedia.org/wiki/Trndez")],
    meta: f(),
  },
  {
    id: "am-vardavar",
    name: "Vardavar, la guerra de agua",
    city: "Ereván y todo el país",
    regionName: "Armenia",
    coords: [40.1792, 44.4991],
    month: 7,
    dateApprox: "98 días después de la Pascua armenia (un domingo de julio)",
    durationDays: 1,
    category: "festival",
    whatHappens:
      "Un domingo de julio a 38 grados, el país entero se tira agua: cubos desde los balcones, mangueras, botellas, niños asaltando autobuses, policías empapados. Es una fiesta pagana de Astghik, la diosa del agua y el amor, que la Iglesia disfrazó de Transfiguración. Nadie se libra: sal de casa con el móvil en una bolsa o no salgas. Ereván es el campo de batalla principal.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Ninguna; ropa que se pueda mojar y una funda estanca",
    links: [WIKI("https://es.wikipedia.org/wiki/Vardavar")],
    meta: f("Fecha móvil ligada a la Pascua armenia"),
  },
  {
    id: "am-areni-vino",
    name: "Festival del vino de Areni",
    city: "Areni",
    regionName: "Vayots Dzor",
    coords: [39.7167, 45.1833],
    month: 10,
    dateApprox: "primer sábado de octubre",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "En el pueblo junto a la cueva donde apareció la bodega más antigua del mundo (6.100 años), un día de vino de las bodegas familiares de la zona por 5 € la copa, música, pisado de uva en barreños y borrachera colectiva y educada. Pequeño, rural y sin pretensiones.",
    scores: { rareza: 5, espectacularidad: 6, facilidadAcceso: 6, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Marshrutkas a Yeghegnadzor desde Ereván (2 h) y bus local; ese día hay buses extra",
    links: [WIKI("https://en.wikipedia.org/wiki/Areni-1_cave")],
    meta: f(),
  },
  {
    id: "am-erebuni-erevan",
    name: "Erebuni-Ereván, el cumpleaños de la ciudad",
    city: "Ereván",
    regionName: "Ereván",
    coords: [40.1792, 44.4991],
    month: 10,
    dateApprox: "segundo fin de semana de octubre",
    durationDays: 2,
    category: "festival",
    whatHappens:
      "Ereván celebra su fundación en el año 782 a. C. (es 29 años más vieja que Roma, y te lo dirán) con conciertos en la Plaza de la República, desfiles de trajes, la fuente bailando y el país entero paseando por la calle Norte. Es la fiesta más grande del año y el mejor momento para ver la ciudad de noche.",
    scores: { rareza: 4, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://en.wikipedia.org/wiki/Erebuni_Fortress")],
    meta: f(),
  },
];
