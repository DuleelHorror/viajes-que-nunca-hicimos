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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Austria", url: "https://www.seat61.com/Austria.htm", kind: "blog" };
const OEBB: Source = { label: "ÖBB", url: "https://www.oebb.at", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Austria", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Austria", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Puedes cruzarte el país entero en tren sin invocar a ningún dios. ÖBB es probablemente la mejor compañía ferroviaria de Europa: Railjet cada media hora entre Viena y Salzburgo, regionales que llegan a pueblos de 700 habitantes con enlace de ferry esperando, y la casa madre del Nightjet, el nocturno que ha resucitado los trenes cama en Europa. Encima hay competencia privada (WESTbahn) en la línea principal, así que los precios son razonables si compras con antelación (Sparschiene desde 15-20 €). Puntualidad suiza, wifi, enchufes y un vagón restaurante con Schnitzel. Lo único caro es comprar el mismo día.",
  corridorsIntro: "Cinco líneas y tienes cubierto todo lo que te interesa. La del Semmering es patrimonio mundial y la usas sin querer.",
  busText:
    "Postbus (de ÖBB) llega literalmente a cada valle, con horarios integrados con el tren y el mismo billete en muchos casos. Los buses regionales de Salzburgo y Tirol son puntuales como un reloj y las paradas están donde tiene que haberlas. Sin sorpresas: la única costumbre a coger es que fuera de las capitales el último bus sale pronto.",
  busCompanies: ["Postbus (ÖBB)", "Salzburg Verkehr", "VVT (Tirol)", "Flixbus"],
  apps: [
    { name: "ÖBB", use: "billetes de tren y bus, horarios en tiempo real; funciona hasta para el ferry de Hallstatt", url: "https://www.oebb.at" },
    { name: "WESTbahn", use: "la competencia privada Viena–Salzburgo–Innsbruck: a veces la mitad de precio", url: "https://westbahn.at" },
    { name: "WienMobil", use: "transporte de Viena: metro, tranvía, bus y bicis con un solo billete" },
    { name: "Scotty (ÖBB)", use: "el planificador que combina tren, bus y a pie hasta el último pueblo" },
    { name: "Bolt / Uber", use: "en Viena, Graz y Salzburgo; fuera, taxi de toda la vida" },
  ],
  noCarVerdictText:
    "Modo fácil. Austria es de los pocos países donde no conducir no te quita ni un sitio de esta lista: a Hallstatt llegas en tren y ferry, a Bad Gastein en tren hasta la puerta, a la cueva de hielo en tren y lanzadera, al Semmering en el propio tren. Lo único que se acerca a una aventura logística es Mauthausen, donde la estación está a 4 km del memorial y el bus pasa poco. Y aun así hay taxi. El Interrail austriaco es tramposo de lo bien que funciona.",
  hardWithoutCar: [
    "Mauthausen: 4 km de cuesta desde la estación con bus escaso; taxi o 50 minutos a pie.",
    "Eisriesenwelt: tren, lanzadera, caminata y teleférico. Se hace, pero son dos horas y media hasta la boca.",
    "Los Krampus y Perchten de los valles pequeños: el último bus sale antes de que acabe lo bueno. Duerme allí.",
  ],
  meta: vol([SEAT61, OEBB, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 65, note: "pensión o hostal; Hallstatt y las estaciones de esquí, más" },
    { concept: "hotel-mid", eur: 130 },
    { concept: "comida-barata", eur: 11, note: "Würstelstand, Kebab o Leberkäse en panadería" },
    { concept: "restaurante", eur: 32, note: "Gasthaus con Schnitzel y cerveza" },
    { concept: "transporte-urbano", eur: 2.4 },
    { concept: "tren-intercity", eur: 30, note: "Viena–Salzburgo con Sparschiene; 60 € sin ella" },
    { concept: "cafe", eur: 4.5, note: "Melange en un café vienés, con vaso de agua y periódico" },
    { concept: "supermercado", eur: 13 },
  ],
  tips: [
    "Sparschiene: los billetes de tren baratos salen con meses de antelación y se agotan. Compra en cuanto tengas fechas.",
    "Viena tiene tarjeta de 24/48/72 horas de transporte por 8/14/17 €: cualquier otra cosa es tirar el dinero.",
    "Los museos grandes cuestan 15-20 €; los sitios raros de esta lista, casi todos menos de 10 o gratis.",
    "El agua del grifo de Viena viene de los Alpes y es mejor que la embotellada. Pide «Leitungswasser» sin complejos.",
    "Los Gasthaus de pueblo dan de comer bien y barato; los restaurantes de Salzburgo centro, no.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026; en temporada de esquí los Alpes suben un 30-50 %"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Viena", airport: "VIE", airlines: ["Austrian", "Ryanair", "Vueling"], lowCost: true, hours: 2.4, weekly: 35 },
    { to: "Salzburgo", airport: "SZG", airlines: ["Ryanair", "Eurowings"], lowCost: true, hours: 2.1, weekly: 4, seasonal: true },
    { to: "Innsbruck", airport: "INN", airlines: ["Eurowings"], lowCost: false, hours: 2, weekly: 2, seasonal: true },
  ],
  oneStop: [
    { via: "Múnich", airlines: ["Lufthansa", "Vueling + tren"], totalHours: 5 },
    { via: "Fráncfort o Zúrich", airlines: ["Lufthansa", "Swiss"], totalHours: 5.5 },
  ],
  tips: [
    "Viena tiene cinco directos al día desde BCN: Austrian por la mañana, Ryanair y Vueling el resto. Por debajo de 80 € ida y vuelta sin esfuerzo.",
    "Del aeropuerto al centro, el S7 cuesta 4,40 € y tarda 25 min; el CAT cobra 14 € por hacer lo mismo en 16. No pagues el CAT.",
    "Para el oeste del país, mira Múnich: vuelo barato y Railjet a Salzburgo (1 h 30) o Innsbruck (1 h 45).",
    "Salzburgo e Innsbruck tienen directos solo en temporada de esquí; el resto del año, Viena y tren.",
  ],
  meta: vol([PROPIO], "Frecuencias aproximadas; los de Salzburgo e Innsbruck dependen de la temporada"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale. Schengen: sin control de pasaportes, sin visado, sin formulario. La tarjeta sanitaria europea cubre la sanidad pública (que es excelente), y un seguro de viaje para lo demás. Si haces el corredor alemán en tren entre Salzburgo e Innsbruck, cruzas Baviera sin parar: lleva el DNI encima por si la policía alemana sube, que a veces sube.",
  steps: ["DNI español en vigor", "Tarjeta Sanitaria Europea", "Nada más"],
  links: [MAEC],
  warnings: ["Los hoteles registran el DNI: normal.", "En las termas y saunas austriacas se va sin bañador y sin dramas; es cultura, no una trampa."],
  meta: vol([MAEC], "Schengen: sin trámites para españoles"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "De los países más seguros del mundo, sin matices. Viena lleva años en el top de calidad de vida." },
    { key: "robos", level: "bajo", text: "Algún carterista en el Prater y en Westbahnhof en temporada. Poca cosa." },
    { key: "timos", level: "bajo", text: "Prácticamente inexistentes. El único «timo» es el tren CAT del aeropuerto, y es legal." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Hubo un atentado en Viena en 2020; hoy el riesgo es bajo y la vigilancia, discreta." },
    { key: "transporte", level: "bajo", text: "Impecable a cualquier hora; el metro de Viena va toda la noche los fines de semana." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema. En los Krampus de los valles, cuidado con la cámara por los varazos, no por los robos." },
    { key: "noche", level: "bajo", text: "Se vuelve andando a las tres de la mañana sin pensarlo." },
  ],
  conflictAreas: [],
  soloText:
    "Para ir solo es de lo más cómodo que existe: transporte que funciona, gente correcta y una cultura de café donde sentarte dos horas con un libro es lo normal. El único peligro real es el precio de la cerveza en Salzburgo. Mujeres solas: sin ningún problema; en los Krampuslauf de pueblo, como todo el mundo, lejos de la primera fila.",
  meta: vol([MAEC, PROPIO], undefined, "alta"),
};

export const politics: PoliticsSection = {
  text:
    "República federal parlamentaria, neutral desde 1955 y con una coalición u otra sin que se note en la calle. La extrema derecha (FPÖ) ganó las elecciones de 2024 y ha estado dentro y fuera del gobierno; para el turista no cambia nada. Sin huelgas relevantes: cuando el sindicato de ÖBB para, dura un día y avisa con semanas. La memoria del nazismo es tema vivo (Austria tardó décadas en dejar de considerarse «la primera víctima»), y los memoriales de esta lista son parte de esa conversación.",
  watch: ["Debates sobre neutralidad y Ucrania, sin efecto en el viaje", "Alguna huelga anunciada de ÖBB, siempre con preaviso"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Todo funciona: roaming de la UE, Google Maps con el transporte de Viena al segundo, apps oficiales de ÖBB traducidas. Lo sorprendente es otra cosa: Austria es el país rico de Europa que más ama el efectivo. Cafés vienesos, Würstelstände, Gasthaus de pueblo y hasta algún museo pequeño solo aceptan billetes, y te lo dicen con un cartel de «Nur Bargeld» sin ninguna vergüenza. Lleva 100 € encima siempre.",
  blocked: [],
  esimProviders: ["No hace falta: roaming de la UE incluido en tu tarifa española"],
  payments:
    "Tarjeta en hoteles, supermercados, trenes y cadenas; efectivo en cafés tradicionales, puestos de salchichas, tabernas de pueblo, propinas y bastantes museos pequeños. Los cajeros de bancos no cobran; los Euronet amarillos, sí.",
  meta: est([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Alemán con acento austriaco, que ni los alemanes entienden del todo, pero en tu caso da igual: en ciudades y en cualquier sitio turístico el inglés es muy bueno, los carteles de tren son bilingües y las máquinas tienen español. Fuera de eso, en un pueblo del Salzkammergut, el señor del Gasthaus tendrá 70 años y te hablará en dialecto; con «Grüß Gott», sonrisa y señalar la carta, comes igual. El alfabeto es el tuyo.",
  machinesText:
    "Máquinas de ÖBB y del metro de Viena en inglés y español; app de ÖBB en inglés; avisos por megafonía en alemán e inglés en los Railjet. Sin ningún drama.",
  survivalPhrases: [
    { es: "Hola (lo dice todo el mundo)", local: "Grüß Gott", latin: "grüs-GOT" },
    { es: "Gracias", local: "Danke" },
    { es: "La cuenta, por favor", local: "Zahlen, bitte" },
    { es: "Solo efectivo", local: "Nur Bargeld", latin: "lo vas a leer mucho" },
    { es: "¿Va este tren a…?", local: "Fährt dieser Zug nach…?" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Glöcklerlauf en Ebensee el 5 y Perchten por Salzburgo y Tirol el 5-6 (el grande de Gastein, cada 4 años)", festivalId: "at-gloecklerlauf-ebensee" },
    { month: 1, kind: "festival", text: "Perchtenlauf de Gastein (cuatrienal)", festivalId: "at-perchtenlauf-gastein" },
    { month: 1, kind: "temporada", text: "Temporada alta de esquí en los Alpes: Bad Gastein e Innsbruck, caros y llenos" },
    { month: 2, kind: "festival", text: "Schemenlaufen de Imst (cuatrienal) y carnavales de máscaras por el Tirol", festivalId: "at-schemenlaufen-imst" },
    { month: 2, kind: "temporada", text: "Temporada de bailes en Viena: el Opernball es el gordo, hay otros 400" },
    { month: 3, kind: "clima", text: "Deshielo y gris; Viena vacía y barata" },
    { month: 4, kind: "temporada", text: "Abren los sitios de temporada: alcantarillas del Tercer Hombre (mayo) y mina de Hallstatt" },
    { month: 5, kind: "temporada", text: "Abre Eisriesenwelt y el túnel de Ebensee; el mejor mes junto con septiembre" },
    { month: 6, kind: "clima", text: "Días de 16 horas; tormentas de tarde en los Alpes" },
    { month: 7, kind: "clima", text: "Calor moderado en Viena (30 °C), fresco en la montaña; Salzburgo se llena por su festival" },
    { month: 8, kind: "clima", text: "Verano austriaco: agradable, pero Hallstatt es un parque temático a las once de la mañana" },
    { month: 9, kind: "festival", text: "Almabtrieb: las vacas bajan adornadas por todos los valles", festivalId: "at-almabtrieb" },
    { month: 9, kind: "temporada", text: "Luz de otoño, precios de entretiempo, todo abierto todavía" },
    { month: 10, kind: "cierre", text: "Cierran Eisriesenwelt, el túnel de Ebensee y las alcantarillas; empieza la niebla en el Danubio" },
    { month: 11, kind: "temporada", text: "Mes gris y vacío; a finales, mercados de Navidad y primeros Krampus" },
    { month: 12, kind: "festival", text: "Krampuslauf por Salzburgo y los valles los días 5 y 6", festivalId: "at-krampuslauf" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Sin coche es modo fácil de verdad: el mejor ferrocarril de Europa y buses que llegan a cada valle con el mismo billete.",
    "Viena tiene una relación con la muerte que es un hobby: manicomio del XVIII con vitrinas, tres criptas para una dinastía, un cementerio con tres millones de inquilinos y museo funerario.",
    "Las torres antiaéreas en mitad de los parques y el Karl-Marx-Hof cañoneado: historia del siglo XX que sigue en pie porque no se puede tirar.",
    "Hallstatt guarda 600 cráneos pintados detrás de la postal, y Bad Gastein es un balneario imperial abandonado con estación de tren.",
    "Krampus, Perchten y Glöckler: demonios alpinos de verdad, en su sitio, sin escenario.",
    "Cinco directos al día desde BCN por menos de 80 €, y en dos horas y media estás en el metro.",
  ],
  cons: [
    "Es caro: 110 € al día viviendo normal, y en los Alpes en temporada de esquí, olvídate.",
    "Culturalmente no es otro planeta: orden, silencio y Schnitzel. Si buscas caos, aquí no hay.",
    "Hallstatt a las once de la mañana es insoportable: un millón de visitas al año en un pueblo de 750.",
    "Mitad de lo bueno cierra de noviembre a abril (cueva de hielo, alcantarillas, túnel de Ebensee), y la otra mitad (Krampus, Perchten) solo existe en invierno. Hay que elegir.",
    "El efectivo obligatorio en medio país en pleno 2026 es un pequeño coñazo.",
  ],
  text:
    "Austria es el país donde tu norma de no conducir no te cuesta absolutamente nada: te plantas en un pueblo de 700 habitantes en tren con ferry esperando, y en el balneario fantasma de los Alpes con la estación en la puerta. Lo que hay que ver no está en la guía: es el manicomio-museo, los búnkeres de los parques, los cráneos pintados de Hallstatt, Mauthausen con su memorial español, un lago subterráneo donde se hacían cazas a reacción y un túnel donde te tumbas a respirar radón por prescripción médica. Diez días bien montados dan para Viena, los memoriales y el Salzkammergut; catorce, para llegar a Gastein y a los Alpes. La decisión de verdad es la época: verano para las cuevas y los túneles, diciembre-enero para los demonios. No se puede tener todo en el mismo viaje, y ahí está la gracia de volver.",
  meta: est([PROPIO]),
};
