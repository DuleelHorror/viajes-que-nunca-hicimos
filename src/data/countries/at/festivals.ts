import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "at-perchtenlauf-gastein",
    name: "Perchtenlauf del valle de Gastein",
    city: "Bad Gastein y Bad Hofgastein",
    regionName: "Salzburgo",
    coords: [47.1153, 13.1347],
    month: 1,
    dateApprox: "6 de enero, solo cada cuatro años (el próximo, 2030)",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "Las Perchten son los demonios de las noches oscuras entre Navidad y Reyes: los buenos, con tocados de dos metros cargados de espejos y santos; los malos, con máscaras de cuernos y pieles, que bailan, gritan y golpean el suelo para espantar el invierno. En Gastein desfilan unos 100 y solo cada cuatro años, así que el valle entero se vuelca. Hay Perchten menores casi cada 5 y 6 de enero por todo Salzburgo y el Tirol.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 7, nivelTurismo: 5 },
    planTripAround: true,
    needsBooking: "Alojamiento con un año de antelación en el valle; hay tren directo desde Salzburgo",
    links: [WIKI("https://de.wikipedia.org/wiki/Gasteiner_Perchtenlauf")],
    meta: f("La edición grande de Gastein es cuatrienal; confirmar el año"),
  },
  {
    id: "at-gloecklerlauf-ebensee",
    name: "Glöcklerlauf de Ebensee",
    city: "Ebensee",
    regionName: "Salzkammergut",
    coords: [47.8006, 13.7775],
    month: 1,
    dateApprox: "5 de enero, al anochecer",
    durationDays: 0.5,
    category: "folklore",
    whatHappens:
      "Cientos de hombres de blanco con enormes tocados de papel iluminados desde dentro (estrellas, ruedas, catedrales de hasta 15 kilos) corren en grupos por el pueblo a oscuras, en formaciones que dibujan figuras, con cencerros en la cintura. Es para espantar a los malos espíritus de la última noche oscura del año. Dura una hora y media, hace un frío que pela y es de las cosas más bonitas que se pueden ver en enero en Europa.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 7, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Sin entradas; dormir en Bad Ischl o Gmunden y volver en el último tren o quedarse en Ebensee",
    links: [WIKI("https://de.wikipedia.org/wiki/Gl%C3%B6cklerlauf")],
    meta: f(),
  },
  {
    id: "at-schemenlaufen-imst",
    name: "Schemenlaufen de Imst",
    city: "Imst",
    regionName: "Tirol",
    coords: [47.2394, 10.7383],
    month: 2,
    dateApprox: "un domingo de febrero, cada cuatro años (el próximo, 2028)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Un carnaval de máscaras talladas en madera que la UNESCO protege: los Roller (cascabeles y campanillas, saltando en parejas) y los Scheller (cencerros de 35 kilos, danza pesada), más brujas, osos, deshollinadores y gente lanzando agua. Solo hombres, solo del pueblo, solo cada cuatro años, y con 55.000 visitantes en un día en un pueblo de 10.000. Si te pilla el año, no lo dudes.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 7, nivelTurismo: 8 },
    planTripAround: true,
    needsBooking: "Tren a Imst-Pitztal desde Innsbruck (50 min); entradas al recorrido con antelación",
    links: [WIKI("https://de.wikipedia.org/wiki/Imster_Schemenlaufen")],
    meta: f("Cuatrienal: confirmar el año y la fecha exacta"),
  },
  {
    id: "at-almabtrieb",
    name: "Almabtrieb: la bajada del ganado",
    city: "Valles del Tirol y Salzburgo",
    regionName: "Tirol",
    coords: [47.3, 11.6],
    month: 9,
    dateApprox: "fines de semana de mediados de septiembre a principios de octubre",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Las vacas bajan del pasto de verano al valle coronadas con tocados de flores, ramas, espejos y cintas del tamaño de un sofá, con cencerros que se oyen a kilómetros, y el pueblo monta feria, banda y cerveza. Solo se adornan si no ha muerto nadie en el pasto ese verano, así que un rebaño sin flores significa algo. Cada valle tiene su fecha.",
    scores: { rareza: 6, espectacularidad: 8, facilidadAcceso: 6, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Mira el calendario de cada valle; los de Tirol suelen tener bus desde Innsbruck",
    links: [WIKI("https://es.wikipedia.org/wiki/Almabtrieb")],
    meta: f(),
  },
  {
    id: "at-krampuslauf",
    name: "Krampuslauf de Salzburgo y Gastein",
    city: "Salzburgo, Bad Gastein, Schladming",
    regionName: "Salzburgo",
    coords: [47.8095, 13.055],
    month: 12,
    dateApprox: "5 y 6 de diciembre, y fines de semana cercanos",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "El Krampus original, no el de Alto Adigio: demonios con máscaras talladas, pieles enteras de cabra, cuernos reales y cencerros de 20 kilos que bajan por las calles nevadas repartiendo varazos de verdad. En el valle de Gastein son cientos en cuadrillas de pueblo, casa por casa, con San Nicolás delante y el Krampus detrás. En Salzburgo ciudad es más desfile; en los valles es otra cosa y conviene no ponerse delante con la cámara.",
    scores: { rareza: 9, espectacularidad: 9, facilidadAcceso: 8, nivelTurismo: 6 },
    planTripAround: true,
    needsBooking: "Hoteles de temporada de esquí: reserva con meses; tren a Bad Gastein desde Salzburgo",
    links: [WIKI("https://es.wikipedia.org/wiki/Krampus")],
    meta: f("Cada pueblo anuncia su recorrido con pocas semanas"),
  },
];
