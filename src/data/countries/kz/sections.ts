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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Kazajistan", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Kazakhstan", url: "https://www.seat61.com/Kazakhstan.htm", kind: "blog" };
const KTZ: Source = { label: "Tickets.kz", url: "https://tickets.kz/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Kazajistán", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Kazakhstan", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Kazajistán es el noveno país más grande del mundo y su transporte es el tren nocturno: aquí no se pregunta cuánto tarda, se pregunta cuántas noches. El Talgo Almaty–Astaná hace 1.350 km en 12 horas (los clásicos, en 20); a Turkestán son 18; a Aralsk, otras 13; a Semey, 14. Los vagones son soviéticos con sábanas, samovar y una provodnitsa que manda; los Talgo, españoles y decentes. Se compra en tickets.kz con tarjeta extranjera, casi siempre funciona, y cuesta 15-40 € la noche. Para nuestro perfil es el paraíso: el tren es el hotel, el transporte y el sitio circo a la vez.",
  corridorsIntro: "Cinco corredores, todos nocturnos. Mira el mapa: es un país de trenes por la estepa, no de buses.",
  busText:
    "Hay buses de larga distancia, pero con estas distancias nadie los usa: los kazajos van en tren o en avión. Lo que sí hay son marshrutkas y buses locales a los sitios de esta lista: a Dolinka desde Karagandá, a Akmol (ALZHIR) desde Astaná, a Medeu desde Almaty. Y para los sitios de verdad remotos (Kaindy, Kokaral, el Polígono, Baikonur) no hay más que tour o jeep contratado, y eso hay que aceptarlo.",
  busCompanies: ["Marshrutkas locales", "Buses urbanos con tarjeta Onay / Astana", "Tours desde hostales de Almaty (Charyn, Kaindy)"],
  apps: [
    { name: "Yandex Go", use: "taxi con precio cerrado en todas las ciudades; 1-3 € por trayecto", url: "https://go.yandex" },
    { name: "Tickets.kz / KTZ", use: "billetes de tren con tarjeta extranjera; también el vagón y la litera", url: "https://tickets.kz/en" },
    { name: "2GIS", use: "el mapa que de verdad funciona en Asia Central, con horarios de bus", url: "https://2gis.kz" },
    { name: "Google Translate", use: "cirílico offline (kazajo y ruso) con la cámara" },
    { name: "Onay", use: "la tarjeta de transporte de Almaty; se compra en cualquier quiosco" },
  ],
  noCarVerdictText:
    "Se puede, y de una forma muy nuestra: dormido en un tren. Las ciudades (Almaty, Astaná, Karagandá, Semey, Turkestán, Aralsk) están todas en la red y se hacen sin coche; sus alrededores oscuros (ALZHIR, KarLag, Medeu) tienen marshrutka. Donde empieza el circo es en la naturaleza y en lo secreto: Kaindy y Charyn son tours de jeep, el agua del Aral es un 4x4 desde Aralsk, el Polígono es permiso y agencia, Baikonur es permiso ruso y mucho dinero. Ninguno de esos lo harías con coche de alquiler tampoco, así que en realidad no pierdes nada por no conducir. Pierdes tiempo, que aquí es lo que sobra.",
  hardWithoutCar: [
    "Kaindy, Kolsai y Charyn: tour de uno o dos días desde Almaty, sin alternativa pública.",
    "El agua del Aral (Kokaral): jeep contratado desde Aralsk, 100 km de pista.",
    "El Polígono de Semipalátinsk: permiso con un mes de antelación y agencia desde Kurchatov.",
    "Baikonur: tour con permiso de Roscosmos (45 días) y precio de viaje entero.",
    "Las distancias: 18 horas de tren no se acortan sin avión.",
  ],
  meta: vol([SEAT61, KTZ, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 15, note: "hostal en Almaty; en Aralsk, guesthouse con cena" },
    { concept: "hotel-mid", eur: 45, note: "Astaná es la cara" },
    { concept: "comida-barata", eur: 3, note: "lagman, manty, samsa en una stolovaya" },
    { concept: "restaurante", eur: 12, note: "beshbarmak con carne de caballo y cerveza" },
    { concept: "transporte-urbano", eur: 0.2 },
    { concept: "tren-intercity", eur: 30, note: "Talgo Almaty–Astaná en kupe; los lentos, la mitad" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 50 € al día y los trenes nocturnos te ahorran el hotel.",
    "El gasto gordo son los tours a lo remoto: Kaindy (60 €), Kokaral (90 € el jeep), el Polígono (250 €) y Baikonur (desde 800 €). Elige uno o dos.",
    "Los tenge se sacan de cajeros de Kaspi o Halyk sin comisión; el cambio en las casas de cambio de Almaty es honesto.",
    "En los trenes, la provodnitsa vende té; la comida la llevas tú o la compras a las abuelas de los andenes.",
    "Astaná es un 40 % más cara que el resto del país y no tiene mejor comida.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026 con el tenge a ≈ 550 por euro"),
};

export const flights: FlightsSection = {
  directRoutes: [],
  oneStop: [
    { via: "Estambul (SAW / IST)", airlines: ["Pegasus", "Turkish Airlines"], totalHours: 10 },
    { via: "Estambul a Astaná", airlines: ["Turkish Airlines", "Air Astana"], totalHours: 9.5 },
    { via: "Fráncfort o Varsovia", airlines: ["Lufthansa", "LOT"], totalHours: 12 },
  ],
  tips: [
    "Sin directo. Pegasus por Sabiha Gökçen a Almaty suele ser lo más barato (400-550 € ida y vuelta); Turkish por Estambul, lo más cómodo.",
    "Entrar por Almaty y salir por Astaná (o al revés) no cuesta más y te ahorra 1.350 km de vuelta.",
    "Los vuelos internos (Air Astana, SCAT, FlyArystan) son baratos y salvan los tramos absurdos: Kyzylorda–Astaná, Semey–Almaty.",
    "Aterrizas de madrugada casi siempre: primera noche con recogida.",
  ],
  meta: vol([PROPIO], "Sin directo en 2026; comprobar si Air Astana abre algo estacional"),
};

export const docs: DocsSection = {
  text:
    "Pasaporte y a volar: los españoles entran sin visado hasta 30 días, sin registro (lo hacen los hoteles). Lo que sí exige trámite es lo bueno: el Polígono de Semipalátinsk (permiso del Instituto Nacional Nuclear, un mes) y Baikonur (permiso de Roscosmos, 45 días, solo con agencia autorizada). Baikonur es además territorio ruso alquilado: dentro rigen sus normas.",
  steps: ["Pasaporte con 6 meses de validez", "Nada que tramitar para entrar", "Para el Polígono o Baikonur: permiso con semanas de antelación a través de agencia"],
  links: [MAEC],
  warnings: ["Fotografiar instalaciones militares, estaciones y la central de Ekibastuz desde cerca puede acabar en comisaría: pregunta antes.", "Medicamentos con codeína o tramadol: declara o no los lleves."],
  meta: vol([MAEC], "Exención de 30 días vigente; comprobar antes de viajar"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; las ciudades son tranquilas." },
    { key: "robos", level: "medio", text: "Carteristas en el Bazar Verde de Almaty y en las estaciones. Nada dramático." },
    { key: "timos", level: "medio", text: "Taxis de calle que inflan y algún policía que busca una «multa»: con Yandex Go y pidiendo el papel, se acaba." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. Las zonas cerradas son militares o radiactivas, no violentas." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; vigilancia en estaciones." },
    { key: "transporte", level: "bajo", text: "Trenes seguros de noche (cierra el kupe); la conducción por carretera, como en toda la ex-URSS." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema en la calle; mal en estaciones, cuarteles, Baikonur y la central de Ekibastuz. La policía es sensible." },
    { key: "noche", level: "bajo", text: "Almaty de noche es un paseo; Astaná, un viento." },
  ],
  conflictAreas: ["El Polígono sin guía: hay zonas con radiación seria y no hay vallas. Solo con dosímetro y agencia."],
  soloText:
    "Fácil y muy seguro para ir solo, con la hospitalidad de Asia Central (te invitan a té y a beshbarmak) y la ventaja de que en el tren siempre hay alguien con quien compartir doce horas. Lo que cansa son las distancias y el ruso: sin diez palabras, los trenes se hacen largos. Mujeres solas: sin problemas, con ropa discreta fuera de Almaty.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República presidencialista con un solo partido de facto: Nazarbáyev mandó de 1989 a 2019, le puso su nombre a la capital y dejó a un sucesor (Tokáyev) que en enero de 2022, tras las protestas más graves de la historia del país (230 muertos, tropas rusas llamadas para ayudar), le quitó el nombre a la capital y el poder al clan. Desde entonces, Tokáyev manda solo y hace equilibrios entre Rusia, China y Occidente. Estable, autoritario y sin sorpresas para el que viaja, mientras no se meta en política.",
  watch: ["Relación con Rusia: Baikonur y las bases dependen de ella", "Cortes puntuales de internet en momentos tensos (enero de 2022 fue total)", "Nauryz y el 6 de julio: fiestas nacionales con la ciudad tomada"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Se sobrevive con el móvil y con 2GIS, que es el mapa que aquí funciona de verdad (Google Maps va cojo con el transporte). Yandex Go para taxis, tickets.kz para trenes, Google Translate con la cámara para el cirílico. SIM local de Beeline o Tele2 en el aeropuerto por 5 € con datos ilimitados; la cobertura desaparece en la estepa entre ciudades, que es la mitad del tiempo de tren. Kaspi, la superapp local, es la que usa todo el mundo para pagar y no la vas a tener: tarjeta y efectivo.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Beeline o Tele2 (5 €, en el aeropuerto con pasaporte)"],
  payments:
    "Tarjeta en supermercados, hoteles y restaurantes de ciudad; efectivo en marshrutkas, bazares, trenes (el té) y todo lo rural. Muchos sitios pequeños solo aceptan Kaspi QR, que es local: lleva tenge.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Kazajo (en cirílico, cambiando al alfabeto latino muy despacio) y ruso, que habla todo el mundo y es el idioma real de las ciudades. Inglés: hoteles, universitarios de Almaty y Astaná, y poco más. Los carteles van en kazajo y ruso, ambos en cirílico, y en las estaciones de tren y el metro también en inglés. Con la cámara del traductor y las diez palabras de ruso del viaje uzbeko, se sobrevive perfectamente.",
  machinesText:
    "Tickets.kz en inglés; las máquinas de las estaciones, en ruso y kazajo; los tornos del metro de Almaty, con tarjeta; los buses, con la Onay. Los avisos de los trenes, solo por megafonía en ruso: pregunta a la provodnitsa.",
  survivalPhrases: [
    { es: "Hola", local: "Сәлеметсіз бе (kazajo) / Здравствуйте (ruso)", latin: "salemetsiz be / zdrástvuyte" },
    { es: "Gracias", local: "Рахмет / Спасибо", latin: "rajmét / spasíba" },
    { es: "¿Cuánto cuesta?", local: "Сколько стоит?", latin: "skólko stóit" },
    { es: "Estación de tren", local: "Вокзал", latin: "vokzál" },
    { es: "Litera de abajo, por favor", local: "Нижняя полка, пожалуйста", latin: "nízhnyaya pólka, pazhálusta" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−30 °C en Astaná y Semey con viento; Almaty, más suave. Trenes con calefacción a tope" },
    { month: 2, kind: "clima", text: "Sigue el hielo; en Almaty se esquía en Shymbulak y se patina en Medeu" },
    { month: 3, kind: "festival", text: "Nauryz del 21 al 23: yurtas en las plazas y kokpar en los hipódromos", festivalId: "kz-nauryz" },
    { month: 4, kind: "clima", text: "Deshielo y barro; la estepa se pone verde una semana" },
    { month: 5, kind: "temporada", text: "El mejor mes: tulipanes silvestres en la estepa y 25 grados" },
    { month: 6, kind: "temporada", text: "Abren las pistas a Kaindy y Kolsai; días de 16 horas" },
    { month: 7, kind: "festival", text: "Día de la Capital el 6: fuegos sobre el Baiterek", festivalId: "kz-dia-capital" },
    { month: 7, kind: "clima", text: "35 °C en Turkestán y Aralsk; el norte, agradable" },
    { month: 8, kind: "clima", text: "Sigue el calor en el sur; el Aral a mediodía es un horno de sal" },
    { month: 9, kind: "temporada", text: "El otro mes bueno: luz, uva y temperatura de tren con ventana abierta" },
    { month: 10, kind: "festival", text: "Cazadores con águila en Nura (fecha variable)", festivalId: "kz-berkutchi" },
    { month: 11, kind: "clima", text: "Llega el frío de golpe; primeras nevadas en Astaná" },
    { month: 12, kind: "clima", text: "Invierno continental: solo para quien quiera ver Astaná a −25 con las torres iluminadas" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Los trenes nocturnos son el transporte, el hotel y el sitio circo: 12-18 horas de estepa por 20 €.",
    "Historia oscura de las gordas: dos museos del Gulag (ALZHIR y KarLag), el Polígono nuclear y la otra orilla del Aral.",
    "Astaná es el WTF arquitectónico más grande de Asia: una capital de Bond levantada en la estepa por un solo hombre.",
    "Almaty tiene el brutalismo soviético mejor conservado de la región, con baños para meterse dentro.",
    "Barato: 50 € al día, con el tren haciendo de hotel.",
    "Sin visado hasta 30 días y casi cero turistas fuera de Almaty.",
  ],
  cons: [
    "Enorme: sin coche va a ser un circo, y con coche también. Las distancias solo se arreglan con noches en tren o vuelos.",
    "Lo más bestia (Polígono, Baikonur) exige permisos con semanas y precios de viaje entero.",
    "Los barcos oxidados del Aral ya no están en el lado kazajo: para eso, Uzbekistán.",
    "Sin directo desde Barcelona: 10 horas por Estambul y madrugada.",
    "Cirílico y poco inglés; y el clima es de extremos: −30 en invierno, 35 en verano.",
    "La naturaleza (Kaindy, Charyn) solo se llega con tour de jeep.",
  ],
  text:
    "Kazajistán es el país donde el viaje son las noches en tren. Catorce días bien montados dan para Almaty y su hormigón, el mausoleo inacabado de Turkestán, el puerto sin mar de Aralsk con el jeep hasta el agua que volvió, la capital futurista con su Gulag femenino al lado y el KarLag de Karagandá: cuatro nocturnos y un vuelo, cero coche. Dieciocho, para añadir el bosque hundido y el Polígono nuclear, que hay que tramitar antes que el vuelo. Ve en mayo o en septiembre, aprende el cirílico de los andenes y acepta que aquí el tiempo se mide en literas. Es el país del radar más lento y de los que más se recuerdan.",
  meta: est([PROPIO]),
};
