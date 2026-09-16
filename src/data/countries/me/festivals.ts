import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "me-mimosa-herceg-novi",
    name: "La Fiesta de la Mimosa",
    city: "Herceg Novi",
    regionName: "Bahía de Kotor",
    coords: [42.4531, 18.5375],
    month: 2,
    dateApprox: "los fines de semana de febrero (a veces desde finales de enero)",
    durationDays: 20,
    category: "folklore",
    whatHappens:
      "Desde 1969, la ciudad de la boca de la bahía celebra que en febrero florece la mimosa: desfiles con majorettes y bandas, ramos de mimosa que se regalan por la calle, pescado y vino en la Riva, y una fiesta de invierno que era del sindicato yugoslavo y sigue igual. Es el Adriático fuera de temporada con flores amarillas y viejos bailando.",
    scores: { rareza: 6, espectacularidad: 5, facilidadAcceso: 9, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Ninguna; bus desde Kotor, 1 h",
    links: [WIKI("https://en.wikipedia.org/wiki/Herceg_Novi")],
    meta: f(),
  },
  {
    id: "me-independencia-21-mayo",
    name: "El Día de la Independencia",
    city: "Podgorica y Cetinje",
    regionName: "Montenegro",
    coords: [42.4304, 19.2594],
    month: 5,
    dateApprox: "21 y 22 de mayo",
    durationDays: 2,
    category: "historical",
    whatHappens:
      "El aniversario del referéndum de 2006 (el 55,5 % que rompió con Serbia por un margen de 2.000 votos): banderas rojas con el águila dorada, conciertos en Podgorica, ceremonias en Cetinje, fuegos y una mitad del país que celebra mientras la otra, la que se siente serbia, mira. Dos días festivos con todo cerrado y las playas empezando.",
    scores: { rareza: 5, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; buses con horario de festivo",
    links: [WIKI("https://en.wikipedia.org/wiki/Independence_Day_(Montenegro)")],
    meta: f(),
  },
  {
    id: "me-boka-night",
    name: "Bokeljska noć, la noche de la Boka",
    city: "Kotor",
    regionName: "Bahía de Kotor",
    coords: [42.4247, 18.7712],
    month: 8,
    dateApprox: "un sábado de la segunda mitad de agosto (22 de agosto en 2026)",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Al anochecer, barcas decoradas e iluminadas desfilan por la bahía frente a las murallas compitiendo por la más bonita (un barco pirata, un dragón, un submarino de cartón), con la ciudad entera en la Riva, fuegos artificiales sobre el agua y música hasta las tres. Es la fiesta más vieja de Kotor y la única noche en que los cruceros no importan.",
    scores: { rareza: 6, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 5 },
    planTripAround: false,
    needsBooking: "Cama en Kotor con semanas; sitio en la Riva desde las 20:00",
    links: [WIKI("https://en.wikipedia.org/wiki/Kotor")],
    meta: f(),
  },
  {
    id: "me-carnaval-kotor",
    name: "El carnaval de invierno de Kotor",
    city: "Kotor",
    regionName: "Bahía de Kotor",
    coords: [42.4247, 18.7712],
    month: 2,
    dateApprox: "el fin de semana antes de la cuaresma (febrero o principios de marzo)",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "Un carnaval veneciano de 500 años en una ciudad veneciana: máscaras, un desfile con carrozas por las callejuelas, el «juicio» y la quema del Karneval (un muñeco al que se culpa de todos los males del año, con acta leída en la plaza) y baile en las plazas con la bahía a oscuras. Sin cruceros ni calor, con la ciudad para los suyos.",
    scores: { rareza: 6, espectacularidad: 7, facilidadAcceso: 9, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://es.wikipedia.org/wiki/Kotor")],
    meta: f("Fecha ligada a la cuaresma católica"),
  },
];
