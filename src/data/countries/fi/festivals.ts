import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "fi-air-guitar-oulu",
    name: "El Campeonato Mundial de Guitarra Invisible",
    city: "Oulu",
    regionName: "Ostrobotnia del Norte",
    coords: [65.0121, 25.4651],
    month: 8,
    dateApprox: "el último fin de semana de agosto",
    durationDays: 3,
    category: "weird",
    whatHappens:
      "Desde 1996, veinte campeones nacionales (hay clasificatorios en Japón, Estados Unidos, Alemania, y en España a veces) tocan un minuto de guitarra imaginaria en un escenario en la plaza del mercado de Oulu ante 5.000 personas y un jurado que valora la técnica, el carisma y el «airness»; hay ronda con canción sorpresa, un desfile, y al final todos tocan juntos «Rockin' in the Free World» para la paz mundial. Es el festival más tonto y más serio de Finlandia, y está en el camino del tren a Laponia.",
    scores: { rareza: 10, espectacularidad: 7, facilidadAcceso: 9, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Ninguna (gratis, en la plaza); cama en Oulu ese fin de semana con semanas",
    links: [WIKI("https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Air_Guitar")],
    meta: f(),
  },
  {
    id: "fi-vappu",
    name: "Vappu, el Primero de Mayo",
    city: "Helsinki",
    regionName: "Helsinki",
    coords: [60.1675, 24.9527],
    month: 5,
    dateApprox: "30 de abril y 1 de mayo",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "El 30 de abril a las 18:00 los estudiantes le ponen una gorra blanca de bachiller a la estatua de Havis Amanda en el puerto (con grúa y 50.000 personas) y el país entero se pone la suya, y luego bebe sima (una limonada fermentada), come rosquillas y se emborracha en la calle hasta el 1 de mayo, cuando el picnic de resaca en el parque de Kaivopuisto reúne a 100.000 personas con monos de colores de facultad. Es la única vez que los finlandeses hablan con desconocidos, y el sol ya no se pone hasta las diez.",
    scores: { rareza: 6, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Ninguna; cama en Helsinki con semanas",
    links: [WIKI("https://en.wikipedia.org/wiki/Vappu")],
    meta: f(),
  },
  {
    id: "fi-juhannus",
    name: "Juhannus, el solsticio",
    city: "Helsinki (Seurasaari) y todo el país",
    regionName: "Finlandia",
    coords: [60.1858, 24.8842],
    month: 6,
    dateApprox: "el sábado entre el 20 y el 26 de junio (y la víspera)",
    durationDays: 2,
    category: "folklore",
    whatHappens:
      "La noche más corta (no se hace de noche en el sur, no oscurece en el norte) y el país entero se va a la cabaña del lago a hacer sauna, hogueras (kokko) en la orilla, beber y ahogarse (es la fiesta con más ahogados del año); las ciudades se vacían. En Helsinki, la isla-museo de Seurasaari hace la hoguera oficial con bodas tradicionales, bailes y el abedul en la puerta. Si no tienes cabaña con un finlandés, Seurasaari es la manera de verlo.",
    scores: { rareza: 6, espectacularidad: 7, facilidadAcceso: 8, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Ninguna; el transporte para el fin de semana y todo cierra: comprar comida el viernes",
    links: [WIKI("https://en.wikipedia.org/wiki/Midsummer#Finland")],
    meta: f(),
  },
  {
    id: "fi-eukonkanto",
    name: "El campeonato de llevar a la mujer a cuestas",
    city: "Sonkajärvi",
    regionName: "Savonia del Norte",
    coords: [63.6694, 27.5219],
    month: 7,
    dateApprox: "el primer fin de semana de julio",
    durationDays: 2,
    category: "weird",
    whatHappens:
      "Desde 1992, en un pueblo de 4.000 habitantes de Savonia: parejas de todo el mundo corren 253,5 metros con obstáculos de agua y troncos con la mujer cargada boca abajo a la espalda (la técnica «estonia», con las piernas por los hombros), y el ganador se lleva el peso de la mujer en cerveza; con música, cerveza y una explicación histórica de robo de novias en el siglo XIX. Es difícil de llegar sin coche (bus desde Iisalmi, que tiene tren) y se avisa: es una excursión de dos días para cinco minutos de carrera.",
    scores: { rareza: 10, espectacularidad: 6, facilidadAcceso: 3, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Tren a Iisalmi (5 h) y bus o taxi a Sonkajärvi (20 km); cama en Iisalmi",
    links: [WIKI("https://es.wikipedia.org/wiki/Transporte_de_esposas")],
    meta: f(),
  },
];
