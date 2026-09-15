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

const PROPIO: Source = { label: "Curación propia", kind: "propio" };
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Uzbekistan", url: "https://www.seat61.com/Uzbekistan.htm", kind: "blog" };
const NUMBEO: Source = { label: "Numbeo · Uzbekistán", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Uzbekistan", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "El tren es la columna vertebral del viaje. El Afrosiyob (Talgo español) une Tashkent, Samarcanda y Bujará a 250 km/h con asientos numerados y vagón cafetería; los trenes clásicos y los nocturnos llegan hasta Urgench, Khiva y Nukus. Los billetes se compran en railway.uz o la app oficial con tarjeta extranjera (a veces falla: reintentar o pagar en taquilla con pasaporte). Los nocturnos son coches soviéticos con sábanas y té; el kupe (4 literas) es la opción sensata.",
  corridorsIntro: "Cuatro corredores cubren todo lo que te interesa; ninguno requiere coche.",
  busText:
    "Los autobuses interurbanos apenas existen para el viajero: las distancias medias se hacen en marshrutka (furgoneta que sale cuando se llena) o taxi compartido desde estaciones informales. Funciona, pero sin horario y regateando. Para Muynak es la única opción.",
  busCompanies: ["marshrutkas locales", "taxis compartidos"],
  apps: [
    { name: "Yandex Go", use: "taxi con precio cerrado en todas las ciudades; funciona con tarjeta extranjera", url: "https://go.yandex" },
    { name: "Uzrailway / railway.uz", use: "billetes de tren oficiales", url: "https://railway.uz" },
    { name: "Yandex Maps", use: "mejor detalle que Google Maps en ciudades pequeñas" },
    { name: "Google Translate", use: "descargar uzbeko y ruso offline; modo cámara para cirílico" },
    { name: "ATTO", use: "tarjeta de transporte de Tashkent (opcional, contactless vale)" },
  ],
  noCarVerdictText:
    "Se puede recorrer el país entero sin conducir y sin sufrir: el eje Tashkent–Samarcanda–Bujará–Khiva es puro tren, Nukus tiene nocturno y avión, y dentro de las ciudades Yandex Go cuesta lo que un café. Las únicas etapas incómodas son las marshrutkas a Muynak y Shahrisabz, y la orilla del Aral y las fortalezas del desierto obligan a contratar 4x4.",
  hardWithoutCar: [
    "La orilla actual del Mar de Aral: solo con tour 4x4 de dos días desde Nukus.",
    "Las fortalezas del desierto de Corasmia: taxi para el día o tour desde Khiva.",
    "Muynak: marshrutka sin horario desde Nukus, 3 h por sentido.",
    "El valle de Fergana y las montañas de Chimgan quedan fuera de este perfil sin coche o tour.",
  ],
  meta: vol([SEAT61, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 12, note: "hostal o guesthouse con desayuno" },
    { concept: "hotel-mid", eur: 45 },
    { concept: "comida-barata", eur: 3, note: "plov, samsa o lagman en chaikhana" },
    { concept: "restaurante", eur: 10 },
    { concept: "transporte-urbano", eur: 0.2 },
    { concept: "tren-intercity", eur: 12, note: "Afrosiyob Tashkent–Samarcanda, clase económica" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Saca sum en cajeros de bancos grandes (Kapitalbank, Ipoteka); los billetes son de valor bajo, lleva riñonera.",
    "Las entradas a monumentos tienen precio para extranjeros (3-12 €), pero siguen siendo baratas.",
    "Los tours al Aral son el único gasto grande: comparte coche desde el hostal de Nukus.",
    "La inflación es alta: los precios en sum suben cada año, en euros apenas se nota.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026; orientativas"),
};

export const flights: FlightsSection = {
  directRoutes: [],
  oneStop: [
    { via: "Estambul (IST / SAW)", airlines: ["Turkish Airlines", "Pegasus"], totalHours: 9.5 },
    { via: "Doha", airlines: ["Qatar Airways"], totalHours: 11 },
    { via: "Riga o Varsovia", airlines: ["airBaltic", "LOT"], totalHours: 12 },
  ],
  tips: [
    "Pegasus vía Sabiha Gökçen suele ser la combinación más barata (≈ 350-450 € ida y vuelta).",
    "Uzbekistan Airways vuela a Madrid y Milán algunas temporadas: si abre Barcelona, cambia la ecuación.",
    "Volver desde Urgench o Nukus vía Tashkent cuesta 40-60 € más y ahorra dos días de tren.",
  ],
  meta: vol([PROPIO], "Verificar rutas estacionales antes de reservar", "media"),
};

export const docs: DocsSection = {
  text:
    "Los ciudadanos españoles entran sin visado hasta 30 días con pasaporte en vigor (validez recomendada de al menos 3 meses). No se exige seguro, pero conviene. El registro de estancia lo hacen los hoteles automáticamente; guarda los resguardos (papel o en la app E-Mehmon) porque pueden pedirlos al salir, sobre todo si duermes en yurtas o casas particulares.",
  steps: ["Pasaporte con 3 meses de validez", "Nada que tramitar antes de volar", "Guardar registros de alojamiento hasta la salida"],
  links: [MAEC, { label: "Política de visados de Uzbekistán (Wikipedia)", url: "https://en.wikipedia.org/wiki/Visa_policy_of_Uzbekistan", kind: "wiki" }],
  warnings: ["Declarar medicamentos con codeína o tramadol; hay controles estrictos.", "Fotografiar estaciones, puentes y edificios oficiales sigue estando mal visto fuera de Tashkent."],
  meta: vol([MAEC], "Exención de visado vigente desde 2019; comprobar antes de viajar"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común muy baja; presencia policial constante y respetuosa con el turista." },
    { key: "robos", level: "bajo", text: "Carteristas puntuales en Chorsu y el bazar Siab; nada comparable a Barcelona." },
    { key: "timos", level: "medio", text: "Taxis sin app que inflan el precio y cambistas de calle; con Yandex Go y cajeros se evita todo." },
    { key: "zonasConflicto", level: "bajo", text: "La franja fronteriza con Afganistán (Termez) es tranquila pero fuera de ruta; el resto sin problema." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; controles de seguridad en metro y estaciones." },
    { key: "transporte", level: "bajo", text: "Trenes y metro seguros a cualquier hora; en nocturnos, cerrar el compartimento." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema salvo en instalaciones oficiales; la gente pide que la fotografíes." },
    { key: "noche", level: "bajo", text: "Ciudades tranquilas de noche; poco alumbrado en barrios, nada más." },
  ],
  conflictAreas: ["Zona fronteriza con Afganistán: permitida pero sin interés para esta ruta."],
  soloText:
    "Uno de los países más cómodos de Asia para ir solo: la hospitalidad es real, te invitan a té y a plov, y la policía te ayuda antes que molestarte. La única fatiga es la de la atención constante en zonas rurales. Para mujeres solas también se considera fácil, con vestimenta discreta fuera de Tashkent.",
  meta: vol([MAEC]),
};

export const politics: PoliticsSection = {
  text:
    "República presidencialista autoritaria en fase de apertura desde 2016: menos represión que con Karímov, reformas económicas, turismo como prioridad estatal. Sin protestas relevantes salvo Karakalpakstán en 2022 (reprimidas). Las fronteras con Kirguistán y Tayikistán están estables. Para el viajero no hay restricciones, pero no es un país donde criticar al Gobierno en voz alta.",
  watch: ["Karakalpakstán: tensión latente tras las protestas de 2022, sin efecto en el turista", "Precios y tipo de cambio: inflación de dos dígitos"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Se sobrevive con el móvil sin hablar ni una palabra: Yandex Go para moverse, Google Translate en modo cámara para el cirílico y railway.uz para los trenes. Google Maps funciona pero Yandex Maps tiene mejor detalle fuera de Tashkent. Cobertura 4G buena en ciudades y en el eje ferroviario; desaparece en el desierto y camino de Muynak.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Ucell o Beeline en el aeropuerto (pasaporte, ≈ 5 €)"],
  payments:
    "Visa y Mastercard aceptadas en hoteles, restaurantes de ciudad y en el metro de Tashkent; los bazares, marshrutkas, entradas pequeñas y todo Karakalpakstán van en efectivo. Contactless con el móvil funciona donde aceptan tarjeta. Llevar euros para cambiar en bancos, nunca en la calle.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "El uzbeko se escribe en alfabeto latino y el ruso, que todo el mundo habla, en cirílico: verás las dos cosas mezcladas en cada cartel. El inglés se limita a hoteles, jóvenes universitarios y guías. Aun así es un país donde se viaja bien sin idioma: la gente es paciente, los números se escriben, y con diez palabras de ruso te quieren.",
  machinesText:
    "Los tornos del metro son contactless; los billetes de tren se compran online en inglés; en las estaciones hay ventanilla con paciencia pero poco inglés. Señalización bilingüe uzbeko/ruso, inglés solo en zonas turísticas de Samarcanda y Bujará.",
  survivalPhrases: [
    { es: "Hola", local: "Salom", latin: "sa-LOM" },
    { es: "Gracias", local: "Rahmat", latin: "rah-MAT" },
    { es: "¿Cuánto cuesta?", local: "Qancha turadi?", latin: "KAN-cha tu-RA-di" },
    { es: "Estación de tren", local: "Vokzal (ruso)", latin: "vok-ZAL" },
    { es: "Sin carne", local: "Go'shtsiz", latin: "gosht-SIZ" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "Nieve posible en Samarcanda y Tashkent; hoteles al mínimo" },
    { month: 2, kind: "festival", text: "Temporada de kupkari en los pueblos", festivalId: "uz-kupkari" },
    { month: 3, kind: "festival", text: "Navruz (21 de marzo): tres días de fiesta nacional", festivalId: "uz-navruz" },
    { month: 4, kind: "temporada", text: "Empieza la temporada alta; reservar Afrosiyob" },
    { month: 5, kind: "festival", text: "Silk and Spices en Bujará", festivalId: "uz-silk-spices" },
    { month: 6, kind: "clima", text: "Primeros 35 °C; mañanas y noches aún buenas" },
    { month: 7, kind: "clima", text: "Calor extremo; desierto inviable a mediodía" },
    { month: 8, kind: "festival", text: "Sharq Taronalari en el Registán (años impares)", festivalId: "uz-sharq-taronalari" },
    { month: 9, kind: "festival", text: "Stihia en Muynak (fecha variable; a veces en mayo)", festivalId: "uz-stihia" },
    { month: 9, kind: "festivo", text: "1 de septiembre: Día de la Independencia, desfiles" },
    { month: 10, kind: "temporada", text: "Mejor mes para el Aral y las fortalezas; noches frías" },
    { month: 11, kind: "temporada", text: "Cae el turismo; buen momento para las ciudades" },
    { month: 12, kind: "cierre", text: "Tours 4x4 al Aral suspendidos con hielo" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "El eje Tashkent–Samarcanda–Bujará–Khiva se hace íntegramente en tren, con alta velocidad y nocturnos: el país sin coche por excelencia.",
    "Muynak y el Mar de Aral son el sitio circo definitivo, y se llega sin tour hasta los barcos.",
    "Herencia soviética densa y fotogénica en Tashkent (metro, Hotel Uzbekistan, monumento al terremoto) sin necesidad de buscarla.",
    "Barato de verdad: 55 € al día viviendo bien, trenes de 10 €, entradas de 3.",
    "Sin visado, seguro, gente hospitalaria y casi sin turismo fuera del Registán.",
  ],
  cons: [
    "No hay vuelo directo desde Barcelona: 9-11 h con escala y llegadas de madrugada.",
    "Karakalpakstán exige aceptar marshrutkas sin horario y, para la orilla del Aral, un tour 4x4 caro.",
    "Verano inviable (40 °C) y el invierno, aunque fotogénico, cierra los tours al desierto.",
    "Inglés casi inexistente y cirílico por todas partes: el móvil es imprescindible.",
    "Karakalpakstán es un régimen autoritario: sin problemas para el turista, pero con límites claros.",
  ],
  text:
    "Aquí tienes material para 12 días largos, y no de relleno: cada ciudad de la Seda merece dos noches, Tashkent tiene la ración soviética completa y el salto a Karakalpakstán convierte el viaje en otra cosa. La logística sin coche es sorprendentemente buena hasta Nukus; a partir de ahí toca marshrutka y, si quieres ver el agua del Aral, pagar un 4x4. Ve en abril-mayo u octubre, reserva el Afrosiyob y deja Muynak para el final: es el sitio que recordarás.",
  meta: est([PROPIO]),
};
