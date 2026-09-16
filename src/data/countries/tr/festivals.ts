import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "tr-lucha-camellos-selcuk",
    name: "La lucha de camellos de Selçuk",
    city: "Selçuk (Éfeso)",
    regionName: "Esmirna",
    coords: [37.9503, 27.3689],
    month: 1,
    dateApprox: "tercer domingo de enero (18 de enero en 2026)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Cien camellos tülü en celo, con mantas bordadas y campanas, empujándose por parejas hasta que uno se sienta o huye, en un descampado junto a las ruinas de Éfeso, con 20.000 personas comiendo salchicha de camello, bebiendo rakı a las once de la mañana y una banda de zurna y tambor. Es la mayor lucha de camellos del mundo, una tradición nómada de mil años que el Egeo ha convertido en su Super Bowl.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 7, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Tren desde Esmirna a Selçuk (1 h 30); llegar a las 9",
    links: [WIKI("https://es.wikipedia.org/wiki/Lucha_de_camellos")],
    meta: f(),
  },
  {
    id: "tr-cildir-hielo",
    name: "Festival del Caballo de Oro sobre el hielo del Çıldır",
    city: "Çıldır (Ardahan)",
    regionName: "Ardahan",
    coords: [41.05, 43.25],
    month: 2,
    dateApprox: "un fin de semana de enero o febrero, cuando el hielo aguanta",
    durationDays: 2,
    category: "weird",
    whatHappens:
      "Sobre el lago helado a 1.960 metros: carreras de caballos con trineos, esculturas de hielo, pesca por agujeros, fútbol sobre hielo y el cordero al horno de tierra, con −25 °C y la gente de Ardahan y Kars en trajes de fieltro. Es la excusa para hacer el Doğu Ekspresi en su mejor mes, el de la nieve.",
    scores: { rareza: 8, espectacularidad: 7, facilidadAcceso: 4, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Minibús Kars–Çıldır; el Doğu en invierno se agota más aún",
    links: [WIKI("https://es.wikipedia.org/wiki/Lago_%C3%87%C4%B1ld%C4%B1r")],
    meta: f("Fecha fijada por la provincia según el hielo", "baja"),
  },
  {
    id: "tr-nevruz",
    name: "Nevruz",
    city: "Diyarbakır y el sureste (y Kazlıçeşme, en Estambul)",
    regionName: "Turquía",
    coords: [41.0, 28.92],
    month: 3,
    dateApprox: "21 de marzo",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "El año nuevo kurdo y persa: hogueras que se saltan, ropa de colores, bailes en corro (halay) de miles de personas y, en Diyarbakır, la mayor concentración kurda del mundo, con política de fondo y policía alrededor. En Estambul se celebra en la explanada de Kazlıçeşme, junto a Yedikule, con concierto y control de acceso. Fue prohibido hasta los noventa y por eso importa.",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 8, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; en Diyarbakır, mirar las noticias esa semana",
    links: [WIKI("https://es.wikipedia.org/wiki/Nouruz")],
    meta: f(),
  },
  {
    id: "tr-kirkpinar",
    name: "Kırkpınar, la lucha en aceite",
    city: "Edirne",
    regionName: "Tracia",
    coords: [41.6771, 26.5557],
    month: 7,
    dateApprox: "última semana de junio o primera de julio (29 de junio – 5 de julio en 2026)",
    durationDays: 7,
    category: "folklore",
    whatHappens:
      "El torneo deportivo más antiguo del mundo en activo (desde 1360): mil luchadores untados en aceite de oliva, con pantalones de cuero de búfalo, peleando en un prado durante tres días hasta que uno mete la mano en el pantalón del otro y lo levanta, con bandas de davul y zurna, el pregonero cantando los nombres y el ganador coronado başpehlivan con un cinturón de oro. Edirne está a 2 h 30 de Estambul en bus, y es la antigua capital otomana con la mejor mezquita de Sinan.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 8, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Bus desde Estambul y cama en Edirne con semanas; entrada al estadio de Sarayiçi, 5-10 €",
    links: [WIKI("https://es.wikipedia.org/wiki/K%C4%B1rkp%C4%B1nar")],
    meta: f(),
  },
  {
    id: "tr-seb-i-arus",
    name: "Şeb-i Arus, la noche de bodas de Rumi",
    city: "Konya",
    regionName: "Konya",
    coords: [37.8746, 32.4932],
    month: 12,
    dateApprox: "del 7 al 17 de diciembre (el 17 es la noche grande)",
    durationDays: 10,
    category: "occult",
    whatHappens:
      "El aniversario de la muerte de Rumi (1273), que los mevlevíes llaman su «noche de bodas» con Dios: diez días de semas de derviches en el pabellón de deportes de Konya con miles de personas en silencio, conciertos de ney, lecturas del Masnavi y la ciudad llena de peregrinos de Irán, Pakistán y Occidente. Es el sufismo en versión estadio y la única vez que Konya se llena de forasteros.",
    scores: { rareza: 7, espectacularidad: 8, facilidadAcceso: 9, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Entradas del sema del 17 con meses (gratis, por el ayuntamiento); hoteles llenos",
    links: [WIKI("https://es.wikipedia.org/wiki/Yalal_ad-Din_Muhammad_Rumi")],
    meta: f(),
  },
];
