import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "cn-ano-nuevo-chino",
    name: "Año Nuevo chino (Fiesta de la Primavera)",
    city: "Todo el país",
    regionName: "China",
    coords: [39.9042, 116.4074],
    month: 2,
    dateApprox: "17 de febrero de 2027 (fecha lunar; 2026 fue el 17 de febrero también)",
    durationDays: 15,
    category: "folklore",
    whatHappens:
      "La mayor migración humana del planeta: 9.000 millones de desplazamientos en 40 días, con todos los trenes llenos y las ciudades vacías. Petardos hasta las cuatro, sobres rojos, ferias de templo en Pekín, y el día 15, la Fiesta de los Faroles. Para el viajero es una trampa: billetes imposibles, todo cerrado una semana y luego todo lleno. Verlo desde una ciudad, quieto, es una experiencia; moverse, un error.",
    scores: { rareza: 6, espectacularidad: 8, facilidadAcceso: 3, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "No viajar dentro de China la semana antes ni la semana después; los trenes se agotan al minuto de salir a la venta",
    links: [WIKI("https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo_chino")],
    meta: f("Fecha lunar: cambia cada año"),
  },
  {
    id: "cn-dia-nacional-golden-week",
    name: "Semana Dorada del 1 de octubre",
    city: "Todo el país (Tiananmén, sobre todo)",
    regionName: "China",
    coords: [39.9042, 116.4074],
    month: 10,
    dateApprox: "del 1 al 7 de octubre",
    durationDays: 7,
    category: "wtf",
    whatHappens:
      "El aniversario de la República Popular: izado de bandera en Tiananmén al amanecer con 100.000 personas, flores gigantes, y una semana de vacaciones en la que 800 millones de chinos visitan a la vez los mismos sitios. La Muralla, los guerreros y Hongya Dong se convierten en un río humano; los trenes se agotan. Es un espectáculo de masas en sí mismo y hay que evitarlo o buscarlo, sin término medio.",
    scores: { rareza: 7, espectacularidad: 7, facilidadAcceso: 5, nivelTurismo: 10 },
    planTripAround: false,
    needsBooking: "Evitar viajar del 30 de septiembre al 8 de octubre; si se coincide, quedarse quieto en una ciudad grande",
    links: [WIKI("https://es.wikipedia.org/wiki/D%C3%ADa_Nacional_de_la_Rep%C3%BAblica_Popular_China")],
    meta: f(),
  },
  {
    id: "cn-harbin-hielo",
    name: "Festival del Hielo y la Nieve de Harbin",
    city: "Harbin",
    regionName: "Heilongjiang",
    coords: [45.7732, 126.6588],
    month: 1,
    dateApprox: "del 5 de enero a finales de febrero",
    durationDays: 50,
    category: "weird",
    whatHappens:
      "Una ciudad entera de castillos, catedrales y torres de hielo del río Songhua, iluminada por dentro con LED de colores, a −25 °C, en la ciudad más rusa de China (catedral ortodoxa de Santa Sofía, pan negro). Es el mayor festival de hielo del mundo y una locura kitsch de dimensiones soviéticas: 250.000 m³ de hielo, toboganes de 500 metros y nadadores de invierno en el río. Está a 8 h de Pekín en alta velocidad.",
    scores: { rareza: 8, espectacularidad: 10, facilidadAcceso: 7, nivelTurismo: 8 },
    planTripAround: true,
    needsBooking: "Alta velocidad Pekín–Harbin y hotel con antelación; ropa de −30 en serio",
    links: [WIKI("https://es.wikipedia.org/wiki/Festival_Internacional_de_Esculturas_de_Hielo_y_Nieve_de_Harbin")],
    meta: f(),
  },
  {
    id: "cn-naadam-mongolia-interior",
    name: "Naadam de Mongolia Interior",
    city: "Estepa de Xilinhot y Hohhot",
    regionName: "Mongolia Interior",
    coords: [43.95, 116.08],
    month: 7,
    dateApprox: "finales de julio o principios de agosto (fecha variable)",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "La versión china del Naadam: lucha, carreras de caballos y tiro con arco en la estepa de Xilingol, con yurtas de turismo estatal alrededor y un espectáculo de apertura con luces. Es menos auténtico que el de Mongolia y más accesible (alta velocidad a Hohhot y bus); para el que no vaya a cruzar la frontera, es la manera de verlo.",
    scores: { rareza: 6, espectacularidad: 7, facilidadAcceso: 5, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Fecha anunciada con poco margen por la región; preguntar en Hohhot",
    links: [WIKI("https://es.wikipedia.org/wiki/Naadam")],
    meta: f("Fecha y sitio cambian cada año", "baja"),
  },
];
