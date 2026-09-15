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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Georgia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Georgia", url: "https://www.seat61.com/Georgia.htm", kind: "blog" };
const GR: Source = { label: "Georgian Railway (tre.ge)", url: "https://tre.ge/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Georgia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Georgia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Empieza la aventura. Georgia tiene una sola línea de tren que importa, Tiflis–Batumi, con dos Stadler suizos al día que son cómodos, baratos y se agotan; un nocturno a Zugdidi que es la puerta de Svaneti; y trenes eléctricos de 1970 que van a Gori a paso de burro con abuelas vendiendo churchkhela. Los billetes se compran en tre.ge con tarjeta extranjera y funciona. Todo lo demás es marshrutka: furgonetas que salen de la estación de Didube cuando se llenan, cuestan céntimos y llegan a cualquier pueblo con un conductor que se cree piloto.",
  corridorsIntro: "Cuatro líneas, y solo una de verdad. Para el resto del país mira la sección de buses.",
  busText:
    "Las marshrutkas son el transporte nacional: desde Didube (Tiflis) salen a Kutaisi, Gori, Kazbegi, Akhaltsikhe y todo lo demás, sin horario fijo, a 3-5 € el viaje largo. Son incómodas, van llenas, el conductor fuma y adelanta en curva; también son la única forma de llegar a los sitios de esta lista. Hay buses más serios (Omnibus, Metro Georgia) en las rutas gordas. Y Bolt funciona en todas las ciudades a precios que hacen que un taxi de 30 km cueste lo que un café en Barcelona.",
  busCompanies: ["Marshrutkas (Didube y Ortachala)", "Metro Georgia", "Omnibus Express", "Gareji Line (Davit Gareja)"],
  apps: [
    { name: "Bolt", use: "taxi con precio cerrado en Tiflis, Kutaisi y Batumi: 1-3 € por trayecto. Tu mejor amigo", url: "https://bolt.eu" },
    { name: "TRE.GE", use: "billetes de tren oficiales, con tarjeta extranjera", url: "https://tre.ge/en" },
    { name: "Google Maps", use: "para las ciudades va bien; para las marshrutkas, pregunta en la estación" },
    { name: "Google Translate", use: "alfabeto georgiano offline; la cámara es imprescindible para los carteles" },
    { name: "Metromoney", use: "la tarjeta del metro de Tiflis; el contactless del banco también vale" },
  ],
  noCarVerdictText:
    "Se puede, pero empieza el circo. Las ciudades, Gori, Kutaisi y Batumi se hacen en tren o marshrutka sin drama, y dentro de ellas Bolt resuelve todo. Tskaltubo tiene marshrutka urbana desde Kutaisi. A partir de ahí toca aceptar las reglas georgianas: Chiatura, Vardzia, Svaneti y la Carretera Militar se hacen en marshrutkas de pocas al día que salen cuando se llenan, y Davit Gareja depende de un bus de temporada. Todo llega, ninguno a la hora que dice nadie. Para nuestro perfil es viable de arriba abajo; para alguien con prisa, no.",
  hardWithoutCar: [
    "Vardzia: marshrutka a Akhaltsikhe (4 h) y otra a Vardzia (2-3 al día). Dormir en Akhaltsikhe.",
    "Svaneti: nocturno a Zugdidi y marshrutka de 3 h; a Ushguli, jeep compartido.",
    "Davit Gareja: solo con el bus Gareji Line de temporada o taxi con espera.",
    "La Carretera Militar: las marshrutkas a Kazbegi paran en Gudauri, pero volver a subir a una llena es lotería.",
    "Chiatura y Katskhi: se hacen, con marshrutka y taxi local; es un día entero desde Kutaisi.",
  ],
  meta: vol([SEAT61, GR, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 15, note: "guesthouse con desayuno georgiano, que ya es media comida" },
    { concept: "hotel-mid", eur: 45 },
    { concept: "comida-barata", eur: 4, note: "khachapuri, khinkali por unidad, lobio" },
    { concept: "restaurante", eur: 12, note: "con vino de la casa a jarras" },
    { concept: "transporte-urbano", eur: 0.35 },
    { concept: "tren-intercity", eur: 12, note: "Stadler Tiflis–Batumi en segunda" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 50 € al día viviendo bien y bebiendo vino.",
    "Las guesthouses familiares (en Booking) son la mejor relación calidad-precio del Cáucaso y la cena opcional suele ser la mejor comida del día.",
    "Bolt en vez de taxi de calle, siempre: el de calle te pide el triple sin taxímetro.",
    "El vino en tinaja de la casa cuesta 2-3 € el litro y es mejor que el de botella con etiqueta.",
    "Cajeros del Bank of Georgia y TBC sin comisión; el cambio en euros es honesto en las casas de cambio con pantalla.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026 con el lari a ≈ 3 por euro"),
};

export const flights: FlightsSection = {
  directRoutes: [{ to: "Kutaisi", airport: "KUT", airlines: ["Wizz Air"], lowCost: true, hours: 4.75, weekly: 3 }],
  oneStop: [
    { via: "Estambul (IST / SAW)", airlines: ["Turkish Airlines", "Pegasus"], totalHours: 7 },
    { via: "Varsovia o Viena", airlines: ["LOT", "Austrian"], totalHours: 8 },
    { via: "Riga", airlines: ["airBaltic"], totalHours: 9 },
  ],
  tips: [
    "Wizz vuela directo a Kutaisi tres veces por semana desde El Prat: 4 h 45 y a menudo por menos de 100 € el trayecto. Es la puerta rara y la buena.",
    "A Tiflis no hay directo: Turkish o Pegasus por Estambul, 7-8 h en total, y aterrizas de madrugada como en Uzbekistán.",
    "Entra por Kutaisi y sal por Tiflis (o al revés): Wizz por un lado, Pegasus por el otro, y no repites camino.",
    "Kutaisi está a 20 km del aeropuerto: hay bus de Georgian Bus a Tiflis y Batumi coordinado con los vuelos, y Bolt a la ciudad por 8 €.",
  ],
  meta: vol([PROPIO], "Wizz cambia frecuencias por temporada; comprobar"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale, y hasta un año: Georgia deja entrar a los españoles sin visado 365 días con pasaporte o DNI. La novedad de 2026 es que el seguro de viaje con cobertura médica es obligatorio (mínimo 30.000 laris, unos 10.000 €): pueden pedirlo en la frontera y lo piden. Abjasia y Osetia del Sur son territorios ocupados por Rusia: entrar desde ahí es delito en Georgia y desde Georgia no se puede.",
  steps: ["DNI o pasaporte en vigor", "Seguro de viaje con cobertura médica, impreso o en el móvil (obligatorio desde 2026)", "Nada más que tramitar"],
  links: [MAEC],
  warnings: ["No intentes entrar en Abjasia ni en Osetia del Sur: la línea está vigilada y el lío es serio.", "Si vienes de Armenia en el nocturno, la frontera se cruza durmiendo pero te despiertan dos veces."],
  meta: vol([MAEC], "Seguro obligatorio desde el 1 de enero de 2026; confirmar la cobertura mínima antes de viajar"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; Tiflis es más segura de noche que Barcelona." },
    { key: "robos", level: "bajo", text: "Algún carterista en el metro y en Didube. Poca cosa." },
    { key: "timos", level: "medio", text: "Taxis de calle que inflan, «cambistas» amigos y la vieja estafa de la chica que te invita a un bar con cuenta de 500 €. Con Bolt y sentido común, nada." },
    { key: "zonasConflicto", level: "medio", text: "Las líneas de Abjasia y Osetia del Sur: no acercarse. El resto del país, tranquilo; la presa de Enguri está justo en el límite y se visita." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "El peligro real del país es la conducción: las marshrutkas adelantan en curva. Trenes y metro, sin problema." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema. En la presa de Enguri, en la frontera y en cuarteles, no." },
    { key: "noche", level: "bajo", text: "Tiflis de noche es un paseo; el barrio de la estación, como todos los barrios de estación." },
  ],
  conflictAreas: ["Abjasia y Osetia del Sur (ocupadas por Rusia): no entrar. Pueblos junto a la línea de Osetia, como los de alrededor de Gori, sin problema pero sin acercarse a las vallas."],
  soloText:
    "Uno de los países más hospitalarios del mundo, y no es una frase de guía: te invitan a la mesa, al vino y a dormir si te ven perdido. Para ir solo es fácil, barato y seguro; lo único que cansa es el vino que no puedes rechazar. Mujeres solas: sin problemas de seguridad, sí con algún pesado insistente en las ciudades y una cultura de género muy tradicional en los pueblos.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "Aquí sí hay política. Desde las elecciones de 2024 y la ley «de agentes extranjeros», Georgia vive en tensión: el gobierno de Sueño Georgiano ha frenado la entrada en la UE, hay manifestaciones casi diarias en la avenida Rustaveli con la policía antidisturbios delante, y la oposición está en la cárcel o en la calle. Un 20 % del país sigue ocupado por Rusia desde 2008 (Abjasia y Osetia del Sur). Para el viajero: las protestas son en un sitio concreto y a una hora concreta, el resto del país sigue con su vino. No te metas en la manifestación con la cámara si no quieres una noche larga.",
  watch: ["Protestas en Rustaveli: mira las noticias del día antes de ir al centro por la noche", "Relación con la UE y posibles sanciones: pueden afectar a vuelos y visados a medio plazo", "Rusos huidos de la movilización viviendo en Tiflis: han subido los alquileres y bajado la paciencia"],
  avoid: ["Abjasia y Osetia del Sur"],
  meta: vol([MAEC], "Situación política inestable desde 2024; consultar el MAEC antes de viajar", "media"),
};

export const digital: DigitalSection = {
  text:
    "Se sobrevive con el móvil: Bolt para moverte, Google Translate con la cámara para el alfabeto georgiano (que es precioso y no se parece a nada), tre.ge para los trenes y Google Maps para las ciudades. Fuera del roaming de la UE: SIM local de Magti o Silknet en el aeropuerto por 5 € con datos de sobra, o eSIM. Cobertura buena en todo el país salvo en Svaneti y en las gargantas, que es donde la querrías. Wifi en todas las guesthouses.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Magti o Silknet (5 €, en el aeropuerto con pasaporte)"],
  payments:
    "Tarjeta en supermercados, hoteles, restaurantes de ciudad y el metro. Marshrutkas, mercados, guesthouses de pueblo, entradas pequeñas y la mitad de Svaneti: efectivo en laris. Cajeros por todas partes salvo en la montaña.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "El georgiano tiene su propio alfabeto (33 letras redondas que parecen ganchos) y no se parece a ningún idioma que conozcas. El ruso lo habla todo el mundo de más de 40 años; el inglés, los de menos de 30 en las ciudades. En Tiflis y Batumi se sobrevive en inglés; en un pueblo de Imereti, con la cámara del traductor, diez palabras de ruso y una sonrisa. Los carteles de las ciudades y del metro van en georgiano e inglés; los de las marshrutkas, solo en georgiano, y la gente te ayuda sin que lo pidas.",
  machinesText:
    "Tornos del metro y tre.ge en inglés; las máquinas de las estaciones, en georgiano y ruso; los destinos de las marshrutkas, en georgiano en un cartón en el parabrisas: aprende a leer «ქუთაისი» (Kutaisi) y «ბათუმი» (Batumi) y ya vas.",
  survivalPhrases: [
    { es: "Hola", local: "გამარჯობა", latin: "gamarYOba" },
    { es: "Gracias", local: "მადლობა", latin: "MADloba" },
    { es: "¿Cuánto cuesta?", local: "რა ღირს?", latin: "ra ghirs" },
    { es: "Salud (en el brindis, obligatorio)", local: "გაუმარჯოს", latin: "gaumarYOS" },
    { es: "Estación de marshrutkas", local: "ავტოსადგური", latin: "avtosadGUri" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "temporada", text: "Navidad ortodoxa el 7 y Año Nuevo viejo el 14; Tiflis con nieve y vacía" },
    { month: 2, kind: "clima", text: "Frío gris; mes de esquí en Gudauri y de precios bajos" },
    { month: 3, kind: "festival", text: "Berikaoba, el carnaval pagano, en algún pueblo antes de la Cuaresma", festivalId: "ge-berikaoba" },
    { month: 4, kind: "temporada", text: "Abre el bus a Davit Gareja; Pascua ortodoxa con huevos rojos" },
    { month: 5, kind: "temporada", text: "El mejor mes: verde, fresco y con los pasos de montaña abriéndose" },
    { month: 6, kind: "festival", text: "Lomisoba: sacrificios de ovejas de madrugada en una ermita a 2.200 m", festivalId: "ge-lomisoba" },
    { month: 7, kind: "clima", text: "35 °C en Tiflis; Svaneti y Kazbegi en su mejor momento" },
    { month: 8, kind: "clima", text: "Calor y georgianos en Batumi; el mes más lleno" },
    { month: 9, kind: "festival", text: "Rtveli: la vendimia en Kajetia, un mes de supras", festivalId: "ge-rtveli" },
    { month: 10, kind: "festival", text: "Tbilisoba, la fiesta de la ciudad, un fin de semana de octubre", festivalId: "ge-tbilisoba" },
    { month: 10, kind: "temporada", text: "Luz de otoño y precios bajando; cierra el bus a Gareja a final de mes" },
    { month: 11, kind: "clima", text: "Lluvia en el oeste, sol frío en Tiflis; Tskaltubo con niebla es otra cosa" },
    { month: 12, kind: "clima", text: "Frío, corto y barato; Svaneti se corta con nieve" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Reliquias soviéticas a punta pala: la Crónica de Georgia, el Ministerio de Carreteras, un pueblo entero de sanatorios abandonados, teleféricos de Stalin y la presa más alta de la URSS. Aquí hay mandanga.",
    "Barato de verdad: 50 € al día viviendo bien y bebiendo vino de tinaja.",
    "Con el DNI te vale y hasta un año; Wizz directo a Kutaisi en menos de cinco horas.",
    "La hospitalidad es real: te sientan a la mesa y no te dejan pagar.",
    "Ciudades de cuevas, monjes en columnas, sacrificios paganos en ermitas: folclore vivo y raro.",
    "Bolt hace que moverse por las ciudades cueste lo que un café.",
  ],
  cons: [
    "Fuera del eje Tiflis–Batumi el tren no existe: marshrutkas que salen cuando se llenan y conducen como quieren.",
    "Vardzia, Svaneti y Gareja son días enteros y buses de dos al día: planificar o sufrir.",
    "Alfabeto propio y poco inglés fuera de las capitales: el móvil es obligatorio.",
    "Situación política tensa desde 2024: manifestaciones diarias y un gobierno que mira a Moscú.",
    "Tskaltubo se está acabando: cada mes hay un sanatorio menos que ver.",
    "Sin directo a Tiflis: por Estambul y aterrizando de madrugada.",
  ],
  text:
    "Georgia es el país del radar que más se parece a Uzbekistán en lo bueno (URSS fotogénica, precios de risa, gente que te adopta) y sin lo malo del visado y el alfabeto imposible, aunque el suyo tampoco es fácil. Doce días bien montados dan para Tiflis con su cara soviética, Gori, Kutaisi como base de los sanatorios y los teleféricos, la presa de Enguri y Batumi; quince, para Vardzia y Svaneti. Sin coche va, pero con las reglas georgianas: marshrutkas sin horario y un conductor que fuma. Ve en mayo-junio o en septiembre-octubre, lleva el seguro impreso, mira las noticias de Rustaveli y no dejes Tskaltubo para otro año, que no va a estar.",
  meta: est([PROPIO]),
};
