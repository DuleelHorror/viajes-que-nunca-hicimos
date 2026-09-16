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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Serbia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Serbia", url: "https://www.seat61.com/Serbia.htm", kind: "blog" };
const SRBVOZ: Source = { label: "Srbija Voz", url: "https://www.srbvoz.rs/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Serbia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Serbia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Serbia tiene dos ferrocarriles: al norte, el Soko, alta velocidad china-rusa de 2022 que hace Belgrado–Novi Sad en 36 minutos y Subotica en 80 (y sigue a Budapest desde 2025), con asiento reservado y billete online; y al sur y al oeste, las vías yugoslavas de los setenta, lentas (Niš, 4-5 h) y en obras. En medio, el Belgrado–Bar, uno de los grandes trenes de Europa: 254 túneles hasta el Adriático montenegrino, con nocturno de literas y billetes solo en taquilla. La estación central es Prokop (Belgrado Centar), lejos del centro y sin tranvía: bus 36 o taxi de app.",
  corridorsIntro: "Tres corredores: el Soko al norte, el Bar al oeste (hasta Užice, en Serbia) y la línea lenta a Niš. Al sur, el bus manda.",
  busText:
    "Los buses son el transporte real de la Serbia sin Soko: cada hora a Niš (3 h), Kragujevac (2 h), Čačak y Užice desde la estación de autobuses de Belgrado (BAS, junto a la vieja estación de tren), con billete en ventanilla y una «tasa de andén» de 0,50 € que hay que pagar aparte o te paran en la puerta. Las excursiones (Kadinjača, Mokra Gora, Kosmaj, Kuršumlija para la ciudad del diablo) tienen bus local o taxi con espera negociado. En Belgrado, desde 2025 el transporte urbano es gratis: te subes y ya.",
  busCompanies: ["Lasta, Niš-Ekspres y decenas de compañías desde BAS Belgrado", "Buses locales de Užice a Kadinjača y Mokra Gora", "Yandex Go y CarGo (taxi de app en Belgrado y Novi Sad)"],
  apps: [
    { name: "Srbija Voz", use: "billetes del Soko con asiento; el Bar no se vende online", url: "https://www.srbvoz.rs/en/" },
    { name: "Yandex Go / CarGo", use: "taxi con precio cerrado en Belgrado, Novi Sad y Niš; los taxis de la calle son una lotería" },
    { name: "Moovit", use: "buses y tranvías de Belgrado (gratis, pero hay que saber cuál)" },
    { name: "Google Maps", use: "funciona con el urbano de Belgrado y regular con los buses interurbanos" },
    { name: "BusTicket4.me", use: "horarios y billetes de buses interurbanos", url: "https://busticket4.me" },
  ],
  noCarVerdictText:
    "Se puede, con la mitad en alta velocidad y la otra mitad en bus balcánico: Belgrado y Novi Sad son perfectas sin coche, Niš y Kragujevac van por bus cada hora, y el oeste (Kadinjača, Mokra Gora) por el tren del Bar más buses locales. Lo que se complica son los espomeniks perdidos en montes (Kosmaj se resuelve, Kadinjača también; Popina, Kruševo o Ostra ya no) y la ciudad del diablo, que es bus más taxi. Con coche verías el doble de hormigón en el monte; sin coche ves el mejor y viajas en el tren de Tito, que es a lo que se venía.",
  hardWithoutCar: [
    "Los espomeniks de monte fuera de Kosmaj y Kadinjača: sin transporte, salvo tour de espomeniks desde Belgrado.",
    "Đavolja Varoš: bus a Kuršumlija y taxi de 27 km con espera.",
    "Guča y Mrčajevci en fiestas: buses extra, pero saturados.",
    "Prokop: la estación central está mal comunicada; el bus 36 o taxi de app, siempre con margen.",
  ],
  meta: vol([SEAT61, SRBVOZ, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 18, note: "hostal en Belgrado (Dorćol o Savamala); pensión en Užice, 25 €" },
    { concept: "hotel-mid", eur: 50 },
    { concept: "comida-barata", eur: 4, note: "burek con yogur, 2 €; pljeskavica en un kiosco, 4 €" },
    { concept: "restaurante", eur: 15, note: "en una kafana con música en vivo y rakia" },
    { concept: "transporte-urbano", eur: 0, note: "Belgrado, gratis desde 2025; Novi Sad y Niš, 0,60-0,80 €" },
    { concept: "tren-intercity", eur: 8, note: "Soko a Subotica; el Bar entero, 24 €" },
    { concept: "cafe", eur: 2 },
    { concept: "supermercado", eur: 8 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 50 € al día con todo, y el urbano de la capital gratis.",
    "Dinares: se sacan en cajeros de bancos (nunca en Euronet) y sobran siempre, porque no se cambian fuera. Saca poco y a menudo.",
    "Air Serbia y Wizz directos desde BCN: 60-180 € según cuándo; la escala por Viena o Zúrich sale cara.",
    "La «tasa de andén» de las estaciones de bus (0,50-1 €) se paga aparte del billete: no es un timo, es Serbia.",
    "Las kafanas cobran el pan y la música sin avisar: 1-2 €. Cuenta con ello.",
  ],
  meta: vol([NUMBEO, PROPIO], "Dinar a ≈ 117 por euro, estable; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Belgrado", airport: "BEG", airlines: ["Air Serbia", "Wizz Air"], lowCost: true, hours: 2.5, weekly: 7 },
  ],
  oneStop: [
    { via: "Viena, Zúrich o Estambul", airlines: ["Austrian", "Swiss", "Turkish Airlines"], totalHours: 5.5 },
  ],
  tips: [
    "Directo casi diario entre Air Serbia y Wizz; Air Serbia es de las pocas «de bandera» que compite con las low-cost en precio.",
    "Del aeropuerto Nikola Tesla al centro: bus A1 (2,5 €, 30 min a Slavija) o bus 72 gratis y lento pasando por la torre Genex.",
    "Niš tiene aeropuerto con Wizz y Ryanair desde otras ciudades europeas: sirve para entrar por el sur si cuadra.",
    "Belgrado encadena con Sarajevo (bus, 7 h), Sofía (bus, 6 h) y Budapest (Soko, 3 h 30): la ficha se combina con Bosnia y Bulgaria.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026; Wizz varía por temporada"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: Serbia no es UE ni Schengen, pero admite a los españoles con DNI hasta 90 días. Lleva pasaporte igual: algunas aerolíneas lo piden en el mostrador, y si sigues a Montenegro en el tren del Bar o a Bosnia en bus, la frontera de madrugada va más rápida. Registro policial en 24 h: lo hacen los hoteles y hostales (pide el papelito blanco por si acaso; en la frontera de salida a veces lo miran).",
  steps: ["DNI en vigor (pasaporte recomendable)", "Nada que tramitar", "Registro en 24 h: lo hace el alojamiento; con Airbnb, pregunta al anfitrión", "Seguro de viaje: no obligatorio, pero fuera de la UE sin tarjeta sanitaria"],
  links: [MAEC],
  warnings: ["Sin roaming europeo: Serbia no está en la UE. eSIM o SIM local.", "Kosovo: entrar a Serbia desde Kosovo sin haber entrado antes por Serbia es ilegal para las autoridades serbias. Si vas a Kosovo, vuelve por donde entraste."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; Belgrado es de las capitales más seguras de Europa de noche." },
    { key: "robos", level: "medio", text: "Carteristas en los buses llenos de Belgrado y en la estación de autobuses. Normal." },
    { key: "timos", level: "medio", text: "Taxis de la calle en el aeropuerto y Prokop que cobran cinco veces: apps siempre. Cajeros Euronet con comisión bestial: bancos." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna en esta ruta. El sur (Preševo) y la frontera con Kosovo, tranquilos pero con tensión política." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Trenes y buses seguros; las carreteras, balcánicas. Los buses nocturnos, con cinturón." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema en general; en los edificios bombardeados hay policía que a veces pregunta, y en Sajmište, respeto: vive gente." },
    { key: "noche", level: "bajo", text: "Belgrado de noche es una fiesta; los splavovi (discotecas flotantes) tienen sus porteros y sus peleas, como todas." },
  ],
  conflictAreas: ["Las protestas contra el gobierno (desde el derrumbe de la marquesina de Novi Sad en 2024) son enormes y pacíficas, pero han tenido cargas policiales: mira las noticias y no te metas en el medio con la cámara."],
  soloText:
    "Muy fácil para ir solo: los hostales de Belgrado son de los mejores de Europa del Este para conocer gente, los serbios invitan a rakia al segundo minuto y hablan inglés bien. Mujeres solas: sin problemas específicos. Lo que puede cansar es que todo el mundo quiera explicarte su versión de los noventa y de la OTAN, con pasión; escucha, no discutas.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República presidencialista con Aleksandar Vučić en el poder desde 2012 (primer ministro, luego presidente), un partido que lo controla todo, medios afines y elecciones con «irregularidades» según la OSCE. Desde noviembre de 2024, cuando cayó la marquesina de la estación recién reformada de Novi Sad y mató a 16 personas, hay un movimiento estudiantil de protestas masivas que ha tumbado al gobierno y sigue en la calle. Equilibrio entre la UE (candidata desde 2012), Rusia (sin sanciones) y China (que construye el Soko). Para el que viaja: cero problema, y una ciudadanía en plena efervescencia.",
  watch: ["Las protestas estudiantiles: masivas, pacíficas, con bloqueos de puentes y carreteras que pueden afectar a buses", "Kosovo: cada crisis se nota en la retórica, no en la calle", "El Estado Mayor bombardeado, en venta a un fondo americano: puede desaparecer"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Fuera de la UE: sin roaming europeo. eSIM (Airalo, Holafly) o SIM de Yettel, A1 o MTS en cualquier quiosco por 5-10 € con datos de sobra. Cobertura buena, wifi en todos los cafés. Google Maps funciona en Belgrado con el urbano; Yandex Go y CarGo para taxis. Tarjeta en Belgrado y Novi Sad sin problema; dinares en efectivo para buses, kafanas de pueblo, entradas de espomeniks y la tasa de andén.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Yettel / A1 / MTS (5-10 €, con pasaporte o DNI)"],
  payments:
    "Tarjeta en hoteles, restaurantes y tiendas de ciudad; efectivo (dinares) en buses interurbanos, taquillas de tren pequeñas, mercados, museos de provincia y kafanas. Los cajeros de bancos (Banca Intesa, OTP, Raiffeisen) dan dinares con tarjeta europea; Euronet, jamás.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Serbio, eslavo, escrito en cirílico y en latino a la vez (los carteles oficiales en cirílico, la calle y las tiendas en latino, y todo el mundo lee los dos). Inglés muy bueno entre menores de 40 y en cualquier hostal; los mayores, algo de alemán o ruso. Es de los países del radar con menos barrera: entre el latino y el inglés, se va sin traductor casi siempre. Aprende a leer el cirílico de todos modos: los carteles de Prokop y de las estaciones de bus lo usan.",
  machinesText:
    "La web y la app de Srbija Voz, en inglés; las taquillas del Bar, en persona y en serbio (escribe destino y fecha). Las estaciones de bus tienen ventanilla, no máquina; los buses urbanos de Belgrado, sin nada que validar.",
  survivalPhrases: [
    { es: "Hola", local: "Здраво / Zdravo", latin: "zdravo" },
    { es: "Gracias", local: "Хвала / Hvala", latin: "jvala" },
    { es: "¿Cuánto cuesta?", local: "Колико кошта? / Koliko košta?", latin: "kóliko koshta" },
    { es: "Estación de tren", local: "Железничка станица / Železnička stanica", latin: "zhelezníchka stánitsa" },
    { es: "Un billete a ..., por favor", local: "Једну карту до ..., молим / Jednu kartu do ..., molim", latin: "yednu kartu do ..., molim" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festivo", text: "Navidad ortodoxa el 7 y Año Nuevo serbio el 14: dos rondas de fiesta con hoguera de roble" },
    { month: 2, kind: "clima", text: "Frío continental, Belgrado gris; los museos y las kafanas, llenos" },
    { month: 3, kind: "festivo", text: "El 24, aniversario de los bombardeos de 1999: velas en los edificios en ruinas" },
    { month: 4, kind: "temporada", text: "Primavera en Belgrado; abre el Šargan 8 y los cafés del Sava" },
    { month: 5, kind: "festival", text: "Đurđevdan el 6: trompetas y cordero en los barrios romaníes", festivalId: "rs-djurdjevdan" },
    { month: 6, kind: "temporada", text: "Calor empezando; Ada Ciganlija (la playa de Belgrado) abre" },
    { month: 7, kind: "festival", text: "Exit en Petrovaradin, primer o segundo fin de semana", festivalId: "rs-exit" },
    { month: 7, kind: "clima", text: "35 °C en Belgrado y Niš; el oeste (Užice, Zlatibor), fresco" },
    { month: 8, kind: "festival", text: "Guča, la primera semana: medio millón de personas y trompetas", festivalId: "rs-guca" },
    { month: 9, kind: "festival", text: "Kupusijada en Mrčajevci, tercer fin de semana: col y trompetas", festivalId: "rs-kupusijada" },
    { month: 9, kind: "temporada", text: "El mes redondo: sin calor, todo abierto, rakia nueva" },
    { month: 10, kind: "temporada", text: "Otoño en los espomeniks de monte; el Šargan 8 cierra a final de mes" },
    { month: 11, kind: "clima", text: "Gris, niebla del Danubio y kafanas; buen mes para Belgrado a fondo" },
    { month: 12, kind: "clima", text: "Frío y mercadillos; la Navidad católica no es fiesta: la serbia es en enero" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "El brutalismo yugoslavo con capital: Genex, los bloques de Novi Beograd, Šumarice, Kadinjača, Kosmaj.",
    "Historia oscura de tres capas: la ocupación nazi (Sajmište, Niš, Kragujevac), Tito (la Casa de las Flores) y la OTAN (las ruinas de 1999).",
    "Una torre hecha con cráneos en una calle normal de Niš.",
    "El Belgrado–Bar: uno de los grandes trenes de Europa, por 24 €. Y el Soko a 200 km/h al norte.",
    "DNI, directo desde BCN, barato, seguro y con el mejor inglés de los Balcanes.",
    "Belgrado de noche y las kafanas: la capital más divertida del radar.",
  ],
  cons: [
    "Sin roaming europeo ni euro: SIM y dinares.",
    "El sur va en bus: el tren a Niš es lento y en obras hasta 2027.",
    "Los billetes del Bar solo en taquilla, y Prokop está mal comunicada.",
    "Muchos espomeniks de monte quedan fuera sin coche.",
    "Los noventa siguen abiertos: cada conversación acaba en la OTAN, y no siempre es cómodo.",
  ],
  text:
    "Serbia es el país del hormigón yugoslavo con capital de fiesta y tren épico. Once días dan para Belgrado a fondo (Genex, la tumba de Tito, las ruinas de la OTAN, el campo de la Feria, los bloques), Novi Sad y Subotica en el Soko, el bosque de espomeniks de Kragujevac, la torre de cráneos y el campo de Niš, y el tren del Bar hasta Užice para Kadinjača y el ocho de vía estrecha. Quince, para añadir la ciudad del diablo y seguir el Bar entero hasta Montenegro. Cinco, para Belgrado y Novi Sad. Ve en septiembre, o la primera semana de agosto si aguantas Guča, compra el Bar en taquilla el primer día y no discutas de 1999 con nadie: escucha, que es mejor.",
  meta: est([PROPIO]),
};
