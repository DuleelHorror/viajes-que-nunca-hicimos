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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=China", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · China", url: "https://www.seat61.com/China.htm", kind: "blog" };
const RAIL12306: Source = { label: "China Railway 12306", url: "https://www.12306.cn/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · China", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=China", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "China tiene 45.000 km de alta velocidad, más que el resto del mundo junto, y va a todas partes de esta lista a 300-350 por hora: Pekín–Shanghái (1.318 km) en 4 h 30, Pekín–Datong en menos de 2, Hohhot–Ordos (la ciudad fantasma) en hora y media. Puntual, limpio, con enchufe, y con estaciones del tamaño de aeropuertos donde se pasa control de seguridad y se embarca por puerta. Se compra en 12306 (la web oficial, en inglés y con tarjeta extranjera desde 2023) o en Trip.com, y el pasaporte es el billete: se pasa por el torno. Quedan nocturnos de literas clásicos (Pekín–Shanghái en 12 h, Hangzhou–Chongqing en 16) para el que quiera dormir en tren. Para nuestro perfil es el mejor sistema de trenes del radar, sin discusión.",
  corridorsIntro: "Siete corredores de alta velocidad que forman el círculo Pekín–Datong–Hohhot–Xi'an–Chongqing–Hangzhou–Shanghái–Pekín. Cada tramo tiene decenas de trenes al día.",
  busText:
    "Con esta alta velocidad, los buses de larga distancia han quedado para los pueblos: los usas para el templo colgante (Datong–Hunyuan), para la Muralla salvaje (bus 916 de Pekín) y para la fábrica nuclear 816 (Chongqing–Fuling). Los urbanos de las ciudades grandes son perfectos y cuestan 15 céntimos; Didi (el Uber chino, dentro de Alipay) resuelve el resto por 2-3 €. Los tours de los hostales son baratos y útiles para las excursiones de dos sitios en un día (Yungang + templo colgante).",
  busCompanies: ["Buses interurbanos de las estaciones de cada ciudad (billete en ventanilla con pasaporte)", "Bus 916 express Pekín–Huairou (Muralla)", "Bus 306 Xi'an–guerreros", "Tours de hostales para Datong y la Muralla"],
  apps: [
    { name: "Alipay", use: "pagar todo (QR), el metro, Didi y las entradas; se vincula a una Visa/Mastercard europea antes de volar", url: "https://www.alipay.com" },
    { name: "12306 / Trip.com", use: "trenes; 12306 es la oficial en inglés, Trip.com cobra un poco más y es más cómoda", url: "https://www.12306.cn/en/" },
    { name: "Amap (Gaode)", use: "el mapa que funciona con transporte público; Apple Maps también va bien. Google Maps, bloqueado y desactualizado" },
    { name: "Didi", use: "taxi con precio cerrado, dentro de Alipay en inglés" },
    { name: "VPN (instalada antes)", use: "para Google, WhatsApp, Instagram y todo lo tuyo; sin ella, dentro no se puede descargar nada" },
    { name: "Google Translate (paquete offline) o Baidu Translate", use: "caracteres con la cámara; el offline funciona sin VPN" },
  ],
  noCarVerdictText:
    "Es el país más fácil del radar sin coche, con una diferencia: nadie de esta lista lo haría con coche (para conducir en China hace falta carnet chino). La alta velocidad une todas las bases en horas, los metros son de otra liga y Didi cierra los huecos por dos euros. Los sitios raros (la ciudad fantasma, el París falso, el tren que atraviesa el edificio, el matadero, la fábrica nuclear en la montaña) tienen metro, alta velocidad o bus. Lo que exige tour es la Muralla salvaje si no quieres montarte el bus más taxi, y ya. El obstáculo no es el transporte: es el móvil (Alipay, VPN, reservas con pasaporte para todo) y los caracteres.",
  hardWithoutCar: [
    "El templo colgante: bus a Hunyuan y taxi, o tour; se hace, pero es una mañana de logística.",
    "La fábrica nuclear 816: tren a Fuling y taxi de 20 km, o tour del hostal.",
    "El mausoleo de Gengis Kan en Ordos: Didi con espera desde Kangbashi.",
    "La Muralla de Jiankou: taxi desde Huairou hasta el pueblo de Xizhazi, o tour de senderismo.",
  ],
  meta: vol([SEAT61, RAIL12306, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 18, note: "hostal en Pekín o Shanghái; no todos aceptan extranjeros, filtrar en la reserva" },
    { concept: "hotel-mid", eur: 50 },
    { concept: "comida-barata", eur: 3, note: "fideos, baozi, un plato de arroz en un local de barrio" },
    { concept: "restaurante", eur: 12, note: "hot pot en Chongqing, pato en Pekín" },
    { concept: "transporte-urbano", eur: 0.5 },
    { concept: "tren-intercity", eur: 50, note: "media de la alta velocidad por tramo; Pekín–Shanghái, 75 €" },
    { concept: "cafe", eur: 3, note: "el café es más caro que la comida" },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 55-60 € al día con hostal, comida de calle y un tramo de alta velocidad cada dos días.",
    "El gasto gordo son los trenes largos (45-90 €) y las entradas de los sitios famosos (15-20 €). Lo raro (Kangbashi, Tianducheng, 1933, Liziba) es gratis o vale 40 céntimos.",
    "Alipay con tarjeta europea: sin comisión hasta 200 $ al mes, 3 % después. Efectivo casi no hace falta, y a veces ni lo aceptan.",
    "Los hoteles baratos que no admiten extranjeros existen: en Trip.com filtra «acepta extranjeros» o te devuelven a la calle a las once de la noche.",
    "El vuelo directo con Air China (500-800 €) es el chollo del radar para un país tan lejos.",
  ],
  meta: vol([NUMBEO, PROPIO], "Yuan a ≈ 7,8 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Pekín", airport: "PEK", airlines: ["Air China"], lowCost: false, hours: 11.5, weekly: 3 },
    { to: "Shanghái", airport: "PVG", airlines: ["Air China", "China Eastern"], lowCost: false, hours: 12, weekly: 5 },
  ],
  oneStop: [
    { via: "Estambul (IST)", airlines: ["Turkish Airlines"], totalHours: 15 },
    { via: "Doha (DOH)", airlines: ["Qatar Airways"], totalHours: 16 },
    { via: "Helsinki (HEL)", airlines: ["Finnair"], totalHours: 14 },
  ],
  tips: [
    "Directo desde Barcelona a Pekín y a Shanghái: entrar por uno y salir por el otro cierra el círculo sin repetir.",
    "500-800 € ida y vuelta en directo; las escalas por Estambul o Doha a veces salen a 450 y añaden cinco horas.",
    "El aeropuerto de Pekín Capital tiene tren exprés al centro (25 min, 3 €); Daxing, a 50 km, también, pero más lento. Shanghái Pudong, el maglev.",
    "Las escalas en Pekín o Shanghái hacia Mongolia o Japón permiten combinar fichas: 30 días sin visado dan para mucho.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026; Air China ajusta por temporada"),
};

export const docs: DocsSection = {
  text:
    "Sin visado hasta 30 días para españoles, una medida «unilateral y temporal» vigente hasta el 31 de diciembre de 2026 que China ha ido prorrogando cada año desde 2023: comprobar antes de comprar el vuelo. Lo que sí hay es un Estado que quiere saber dónde estás: registro en la policía en 24 h (lo hacen los hoteles automáticamente; en Airbnb, tú), reserva con pasaporte para entrar en Tiananmén, el mausoleo, la Ciudad Prohibida y los guerreros, y el pasaporte como billete de tren. Lleva el pasaporte encima siempre: es tu tarjeta de transporte.",
  steps: ["Pasaporte con 6 meses de validez y páginas libres", "Nada que tramitar para 30 días (hasta el 31/12/2026)", "Formulario de llegada en el avión o en el aeropuerto", "Registro policial: automático en hoteles; en pisos, en la comisaría del barrio en 24 h"],
  links: [MAEC],
  warnings: ["Si la exención caduca sin prórroga, el visado es de embajada, con cita, huellas y 60 €: mira el MAEC en cuanto pienses en fechas.", "Drones, ni de broma; fotos a policía, militares y Tiananmén con cámara grande, tampoco.", "Medicamentos con nombre en inglés y receta."],
  meta: vol([MAEC], "Exención unilateral hasta 31/12/2026; comprobar prórroga"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia violenta prácticamente inexistente para el turista. Es de los países más seguros del mundo para andar a cualquier hora." },
    { key: "robos", level: "bajo", text: "Carteristas en estaciones y metro de Pekín y Shanghái, cada vez menos porque ya nadie lleva efectivo." },
    { key: "timos", level: "medio", text: "La «ceremonia del té» y los «estudiantes de arte» de Wangfujing y el Bund, que acaban con una cuenta de 300 €. No sigas a nadie a un salón de té." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna en esta ruta. Tíbet exige permiso y Xinjiang, discreción; no están en la ficha." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; vigilancia total (cámaras y reconocimiento facial en todas partes)." },
    { key: "transporte", level: "bajo", text: "Trenes y metros impecables; los patinetes y coches eléctricos silenciosos son el peligro al cruzar." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema para lo turístico; en Tiananmén, cuarteles, comisarías y la fábrica 816 (donde hay zonas prohibidas), cuidado. Los distritos militares no se anuncian." },
    { key: "noche", level: "bajo", text: "De noche, más seguro que Barcelona." },
  ],
  conflictAreas: [],
  soloText:
    "Uno de los países más seguros del mundo para ir solo, y uno de los más solitarios: casi nadie habla inglés, el móvil hace de intermediario para todo y en los hostales hay cada vez menos extranjeros. Lo que cansa es la burocracia digital y la sensación de vigilancia permanente. Mujeres solas: sin problemas específicos; la seguridad física es total.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "Estado de partido único bajo Xi Jinping desde 2012, sin límite de mandatos desde 2018, con censura de internet, vigilancia masiva con reconocimiento facial y cero tolerancia a la protesta. Para el que viaja es estable hasta la exageración; el riesgo es hablar de política con quien no debe, fotografiar lo que no toca o llevar en el móvil material «sensible» (Tíbet, Xinjiang, Tiananmén 1989) en una revisión de frontera, que es rara pero existe. Con Occidente, tensión comercial de fondo; con España, buena relación y de ahí la exención de visado.",
  watch: ["Prórroga de la exención de visado cada diciembre", "Semanas Doradas (1-7 octubre, Año Nuevo chino): el país entero de viaje", "Aniversarios sensibles (4 de junio): Tiananmén blindada"],
  avoid: ["Tíbet (permiso y tour obligatorio) y Xinjiang (vigilancia extrema): no están en la ficha a propósito"],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Aquí el móvil no es que ayude: es que sin él no existes. Todo se paga con Alipay o WeChat Pay (vincula tu Visa antes de volar), las entradas se reservan con pasaporte en miniprogramas de esas apps, y el metro se abre con un QR. Y todo lo tuyo está bloqueado: Google entero (Maps, Gmail, Translate online, Play), WhatsApp, Instagram, Facebook, YouTube, X. Se resuelve con una VPN instalada y probada ANTES de aterrizar (dentro no se descarga), o con una eSIM de roaming extranjero (Airalo, Holafly), que no pasa por el firewall chino y te deja usar todo lo tuyo sin VPN. Esta segunda es la jugada que hace todo el mundo ahora.",
  blocked: ["Google (Maps, Gmail, Translate online, Drive, Play Store)", "WhatsApp", "Instagram", "Facebook", "YouTube", "X/Twitter", "Telegram", "Wikipedia", "la mayoría de la prensa occidental"],
  esimProviders: ["Airalo o Holafly (roaming: saltan el firewall sin VPN)", "SIM china (China Unicom, en el aeropuerto con pasaporte): barata, pero con el firewall puesto"],
  payments:
    "Alipay con tarjeta europea vinculada, para todo: metro, taxi, comida de calle, entradas, hoteles. Efectivo casi extinto (muchos puestos no tienen cambio); tarjeta física solo en hoteles y grandes almacenes. Saca 200-300 yuanes por si acaso y no los gastarás.",
  meta: vol([PROPIO], "El firewall y las reglas de Alipay cambian; comprobar un mes antes", "alta"),
};

export const language: LanguageSection = {
  text:
    "Mandarín en caracteres, sin alfabeto que aprender en un fin de semana. Inglés: recepciones de hoteles de cadena, algunos jóvenes de Shanghái y Pekín, y casi nadie más; en Datong, Hohhot y Chongqing, cero. La buena noticia: la señalética del metro, la alta velocidad y los aeropuertos está toda en inglés con pinyin, las apps van en inglés y el traductor con cámara (offline) lee menús y carteles. La mala: cualquier conversación pasa por el móvil, y el chino te lo enseñará en el suyo.",
  machinesText:
    "Los tornos del metro y del tren funcionan con QR de Alipay o con el pasaporte, sin máquina que entender. Las máquinas de billetes de metro tienen inglés. Los menús son con fotos o con QR para pedir desde el móvil (en chino: traductor de cámara).",
  survivalPhrases: [
    { es: "Hola", local: "你好", latin: "nǐ hǎo" },
    { es: "Gracias", local: "谢谢", latin: "xièxie" },
    { es: "¿Cuánto cuesta?", local: "多少钱？", latin: "duōshǎo qián" },
    { es: "Estación de tren", local: "火车站", latin: "huǒchē zhàn" },
    { es: "No pica, por favor", local: "不要辣", latin: "bú yào là" },
    { es: "No entiendo", local: "我听不懂", latin: "wǒ tīng bù dǒng" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Festival del Hielo de Harbin desde el día 5: castillos de hielo a −25 °C", festivalId: "cn-harbin-hielo" },
    { month: 1, kind: "clima", text: "Pekín seco y bajo cero; Chongqing y Shanghái, húmedo y gris" },
    { month: 2, kind: "festival", text: "Año Nuevo chino: la migración más grande del mundo, dos semanas de trenes agotados", festivalId: "cn-ano-nuevo-chino" },
    { month: 3, kind: "clima", text: "Tormentas de polvo en Pekín; deshielo en Datong y Mongolia Interior" },
    { month: 4, kind: "temporada", text: "Empieza la buena: Pekín a 20 grados, la Muralla verde" },
    { month: 5, kind: "temporada", text: "Mes redondo, salvo del 1 al 5 (puente de mayo, otra minisemana dorada)" },
    { month: 6, kind: "clima", text: "Lluvias de ciruela en Shanghái y Hangzhou; el norte, bien" },
    { month: 7, kind: "festival", text: "Naadam de Mongolia Interior en la estepa de Xilingol (fecha variable)", festivalId: "cn-naadam-mongolia-interior" },
    { month: 7, kind: "clima", text: "Chongqing, uno de los «cuatro hornos» de China: 40 grados con 90 % de humedad" },
    { month: 8, kind: "clima", text: "Sigue el horno en el sur; tifones en Shanghái" },
    { month: 9, kind: "temporada", text: "El mejor mes: cielo limpio en Pekín, estepa dorada en Mongolia Interior, Chongqing respirable" },
    { month: 10, kind: "festival", text: "Semana Dorada del 1 al 7: 800 millones de personas de vacaciones a la vez", festivalId: "cn-dia-nacional-golden-week" },
    { month: 10, kind: "temporada", text: "Del 10 en adelante, el otro mes perfecto" },
    { month: 11, kind: "clima", text: "Frío llegando al norte; el sur, agradable y sin nadie" },
    { month: 12, kind: "clima", text: "Pekín a −5 con cielo azul; Datong y Hohhot, siberiano" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "El mejor sistema de trenes del radar: alta velocidad a 350 por hora entre todas las bases, y se compra online con pasaporte.",
    "WTF de escala industrial: una ciudad fantasma para un millón, un París a escala 1:3, un tren que atraviesa un bloque de pisos, una fábrica nuclear dentro de una montaña.",
    "Historia oscura de las gordas: el cadáver de Mao, la ciudad subterránea antinuclear, la Tercera Línea, las Tres Gargantas.",
    "Directo desde Barcelona a Pekín y a Shanghái por 500-800 €.",
    "Seguro hasta el aburrimiento y barato en el día a día (55 € con trenes).",
    "Sin visado 30 días, y encadenable con Mongolia por el Transmongoliano.",
  ],
  cons: [
    "El móvil manda: Alipay, VPN o eSIM extranjera, reservas con pasaporte para todo. Sin preparación previa, no funcionas.",
    "Ni Google ni WhatsApp: todo lo tuyo bloqueado sin VPN o eSIM de roaming.",
    "Caracteres y cero inglés fuera de los hoteles: cada conversación es por traductor.",
    "Masas chinas en lo famoso (Muralla, guerreros, Hongya Dong) y dos semanas al año en las que el país entero se mueve.",
    "Vigilancia permanente y un Estado con el que no se discute.",
    "La exención de visado es temporal y se renueva año a año.",
  ],
  text:
    "China es el país donde el transporte deja de ser un problema y pasa a serlo el móvil. Dieciséis días dan para el círculo entero en alta velocidad: el cadáver de Mao y la Muralla en ruinas, el templo colgado de un precipicio en Datong, la ciudad fantasma de Ordos, el ejército de barro y la muralla en bici de Xi'an, la ciudad vertical de Chongqing con su fábrica nuclear en la montaña, y el París y la Inglaterra de mentira de Shanghái, entrando por Pekín y saliendo por Pudong en maglev. Nueve, para Pekín, Datong y Shanghái. Once, si vas a encadenar Mongolia por el Transmongoliano, que es la jugada maestra del radar. Ve en mayo o en septiembre-octubre esquivando las Semanas Doradas, prepara Alipay, la VPN y las reservas desde casa, y acepta que vas a hablar con un traductor durante dos semanas. Es el país más fácil de mover y más difícil de entender de toda la lista.",
  meta: est([PROPIO]),
};
