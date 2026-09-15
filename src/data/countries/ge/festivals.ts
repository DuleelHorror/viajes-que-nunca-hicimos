import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "ge-berikaoba",
    name: "Berikaoba",
    city: "Pueblos de Kartli y Kajetia",
    regionName: "Georgia rural",
    coords: [41.9, 44.5],
    month: 3,
    dateApprox: "semanas antes de la Cuaresma ortodoxa (febrero-marzo)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Un carnaval pagano de fertilidad que sobrevivió a la Iglesia y a la URSS: hombres disfrazados con pieles y máscaras de cabra, un «novio», una «novia» (también hombre) y un rey de pega recorren el pueblo pidiendo vino y comida, improvisando una obra obscena y acabando en pelea ritual. Cada vez se hace en menos pueblos y hay que preguntar dónde ese año.",
    scores: { rareza: 10, espectacularidad: 6, facilidadAcceso: 3, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Preguntar en Tiflis a alguien de folclore: no hay calendario público fiable",
    links: [WIKI("https://en.wikipedia.org/wiki/Berikaoba")],
    meta: f("Fecha y pueblo cambian cada año; sin verificar", "baja"),
  },
  {
    id: "ge-lomisoba",
    name: "Lomisoba",
    city: "Monasterio de Lomisi, Mleta",
    regionName: "Mtskheta-Mtianeti",
    coords: [42.35, 44.53],
    month: 6,
    dateApprox: "el miércoles siete semanas después de la Pascua ortodoxa",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Miles de personas suben andando de noche a una ermita a 2.200 metros en la Carretera Militar para sacrificar ovejas y gallinas a san Jorge (que aquí es un dios pagano de la montaña con nombre cristiano), pasar por dentro de una cadena de hierro para pedir un deseo y beber. La Iglesia intenta cada año que no se maten animales y cada año se matan. Sangre, humo y cantos a las cinco de la mañana.",
    scores: { rareza: 10, espectacularidad: 8, facilidadAcceso: 4, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Marshrutka a Mleta y subida de 2 h; sin alojamiento arriba, se vuelve de día",
    links: [WIKI("https://en.wikipedia.org/wiki/Lomisoba")],
    meta: f("Fecha móvil ligada a la Pascua ortodoxa"),
  },
  {
    id: "ge-rtveli",
    name: "Rtveli, la vendimia en Kajetia",
    city: "Telavi y los pueblos de Kajetia",
    regionName: "Kajetia",
    coords: [41.9195, 45.4731],
    month: 9,
    dateApprox: "de mediados de septiembre a mediados de octubre",
    durationDays: 7,
    category: "folklore",
    whatHappens:
      "La vendimia en el país que lleva 8.000 años haciendo vino en tinajas enterradas (qvevri): las familias invitan a quien pase a pisar uva, se hacen supras (banquetes con brindis de una hora dirigidos por un tamada) y se canta polifonía hasta caerse. No es un festival organizado; es un mes en que todo el país está borracho y hospitalario, y hay guesthouses que te apuntan a la cuadrilla.",
    scores: { rareza: 7, espectacularidad: 6, facilidadAcceso: 8, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Guesthouse en Telavi o Sighnaghi (marshrutka de 2 h desde Tiflis) que ofrezca participar",
    links: [WIKI("https://en.wikipedia.org/wiki/Rtveli")],
    meta: f(),
  },
  {
    id: "ge-tbilisoba",
    name: "Tbilisoba",
    city: "Tiflis",
    regionName: "Tiflis",
    coords: [41.7151, 44.8271],
    month: 10,
    dateApprox: "un fin de semana de octubre (suele ser el primero o el segundo)",
    durationDays: 2,
    category: "festival",
    whatHappens:
      "La fiesta de la ciudad, inventada en 1979 por el partido y adoptada con entusiasmo: el casco viejo se llena de puestos de vino de cada región, churchkhela, lucha georgiana, bailes con puñales, conciertos gratis y gente asando cerdo en la calle. Es el momento de probar todo el vino del país en una tarde.",
    scores: { rareza: 5, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 5 },
    planTripAround: false,
    needsBooking: "Ninguna; hoteles algo más llenos ese fin de semana",
    links: [WIKI("https://en.wikipedia.org/wiki/Tbilisoba")],
    meta: f("La fecha la fija el ayuntamiento cada año"),
  },
];
