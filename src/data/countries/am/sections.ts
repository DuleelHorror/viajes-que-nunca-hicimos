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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Armenia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Armenia", url: "https://www.seat61.com/Armenia.htm", kind: "blog" };
const NUMBEO: Source = { label: "Numbeo · Armenia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Armenia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Sin coche vas a conocer íntimamente las estaciones de marshrutkas. El tren en Armenia es casi decorativo: un exprés a Gyumri los fines de semana, un lento diario, y el nocturno a Tiflis en días alternos, que es una joya soviética con sábanas y té y cruza el cañón de Debed al amanecer. Lo lleva una filial de los ferrocarriles rusos. Todo lo demás, incluido el sur entero, es marshrutka: furgonetas desde la estación central de Ereván que salen por la mañana y llegan cuando llegan. Y dentro de Ereván, Yandex Go a un euro.",
  corridorsIntro: "Dos líneas. La segunda es más una excusa para dormir en un tren soviético que un transporte.",
  busText:
    "Las marshrutkas son el país: a Goris (4 h 30), Dilijan (1 h 45), Gyumri (2 h), Sevan, Garni, y cualquier pueblo con carretera, por 2-8 €. Salen de la estación central (Kilikia) o de calles concretas según destino, que hay que preguntar. Para los sitios de esta lista que están a 10 km de la carretera (Herouni, Tatev, Khndzoresk, Karahunj), el remate es taxi negociado con espera, que en Armenia es barato y normal.",
  busCompanies: ["Marshrutkas (estación Kilikia)", "Taxis con espera negociados", "Tours de un día (Hyur Service, Envoy)"],
  apps: [
    { name: "Yandex Go", use: "taxi con precio cerrado en Ereván y Gyumri; 1-2 € por trayecto", url: "https://go.yandex" },
    { name: "GG", use: "el taxi local, con conductores que también hacen el día entero" },
    { name: "Google Maps", use: "para Ereván va bien; para las marshrutkas, cero: pregunta" },
    { name: "Google Translate", use: "alfabeto armenio offline y cámara; el ruso también ayuda" },
    { name: "ukzhd.am", use: "los pocos trenes, con horarios reales", url: "https://ukzhd.am" },
  ],
  noCarVerdictText:
    "Se puede, pero empieza el circo. Ereván y sus excursiones (Garni, Geghard, Khor Virap) se hacen con marshrutka y taxi corto sin problema, y Gyumri y Dilijan tienen transporte decente. El sur (Tatev, Khndzoresk, Karahunj) exige marshrutka de madrugada y taxis con espera desde Goris. Y Herouni, el radiotelescopio, es un taxi del día desde Ereván o nada. La solución armenia es la misma que en Georgia: un taxi para todo el día cuesta 25-30 € y te lleva a tres sitios. No es coche propio, no conduces, y te sale más barato que alquilar.",
  hardWithoutCar: [
    "Herouni: taxi con espera desde Ereván (25-30 € el día) o marshrutka a Byurakan y taxi local.",
    "Tatev, Khndzoresk y Karahunj: marshrutka de 4 h 30 a Goris y taxis con espera desde allí.",
    "Alaverdi y sus monasterios: marshrutka y taxi de 15 € para subir a Haghpat y Sanahin.",
    "Todo el país pasa por Ereván: cuenta con días de tránsito.",
  ],
  meta: vol([SEAT61, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 15, note: "guesthouse o hostal con desayuno" },
    { concept: "hotel-mid", eur: 40 },
    { concept: "comida-barata", eur: 4, note: "lahmajun, khorovats en un puesto, dolma" },
    { concept: "restaurante", eur: 12, note: "con vino de Areni o coñac" },
    { concept: "transporte-urbano", eur: 0.25 },
    { concept: "tren-intercity", eur: 3, note: "Ereván–Gyumri" },
    { concept: "cafe", eur: 1.5, note: "café armenio en cezve, con posos" },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 50 € al día viviendo bien.",
    "Un taxi para el día entero (Herouni, Garni y Geghard, Khor Virap) cuesta 25-30 €: dividido entre dos, es el transporte del viaje.",
    "Las marshrutkas se pagan al conductor en efectivo, en drams, y no hay billete.",
    "El coñac Ararat de 5 años cuesta 10 € en el supermercado y es un buen regalo para casa.",
    "Cajeros de Ameriabank e Inecobank sin comisión; el cambio de euros en la calle Abovyan es correcto.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026 con el dram a ≈ 420 por euro"),
};

export const flights: FlightsSection = {
  directRoutes: [],
  oneStop: [
    { via: "Viena", airlines: ["Austrian"], totalHours: 7.5 },
    { via: "Varsovia", airlines: ["LOT"], totalHours: 8 },
    { via: "Estambul (SAW)", airlines: ["Pegasus"], totalHours: 8 },
    { via: "París", airlines: ["Air France"], totalHours: 8.5 },
  ],
  tips: [
    "No hay directo desde Barcelona. Austrian por Viena y LOT por Varsovia son las combinaciones cómodas; Pegasus por Estambul, la barata (300-400 € ida y vuelta).",
    "Casi todo aterriza de madrugada, como en el Cáucaso entero: primera noche con recogida o Yandex Go instalado.",
    "Gyumri tiene vuelos Wizz a algunas ciudades europeas: mira si te cuadra entrar por Ereván y salir por Gyumri.",
    "El combo Georgia + Armenia con el nocturno Tiflis–Ereván ahorra un vuelo entero: entra por Kutaisi con Wizz y sal desde Ereván.",
  ],
  meta: vol([PROPIO], "Sin directo en 2026; comprobar rutas de temporada"),
};

export const docs: DocsSection = {
  text:
    "Pasaporte y a volar: los españoles entran sin visado hasta 180 días. No hay formulario ni tasa. Lo que hay que saber es la geografía política: las fronteras con Turquía y Azerbaiyán están cerradas y minadas, solo se entra y sale por Georgia, por Irán o en avión. Si tienes un sello de Azerbaiyán reciente en el pasaporte, la policía puede hacerte preguntas; con uno armenio, en Azerbaiyán directamente no entras.",
  steps: ["Pasaporte con validez durante la estancia", "Nada que tramitar", "Si vas a encadenar con Azerbaiyán, hazlo ANTES de Armenia, no después"],
  links: [MAEC],
  warnings: ["Nagorno-Karabaj ya no existe como entidad armenia desde 2023: no hay nada que visitar y la zona fronteriza con Azerbaiyán es militar.", "Lleva el pasaporte encima: la policía lo pide de vez en cuando."],
  meta: vol([MAEC], "Exención vigente; confirmar antes de viajar"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Bajísima. Ereván es de las capitales más seguras que vas a pisar." },
    { key: "robos", level: "bajo", text: "Casi inexistentes; alguna cartera en el Vernissage." },
    { key: "timos", level: "medio", text: "Taxis de calle sin taxímetro que inflan el precio; con Yandex Go, se acabó." },
    { key: "zonasConflicto", level: "medio", text: "Las fronteras con Azerbaiyán (este y sur, junto a Goris) son zona militar con incidentes puntuales. Tatev y Goris se visitan con normalidad; no te acerques a la línea." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Las marshrutkas conducen como en Georgia; el tren y el metro, sin problema." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema salvo en Metsamor, cuarteles y fronteras: ahí ni se te ocurra." },
    { key: "noche", level: "bajo", text: "Ereván de noche es un paseo con cafés abiertos hasta las dos." },
  ],
  conflictAreas: ["Franja fronteriza con Azerbaiyán en Syunik y Gegharkunik: los pueblos de carretera se cruzan sin problema, pero no hay nada que hacer pegado a la línea."],
  soloText:
    "Muy fácil de viajar en solitario: seguro, barato, con una diáspora que ha vuelto y habla de todo, y una hospitalidad de mesa que compite con la georgiana. Lo único que cansa es el tránsito: todo pasa por Ereván. Mujeres solas: sin problemas de seguridad; sociedad tradicional en los pueblos, moderna en la capital.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "Un país pequeño rodeado de enemigos y con un aliado (Rusia) que no apareció cuando hizo falta. Perdió la guerra de 2020 y en 2023 Azerbaiyán se quedó con todo Nagorno-Karabaj en un día: 100.000 armenios huyeron y viven ahora en Ereván. El gobierno de Pashinián negocia un tratado de paz con Bakú mientras se aleja de Moscú y mira a la UE; en 2026 hay elecciones y el ambiente está cargado. Para el que viaja: cero problema en la calle, pero es un país en duelo y se nota en las conversaciones.",
  watch: ["Elecciones de 2026 y el tratado de paz con Azerbaiyán", "Incidentes puntuales en la frontera de Syunik", "Base militar rusa en Gyumri: se ve, no se fotografía"],
  avoid: ["Franja fronteriza con Azerbaiyán"],
  meta: vol([MAEC], "Situación cambiante desde 2023; consultar el MAEC", "media"),
};

export const digital: DigitalSection = {
  text:
    "Se sobrevive con el móvil: Yandex Go para moverte, la cámara del traductor para el alfabeto armenio (39 letras que parecen garabatos elegantes) y Google Maps para Ereván. SIM local de Viva-MTS o Ucom en el aeropuerto por 5 € con datos de sobra. Cobertura buena en todo el país salvo gargantas; wifi en cada café de Ereván, que tiene una cultura de cafetería muy seria.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Viva-MTS o Ucom (5 €, en el aeropuerto con pasaporte)"],
  payments:
    "Tarjeta en Ereván casi en todo; fuera, efectivo en drams para marshrutkas, taxis, guesthouses y entradas. Cajeros en todas las ciudades; en Goris y Dilijan, alguno. Euros se cambian bien en la capital.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Armenio, con alfabeto propio del siglo V, y ruso como segunda lengua de todo el que pasó por la escuela soviética. El inglés lo habla la gente joven de Ereván y la diáspora que ha vuelto (mucha, de Los Ángeles, Moscú y Beirut); en un pueblo de Syunik, el traductor y las manos. Los carteles de Ereván van en armenio e inglés; los de las marshrutkas, en armenio, y el conductor grita el destino.",
  machinesText:
    "El metro tiene fichas de plástico en taquilla; los pocos trenes, taquilla con paciencia; nada de máquinas en inglés fuera de los cajeros. Ereván está pensada para andar y pedir.",
  survivalPhrases: [
    { es: "Hola", local: "Բարև", latin: "baREV" },
    { es: "Gracias", local: "Շնորհակալություն (o «mersi», que vale)", latin: "shnorhakaluTYUN" },
    { es: "¿Cuánto es?", local: "Ինչ արժե՞", latin: "inch arZHE" },
    { es: "Estación de marshrutkas", local: "Ավտոկայան", latin: "avtokaYAN" },
    { es: "Salud (brindis)", local: "Կենացդ", latin: "keNATSD" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "temporada", text: "Navidad armenia el 6 de enero; Ereván con nieve y −10 °C" },
    { month: 2, kind: "festival", text: "Trndez el 13: saltos sobre el fuego en cada iglesia", festivalId: "am-trndez" },
    { month: 3, kind: "clima", text: "Deshielo; el sur aún con nieve en los pasos" },
    { month: 4, kind: "festivo", text: "24 de abril: día del genocidio, el país entero sube a Tsitsernakaberd. Mejor no ir de turista ese día" },
    { month: 5, kind: "temporada", text: "El mejor mes: verde, fresco, todo abierto" },
    { month: 6, kind: "temporada", text: "Sevan y el norte en su mejor momento; Ereván empieza a apretar" },
    { month: 7, kind: "festival", text: "Vardavar: un domingo de guerra de agua nacional", festivalId: "am-vardavar" },
    { month: 7, kind: "clima", text: "38 °C en Ereván; el sur y la montaña, perfectos" },
    { month: 8, kind: "clima", text: "Sigue el calor seco; la diáspora de vacaciones llena la ciudad" },
    { month: 9, kind: "temporada", text: "Luz de otoño y precios bajando; Tatev y Goris en su mejor época" },
    { month: 10, kind: "festival", text: "Vino en Areni el primer sábado y Erebuni-Ereván el segundo fin de semana", festivalId: "am-areni-vino" },
    { month: 10, kind: "festival", text: "Erebuni-Ereván, el cumpleaños de la ciudad", festivalId: "am-erebuni-erevan" },
    { month: 11, kind: "clima", text: "Frío seco y cielos limpios; el Ararat se ve mejor que nunca" },
    { month: 12, kind: "clima", text: "Invierno serio; los pasos del sur pueden cerrarse" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Brutalismo soviético de primera: la terminal-OVNI de Zvartnots, la Cascada, la nave de Demirchyan, la Casa de los Escritores sobre el lago y un radiotelescopio gigante oxidándose en una montaña.",
    "Historia oscura de verdad y bien contada: el memorial del genocidio y Gyumri con sus contenedores de 1988.",
    "Pequeño, denso y barato: 50 € al día y todo a menos de cinco horas de la capital.",
    "El teleférico más largo del mundo para llegar a un monasterio con sismógrafo medieval, y se hace sin coche.",
    "Folclore vivo que no es para turistas: saltar hogueras en febrero, guerra de agua en julio.",
    "Se encadena con Georgia en un tren nocturno soviético por un cañón.",
  ],
  cons: [
    "Sin directo desde Barcelona, y se aterriza de madrugada.",
    "El tren no existe: marshrutkas de mañana y taxis con espera para casi todo lo bueno.",
    "Todo pasa por Ereván: en doce días, tres son de tránsito.",
    "Herouni depende del humor del vigilante: puedes hacer 80 km para verlo por la valla.",
    "País en duelo, con fronteras cerradas a dos lados y un vecino que amenaza: se nota.",
    "Alfabeto propio y poco inglés fuera de la capital.",
  ],
  text:
    "Armenia es Georgia concentrada: más pequeña, más triste y con más hormigón soviético por kilómetro. Nueve días dan para Ereván y sus excursiones de taxi (el radiotelescopio, los monasterios de la roca, el pozo de san Gregorio), el sur con las Alas de Tatev y las cuevas, y Gyumri para entender lo que pasó en 1988; doce, para el lago Sevan y el cañón de Debed. Sin coche funciona con la fórmula del Cáucaso: marshrutka a la ciudad base y taxi con espera para el último tramo, que aquí cuesta lo que un menú. Ve en mayo-junio o septiembre-octubre, y si puedes, entra por Georgia y sal por Ereván o al revés: el nocturno entre las dos capitales es uno de los sitios de la lista.",
  meta: est([PROPIO]),
};
