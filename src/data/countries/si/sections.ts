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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Eslovenia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Slovenia", url: "https://www.seat61.com/Slovenia.htm", kind: "blog" };
const SZ: Source = { label: "Slovenske železnice", url: "https://potniski.sz.si/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Eslovenia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Slovenia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Eslovenia es pequeña y su tren llega a casi todo lo de la ficha: Postojna en 1 h 20 cada hora, Koper con el apeadero de Hrastovlje, Trbovlje y Ptuj por la línea del Sava, y la joya, la línea de Bohinj (1906) por Bled, el túnel de 6 km y el puente de piedra de Solkan hasta Nova Gorica, la puerta de Kobarid. Trenes regionales viejos y puntuales, billetes de 5-15 € en la app de Slovenske železnice o en taquilla, sin reserva. Liubliana–Zagreb, 9 al día en 2 h 30, para encadenar con Croacia; Liubliana–Trieste y Viena, también.",
  corridorsIntro: "Tres corredores: la línea a Koper (Postojna, Hrastovlje), la de Bohinj (Bled, Nova Gorica) y la del Sava (Trbovlje, Ptuj).",
  busText:
    "Los buses (Nomago, Arriva) salen de la estación de Liubliana, pegada a la de tren: Vrhnika cada 30 min, Idrija y Cerkno cada 1-2 h, Cerknica, Bled y Bohinj a todas horas; Kobarid directo solo viernes y domingo, el resto desde Nova Gorica o Tolmin. Billete al conductor o en la app Nomago. En Liubliana, bus urbano con la tarjeta Urbana (1,30 €) y un centro peatonal; taxis caros, sin Bolt (hay Uber desde 2024 a medias).",
  busCompanies: ["Nomago y Arriva (interurbanos desde la estación de Liubliana)", "LPP (buses urbanos de Liubliana, tarjeta Urbana)", "Furman (bus gratuito de Postojna a la cueva)", "Slovenske železnice (trenes)"],
  apps: [
    { name: "SŽ (Slovenske železnice)", use: "horarios y billetes de tren", url: "https://potniski.sz.si/en/" },
    { name: "Nomago", use: "buses interurbanos con billetes", url: "https://www.nomago.si/en" },
    { name: "Google Maps", use: "funciona con trenes, buses interurbanos y el LPP" },
    { name: "Urbana", use: "la tarjeta del bus de Liubliana (se compra en quioscos)" },
  ],
  noCarVerdictText:
    "Se puede, y bien: es un país del tamaño de Aragón con tren a Postojna, Hrastovlje, Trbovlje, Ptuj y Nova Gorica, y bus a Vrhnika, Idrija, Cerkno y Kobarid. Lo que cuesta sin coche son los búnkeres de la línea Rupnik (una hora a pie desde el bus, o taxi), Franja (cerrado de todas formas) y el valle del Soča más allá de Kobarid. Con coche verías más Alpes; sin coche ves el tren de Bohinj, que es mejor que los Alpes.",
  hardWithoutCar: [
    "Zaplana: 1 h a pie desde Vrhnika o taxi de 10 €; Goli vrh, bus a Žiri y 45 min a pie, solo el primer sábado de mes.",
    "Kobarid entre semana: tren de Bohinj a Nova Gorica y bus, 4 h en total.",
    "Franja: 30-40 min a pie desde Cerkno, y cerrado.",
    "Predjama: lanzadera del parque en verano o taxi desde Postojna.",
  ],
  meta: vol([SEAT61, SZ, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 30, note: "hostal en Liubliana (Celica, en la cárcel de Metelkova, desde 30 €); pensión en Kobarid, 45 €" },
    { concept: "hotel-mid", eur: 80 },
    { concept: "comida-barata", eur: 7, note: "burek de 3 €; menú del día (malica) de 8-10 € en cualquier bar hasta las 14" },
    { concept: "restaurante", eur: 22, note: "gostilna con vino de Goriška Brda; trucha en el Soča" },
    { concept: "transporte-urbano", eur: 1.3 },
    { concept: "tren-intercity", eur: 10, note: "Liubliana–Postojna 7 €; a Nova Gorica 12 €; a Zagreb 10-30 €" },
    { concept: "cafe", eur: 2 },
    { concept: "supermercado", eur: 10 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar, dentro de lo que es la UE alpina: 65-75 € al día con hostal y malica; Bled y el Soča en agosto, más.",
    "La malica (menú de mediodía, 8-10 € con sopa) es la forma de comer bien y barato: todos los bares la tienen entre las 11 y las 14.",
    "Vueling a Liubliana desde 31-70 € por trayecto hasta noviembre; en invierno, Ryanair a Trieste y bus de 1 h 30.",
    "Las entradas grandes son Postojna (30-33 €) y Predjama; el resto de la ficha cuesta 0-14 €.",
    "El tren es barato y la app SŽ da descuento de ida y vuelta el mismo día.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Liubliana", airport: "LJU", airlines: ["Vueling"], lowCost: true, hours: 2.1, weekly: 4 },
  ],
  oneStop: [
    { via: "Trieste (Ryanair) y bus de 1 h 30 a Liubliana", airlines: ["Ryanair"], totalHours: 4.5 },
    { via: "Zagreb (Croatia Airlines) y tren de 2 h 30", airlines: ["Croatia Airlines"], totalHours: 5.5 },
    { via: "Venecia (Vueling, Ryanair) y tren-bus (FlixBus) de 3 h", airlines: ["Vueling", "Ryanair", "FlixBus"], totalHours: 6 },
  ],
  tips: [
    "Vueling vuela directo a Liubliana varios días por semana hasta el 19 de noviembre; de diciembre a marzo, no.",
    "Trieste está a 1 h 30 en bus de Liubliana y Ryanair vuela desde BCN: la entrada de invierno.",
    "Del aeropuerto de Liubliana al centro, bus 28 (45 min, 4 €) o lanzadera (9 €).",
    "Eslovenia encadena con Croacia (tren a Zagreb 2 h 30, la pareja de esta ficha), Italia (Trieste, Venecia) y Austria (Villach, Viena en tren).",
  ],
  meta: vol([PROPIO], "Vueling estacional; verificar el calendario de invierno", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Roaming europeo. Nada que tramitar; tarjeta sanitaria europea válida. El sitio más fácil del radar en papeles, con Austria.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea", "Nada más"],
  links: [MAEC],
  warnings: ["Dron en el Soča y en los búnkeres: permiso; en Metelkova, sin foto a la gente de noche, que se enfadan."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "De lo más bajo de Europa." },
    { key: "robos", level: "bajo", text: "Casi nada; en Metelkova de madrugada, lo normal." },
    { key: "timos", level: "bajo", text: "Ninguno conocido; los taxis de Liubliana son caros pero con taxímetro." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "bajo", text: "Trenes y buses impecables; en los búnkeres, cuidado con los pozos y la oscuridad." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en Hrastovlje, sin flash." },
    { key: "noche", level: "bajo", text: "Liubliana de noche, tranquila; Metelkova, viva y con seguridad propia." },
  ],
  conflictAreas: [],
  soloText:
    "Fácil para ir solo, con inglés perfecto en todo el mundo menor de 60, hostales buenos (el de la cárcel), malica en cada bar y trenes que llegan a la hora. Mujeres solas: sin problemas específicos. Lo que cansa es que el país es pequeño y en ocho días se acaba, y que es más caro de lo que su tamaño sugiere.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE, el euro y Schengen, la primera en salir de Yugoslavia (1991, con una guerra de diez días) y la más rica de las ex, con gobiernos que alternan entre el populista Janša y coaliciones liberales (Golob desde 2022). Sin conflictos, con una memoria partisana viva (Franja, Kobarid) y una guerra civil de 1941-45 (partisanos contra domobranci) que todavía divide en las elecciones. Para el que viaja: Suiza con precios de Italia y museos yugoslavos.",
  watch: ["Elecciones de 2026 y el vaivén Janša-liberales, sin efecto en el viajero", "Franja: la reapertura", "Vueling: el calendario de invierno"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "UE: roaming europeo. Tarjeta en todo (también en los buses interurbanos con la app); efectivo para la llave de Hrastovlje, Goli vrh (5 €) y algún bar de pueblo. Google Maps funciona con trenes y buses; la app SŽ vende billetes. Wifi en cada bar y en los trenes nuevos.",
  blocked: [],
  esimProviders: ["Roaming UE", "Airalo (si vienes de fuera)", "SIM de Telekom Slovenije o A1 (10 €)"],
  payments:
    "Tarjeta en casi todo; efectivo (euros) para Goli vrh, la llave de Hrastovlje, taxis de pueblo y la malica de algún bar.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Esloveno, eslavo con dual (tienen una forma verbal para «nosotros dos») y alfabeto latino con č, š, ž; inglés excelente en todo el país (el mejor del radar con los nórdicos), italiano en la costa y alemán en el norte. Los carteles del tren, en esloveno con inglés en las estaciones grandes; los museos, en inglés. Con serbocroata se entiende la mitad.",
  machinesText:
    "Máquinas de tren en inglés; buses con conductor que habla inglés; la app SŽ y Nomago en inglés. Cero problemas.",
  survivalPhrases: [
    { es: "Hola", local: "Živjo / Dober dan", latin: "zhívio / dóber dan" },
    { es: "Gracias", local: "Hvala", latin: "jvála" },
    { es: "¿Cuánto cuesta?", local: "Koliko stane?", latin: "kóliko stáne" },
    { es: "Estación de tren", local: "Železniška postaja", latin: "zhelezníshka postáya" },
    { es: "¿Este tren para en Hrastovlje?", local: "Ali ta vlak ustavi v Hrastovljah?", latin: "áli ta vlak ustávi v Hrastóvlyaj" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "Nieve en Liubliana y los búnkeres inaccesibles; el Soča helado" },
    { month: 2, kind: "festival", text: "Kurentovanje en Ptuj y el carnaval de las brujas de Cerknica", festivalId: "si-kurentovanje" },
    { month: 2, kind: "festival", text: "Pust de Cerknica, la república de los tontos", festivalId: "si-cerknica-pust" },
    { month: 3, kind: "clima", text: "Deshielo; Vueling vuelve a final de mes; el lago de Cerknica lleno" },
    { month: 4, kind: "temporada", text: "Primavera en el Karst; Zaplana sin nieve; Postojna sin colas" },
    { month: 5, kind: "temporada", text: "El mes redondo: 22 grados, el Soča turquesa, todo abierto" },
    { month: 6, kind: "festivo", text: "Día del Estado el 25: fiesta en la plaza de la República, donde se declaró" },
    { month: 7, kind: "festival", text: "Ana Desetnica en las calles de Liubliana la primera semana", festivalId: "si-ana-desetnica" },
    { month: 8, kind: "clima", text: "30 grados y Bled lleno; el Soča con kayaks; el tren de vapor de Bohinj" },
    { month: 9, kind: "festival", text: "Kravji bal en Bohinj el tercer domingo: las vacas con flores", festivalId: "si-kravji-bal" },
    { month: 10, kind: "temporada", text: "El otro mes redondo: otoño en el Soča y en los búnkeres, vendimia en Brda" },
    { month: 11, kind: "temporada", text: "Último Vueling el 19; lluvia; el 1, Žale lleno de velas" },
    { month: 12, kind: "clima", text: "Navidad con luces de Plečnik; frío y niebla en Liubliana" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Una Maginot yugoslava de 4.000 búnkeres que nunca disparó, en un sendero desde el bus.",
    "Caporetto en un museo de pueblo que gana premios y un osario fascista inaugurado por Mussolini.",
    "Once esqueletos de 1490 a un kilómetro de un apeadero; un cementerio con catorce capillas y pabellón para ateos.",
    "Un cuartel okupado con hostal en la cárcel, una mina de mercurio de 1500 y una chimenea de 360 metros.",
    "Tren a casi todo, inglés perfecto, DNI, euro, roaming y Vueling directo.",
    "Se encadena con Croacia en 2 h 30 de tren.",
  ],
  cons: [
    "Pequeño: en ocho días se acaba.",
    "Más caro de lo que parece (65-75 € al día).",
    "Franja cerrado; Goli vrh solo un sábado al mes; Kobarid directo solo dos días.",
    "Vueling no vuela en invierno.",
    "Poco oscuro comparado con el resto del radar: es más bonito que raro.",
  ],
  text:
    "Eslovenia es el país del radar que parece Suiza y esconde una Maginot de búnkeres en el bosque, un hospital secreto en una garganta y una danza de la muerte a un kilómetro de un apeadero. Ocho días dan para Liubliana con Metelkova, Žale y Ravnikar, los búnkeres de Zaplana, la mina de Idrija, Postojna en tren, Hrastovlje en regional y el tren de Bohinj hasta Kobarid. Cuatro, para la capital y los búnkeres. Doce, para Trbovlje, Ptuj con los kurenti y la salida en tren a Zagreb. Ve en mayo o en octubre, lleva linterna, y come la malica antes de las dos.",
  meta: est([PROPIO]),
};
