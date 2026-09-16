import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "mn-tsagaan-sar",
    name: "Tsagaan Sar, el año nuevo lunar",
    city: "Todo el país",
    regionName: "Mongolia",
    coords: [47.8864, 106.9057],
    month: 2,
    dateApprox: "del 18 al 20 de febrero en 2026 (fecha lunar)",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "El «mes blanco»: tres días de visitas de casa en casa por orden de edad, con una torre de galletas ul boov, un cordero entero cocido con el rabo hacia el mayor, vodka en cada casa y el saludo zolgokh (los brazos del joven bajo los del viejo). A −25 °C, con la ciudad cerrada y todo el mundo de deel de seda. Los extranjeros, si tienen a alguien que los invite, se convierten en familia durante tres días.",
    scores: { rareza: 8, espectacularidad: 6, facilidadAcceso: 6, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Hace falta que te inviten; los hostales lo consiguen. Transporte y tiendas cerrados",
    links: [WIKI("https://es.wikipedia.org/wiki/Tsagaan_Sar")],
    meta: f("Fecha lunar: cambia cada año"),
  },
  {
    id: "mn-naadam",
    name: "Naadam",
    city: "Ulán Bator (y cada pueblo, en fechas cercanas)",
    regionName: "Mongolia",
    coords: [47.8864, 106.9057],
    month: 7,
    dateApprox: "del 11 al 13 de julio",
    durationDays: 3,
    category: "festival",
    whatHappens:
      "Los «tres juegos de los hombres»: lucha sin categorías de peso con bailes de águila, tiro con arco a 75 metros y carreras de caballos de 25 km con jinetes de seis años, en la estepa junto a la capital, con la ceremonia de apertura en el estadio. Es la fiesta nacional, viene con desfile de guardias a caballo y con todo el país borracho de airag (leche de yegua fermentada). Los Naadam de pueblo, la semana antes, son más brutos y mejores.",
    scores: { rareza: 8, espectacularidad: 9, facilidadAcceso: 8, nivelTurismo: 7 },
    planTripAround: true,
    needsBooking: "Entradas del estadio con antelación por agencia; hoteles llenos; para un Naadam rural, preguntar en los hostales qué sum lo hace esa semana",
    links: [WIKI("https://es.wikipedia.org/wiki/Naadam")],
    meta: f(),
  },
  {
    id: "mn-eagle-festival-olgii",
    name: "Festival del Águila Dorada de Ölgii",
    city: "Ölgii",
    regionName: "Bayan-Ölgii",
    coords: [48.9683, 89.9625],
    month: 10,
    dateApprox: "primer fin de semana de octubre",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "Los kazajos de las montañas del oeste, con gorros de zorro y abrigos bordados, compiten con sus águilas reales: llamadas desde una colina, capturas de un señuelo al galope, y luego lucha a caballo por una piel de cabra y una carrera en la que las mujeres persiguen a los hombres a látigo. Es el festival más fotografiado de Mongolia y está a 1.600 km de la capital.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 3, nivelTurismo: 7 },
    planTripAround: true,
    needsBooking: "Vuelo a Ölgii (3 h) con meses de antelación; alojamiento escaso; frío serio",
    links: [WIKI("https://en.wikipedia.org/wiki/Golden_Eagle_Festival")],
    meta: f(),
  },
  {
    id: "mn-ice-festival-khovsgol",
    name: "Festival del Hielo del lago Khövsgöl",
    city: "Khatgal",
    regionName: "Khövsgöl",
    coords: [50.44, 100.16],
    month: 3,
    dateApprox: "2 y 3 de marzo",
    durationDays: 2,
    category: "weird",
    whatHappens:
      "Sobre un lago helado de 136 km, con hielo de un metro: carreras de caballos sobre hielo, trineos tirados por caballos, esculturas, lucha, y chamanes tsaatan (los pastores de renos) bajando de la taiga. A −30 °C, en el norte profundo, a 700 km de la capital. Es el invierno mongol convertido en fiesta y casi nadie de fuera lo ha visto.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 2, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Vuelo a Mörön y jeep de 100 km; agencia obligatoria en la práctica",
    links: [WIKI("https://en.wikipedia.org/wiki/Lake_Khovsgol")],
    meta: f("Fechas fijadas por la provincia cada año", "baja"),
  },
];
