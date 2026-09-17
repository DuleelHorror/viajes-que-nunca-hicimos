import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "gr-chios-guerra-cohetes",
    name: "La guerra de cohetes de Vrontados (Chios)",
    city: "Vrontados, Chios",
    regionName: "Egeo norte",
    coords: [38.4028, 26.1344],
    month: 4,
    dateApprox: "la noche del Sábado Santo ortodoxo (abril, a veces mayo)",
    durationDays: 1,
    category: "weird",
    whatHappens:
      "Dos parroquias del pueblo de Vrontados, con las iglesias a 400 metros una de otra, se disparan decenas de miles de cohetes caseros a medianoche mientras dentro se celebra la misa de Resurrección: el objetivo es dar al campanario del otro, el cielo se pone naranja, las casas se cubren con redes y planchas, y al día siguiente las dos parroquias declaran que han ganado y quedan para el año que viene. Empezó contra los otomanos con cañones de verdad. Ferry o vuelo desde Atenas.",
    scores: { rareza: 10, espectacularidad: 9, facilidadAcceso: 5, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Vuelo o ferry nocturno Pireo–Chios (8 h) y cama en Chios con un mes; la Pascua ortodoxa cambia cada año",
    links: [WIKI("https://en.wikipedia.org/wiki/Rouketopolemos")],
    meta: f("Ligado a la Pascua ortodoxa"),
  },
  {
    id: "gr-anastenaria",
    name: "Anastenaria, los que andan sobre brasas",
    city: "Langadas (Tesalónica) y Agia Eleni (Serres)",
    regionName: "Macedonia",
    coords: [40.75, 23.0667],
    month: 5,
    dateApprox: "21 al 23 de mayo (San Constantino y Santa Elena)",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "Descendientes de refugiados de Tracia oriental bailan en trance durante horas al son de la lira y el tambor con los iconos de San Constantino en las manos, y al anochecer cruzan descalzos una alfombra de brasas de tres metros sin quemarse, repetidas veces, mientras la Iglesia ortodoxa lo llama paganismo y ellos lo llaman fe; con sacrificio de un toro y procesión. Es el rito más raro de Grecia y está a 20 km de Tesalónica en bus.",
    scores: { rareza: 9, espectacularidad: 8, facilidadAcceso: 7, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Ninguna; bus urbano de Tesalónica a Langadas (45 min) y volver tarde",
    links: [WIKI("https://en.wikipedia.org/wiki/Anastenaria")],
    meta: f(),
  },
  {
    id: "gr-carnaval-patras",
    name: "El carnaval de Patras",
    city: "Patras",
    regionName: "Acaya",
    coords: [38.2466, 21.7346],
    month: 2,
    dateApprox: "de mediados de enero al Lunes Limpio (febrero o principios de marzo)",
    durationDays: 40,
    category: "folklore",
    whatHappens:
      "El carnaval más grande de Grecia, de origen veneciano: seis semanas de bailes, la caza del tesoro por equipos, el desfile de los niños y el gran desfile del último domingo con 50.000 disfrazados y carrozas satíricas, que acaba de noche en el puerto quemando al Rey del Carnaval con fuegos artificiales. El Lunes Limpio siguiente, cometas y ayuno. Tren o bus desde Atenas, 2 h 30.",
    scores: { rareza: 5, espectacularidad: 8, facilidadAcceso: 9, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Cama en Patras el último fin de semana con semanas; Proastiakós o KTEL desde Atenas",
    links: [WIKI("https://en.wikipedia.org/wiki/Patras_Carnival")],
    meta: f("Ligado a la cuaresma ortodoxa"),
  },
  {
    id: "gr-epidauro",
    name: "El festival de Epidauro",
    city: "Epidauro",
    regionName: "Argólida",
    coords: [37.5961, 23.0792],
    month: 7,
    dateApprox: "los viernes y sábados de julio y agosto",
    durationDays: 60,
    category: "festival",
    whatHappens:
      "Tragedias de Esquilo, Sófocles y Eurípides (y alguna comedia de Aristófanes) en el teatro del siglo IV a. C. con la mejor acústica del mundo (se oye una cerilla desde la fila 55), 14.000 personas al anochecer, con sobretítulos en inglés y los grillos de los pinos, desde 1955. Buses especiales desde Atenas y Nafplio para cada función. Entradas de 10-60 €.",
    scores: { rareza: 6, espectacularidad: 9, facilidadAcceso: 8, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "Entradas y bus del festival (greekfestival.gr) con semanas; o KTEL a Nafplio y bus local",
    links: [WIKI("https://en.wikipedia.org/wiki/Athens_Epidaurus_Festival")],
    meta: f(),
  },
];
