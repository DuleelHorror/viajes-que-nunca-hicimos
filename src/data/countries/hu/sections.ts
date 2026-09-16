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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Hungria", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Hungary", url: "https://www.seat61.com/Hungary.htm", kind: "blog" };
const MAV: Source = { label: "MÁV", url: "https://jegy.mav.hu/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Hungría", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Hungary", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Hungría es una red radial desde Budapest, con tres estaciones (Keleti al este y sur, Nyugati al norte, Déli al Balatón) y trenes MÁV baratos, frecuentes y con retrasos de manual: Pécs en 3 h 40 desde 10 €, Eger en 2 h, Veszprém en 1 h 40, y la línea de la orilla sur del Balatón con apeadero en cada playa, incluido Balatonaliga. Los IC llevan suplemento de asiento de 1-2 €; los EC a Bratislava (2 h 30) y Viena salen cada hora. La app MÁV vende todo en inglés y avisa de los retrasos.",
  corridorsIntro: "Cuatro corredores desde Budapest: Pécs, Eger, Veszprém y el Balatón sur. Más el EC a Bratislava.",
  busText:
    "Volánbusz cubre los pueblos: Eger–Recsk cada hora (39 min), Pécs–Mohács cada hora, Budapest–Hollókő dos al día desde Stadion, Siófok–Veszprém. Billete al conductor o en la app, baratos. En Budapest, el bus 100E del aeropuerto y los 101B/101E de Kelenföld a Memento Park; Bolt en toda la ciudad por 3-6 €.",
  busCompanies: ["Volánbusz (interurbanos)", "BKK (Budapest: metro, tranvías, buses, el 100E del aeropuerto)", "Bolt"],
  apps: [
    { name: "MÁV", use: "trenes con billete en el móvil y avisos de retraso", url: "https://jegy.mav.hu/" },
    { name: "BudapestGO", use: "el transporte de Budapest con billete en el móvil" },
    { name: "Volánbusz", use: "buses interurbanos con horarios y billete", url: "https://www.volanbusz.hu/en" },
    { name: "Bolt", use: "taxi con precio cerrado; los taxis de calle de Budapest tienen fama merecida" },
    { name: "Google Maps", use: "perfecto con el transporte de Budapest y los trenes" },
  ],
  noCarVerdictText:
    "De los países más fáciles del radar: Budapest tiene metro a todo (Memento Park incluido, con bus desde Kelenföld), y las bases (Eger, Pécs, Veszprém, el Balatón) van en tren cada hora. Lo que cuesta son los últimos kilómetros de lo abandonado: Recsk son 6 km desde el bus, Szentkirályszabadja un taxi de 10 km, Hollókő dos buses al día. Con coche verías más ruinas soviéticas del Balatón; sin coche ves el resort del Partido con apeadero y el campo con bus, que es lo que importa.",
  hardWithoutCar: [
    "Recsk: bus a Recsk y 6 km al memorial (taxi o hora y cuarto a pie).",
    "Szentkirályszabadja: taxi de 10 km desde Veszprém, y estado cambiante.",
    "Hollókő: dos buses al día desde Budapest; ida y vuelta justa.",
    "Las bodegas de Kőbánya: solo en visitas organizadas puntuales.",
  ],
  meta: vol([SEAT61, MAV, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 20, note: "hostal en Budapest; pensión en Eger o Pécs, 30 €" },
    { concept: "hotel-mid", eur: 60 },
    { concept: "comida-barata", eur: 6, note: "lángos de 3 €; menú de étkezde con gulash, 6 €" },
    { concept: "restaurante", eur: 16, note: "con vino de Eger o Villány" },
    { concept: "transporte-urbano", eur: 1.2 },
    { concept: "tren-intercity", eur: 10, note: "Budapest–Pécs; a Eger, 8 €" },
    { concept: "cafe", eur: 2.5 },
    { concept: "supermercado", eur: 8 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 55 € al día con trenes, y Budapest sigue siendo barata fuera del centro.",
    "Forinto, no euro (≈ 364 por euro): tarjeta en todo; cajeros de bancos, nunca Euronet; rechaza la conversión a euros.",
    "Wizz, Ryanair y Buzz a Budapest desde 25 €; 19 vuelos a la semana.",
    "Los museos: Memento Park 8 €, Casa del Terror 11 €, Hospital en la Roca 20 € (el caro). Recsk y Club Aliga, casi nada.",
    "Los baños (Széchenyi, Gellért) suben a 30 €: Rudas o Lukács, la mitad y con locales.",
  ],
  meta: vol([NUMBEO, PROPIO], "Forinto a ≈ 364 por euro en septiembre de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Budapest", airport: "BUD", airlines: ["Wizz Air", "Ryanair", "Buzz"], lowCost: true, hours: 2.5, weekly: 19 },
  ],
  oneStop: [
    { via: "Viena (Vueling) y tren de 2 h 40", airlines: ["Vueling", "Austrian"], totalHours: 6 },
  ],
  tips: [
    "Directo casi tres veces al día; del aeropuerto al centro, bus 100E (2.200 Ft, 30 min) o tren desde Ferihegy.",
    "Budapest es el centro de Europa central en tren: Bratislava 2 h 30, Viena 2 h 40, Zagreb 6 h, Belgrado 8 h. Las fichas de Eslovaquia y Serbia se encadenan sin avión.",
    "Salir por Viena (Vueling) tras Bratislava cierra el viaje Hungría–Eslovaquia por el otro lado.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE y Schengen. Nada que tramitar; roaming y sanidad europea. Lo único que se reserva es el Hospital en la Roca (visita guiada) y, si coincide, las bodegas de Kőbánya.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea"],
  links: [MAEC],
  warnings: ["Szentkirályszabadja tiene una base militar activa al lado (helicópteros): no cruces vallas ni vueles drones.", "Club Aliga: propiedad privada en obras; mirar desde fuera."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Muy seguro; Budapest de noche, tranquila." },
    { key: "robos", level: "medio", text: "Carteristas en el metro, el tranvía 2 y el mercado central. Normal en una capital turística." },
    { key: "timos", level: "medio", text: "Los taxis de calle de Budapest y los bares del centro con cuentas infladas (con «acompañantes» que te invitan a entrar): Bolt y sentido común. Cajeros Euronet y casas de cambio de la calle Váci: no." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "bajo", text: "Trenes y transporte impecables; las carreteras, normales." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en Szentkirályszabadja, la base de al lado es militar." },
    { key: "noche", level: "bajo", text: "Los ruin bars del distrito VII cierran tarde y con ruido; peligro, ninguno." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo: hostales buenos en Budapest y Pécs, inglés entre jóvenes, y una cultura de baños termales donde nadie te mira. Mujeres solas: sin problemas específicos. Lo que cansa es que el húngaro no se parece a nada y los mayores no hablan otra cosa; en los pueblos, alemán.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE y la OTAN que en abril de 2026 dio la vuelta a 16 años de Viktor Orbán: Péter Magyar y su partido Tisza ganaron con mayoría de dos tercios (138 de 199 escaños) y desde entonces desmontan el sistema de Fidesz (medios, jueces, fondos europeos congelados) con Bruselas mirando y Orbán en la oposición. El país está polarizado y en obras políticas, con la economía tocada y el forinto débil. Para el que viaja, cero problema: los trenes llegan, los museos abren y la Casa del Terror sigue contando lo que quiere.",
  watch: ["El primer año del gobierno Magyar: reformas, protestas de Fidesz y cambios en museos y memoriales «de Estado»", "El forinto: baja y sube con cada noticia", "Los museos de memoria (Casa del Terror, Recsk) pueden cambiar de discurso con el gobierno nuevo"],
  avoid: [],
  meta: vol([MAEC], "Cambio de gobierno en 2026; comprobar", "media"),
};

export const digital: DigitalSection = {
  text:
    "Roaming europeo, 5G en Budapest y 4G en el resto. MÁV, BudapestGO y Volánbusz venden en el móvil; Bolt en Budapest; Google Maps perfecto. Tarjeta en casi todo; forintos en efectivo para el bus de Recsk, los mercados y las entradas de pueblo.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless en casi todo, incluido el transporte; efectivo (forintos) para buses rurales al conductor, mercadillos y alguna pensión. Rechaza la conversión a euros en cajeros y datáfonos.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Húngaro, una lengua fino-ugria con 18 casos y sin nada en común con sus vecinos: no se lee, no se entiende y se pronuncia raro (la «s» es «sh»). Inglés bueno entre menores de 40 y en Budapest; alemán entre mayores y en el oeste. La señalética de trenes y metro va en húngaro e inglés; los buses de pueblo, en húngaro. Aprende «köszönöm» (gracias, «kösönom») y «egészségedre» (salud) y te ganas la mesa.",
  machinesText:
    "Máquinas de MÁV y BKK en inglés; los buses de Volánbusz, al conductor con el nombre del pueblo; los museos, con audioguía en inglés (el Hospital en la Roca solo con guía).",
  survivalPhrases: [
    { es: "Hola", local: "Jó napot", latin: "yo nápot" },
    { es: "Gracias", local: "Köszönöm", latin: "kösönom" },
    { es: "¿Cuánto cuesta?", local: "Mennyibe kerül?", latin: "meñibe kerül" },
    { es: "Estación de tren", local: "Vasútállomás", latin: "vashutálomash" },
    { es: "Un billete a ..., por favor", local: "Egy jegyet ...-ba/-be, kérem", latin: "edy yedyet ..., kérem" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−3 °C, gris y baños termales al aire libre con vapor: el mes de Széchenyi" },
    { month: 2, kind: "festival", text: "Busójárás en Mohács los seis días antes del martes de carnaval (12-17 en 2026)", festivalId: "hu-busojaras" },
    { month: 3, kind: "festivo", text: "El 15, aniversario de 1848: escarapelas, discursos y manifestaciones de todos los bandos" },
    { month: 4, kind: "festival", text: "Pascua en Hollókő con el riego de las chicas", festivalId: "hu-holloko-pascua" },
    { month: 5, kind: "temporada", text: "Primavera; el Balatón abre y Club Aliga se ve sin hojas" },
    { month: 6, kind: "temporada", text: "Calor empezando; Recsk y Szentkirályszabadja con luz larga" },
    { month: 7, kind: "clima", text: "35 °C en Budapest y el Balatón lleno de alemanes; Pécs, un horno" },
    { month: 8, kind: "festival", text: "Sziget del 11 al 15 y los fuegos del 20 sobre el Danubio", festivalId: "hu-sziget" },
    { month: 8, kind: "festival", text: "El 20 de agosto: la Santa Diestra por la mañana y drones y fuegos por la noche", festivalId: "hu-20-agosto" },
    { month: 9, kind: "temporada", text: "El mes redondo: vendimia en Eger y Villány, sin calor, el Balatón vacío" },
    { month: 10, kind: "festivo", text: "El 23, aniversario de 1956: velas en Corvin köz y la Casa del Terror llena" },
    { month: 11, kind: "clima", text: "Gris y niebla; buen mes para museos y baños" },
    { month: 12, kind: "clima", text: "Mercadillo de Vörösmarty y −2 °C; el Balatón helado algunos años" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Memento Park: las estatuas comunistas en un solar, con las botas de Stalin.",
    "Un hospital-búnker bajo el castillo, un campo del Gulag en un bosque y el resort del Politburó pudriéndose en el Balatón, con apeadero.",
    "DNI, low-cost desde 25 €, trenes de 10 € y 55 € al día.",
    "Folclore de los buenos: los demonios de Mohács y los cubos de Pascua de Hollókő.",
    "Budapest es el centro de Europa central en tren: Bratislava a 2 h 30.",
    "Seguro, ordenado y con baños termales para descansar del hormigón.",
  ],
  cons: [
    "Las ruinas soviéticas están desapareciendo: Szentkirályszabadja en demolición, Club Aliga a medias.",
    "Los últimos kilómetros de lo oscuro son a pie o en taxi.",
    "Budapest tiene timos de taxi y bar de manual.",
    "El húngaro es un muro; los mayores no hablan inglés.",
    "Menos brutalismo intacto que Bulgaria o Serbia: Hungría lo demolió o lo pintó.",
  ],
  text:
    "Hungría es el país donde el comunismo se guardó en un solar y el resto se dejó caer: nueve días dan para Budapest con Memento Park, la Casa del Terror y el hospital-búnker bajo el castillo, el bus al Gulag de Recsk desde la ciudad del vino, el tren de la orilla sur hasta el resort abandonado del Comité Central, la ciudad fantasma soviética de Veszprém antes de que la acaben, y Pécs, la ciudad del uranio. Cuatro, para Budapest oscura. Trece, para añadir Hollókő y Mohács y salir en tren a Bratislava, que es la pareja de esta ficha. Ve en septiembre (vendimia y Balatón vacío) o en febrero por los busós, y a Szentkirályszabadja, cuanto antes.",
  meta: est([PROPIO]),
};
