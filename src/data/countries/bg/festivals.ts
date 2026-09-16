import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "bg-surva-pernik",
    name: "Surva, el festival de los kukeri",
    city: "Pernik",
    regionName: "Pernik",
    coords: [42.6, 23.03],
    month: 1,
    dateApprox: "último fin de semana de enero",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "Miles de kukeri (hombres disfrazados de monstruos de pelo de cabra con máscaras de dos metros con cuernos, plumas y espejos, y cencerros de 30 kg colgando de la cintura) desfilan por una ciudad minera a 30 km de Sofía haciendo un ruido de campanas que ahuyenta a los malos espíritus del invierno. Vienen grupos de todos los pueblos de Bulgaria y de los Balcanes; es el carnaval pagano más grande de Europa y casi nadie de fuera lo conoce.",
    scores: { rareza: 9, espectacularidad: 10, facilidadAcceso: 9, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "Ninguna; tren o bus Sofía–Pernik cada media hora, 40 min",
    links: [WIKI("https://es.wikipedia.org/wiki/Kukeri")],
    meta: f(),
  },
  {
    id: "bg-baba-marta",
    name: "Baba Marta",
    city: "Todo el país",
    regionName: "Bulgaria",
    coords: [42.6977, 23.3219],
    month: 3,
    dateApprox: "1 de marzo",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "La abuela Marta trae la primavera y todo el mundo se ata al brazo una martenitsa (dos borlas rojas y blancas, Pizho y Penda) que se lleva hasta ver la primera cigüeña o el primer árbol en flor, y entonces se cuelga de una rama. En marzo los árboles de Bulgaria están llenos de hilos rojos y blancos. Es el gemelo búlgaro del Mărțișor rumano y se discute quién lo inventó.",
    scores: { rareza: 5, espectacularidad: 4, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://es.wikipedia.org/wiki/Martenitsa")],
    meta: f(),
  },
  {
    id: "bg-rosas-kazanlak",
    name: "Festival de la Rosa de Kazanlak",
    city: "Kazanlak",
    regionName: "Stara Zagora",
    coords: [42.6194, 25.3933],
    month: 6,
    dateApprox: "primer fin de semana de junio",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "El valle que produce la mitad del aceite de rosa del mundo (el que va en el Chanel nº 5) celebra la cosecha: recogida de rosas al amanecer en los campos con trajes tradicionales, elección de la Reina de la Rosa, desfile por Kazanlak con carrozas, kukeri y bandas, y rakia de rosa en cada puesto. Con Buzludzha en la montaña de enfrente para la tarde.",
    scores: { rareza: 6, espectacularidad: 7, facilidadAcceso: 8, nivelTurismo: 5 },
    planTripAround: true,
    needsBooking: "Alojamiento en Kazanlak con semanas; el tren no se llena",
    links: [WIKI("https://en.wikipedia.org/wiki/Rose_Festival_(Bulgaria)")],
    meta: f(),
  },
  {
    id: "bg-nestinarstvo",
    name: "Nestinarstvo, la danza sobre brasas",
    city: "Bulgari (Strandzha)",
    regionName: "Burgas",
    coords: [42.1, 27.7],
    month: 6,
    dateApprox: "noche del 3 al 4 de junio (San Constantino y Santa Elena)",
    durationDays: 1,
    category: "occult",
    whatHappens:
      "En un pueblo de las montañas de Strandzha, junto a la frontera turca, los nestinari bailan descalzos sobre brasas de roble llevando iconos de San Constantino, en trance, al ritmo de un tambor y una gaita, en un rito mitad ortodoxo y mitad pagano que la UNESCO protegió antes de que se acabara: quedan cuatro o cinco que lo hacen de verdad. Solo esa noche, en ese pueblo, y hay que dormir allí.",
    scores: { rareza: 10, espectacularidad: 9, facilidadAcceso: 2, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Sin transporte público: taxi o tour desde Burgas (80 km) y cama en el pueblo, con meses",
    links: [WIKI("https://es.wikipedia.org/wiki/Nestinarstvo")],
    meta: f("Los bailarines de verdad son muy pocos; en la costa hay imitaciones para turistas", "media"),
  },
  {
    id: "bg-buzludzha-open",
    name: "Open Buzludzha",
    city: "Buzludzha (Kazanlak)",
    regionName: "Stara Zagora",
    coords: [42.7358, 25.3936],
    month: 8,
    dateApprox: "un fin de semana de mediados de agosto (14-16 en 2026)",
    durationDays: 3,
    category: "weird",
    whatHappens:
      "La fundación que restaura el monumento monta tres días de música, charlas de arquitectura, arte y acampada alrededor del ovni de hormigón: escenarios en la explanada, visitas guiadas al exterior (y a veces al vestíbulo), un gemelo digital del edificio y la cima llena de gente por una vez al año. Es la única ocasión en que Buzludzha tiene vida en vez de silencio.",
    scores: { rareza: 8, espectacularidad: 7, facilidadAcceso: 4, nivelTurismo: 4 },
    planTripAround: false,
    needsBooking: "Entrada anticipada en buzludzha-project.com; lanzaderas desde Kazanlak y Shipka anunciadas cada año",
    links: [{ label: "Buzludzha Project · Open Buzludzha", url: "https://buzludzha-project.com/en/festival/", kind: "oficial" as const }],
    meta: f("Fechas y acceso al interior cambian cada edición", "media"),
  },
];
