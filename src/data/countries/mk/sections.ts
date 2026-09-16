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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=MacedoniadelNorte", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · North Macedonia", url: "https://www.seat61.com/Macedonia.htm", kind: "blog" };
const NUMBEO: Source = { label: "Numbeo · Macedonia del Norte", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=North+Macedonia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Macedonia del Norte tiene un tren que sirve y sale de la estación de Kenzo Tange: Skopje–Bitola, cuatro al día (el primero a las 14:30), 3 h 25 por el Vardar y la llanura de Pelagonia en vagones de otra época, por 5-8 €, con Prilep a mitad de camino para el bus a Kruševo. El resto de la red (a Kičevo, a Kočani, la internacional a Belgrado que va y viene) no sirve para esta ficha. Billetes en taquilla; la web no vende.",
  corridorsIntro: "Un corredor de tren, de tarde. Todo lo demás son buses desde el Transporten Centar de Tange.",
  busText:
    "El país va en bus desde el centro de transporte de Skopje (bajo la estación de Tange): a Ohrid nueve al día (3 h, 16 €), a Tetovo cada media hora, a Kruševo tres directos (2 h), a Bitola cada hora, y a las capitales vecinas (Sofía, Pristina, Tirana, Belgrado, Podgorica). Billete en ventanilla o en gjirafa.com; asientos numerados. Taxis baratos en todas las ciudades (2-3 € en Skopje), sin apps fiables.",
  busCompanies: ["Compañías del Transporten Centar de Skopje (Galeb, Classic, Rule Turs)", "Buses de la orilla del lago Ohrid", "Taxis con taxímetro (pactar en pueblos)"],
  apps: [
    { name: "Gjirafa Travel", use: "horarios y billetes de buses del país y los vecinos", url: "https://travel.gjirafa.com/en" },
    { name: "Google Maps", use: "funciona para andar y con los buses urbanos de Skopje a medias" },
    { name: "Google Translate", use: "macedonio en cirílico y albanés en latino; el inglés es bueno" },
    { name: "Balkanviator", use: "horarios de buses balcánicos, útil para los internacionales", url: "https://balkanviator.com/en/" },
  ],
  noCarVerdictText:
    "Se puede, y es pequeño: Skopje se anda, Tetovo y Matka son buses de 40 minutos, Bitola tiene tren, Kruševo tres buses al día (y el Makedonium se sube a pie), Ohrid nueve buses y la orilla en bus local. Lo que se cae sin coche es lo de montaña (Galičnik sin la boda, Mavrovo, Kokino) y las iglesias perdidas. Con coche verías más monasterios; sin coche ves el kitsch, el hormigón y el virus, que es lo que se venía a ver.",
  hardWithoutCar: [
    "Galičnik: sin transporte salvo los buses de la boda en julio.",
    "Kokino (el observatorio megalítico): taxi desde Kumanovo; fuera de la ficha.",
    "Kruševo: tres buses al día; el último a las 19:00 desde Skopje.",
    "Vevčani: bus a Struga y taxi.",
  ],
  meta: vol([SEAT61, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 15, note: "hostal en Skopje u Ohrid; pensión en Kruševo, 20 €" },
    { concept: "hotel-mid", eur: 40 },
    { concept: "comida-barata", eur: 3, note: "burek de 1 €; tavče gravče o kebapi, 4 €" },
    { concept: "restaurante", eur: 10, note: "con vino de Tikveš y rakia" },
    { concept: "transporte-urbano", eur: 0.6 },
    { concept: "tren-intercity", eur: 6, note: "Skopje–Bitola; el bus a Ohrid, 16 €" },
    { concept: "cafe", eur: 1.2 },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: de lo más barato del radar, 35-40 € al día con todo.",
    "Denar (≈ 61,5 por euro): tarjeta en hoteles y restaurantes de ciudad, efectivo en buses, mercados y pueblos; cajeros de bancos sin comisión.",
    "Wizz a Skopje desde 35 € por trayecto, dos o tres días a la semana.",
    "Las entradas son simbólicas (1-5 €): el gasto es dormir y comer, y es poco.",
    "Ohrid en agosto dobla precios; el resto del año, la mitad.",
  ],
  meta: vol([NUMBEO, PROPIO], "Denar a ≈ 61,5 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Skopje", airport: "SKP", airlines: ["Wizz Air"], lowCost: true, hours: 2.75, weekly: 3 },
  ],
  oneStop: [
    { via: "Viena (Austrian) o Estambul (Turkish, Pegasus)", airlines: ["Austrian", "Turkish Airlines", "Pegasus"], totalHours: 6 },
    { via: "Sofía o Belgrado y bus", airlines: ["Ryanair", "Wizz Air"], totalHours: 9 },
  ],
  tips: [
    "Wizz directo a Skopje dos o tres veces por semana: el viaje se monta alrededor de esos días.",
    "Skopje está a 5 h en bus de Sofía, Pristina y Tirana, y a 7-8 de Belgrado y Podgorica: la ficha se encadena con Bulgaria, Albania, Serbia y Montenegro.",
    "Del aeropuerto al centro, bus Vardar Express (3 €, 30 min) sincronizado con los vuelos.",
  ],
  meta: vol([PROPIO], "Wizz varía frecuencias por temporada", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: Macedonia del Norte no es UE ni Schengen, pero admite el DNI español hasta 90 días. Lleva pasaporte igual para los buses internacionales (Kosovo, Albania, Montenegro) y por si el hotel lo pide para el registro, que lo hacen ellos. Sin roaming europeo.",
  steps: ["DNI en vigor (pasaporte recomendable para fronteras en bus)", "Nada que tramitar", "Seguro de viaje: fuera de la UE", "SIM local o eSIM"],
  links: [MAEC],
  warnings: ["El país se llama Macedonia del Norte desde 2019 por acuerdo con Grecia; la gente sigue diciendo Macedonia y no le gusta que se lo recuerden.", "Sin roaming europeo."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; Skopje de noche, tranquila." },
    { key: "robos", level: "bajo", text: "Carteristas en el bazar y en los buses llenos; poco." },
    { key: "timos", level: "medio", text: "Taxis sin taxímetro en el aeropuerto y en Ohrid: pacta o pide que lo pongan. Cambio de moneda en la calle: no." },
    { key: "zonasConflicto", level: "bajo", text: "El conflicto albanés de 2001 está cerrado; Tetovo y el noroeste son tranquilos, con tensión política de fondo." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Buses viejos por carreteras de montaña; el tren, lento y seguro." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en la tekke de Tetovo, pregunta al derviche." },
    { key: "noche", level: "bajo", text: "Tranquilo; Ohrid en verano, de fiesta hasta tarde." },
  ],
  conflictAreas: [],
  soloText:
    "Fácil para ir solo: hostales buenos en Skopje y Ohrid, inglés bueno entre jóvenes, y gente que te pregunta de dónde eres y te invita a rakia. Mujeres solas: sin problemas específicos. Lo que cansa es el horario del tren (de tarde) y que Kruševo tiene tres buses.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la OTAN (desde 2020, tras cambiarse el nombre) y candidata a la UE bloqueada por Bulgaria (por la lengua y la historia), gobernada desde 2024 por los nacionalistas de VMRO (Mickoski) que vuelven a decir «Macedonia» a secas y han frenado la retirada de Skopje 2014. Un cuarto de la población es albanesa, con partidos propios en cada gobierno y una lengua cooficial desde 2019. Para el que viaja: tranquilo, con un país que discute su nombre con todos los vecinos.",
  watch: ["El nombre: no llames «Macedonia» a la región griega ni «Skopje» al país en voz alta", "Skopje 2014: qué se retira y qué se queda cambia con el gobierno", "Relación con Bulgaria: veto europeo y titulares"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Fuera de la UE: sin roaming. SIM de A1 o Telekom en cualquier tienda por 5 € con datos de sobra, o eSIM. Cobertura buena en ciudades y el lago; regular en Kruševo y Mavrovo. Google Maps para andar; buses en gjirafa. Tarjeta en hoteles y restaurantes de Skopje y Ohrid; denares en efectivo para buses, taxis, mercados y todo lo pequeño.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local A1 / Telekom (5 €, con DNI)"],
  payments:
    "Tarjeta en hoteles, restaurantes y supermercados de ciudad; efectivo (denares) en buses, taxis, entradas, bazar y pueblos. Cajeros de Komercijalna o Stopanska sin comisión de sorpresa.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Macedonio, eslavo en cirílico (muy cerca del búlgaro, para disgusto de los dos), y albanés en latino en el noroeste y Skopje, cooficial. Inglés bueno entre menores de 40 y en todo lo turístico; serbio y búlgaro se entienden. Los carteles van en cirílico con inglés en lo turístico; en Tetovo, en albanés. Con el cirílico que ya traes de Bulgaria o Serbia, se lee todo.",
  machinesText:
    "No hay máquinas: taquilla del tren y ventanillas de bus con el destino escrito; los museos con guía en inglés. Menús en inglés en Skopje y Ohrid.",
  survivalPhrases: [
    { es: "Hola", local: "Здраво", latin: "zdravo" },
    { es: "Gracias", local: "Благодарам / Фала", latin: "blagódaram / fala" },
    { es: "¿Cuánto cuesta?", local: "Колку чини?", latin: "kolku chini" },
    { es: "Estación de buses", local: "Автобуска станица", latin: "avtobuska stánitsa" },
    { es: "Un billete a ..., por favor", local: "Еден билет до ..., ве молам", latin: "eden bilet do ..., ve mólam" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Carnaval de Vevčani el 13 y 14: demonios y sátira en la nieve", festivalId: "mk-vevcani-carnaval" },
    { month: 1, kind: "festivo", text: "Navidad ortodoxa el 7 con hogueras (badnik) en cada barrio de Skopje la víspera" },
    { month: 2, kind: "clima", text: "Frío en Skopje (con smog) y nieve en Kruševo; Ohrid, gris" },
    { month: 3, kind: "clima", text: "Primavera temprana en el Vardar; Matka con el río alto" },
    { month: 4, kind: "temporada", text: "Todo abierto y verde; Semana Santa ortodoxa con huevos rojos" },
    { month: 5, kind: "temporada", text: "El mes redondo: 25 grados, Ohrid sin nadie, Kruševo con flores" },
    { month: 6, kind: "temporada", text: "Calor empezando en Skopje; el lago, perfecto" },
    { month: 7, kind: "festival", text: "La boda de Galičnik el fin de semana del 12; arranca el Festival de Verano de Ohrid", festivalId: "mk-galicnik-boda" },
    { month: 7, kind: "festival", text: "Festival de Verano de Ohrid, del 12 de julio al 20 de agosto", festivalId: "mk-ohrid-verano" },
    { month: 8, kind: "festival", text: "Ilinden el 2 en Kruševo: el gobierno sube al Makedonium", festivalId: "mk-ilinden-krusevo" },
    { month: 8, kind: "clima", text: "40 °C en Skopje y Ohrid lleno; Kruševo a 1.350 m, fresco" },
    { month: 9, kind: "temporada", text: "El otro mes redondo: vendimia en Tikveš, Ohrid vacía, sin calor" },
    { month: 10, kind: "temporada", text: "Otoño; los buses de la orilla del lago bajan de frecuencia" },
    { month: 11, kind: "clima", text: "Lluvia y niebla en Skopje; buen mes para el hormigón y el museo de cera" },
    { month: 12, kind: "clima", text: "Frío; Navidad católica el 25 en Skopje y la ortodoxa en enero" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Skopje 2014: el kitsch de Estado más grande de Europa, gratis y a pie.",
    "La utopía brutalista de un terremoto: la estación de Tange, Correos quemado, la Ópera.",
    "El Makedonium: un virus de hormigón con vidrieras en la ciudad más alta de los Balcanes, con bus.",
    "Una mezquita pintada como un huevo de Pascua y una tekke sufí en disputa, a 40 minutos.",
    "Ohrid: el cirílico, un lago de tres millones de años y una tumba que late.",
    "DNI, Wizz directo, de lo más barato del radar y con buen inglés.",
  ],
  cons: [
    "Wizz solo dos o tres días a la semana.",
    "Un tren, de tarde, y el resto en bus.",
    "Sin roaming ni euro.",
    "Pequeño: en nueve días se ve lo que importa.",
    "Skopje 2014 se retira a trozos: lo que ves puede no estar el año que viene.",
  ],
  text:
    "Macedonia del Norte es el país del radar donde un gobierno disfrazó la capital de Atenas de poliestireno encima de una utopía brutalista de Kenzo Tange, y las dos siguen ahí. Nueve días dan para Skopje con sus estatuas y su hormigón, la mezquita pintada de Tetovo en bus, el tren de la tarde a Bitola, el Makedonium de Kruševo y Ohrid con el cirílico, los manantiales y la república de Vevčani. Cuatro, para Skopje y Tetovo. Trece, para la boda de Galičnik en julio y salir en bus a Montenegro. Ve en mayo o en septiembre, ajusta las fechas a Wizz, y no digas «Skopje» cuando quieras decir el país.",
  meta: est([PROPIO]),
};
