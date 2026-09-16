import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "ba-ajvatovica",
    name: "Ajvatovica",
    city: "Prusac (Donji Vakuf)",
    regionName: "Bosnia central",
    coords: [44.1, 17.4],
    month: 6,
    dateApprox: "último domingo de junio",
    durationDays: 1,
    category: "occult",
    whatHappens:
      "La peregrinación musulmana más grande de Europa: miles de bosniacos, muchos a caballo con banderas verdes, suben a una grieta en la roca que según la leyenda se abrió tras 40 días de oración de un derviche en el siglo XVI para dejar pasar el agua a Prusac. Prohibida por Tito en 1947 y recuperada en 1990, tiene rezos, cabalgata, puestos y un aire de romería otomana en la montaña.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 4, nivelTurismo: 1 },
    planTripAround: true,
    needsBooking: "Bus a Donji Vakuf desde Sarajevo (2 h) y taxi o lanzadera a Prusac ese día",
    links: [WIKI("https://en.wikipedia.org/wiki/Ajvatovica")],
    meta: f(),
  },
  {
    id: "ba-mars-mira-srebrenica",
    name: "La Marcha de la Paz y el 11 de julio en Potočari",
    city: "Nezuk → Potočari (Srebrenica)",
    regionName: "Republika Srpska",
    coords: [44.1594, 19.2986],
    month: 7,
    dateApprox: "del 8 al 11 de julio",
    durationDays: 4,
    category: "historical",
    whatHappens:
      "Miles de personas recorren en tres días y en sentido inverso los 100 km de la «columna de la muerte», la ruta por el bosque por la que los hombres de Srebrenica intentaron escapar en 1995, durmiendo en campamentos, y llegan el 11 a Potočari para el entierro colectivo de los identificados ese año. Es la conmemoración más importante de la Bosnia de posguerra y admite a cualquiera que quiera andar.",
    scores: { rareza: 9, espectacularidad: 6, facilidadAcceso: 5, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Inscripción gratuita en la organización de la marcha; saco, tienda y respeto. Buses especiales a Nezuk desde Sarajevo",
    links: [WIKI("https://es.wikipedia.org/wiki/Masacre_de_Srebrenica")],
    meta: f(),
  },
  {
    id: "ba-mostar-saltos",
    name: "Los saltos del puente de Mostar",
    city: "Mostar",
    regionName: "Herzegovina-Neretva",
    coords: [43.3372, 17.8151],
    month: 7,
    dateApprox: "último fin de semana de julio",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "La competición de saltos desde el puente (24 metros al Neretva a 12 °C) que se celebra desde 1968 y que la guerra interrumpió once años: los miembros del club Mostari, en bañador y con la piel roja de tanto golpe, se tiran de cabeza y de pie ante 10.000 personas en las orillas. El resto del año saltan por propinas: 25 € reunidos entre los turistas y salta uno.",
    scores: { rareza: 6, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 7 },
    planTripAround: false,
    needsBooking: "Ninguna; llegar pronto a las orillas",
    links: [WIKI("https://es.wikipedia.org/wiki/Stari_Most")],
    meta: f(),
  },
  {
    id: "ba-sarajevo-film-festival",
    name: "Sarajevo Film Festival",
    city: "Sarajevo",
    regionName: "Sarajevo",
    coords: [43.8563, 18.4131],
    month: 8,
    dateApprox: "mediados de agosto",
    durationDays: 8,
    category: "festival",
    whatHappens:
      "Nació en 1995 durante el asedio, con películas pasadas de contrabando por el túnel y proyectadas en sótanos con 15.000 espectadores bajo los morteros. Hoy es el festival más importante del sureste de Europa, con estrellas en la alfombra roja del Teatro Nacional, proyecciones al aire libre en el Metalac y la ciudad entera en las terrazas hasta las tres. Es la Sarajevo que ganó.",
    scores: { rareza: 5, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Entradas online desde julio; alojamiento con meses esa semana",
    links: [WIKI("https://es.wikipedia.org/wiki/Festival_de_Cine_de_Sarajevo")],
    meta: f(),
  },
];
