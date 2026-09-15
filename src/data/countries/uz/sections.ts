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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Uzbekistan", url: "https://www.seat61.com/Uzbekistan.htm", kind: "blog" };
const NUMBEO: Source = { label: "Numbeo · Uzbekistán", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Uzbekistan", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Para ser Asia Central, Uzbekistán juega en modo fácil: puedes plantarte en Samarcanda, Bujará o Khiva sin alquilar un Lada ni perderte en el desierto. El Afrosiyob es un Talgo español a 250 km/h con asiento numerado y vagón cafetería; los trenes clásicos y los nocturnos llegan hasta Urgench, Khiva y Nukus. Los billetes se compran en railway.uz o en la app oficial con tarjeta extranjera (a veces falla: reintenta o paga en taquilla con el pasaporte). Los nocturnos son vagones soviéticos con sábanas y té; pilla kupe (compartimento de 4) y duermes como un bebé.",
  corridorsIntro: "Cuatro líneas y tienes cubierto todo lo que te interesa. Ninguna necesita coche.",
  busText:
    "Los autobuses interurbanos como tal casi no existen. Lo que hay son marshrutkas (furgonetas que salen cuando se llenan) y taxis compartidos desde estaciones informales. Funciona, pero sin horario y regateando. Para Muynak no hay otra.",
  busCompanies: ["marshrutkas", "taxis compartidos"],
  apps: [
    { name: "Yandex Go", use: "taxi con precio cerrado en todas las ciudades; acepta tarjeta extranjera. Tu mejor amigo.", url: "https://go.yandex" },
    { name: "Uzrailway / railway.uz", use: "billetes de tren oficiales", url: "https://railway.uz" },
    { name: "Yandex Maps", use: "más detalle que Google Maps en ciudades pequeñas" },
    { name: "Google Translate", use: "descárgate uzbeko y ruso offline; el modo cámara para el cirílico es magia" },
    { name: "ATTO", use: "tarjeta de transporte de Tashkent (opcional: el contactless del banco vale)" },
  ],
  noCarVerdictText:
    "Se puede recorrer el país entero sin conducir y sin sufrir: el eje Tashkent–Samarcanda–Bujará–Khiva es puro tren, Nukus tiene nocturno y avión, y dentro de las ciudades un Yandex Go cuesta lo que un café. Lo único incómodo son las marshrutkas a Muynak y a Shahrisabz. Y para ver el agua del Aral o las fortalezas del desierto, toca pagar un 4x4: ahí sí empieza el circo.",
  hardWithoutCar: [
    "La orilla del Mar de Aral: solo con tour 4x4 de dos días desde Nukus.",
    "Las fortalezas del desierto de Corasmia: taxi para el día o tour desde Khiva.",
    "Muynak: marshrutka sin horario desde Nukus, 3 horas por trayecto.",
    "El valle de Fergana y las montañas de Chimgan se quedan fuera sin coche o tour.",
  ],
  meta: vol([SEAT61, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 12, note: "hostal o guesthouse con desayuno" },
    { concept: "hotel-mid", eur: 45 },
    { concept: "comida-barata", eur: 3, note: "plov, samsa o lagman en una chaikhana" },
    { concept: "restaurante", eur: 10 },
    { concept: "transporte-urbano", eur: 0.2 },
    { concept: "tren-intercity", eur: 12, note: "Afrosiyob Tashkent–Samarcanda en económica" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Saca sum en cajeros de bancos grandes (Kapitalbank, Ipoteka). Los billetes valen poco: te vas a sentir rico y vas a necesitar riñonera.",
    "Los monumentos tienen precio para extranjeros (3-12 €), pero siguen siendo una ganga.",
    "Los tours al Aral son el único gasto serio del viaje: comparte coche desde el hostal de Nukus.",
    "La inflación es alta: los precios en sum suben cada año, en euros apenas se nota.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026, para hacerse una idea"),
};

export const flights: FlightsSection = {
  directRoutes: [],
  oneStop: [
    { via: "Estambul (IST / SAW)", airlines: ["Turkish Airlines", "Pegasus"], totalHours: 9.5 },
    { via: "Doha", airlines: ["Qatar Airways"], totalHours: 11 },
    { via: "Riga o Varsovia", airlines: ["airBaltic", "LOT"], totalHours: 12 },
  ],
  tips: [
    "Pegasus por Sabiha Gökçen suele ser lo más barato: 350-450 € ida y vuelta si te mueves con tiempo.",
    "Uzbekistan Airways vuela a Madrid y Milán algunas temporadas. Si algún día abre Barcelona, esto cambia de liga.",
    "Volver desde Urgench o Nukus vía Tashkent cuesta 40-60 € más y te ahorra dos días de tren.",
    "Casi todo aterriza de madrugada: reserva el primer hotel con recogida o ten el Yandex Go instalado.",
  ],
  meta: vol([PROPIO], "Comprobar rutas de temporada antes de reservar", "media"),
};

export const docs: DocsSection = {
  text:
    "Pasaporte y a volar: los españoles entran sin visado hasta 30 días (mejor con 3 meses de validez de sobra). Seguro no te lo piden, pero llévalo. El registro de estancia lo hacen los hoteles solos; guarda los resguardos (en papel o en la app E-Mehmon) porque a veces los piden al salir, sobre todo si has dormido en yurtas o en casas particulares.",
  steps: ["Pasaporte con 3 meses de validez", "Nada que tramitar antes de volar", "Guardar los registros de alojamiento hasta la salida"],
  links: [MAEC, { label: "Política de visados de Uzbekistán (Wikipedia)", url: "https://en.wikipedia.org/wiki/Visa_policy_of_Uzbekistan", kind: "wiki" }],
  warnings: ["Si llevas medicamentos con codeína o tramadol, declara: son estrictos.", "Fotografiar estaciones, puentes y edificios oficiales sigue estando mal visto fuera de Tashkent."],
  meta: vol([MAEC], "Exención de visado desde 2019; confírmalo antes de viajar"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común bajísima; policía por todas partes y, con el turista, amable." },
    { key: "robos", level: "bajo", text: "Algún carterista en Chorsu y en el bazar Siab. Nada comparado con Barcelona." },
    { key: "timos", level: "medio", text: "Taxis sin app que inflan el precio y cambistas de calle. Con Yandex Go y cajeros, te lo ahorras todo." },
    { key: "zonasConflicto", level: "bajo", text: "La franja con Afganistán (Termez) está tranquila pero no pilla de paso. El resto, sin problema." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; hay controles en metro y estaciones." },
    { key: "transporte", level: "bajo", text: "Trenes y metro seguros a cualquier hora. En los nocturnos, cierra el compartimento." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema salvo en instalaciones oficiales. La gente te pide que la fotografíes." },
    { key: "noche", level: "bajo", text: "Ciudades tranquilas de noche. Poca luz en los barrios, y ya." },
  ],
  conflictAreas: ["La zona fronteriza con Afganistán: se puede ir, pero no tiene interés para esta ruta."],
  soloText:
    "De los países más cómodos de Asia para ir solo. La hospitalidad es de verdad: te invitan a té y a plov cada dos por tres, y la policía te ayuda antes que molestarte. Lo único que cansa es la atención constante en zonas rurales. Para mujeres solas también se considera fácil, con ropa discreta fuera de Tashkent.",
  meta: vol([MAEC]),
};

export const politics: PoliticsSection = {
  text:
    "República presidencialista autoritaria en fase de apertura desde 2016: menos represión que con Karímov, reformas económicas y el turismo como prioridad del Estado. Sin protestas relevantes salvo Karakalpakstán en 2022, que se reprimieron. Las fronteras con Kirguistán y Tayikistán están tranquilas. Para el viajero no hay restricciones, pero no es un país donde ponerse a criticar al Gobierno en voz alta en un bar.",
  watch: ["Karakalpakstán: tensión latente desde 2022, sin efecto en el turista", "Precios y tipo de cambio: inflación de dos dígitos"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Se sobrevive con el móvil sin decir una palabra: Yandex Go para moverte, Google Translate con la cámara para el cirílico y railway.uz para los trenes. Google Maps funciona, pero Yandex Maps tiene más detalle fuera de Tashkent. Cobertura 4G buena en ciudades y en el eje del tren; desaparece en el desierto y camino de Muynak, que es cuando más la querrías.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Ucell o Beeline en el aeropuerto (pasaporte, unos 5 €)"],
  payments:
    "Visa y Mastercard van en hoteles, restaurantes de ciudad y en el metro de Tashkent. Bazares, marshrutkas, entradas pequeñas y todo Karakalpakstán: efectivo. Pagar con el móvil funciona donde aceptan tarjeta. Lleva euros para cambiar en bancos, nunca en la calle.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "El uzbeko se escribe en latino y el ruso, que habla todo el mundo, en cirílico: verás las dos cosas mezcladas en cada cartel. El inglés se queda en hoteles, universitarios y guías; fuera de ahí desaparece misteriosamente. Aun así se viaja bien sin idioma: la gente tiene paciencia, los números se escriben en un papel y con diez palabras de ruso te ganas a cualquiera.",
  machinesText:
    "Los tornos del metro son contactless, los billetes de tren se compran online en inglés y en las estaciones hay ventanilla con paciencia pero poco inglés. Carteles en uzbeko y ruso; en inglés, solo en las zonas turísticas de Samarcanda y Bujará.",
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
    { month: 1, kind: "clima", text: "Puede nevar en Samarcanda y Tashkent; hoteles tirados de precio" },
    { month: 2, kind: "festival", text: "Temporada de kupkari en los pueblos", festivalId: "uz-kupkari" },
    { month: 3, kind: "festival", text: "Navruz (21 de marzo): tres días de fiesta nacional", festivalId: "uz-navruz" },
    { month: 4, kind: "temporada", text: "Arranca la temporada alta: reserva el Afrosiyob" },
    { month: 5, kind: "festival", text: "Silk and Spices en Bujará", festivalId: "uz-silk-spices" },
    { month: 6, kind: "clima", text: "Primeros 35 °C; mañanas y noches todavía buenas" },
    { month: 7, kind: "clima", text: "Horno. El desierto a mediodía no se puede" },
    { month: 8, kind: "festival", text: "Sharq Taronalari en el Registán (años impares)", festivalId: "uz-sharq-taronalari" },
    { month: 9, kind: "festival", text: "Stihia en Muynak (fecha variable; a veces cae en mayo)", festivalId: "uz-stihia" },
    { month: 9, kind: "festivo", text: "1 de septiembre: Día de la Independencia, desfiles" },
    { month: 10, kind: "temporada", text: "El mejor mes para el Aral y las fortalezas; noches frías" },
    { month: 11, kind: "temporada", text: "Se va el turismo; buen momento para las ciudades" },
    { month: 12, kind: "cierre", text: "Tours 4x4 al Aral parados si hay hielo" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Trenes rápidos entre las ciudades que de verdad interesan: el eje Tashkent–Samarcanda–Bujará–Khiva se hace entero sin coche.",
    "Muynak y el Mar de Aral son el sitio circo definitivo, y a los barcos se llega sin tour.",
    "Reliquias soviéticas a punta pala en Tashkent: metro, Hotel Uzbekistan, monumento al terremoto. Aquí hay mandanga.",
    "Barato de verdad: 55 € al día viviendo bien, trenes de 10 €, entradas de 3.",
    "Sin visado, seguro, gente que te invita a plov y casi cero guiris fuera del Registán.",
    "Puedes estar dos semanas sin aburrirte: cada ciudad es distinta de la anterior.",
  ],
  cons: [
    "No hay vuelo directo desde Barcelona: 9-11 horas con escala y llegada de madrugada con cara de zombi.",
    "El Mar de Aral está donde Cristo perdió la zapatilla: marshrutkas sin horario y, para ver el agua, un 4x4 que no es barato.",
    "En verano te cueces vivo, y en invierno cierran los tours al desierto.",
    "Fuera de los hoteles el inglés desaparece misteriosamente y todo está en cirílico: el móvil es obligatorio.",
    "Es un régimen autoritario: para el turista, sin problemas, pero con límites claros.",
  ],
  text:
    "Aquí hay material para 12 días largos y sin relleno: cada ciudad de la Seda pide dos noches, Tashkent tiene la ración soviética completa y el salto a Karakalpakstán convierte el viaje en otra cosa. Sin coche va sorprendentemente bien hasta Nukus; a partir de ahí toca marshrutka y, si quieres ver el agua del Aral, pagar un 4x4. Ve en abril-mayo u octubre, reserva el Afrosiyob y deja Muynak para el final: es el sitio del que vas a hablar durante años.",
  meta: est([PROPIO]),
};
