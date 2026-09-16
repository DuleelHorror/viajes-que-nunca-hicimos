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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Albania", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Albania", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Albania", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Albania no tiene trenes. Los tuvo (una red comunista de vagones italianos de segunda mano a 30 km/h que era una atracción en sí misma) y los dejó morir; la línea Tirana–Durrës–aeropuerto se está reconstruyendo con dinero europeo y, con suerte, circulará a finales de 2027. La estación de Tirana la demolieron en 2013 para hacer un bulevar. Es el único país del radar con cero kilómetros de tren útil, y se dice de entrada.",
  corridorsIntro: "Ningún corredor. Todo lo que ves en el mapa son furgones.",
  busText:
    "El transporte es el furgón (furgon): minibuses de 15 plazas que salen de una terminal de tierra a las afueras de cada ciudad cuando se llenan, entre las 6 y las 15, con el destino en el parabrisas y el precio (3-8 €) pagado al conductor. Tirana tiene una terminal norte-sur en la carretera de Durrës, a 20 minutos del centro en bus urbano. Hay buses grandes en las rutas principales (Tirana–Shkodër, Tirana–Gjirokastër–Sarandë) con horarios más o menos fijos. Los hostales saben la hora real de todo y venden el combinado del Koman. Es lento, caótico y funciona.",
  busCompanies: ["Furgones desde las terminales de cada ciudad", "Buses de línea Tirana–Sarandë por Gjirokastër", "Minibús + ferry del Koman (vía hostales de Shkodër)", "Barcos de Vlorë a Sazan (verano)"],
  apps: [
    { name: "Gjirafa Travel", use: "el único intento de horarios de buses albaneses; orientativo", url: "https://travel.gjirafa.com" },
    { name: "Google Maps", use: "para andar; de furgones no sabe nada" },
    { name: "Google Translate", use: "albanés con cámara; en latino y con muchos italianos que lo hablan" },
    { name: "WhatsApp", use: "los hostales confirman furgones, barcos y taxis por aquí" },
  ],
  noCarVerdictText:
    "Se puede, sin trenes y con paciencia: las ciudades (Tirana, Shkodër, Berat, Gjirokastër, Vlorë, Durrës) van en furgón entre sí, Bunk'Art 1 tiene bus urbano, el Koman es un paquete de hostal, Porto Palermo es bajarse del bus de la costa y Sazan es un barco de verano. Lo que se cae sin coche es Spaç (pista de montaña; solo tour), los Alpes por libre y los pueblos del sur profundo. Con coche verías más búnkeres; sin coche ves los mismos desde la ventanilla y no discutes con nadie por un arañazo, que en Albania es deporte nacional.",
  hardWithoutCar: [
    "Spaç: pista de dos horas desde Rrëshen; solo todoterreno o tour.",
    "Los furgones acaban a media tarde: llegar a un sitio a las 17:00 sin dormir allí es no llegar.",
    "Sazan: solo barcos de verano, y solo si la Marina y el resort lo permiten.",
    "Los Alpes (Theth, Valbona): furgones de temporada y horario único; fuera de junio-septiembre, difícil.",
  ],
  meta: vol([PROPIO], "Sin trenes hasta 2027 como pronto"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 14, note: "hostal en Tirana o Shkodër; guesthouse en Gjirokastër, 25 €" },
    { concept: "hotel-mid", eur: 45 },
    { concept: "comida-barata", eur: 4, note: "byrek de 1 €; tavë kosi o qofte en un local, 4-5 €" },
    { concept: "restaurante", eur: 12, note: "pescado en la costa, 15-20 €" },
    { concept: "transporte-urbano", eur: 0.4 },
    { concept: "tren-intercity", eur: 5, note: "no hay tren: es el furgón medio entre ciudades" },
    { concept: "cafe", eur: 1, note: "el país con más cafés por habitante del mundo; a 1 €" },
    { concept: "supermercado", eur: 7 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 40 € al día con furgones, museos y raki.",
    "Lek: 100 por euro, redondo. Los precios se dicen a veces en «lek viejos» (con un cero más): 5.000 lek viejos son 500 lek, 5 €. No te asustes ni pagues de más.",
    "Euros en efectivo se aceptan en toda la costa y en muchos hostales; los cajeros cobran 5-7 € por retirada, saca de golpe.",
    "Wizz y Ryanair a Tirana desde 20 € por trayecto fuera de temporada; el aeropuerto nuevo de Vlorë abre alternativa por el sur.",
    "Sazan (25 €) y el tour de Spaç (80-120 €) son los gastos; los museos de Tirana, 5 € cada uno.",
  ],
  meta: vol([NUMBEO, PROPIO], "Lek a ≈ 100 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Tirana", airport: "TIA", airlines: ["Wizz Air", "Ryanair"], lowCost: true, hours: 2.5, weekly: 10 },
  ],
  oneStop: [
    { via: "Roma o Milán", airlines: ["ITA Airways", "Wizz Air"], totalHours: 5 },
    { via: "Corfú (Vueling/Ryanair) y ferry a Sarandë", airlines: ["Vueling", "Ryanair"], totalHours: 6 },
  ],
  tips: [
    "Directo y low-cost a Tirana casi a diario; el bus del aeropuerto al centro sale cada hora (4 €, 30 min).",
    "Entrar por Tirana y salir por Corfú (ferry de 30 min desde Sarandë, y Vueling a BCN) cierra el sur sin volver.",
    "Vlorë tiene aeropuerto nuevo desde 2025 con pocas rutas: mirar por si Wizz abre BCN.",
    "Tirana encadena con Skopje, Pristina y Podgorica en bus: la ficha se combina con Macedonia y Kosovo cuando existan.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026; Ryanair y Wizz cambian por temporada"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale hasta 90 días: Albania no es UE pero admite el DNI español, y en el aeropuerto pasas con él. Pasaporte recomendable para las fronteras terrestres (Montenegro, Macedonia, Kosovo, Grecia) y para el ferry a Corfú (Grecia sí es UE: DNI vale también). Nada que tramitar, sin registro, sin roaming.",
  steps: ["DNI en vigor (pasaporte si cruzas fronteras terrestres)", "Nada que tramitar", "Seguro de viaje: fuera de la UE"],
  links: [MAEC],
  warnings: ["Sin roaming europeo: SIM local o eSIM.", "Drones: prohibidos sin permiso, y en Sazan y las bases, ni pensarlo."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común muy baja para el turista; el crimen organizado albanés exporta y no molesta en casa." },
    { key: "robos", level: "bajo", text: "Rarísimos. Es de los países más seguros del radar para las cosas." },
    { key: "timos", level: "medio", text: "Taxis sin taxímetro (pacta antes), el truco de los «lek viejos» y algún furgón que cobra el doble al extranjero. Poca cosa." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. La venganza de sangre del Kanun existe en el norte, pero no incluye turistas." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "alto", text: "La conducción albanesa es la peor de Europa con diferencia: adelantamientos en curva, furgones a 120 y carreteras de montaña sin quitamiedos. Es el riesgo real del país, y otro motivo para no conducir tú." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en Sazan, Porto Palermo y cualquier base, pregunta al soldado." },
    { key: "noche", level: "bajo", text: "Tirana de noche es Blloku con cafés hasta las dos; tranquilo." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo, con la hospitalidad albanesa (besa) que obliga al anfitrión a protegerte: te invitan a raki, te llevan en coche, te dan de comer. Los hostales de Tirana y Shkodër son el punto de encuentro para compartir Koman, Spaç y barcos. Mujeres solas: sin problemas específicos; en el norte rural, ropa discreta. Lo que cansa son los furgones y la conducción.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria con Edi Rama (pintor, ex alcalde de Tirana, primer ministro desde 2013) en su cuarto mandato tras las elecciones de 2025, negociando la entrada en la UE para 2030, con corrupción de fondo, una diáspora que es un tercio del país y un boom de turismo y construcción que lo cambia todo cada año. Estable, prooccidental, en la OTAN desde 2009 y sin ningún efecto sobre el viajero salvo las grúas.",
  watch: ["El boom inmobiliario: Sazan, la Riviera y Tirana cambian de temporada en temporada", "El microestado bektashi prometido en Tirana: si se hace, será la rareza del año", "Kosovo: relación fraterna; sin tensión que se note"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Fuera de la UE: sin roaming. SIM de Vodafone o One en el aeropuerto o en cualquier tienda por 10 € con 20-50 GB, o eSIM. Cobertura buena en ciudades y costa, nula en el Koman y los Alpes. Google Maps sirve para andar y para nada más; los furgones se preguntan. Tarjeta en Tirana y hoteles; euros y lek en efectivo para todo lo demás.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Vodafone / One (10 €, con DNI)"],
  payments:
    "Efectivo manda: furgones, museos, byrek, taxis, guesthouses. Tarjeta en hoteles, restaurantes de Tirana y Blloku y supermercados grandes. Los cajeros cobran comisión fija de 5-7 €: retira mucho de una vez. Euros aceptados en la costa.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Albanés, una lengua indoeuropea sin parientes, en alfabeto latino con letras raras (ë, ç, xh). No se entiende nada, pero se lee. Italiano lo habla medio país (por la tele de los ochenta y la emigración); inglés, los jóvenes y todos los hostales; griego, en el sur. Entre el italiano y el inglés, se va perfectamente. Y el gesto de la cabeza: aquí también «sí» es mover la cabeza a los lados, como en Bulgaria.",
  machinesText:
    "No hay máquinas: los furgones se pagan al conductor, los museos en ventanilla, los buses urbanos al cobrador que pasa. Menús en inglés en lo turístico e italiano en todas partes.",
  survivalPhrases: [
    { es: "Hola", local: "Përshëndetje / Tungjatjeta", latin: "pershendétye / tunyatyéta" },
    { es: "Gracias", local: "Faleminderit", latin: "faleminderít" },
    { es: "¿Cuánto cuesta?", local: "Sa kushton?", latin: "sa kushtón" },
    { es: "¿De dónde sale el furgón a ...?", local: "Ku niset furgoni për ...?", latin: "ku níset furgóni per ..." },
    { es: "Pare aquí, por favor", local: "Ndalo këtu, ju lutem", latin: "ndálo ketú, yu lútem" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "Lluvia en la costa y nieve en el norte; Tirana a 10 °C y todo abierto" },
    { month: 2, kind: "clima", text: "Sigue la lluvia; el Koman con un solo ferry al día" },
    { month: 3, kind: "festival", text: "Dita e Verës el 14 en Elbasan y Nevruz bektashi el 22 en Tirana: dos fiestas nacionales", festivalId: "al-dita-e-veres" },
    { month: 3, kind: "festival", text: "Nevruz en la sede bektashi", festivalId: "al-nevruz-bektashi" },
    { month: 4, kind: "temporada", text: "Primavera; empiezan los furgones a los Alpes y el ferry del Koman va lleno de mochileros" },
    { month: 5, kind: "temporada", text: "Mes redondo para el interior: Gjirokastër, Berat y Shkodër a 25 grados" },
    { month: 6, kind: "festival", text: "Kala Festival en Dhërmi, la primera semana", festivalId: "al-kala-festival" },
    { month: 6, kind: "temporada", text: "Empiezan los barcos a Sazan; la Riviera aún sin masas" },
    { month: 7, kind: "clima", text: "35-40 °C en Tirana y el interior; la costa, llena de italianos y kosovares" },
    { month: 8, kind: "festival", text: "Logu i Bjeshkëve en Kelmend, segundo domingo: el concurso de las montañas", festivalId: "al-logu-i-bjeshkeve" },
    { month: 8, kind: "clima", text: "El mes de la diáspora: todo lleno, precios dobles en la costa" },
    { month: 9, kind: "temporada", text: "El mejor mes: Sazan aún abierta, la Riviera vacía, 28 grados" },
    { month: 10, kind: "temporada", text: "Otoño; cierran los barcos y los furgones de los Alpes; el resto, perfecto" },
    { month: 11, kind: "clima", text: "Lluvia; Tirana y sus búnkeres, sin nadie" },
    { month: 12, kind: "clima", text: "Suave en la costa, frío en Shkodër; mercadillo en Tirana" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "La dictadura más paranoica de Europa, contada en tres búnkeres-museo, la casa de las escuchas y 173.000 setas de hormigón.",
    "Una isla militar entera abandonada y un túnel de submarinos en una cala.",
    "El ferry del Koman: un fiordo comunista en transporte público.",
    "DNI, directo low-cost, 40 € al día y la hospitalidad más seria de los Balcanes.",
    "Italiano e inglés por todas partes, alfabeto latino.",
    "Gjirokastër: la cuna del dictador con búnker, cárcel y avión capturado.",
  ],
  cons: [
    "Cero trenes. Todo furgón, sin horarios, hasta media tarde.",
    "La conducción es un peligro real, también como pasajero.",
    "Sin roaming, sin euro y con cajeros que cobran 5-7 €.",
    "Spaç y los Alpes quedan fuera sin tour.",
    "El boom turístico está cambiando la costa cada año: Sazan puede cerrarse.",
    "En agosto, la diáspora llena el país y dobla los precios.",
  ],
  text:
    "Albania es el país del radar donde la paranoia se fundió en hormigón y se visita en furgón. Doce días dan para Tirana con sus dos búnkeres-museo, la Casa de las Hojas y la pirámide-tobogán, Shkodër con las celdas de la Sigurimi y el fiordo del Koman, Berat de descanso, la cuna de Hoxha en Gjirokastër con su túnel y su avión, y Vlorë para el barco a la isla de los 3.600 búnkeres pasando por el túnel de submarinos de la costa. Seis, para Tirana y el norte. Quince, para añadir el gulag de Spaç en tour y la Riviera con calma. Ve en septiembre (Sazan abierta, costa vacía), lleva euros en efectivo, pregunta en el hostal a qué hora sale de verdad el furgón y siéntate detrás.",
  meta: est([PROPIO]),
};
