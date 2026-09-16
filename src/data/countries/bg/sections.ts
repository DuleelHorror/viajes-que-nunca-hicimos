import type {
  CostSection,
  DigitalSection,
  DocsSection,
  EventsSection,
  FlightsSection,
  LanguageSection,
  PoliticsSection,
  SafetySection,
  TransportSection,
  VerdictSection,
} from "@/lib/schema";
import { meta, type Source } from "@/lib/schema";

const PROPIO: Source = { label: "Lo hemos escrito nosotros", kind: "propio" };
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Bulgaria", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Bulgaria", url: "https://www.seat61.com/Bulgaria.htm", kind: "blog" };
const BDZ: Source = { label: "BDZ", url: "https://www.bdz.bg/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Bulgaria", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Bulgaria", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Los trenes búlgaros son de los más viejos, lentos y baratos de Europa: vagones de la RDA con ventanas que se bajan, 60 km/h de media, retrasos sin explicación y billetes de 6 € para 150 km. Llegan a casi todas las bases de esta ficha (Plovdiv, Kazanlak, Gorna Oryahovitsa para Veliko Tarnovo, Shumen, Varna, Ruse, Oreshets para Belogradchik) y hay un nocturno con literas Sofía–Varna. La web de BDZ vende online cuando le da; en taquilla, siempre, con el nombre de la ciudad escrito en un papel. Para nuestro perfil son perfectos: baratos, lentos y con paisaje.",
  corridorsIntro: "Cuatro corredores: Plovdiv, el valle de las rosas, la línea del norte hasta el mar y el ramal a Ruse. El resto, bus.",
  busText:
    "Los buses son más rápidos que los trenes y van a todas partes desde las estaciones centrales: Sofía–Veliko Tarnovo en 3 h por autopista, Kazanlak–Veliko Tarnovo por el paso de Shipka (bajo Buzludzha), Varna–Ruse, Sofía–Belogradchik directo. Para Rila hay un bus diario. Y para Buzludzha, un taxi desde Kazanlak o Shipka con espera, que es la única manera sin coche (o 3 h de subida a pie). Bolt funciona en Sofía, Plovdiv y Varna.",
  busCompanies: ["Union Ivkoni, Etap, Biomet (interurbanos desde las estaciones centrales)", "Bus diario Sofía–Rila (Ovcha Kupel)", "Taxis de Kazanlak y Shipka para Buzludzha", "Bolt"],
  apps: [
    { name: "BDZ", use: "horarios y billetes online (cuando funciona), en inglés", url: "https://www.bdz.bg/en" },
    { name: "Bolt", use: "taxi con precio cerrado en Sofía, Plovdiv y Varna" },
    { name: "Moovit", use: "transporte urbano de Sofía; Google Maps también va bien" },
    { name: "Google Translate", use: "cirílico búlgaro con cámara; los carteles de las estaciones a menudo solo en cirílico" },
  ],
  noCarVerdictText:
    "Se puede, con paciencia balcánica: las ciudades tienen tren o bus, los monumentos brutalistas grandes están en ciudades (Shumen, Veliko Tarnovo, Ruse, Sofía) y Buzludzha, que es el motivo del viaje, se resuelve con un taxi de 30 € desde Kazanlak. Lo que se complica es la montaña profunda (Rila más allá del monasterio, Pirin, Ródope) y los pueblos de la frontera turca (los nestinari). Con coche irías al doble de sitios; sin coche vas a los que importan y te pasas las horas mirando por la ventana de un vagón de la RDA, que también es el viaje.",
  hardWithoutCar: [
    "Buzludzha: taxi con espera desde Kazanlak o Shipka, o 3 h a pie desde el paso. Sin taxi, no.",
    "Belogradchik: un bus al día desde Sofía o tren + taxi; ida y vuelta en el día es justo.",
    "El nestinarstvo en Bulgari (Strandzha): sin transporte público.",
    "Ródope profundo (Devil's Throat, los puentes de piedra): buses escasos y tours desde Plovdiv.",
  ],
  meta: vol([SEAT61, BDZ, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 15, note: "hostal en Sofía o Plovdiv; pensión en Kazanlak, 20 €" },
    { concept: "hotel-mid", eur: 40 },
    { concept: "comida-barata", eur: 4, note: "banitsa y ayran de desayuno, 1,50 €; shopska y kebapche, 4 €" },
    { concept: "restaurante", eur: 12, note: "con rakia y vino de Melnik" },
    { concept: "transporte-urbano", eur: 0.8 },
    { concept: "tren-intercity", eur: 6, note: "Sofía–Plovdiv; a Varna, 12 €" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 7 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: es el país más barato de la UE, 40-45 € al día con todo.",
    "Desde el 1 de enero de 2026 Bulgaria paga en euros: se acabó el lev (1,95583 por euro, fijo; los precios viejos, entre 2).",
    "El taxi a Buzludzha (25-30 € con espera) es el gasto grande del viaje: se comparte con quien haya en el hostal de Kazanlak.",
    "Ryanair y Wizz a Sofía desde 20 € por trayecto fuera de temporada.",
    "Los taxis de Sofía tienen tarifas legales por kilómetro pegadas en la ventanilla: mira que no sea la del «taxi amarillo falso». Bolt evita el tema.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro desde 2026; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Sofía", airport: "SOF", airlines: ["Ryanair", "Wizz Air"], lowCost: true, hours: 3, weekly: 14 },
    { to: "Varna", airport: "VAR", airlines: ["Wizz Air"], lowCost: true, hours: 3.3, weekly: 2 },
  ],
  oneStop: [
    { via: "Viena o Múnich", airlines: ["Austrian", "Lufthansa"], totalHours: 6 },
  ],
  tips: [
    "Sofía directa y low-cost dos veces al día entre Ryanair y Wizz; Varna en verano con Wizz permite entrar por un lado y salir por el otro.",
    "Del aeropuerto de Sofía al centro, metro (línea 4) en 30 minutos por 0,80 €.",
    "Sofía encadena bien con Skopje, Belgrado y Bucarest en bus y tren: la ficha se combina con Serbia y Rumanía.",
  ],
  meta: vol([PROPIO], "Varna directa solo en verano y sujeta a Wizz", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: Bulgaria es UE y desde 2025 Schengen completo, sin control ni en el aeropuerto ni en la frontera con Rumanía. Nada que tramitar, roaming europeo y euros desde 2026. Es, junto con Rumanía, el país del radar con menos papeleo.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea"],
  links: [MAEC],
  warnings: ["Si cruzas a Serbia o a Macedonia del Norte desde aquí, ahí sí hay control: DNI vale en ambos, pero lleva pasaporte por si el bus lo pide."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia violenta baja; el crimen organizado búlgaro no se mete con turistas." },
    { key: "robos", level: "medio", text: "Carteristas en el tranvía de Sofía y en Sunny Beach en verano. Normal." },
    { key: "timos", level: "medio", text: "Taxis falsos con logos casi iguales a los oficiales en Sofía y el aeropuerto; cambio de moneda ya no hay (euro). Bolt o taxi de la fila oficial." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Trenes seguros y lentos; las carreteras, las peores de la UE en muertos. Los buses interurbanos, correctos." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema en ningún sitio, Buzludzha incluido. Los guardas de Buzludzha te dejan fotografiar por fuera." },
    { key: "noche", level: "bajo", text: "Sofía y Plovdiv de noche, tranquilas; perros callejeros en los pueblos, ladradores." },
  ],
  conflictAreas: [],
  soloText:
    "Fácil para ir solo, con hostales buenos en Sofía, Plovdiv y Veliko Tarnovo donde se juntan los que van a Buzludzha para compartir taxi. Los búlgaros son secos al principio y generosos después, y mueven la cabeza al revés (sí es no y no es sí; en serio). Mujeres solas: sin problemas específicos. Lo que puede cansar es el cirílico en las estaciones pequeñas y la paciencia con los trenes.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE y la OTAN con la política más inestable del bloque: siete elecciones entre 2021 y 2024 sin gobierno estable, corrupción de fondo y un partido prorruso (Vazrazhdane) que crece y quema banderas de la UE. Aun así, en 2025 entró en Schengen del todo y en 2026 en el euro, con protestas de los de siempre. Para el que viaja, cero efecto: el país funciona a su ritmo pase lo que pase en Sofía.",
  watch: ["Protestas de Vazrazhdane contra el euro y la UE, ruidosas y pequeñas", "Elecciones sorpresa: siempre hay una cerca", "El Monumento al Ejército Soviético: su desmontaje sigue dando peleas"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Roaming europeo con tu tarifa, 4G hasta en la cima de Buzludzha y wifi en todo. Google Maps funciona bien en Sofía y regular con los trenes (mejor la web de BDZ); Bolt en las tres ciudades grandes. Tarjeta en ciudades y euros en efectivo para trenes de taquilla, taxis de Kazanlak, entradas de monumentos y todo lo de pueblo.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless en Sofía, Plovdiv y Varna sin problema; efectivo en taquillas de tren pequeñas, buses, taxis, mercados y monumentos de provincia. Con el euro desde 2026, sin cambio ni comisiones.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Búlgaro, eslavo en cirílico (el cirílico lo inventaron aquí y lo recuerdan cada 24 de mayo con fiesta nacional). Inglés bien entre jóvenes de Sofía y Plovdiv y en hostales; en Kazanlak, Shumen y las estaciones, poco o nada. Los carteles de las estaciones pequeñas van solo en cirílico: aprende a leerlo antes (es una tarde) y el viaje cambia. Y el gesto de la cabeza: aquí «sí» es mover la cabeza a los lados.",
  machinesText:
    "Las máquinas del metro de Sofía, en inglés y con contactless; las taquillas de tren de provincia, en cirílico y con una señora que no tiene prisa: escribe destino y hora en un papel. La web de BDZ, en inglés.",
  survivalPhrases: [
    { es: "Hola", local: "Здравейте", latin: "zdravéite" },
    { es: "Gracias", local: "Благодаря", latin: "blagodaryá" },
    { es: "¿Cuánto cuesta?", local: "Колко струва?", latin: "kólko struva" },
    { es: "Estación de tren", local: "Гара", latin: "gara" },
    { es: "Un billete a ..., por favor", local: "Един билет до ..., моля", latin: "edín bilet do ..., molya" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Surva en Pernik el último fin de semana: los kukeri con cencerros", festivalId: "bg-surva-pernik" },
    { month: 1, kind: "clima", text: "Frío continental y Buzludzha bajo nieve (se sube igual, con más épica)" },
    { month: 2, kind: "clima", text: "Sigue el invierno; buen mes para Sofía y Plovdiv sin nadie" },
    { month: 3, kind: "festival", text: "Baba Marta el día 1: hilos rojos y blancos en las muñecas y los árboles", festivalId: "bg-baba-marta" },
    { month: 4, kind: "temporada", text: "Primavera; Semana Santa ortodoxa (fecha variable) con huevos rojos" },
    { month: 5, kind: "temporada", text: "Rosas en flor en el valle de Kazanlak; el 24, fiesta del alfabeto cirílico" },
    { month: 6, kind: "festival", text: "Festival de la Rosa en Kazanlak, primer fin de semana", festivalId: "bg-rosas-kazanlak" },
    { month: 6, kind: "festival", text: "Nestinarstvo en Bulgari la noche del 3 al 4", festivalId: "bg-nestinarstvo" },
    { month: 7, kind: "clima", text: "35 °C en Plovdiv y la costa llena de turistas de Sunny Beach; Buzludzha a 20 °C" },
    { month: 8, kind: "festival", text: "Open Buzludzha, un fin de semana de mediados de mes: música y visitas en el monumento", festivalId: "bg-buzludzha-open" },
    { month: 9, kind: "temporada", text: "El mes redondo: sin calor, sin turistas de playa, uva en Melnik" },
    { month: 10, kind: "temporada", text: "Otoño en el Balcán; Buzludzha con niebla y hojas rojas" },
    { month: 11, kind: "clima", text: "Gris y lluvia; los trenes, más lentos aún" },
    { month: 12, kind: "clima", text: "Nieve en la montaña, Sofía a 0 °C; poco turismo y precios de invierno" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Buzludzha: el monumento abandonado más bestia de Europa, y se llega con un taxi de 30 €.",
    "El brutalismo comunista mejor conservado del radar: Shumen, la espada de Veliko Tarnovo, el panteón de Ruse, el Largo.",
    "DNI, low-cost directo, roaming y euro: cero papeleo, y el país más barato de la UE.",
    "Trenes lentísimos y baratísimos que llegan a casi todo, con nocturno al mar.",
    "Folclore pagano de verdad: los kukeri de Surva y los nestinari sobre brasas.",
    "Poco turismo fuera de la costa.",
  ],
  cons: [
    "Los trenes son lentos y llegan tarde de verdad; los buses son la alternativa seria.",
    "Buzludzha por dentro está cerrado, y la niebla en la cima es la norma.",
    "Cirílico en las estaciones pequeñas y poco inglés fuera de Sofía y Plovdiv.",
    "Lo mejor de la montaña (Ródope, Strandzha) queda fuera sin coche.",
    "Sofía es una capital de paso, sin gran cosa más allá del hormigón.",
  ],
  text:
    "Bulgaria es el país del hormigón comunista con menos fricción de toda la lista: DNI, Ryanair, euro y trenes de 6 €. Doce días dan para Sofía con su estalinismo y su desguace de estatuas, Plovdiv con el soviético que no cayó, el taxi al ovni de Buzludzha desde Kazanlak, la espada de hormigón de Veliko Tarnovo, los cubos de Shumen y el bosque de piedra de Varna. Seis, para Sofía, Plovdiv y Buzludzha. Dieciséis, para añadir las rocas de Belogradchik, el panteón de Ruse y salir a Rumanía por el Danubio. Ve en septiembre o en mayo, duerme dos noches en Kazanlak por la niebla, y si puedes cuadrar el último fin de semana de enero, los kukeri de Pernik valen un viaje solos.",
  meta: est([PROPIO]),
};
