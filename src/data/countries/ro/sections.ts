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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Rumania", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Romania", url: "https://www.seat61.com/Romania.htm", kind: "blog" };
const CFR: Source = { label: "CFR Călători", url: "https://www.cfrcalatori.ro/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Rumanía", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Romania", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Rumanía tiene la red ferroviaria más extensa del Este después de Polonia, y la más lenta: los trenes van a 60 de media por vías que no se tocan desde Ceaușescu, con paradas en cada pueblo, y por eso son el mejor sitio para ver el país. Bucarest–Brașov son 2 h 30; a Cluj, 7 h de día o 10 de noche en litera por 25 €; a Sighet, en Maramureș, un día entero. Los nocturnos (Cluj, Timișoara, Iași, Sighet) son la joya: literas limpias, revisor con estufa y desayuno en la estación. Se compra en cfrcalatori.ro con tarjeta y en inglés, o en taquilla, y nunca se agota nada salvo en Navidad.",
  corridorsIntro: "Seis corredores: el nocturno de Transilvania como columna, y ramales al delta, a Maramureș y al Banat.",
  busText:
    "Donde el tren no llega o tarda un siglo, hay microbuses (maxi-taxi): a Bran desde Brașov cada media hora, a Săpânța desde Sighet, a Turda desde Cluj, y por todo el campo con horarios de boca a boca. Se pagan al conductor en efectivo. Para la Transfăgărășan existe un bus turístico desde Sibiu en verano, el Bâlea Bus, y para el delta, el ferry público Navrom desde Tulcea. Bolt funciona en todas las ciudades por 2-4 €.",
  busCompanies: ["Microbuses locales (Autogara de cada ciudad)", "Bâlea Bus (Sibiu–Transfăgărășan, verano)", "Navrom (ferries del delta desde Tulcea)", "Bolt"],
  apps: [
    { name: "CFR Călători", use: "billetes de tren con tarjeta, en inglés; también la app", url: "https://www.cfrcalatori.ro/en/" },
    { name: "Mersul Trenurilor (InfoFer)", use: "horarios en tiempo real con retrasos, que los hay", url: "https://mersultrenurilor.infofer.ro/en-GB/" },
    { name: "Bolt", use: "taxi con precio cerrado en todas las ciudades" },
    { name: "Autogari.ro", use: "horarios de microbuses interurbanos, con margen de error", url: "https://www.autogari.ro" },
    { name: "Google Maps", use: "funciona bien con trenes y transporte urbano" },
  ],
  noCarVerdictText:
    "Se puede, y mejor que con coche si te gusta el tren lento: todas las bases (Bucarest, Brașov, Sibiu, Cluj, Timișoara, Sighet, Tulcea, Hunedoara) tienen estación y las excursiones oscuras (Săpânța, Turda, Bran, Hunedoara) tienen microbús o cercanías. Lo que se complica es lo de montaña: la Transfăgărășan depende de un bus de verano, los monasterios pintados de Bucovina y los pueblos de madera de Maramureș exigen paciencia o taxi con espera. Los rumanos conducen como si les persiguieran, así que no conducir también es una decisión de seguridad.",
  hardWithoutCar: [
    "La Transfăgărășan fuera de julio-octubre: cerrada o sin bus; tour o taxi.",
    "Los pueblos de madera de Maramureș (Breb, Bârsana, Ieud): microbuses escasos; taxi con espera desde Sighet.",
    "Los monasterios de Bucovina: bus a Gura Humorului y taxi entre monasterios.",
    "El delta más allá de Sulina: barca contratada.",
  ],
  meta: vol([SEAT61, CFR, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 18, note: "hostal en Bucarest o Cluj; pensión en Sighet, 25 € con desayuno" },
    { concept: "hotel-mid", eur: 50 },
    { concept: "comida-barata", eur: 5, note: "ciorbă y sarmale en un local de barrio; covrigi de 0,50 €" },
    { concept: "restaurante", eur: 15, note: "con vino y palinca" },
    { concept: "transporte-urbano", eur: 0.6 },
    { concept: "tren-intercity", eur: 12, note: "Bucarest–Brașov en segunda; nocturno en litera, 25 €" },
    { concept: "cafe", eur: 2 },
    { concept: "supermercado", eur: 8 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 50 € al día con trenes incluidos, y los nocturnos ahorran hotel.",
    "Rumanía sigue con el leu (no el euro): paga con tarjeta en todo lo urbano y saca lei en cajeros de bancos, nunca en los Euronet de la calle.",
    "Los vuelos low-cost desde BCN a Bucarest, Cluj y Timișoara son de los más baratos del radar: 30-80 € por trayecto fuera de temporada.",
    "Las entradas gordas son la Casa del Pueblo (10 €) y Bran (14 €); lo raro (Săpânța, Sighet, Brâncuși) vale 2-3 € o nada.",
    "En los microbuses se paga en efectivo al conductor y no hay billete: lleva monedas.",
  ],
  meta: vol([NUMBEO, PROPIO], "Leu a ≈ 5 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Bucarest", airport: "OTP", airlines: ["Ryanair", "Wizz Air", "Vueling"], lowCost: true, hours: 3.3, weekly: 20 },
    { to: "Cluj-Napoca", airport: "CLJ", airlines: ["Wizz Air"], lowCost: true, hours: 3.1, weekly: 4 },
    { to: "Timișoara", airport: "TSR", airlines: ["Wizz Air"], lowCost: true, hours: 3, weekly: 3 },
  ],
  oneStop: [
    { via: "Múnich o Viena", airlines: ["Lufthansa", "Austrian"], totalHours: 6 },
  ],
  tips: [
    "Tres destinos directos y low-cost: entrar por Bucarest y salir por Cluj o Timișoara evita volver sobre tus pasos.",
    "Wizz mueve los horarios de Cluj y Timișoara por temporada: mira la semana concreta antes de montar la ruta.",
    "Del aeropuerto de Bucarest hay tren al centro (Gara de Nord) en 20 minutos y bus 783; Bolt, 10 €.",
  ],
  meta: vol([PROPIO], "Frecuencias de 2026; Wizz cambia rutas cada temporada"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: Rumanía es de la UE y desde el 1 de enero de 2025 está en Schengen del todo, sin control en fronteras terrestres ni aéreas. La única burocracia de este viaje es que la Casa del Pueblo pide documento de identidad para entrar y a veces solo acepta pasaporte: llévalo.",
  steps: ["DNI en vigor (pasaporte recomendable para la Casa del Pueblo)", "Nada que tramitar", "Tarjeta sanitaria europea"],
  links: [MAEC],
  warnings: ["Si sigues a Moldavia en el tren Prietenia, ahí sí hay control (Moldavia no es UE) y el DNI vale, pero el pasaporte da menos problemas."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia violenta baja; el estereotipo es injusto." },
    { key: "robos", level: "medio", text: "Carteristas en Gara de Nord, el metro de Bucarest y los trenes nocturnos (cierra el compartimento). Nada que no pase en Barcelona." },
    { key: "timos", level: "medio", text: "Taxis de Gara de Nord y del aeropuerto que cobran cinco veces: Bolt siempre. Cajeros Euronet con comisión del 15 %: bancos." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. La frontera con Ucrania en Sighet es un puente con la ciudad de enfrente tranquila." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Los trenes son seguros; la carretera es el peligro: Rumanía lidera Europa en muertos por habitante. Otro motivo para no conducir." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema, salvo en la Casa del Pueblo (solo con permiso) y en la frontera de Sighet." },
    { key: "noche", level: "bajo", text: "Bucarest y Cluj de noche, sin problema; perros callejeros cada vez menos." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo: los rumanos son latinos, hablan alguna lengua romance por naturaleza (te entienden el español a medias) y los trenes son un sitio de conversación. Mujeres solas: como en el sur de Europa, sin nada específico. Lo único que puede cansar es el ritmo de los trenes y los perros de los pueblos, que ladran mucho y muerden poco.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República semipresidencialista de la UE y la OTAN, con una política caótica pero democrática: en 2024 el Constitucional anuló unas presidenciales por injerencia rusa en TikTok, en 2025 las repitieron y ganó un europeísta (Nicușor Dan) frente a un ultra. Corrupción de fondo, protestas grandes cuando toca (2017, 2025) y una diáspora de cuatro millones. Para el que viaja, cero problema; para el que quiera entenderla, mucho.",
  watch: ["El eco de la guerra de Ucrania en la frontera norte (Sighet, el delta): tranquilo, pero con militares y drones caídos alguna vez", "Manifestaciones en la plaza Victoriei de Bucarest, pacíficas", "Navidad y Semana Santa ortodoxa: trenes llenos"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Internet de fibra en cada pueblo (Rumanía tiene de las mejores velocidades de Europa) y roaming europeo con tu tarifa española: sin nada que preparar. Google Maps sabe de trenes y de tranvías, Bolt funciona en las ciudades, y CFR vende online. Tarjeta en casi todo lo urbano; efectivo para microbuses, mercados, monasterios y pensiones de pueblo.",
  blocked: [],
  esimProviders: ["No hace falta: roaming UE con tu tarifa"],
  payments:
    "Tarjeta y contactless en ciudades, trenes online, supermercados y restaurantes; efectivo (lei) en microbuses, taxis de pueblo, cementerio de Săpânța y pensiones rurales. Cajeros de bancos (BCR, BRD, Banca Transilvania) sin comisión de sorpresa.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Rumano, la lengua romance que se quedó sola entre eslavos: con el español y un poco de oído se lee casi todo (gară, bilet, ieșire) y se pilla la mitad de lo que dicen. Los jóvenes hablan inglés bien; los mayores, francés o italiano (media Rumanía ha trabajado en Italia o España, y te vas a encontrar a gente que te contesta en castellano). Es el país del radar con menos barrera de idioma después de Italia.",
  machinesText:
    "Máquinas de metro y de tren en inglés; la web de CFR, en inglés; los microbuses, con el conductor. El menú se lee sin traductor.",
  survivalPhrases: [
    { es: "Hola", local: "Bună ziua", latin: "buna ziua" },
    { es: "Gracias", local: "Mulțumesc", latin: "multsumesc" },
    { es: "¿Cuánto cuesta?", local: "Cât costă?", latin: "cat costa" },
    { es: "Estación de tren", local: "Gară", latin: "gara" },
    { es: "Un billete a ..., por favor", local: "Un bilet la ..., vă rog", latin: "un bilet la ..., va rog" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−10 °C en Transilvania y Maramureș, con nieve de verdad; Bucarest, gris" },
    { month: 2, kind: "clima", text: "Sigue el invierno; la mina de sal de Turda está a 12 °C todo el año, por si acaso" },
    { month: 3, kind: "festival", text: "Mărțișor el día 1: cordones rojos y blancos en cada solapa", festivalId: "ro-martisor" },
    { month: 4, kind: "festivo", text: "Semana Santa ortodoxa (fecha variable, a veces en mayo): trenes llenos y pueblos de fiesta" },
    { month: 5, kind: "temporada", text: "Verde en los Cárpatos y los pelícanos llegando al delta; la Transfăgărășan aún cerrada" },
    { month: 6, kind: "festival", text: "Sânziene la noche del 23: coronas, hogueras y hadas en Maramureș", festivalId: "ro-sanziene" },
    { month: 7, kind: "temporada", text: "Abre la Transfăgărășan (a partir del 1 de julio) y arranca el Bâlea Bus desde Sibiu" },
    { month: 7, kind: "festival", text: "Festival Medieval de Sighișoara, último fin de semana", festivalId: "ro-sighisoara-medieval" },
    { month: 8, kind: "festival", text: "Untold en Cluj el primer fin de semana: la ciudad, tomada", festivalId: "ro-untold" },
    { month: 8, kind: "clima", text: "35 °C en Bucarest y el delta con mosquitos; las montañas, perfectas" },
    { month: 9, kind: "temporada", text: "El mes redondo: todo abierto, sin calor, uva y palinca nueva" },
    { month: 10, kind: "temporada", text: "Otoño de colores en Maramureș; la Transfăgărășan cierra a final de mes con la primera nieve" },
    { month: 11, kind: "clima", text: "Gris, lluvia y los primeros fríos; buen mes para Bucarest y los museos" },
    { month: 12, kind: "festivo", text: "Navidad ortodoxa el 25 (Rumanía va con el calendario nuevo) y mercadillos en Sibiu y Cluj" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Con el DNI, low-cost directo y roaming: el país más fácil del radar para llegar y el más barato de la UE para estar.",
    "Trenes lentos y nocturnos por todo el país, con estación en todas las bases.",
    "Historia oscura de las gordas: la Casa del Pueblo, el chalé de Ceaușescu, la cárcel de Sighet, la revolución de Timișoara.",
    "WTF de primera: la noria en la mina de sal, el cementerio que se ríe de la muerte, la carretera de la paranoia.",
    "Idioma romance: se lee y se entiende a medias sin traductor.",
    "Sin turismo masivo fuera de Bran y Brașov.",
  ],
  cons: [
    "Los trenes son lentos de verdad: siete horas para 400 km. Hay que quererlos.",
    "La Transfăgărășan y la montaña dependen de un bus de verano o de tours.",
    "Maramureș y el delta están en las puntas del país: ida y vuelta de un día entero cada uno.",
    "Menos brutalismo soviético del que uno espera: Rumanía demolió y reconstruyó a lo suyo.",
    "Los taxis de estación y los cajeros de la calle son un timo permanente.",
  ],
  text:
    "Rumanía es el país del radar donde menos se sufre y más se ve por euro: DNI, Ryanair y trenes de 25 € con litera. Catorce días dan para Bucarest con su megalomanía, el nocturno a Transilvania, la Transfăgărășan en el bus de Sibiu, el castillo gótico con acería muerta, la noria en la mina de sal y el tren lento a Maramureș para el cementerio que se ríe y la cárcel que no. Dieciocho, para añadir el delta hasta el puerto fantasma de Sulina y la Columna sin Fin. Siete, para Bucarest y Cluj con el nocturno. Ve en septiembre (todo abierto, sin calor) o en junio por las hadas, entra por Bucarest y sal por Cluj, y no cojas un taxi en la vida: Bolt.",
  meta: est([PROPIO]),
};
