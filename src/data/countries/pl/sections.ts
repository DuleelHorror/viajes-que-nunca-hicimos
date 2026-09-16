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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Polonia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Poland", url: "https://www.seat61.com/Poland.htm", kind: "blog" };
const PKP: Source = { label: "PKP Intercity", url: "https://www.intercity.pl/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Polonia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Poland", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Polonia tiene una de las redes más densas de Europa y la ha arreglado con dinero europeo: Pendolinos (EIP) Cracovia–Varsovia en 2 h 20 desde 11 €, intercitys a Breslavia, Gdańsk y Olsztyn, y por debajo una capa de TLK y Polregio lentos que llegan a todos los pueblos de esta ficha (Małkinia para Treblinka, Kętrzyn para la Guarida, el apeadero de Podborsko en el bosque). Todo online en intercity.pl (con asiento obligatorio en los rápidos) o en koleo.pl, que suma todos los operadores. Wieliczka y Oświęcim van en cercanías o bus.",
  corridorsIntro: "Cinco corredores: el Pendolino como columna, y los ramales lentos a Masuria, Treblinka, Pomerania y Silesia.",
  busText:
    "Los buses cubren lo que el tren hace lento o no hace: Cracovia–Auschwitz cada media hora hasta la puerta del museo, Kętrzyn–Guarida del Lobo cuatro veces al día, PKS de Białogard a Podborsko y de Szczecinek a Borne Sulinowo, y FlixBus entre capitales. Bolt y Uber en todas las ciudades por 3-6 €. Los buses urbanos y tranvías se pagan en la máquina del vagón con tarjeta.",
  busCompanies: ["Lajkonik y demás en la estación MDA de Cracovia (Auschwitz)", "Buses locales de Kętrzyn (Guarida del Lobo)", "PKS Gryfice / Koszalin (Podborsko, Borne Sulinowo)", "FlixBus", "Bolt / Uber"],
  apps: [
    { name: "Koleo", use: "todos los trenes de todos los operadores en una app; el mejor buscador", url: "https://koleo.pl/en" },
    { name: "PKP Intercity", use: "reservas de los rápidos con asiento", url: "https://www.intercity.pl/en/" },
    { name: "Jakdojade", use: "transporte urbano de todas las ciudades con billete en el móvil" },
    { name: "Bolt", use: "taxi con precio cerrado" },
    { name: "Google Maps", use: "funciona perfectamente con trenes y tranvías" },
  ],
  noCarVerdictText:
    "Se puede, y bien: las ciudades y Auschwitz son triviales, Nowa Huta es un tranvía, la Guarida del Lobo tiene bus desde una estación, Treblinka y Podborsko tienen tren regional a pocos kilómetros. Lo que cuesta es lo del norte profundo: Podborsko exige cuadrar un horario de visita con un Polregio y 2-3 km a pie, Borne Sulinowo un taxi de 20 km, y Treblinka un taxi de 8 desde Małkinia. Con coche irías a más búnkeres del bosque; sin coche vas a los tres que importan y viajas en Pendolino.",
  hardWithoutCar: [
    "Podborsko: Polregio a un apeadero y 2-3 km a pie, con visitas solo a las 11, 12 y 13 de mayo a octubre.",
    "Borne Sulinowo: tren a Szczecinek y taxi o bus PKS de 20 km.",
    "Treblinka: 8 km desde la estación de Małkinia, con pocos trenes de vuelta.",
    "La Guarida del Lobo los domingos: sin bus local; taxi desde Kętrzyn.",
  ],
  meta: vol([SEAT61, PKP, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 20, note: "hostal en Cracovia o Varsovia; pensión en Kętrzyn, 30 €" },
    { concept: "hotel-mid", eur: 60 },
    { concept: "comida-barata", eur: 6, note: "pierogi y sopa en un bar mleczny (lechería subvencionada)" },
    { concept: "restaurante", eur: 16 },
    { concept: "transporte-urbano", eur: 1 },
    { concept: "tren-intercity", eur: 15, note: "Cracovia–Varsovia en Pendolino con antelación; Polregio, 2-5 €" },
    { concept: "cafe", eur: 2.5 },
    { concept: "supermercado", eur: 8 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 55 € al día con trenes, y los bares mleczny alimentan por 5 €.",
    "Złoty, no euro (≈ 4,3 por euro): tarjeta en todo; los cajeros Euronet cobran, los de bancos no.",
    "Ryanair, Wizz y Buzz a Cracovia desde 23 €; Varsovia con Wizz y LOT, y Ryanair a Modlin.",
    "Los museos gordos son baratos: Auschwitz gratis por libre, POLIN 10 €, la terraza del Palacio 6 €, Podborsko 8 €. Wieliczka (30 €) es el caro.",
    "El Pendolino cuesta 11 € con antelación y 40 el mismo día: compra el día que sepas la fecha.",
  ],
  meta: vol([NUMBEO, PROPIO], "Złoty a ≈ 4,3 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Cracovia", airport: "KRK", airlines: ["Ryanair", "Wizz Air", "Buzz"], lowCost: true, hours: 3, weekly: 27 },
    { to: "Varsovia Chopin", airport: "WAW", airlines: ["Wizz Air", "LOT"], lowCost: true, hours: 3, weekly: 36 },
    { to: "Varsovia Modlin", airport: "WMI", airlines: ["Ryanair"], lowCost: true, hours: 3, weekly: 6 },
  ],
  oneStop: [
    { via: "Múnich o Fráncfort", airlines: ["Lufthansa"], totalHours: 5.5 },
  ],
  tips: [
    "Entrar por Cracovia y salir por Varsovia (o Breslavia, con Ryanair) es lo natural: hay vuelos de sobra en las dos.",
    "Modlin está a 40 km de Varsovia: bus + tren de 1 h; Chopin, a 20 min en cercanías.",
    "Cracovia y Varsovia encadenan con Berlín, Praga, Vilnius y Leópolis en tren: la ficha se combina con Lituania por tierra (8 h con cambio).",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE y Schengen. Nada que tramitar. Auschwitz pide reserva online con nombre (desde marzo de 2026, sin taquilla) y documento en la puerta; el POLIN y la fábrica de Schindler, reserva recomendable. Roaming europeo y sanidad con la tarjeta.",
  steps: ["DNI en vigor", "Nada que tramitar", "Auschwitz: pase nominal en visit.auschwitz.org", "Tarjeta sanitaria europea"],
  links: [MAEC],
  warnings: ["La frontera con Bielorrusia está cerrada y militarizada (zona de exclusión en Podlaquia): no hay nada que ver allí y no se entra.", "Drones y fotos en instalaciones militares (Borne Sulinowo tiene aún cuarteles activos): pregunta."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Muy seguro; de los países con menos delincuencia de la UE." },
    { key: "robos", level: "bajo", text: "Carteristas en la plaza del Mercado de Cracovia y en el tranvía 4 en hora punta. Normal." },
    { key: "timos", level: "medio", text: "Taxis sin app en el aeropuerto de Cracovia y los clubes de striptease de Cracovia con cuentas de 1.000 €: Bolt y sentido común. Cajeros Euronet con tipo de cambio abusivo: rechaza la conversión." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. La frontera con Bielorrusia y el enclave de Kaliningrado están fuera de la ruta y vigilados." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; sabotajes rusos puntuales sin efecto en el viajero." },
    { key: "transporte", level: "bajo", text: "Trenes seguros; las carreteras rurales, de las peores de la UE en muertos (otro motivo para no conducir)." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en Auschwitz, respeto y sin selfis en la rampa (te lo dirán)." },
    { key: "noche", level: "bajo", text: "Cracovia de noche son despedidas de soltero británicas; ruido, no peligro." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo, con hostales excelentes en Cracovia y Varsovia, inglés bueno entre menores de 40 y un país que se explica a sí mismo en cada museo. Mujeres solas: sin problemas. Lo que pesa es el contenido: Auschwitz, Treblinka y el gueto en una semana cansan el alma; mete Wieliczka y los enanos de Breslavia en medio.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE y la OTAN, la economía que más ha crecido en Europa en 30 años, con una política partida en dos mitades que se odian: el gobierno liberal de Tusk desde 2023 y un presidente conservador (Nawrocki, elegido en 2025) que le veta las leyes. Frontera con Ucrania (millones de refugiados acogidos), con Bielorrusia (cerrada, con valla) y con Kaliningrado; el mayor gasto en defensa de la OTAN. Para el que viaja, cero problema: los trenes llegan y los museos abren.",
  watch: ["Elecciones y manifestaciones grandes en Varsovia, pacíficas", "La frontera bielorrusa: zona cerrada en Podlaquia", "Auschwitz: aforo y reservas cada vez más estrictos"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Roaming europeo, 5G en las ciudades y 4G en los bosques de Masuria y Pomerania. Koleo y Jakdojade venden trenes y billetes urbanos en el móvil, Bolt en todas las ciudades, Google Maps perfecto. Tarjeta en todo, incluidos los bares mleczny y los tranvías; el efectivo solo para el taxi de Małkinia y algún puesto de Todos los Santos.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless en casi todo; unos złoty en efectivo para taxis rurales y mercadillos. Rechaza siempre la conversión a euros en cajeros y datáfonos: cobra en złoty.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Polaco, eslavo en alfabeto latino con muchas consonantes seguidas: se lee (mal) y no se entiende. Inglés bueno entre menores de 40 y en todo lo turístico; alemán entre mayores del oeste. La señalética de trenes va en polaco e inglés en las estaciones grandes; en los apeaderos, solo polaco (koleo te lo traduce). Con «dzień dobry» y «dziękuję» te sonríen, cosa que un polaco no hace gratis.",
  machinesText:
    "Las máquinas de PKP y de los tranvías, en inglés; las de Polregio de los apeaderos, a veces solo en polaco: compra en la app. Los museos, con audioguía en español en Auschwitz, el POLIN y Schindler.",
  survivalPhrases: [
    { es: "Hola", local: "Dzień dobry", latin: "dyeñ dóbri" },
    { es: "Gracias", local: "Dziękuję", latin: "dyénkuye" },
    { es: "¿Cuánto cuesta?", local: "Ile to kosztuje?", latin: "íle to koshtúye" },
    { es: "Estación de tren", local: "Dworzec kolejowy", latin: "dvózhets koleyóvi" },
    { es: "Un billete a ..., por favor", local: "Jeden bilet do ..., proszę", latin: "yéden bílet do ..., próshe" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−5 °C, nieve y el aniversario de la liberación de Auschwitz el 27, con supervivientes cada vez menos" },
    { month: 2, kind: "clima", text: "El mes más frío; Masuria helada y la Guarida con nieve, abierta" },
    { month: 3, kind: "clima", text: "Deshielo; la Guarida y Podborsko aún cerrados o a medias" },
    { month: 4, kind: "festivo", text: "Semana Santa católica con el Śmigus-dyngus (lunes de Pascua: cubos de agua a todo el que pase)" },
    { month: 5, kind: "temporada", text: "Abren las visitas de Podborsko; verde en Masuria; el 3, fiesta de la Constitución" },
    { month: 6, kind: "festival", text: "Lajkonik el jueves tras el Corpus y Wianki el fin de semana del 20-21", festivalId: "pl-wianki" },
    { month: 6, kind: "festival", text: "El Lajkonik por las calles de Cracovia", festivalId: "pl-lajkonik" },
    { month: 7, kind: "festival", text: "Días del Tanquista en Borne Sulinowo, 10-12 de julio", festivalId: "pl-dni-czolgisty" },
    { month: 7, kind: "clima", text: "Verano: 28 °C, Cracovia llena, el norte perfecto" },
    { month: 8, kind: "festivo", text: "El 1, aniversario del Alzamiento: Varsovia se para a las 17:00 con sirenas" },
    { month: 9, kind: "temporada", text: "El mes redondo: sin calor, sin masas, setas en los bosques y Podborsko abierto" },
    { month: 10, kind: "temporada", text: "Otoño dorado; última ventana de Podborsko a final de mes" },
    { month: 11, kind: "festival", text: "Todos los Santos el 1: los cementerios como mares de velas", festivalId: "pl-wszystkich-swietych" },
    { month: 11, kind: "festivo", text: "El 11, Día de la Independencia: marcha nacionalista en Varsovia, mejor mirarla de lejos" },
    { month: 12, kind: "clima", text: "Nieve y mercadillo de Cracovia; el más bonito del Este" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Historia oscura de las gordas, en tren: Auschwitz, Treblinka, el gueto, la Guarida del Lobo.",
    "La URSS secreta que Polonia no sabía que tenía: el búnker nuclear de Podborsko con apeadero, Borne Sulinowo, la pequeña Moscú de Legnica.",
    "Estalinismo de manual: Nowa Huta en tranvía y el Palacio de la Cultura con terraza.",
    "DNI, low-cost desde 23 €, Pendolino desde 11 €, 55 € al día.",
    "Folclore raro y vivo: el Lajkonik, las coronas del Vístula, Todos los Santos.",
    "Seguro, ordenado y con museos que explican todo en español.",
  ],
  cons: [
    "Auschwitz exige reserva con semanas y va lleno.",
    "El norte oscuro (Podborsko, Borne, Treblinka) son trenes lentos, kilómetros a pie y horarios fijos.",
    "Cracovia tiene turismo de despedida de soltero.",
    "Menos brutalismo que los Balcanes: Polonia demolió o reformó casi todo lo comunista.",
    "Es duro: una semana de campos pesa.",
  ],
  text:
    "Polonia es el país donde Stalin y Hitler dejaron más hormigón que nadie, y donde se llega a todo en tren. Doce días dan para Nowa Huta en tranvía, Auschwitz en bus, el Pendolino a Varsovia para la tarta de Stalin y el gueto, Treblinka en regional, los búnkeres volados de la Guarida del Lobo con bus desde Kętrzyn y el depósito nuclear soviético de Podborsko con su apeadero en el bosque. Seis, para Cracovia y Varsovia. Dieciséis, para añadir Breslavia con sus enanos y Legnica, la ciudad que fue rusa. Ve en septiembre (todo abierto, sin masas) o cuadra el 1 de noviembre para Powązki con velas, entra por Cracovia y sal por Varsovia, y reserva Auschwitz antes que el vuelo.",
  meta: est([PROPIO]),
};
