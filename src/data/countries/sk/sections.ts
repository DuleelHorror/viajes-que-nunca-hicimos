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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Eslovaquia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Slovakia", url: "https://www.seat61.com/Slovakia.htm", kind: "blog" };
const ZSSK: Source = { label: "ZSSK", url: "https://www.zssk.sk/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Eslovaquia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Slovakia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Eslovaquia es una línea: la troncal Bratislava–Žilina–Poprad–Košice (5 h 15, 17-25 €) con ZSSK y RegioJet cada hora, de la que cuelgan los ramales que importan: Zvolen y Banská Bystrica (3 h 30), el ramal de vía única a Banská Štiavnica (cambio en Hronská Dúbrava), el regional a Kremnica, y el TEŽ, el tranvía eléctrico de los Tatras que sube de Poprad a Štrbské Pleso por 2 €. Los EC a Budapest (2 h 30) y a Viena (1 h) salen cada hora. Los famosos «trenes gratis» son para residentes en Eslovaquia (estudiantes menores de 26 y mayores de 62): el turista paga, y paga poco. Todo online en inglés.",
  corridorsIntro: "Tres corredores: la troncal hasta Košice, el del Hron a Banská Bystrica, y el ramal minero a Banská Štiavnica.",
  busText:
    "Los buses (Slovak Lines, Arriva, FlixBus) cubren lo que el tren no: Bratislava–Viena cada media hora (1 h), Banská Bystrica–Banská Štiavnica directo (1 h, más rápido que el tren), y los pueblos de los Tatras. En Bratislava, el 29 a Devín desde bajo el OVNI, el 80/93 a Petržalka, el 31 al crematorio y el 61 al aeropuerto. Bolt en Bratislava y Košice por 3-5 €.",
  busCompanies: ["Slovak Lines y Arriva (interurbanos)", "FlixBus y RegioJet (Viena, Budapest, Praga)", "DPB (Bratislava: tranvías, trolebuses, buses con contactless)", "Bolt"],
  apps: [
    { name: "ZSSK", use: "trenes con billete en el móvil; los IC con asiento", url: "https://www.zssk.sk/en/" },
    { name: "RegioJet", use: "la troncal a Poprad y Košice con café gratis; también Viena y Budapest", url: "https://regiojet.com" },
    { name: "IDS BK", use: "el transporte de Bratislava con billete en el móvil" },
    { name: "Bolt", use: "taxi con precio cerrado en Bratislava y Košice" },
    { name: "cp.sk", use: "el buscador de todo el transporte público eslovaco, trenes y buses", url: "https://cp.hnonline.sk/vlakbus/spojenie/" },
  ],
  noCarVerdictText:
    "De los más fáciles del radar: todo lo de Bratislava va en bus urbano (Devín, Petržalka, el crematorio), las ciudades mineras tienen tren (con cambios), y los Tatras tienen su propio tranvía. Lo que cuesta son los pueblos de madera del norte (Vlkolínec, Čičmany) y los castillos en ruinas de la montaña, con buses de dos al día. Con coche verías más castillos; sin coche ves el hormigón y la plata, y subes a los Tatras en un tranvía de 1912.",
  hardWithoutCar: [
    "Banská Štiavnica: dos cambios de tren desde Bratislava (o bus directo desde Banská Bystrica); merece la noche.",
    "Vlkolínec y Čičmany (pueblos de madera pintada): buses escasos; fuera de la ficha por eso.",
    "Chatam Sofer: no es transporte, es cita de 48 h.",
    "El búnker B-S 8: solo abre fines de semana.",
  ],
  meta: vol([SEAT61, ZSSK, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 22, note: "hostal en Bratislava; pensión en Banská Štiavnica en un palacio, 35 €" },
    { concept: "hotel-mid", eur: 60 },
    { concept: "comida-barata", eur: 6, note: "bryndzové halušky (ñoquis con queso de oveja) en una cantina, 6 €" },
    { concept: "restaurante", eur: 15 },
    { concept: "transporte-urbano", eur: 1.1 },
    { concept: "tren-intercity", eur: 12, note: "Bratislava–Banská Bystrica; a Košice, 17-25 €" },
    { concept: "cafe", eur: 2.5 },
    { concept: "supermercado", eur: 8 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 55 € al día con trenes, y las cantinas de halušky alimentan por 6 €.",
    "Euro, tarjeta en todo y roaming: cero fricción.",
    "Ryanair y Wizz a Bratislava desde 35 €; si sale mejor Viena (Vueling), el bus a Bratislava cuesta 5-10 €.",
    "El UFO cobra 7-11 € por subir, pero es gratis si consumes en el restaurante (una copa vale lo mismo).",
    "RegioJet suele ser más barato que ZSSK en la troncal y da café: compara en cp.sk.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Bratislava", airport: "BTS", airlines: ["Ryanair", "Wizz Air"], lowCost: true, hours: 2.3, weekly: 16 },
  ],
  oneStop: [
    { via: "Viena (Vueling, Ryanair) y bus de 1 h", airlines: ["Vueling", "Ryanair"], totalHours: 4 },
    { via: "Košice (Ryanair vía Viena o Milán)", airlines: ["Ryanair"], totalHours: 6 },
  ],
  tips: [
    "Directo a Bratislava 16 veces por semana, con Ryanair manteniéndolo en invierno 2026-27; del aeropuerto al centro, bus 61 en 25 min.",
    "Viena está a 1 h: entrar por Viena y salir por Bratislava (o al revés) da el doble de vuelos.",
    "Košice tiene Ryanair a Viena, Londres y Milán: sirve para salir por el este con una escala.",
    "Bratislava encadena con Budapest (2 h 30), Viena (1 h) y Praga (4 h) en tren: la ficha se hace en pareja con Hungría.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Nada que tramitar, roaming y sanidad europea. Lo único con trámite es Chatam Sofer (cita de 48 h con la comunidad judía) y la ceca de Kremnica (mínimo 5 personas por visita).",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea"],
  links: [MAEC],
  warnings: ["La frontera con Ucrania (Vyšné Nemecké, al este de Košice) tiene controles serios y tráfico de refugiados; no está en la ficha.", "Drones en Devín (frontera) y Slavín: pregunta."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Muy seguro; Bratislava de noche, tranquila salvo las despedidas de soltero de la plaza." },
    { key: "robos", level: "bajo", text: "Carteristas en el tranvía y la estación central; poco." },
    { key: "timos", level: "bajo", text: "Taxis de la calle en la estación y el aeropuerto con tarifas raras: Bolt. Nada más." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna; la frontera ucraniana está lejos y controlada." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "bajo", text: "Trenes y buses seguros; hielo en los Tatras en invierno." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en Luník IX (Košice), no." },
    { key: "noche", level: "bajo", text: "Tranquilo; Petržalka de noche es un barrio normal desde hace veinte años." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo: hostales buenos en Bratislava y Banská Štiavnica, inglés entre jóvenes, checo e inglés en el resto, y un país donde la gente te explica el Levantamiento sin que preguntes. Mujeres solas: sin problemas. Lo que cansa son los cambios de tren del centro y que Bratislava se ve en dos días si no te gustan los edificios.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE, la OTAN y la eurozona, gobernada desde 2023 por Robert Fico (su cuarto gobierno) en coalición con nacionalistas, con un giro prorruso en la retórica, presión sobre medios y ONG, y un atentado contra el propio Fico en 2024 que sobrevivió. 2026 es «preelectoral» (las legislativas son en 2027) y el país está partido entre Bratislava y el este. Para el que viaja, cero problema: los trenes funcionan, los museos abren y el memorial del Levantamiento sigue siendo de todos.",
  watch: ["Elecciones regionales de otoño de 2026 y las generales de 2027: manifestaciones en Bratislava, pacíficas", "La retórica sobre Ucrania: no afecta al viajero", "Los museos de memoria (SNP, Devín) y su discurso con cada gobierno"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Roaming europeo, 5G en Bratislava y 4G hasta en los Tatras. ZSSK, RegioJet e IDS BK venden en el móvil; cp.sk busca todo; Bolt en las dos ciudades grandes; Google Maps perfecto. Tarjeta en todo, hasta en el TEŽ; el efectivo solo para el donativo del búnker y algún puesto de Východná.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless en casi todo, incluido el transporte urbano y los trenes; unos euros para donativos, mercadillos y cantinas de pueblo.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Eslovaco, eslavo occidental en latino con diacríticos, hermano del checo (se entienden entre ellos) y primo del polaco: se lee, y con un poco de polaco o checo se pilla algo. Inglés bueno entre menores de 40 y en Bratislava; alemán en el oeste; húngaro en el sur. La señalética de trenes va en eslovaco e inglés; los buses de pueblo, en eslovaco. Aprende «ďakujem» (gracias, «dyákuyem») y los números.",
  machinesText:
    "Máquinas de ZSSK y de los tranvías en inglés; los museos con audioguía en inglés; el TEŽ, con tarjeta a bordo. La ceca de Kremnica y la mina de Štiavnica, con guía (inglés si hay grupo).",
  survivalPhrases: [
    { es: "Hola", local: "Dobrý deň", latin: "dóbri dyeñ" },
    { es: "Gracias", local: "Ďakujem", latin: "dyákuyem" },
    { es: "¿Cuánto cuesta?", local: "Koľko to stojí?", latin: "kolko to stoyí" },
    { es: "Estación de tren", local: "Železničná stanica", latin: "zhelezníchna stánitsa" },
    { es: "Un billete a ..., por favor", local: "Jeden lístok do ..., prosím", latin: "yéden lístok do ..., prosím" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−5 °C, nieve en los Tatras y esquí en Štrbské Pleso; Bratislava gris" },
    { month: 2, kind: "clima", text: "Fašiangy (carnaval) en los pueblos con máscaras; el mes más frío" },
    { month: 3, kind: "clima", text: "Deshielo; Devín con el Morava crecido" },
    { month: 4, kind: "temporada", text: "Primavera; Pascua con el látigo de mimbre (los chicos azotan a las chicas, en serio) el lunes" },
    { month: 5, kind: "temporada", text: "El mes redondo para Bratislava y las ciudades mineras: 20 grados y nadie" },
    { month: 6, kind: "temporada", text: "Abren los senderos altos de los Tatras (del 15 de junio al 31 de octubre)" },
    { month: 7, kind: "festival", text: "Východná el primer fin de semana y Pohoda el segundo", festivalId: "sk-vychodna" },
    { month: 7, kind: "festival", text: "Pohoda en el aeródromo de Trenčín, 30.º aniversario", festivalId: "sk-pohoda" },
    { month: 8, kind: "festivo", text: "El 29, aniversario del Levantamiento: Banská Bystrica llena de veteranos y políticos" },
    { month: 9, kind: "festival", text: "El Salamander de los mineros en Banská Štiavnica, segundo fin de semana", festivalId: "sk-salamander" },
    { month: 9, kind: "temporada", text: "Otoño en los Tatras con los senderos aún abiertos: el otro mes bueno" },
    { month: 10, kind: "temporada", text: "Colores en el Hron; los senderos altos cierran el 31" },
    { month: 11, kind: "festival", text: "El 17, Día de la Lucha por la Libertad (1989); los mercadillos arrancan el 27", festivalId: "sk-navidad-bratislava" },
    { month: 12, kind: "clima", text: "Mercadillos hasta el 3 de enero y −2 °C; los Tatras en blanco" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Brutalismo checoslovaco de manual: el puente OVNI, la pirámide invertida, el crematorio del robledal, el platillo partido del Levantamiento.",
    "El Telón de Acero donde se moría mirando Austria, con un búnker de voluntarios y una puerta acribillada, en bus urbano.",
    "Una ciudad de plata con mina para bajar con casco y una ceca de 1328, en trenes de ramal.",
    "Los Tatras con tranvía eléctrico de 2 € y hoteles de hormigón junto a un lago glaciar.",
    "DNI, euro, roaming, Ryanair y Viena a una hora.",
    "Pareja perfecta de Hungría: Budapest a 2 h 30 en tren.",
  ],
  cons: [
    "Pequeño: en nueve días se ve lo que importa.",
    "Los ramales del centro son cambios de tren y esperas.",
    "Menos historia oscura que sus vecinos: Eslovaquia es más hormigón que Gulag.",
    "Bratislava tiene turismo de despedida de soltero de Viena.",
    "Los trenes gratis no son para ti.",
  ],
  text:
    "Eslovaquia es el país del brutalismo checoslovaco que nadie visita, a una hora de Viena. Nueve días dan para Bratislava con el OVNI sobre Petržalka, la pirámide boca abajo, el crematorio en el robledal, el búnker del Telón de Acero y Devín con su puerta acribillada; el tren al platillo partido del Levantamiento en Banská Bystrica, el ramal a la ciudad de la plata para bajar a la mina, y la troncal hasta los Tatras para el hormigón de 1970 junto al lago. Cuatro, para Bratislava. Trece, para entrar desde Budapest y salir por Košice. Ve en mayo o en septiembre (o el primer fin de semana de julio por Východná), cuadra un sábado para el búnker, y hazlo en pareja con Hungría: son el mismo viaje.",
  meta: est([PROPIO]),
};
