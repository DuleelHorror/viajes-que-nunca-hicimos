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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=CoreadelSur", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · South Korea", url: "https://www.seat61.com/SouthKorea.htm", kind: "blog" };
const KORAIL: Source = { label: "Korail", url: "https://www.letskorail.com/ebizbf/EbizBfIndex.do", kind: "oficial" };
const KETA: Source = { label: "K-ETA · exenciones temporales", url: "https://www.k-eta.go.kr/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Corea del Sur", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=South+Korea", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Corea es un país de tren de los buenos: el KTX (300 km/h) une Seúl con Busan en 2 h 15 cada 10-20 minutos, con Gwangju en 1 h 50 y con Gangneung en 2 h, y el KTX-Eum nuevo llega a Andong en 2 h; por debajo, los Mugunghwa y ITX lentos y baratos hacen los transversales (Andong–Busan, Gwangju–Busan) en 3-4 h. Sin nocturnos. Billetes en la app o web de Korail en inglés con pasaporte, o en máquinas en inglés en la estación sin colas; el Korail Pass para extranjeros (3 días ≈ 85 €, 5 ≈ 110 €) compensa con dos KTX largos. Puntualidad japonesa a precio de la mitad.",
  corridorsIntro: "Cuatro corredores desde Seúl (Busan, Gwangju, Gangneung, Andong) y los transversales lentos del sur.",
  busText:
    "Los buses exprés cubren lo que el tren no: Cheorwon desde la terminal de Dong Seoul (2 h), Gangneung–Andong (3 h), Gwangju–Jindo (2 h), Boryeong. Terminales enormes con máquinas en inglés, asientos reservados y buses «premium» de tres asientos por fila. En ciudad, metro y bus con la tarjeta T-money (se compra en cualquier tienda de 24 h) y taxis honestos con taxímetro desde 4.800 ₩; Kakao T es el Uber local y funciona con tarjeta extranjera. Naver Map o Kakao Map para todo: Google Maps no calcula rutas en Corea por ley.",
  busCompanies: ["Buses exprés desde Dong Seoul, Seoul Express (Gangnam) y Central City (Honam)", "Buses urbanos con T-money en todas las ciudades", "Kakao T (taxi por app)", "Tours a la DMZ (Koridoor, VIP Travel, Klook)"],
  apps: [
    { name: "Naver Map", use: "el mapa que funciona en Corea; rutas de metro, bus y a pie, en inglés", url: "https://map.naver.com" },
    { name: "Korail / KorailTalk", use: "billetes de tren con pasaporte", url: "https://www.letskorail.com" },
    { name: "Kakao T", use: "taxis con tarjeta extranjera" },
    { name: "Papago", use: "el traductor de Naver, mejor que Google para coreano; con cámara para menús" },
  ],
  noCarVerdictText:
    "Es de los países del mundo donde menos falta hace un coche: KTX cada diez minutos, metro perfecto, buses exprés a los pueblos y taxis honestos. Todo lo de la ficha va en tren, metro o bus salvo la DMZ, que es tour por ley, y el tour de seguridad de Cheorwon, que va en su propio autobús. Lo único que se cae sin coche son los templos de montaña perdidos y las islas pequeñas, que no son de esta ficha. Además, la barrera del idioma se salva con máquinas en inglés y Papago.",
  hardWithoutCar: [
    "La DMZ: solo en tour, con pasaporte y reserva.",
    "Cheorwon: bus de 2 h y taxi hasta la sede del Partido; el túnel, en el tour de seguridad.",
    "Jindo: bus desde Gwangju y bus local hasta Hoedong; sin vuelta de noche.",
    "Hahoe: bus 46 de Andong, cada hora.",
  ],
  meta: vol([SEAT61, KORAIL, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 30, note: "cama en hostal de Seúl; jjimjilbang, 13 €; motel de carretera, 40 €" },
    { concept: "hotel-mid", eur: 75 },
    { concept: "comida-barata", eur: 6, note: "kimbap 2 €, bibimbap o ramyeon 5-7 €, en cualquier sitio" },
    { concept: "restaurante", eur: 18, note: "barbacoa coreana con soju, 20-25 €" },
    { concept: "transporte-urbano", eur: 1, note: "1.550 ₩ con T-money" },
    { concept: "tren-intercity", eur: 38, note: "KTX Seúl–Busan; Mugunghwa, 18 €" },
    { concept: "cafe", eur: 3.5, note: "el país de las cafeterías; caro" },
    { concept: "supermercado", eur: 12, note: "la fruta es carísima; las tiendas de 24 h, el comedor nacional" },
  ],
  tips: [
    "Corea es cara en cama y café y barata en comida, tren y museos (la mayoría, gratis o 2 €): 70-80 € al día con hostal, 110 con hotel.",
    "El won (≈ 1.560 por euro): tarjeta en todas partes, incluso en el mercado; efectivo solo para T-money y algún taxi viejo. Cajeros «Global» en tiendas de 24 h.",
    "El Korail Pass de 3 días (≈ 85 €) compensa con Seúl–Busan y otro KTX; el de 5 días, con la ruta de 14.",
    "El vuelo directo es el gasto gordo (600-900 € ida y vuelta): mira T'way, que es la low-cost del directo, y las fechas fuera de agosto y de Chuseok.",
    "Comer en las tiendas de 24 h (GS25, CU) con ramyeon caliente y kimbap es legítimo, coreano y de 3 €.",
  ],
  meta: vol([NUMBEO, PROPIO], "Won a ≈ 1.560 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Seúl Incheon", airport: "ICN", airlines: ["Asiana", "Korean Air", "T'way"], lowCost: true, hours: 12.5, weekly: 12 },
  ],
  oneStop: [
    { via: "Estambul (Turkish) o Doha (Qatar)", airlines: ["Turkish Airlines", "Qatar Airways"], totalHours: 17 },
    { via: "Ámsterdam, París o Fráncfort", airlines: ["KLM", "Air France", "Lufthansa"], totalHours: 16 },
  ],
  tips: [
    "BCN–Incheon directo con tres compañías (Asiana diario desde septiembre de 2026, Korean Air y T'way): 12 h 30 sin escala, desde 600-700 € ida y vuelta en temporada baja.",
    "T'way es la low-cost del directo: más barata, con menos espacio y la comida aparte.",
    "Del aeropuerto al centro, el tren AREX (1 h, 4.000-9.000 ₩) o los buses limusina a cada barrio (17.000 ₩).",
    "Corea encadena con Japón (vuelos de 1 h a Fukuoka u Osaka, o el ferry Busan–Fukuoka de 3 h) para la ficha de Japón.",
  ],
  meta: vol([PROPIO], "Asiana anuncia el diario desde septiembre de 2026; frecuencias variables", "media"),
};

export const docs: DocsSection = {
  text:
    "Pasaporte y nada más hasta el 31 de diciembre de 2026: los españoles están exentos del K-ETA (la autorización electrónica de 10 $) por una exención temporal que Corea va prorrogando, y entran sin visado 90 días. Hay que rellenar la tarjeta de llegada electrónica (e-Arrival) online en los tres días antes del vuelo, o la de papel en el avión. Después del 31 de diciembre, mira si vuelve el K-ETA: es online, tarda un día y vale tres años.",
  steps: ["Pasaporte con validez durante la estancia", "e-Arrival card online 3 días antes (gratis)", "K-ETA: exento hasta el 31/12/2026; después, mirar", "Seguro de viaje: la sanidad es buena y cara"],
  links: [KETA, MAEC],
  warnings: ["La exención del K-ETA es temporal y se prorroga por años: comprueba la fecha antes de reservar.", "Pasaporte físico para los tours de la DMZ y de Cheorwon: sin él no suben."],
  meta: vol([KETA, MAEC], "Exención K-ETA vigente hasta el 31/12/2026", "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "De los países más seguros del mundo: la gente deja el portátil en la cafetería para ir al baño." },
    { key: "robos", level: "bajo", text: "Casi inexistentes." },
    { key: "timos", level: "bajo", text: "Algún taxi viejo que evita el taxímetro con extranjeros en Myeongdong; Kakao T lo arregla." },
    { key: "zonasConflicto", level: "medio", text: "La DMZ y la frontera del Norte: solo en tour y sin salirse del camino; islas del mar Amarillo, fuera de la ficha. El riesgo real de guerra es bajo, el ruido, constante." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "bajo", text: "Trenes y metro impecables; los buses exprés, bien. Cruzar la calle: los coches no paran." },
    { key: "camaraEnCalle", level: "medio", text: "En la DMZ y las instalaciones militares, solo donde el guía dice; en Cheorwon, ninguna foto del norte desde el observatorio salvo en la zona marcada." },
    { key: "noche", level: "bajo", text: "Seúl a las 3 de la mañana es más segura que Barcelona a las 3 de la tarde." },
  ],
  conflictAreas: ["La DMZ y la línea de control civil: solo en tour"],
  soloText:
    "El país más fácil de Asia para ir solo, y de los más fáciles del mundo: seguridad total, hostales buenos, comer solo es normal en los puestos y las tiendas de 24 h, y los jjimjilbang son la cama de emergencia. Mujeres solas: sin problemas específicos. Lo que cansa es el idioma sin inglés fuera de Seúl (Papago y máquinas lo arreglan) y el jet lag de 7 horas.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "Democracia estable que en diciembre de 2024 vivió un intento de ley marcial del presidente Yoon, revertido en seis horas por el Parlamento y la gente en la calle, con destitución en 2025 y nuevo gobierno de Lee Jae-myung: el sistema aguantó y lo cuentan con orgullo. Con el Norte, tensión permanente (misiles, globos con basura, el JSA cerrado desde 2023) sin efecto en el viajero salvo en la DMZ. Para el que viaja: un país hipermoderno que vive con una guerra parada desde 1953 y no lo nota.",
  watch: ["El JSA (Panmunjom): cerrado a civiles desde julio de 2023; si reabre, cambia la ficha", "La exención del K-ETA (hasta 31/12/2026) y su prórroga", "Ruido con el Norte: misiles y globos, sin efecto práctico"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "El país más conectado del mundo: wifi en el metro, en el KTX y en cada tienda, 5G en todas partes. eSIM (Airalo o las coreanas SK, KT) o SIM en el aeropuerto. Google Maps no calcula rutas (la cartografía es de seguridad nacional): Naver Map y Kakao Map, en inglés. Papago traduce mejor el coreano que Google. Tarjeta en todo, incluso en puestos de mercado; el efectivo, solo para cargar la T-money y algún templo.",
  blocked: ["Google Maps para rutas (funciona para buscar sitios, no para ir)"],
  esimProviders: ["Airalo", "Holafly", "KT / SK Telecom (eSIM y SIM en Incheon)"],
  payments:
    "Tarjeta (Visa/Mastercard) en casi todo, incluso mercados y puestos; efectivo (won) para T-money, algún taxi viejo y templos. Cajeros «Global ATM» en tiendas de 24 h y bancos. Apple Pay funciona en parte; Samsung Pay, en todo.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Coreano, con el hangul, un alfabeto de 24 letras inventado en 1443 que se aprende a leer en una tarde (en serio: es lógico) y sirve para leer estaciones y menús. Inglés flojo fuera de Seúl y de los jóvenes, pero todo el transporte (metro, KTX, máquinas, buses exprés) está en inglés y la señalética es bilingüe. Los coreanos son tímidos con el inglés y generosos con el Papago. Japonés y chino se leen en el metro.",
  machinesText:
    "Las máquinas de tren, metro, bus exprés y T-money tienen inglés; los menús de las cadenas, con fotos y kiosco táctil. Los restaurantes de barrio, en coreano: Papago con cámara.",
  survivalPhrases: [
    { es: "Hola", local: "안녕하세요", latin: "annyeong-haseyo" },
    { es: "Gracias", local: "감사합니다", latin: "kamsahamnida" },
    { es: "¿Cuánto cuesta?", local: "얼마예요?", latin: "eolmayeyo" },
    { es: "Estación", local: "역", latin: "yeok" },
    { es: "Un billete a Busan, por favor", local: "부산 가는 표 한 장 주세요", latin: "Busan ganeun pyo han jang juseyo" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "Frío siberiano (-10 en Seúl); grullas de Manchuria en la llanura de Cheorwon; el sol de Año Nuevo en Jeongdongjin" },
    { month: 2, kind: "festivo", text: "Seollal (Año Nuevo lunar): tres días con el país en carretera y todo cerrado" },
    { month: 3, kind: "temporada", text: "Deshielo; arranca la danza de Hahoe (miércoles a domingo hasta diciembre)" },
    { month: 4, kind: "festival", text: "Cerezos en flor y la apertura del mar de Jindo (17-20 de abril)", festivalId: "kr-jindo-mar-abierto" },
    { month: 5, kind: "festival", text: "El 18 de Mayo en Gwangju; azaleas; el mes más bonito", festivalId: "kr-gwangju-18-mayo-aniversario" },
    { month: 6, kind: "clima", text: "Empieza el jangma (monzón) a final de mes" },
    { month: 7, kind: "festival", text: "Monzón y bochorno; el barro de Boryeong desde el 24", festivalId: "kr-boryeong-barro" },
    { month: 8, kind: "clima", text: "35 °C con humedad de sauna; vacaciones coreanas la primera semana; el barro sigue hasta el 9" },
    { month: 9, kind: "festival", text: "Chuseok (a finales, cambia cada año) cierra el país tres días; las máscaras de Andong desde el 24", festivalId: "kr-andong-mascaras" },
    { month: 10, kind: "temporada", text: "El mes redondo: cielo azul, 20 grados, arces empezando; Andong hasta el 4" },
    { month: 11, kind: "temporada", text: "Arces rojos en los templos y las montañas; frío llegando" },
    { month: 12, kind: "clima", text: "Frío seco; luces de Navidad en Seúl; el mar de Jeongdongjin para el 1 de enero" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "La frontera más armada del mundo a 50 km del metro: túneles, prismáticos sobre Kaesong y la sede del Partido norcoreano en ruinas en Cheorwon.",
    "Una dictadura contada sin maquillaje: la prisión de Seodaemun, el 18 de Mayo de Gwangju, el búnker secreto de Yeouido.",
    "Un submarino de comandos norcoreanos encallado, un crucero en un acantilado y una estación en la playa.",
    "KTX cada diez minutos, metro perfecto y el país donde menos falta hace un coche.",
    "Seguridad total, hangul en una tarde, Papago, y máscaras de 800 años que se ríen de los monjes.",
    "Vuelo directo desde BCN y sin K-ETA hasta final de 2026.",
  ],
  cons: [
    "12 h 30 de vuelo y 600-900 € ida y vuelta: el gasto gordo.",
    "El JSA de las casetas azules cerrado desde 2023: la foto con el Norte, no.",
    "Camas y café caros; inglés flojo fuera de Seúl.",
    "El búnker de Yeouido cerrado por reforma sin fecha.",
    "Google Maps no funciona: hay que cambiar de app.",
  ],
  text:
    "Corea del Sur es el país del radar donde la guerra fría sigue en marcha a 50 km de un metro perfecto, y el único de Asia donde no hace falta ni coche ni inglés. Catorce días dan para Seúl con la prisión de Seodaemun y el memorial de la guerra, la DMZ en tour, Cheorwon en bus con las ruinas del Partido y el segundo túnel, el submarino de Jeongdongjin, las máscaras de Hahoe, el cementerio de la ONU y Gamcheon en Busan, y el 18 de Mayo en Gwangju. Ocho, para Seúl y las dos DMZ. Dieciocho, para Jindo en abril o las máscaras de Andong en septiembre. Ve en mayo o en octubre, reserva la DMZ desde casa, aprende el hangul en el avión y olvídate del JSA hasta que lo reabran.",
  meta: est([PROPIO]),
};
