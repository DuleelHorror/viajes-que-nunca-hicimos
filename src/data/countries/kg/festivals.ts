import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "kg-nooruz",
    name: "Nooruz",
    city: "Biskek (plaza Ala-Too e hipódromo) y todo el país",
    regionName: "Kirguistán",
    coords: [42.8746, 74.5698],
    month: 3,
    dateApprox: "del 21 al 24 de marzo",
    durationDays: 4,
    category: "folklore",
    whatHappens:
      "El año nuevo persa hecho fiesta nacional: yurtas en la plaza Ala-Too, sümölök (una papilla de trigo germinado que se remueve toda la noche en un caldero entre canciones), kok-boru en el hipódromo (polo a caballo con una cabra decapitada, y en serio), lucha, aitysh (duelos de improvisación con komuz), todo el mundo con el kalpak blanco y comida gratis. La URSS lo prohibió y por eso se celebra con cuatro días.",
    scores: { rareza: 7, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: true,
    needsBooking: "Ninguna; el kok-boru del hipódromo se anuncia con días",
    links: [WIKI("https://es.wikipedia.org/wiki/Nouruz")],
    meta: f(),
  },
  {
    id: "kg-birds-of-prey",
    name: "Festival de las Aves de Presa de Bokonbayevo",
    city: "Bokonbayevo (orilla sur del Issyk-Kul)",
    regionName: "Issyk-Kul",
    coords: [42.1167, 76.9833],
    month: 8,
    dateApprox: "un fin de semana de agosto (lo fija CBT cada año)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Los berkutchi, cazadores con águila real, y los cetreros de halcón de la orilla sur compiten en un prado junto al lago: las águilas se lanzan desde una colina sobre una piel de zorro arrastrada a caballo, hay galgos taigan, tiro con arco y juegos a caballo (kyz kuumai: el chico persigue a la chica y, si no la alcanza, ella le da con el látigo). Lo organiza la cooperativa CBT de Bokonbayevo y va gente de la zona con alguna furgoneta de turistas.",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 5, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Marshrutka de la orilla sur y preguntar en CBT Bokonbayevo la fecha y el prado",
    links: [WIKI("https://en.wikipedia.org/wiki/Bokonbayevo")],
    meta: f("Fecha y sitio los fija CBT cada primavera", "media"),
  },
  {
    id: "kg-independencia-kok-boru",
    name: "Día de la Independencia: kok-boru en el hipódromo",
    city: "Biskek",
    regionName: "Biskek",
    coords: [42.87, 74.53],
    month: 8,
    dateApprox: "31 de agosto (en 2026, celebraciones el 11 y 12 de septiembre por la cumbre de la OCS y los Juegos Nómadas)",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "La fiesta nacional (1991) con desfile en Ala-Too, yurtas y, en el hipódromo, la final de kok-boru entre equipos de provincias con 10.000 personas gritando y un chivo de 40 kilos volando de silla en silla, más carreras de caballos (at-chabysh) de 20 km. Es la manera de ver el deporte nacional en versión estadio sin tener que esperar a los Juegos Nómadas.",
    scores: { rareza: 8, espectacularidad: 9, facilidadAcceso: 9, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Ninguna; marshrutka al hipódromo desde el centro",
    links: [WIKI("https://en.wikipedia.org/wiki/Independence_Day_(Kyrgyzstan)")],
    meta: f("En 2026 la fecha se movió; comprobar cada año"),
  },
  {
    id: "kg-juegos-nomadas",
    name: "Los Juegos Nómadas Mundiales",
    city: "Cholpon-Ata y Biskek (edición 2026); la siguiente, por decidir",
    regionName: "Issyk-Kul",
    coords: [42.65, 77.0833],
    month: 9,
    dateApprox: "cada dos años a principios de septiembre; la de 2026 fue del 31 de agosto al 6 de septiembre; la próxima, en 2028",
    durationDays: 7,
    category: "festival",
    whatHappens:
      "Los Juegos Olímpicos de la estepa: 37 deportes (kok-boru, lucha a caballo, cetrería, tiro con arco montado, toguz korgool, lucha en aceite) con 89 países en el hipódromo de Cholpon-Ata y un campamento de yurtas en el valle de Kyrchyn donde cada provincia monta su aldea con comida y música. Kirguistán los inventó en 2014 y los recuperó en 2026 tras las ediciones de Turquía y Kazajistán. Si cae en tu año, es el mejor motivo para venir.",
    scores: { rareza: 9, espectacularidad: 10, facilidadAcceso: 7, nivelTurismo: 6 },
    planTripAround: true,
    needsBooking: "Alojamiento en Cholpon-Ata con meses; entradas en la web oficial; la sede de 2028, sin anunciar",
    links: [WIKI("https://es.wikipedia.org/wiki/Juegos_Mundiales_N%C3%B3madas")],
    meta: f("La edición de 2026 ya pasó; la sede de 2028 no está confirmada", "baja"),
  },
];
