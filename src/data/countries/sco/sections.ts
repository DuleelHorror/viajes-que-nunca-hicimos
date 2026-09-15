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
const GOVUK: Source = { label: "GOV.UK · Electronic Travel Authorisation", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta", kind: "oficial" };
const SCOTRAIL: Source = { label: "ScotRail", url: "https://www.scotrail.co.uk", kind: "oficial" };
const TRAVELINE: Source = { label: "Traveline Scotland", url: "https://www.travelinescotland.com", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Edimburgo", url: "https://www.numbeo.com/cost-of-living/in/Edinburgh", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "ScotRail cubre el eje central (Edimburgo–Glasgow cada 15 minutos) y las líneas escénicas hacia Inverness, Fort William, Oban, Aberdeen y Thurso, lentas pero fiables y con paisaje. Sin alta velocidad y con precios altos si compras el mismo día: los billetes 'advance' con asiento numerado se compran en la app con semanas de antelación y cuestan la mitad. El único nocturno, el Caledonian Sleeper, va a Londres.",
  corridorsIntro: "Seis corredores; los tres del norte y el oeste son también las mejores excursiones del viaje.",
  busText:
    "Donde el tren no llega, llega Citylink (Glasgow–Glencoe–Fort William–Inverness, Skye), Megabus (interurbanos baratos) y Stagecoach (rural, islas). Horarios en Traveline Scotland, billetes en la app o contactless al subir. En las islas hay pocos servicios al día: planificar con la tabla en el móvil.",
  busCompanies: ["Citylink", "Megabus", "Stagecoach", "Lothian Buses", "NorthLink Ferries", "CalMac Ferries", "Loganair"],
  apps: [
    { name: "ScotRail", use: "billetes advance y horarios de tren", url: "https://www.scotrail.co.uk" },
    { name: "Traveline Scotland", use: "todos los buses rurales y de islas en un planificador", url: "https://www.travelinescotland.com" },
    { name: "Citylink", use: "buses Highlands; reservar asiento", url: "https://www.citylink.co.uk" },
    { name: "Transport for Edinburgh", use: "buses y tranvía de Edimburgo, tope diario automático" },
    { name: "Google Maps", use: "funciona perfecto con horarios en tiempo real en ciudades" },
    { name: "Uber", use: "Edimburgo y Glasgow; en Highlands, taxis locales por teléfono" },
  ],
  noCarVerdictText:
    "Se puede hacer un gran viaje sin coche: las ciudades, Fife, Glencoe, Inverness y sus alrededores, Orkney y Shetland tienen tren, bus o ferri. Lo que se resiente es la densidad: los sitios están dispersos y cada uno exige un bus rural, un tramo a pie o un taxi de 15 libras, así que el ritmo es de un sitio circo por día fuera de las ciudades. Las Hébridas Exteriores y St Kilda son otro viaje.",
  hardWithoutCar: [
    "Scotland's Secret Bunker: bus 95 y 2 km a pie, o taxi desde Anstruther.",
    "St Peter's Seminary: tren a Cardross y 2 km a pie por el bosque.",
    "Yacimientos de Orkney fuera de verano: tour o taxi.",
    "Inchindown y Cruachan: solo en las fechas de visita guiada.",
    "St Kilda, Skye interior y las Hébridas Exteriores: tours o muchos días con ferris.",
  ],
  meta: vol([SCOTRAIL, TRAVELINE, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 30, note: "cama en hostel; 55 € habitación privada barata" },
    { concept: "hotel-mid", eur: 110 },
    { concept: "comida-barata", eur: 12, note: "fish and chips, meal deal de supermercado 5 €" },
    { concept: "restaurante", eur: 30 },
    { concept: "transporte-urbano", eur: 2.3 },
    { concept: "tren-intercity", eur: 25, note: "Edimburgo–Inverness advance; 60 € el mismo día" },
    { concept: "cafe", eur: 3.5 },
    { concept: "supermercado", eur: 10 },
  ],
  tips: [
    "Los billetes de tren 'advance' y el Highland Rover (pase de 4 días en 8) recortan el mayor gasto del viaje.",
    "Los hostels de Edimburgo y Glasgow son buenos y baratos; en las islas, B&B.",
    "Agosto (Fringe) y del 28 de diciembre al 2 de enero: alojamiento a precio de Londres.",
    "Muchos sitios oscuros son gratis: cementerios, Forth Bridge, Glencoe, Clava Cairns, Brodgar.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros; libra ≈ 1,17 €"),
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
    "Edimburgo tiene tranvía del aeropuerto al centro en 30 min; llegar y salir de allí es lo más simple.",
    "Para Up Helly Aa: vuelo a Edimburgo y Loganair a Sumburgh (1 h 15), o el ferri nocturno desde Aberdeen.",
    "Vuelos abiertos: entrar por Edimburgo y salir por Glasgow o Inverness ahorra un día de vuelta.",
  ],
  meta: vol([PROPIO], "Verificar frecuencias estacionales; Glasgow puede no operar en invierno", "media"),
};

export const docs: DocsSection = {
  text:
    "El Reino Unido no está en la UE ni en Schengen: hace falta pasaporte (el DNI no vale) y, desde abril de 2025, la Electronic Travel Authorisation (ETA) para ciudadanos de la UE: se solicita online o en la app UK ETA, cuesta unas 16 libras, se aprueba en horas y vale dos años. Estancias turísticas hasta seis meses sin visado. No se exige seguro, pero la sanidad no es gratuita para visitantes.",
  steps: ["Pasaporte vigente durante toda la estancia", "Solicitar la ETA en la app UK ETA al menos 3 días antes", "Sin registro ni formularios adicionales"],
  links: [GOVUK, MAEC],
  warnings: ["La ETA va ligada al pasaporte: si lo renuevas, hay que pedir otra.", "Sin tarjeta sanitaria europea: lleva seguro de viaje."],
  meta: vol([GOVUK, MAEC], "Requisito ETA vigente desde 2025; comprobar tasa y plazos"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia baja; Glasgow tiene fama antigua que ya no se corresponde con el centro." },
    { key: "robos", level: "bajo", text: "Carteristas ocasionales en la Royal Mile en agosto; nada comparable al sur de Europa." },
    { key: "timos", level: "bajo", text: "Prácticamente inexistentes; precios claros, taxis con taxímetro." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Nivel de alerta británico 'substantial' pero sin incidentes en Escocia en años." },
    { key: "transporte", level: "bajo", text: "Trenes y buses tranquilos; el último tren del viernes en Glasgow puede ser ruidoso." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema en ningún sitio, incluidas instalaciones militares desde el exterior." },
    { key: "noche", level: "medio", text: "Borracheras de fin de semana en los centros; el peligro es de ruido, no de agresión. Cementerios cerrados de noche salvo con tour." },
  ],
  conflictAreas: [],
  soloText:
    "Ideal para ir solo: infraestructura para viajeros individuales (hostels, tours de día, buses), gente charlatana en pubs y cero fricción idiomática. En las islas y las Highlands la única precaución es el tiempo: senderos y ferris cancelados, no personas.",
  meta: vol([MAEC], undefined, "alta"),
};

export const politics: PoliticsSection = {
  text:
    "Nación del Reino Unido con parlamento propio y gobierno nacionalista que aspira a la independencia; el debate es constante pero pacífico y no afecta al viajero. Democracia estable, protestas ocasionales y ordenadas. La única consecuencia práctica del Brexit es la ETA y la ausencia de tarjeta sanitaria europea.",
  watch: ["Huelgas de tren puntuales (ScotRail): comprobar la semana del viaje", "Debate independentista: tema de conversación, no de riesgo"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Todo funciona: Google Maps con horarios en tiempo real, pagos contactless hasta en el bus rural y en la Capilla Italiana, eSIM europea sin coste extra en muchos operadores. La cobertura desaparece en tramos de las Highlands, en Glencoe y en parte de las islas: descargar mapas y horarios de Traveline antes de salir de la ciudad.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "roaming UE incluido en algunos operadores españoles (comprobar)"],
  payments:
    "Tarjeta y contactless en todas partes; el efectivo casi ha desaparecido y algunos sitios no lo aceptan. Los billetes escoceses son válidos en todo el Reino Unido. Cajeros gratuitos en bancos; evitar los de tiendas con comisión.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Inglés en todo, lo que para este perfil es casi tan fácil como el español: todo está escrito, las máquinas y las apps funcionan en inglés claro y nadie espera que hables gaélico. El único obstáculo es el acento, especialmente en Glasgow, en Shetland y en las Highlands rurales: pedir que repitan es normal.",
  machinesText:
    "Máquinas de tren con pantalla en inglés y pago con tarjeta; buses con contactless al subir (no hace falta hablar); señalización en inglés y gaélico en las Highlands e islas. Los tours (Mary King's Close, búnkeres) son guiados en inglés hablado rápido: llevar auriculares de traducción no es mala idea.",
  survivalPhrases: [
    { es: "Un billete de ida a…", local: "A single to…, please" },
    { es: "¿Este bus para en…?", local: "Does this bus stop at…?" },
    { es: "¿Puede repetir, por favor?", local: "Sorry, could you say that again?" },
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
    { month: 8, kind: "cierre", text: "Fringe de Edimburgo: precios y masas; evitar la capital" },
    { month: 9, kind: "temporada", text: "Se vacían las Highlands; colores de otoño desde finales de mes" },
    { month: 10, kind: "festival", text: "Samhuinn Fire Festival (día 31)", festivalId: "sco-samhuinn" },
    { month: 11, kind: "cierre", text: "Cierran Secret Bunker, Staffa y muchos sitios de islas hasta marzo" },
    { month: 12, kind: "festival", text: "Stonehaven Fireballs (día 31, medianoche)", festivalId: "sco-stonehaven-fireballs" },
    { month: 12, kind: "festival", text: "Hogmanay: procesión de antorchas (30) y fiesta callejera (31)", festivalId: "sco-hogmanay" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Festivales de fuego pagano de primer nivel (Up Helly Aa, Beltane, Clavie, Fireballs), varios accesibles sin salir de Edimburgo.",
    "Edimburgo subterráneo y macabro: peste, ladrones de cadáveres, poltergeist y ataúdes en miniatura a cinco minutos a pie unos de otros.",
    "Búnker nuclear, central dentro de una montaña y túneles con eco de dos minutos: infraestructura rara de la Guerra Fría y anterior.",
    "Vuelo directo low-cost en menos de tres horas, en inglés, con tarjeta en todas partes: la logística más fácil de la lista.",
    "Trenes escénicos, buses Citylink y ferris a Orkney y Shetland: se llega a casi todo sin conducir.",
  ],
  cons: [
    "Caro: 130 € al día siendo razonable, y el tren sin 'advance' duele.",
    "Los sitios circo están dispersos: fuera de las ciudades, un sitio por día con bus rural, caminata o taxi.",
    "Clima atlántico: lluvia, viento, ferris cancelados y siete horas de luz en enero.",
    "Nada soviético ni brutalista más allá de St Peter's; el perfil oscuro es histórico y folclórico, no industrial.",
    "Agosto y fin de año: precios de Londres en Edimburgo.",
  ],
  text:
    "Escocia es el destino fácil de la lista, y no por eso menos circo: en cinco días tienes el Edimburgo enterrado, un búnker nuclear y un seminario brutalista en ruinas; en diez añades Glencoe, Inverness y Orkney sin conducir; en catorce, si vas en enero, quemas un drakkar con mil vikingos en Shetland. La duración la marca la dispersión: cada sitio raro fuera de las ciudades cuesta un día y un bus rural. Ve en mayo-junio o septiembre por la luz, o en enero por el fuego, y reserva los trenes antes que el hotel.",
  meta: est([PROPIO]),
};
