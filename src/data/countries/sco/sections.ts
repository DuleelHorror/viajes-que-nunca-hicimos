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
const GOVUK: Source = { label: "GOV.UK · Electronic Travel Authorisation", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta", kind: "oficial" };
const SCOTRAIL: Source = { label: "ScotRail", url: "https://www.scotrail.co.uk", kind: "oficial" };
const TRAVELINE: Source = { label: "Traveline Scotland", url: "https://www.travelinescotland.com", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Edimburgo", url: "https://www.numbeo.com/cost-of-living/in/Edinburgh", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "ScotRail cubre el eje central (Edimburgo–Glasgow cada 15 minutos) y las líneas de postal hacia Inverness, Fort William, Oban, Aberdeen y Thurso: lentas, fiables y con paisaje por la ventana. No hay alta velocidad y el precio duele si compras el mismo día. El truco es el billete «advance» con asiento numerado: se compra en la app con semanas de antelación y cuesta la mitad. El único nocturno, el Caledonian Sleeper, va a Londres, así que para nosotros no.",
  corridorsIntro: "Seis líneas. Las tres del norte y del oeste son, además, de las mejores excursiones del viaje.",
  busText:
    "Donde no llega el tren, llega Citylink (Glasgow–Glencoe–Fort William–Inverness, Skye), Megabus (interurbanos baratos) y Stagecoach (rural e islas). Horarios en Traveline Scotland, billete en la app o contactless al subir. En las islas hay pocos buses al día: lleva la tabla de horarios en el móvil y no te fíes de la memoria.",
  busCompanies: ["Citylink", "Megabus", "Stagecoach", "Lothian Buses", "NorthLink Ferries", "CalMac Ferries", "Loganair"],
  apps: [
    { name: "ScotRail", use: "billetes advance y horarios de tren", url: "https://www.scotrail.co.uk" },
    { name: "Traveline Scotland", use: "todos los buses rurales y de islas en un solo planificador", url: "https://www.travelinescotland.com" },
    { name: "Citylink", use: "buses de las Highlands; reserva el asiento", url: "https://www.citylink.co.uk" },
    { name: "Transport for Edinburgh", use: "buses y tranvía de Edimburgo; el tope diario se aplica solo" },
    { name: "Google Maps", use: "va perfecto, con horarios en tiempo real en las ciudades" },
    { name: "Uber", use: "en Edimburgo y Glasgow; en las Highlands, taxis locales por teléfono" },
  ],
  noCarVerdictText:
    "Se puede hacer un gran viaje sin coche: ciudades, Fife, Glencoe, Inverness y alrededores, Orkney y Shetland tienen tren, bus o ferri. Lo que se resiente es el ritmo: los sitios raros están desperdigados y cada uno pide un bus rural, un tramo andando o un taxi de 15 libras, así que fuera de las ciudades sale a un sitio circo por día. Las Hébridas Exteriores y St Kilda son otro viaje aparte.",
  hardWithoutCar: [
    "Scotland's Secret Bunker: bus 95 más 2 km andando, o taxi desde Anstruther.",
    "St Peter's Seminary: tren a Cardross y 2 km andando por el bosque.",
    "Los yacimientos de Orkney fuera del verano: tour o taxi.",
    "Inchindown y Cruachan: solo en las fechas de visita guiada.",
    "St Kilda, el interior de Skye y las Hébridas Exteriores: tours o muchos días encadenando ferris.",
  ],
  meta: vol([SCOTRAIL, TRAVELINE, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 30, note: "cama en hostel; una habitación privada barata, 55 €" },
    { concept: "hotel-mid", eur: 110 },
    { concept: "comida-barata", eur: 12, note: "fish and chips; el meal deal del súper, 5 €" },
    { concept: "restaurante", eur: 30 },
    { concept: "transporte-urbano", eur: 2.3 },
    { concept: "tren-intercity", eur: 25, note: "Edimburgo–Inverness advance; 60 € si lo compras ese día" },
    { concept: "cafe", eur: 3.5 },
    { concept: "supermercado", eur: 10 },
  ],
  tips: [
    "Los billetes de tren «advance» y el pase Highland Rover (4 días en 8) recortan el gasto más gordo del viaje.",
    "Los hostels de Edimburgo y Glasgow son buenos y baratos; en las islas, B&B.",
    "Agosto (Fringe) y del 28 de diciembre al 2 de enero: alojamiento a precio de Londres. Huye o paga.",
    "Muchos sitios turbios son gratis: cementerios, el Forth Bridge, Glencoe, Clava Cairns, Brodgar.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros; la libra ronda 1,17 €"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Edimburgo", airport: "EDI", airlines: ["Ryanair", "Vueling", "easyJet"], lowCost: true, hours: 2.75, weekly: 25 },
    { to: "Glasgow", airport: "GLA", airlines: ["Jet2"], lowCost: true, hours: 2.75, weekly: 4, seasonal: true },
  ],
  oneStop: [
    { via: "Londres (LHR / LGW / STN)", airlines: ["British Airways", "easyJet", "Ryanair"], totalHours: 5 },
    { via: "Ámsterdam (a Inverness o Aberdeen)", airlines: ["KLM"], totalHours: 6 },
  ],
  tips: [
    "Edimburgo tiene tranvía del aeropuerto al centro en media hora: entrar y salir por ahí es lo más simple.",
    "Para Up Helly Aa: vuelo a Edimburgo y Loganair a Sumburgh (1 h 15), o el ferri nocturno desde Aberdeen.",
    "Vuelos abiertos: entrar por Edimburgo y salir por Glasgow o Inverness te ahorra un día de vuelta.",
  ],
  meta: vol([PROPIO], "Comprobar frecuencias de temporada; Glasgow puede no operar en invierno", "media"),
};

export const docs: DocsSection = {
  text:
    "El Reino Unido no está en la UE ni en Schengen: hace falta pasaporte (el DNI no vale) y, desde abril de 2025, la ETA británica para los de la UE: se pide online o en la app UK ETA, cuesta unas 16 libras, la aprueban en horas y vale dos años. Como turista puedes quedarte hasta seis meses sin visado. Seguro no te lo exigen, pero la sanidad no es gratis para visitantes, así que llévalo.",
  steps: ["Pasaporte en vigor durante todo el viaje", "Pedir la ETA en la app UK ETA al menos 3 días antes", "Nada más: ni registros ni formularios"],
  links: [GOVUK, MAEC],
  warnings: ["La ETA va ligada al pasaporte: si lo renuevas, toca pedir otra.", "Sin tarjeta sanitaria europea: seguro de viaje sí o sí."],
  meta: vol([GOVUK, MAEC], "Requisito ETA vigente desde 2025; comprobar tasa y plazos"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia baja. Glasgow tiene una fama que el centro ya no se merece." },
    { key: "robos", level: "bajo", text: "Algún carterista en la Royal Mile en agosto. Nada comparado con el sur de Europa." },
    { key: "timos", level: "bajo", text: "Prácticamente inexistentes: precios claros y taxis con taxímetro." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Nivel de alerta británico «substantial», pero sin incidentes en Escocia en años." },
    { key: "transporte", level: "bajo", text: "Trenes y buses tranquilos. El último tren del viernes en Glasgow puede ser ruidoso." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema en ningún sitio, incluidas las instalaciones militares desde fuera." },
    { key: "noche", level: "medio", text: "Borracheras de fin de semana en los centros: el peligro es de ruido, no de agresión. Los cementerios cierran de noche salvo con tour." },
  ],
  conflictAreas: [],
  soloText:
    "Ideal para ir solo: hostels, tours de día, buses, gente charlatana en los pubs y cero fricción con el idioma. En las islas y en las Highlands lo único a vigilar es el tiempo: senderos peligrosos y ferris cancelados, no personas.",
  meta: vol([MAEC], undefined, "alta"),
};

export const politics: PoliticsSection = {
  text:
    "Nación del Reino Unido con parlamento propio y gobierno nacionalista que quiere la independencia. El debate es constante y pacífico y al viajero no le afecta en nada. Democracia estable, protestas ordenadas. Lo único práctico del Brexit son la ETA y quedarte sin tarjeta sanitaria europea.",
  watch: ["Huelgas de tren puntuales (ScotRail): mira la semana del viaje", "El debate independentista: tema de pub, no de riesgo"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Todo funciona: Google Maps con horarios en tiempo real, contactless hasta en el bus rural y en la Capilla Italiana, eSIM europea sin coste extra en muchos operadores. La cobertura se cae en tramos de las Highlands, en Glencoe y en parte de las islas: descarga mapas y horarios de Traveline antes de salir de la ciudad.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "roaming UE incluido en algunos operadores españoles (compruébalo)"],
  payments:
    "Tarjeta y contactless en todas partes; el efectivo casi ha desaparecido y algunos sitios ya no lo aceptan. Los billetes escoceses valen en todo el Reino Unido. Cajeros gratis en bancos; evita los de tienda, que cobran comisión.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Inglés en todo, lo que para nosotros es casi como el español: todo está escrito, las máquinas y las apps van en inglés claro y nadie espera que hables gaélico. El único obstáculo es el acento, sobre todo en Glasgow, en Shetland y en las Highlands rurales: pedir que te lo repitan es lo normal.",
  machinesText:
    "Máquinas de tren con pantalla en inglés y pago con tarjeta; buses con contactless al subir (no hace falta ni hablar); carteles en inglés y gaélico en Highlands e islas. Los tours (Mary King's Close, búnkeres) son en inglés hablado rápido: unos auriculares de traducción no son mala idea.",
  survivalPhrases: [
    { es: "Un billete de ida a…", local: "A single to…, please" },
    { es: "¿Este bus para en…?", local: "Does this bus stop at…?" },
    { es: "¿Me lo repite, por favor?", local: "Sorry, could you say that again?" },
    { es: "Salud (brindis)", local: "Slàinte", latin: "SLAN-cha" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Burning of the Clavie en Burghead (día 11)", festivalId: "sco-burning-clavie" },
    { month: 1, kind: "festival", text: "Up Helly Aa en Lerwick (último martes)", festivalId: "sco-up-helly-aa" },
    { month: 1, kind: "festivo", text: "Burns Night (25): cenas con haggis y gaitas en todo el país" },
    { month: 2, kind: "clima", text: "Nieve en las Highlands; ferris a las islas con cancelaciones" },
    { month: 3, kind: "temporada", text: "Reabren el Secret Bunker y los sitios de temporada" },
    { month: 4, kind: "festival", text: "Beltane Fire Festival en Calton Hill (día 30)", festivalId: "sco-beltane" },
    { month: 5, kind: "temporada", text: "Empiezan los barcos a Staffa y St Kilda; luz hasta las 22 h" },
    { month: 6, kind: "temporada", text: "Highland Games por todo el país; simmer dim en Shetland" },
    { month: 7, kind: "clima", text: "Midges en la costa oeste; temporada alta" },
    { month: 8, kind: "cierre", text: "Fringe de Edimburgo: precios y masas; evita la capital" },
    { month: 9, kind: "temporada", text: "Se vacían las Highlands; colores de otoño desde finales de mes" },
    { month: 10, kind: "festival", text: "Samhuinn Fire Festival (día 31)", festivalId: "sco-samhuinn" },
    { month: 11, kind: "cierre", text: "Cierran Secret Bunker, Staffa y muchos sitios de las islas hasta marzo" },
    { month: 12, kind: "festival", text: "Stonehaven Fireballs (día 31, medianoche)", festivalId: "sco-stonehaven-fireballs" },
    { month: 12, kind: "festival", text: "Hogmanay: procesión de antorchas (30) y fiestón callejero (31)", festivalId: "sco-hogmanay" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Festivales de fuego pagano de primera división (Up Helly Aa, Beltane, Clavie, Fireballs), y varios sin salir de Edimburgo.",
    "Edimburgo subterráneo y macabro: peste, ladrones de cadáveres, poltergeist y ataúdes en miniatura a cinco minutos andando unos de otros.",
    "Búnker nuclear, central dentro de una montaña y túneles con eco de dos minutos: infraestructura rarísima.",
    "Vuelo directo low-cost en menos de tres horas, todo en inglés y tarjeta hasta para el bus: la logística más fácil de la lista.",
    "Trenes de postal, buses Citylink y ferris a Orkney y Shetland: se llega a casi todo sin conducir.",
  ],
  cons: [
    "Caro: 130 € al día siendo razonable, y el tren sin «advance» duele en el alma.",
    "Los sitios circo están desperdigados: fuera de las ciudades, uno por día con bus rural, caminata o taxi.",
    "Clima atlántico: lluvia, viento, ferris cancelados y siete horas de luz en enero. Buen sitio para probar la impermeabilidad de la mochila.",
    "Nada soviético ni brutalista más allá de St Peter's: lo turbio aquí es histórico y folclórico, no industrial.",
    "Agosto y fin de año: Edimburgo a precio de Londres.",
  ],
  text:
    "Escocia es el destino fácil de la lista, y no por eso menos circo: en cinco días tienes el Edimburgo enterrado, un búnker nuclear y un seminario brutalista en ruinas; en diez añades Glencoe, Inverness y Orkney sin conducir; en catorce, si vas en enero, quemas un drakkar con mil vikingos en Shetland. Lo que marca la duración es la dispersión: cada sitio raro fuera de las ciudades te cuesta un día y un bus rural. Ve en mayo-junio o septiembre por la luz, o en enero por el fuego, y reserva los trenes antes que el hotel.",
  meta: est([PROPIO]),
};
