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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Chipre", kind: "oficial" };
const INTERCITY: Source = { label: "InterCity Buses", url: "https://intercity-buses.com/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Chipre", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Cyprus", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Chipre no tiene tren desde 1951 (el ferrocarril colonial de Famagusta a Nicosia se desguazó y queda una locomotora en la puerta de Famagusta): esta ficha va entera en bus, y el bus funciona. No hay corredores ferroviarios que listar.",
  corridorsIntro: "Sin tren. Los buses hacen de tren: InterCity en el sur, İtimat y VirgoBus en el norte.",
  busText:
    "InterCity Buses une todas las ciudades del sur a diario (Larnaca–Nicosia 45 min, Nicosia–Limassol 1 h 15, Limassol–Pafos 1 h, Larnaca–Ayia Napa) por 3-9 €, con salidas cada 30-60 min y billete al conductor; los buses urbanos de cada ciudad (OSEL, EMEL, Pafos Buses) cuestan 1,50 €. En el norte, desde la terminal de Nicosia norte (a 10 min del paso de Ledra Street): İtimat a Famagusta cada hora de 07:00 a 18:00 (1 h) y VirgoBus a Kyrenia cada 30 min (50 min), por 2-3 € en liras o euros. Los taxis son caros en el sur (10 € mínimo) y baratos en el norte. Bolt funciona en Nicosia, Limassol y Larnaca.",
  busCompanies: ["InterCity Buses (sur, entre ciudades)", "OSEL / EMEL / Pafos Buses / Zinonas (urbanos)", "İtimat (Nicosia norte–Famagusta)", "VirgoBus / Kombos (Nicosia norte–Kyrenia)", "Bolt (sur)"],
  apps: [
    { name: "InterCity Buses", use: "horarios entre ciudades del sur", url: "https://intercity-buses.com/en/" },
    { name: "Cyprus by Bus", use: "todos los buses del sur con horarios", url: "https://www.cyprusbybus.com" },
    { name: "Google Maps", use: "funciona con los buses del sur; en el norte, para andar" },
    { name: "Bolt", use: "taxis en el sur" },
  ],
  noCarVerdictText:
    "Se puede, aunque la isla está pensada para coche de alquiler: los InterCity hacen todas las ciudades del sur y los buses del norte hacen Famagusta y Kyrenia desde Nicosia, así que todo lo importante de la ficha (la Línea Verde, Varosha, Salamina, Kyrenia, Kourion, Choirokoitia, Pafos) va en bus. Lo que cuesta es lo de montaña (Troodos, los monasterios, Kykkos) y lo que está entre ciudades en el norte (Bellapais, San Bernabé, el cabo Karpaz): taxi. Y los buses del norte paran a las seis de la tarde.",
  hardWithoutCar: [
    "Bellapais: taxi de 10 € desde Kyrenia, sin bus.",
    "Troodos y los monasterios pintados: uno o dos buses al día desde Nicosia o Limassol; fuera de la ficha.",
    "El aeropuerto abandonado de Nicosia: no se visita con nada.",
    "El norte después de las 18:00: taxi o dormir allí.",
  ],
  meta: vol([INTERCITY, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 35, note: "hostal en Nicosia o Larnaca; pensión en Famagusta norte, 25 €" },
    { concept: "hotel-mid", eur: 75 },
    { concept: "comida-barata", eur: 7, note: "pita de souvlaki o halloumi; en el norte, kebab de 4 €" },
    { concept: "restaurante", eur: 20, note: "meze completo de 15-20 € por persona; con vino de Troodos" },
    { concept: "transporte-urbano", eur: 1.5 },
    { concept: "tren-intercity", eur: 5, note: "InterCity entre ciudades, 3-9 €; buses del norte, 2-3 €" },
    { concept: "cafe", eur: 3, note: "frappé; el café chipriota, 2 €" },
    { concept: "supermercado", eur: 10 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar, pero menos que en los Balcanes: 65-75 € al día con hostal; el norte es un 30-40 % más barato.",
    "Euro en el sur; liras turcas en el norte, donde aceptan euros a cambio malo: cambia 30-50 € en una casa de cambio del norte y paga el resto con tarjeta.",
    "Vuelos directos a Larnaca con cinco compañías: desde 60 € por trayecto fuera de verano.",
    "Los museos estatales cuestan 2-5 € y muchos de la lucha (los de propaganda) son gratis.",
    "Dormir una noche en Famagusta norte (25 €) sale más barato que la ida y vuelta con taxi y permite Varosha a primera hora.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; norte en liras; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Larnaca", airport: "LCA", airlines: ["Vueling", "Ryanair", "Wizz Air", "Aegean", "SKY express"], lowCost: true, hours: 4, weekly: 14 },
  ],
  oneStop: [
    { via: "Atenas (Aegean, SKY express)", airlines: ["Aegean", "SKY express"], totalHours: 6 },
    { via: "Pafos con escala (Ryanair vía Italia o Alemania)", airlines: ["Ryanair"], totalHours: 7 },
  ],
  tips: [
    "A Larnaca directo con cinco compañías (4 h); a Pafos no hay directo desde BCN, solo desde otras ciudades españolas con Ryanair.",
    "Entra siempre por Larnaca o Pafos: llegar por Ercan (norte) es entrar por un aeropuerto que la República no reconoce.",
    "Del aeropuerto de Larnaca salen InterCity directos a Nicosia y Limassol, y el bus 425 al centro (20 min).",
    "Chipre encadena con Grecia (vuelos de 1 h 30 a Atenas, ferry de temporada Limassol–Pireo) y con Israel y Líbano por avión.",
  ],
  meta: vol([PROPIO], "Frecuencias de verano; en invierno, Vueling y Ryanair bajan", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: Chipre es UE (no Schengen todavía; se sella el pasaporte si lo llevas, el DNI no). Para cruzar al norte, el mismo DNI en el paso de Ledra Street: es una «línea», no una frontera, y la República no reconoce el norte, así que no hay sello. Roaming europeo en el sur; en el norte, operadores turcos sin roaming.",
  steps: ["DNI en vigor (vale también para cruzar al norte)", "Nada que tramitar", "Seguro de viaje: la tarjeta sanitaria europea vale en el sur, no en el norte", "Entrar y salir por el sur (Larnaca o Pafos)"],
  links: [MAEC],
  warnings: ["Entrar por el norte (Ercan o los puertos de Kyrenia y Famagusta) es entrada ilegal para la República de Chipre.", "Dormir en el norte es legal y nadie lo controla, pero los hoteles del norte en propiedades griegas expropiadas son un lío judicial: se puede, y se sabe."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "De lo más bajo de Europa; el norte, igual." },
    { key: "robos", level: "bajo", text: "Casi nada; Ayia Napa de noche, lo normal de borrachera." },
    { key: "timos", level: "medio", text: "Cambio de euros a liras en el norte a tipos malos; taxis del sur sin taxímetro nocturno. Pide precio." },
    { key: "zonasConflicto", level: "medio", text: "La zona tampón y las áreas militares turcas (con carteles): no entrar, no fotografiar los cuarteles ni a los soldados. La Línea Verde en sí es tranquila." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "bajo", text: "Buses buenos; se conduce por la izquierda, mira al cruzar." },
    { key: "camaraEnCalle", level: "medio", text: "Prohibido fotografiar cuarteles, la zona tampón desde dentro, las bases británicas y los edificios vallados de Varosha (lo hacen todos; los soldados a veces lo paran)." },
    { key: "noche", level: "bajo", text: "Nicosia y Larnaca de noche, tranquilas; el paso de Ledra Street abre 24 h." },
  ],
  conflictAreas: ["Zona tampón de la ONU: solo en tour", "Zonas militares turcas del norte y las partes valladas de Varosha"],
  soloText:
    "Fácil para ir solo, con inglés en todas partes (fue británica y lo sigue pareciendo: enchufes de tres clavijas, coches por la izquierda) y el país más seguro del radar junto a Corea. Mujeres solas: sin problemas específicos. Lo que cansa es el calor de verano y los horarios del norte.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República de la UE (2004) y del euro (2008) que controla el 60 % de la isla; el 36 % del norte es la «República Turca del Norte de Chipre», que solo reconoce Turquía, con 35.000 soldados turcos desde 1974; entre las dos, la zona tampón de la ONU y las dos bases británicas. Las negociaciones de reunificación llevan cincuenta años muertas y revividas; el cruce es libre desde 2003 y la gente lo usa para comprar gasolina y kebabs. Para el que viaja: tranquilo, con la geopolítica en cada esquina y dos versiones de todo.",
  watch: ["Varosha: el norte abre y cierra calles según la política; puede cerrarse", "El cruce de la Línea Verde: cambia con las crisis (en 2020 se cerró meses por el Covid)", "Elecciones y titulares turco-griegos, sin efecto en el viajero"],
  avoid: ["Decir «Turquía» por el norte o «Grecia» por el sur: son chipriotas, y les molesta a los dos"],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Sur: UE, roaming europeo, tarjeta en todo, Bolt, wifi en cada bar. Norte: sin roaming (operadores turcos Turkcell y Telsim; una SIM del norte cuesta 5-10 €, o dependes del wifi), tarjeta en hoteles y restaurantes grandes, efectivo en buses, museos y taxis. Google Maps funciona bien en el sur y regular en el norte (los nombres turcos y griegos se mezclan).",
  blocked: [],
  esimProviders: ["Roaming UE (solo el sur)", "Airalo (Chipre sur)", "SIM local del norte (Turkcell / Telsim)"],
  payments:
    "Tarjeta en casi todo el sur; en el norte, efectivo (liras turcas, o euros a mal cambio) para buses, museos, taxis y kebabs. Cajeros del norte dan liras; los del sur, euros.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Griego en el sur y turco en el norte, con inglés en todas partes y de verdad: fue colonia británica hasta 1960 y el inglés es la lengua de los negocios, los menús y los carteles (bilingües griego-inglés en el sur, turco-inglés en el norte). Es el país del radar donde menos falta el idioma. Un poco de griego («kalimera», «efjaristó») y de turco («teşekkürler») abre puertas en los dos lados.",
  machinesText:
    "Los buses son con conductor (dile el destino en inglés); los museos tienen carteles en inglés; los cajeros, en inglés. Cero problemas.",
  survivalPhrases: [
    { es: "Buenos días (sur)", local: "Καλημέρα", latin: "kaliméra" },
    { es: "Gracias (sur)", local: "Ευχαριστώ", latin: "efjaristó" },
    { es: "Gracias (norte)", local: "Teşekkürler", latin: "teshekkürler" },
    { es: "¿Cuánto cuesta?", local: "Πόσο κάνει; / Ne kadar?", latin: "póso káni / ne kadar" },
    { es: "¿Para en Choirokoitia?", local: "Stops at Choirokoitia?", latin: "(en inglés; lo entienden todos)" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "15 °C, lluvia a ratos; el lago de Larnaca lleno de flamencos" },
    { month: 2, kind: "festival", text: "Carnaval de Limassol, dos semanas antes de la cuaresma ortodoxa", festivalId: "cy-carnaval-limassol" },
    { month: 3, kind: "temporada", text: "Almendros en flor, 20 grados, todo abierto y vacío; Lunes Limpio con cometas" },
    { month: 4, kind: "festivo", text: "Pascua ortodoxa (cambia cada año): cordero, huevos rojos y fuegos artificiales en las iglesias" },
    { month: 5, kind: "temporada", text: "El mes redondo: 27 grados, mar templado, Varosha sin calor" },
    { month: 6, kind: "festival", text: "Kataklysmós en Larnaca (Pentecostés ortodoxo): batalla de agua", festivalId: "cy-kataklysmos" },
    { month: 7, kind: "clima", text: "35-40 °C; Nicosia, la ciudad más calurosa de Europa" },
    { month: 8, kind: "clima", text: "Sigue el horno; Ayia Napa a reventar; el 15, todo cerrado" },
    { month: 9, kind: "festival", text: "Fiesta del Vino de Limassol y ópera Afrodita en Pafos", festivalId: "cy-fiesta-vino-limassol" },
    { month: 9, kind: "festival", text: "Ópera en el castillo de Pafos", festivalId: "cy-pafos-afrodita" },
    { month: 10, kind: "temporada", text: "El otro mes redondo: 27 grados, mar caliente, sin masas" },
    { month: 11, kind: "temporada", text: "20 grados y las primeras lluvias; museos y Línea Verde con nadie" },
    { month: 12, kind: "clima", text: "Navidad a 17 °C; buses del norte con horario reducido en fiestas" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Varosha: la ciudad fantasma más grande de Europa, en bici y gratis.",
    "Cruzar de un país a otro con el DNI en medio de una calle comercial, y volver para cenar.",
    "Dos museos que cuentan la misma guerra al revés, un hotel de lujo hecho cuartel de la ONU y una base británica que se cruza en bus.",
    "Inglés de verdad, DNI, euro, Bolt y el país más seguro del Mediterráneo.",
    "Directos diarios a Larnaca con cinco compañías desde 60 €.",
    "Buen tiempo de octubre a mayo, cuando el resto del radar está en invierno.",
  ],
  cons: [
    "Sin tren: todo en bus, y los del norte paran a las seis.",
    "Caro para lo que es el radar (65-75 € al día) y la isla está pensada para coche.",
    "El aeropuerto abandonado no se visita; Varosha puede cerrar calles cuando quiera.",
    "En julio y agosto, 40 °C sin sombra.",
    "Pequeño: en nueve días se ve lo que importa.",
  ],
  text:
    "Chipre es el país del radar donde la Guerra Fría no se acabó y se cruza a pie con el DNI. Nueve días dan para Nicosia con la Línea Verde, la zona tampón y los dos museos de propaganda, Kyrenia y Bellapais por el norte, Famagusta con Varosha en bici y Salamina, y Limassol con Kourion cruzando la base británica. Cinco, para Nicosia y Varosha. Doce, para Pafos y el Kataklysmós de Larnaca en junio. Ve entre octubre y mayo, entra por Larnaca, cambia treinta euros en liras y no le digas a nadie de qué lado está la razón.",
  meta: est([PROPIO]),
};
