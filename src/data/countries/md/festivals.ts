import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "md-martisor",
    name: "Mărțișor",
    city: "Todo el país",
    regionName: "Moldavia",
    coords: [47.0105, 28.8638],
    month: 3,
    dateApprox: "del 1 al 10 de marzo",
    durationDays: 10,
    category: "folklore",
    whatHappens:
      "El mismo cordón rojo y blanco que en Rumanía, con un festival de música de diez días en Chișinău que se celebra desde 1966 (el más antiguo del país) y puestos en cada esquina. Los árboles se llenan de hilos cuando florecen. Es la fiesta que Moldavia comparte con Rumanía y que la URSS no consiguió quitarle.",
    scores: { rareza: 5, espectacularidad: 4, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://es.wikipedia.org/wiki/M%C4%83r%C8%9Bi%C8%99or")],
    meta: f(),
  },
  {
    id: "md-9-mayo-y-dia-europa",
    name: "El 9 de mayo: Victoria y Europa a la vez",
    city: "Chișinău y Tiraspol",
    regionName: "Moldavia",
    coords: [47.0072, 28.8267],
    month: 5,
    dateApprox: "9 de mayo",
    durationDays: 1,
    category: "wtf",
    whatHappens:
      "El día en que Moldavia se parte en dos en la misma fecha: en el memorial Eternitate, los prorrusos con claveles y cintas de San Jorge (prohibidas desde 2022, así que las llevan escondidas) celebran la Victoria soviética; en la plaza central, el gobierno celebra el Día de Europa con banderas azules; y en Tiraspol, desfile con tanques y veteranos como en 1985. Es el termómetro del país en un solo día.",
    scores: { rareza: 8, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; en Tiraspol, la tarjeta de 10 h y sin cámara en la cara de los soldados",
    links: [WIKI("https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Victoria_(9_de_mayo)")],
    meta: f(),
  },
  {
    id: "md-dia-republica-transnistria",
    name: "Día de la República de Transnistria",
    city: "Tiraspol",
    regionName: "Transnistria",
    coords: [46.8403, 29.6433],
    month: 9,
    dateApprox: "2 de septiembre",
    durationDays: 1,
    category: "wtf",
    whatHappens:
      "El aniversario de la independencia de un país que no existe: desfile militar por la avenida 25 de Octubre con el ejército transnistrio, cadetes, veteranos de 1992, tanques algunos años, discursos ante el Sóviet Supremo, bailes con trajes y fuegos artificiales sobre el Dniéster. Es la URSS de desfile televisado, con la tarjeta de migración de 10 horas en el bolsillo.",
    scores: { rareza: 10, espectacularidad: 7, facilidadAcceso: 8, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Marshrutka desde Chișinău temprano; reserva de hotel en Tiraspol si quieres las 24 h. Sin cámara a los soldados",
    links: [WIKI("https://es.wikipedia.org/wiki/Transnistria")],
    meta: f("Depende de la situación política de cada año", "media"),
  },
  {
    id: "md-ziua-vinului",
    name: "Ziua Vinului, el Día Nacional del Vino",
    city: "Chișinău",
    regionName: "Chișinău",
    coords: [47.0245, 28.8322],
    month: 10,
    dateApprox: "primer fin de semana de octubre",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "La plaza de la Gran Asamblea Nacional se convierte en la feria de las 60 bodegas del país, con copa oficial de 5 € que se rellena en cada stand, bandas folclóricas, sarmale y mămăligă en cada puesto y trenes especiales a Cricova. Moldavia vive del vino (fue la bodega de la URSS) y lo celebra sin complejos. Fiesta nacional y el mejor momento para llegar.",
    scores: { rareza: 6, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Ninguna; la copa se compra en la plaza",
    links: [WIKI("https://en.wikipedia.org/wiki/National_Wine_Day_(Moldova)")],
    meta: f(),
  },
];
