import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "de-wave-gotik-treffen",
    name: "Wave-Gotik-Treffen, el encuentro gótico",
    city: "Leipzig",
    regionName: "Sajonia",
    coords: [51.3397, 12.3731],
    month: 5,
    dateApprox: "el fin de semana de Pentecostés (finales de mayo o principios de junio), cuatro días",
    durationDays: 4,
    category: "weird",
    whatHappens:
      "El festival gótico más grande del mundo desde 1992: 20.000 personas de negro (victorianos con parasol, cibergóticos con lentillas, vikingos con pieles, steampunks con gafas de latón) por toda la ciudad durante cuatro días, con 200 conciertos en 50 sitios (de la ópera al crematorio del cementerio sur, con misas negras de broma y un picnic victoriano en el parque), mercado medieval y los tranvías llenos de vampiros comprando el pan. Leipzig los adora y les cede la ciudad. Tren desde Berlín, 1 h 15.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 9, nivelTurismo: 5 },
    planTripAround: true,
    needsBooking: "Abono de 4 días (≈ 150 €) y cama en Leipzig con meses; el picnic victoriano es gratis y en la calle",
    links: [WIKI("https://es.wikipedia.org/wiki/Wave-Gotik-Treffen")],
    meta: f("Ligado a Pentecostés"),
  },
  {
    id: "de-walpurgis-harz",
    name: "La noche de Walpurgis en el Harz",
    city: "Thale y Schierke (Harz)",
    regionName: "Sajonia-Anhalt",
    coords: [51.7486, 11.0367],
    month: 4,
    dateApprox: "la noche del 30 de abril al 1 de mayo",
    durationDays: 1,
    category: "occult",
    whatHappens:
      "La noche en que las brujas vuelan al Brocken (la montaña del Fausto de Goethe) a bailar con el diablo: los pueblos del Harz (Thale con su Hexentanzplatz, Schierke al pie del Brocken, Wernigerode) se llenan de brujas y diablos disfrazados, hogueras, el diablo quemando a la bruja, cerveza y una fiesta de pueblo pagana hasta el amanecer, con el tren de vapor del Brocken subiendo lleno. Desde Berlín, tren a Thale (2 h 30) o a Wernigerode.",
    scores: { rareza: 8, espectacularidad: 7, facilidadAcceso: 7, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Cama en Thale, Wernigerode o Quedlinburg con meses; trenes de vuelta de madrugada, pocos",
    links: [WIKI("https://es.wikipedia.org/wiki/Noche_de_Walpurgis")],
    meta: f(),
  },
  {
    id: "de-festival-of-lights",
    name: "Festival of Lights de Berlín",
    city: "Berlín",
    regionName: "Berlín",
    coords: [52.5163, 13.3777],
    month: 10,
    dateApprox: "diez días de principios de octubre",
    durationDays: 10,
    category: "festival",
    whatHappens:
      "Los monumentos de la ciudad (la Puerta de Brandeburgo, la catedral, la torre de la televisión, el Palacio de la República que ya no está pero su hueco sí) proyectados con animaciones de artistas de todo el mundo cada noche de 19 a 23, gratis, con la ciudad entera andando entre ellos y el 3 de octubre (el Día de la Unidad) en medio. Turístico, y aun así la torre de la RDA con dibujos encima tiene su qué.",
    scores: { rareza: 3, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 7 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://en.wikipedia.org/wiki/Festival_of_Lights_(Berlin)")],
    meta: f(),
  },
  {
    id: "de-striezelmarkt",
    name: "El Striezelmarkt de Dresde",
    city: "Dresde",
    regionName: "Sajonia",
    coords: [51.0504, 13.7373],
    month: 12,
    dateApprox: "de finales de noviembre al 24 de diciembre",
    durationDays: 30,
    category: "folklore",
    whatHappens:
      "El mercado de Navidad más antiguo de Alemania (1434) en la plaza del Altmarkt de la ciudad bombardeada y reconstruida: la pirámide de Navidad más alta del mundo (14 m, de los Erzgebirge), el Stollen gigante de 4 toneladas que desfila el segundo sábado de diciembre y se corta con un cuchillo de 1,6 m, cascanueces y ahumadores de madera de los pueblos mineros, y Glühwein a -5 grados. Tren desde Berlín o Leipzig, 1 h 30-2 h.",
    scores: { rareza: 5, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 7 },
    planTripAround: false,
    needsBooking: "Cama en Dresde en Adviento con semanas",
    links: [WIKI("https://es.wikipedia.org/wiki/Striezelmarkt")],
    meta: f(),
  },
];
