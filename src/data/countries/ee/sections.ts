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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Estonia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Vilnius–Riga–Tallinn", url: "https://www.seat61.com/trains-and-routes/vilnius-riga-tallinn-by-train.htm", kind: "blog" };
const ELRON: Source = { label: "Elron", url: "https://elron.ee/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Estonia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Estonia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Estonia tiene una red pequeña y buena: los trenes naranjas de Elron (suizos, de 2014) salen de la estación Balti de Tallin a Tartu (2 h), Narva (2 h 15), Paldiski (1 h 10), Viljandi y Pärnu, con wifi, bici gratis, billete en la app o con tarjeta a bordo y precios de 4-12 €. Desde enero de 2026 hay dos trenes directos al día Tallin–Riga por Tartu y Valga (6 h), y con el enlace de Valga se sigue a Vilnius en el mismo día: el eje báltico entero en tren, por fin. Lo que no tiene tren (Rummu, Hara, Setomaa) tiene bus.",
  corridorsIntro: "Tres corredores desde Tallin: al oeste (Paldiski), al este (Narva) y al sur (Tartu y Riga).",
  busText:
    "Los buses de Lux Express y Tpilet cubren lo que el tren no: Tartu–Narva directo (3 h), Tallin–Pärnu, Tallin–Loksa (para Hara), Tallin–Rummu, Tartu–Värska (Setomaa). Salen de la estación de autobuses de Tallin (a 15 min del centro en tranvía) con billete online o al conductor, y son puntuales a lo estonio. Bolt (que se inventó aquí) funciona en todas las ciudades por 3-6 €.",
  busCompanies: ["Lux Express (interurbanos y a Riga)", "Tpilet.ee (buscador de todos los buses)", "Buses urbanos de Tallin (contactless en el validador)", "Bolt"],
  apps: [
    { name: "Elron", use: "trenes con asiento; billete en el móvil o con tarjeta en el tren", url: "https://elron.ee/en" },
    { name: "Tpilet", use: "todos los buses interurbanos del país en una app", url: "https://www.tpilet.ee/en" },
    { name: "Bolt", use: "taxi con precio cerrado; nació en Tallin" },
    { name: "LTG Link", use: "el billete único Tallin–Riga–Vilnius", url: "https://ltglink.lt/en" },
    { name: "Google Maps", use: "perfecto con trenes, tranvías y buses" },
  ],
  noCarVerdictText:
    "Es de los países más fáciles del radar sin coche: todo lo importante (Tallin, Paldiski, Klooga, Narva, Sillamäe, Tartu) tiene tren o bus cada hora, las distancias son cortas y los estonios han digitalizado hasta las paradas. Lo único que cuesta es lo abandonado en mitad del bosque (Hara son 6 km a pie desde el bus; Rummu, 15 minutos) y los rincones del sureste (Setomaa) con buses escasos. Con coche irías a más búnkeres en la costa; sin coche vas a los que importan y lees en un tren naranja.",
  hardWithoutCar: [
    "Hara: bus a Loksa y 6 km a pie o en bici; o tour de Lahemaa.",
    "Setomaa (el Día del Reino Seto): buses desde Tartu escasos; el pueblo cambia cada año.",
    "Las islas (Saaremaa, Hiiumaa): bus + ferry, un día de viaje cada una; no están en la ficha por eso.",
    "La mina de Kohtla: tren y taxi de 10 km.",
  ],
  meta: vol([SEAT61, ELRON, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 25, note: "hostal en Tallin; pensión en Narva, 35 €" },
    { concept: "hotel-mid", eur: 70 },
    { concept: "comida-barata", eur: 8, note: "sopa y plato del día en una söökla (cantina); pastel de Kalamaja" },
    { concept: "restaurante", eur: 20 },
    { concept: "transporte-urbano", eur: 2 },
    { concept: "tren-intercity", eur: 12, note: "Tallin–Narva; a Paldiski, 4 €" },
    { concept: "cafe", eur: 3 },
    { concept: "supermercado", eur: 10 },
  ],
  tips: [
    "Es el país más caro de esta tanda (nivel Finlandia en el centro de Tallin): 70-80 € al día. Narva y el este, la mitad.",
    "Los museos gordos (Patarei, Vabamu, el piso 23, la torre) suman 50 € entre todos; lo raro (Linnahall, Maarjamäe, Paldiski, Sillamäe) es gratis.",
    "Ryanair a Tallin desde 30 € fuera de temporada; airBaltic, más cómodo y más caro.",
    "Euro, tarjeta en todo (hasta en el mercado) y roaming: cero fricción.",
    "Las cantinas (söökla) de barrio y los supermercados Rimi salvan el presupuesto; los restaurantes de la ciudad vieja son para finlandeses.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Tallin", airport: "TLL", airlines: ["Ryanair", "airBaltic"], lowCost: true, hours: 4, weekly: 6 },
  ],
  oneStop: [
    { via: "Riga (airBaltic)", airlines: ["airBaltic"], totalHours: 5.5 },
    { via: "Helsinki (Finnair) y ferry de 2 h", airlines: ["Finnair", "Vueling"], totalHours: 7 },
  ],
  tips: [
    "Directo con Ryanair (varios a la semana) y airBaltic (estacional): 4 horas, y del aeropuerto al centro en tranvía en 20 minutos.",
    "Entrar por Tallin y salir por Riga o Vilnius (Ryanair, Wizz) bajando en tren por el eje báltico es la jugada de las tres fichas.",
    "Helsinki está a 2 h de ferry: si el vuelo a Helsinki sale más barato, es una entrada válida y un paseo por el golfo.",
  ],
  meta: vol([PROPIO], "Ryanair y airBaltic cambian frecuencias por temporada", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Nada que tramitar. La única frontera que vas a ver es la de Narva, y esa no se cruza: el puente a Ivangorod está cerrado desde 2022 y, aunque estuviera abierto, Rusia pide visado y sentido común.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea"],
  links: [MAEC],
  warnings: ["Narva: no intentes acercarte al puente ni fotografiar el control; la zona de frontera está señalizada y vigilada de los dos lados.", "Drones: prohibidos cerca de la frontera este y de las instalaciones militares (Paldiski sigue teniendo base)."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "De los países más seguros de Europa." },
    { key: "robos", level: "bajo", text: "Carteristas en la ciudad vieja en verano con los cruceros; nada más." },
    { key: "timos", level: "bajo", text: "Taxis de la calle en el puerto con tarifas absurdas: Bolt. Poco más." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. La frontera con Rusia está tensa pero es una frontera de la OTAN con guardias y cámaras, no un conflicto." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; ciberataques y sabotajes híbridos rusos de vez en cuando, que no afectan al viajero." },
    { key: "transporte", level: "bajo", text: "Trenes y buses impecables; hielo en las aceras de noviembre a marzo." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema en general; en Narva (frontera) y Paldiski (base militar activa), pregunta antes." },
    { key: "noche", level: "bajo", text: "Tallin de noche es segura; los borrachos finlandeses del ferry son ruidosos, no peligrosos." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo, con un inglés excelente en todo el país, wifi en todas partes y una cultura que respeta el silencio: nadie te va a dar conversación si no la pides, y eso a veces cansa. Mujeres solas: sin problemas. Lo que puede pesar es la oscuridad de invierno (sol a las 15:30) y los precios de Tallin.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE, la OTAN y la eurozona, la más digital del mundo (voto online desde 2005), gobernada por coaliciones liberales que rotan sin drama, con una minoría rusa del 25 % (mayoría en Narva y Sillamäe) que desde 2022 vive entre la lealtad al país y la tele de Moscú. Estonia es de los países más duros con Rusia y de los que más ayuda a Ucrania; la frontera del Narva es la línea de la OTAN. Para el que viaja, el país más estable y ordenado del radar.",
  watch: ["Sabotajes híbridos rusos (cables, GPS, drones): titulares, no riesgo", "Narva y Sillamäe: la mayoría rusa y las tensiones por los monumentos soviéticos retirados", "9 de mayo en Narva: la policía vigila que nadie celebre la Victoria con símbolos soviéticos"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "El país más digital de Europa, con roaming de la UE y wifi gratis hasta en los bosques (literal: hay puntos wifi en los parques nacionales). Google Maps sabe de todo, Elron y Tpilet venden en el móvil, Bolt está en cada esquina. Tarjeta en el 100 % de los sitios, incluidos el mercado y el bus; el efectivo es una rareza que a veces ni aceptan.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless para todo, incluidos museos, buses y puestos de mercado; nunca hace falta efectivo. Euro.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Estonio, una lengua fino-ugria con 14 casos y sin parientes indoeuropeos: no se entiende ni se lee, pero da igual, porque el inglés es casi universal (el mejor del radar) y la señalética va en estonio e inglés. En Narva y Sillamäe el idioma de la calle es el ruso, y ahí el inglés baja. Aprende «tere» y «aitäh» y te sonríen, que ya es mucho para un estonio.",
  machinesText:
    "Todo en inglés: las máquinas de Elron, los validadores del bus, los museos, las cantinas con menú en pantalla. En Narva, el ruso aparece en los carteles pequeños.",
  survivalPhrases: [
    { es: "Hola", local: "Tere", latin: "tere" },
    { es: "Gracias", local: "Aitäh", latin: "áitej" },
    { es: "¿Cuánto cuesta?", local: "Kui palju see maksab?", latin: "kui palyu see maksab" },
    { es: "Estación de tren", local: "Rongijaam", latin: "róngui-yaam" },
    { es: "Un billete a ..., por favor", local: "Üks pilet ..., palun", latin: "üks pilet ..., palun" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−10 °C, nieve, sol a las 15:30 y el mar helado en la bahía de Tallin; Linnahall con hielo" },
    { month: 2, kind: "clima", text: "El mes más frío; el 24, Día de la Independencia, con desfile militar en la plaza de la Libertad" },
    { month: 3, kind: "clima", text: "Deshielo y barro; el 25, aniversario de las deportaciones de 1949, con velas" },
    { month: 4, kind: "festival", text: "Tallinn Music Week a principios de mes: 200 conciertos", festivalId: "ee-tallinn-music-week" },
    { month: 5, kind: "temporada", text: "Primavera de golpe; Paldiski y Narva sin viento, días de 17 horas" },
    { month: 6, kind: "festival", text: "Jaanipäev la noche del 23: hogueras en cada finca y el país vacío", festivalId: "ee-jaanipaev" },
    { month: 6, kind: "temporada", text: "Noches blancas: no anochece del todo; Rummu abre la zona de baño" },
    { month: 7, kind: "festival", text: "Viljandi Folk el último fin de semana", festivalId: "ee-viljandi-folk" },
    { month: 7, kind: "clima", text: "El mes bueno: 22 grados, cruceros en Tallin y el resto del país vacío" },
    { month: 8, kind: "festival", text: "Día del Reino Seto el primer sábado", festivalId: "ee-seto-reino" },
    { month: 8, kind: "festivo", text: "El 20, Día de la Restauración de la Independencia (1991)" },
    { month: 9, kind: "temporada", text: "Otoño temprano, setas en los bosques, Rummu aún nadable a principios de mes" },
    { month: 10, kind: "clima", text: "Lluvia, viento y las primeras nieves en el este; buen mes para los museos" },
    { month: 11, kind: "clima", text: "Oscuridad: sol de 8:30 a 15:45 y gris; mercadillo de Navidad desde final de mes" },
    { month: 12, kind: "clima", text: "Nieve y el mercadillo de la plaza del Ayuntamiento, uno de los mejores de Europa" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Linnahall, Maarjamäe con sus estatuas tumbadas y Sillamäe: hormigón y estalinismo soviético de primera, intactos.",
    "Cárceles de tres regímenes (Patarei), el piso secreto del KGB y una ciudad nuclear cerrada, todo en tren o tranvía.",
    "Narva: la frontera con Rusia a 150 metros, en cercanías.",
    "El país más fácil del radar: DNI, euro, roaming, inglés universal, trenes naranjas y Bolt.",
    "Desde 2026, tren directo a Riga: el eje báltico entero sin coche.",
    "Seguro, ordenado y con noches blancas en verano.",
  ],
  cons: [
    "Caro: Tallin está a precios nórdicos.",
    "Pequeño: en nueve días se ve todo lo que importa.",
    "Los sitios abandonados del bosque (Hara) exigen caminatas largas.",
    "Invierno oscuro y helado de noviembre a marzo.",
    "Los estonios no dan conversación: el viaje puede ser silencioso.",
  ],
  text:
    "Estonia es el hormigón soviético con wifi: nueve días dan para Tallin con Linnahall, Patarei, el piso 23 y el memorial roto de Maarjamäe con las estatuas tumbadas, el tren a la ciudad cerrada de Paldiski con Klooga y la cárcel sumergida de Rummu, y el tren al este para la frontera de Narva, la fábrica imperial de Kreenholm y el Stalin de balneario de Sillamäe. Cinco, para Tallin y Paldiski. Trece, para añadir la base de submarinos de Hara, Tartu con su museo en la pista de bombarderos, y salir en el tren directo a Riga para bajar por los tres bálticos. Ve de junio a septiembre por la luz y por Rummu, entra por Tallin con Ryanair y sal por Vilnius con Wizz.",
  meta: est([PROPIO]),
};
