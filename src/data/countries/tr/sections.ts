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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Turquia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Turkey", url: "https://www.seat61.com/Turkey.htm", kind: "blog" };
const TCDD: Source = { label: "TCDD Taşımacılık", url: "https://ebilet.tcddtasimacilik.gov.tr/", kind: "oficial" };
const MFA_TR: Source = { label: "Ministerio de Exteriores turco · entrada con documento de identidad", url: "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Turquía", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Turkey", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Turquía tiene dos ferrocarriles. El del oeste es alta velocidad nueva (YHT): Estambul–Ankara en 4 h 30 por 25 €, Ankara–Konya en 1 h 45, con asiento asignado y venta online en inglés (ebilet) con tarjeta extranjera. El del este es el Doğu Ekspresi, un tren clásico de 26 horas de Ankara a Kars por Sivas, Erzincan y Erzurum, con asientos, literas y coches cama, que se ha hecho tan famoso en Instagram que se agota en minutos: hay que estar en la web a medianoche hora turca del día en que salen a la venta los billetes de tu fecha. Hay una versión «turística» de invierno con paradas de tres horas y precio de tour. Lo que no tiene tren útil (Capadocia, la costa, el sureste) va en bus de lujo o en vuelo interno de 25 €.",
  corridorsIntro: "Tres corredores: dos YHT en el oeste y el Doğu al este. Lo demás son buses y Pegasus.",
  busText:
    "Los buses turcos son los mejores del radar: Metro, Kamil Koç y Pamukkale con asientos de avión, té gratis, wifi y azafato, entre todas las ciudades a todas horas, desde los otogares (estaciones enormes a las afueras, con servis gratuito al centro). Para lo local, el dolmuş: minibuses con la ruta en el parabrisas que salen cuando se llenan (Fethiye–Kayaköy, Göreme–Nevşehir–Derinkuyu, Kars–Ani un diario a las 10:00). BiTaksi en Estambul; en el resto, taxis con taxímetro que a veces «no funciona».",
  busCompanies: ["Metro Turizm, Kamil Koç, Pamukkale (larga distancia, desde los otogares)", "Dolmuşes locales (Fethiye, Capadocia, Kars)", "Havaist y Havaş (aeropuertos)", "BiTaksi"],
  apps: [
    { name: "TCDD ebilet", use: "YHT y Doğu Ekspresi, en inglés, con tarjeta extranjera", url: "https://ebilet.tcddtasimacilik.gov.tr/" },
    { name: "Obilet", use: "todos los buses interurbanos con asiento elegido", url: "https://www.obilet.com/en" },
    { name: "Pegasus / AJet", use: "vuelos internos desde 25 €" },
    { name: "BiTaksi", use: "taxi con precio estimado en Estambul y Ankara" },
    { name: "Google Maps", use: "perfecto con el transporte de Estambul (ferries incluidos)" },
  ],
  noCarVerdictText:
    "Se puede, y con más comodidad que en casi ningún sitio del radar: YHT, un nocturno mítico, buses de lujo, vuelos internos baratos y dolmuşes a los pueblos. Ani tiene minibús diario, Kayaköy cada media hora, Derinkuyu cada hora, Göbekli Tepe bus urbano. Lo que cuesta es solo lo remoto del este (Çıldır, los pueblos molokanes, Hasankeyf bajo el pantano) y el hecho de que el país es enorme: sin vuelos internos, Kars–Capadocia son dos días de bus. Con coche irías a más iglesias georgianas del noreste; sin coche haces el Doğu, que es a lo que se venía.",
  hardWithoutCar: [
    "El Doğu Ekspresi: no es difícil, es imposible si no lo compras a medianoche el día de la venta.",
    "Çıldır y los pueblos de Ardahan: minibuses escasos; tour de invierno desde Kars.",
    "Hasankeyf (el pueblo hundido por la presa de Ilısu en 2020): en el sureste profundo, con barcos por el embalse; fuera de la ficha por seguridad y logística.",
    "Las iglesias georgianas del valle del Çoruh (Artvin): sin transporte público.",
  ],
  meta: vol([SEAT61, TCDD, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 18, note: "hostal en Estambul; pensión en Kars, 20 €; cueva en Göreme, 35 €" },
    { concept: "hotel-mid", eur: 55 },
    { concept: "comida-barata", eur: 4, note: "simit y té 1 €; pide o lahmacun 3 €; menú de lokanta 5-6 €" },
    { concept: "restaurante", eur: 14, note: "meze, kebab y rakı" },
    { concept: "transporte-urbano", eur: 0.6 },
    { concept: "tren-intercity", eur: 25, note: "YHT Estambul–Ankara; el Doğu en litera, 35 €" },
    { concept: "cafe", eur: 2 },
    { concept: "supermercado", eur: 7 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 50 € al día, con el Doğu haciendo de hotel una noche.",
    "La lira se devalúa sin parar: los precios en liras de cualquier web de hace un año no valen; los de esta ficha son de septiembre de 2026. Las entradas de los sitios grandes para extranjeros se fijan en euros (Cisterna 30, Göbekli Tepe 21, Derinkuyu 15) y suben cada enero.",
    "Vuelos internos con Pegasus y AJet desde 25 € con semanas: son la manera de cruzar el país.",
    "Tres directos diarios desde BCN: Vueling y Pegasus desde 80 €, Turkish desde 150 con maleta y comida.",
    "Tarjeta en casi todo; efectivo en dolmuşes, bazares y té. Saca liras de cajeros de bancos, no de los del aeropuerto.",
  ],
  meta: vol([NUMBEO, PROPIO], "Lira a ≈ 48 por euro en septiembre de 2026, y bajando; estimaciones"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Estambul", airport: "IST", airlines: ["Turkish Airlines", "Vueling"], lowCost: true, hours: 3.5, weekly: 32 },
    { to: "Estambul Sabiha Gökçen", airport: "SAW", airlines: ["Pegasus"], lowCost: true, hours: 3.5, weekly: 10 },
    { to: "Dalaman (Fethiye)", airport: "DLM", airlines: ["Vueling"], lowCost: true, hours: 3.7, weekly: 2 },
  ],
  oneStop: [
    { via: "Estambul a Kars, Şanlıurfa o Kayseri", airlines: ["Turkish Airlines", "Pegasus"], totalHours: 7 },
  ],
  tips: [
    "Entre Turkish (25/semana), Pegasus (10) y Vueling (7) hay directos a Estambul a todas horas; Pegasus a Sabiha Gökçen es lo barato y queda en el lado asiático, cerca del YHT.",
    "Dalaman con Vueling en verano permite salir por la costa tras Kayaköy.",
    "Estambul es el hub del radar: Turkish y Pegasus conectan con Georgia, Armenia, Kazajistán, Uzbekistán y Kirguistán, todos con ficha aquí.",
    "Del aeropuerto IST al centro, metro M11 (45 min) o Havaist; de SAW, metro M4 a Kadıköy.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: el Ministerio de Exteriores turco incluye a España entre los países cuyos ciudadanos entran con el documento nacional de identidad, sin visado, hasta 90 días en 180. Lleva pasaporte igual si vas a seguir a Georgia (Turquía y Georgia comparten frontera terrestre, y Georgia también admite DNI) o a coger vuelos internos con Turkish, que a veces lo pide. Sin roaming europeo.",
  steps: ["DNI en vigor (pasaporte recomendable para vuelos internos y fronteras)", "Nada que tramitar", "Seguro de viaje: fuera de la UE", "SIM local o eSIM"],
  links: [MAEC, MFA_TR],
  warnings: ["El sureste (Şanlıurfa, Diyarbakır, Mardin, Van y la frontera con Siria e Irak) está bajo recomendación de precaución o de no viajar según la zona: lee el MAEC la semana antes. Kars y Ani no están en esa lista.", "No hables de política ni de Atatürt ni de los kurdos con desconocidos, ni en redes desde Turquía: hay condenas por «insultos»."],
  meta: vol([MAEC, MFA_TR], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia violenta baja para el turista; Estambul es más segura que Barcelona de noche." },
    { key: "robos", level: "medio", text: "Carteristas en el tranvía T1 y en Eminönü; normal en una ciudad de 16 millones." },
    { key: "timos", level: "medio", text: "Los clásicos: el limpiabotas que deja caer el cepillo, el «amigo» que te lleva a un bar con cuenta de 500 €, taxis con el taxímetro «roto», alfombras. Con BiTaksi y sin seguir a nadie, se acaba." },
    { key: "zonasConflicto", level: "medio", text: "El sureste kurdo y la frontera siria: precaución o no ir según el MAEC. El resto de la ficha (Estambul, Ankara, Kars, Capadocia, Konya, la costa) está fuera." },
    { key: "terrorismo", level: "medio", text: "Atentados en Estambul y Ankara en 2015-17 y 2022; vigilancia alta en sitios turísticos y estaciones." },
    { key: "transporte", level: "bajo", text: "Buses y trenes excelentes; los dolmuşes van rápido. La carretera es el riesgo, como en todo el radar." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema en lo turístico; en Ani (frontera), cuarteles, comisarías y el sureste, cuidado. Drones prohibidos sin permiso." },
    { key: "noche", level: "bajo", text: "Estambul de noche es un paseo; Kars de noche es −20 °C." },
  ],
  conflictAreas: ["Provincias fronterizas con Siria e Irak: no ir. Şanlıurfa y Diyarbakır: precaución y noticias recientes."],
  soloText:
    "Fácil y muy sociable para ir solo: el té aparece antes de que lo pidas, los hostales de Estambul y Göreme son puntos de encuentro, y el Doğu Ekspresi es 26 horas de conversación con familias turcas que te dan de comer. Mujeres solas: las molestias verbales existen en Estambul y la costa; en Anatolia, más respeto y más miradas. Ropa discreta en Konya y el este.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República presidencialista con Erdoğan en el poder desde 2003 (primer ministro, luego presidente), un Estado con la prensa controlada, jueces obedientes y el alcalde opositor de Estambul (İmamoğlu) en la cárcel desde marzo de 2025, con las protestas más grandes en una década. Inflación crónica, lira en caída, cuatro millones de refugiados sirios, guerra con el PKK en pausa (el PKK anunció su disolución en 2025) y una posición entre la OTAN, Rusia y Oriente Medio que cambia cada semana. Para el que viaja: el país funciona con una eficacia que sorprende, y la política no se toca en voz alta.",
  watch: ["Protestas en Estambul y Ankara: masivas y con cargas; evitar Saraçhane y Kızılay esos días", "El sureste: el proceso de paz con el PKK y su fragilidad", "Inflación: los precios en liras cambian cada mes"],
  avoid: ["Frontera con Siria e Irak (Hatay, Kilis, Şırnak, Hakkari): no ir"],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Fuera de la UE: sin roaming. SIM de Turkcell o Vodafone en el aeropuerto (caras para turistas, 20-30 € con 20 GB) o eSIM de Airalo/Holafly, más barata. Cobertura buena en todo el país, incluido el Doğu a ratos. Wikipedia estuvo bloqueada hasta 2020; en 2026 no hay bloqueos permanentes, pero Instagram, X y VPN caen días en crisis políticas. Google Maps funciona con todo. Tarjeta en casi todo; liras para dolmuşes, bazares y té.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Turkcell / Vodafone (20-30 € en el aeropuerto; más barata en tiendas de barrio)"],
  payments:
    "Tarjeta y contactless en hoteles, restaurantes, supermercados y el transporte de Estambul (la Istanbulkart se recarga con tarjeta); efectivo (liras) en dolmuşes, bazares, tés y taxis de provincia. Cajeros de bancos con tarjeta europea; los del aeropuerto, comisión abusiva.",
  meta: vol([PROPIO], "Bloqueos puntuales de redes en crisis; sin VPN permanente necesaria"),
};

export const language: LanguageSection = {
  text:
    "Turco, en alfabeto latino desde 1928 (se lee tal cual: cada letra un sonido), aglutinante y sin parientes cerca. Inglés bueno en Estambul, Capadocia y la costa; poco en Ankara, Konya y el este, donde el alemán de los emigrantes retornados ayuda más. La señalética de trenes, metros y aeropuertos va en turco e inglés; los otogares, en turco pero con el destino en el bus. Con «merhaba», «teşekkürler» y los números, se va; el turco es fácil de pronunciar y a los turcos les encanta que lo intentes.",
  machinesText:
    "Ebilet y las máquinas del YHT, en inglés; las de Istanbulkart, en inglés; los dolmuşes, al conductor. Los menús de lokanta son de señalar la olla.",
  survivalPhrases: [
    { es: "Hola", local: "Merhaba", latin: "mérhaba" },
    { es: "Gracias", local: "Teşekkürler", latin: "teshekkürlér" },
    { es: "¿Cuánto cuesta?", local: "Ne kadar?", latin: "ne kadár" },
    { es: "Estación de tren / de bus", local: "Gar / Otogar", latin: "gar / otogár" },
    { es: "Un billete a ..., por favor", local: "... 'a bir bilet, lütfen", latin: "... a bir bilét, lütfen" },
    { es: "Baje aquí, por favor (en el dolmuş)", local: "İnecek var", latin: "inedyék var" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Lucha de camellos en Selçuk el tercer domingo; Kars a −20 °C y el Doğu por la nieve", festivalId: "tr-lucha-camellos-selcuk" },
    { month: 2, kind: "festival", text: "Festival del hielo en el Çıldır; el Doğu Turístico en su temporada", festivalId: "tr-cildir-hielo" },
    { month: 3, kind: "festival", text: "Nevruz el 21: hogueras y halay en el sureste y en Kazlıçeşme", festivalId: "tr-nevruz" },
    { month: 3, kind: "festivo", text: "Ramadán (del 17 de febrero al 19 de marzo de 2026): Konya y el este cerrados de día, fiesta de noche; en Estambul apenas se nota" },
    { month: 4, kind: "temporada", text: "Primavera: tulipanes en Estambul, Capadocia verde, Ani sin nieve" },
    { month: 5, kind: "temporada", text: "El mes redondo: 22 grados, todo abierto, sin calor en la costa" },
    { month: 6, kind: "festival", text: "Kırkpınar en Edirne, del 29 de junio al 5 de julio: luchadores en aceite desde 1360", festivalId: "tr-kirkpinar" },
    { month: 7, kind: "clima", text: "40 °C en Şanlıurfa y la costa; Kars y Capadocia, bien" },
    { month: 8, kind: "clima", text: "Sigue el calor; Kayaköy a mediodía, no" },
    { month: 9, kind: "temporada", text: "El otro mes redondo: la costa vacía, Capadocia con luz, el Doğu con otoño en Erzurum" },
    { month: 10, kind: "temporada", text: "Otoño; el 29, Día de la República con banderas en cada balcón; primeras nieves en Kars" },
    { month: 11, kind: "festivo", text: "El 10 a las 9:05, el país entero se para con sirenas por Atatürk; Anıtkabir lleno" },
    { month: 12, kind: "festival", text: "Şeb-i Arus en Konya del 7 al 17: derviches en el pabellón", festivalId: "tr-seb-i-arus" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Ani: una capital armenia fantasma en la frontera cerrada, al final de un tren de 26 horas. De lo más bestia del radar.",
    "Abandonos de primera: el orfanato de madera de Büyükada, Kayaköy vaciado en 1923, Zelve, Haydarpaşa sin trenes.",
    "Una ciudad subterránea de 85 metros y el templo más antiguo del mundo.",
    "Con el DNI, tres directos diarios desde 80 €, YHT por 25 € y buses de lujo.",
    "50 € al día y una hospitalidad de té que aparece solo.",
    "Estambul es el hub hacia el Cáucaso y Asia Central: encadena con media web.",
  ],
  cons: [
    "El Doğu Ekspresi se agota en minutos: hay que trasnochar para comprarlo.",
    "Enorme: sin vuelos internos, el este y el oeste son días de bus.",
    "El sureste (Göbekli Tepe) está bajo precaución del MAEC y hay que decidirlo cada vez.",
    "Sin roaming, lira en caída y entradas para extranjeros en euros que suben cada enero.",
    "Timos de manual en Estambul y una política que no se puede comentar en voz alta.",
  ],
  text:
    "Turquía es el país del radar donde el tren es una leyenda y el DNI vale. Catorce días dan para Estambul con el orfanato podrido de la isla, el gasómetro y la cisterna; el YHT a Ankara y el mausoleo de Atatürk; las 26 horas del Doğu hasta Kars y Ani, la ciudad de las mil iglesias en la frontera cerrada; vuelo al oeste, derviches en Konya y Capadocia para bajar a Derinkuyu y andar Zelve vacío. Siete, para Estambul y el pueblo vaciado de Kayaköy. Dieciocho, para añadir Göbekli Tepe con el MAEC leído y salir por la costa. Ve en mayo o en octubre (o en febrero, si quieres el Doğu por la nieve y el lago helado), compra el Doğu a medianoche el día que salga a la venta y no sigas a nadie a ningún bar.",
  meta: est([PROPIO]),
};
