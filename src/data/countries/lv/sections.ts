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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Letonia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Vilnius–Riga–Tallinn", url: "https://www.seat61.com/trains-and-routes/vilnius-riga-tallinn-by-train.htm", kind: "blog" };
const VIVI: Source = { label: "Vivi", url: "https://www.vivi.lv/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Letonia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Latvia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Letonia tiene la red más extensa de los tres bálticos y la más útil para esta ficha: cercanías eléctricas nuevas desde Riga a Jūrmala y Ķemeri (cada 20 min), a Salaspils y Rumbula (línea de Ogre), a Sigulda y Līgatne (línea de Valga, con el enlace a Tartu y Tallin), y diésel lentos a Liepāja y Daugavpils (3 h cada uno, 8 €). Desde 2025 hay directo a Vilnius (4 h, LTG Link) y desde enero de 2026 a Tallin (6 h): Riga es el centro del eje báltico en tren. Billetes en la app de Vivi o al revisor; la estación central está en obras por Rail Baltica y cambia de andenes cada mes.",
  corridorsIntro: "Cuatro corredores desde Riga: Jūrmala, Sigulda-Valga, Liepāja y Daugavpils. Más los internacionales a Vilnius y Tallin.",
  busText:
    "Los buses cubren lo que el tren hace lento: Riga–Liepāja cada hora (3 h, pasando por Skrunda), Riga–Ventspils (para Irbene), Daugavpils–Vilnius directo (3 h), y los pueblos de la Costa de Livonia con dos al día. Salen de la estación de autobuses junto al mercado central, con billete online (1188.lv) o en ventanilla. Bolt en Riga, Liepāja y Daugavpils por 3-6 €.",
  busCompanies: ["Nordeka, Liepājas Autobusu Parks y demás en la estación central (1188.lv)", "Lux Express y Ecolines a Vilnius y Tallin", "Tranvías de Liepāja (el 1 a Karosta) y Daugavpils", "Bolt"],
  apps: [
    { name: "Vivi", use: "trenes de todo el país; billete en el móvil", url: "https://www.vivi.lv/en" },
    { name: "1188", use: "horarios y billetes de todos los buses interurbanos", url: "https://www.1188.lv/en" },
    { name: "LTG Link", use: "el billete Riga–Vilnius y el combinado báltico", url: "https://ltglink.lt/en" },
    { name: "Bolt", use: "taxi con precio cerrado en las tres ciudades grandes" },
    { name: "Google Maps", use: "perfecto con trenes, tranvías y trolebuses de Riga" },
  ],
  noCarVerdictText:
    "De los países más fáciles del radar sin coche: lo mejor (Salaspils, Ķemeri, Līgatne, Sigulda, Karosta, Daugavpils) está en la red de cercanías o al final de un tren de 3 h, y Riga se anda. Lo que cuesta es la Costa de Livonia (Irbene, dos buses al día y taxi) y los pueblos de Latgale. Skrunda-1 no se visita con coche ni sin él. Con coche verías más bosque; sin coche ves los mismos búnkeres y llegas a Vilnius y a Tallin en tren.",
  hardWithoutCar: [
    "Irbene: bus a Ventspils y taxi de 30 km, o los dos buses diarios de la costa y 3 km a pie. Un día entero.",
    "Līgatne: 4 km a pie desde la estación o taxi desde Sigulda; visitas en inglés solo algunos días.",
    "Skrunda-1: cerrada; solo la valla desde el bus.",
    "Los lagos y bosques de Latgale: buses rurales escasos.",
  ],
  meta: vol([SEAT61, VIVI, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 22, note: "hostal en Riga; noche en celda de Karosta, 20 €" },
    { concept: "hotel-mid", eur: 60 },
    { concept: "comida-barata", eur: 7, note: "sopa y plato en una cantina Lido; pelmeni en el mercado" },
    { concept: "restaurante", eur: 18 },
    { concept: "transporte-urbano", eur: 1.5 },
    { concept: "tren-intercity", eur: 8, note: "Riga–Liepāja o Daugavpils; cercanías, 1,50-3 €" },
    { concept: "cafe", eur: 2.5 },
    { concept: "supermercado", eur: 9 },
  ],
  tips: [
    "Más barato que Estonia y más caro que Lituania: 60-65 € al día en Riga, la mitad en Liepāja y Daugavpils.",
    "Las cantinas Lido (buffet letón con cerveza propia) son el almuerzo del viaje por 8 €.",
    "Ryanair a Riga desde 25 € fuera de temporada; airBaltic tiene más horarios y tarifas raras.",
    "Los museos caros son Līgatne (15 €) y el KGB (10 €); Salaspils, Ķemeri, Karosta por fuera y la Academia por 5 €.",
    "Euro, tarjeta en todo y roaming: sin fricción.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Riga", airport: "RIX", airlines: ["Ryanair", "airBaltic"], lowCost: true, hours: 3.7, weekly: 10 },
  ],
  oneStop: [
    { via: "Vilnius o Tallin y tren báltico", airlines: ["Wizz Air", "Ryanair"], totalHours: 8 },
  ],
  tips: [
    "Directo casi diario entre Ryanair y airBaltic; el aeropuerto está a 30 min en bus 22 (2 €).",
    "Riga es el centro del eje: entrar aquí y salir por Vilnius o Tallin en tren es la jugada de los tres bálticos.",
    "airBaltic conecta Riga con media Europa: si el directo de BCN no cuadra, casi cualquier escala pasa por aquí.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Nada que tramitar, roaming, sanidad europea. La única cosa que se parece a un trámite es la reserva del búnker de Līgatne, y esa es online.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea"],
  links: [MAEC],
  warnings: ["Skrunda-1 es zona militar: entrar es delito, no aventura.", "La frontera con Rusia y Bielorrusia (Latgale este) está cerrada y vigilada; no hay nada que ver allí."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Muy seguro; Riga de noche en la ciudad vieja tiene borrachos de despedida de soltero británica, nada más." },
    { key: "robos", level: "bajo", text: "Carteristas en el mercado central y los tranvías llenos; normal." },
    { key: "timos", level: "medio", text: "Bares de la ciudad vieja con cuentas infladas a turistas (el clásico báltico): mira los precios antes. Taxis del aeropuerto: Bolt." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. La frontera este está cerrada y lejos de todo lo de esta ficha." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; sabotajes híbridos ocasionales sin efecto en el viajero." },
    { key: "transporte", level: "bajo", text: "Trenes y buses seguros; hielo en invierno." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en Karosta hay una base naval activa junto a la cárcel: fotografía la cárcel, no los barcos." },
    { key: "noche", level: "bajo", text: "Tranquilo; en Daugavpils, muy tranquilo y muy oscuro." },
  ],
  conflictAreas: [],
  soloText:
    "Fácil para ir solo, con inglés bueno (mejor entre jóvenes; en Daugavpils, ruso), hostales buenos en Riga y una noche en celda de Karosta que se comparte con desconocidos. Mujeres solas: sin problemas. Lo que cansa es la oscuridad de noviembre y que Riga tiene más turismo de fiesta que las otras dos capitales.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE, la OTAN y la eurozona, con coaliciones de centro-derecha que rotan y una minoría rusa del 25 % (mayoría en Daugavpils) a la que desde 2022 se le exige examen de letón para renovar la residencia, con la tele rusa bloqueada y los monumentos soviéticos demolidos (el de Riga, en 2022, con la ciudad mirando). Dura con Rusia, generosa con Ucrania, con Rail Baltica en obras y una economía que depende del puerto de Riga. Para el viajero, cero problema.",
  watch: ["La minoría rusa y los exámenes de idioma: tensión política, no callejera", "9 de mayo: prohibidas las celebraciones con símbolos soviéticos; policía en Daugavpils", "Rail Baltica: la estación de Riga en obras hasta 2028"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Roaming europeo, 4G en todo el país (incluida la Costa de Livonia), wifi en trenes y cafés. Google Maps sabe de todo, Vivi y 1188 venden en el móvil, Bolt en las tres ciudades. Tarjeta en todo, hasta en el mercado; efectivo solo para el revisor de algún tren viejo y los puestos de los pueblos.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless en casi todo; unos euros en efectivo para los puestos del mercado y el taxi de Līgatne. Euro.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Letón, una lengua báltica (prima del lituano y de nadie más), en latino con diacríticos: se lee, no se entiende. Inglés bueno en Riga y entre menores de 40; ruso, la lengua de la calle en Daugavpils y de la mitad de Riga. La señalética va en letón y a menudo en inglés; en Daugavpils, oficialmente solo en letón, aunque todo el mundo hable ruso.",
  machinesText:
    "Máquinas de Vivi y validadores de Riga en inglés; los buses, en ventanilla o app; los museos, con audioguía en inglés. En Daugavpils, el tranvía se paga a la cobradora.",
  survivalPhrases: [
    { es: "Hola", local: "Sveiki", latin: "svéiki" },
    { es: "Gracias", local: "Paldies", latin: "paldíes" },
    { es: "¿Cuánto cuesta?", local: "Cik tas maksā?", latin: "tsik tas maksa" },
    { es: "Estación de tren", local: "Dzelzceļa stacija", latin: "dselstsela státsiya" },
    { es: "Un billete a ..., por favor", local: "Vienu biļeti uz ..., lūdzu", latin: "vienu bíleti uz ..., lúdzu" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−8 °C, nieve y el Daugava helado; luz de 9 a 16" },
    { month: 2, kind: "clima", text: "El mes más frío; la pista de bobsleigh de Sigulda a tope" },
    { month: 3, kind: "clima", text: "Deshielo y barro; el 25, velas por las deportaciones de 1949" },
    { month: 4, kind: "temporada", text: "Primavera tardía; Ķemeri con el pantano lleno de agua" },
    { month: 5, kind: "temporada", text: "Días largos y 16 grados; el 4, Día de la Independencia (1990)" },
    { month: 6, kind: "festival", text: "Jāņi la noche del 23: coronas de roble, queso y hogueras", festivalId: "lv-jani" },
    { month: 7, kind: "festival", text: "Positivus en Riga a mediados de mes", festivalId: "lv-positivus" },
    { month: 7, kind: "clima", text: "El mes bueno: 22 grados, Jūrmala llena y el resto vacío" },
    { month: 8, kind: "temporada", text: "Sigue el verano; Karosta con la playa y los fuertes al atardecer" },
    { month: 9, kind: "temporada", text: "Otoño con luz; Salaspils y Ķemeri con hojas" },
    { month: 10, kind: "clima", text: "Lluvia y viento en Liepāja (la ciudad del viento se gana el nombre)" },
    { month: 11, kind: "festival", text: "Lāčplēsis el 11 (velas en la muralla) y Staro Rīga del 14 al 18 (luces)", festivalId: "lv-lacplesis-11-noviembre" },
    { month: 11, kind: "festival", text: "Staro Rīga, el festival de la luz, hasta el 18 con fuegos", festivalId: "lv-staro-riga" },
    { month: 12, kind: "clima", text: "Nieve y mercadillo de Navidad en la plaza de la Catedral (Riga dice que inventó el árbol de Navidad)" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Salaspils: los gigantes de hormigón con el corazón que late, en cercanías.",
    "Un búnker del gobierno intacto bajo un balneario de jubilados del Partido, y una cárcel militar donde se duerme.",
    "La tarta de Stalin con mirador, el KGB de la esquina y los hangares de zepelines, en un paseo.",
    "El centro del eje báltico en tren: Vilnius a 4 h, Tallin a 6.",
    "DNI, euro, roaming, inglés y Ryanair.",
    "Daugavpils: la URSS que se quedó en la UE, con Rothko.",
  ],
  cons: [
    "Riga tiene turismo de fiesta y bares que inflan cuentas.",
    "Irbene y la Costa de Livonia, sin coche, son un día de logística lenta.",
    "Skrunda-1 ya no se visita.",
    "La estación central en obras hasta 2028.",
    "Invierno oscuro y helado; Liepāja con viento todo el año.",
  ],
  text:
    "Letonia es el espomenik báltico con cercanías: nueve días dan para Riga con la tarta de Stalin, el KGB de la esquina y los zepelines, los gigantes de Salaspils, el balneario abandonado de Ķemeri, el búnker del gobierno en Līgatne con el bobsleigh de Sigulda y la noche en la celda de Karosta. Cuatro, para Riga, Salaspils y el búnker. Trece, para añadir la oreja soviética de Irbene, Daugavpils con Rothko y sus bloques rusos, y salir en tren a Vilnius. Ve de junio a septiembre, reserva el búnker antes que el vuelo y, si vas en noviembre, que sea el 11: la muralla con velas vale la oscuridad.",
  meta: est([PROPIO]),
};
