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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Lituania", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Vilnius–Riga–Tallinn", url: "https://www.seat61.com/trains-and-routes/vilnius-riga-tallinn-by-train.htm", kind: "blog" };
const LTG: Source = { label: "LTG Link", url: "https://ltglink.lt/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Lituania", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Lithuania", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "La mejor red de los tres bálticos: LTG Link tiene trenes nuevos de dos pisos Vilnius–Kaunas cada media hora (1 h 10, 6 €), intercitys con wifi y cafetería a Šiauliai, Plungė y Klaipėda (4 h, 15-20 €), regionales a Visaginas y la central (2 h) y, desde 2025, el directo a Riga (4 h) que se compra en la misma web en inglés junto con el combinado a Tallin. Paneriai es una parada de la línea de Kaunas. El sur (Druskininkai, Grūtas) no tiene tren y va en bus. Es la única red del radar donde el tren es siempre la primera opción.",
  corridorsIntro: "Tres corredores desde Vilnius: Kaunas (con Paneriai), la línea del oeste hasta Klaipėda por las cruces y los misiles, y el este hasta la central.",
  busText:
    "Los buses hacen el sur (Vilnius y Kaunas a Druskininkai cada hora, 2 h) y los tramos locales de las excursiones: Šiauliai–Domantai para la Colina de las Cruces, Plungė–Plateliai para Plokštinė (dos al día), Druskininkai–Grūtas, Klaipėda–Nida por la Lengua. Salen de estaciones pegadas a las de tren, con billete en autobusubilietai.lt o en ventanilla. Bolt en Vilnius, Kaunas y Klaipėda por 3-6 €.",
  busCompanies: ["Kautra, TOKS y demás en autobusubilietai.lt", "Buses locales de Šiauliai (Domantai) y Plungė (Plateliai)", "Ferry y bus de Klaipėda a Nida", "Bolt"],
  apps: [
    { name: "LTG Link", use: "todos los trenes, incluidos Riga y el combinado a Tallin; en inglés", url: "https://ltglink.lt/en" },
    { name: "Autobusų bilietai", use: "buses interurbanos", url: "https://www.autobusubilietai.lt/en" },
    { name: "Trafi", use: "transporte urbano de Vilnius y Kaunas con billete en la app" },
    { name: "Bolt", use: "taxi con precio cerrado en las tres ciudades grandes" },
    { name: "Google Maps", use: "perfecto con trenes y buses urbanos" },
  ],
  noCarVerdictText:
    "Es el país báltico más fácil sin coche y de los más fáciles del radar: Vilnius, Kaunas, Paneriai, Šiauliai, Klaipėda, Nida y Visaginas van en tren y ferry; Grūtas y las cruces, en bus más un paseo; y solo Plokštinė exige un taxi de 20 km o 5 km a pie desde un bus de dos al día. Con coche verías más bosque; sin coche ves los mismos silos y pisas una central nuclear en tren regional.",
  hardWithoutCar: [
    "Plokštinė: taxi con espera desde Plungė (30 €) o bus a Plateliai (2 al día) y 5 km a pie.",
    "La Colina de las Cruces: bus y 2 km a pie, o taxi de 20 € desde Šiauliai.",
    "Kernavė (Rasos): pocos buses y ninguno de madrugada.",
    "Grūtas: el bus local desde Druskininkai o 1 km a pie desde el cruce.",
  ],
  meta: vol([SEAT61, LTG, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 20, note: "hostal en Vilnius; la celda de Lukiškės, 40-60 €" },
    { concept: "hotel-mid", eur: 55 },
    { concept: "comida-barata", eur: 6, note: "cepelinai (zepelines de patata) y sopa fría rosa en una cantina" },
    { concept: "restaurante", eur: 16 },
    { concept: "transporte-urbano", eur: 1 },
    { concept: "tren-intercity", eur: 6, note: "Vilnius–Kaunas; a Klaipėda, 15-20 €" },
    { concept: "cafe", eur: 2.5 },
    { concept: "supermercado", eur: 8 },
  ],
  tips: [
    "El más barato de los tres bálticos: 55 € al día en Vilnius, 45 en provincias.",
    "Wizz y Ryanair a Vilnius y Kaunas desde 20 € fuera de temporada: dos aeropuertos para entrar por uno y salir por otro.",
    "Los museos son baratos (KGB 6 €, Grūtas 10 €, Noveno Fuerte 5 €, Plokštinė 8 €); Ignalina, 15 €; la Colina de las Cruces, gratis.",
    "Euro, tarjeta en todo, roaming: sin fricción.",
    "Las cantinas de comida lituana (Bernelių užeiga y similares) sirven cepelinai que alimentan un día entero por 6 €.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Vilnius", airport: "VNO", airlines: ["Wizz Air", "Ryanair"], lowCost: true, hours: 3.7, weekly: 8 },
    { to: "Kaunas", airport: "KUN", airlines: ["Ryanair"], lowCost: true, hours: 3.6, weekly: 3 },
  ],
  oneStop: [
    { via: "Riga (airBaltic)", airlines: ["airBaltic"], totalHours: 5.5 },
    { via: "Varsovia (LOT)", airlines: ["LOT"], totalHours: 6 },
  ],
  tips: [
    "Dos aeropuertos con low-cost desde BCN: entrar por Vilnius y salir por Kaunas (o al revés) ahorra volver.",
    "Del aeropuerto de Vilnius al centro hay tren (7 min, 1 €) y buses 1 y 2; del de Kaunas, bus 29 a la ciudad (40 min).",
    "Vilnius es el extremo sur del eje báltico: el tren directo a Riga (4 h) y el combinado a Tallin (10 h con cambio) salen de aquí.",
    "Varsovia está a 8 h de tren (con cambio en la frontera): Lituania encadena con Polonia por tierra.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Nada que tramitar, salvo la reserva de la central de Ignalina, que pide el número de documento con semanas de antelación y no admite menores. La frontera con Kaliningrado (en la Lengua Curlandesa) y con Bielorrusia está cerrada y vigilada.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea", "Ignalina: reserva con documento, semanas antes"],
  links: [MAEC],
  warnings: ["En Nida, la frontera con Kaliningrado está a 4 km al sur del pueblo: valla, cámaras y carteles. No hay nada que ver ni que cruzar.", "Drones: prohibidos cerca de la central, la base aérea de Šiauliai (OTAN) y las fronteras."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Muy seguro." },
    { key: "robos", level: "bajo", text: "Carteristas en la estación de Vilnius y el mercado Halės; poco." },
    { key: "timos", level: "bajo", text: "Taxis de la calle en el aeropuerto: Bolt. Nada más." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. Las fronteras con Bielorrusia y Kaliningrado están cerradas y no están en la ruta." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; sabotajes híbridos y globos de contrabando bielorrusos en las noticias, no en la calle." },
    { key: "transporte", level: "bajo", text: "Trenes y buses impecables; hielo en invierno." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en la central y en Šiauliai (base OTAN), pregunta." },
    { key: "noche", level: "bajo", text: "Vilnius de noche es tranquila; los bares de la ciudad vieja cierran tarde y sin dramas." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo: hostales buenos en Vilnius y Kaunas, inglés excelente entre jóvenes, y una noche en celda de Lukiškės que se hace mejor acompañado. Mujeres solas: sin problemas. Los lituanos son más cálidos que los estonios y más ruidosos que los letones, y te cuentan la historia del país sin que preguntes.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República semipresidencialista de la UE, la OTAN y la eurozona, con coaliciones que alternan, un presidente (Nausėda) reelegido en 2024 y una obsesión legítima con la seguridad: frontera cerrada con Bielorrusia (con valla), Kaliningrado al lado, tropas alemanas desplegadas de forma permanente desde 2025 y el mayor gasto en defensa de la OTAN en proporción. Con la minoría rusa (5 %, en Visaginas y Klaipėda) hay menos tensión que en Letonia y Estonia. Para el viajero, cero problema.",
  watch: ["Bielorrusia: globos de contrabando que cierran el aeropuerto de Vilnius algunas noches (2024-25)", "Kaliningrado: la frontera en Nida, cerrada y tranquila", "Ignalina: el desmantelamiento manda sobre las visitas"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Roaming europeo, 4G y 5G en todo el país, wifi en trenes y en cada café. LTG Link y los buses venden en el móvil, Trafi mueve el urbano, Bolt está en tres ciudades. Tarjeta en todo, incluido el bus local a Grūtas; el efectivo solo para el taxi de Plungė y algún puesto de la Colina de las Cruces.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless en casi todo; unos euros en efectivo para taxis rurales y puestos de cruces. Euro.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Lituano, la lengua viva más parecida al sánscrito, en latino con diacríticos: se lee, no se entiende. Inglés muy bueno entre menores de 45 y en todo lo turístico; ruso, los mayores y Visaginas; polaco, en el sureste. La señalética va en lituano y en inglés en trenes y museos. Aprende «ačiū» (gracias, se pronuncia como un estornudo) y vas servido.",
  machinesText:
    "Todo en inglés: LTG Link, los validadores de Trafi, los museos. Los buses locales, al conductor.",
  survivalPhrases: [
    { es: "Hola", local: "Labas", latin: "lábas" },
    { es: "Gracias", local: "Ačiū", latin: "áchiu" },
    { es: "¿Cuánto cuesta?", local: "Kiek kainuoja?", latin: "kiek kainuóya" },
    { es: "Estación de tren", local: "Geležinkelio stotis", latin: "guelezhínkelio stótis" },
    { es: "Pare en ..., por favor", local: "Sustokite ..., prašau", latin: "sustókite ..., prashaú" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festivo", text: "El 13, aniversario de 1991: velas y hogueras en la torre de TV y el Parlamento" },
    { month: 2, kind: "festival", text: "Užgavėnės, el carnaval de máscaras y la quema de Morė en Rumšiškės", festivalId: "lt-uzgavenes" },
    { month: 2, kind: "festivo", text: "El 16, Día de la Independencia (1918), con desfile y hogueras en Gedimino" },
    { month: 3, kind: "festival", text: "Kaziuko mugė el primer fin de semana: la ciudad vieja hecha mercado", festivalId: "lt-kaziuko-muge" },
    { month: 3, kind: "festivo", text: "El 11, Día de la Restauración (1990): banderas y conciertos" },
    { month: 4, kind: "festival", text: "El 1, la independencia de Užupis: cerveza en la fuente y sello en el pasaporte", festivalId: "lt-uzupis-1-abril" },
    { month: 5, kind: "temporada", text: "Primavera; abren los buses a Plateliai y los ferries de Nida a horario largo" },
    { month: 6, kind: "festival", text: "Rasos la noche del 23 en Kernavė: fuegos paganos en los montículos", festivalId: "lt-rasos-kernave" },
    { month: 7, kind: "clima", text: "El mes bueno: 23 grados, Nida llena, el resto vacío; el 6, coronación de Mindaugas con el himno cantado a las 21 en todo el mundo" },
    { month: 8, kind: "temporada", text: "Verano tardío; el 23, la Vía Báltica (la cadena humana de 1989) se recuerda en la carretera de Riga" },
    { month: 9, kind: "temporada", text: "Otoño con luz; setas en Samogitia y Plokštinė con arándanos" },
    { month: 10, kind: "clima", text: "Lluvia; buen mes para el KGB, Lukiškės y las cantinas" },
    { month: 11, kind: "festivo", text: "El 1, Vėlinės: los cementerios llenos de velas, de los espectáculos más bonitos del país" },
    { month: 12, kind: "clima", text: "Nieve y el árbol de Navidad de la catedral, el más fotografiado del Báltico" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Grūtas: todas las estatuas del comunismo en un pantano con alambradas. Y una central tipo Chernóbil que se pisa.",
    "Un silo de misiles nucleares en un bosque y la Colina de las Cruces que los bulldozers no pudieron con ella.",
    "El KGB con sala de ejecuciones y, enfrente, una cárcel recién cerrada donde se duerme.",
    "La mejor red de trenes del Báltico, dos aeropuertos low-cost y el extremo sur del eje a Riga y Tallin.",
    "El más barato de los tres bálticos, con DNI, euro y roaming.",
    "Un país de broma con constitución para perros dentro de la capital.",
  ],
  cons: [
    "Plokštinė y las cruces exigen taxi o paseo de 2-5 km.",
    "Ignalina se reserva con semanas y sin menores.",
    "El sur (Grūtas) no tiene tren.",
    "Invierno oscuro y helado; Nida saturada en julio y agosto.",
    "Menos hormigón abandonado que Estonia: Lituania restauró o demolió casi todo.",
  ],
  text:
    "Lituania es el país báltico con más circo por kilómetro y los mejores trenes para llegar: once días dan para Vilnius con el KGB, la cárcel de Lukiškės, Užupis y el bosque de Paneriai, el bus al parque de Stalin, Kaunas con el Noveno Fuerte, el tren al norte para las cruces, el taxi al silo nuclear de Plokštinė y el tren al este para pisar una central de Chernóbil con su ciudad-mariposa. Cinco, para Vilnius, Grūtas y Kaunas con dos aeropuertos. Quince, para entrar desde Riga en tren, añadir Nida hasta la frontera rusa y hacer los tres bálticos de arriba abajo. Ve en junio (Rasos en Kernavė) o en septiembre, reserva Ignalina antes que nada y duerme una noche en la celda.",
  meta: est([PROPIO]),
};
