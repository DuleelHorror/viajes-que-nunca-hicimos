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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Grecia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Greece", url: "https://www.seat61.com/Greece.htm", kind: "blog" };
const HT: Source = { label: "Hellenic Train", url: "https://www.hellenictrain.gr/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Grecia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Greece", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Grecia tiene poco tren y el poco que tiene está en obras: la línea Atenas–Tesalónica (4-6 al día, ≈ 5 h, 25-35 €) funciona con cortes de semanas, tramos en bus y vía única desde el accidente de Tempi (2023) y la tormenta Daniel; el ramal a Kalambaka (Meteora) sigue cerrado hasta finales de 2026 o 2027 y se hace con tren a Palaiofarsalos y bus de Hellenic Train, o directamente en bus exprés. Lo que sí funciona y es un sitio circo en sí: el cremallera de Diakofto a Kalavryta (1896, 75 cm de ancho, 1 h por el desfiladero), con el Proastiakós de Atenas hasta Kiato o Aigio para llegar. Billetes en la web y app de Hellenic Train en inglés, con descuento por anticipación.",
  corridorsIntro: "Dos corredores: la línea principal a Tesalónica (en obras) y el cremallera de Kalavryta. El resto del país va en KTEL y en ferry.",
  busText:
    "Los KTEL (las cooperativas de buses de cada provincia) son el verdadero ferrocarril griego: puntuales, baratos y a todas partes, desde las estaciones de Kifissos (Peloponeso y norte) y Liosion (Delfos, Meteora, Lavrio) en Atenas; 4 h 30 a Kalambaka, 3 h a Delfos, 2 h 30 a Patras. Billete en la estación o en ktelbus.com. Los ferris desde el Pireo y Rafina llegan a todo (Creta en nocturno de 9 h desde 40 €), y los vuelos internos de Aegean y SKY express cuestan 40-90 €. En Atenas, metro con museos en las estaciones y billete de 90 min a 1,20 €; taxis honestos con taxímetro y FreeNow / Uber (que aquí son taxis).",
  busCompanies: ["KTEL de cada provincia (Kifissos y Liosion en Atenas)", "Hellenic Train (tren y buses de sustitución)", "Minoan, ANEK, Blue Star (ferris)", "FreeNow / Uber (taxis en Atenas y Tesalónica)"],
  apps: [
    { name: "Hellenic Train", use: "billetes de tren y avisos de cortes", url: "https://www.hellenictrain.gr/en/" },
    { name: "KTEL Bus", use: "horarios y billetes de buses interurbanos", url: "https://ktelbus.com" },
    { name: "Ferryhopper", use: "todos los ferris con horarios y billetes", url: "https://www.ferryhopper.com" },
    { name: "Google Maps", use: "funciona con el metro y los buses de Atenas; con los KTEL, regular" },
  ],
  noCarVerdictText:
    "Se puede, pero con más bus que tren: Atenas y Tesalónica se hacen en metro y a pie, Eleusis y Delfos en bus, Kalavryta en tren (el bonito), Meteora en bus hasta que vuelva el tren, y Creta en ferry o avión con KTEL cada hora. Lo que cuesta sin coche son los pueblos de montaña (Distomo, Arkadi con dos buses al día) y las islas-prisión, que no tienen barco. Con coche verías más Peloponeso; sin coche ves los KTEL llenos de abuelas con bolsas, que es Grecia.",
  hardWithoutCar: [
    "Makronisos y Gyaros: sin ferry; barco alquilado o visitas organizadas.",
    "Arkadi: dos o tres buses al día desde Rethymno; o taxi.",
    "Distomo desde Delfos: KTEL escaso; taxi de 20 min.",
    "Los monasterios de Meteora: bus local dos veces al día o andar 4 h; sin drama.",
  ],
  meta: vol([SEAT61, HT, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 28, note: "hostal en Atenas; pensión en Kalambaka o Plaka, 35-45 €" },
    { concept: "hotel-mid", eur: 70 },
    { concept: "comida-barata", eur: 5, note: "gyros pita 3,50-4,50 €; spanakopita 2 €" },
    { concept: "restaurante", eur: 18, note: "taberna con mezedes y vino de la casa" },
    { concept: "transporte-urbano", eur: 1.2 },
    { concept: "tren-intercity", eur: 30, note: "Atenas–Tesalónica; KTEL Atenas–Kalambaka, 30 €; el cremallera, 9,50" },
    { concept: "cafe", eur: 3.5, note: "freddo espresso; el café griego, 2 €" },
    { concept: "supermercado", eur: 9 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar, dentro de lo que es la UE: 60-70 € al día con hostal y tabernas; las islas en agosto, el doble.",
    "Los yacimientos cuestan 6-20 € (la Acrópolis 30 €); los menores de 25 de la UE entran gratis en casi todos, con el DNI.",
    "Aegean y Vueling a diario: desde 85 € por trayecto fuera de verano; los vuelos internos a Creta, 40-90 €.",
    "El ferry nocturno a Creta en butaca (40 €) es una noche de hotel ahorrada.",
    "Grecia es de tarjeta desde 2015 (obligatoria en comercios), pero las tabernas de pueblo y los KTEL siguen queriendo efectivo.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026; islas en verano, aparte"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Atenas", airport: "ATH", airlines: ["Aegean", "Vueling"], lowCost: true, hours: 3.25, weekly: 29 },
    { to: "Heraklion (verano)", airport: "HER", airlines: ["Vueling", "Ryanair"], lowCost: true, hours: 3.5, weekly: 4 },
  ],
  oneStop: [
    { via: "Atenas a Tesalónica o Creta (Aegean, SKY express)", airlines: ["Aegean", "SKY express"], totalHours: 5.5 },
    { via: "Roma o Milán (Ryanair) a Tesalónica", airlines: ["Ryanair"], totalHours: 7 },
  ],
  tips: [
    "A Atenas, Aegean (≈ 15/semana) y Vueling (≈ 14/semana) a diario, 3 h 15; Ryanair solo con escala.",
    "A Heraklion directo en verano con Vueling y Ryanair; a Tesalónica, con escala en Atenas o vía Italia.",
    "Del aeropuerto de Atenas, metro (40 min, 9 €) o bus X95 a Syntagma 24 h (5,50 €).",
    "Grecia encadena con Bulgaria y Macedonia del Norte por bus desde Tesalónica, con Turquía por Alexandroupoli, y con Chipre y Albania por avión y ferry.",
  ],
  meta: vol([PROPIO], "Frecuencias de septiembre de 2026", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Roaming europeo. Nada que tramitar; la tarjeta sanitaria europea vale en la pública (que es floja: seguro para lo privado). En los yacimientos, el DNI te sirve de prueba de edad para el descuento de la UE.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea y seguro de viaje", "Nada más"],
  links: [MAEC],
  warnings: ["Prohibido fotografiar instalaciones militares, incluidas las islas del Egeo oriental con cuarteles: hay condenas por ello.", "Las huelgas de transporte (metro, ferris, tren) se anuncian con dos días: mira apergia.gr."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Baja; Atenas es más segura de lo que parece Omonia de noche." },
    { key: "robos", level: "medio", text: "Carteristas profesionales en el metro de Atenas (línea del aeropuerto, Monastiraki) y en el Pireo: mochila delante." },
    { key: "timos", level: "medio", text: "Bares con «amigas» en Syntagma y Omonia (la cuenta de 500 €): no entres; taxis del aeropuerto sin taxímetro: la tarifa es fija (40 € de día)." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna; Exarchia es okupa y con antidisturbios, no peligrosa; los días de manifestación (17 de noviembre, 6 de diciembre) el centro se cierra." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; grupos anarquistas locales con bombas pequeñas contra bancos y ministerios, sin turistas." },
    { key: "transporte", level: "medio", text: "El tren tras Tempi es más seguro de lo que dicen los titulares, y va lento por eso; los KTEL, bien; las motos de alquiler en las islas, lo que mata." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema salvo lo militar; en los monasterios, sin fotos dentro." },
    { key: "noche", level: "bajo", text: "Atenas de noche, viva y segura; Omonia y la zona de la estación de Larissa, con cuidado." },
  ],
  conflictAreas: [],
  soloText:
    "Fácil para ir solo: hostales buenos, inglés en todo lo turístico y en los jóvenes, comer solo en taberna es normal y los griegos te preguntan de dónde eres y te sacan un ouzo. Mujeres solas: sin problemas específicos más allá del piropo. Lo que cansa es el calor de verano y la hora griega.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE con mayoría conservadora (Nueva Democracia, Mitsotakis) desde 2019, salida de la crisis de la deuda y con la memoria de Tempi (57 muertos en 2023, y la investigación que destapó el estado del ferrocarril) como herida abierta que llenó las calles en 2025. Tensión permanente con Turquía por el Egeo y con la migración en las islas; la dictadura de 1967-74 sigue siendo una fecha viva (el 17 de noviembre). Para el que viaja: tranquilo, con huelgas anunciadas y manifestaciones en Syntagma.",
  watch: ["Huelgas de transporte, anunciadas con días (apergia.gr)", "El estado del tren tras Tempi: cortes y obras cambian cada mes", "17 de noviembre y 6 de diciembre: manifestaciones y el centro de Atenas cerrado"],
  avoid: ["Llamar «Macedonia» a secas al país de al lado delante de un griego del norte"],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "UE: roaming europeo y ya. Tarjeta en todo (obligatoria por ley en comercios desde 2015; el POS es más fiable que el ferry), efectivo para tabernas de pueblo, KTEL y monasterios. Google Maps funciona con el metro y los buses de Atenas; para los KTEL y los ferris, ktelbus.com y Ferryhopper. Wifi en cada café.",
  blocked: [],
  esimProviders: ["Roaming UE", "Airalo (si vienes de fuera)", "SIM de Cosmote o Vodafone (10 €)"],
  payments:
    "Tarjeta en casi todo; efectivo (euros) en tabernas de pueblo, KTEL, monasterios y barcas de Spinalonga. Cajeros de bancos griegos sin comisión de sorpresa; los amarillos (Euronet), con ella.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Griego, con alfabeto propio que se aprende en un vuelo (la mitad de las letras las usaste en matemáticas) y que sirve para leer estaciones y nombres. Inglés bueno en Atenas, Tesalónica, las islas y los menores de 50; en los pueblos, señas y sonrisas. Los carteles del metro, el tren y los yacimientos, bilingües. Un «kaliméra» y un «efjaristó» valen más que en ningún sitio del radar.",
  machinesText:
    "Máquinas del metro, del tren y de los ferris en inglés; los KTEL, con taquilla y conductor que entiende «Delfi». Menús en inglés en todo lo turístico.",
  survivalPhrases: [
    { es: "Buenos días", local: "Καλημέρα", latin: "kaliméra" },
    { es: "Gracias", local: "Ευχαριστώ", latin: "efjaristó" },
    { es: "¿Cuánto cuesta?", local: "Πόσο κάνει;", latin: "póso káni" },
    { es: "Estación de tren", local: "Σιδηροδρομικός σταθμός", latin: "sidirodromikós stathmós" },
    { es: "Un billete a Kalambaka, por favor", local: "Ένα εισιτήριο για Καλαμπάκα, παρακαλώ", latin: "éna isitírio ya Kalambáka, parakaló" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festivo", text: "Epifanía el 6: los curas tiran una cruz al mar y los chavales se tiran a por ella; carnaval de Patras empezando" },
    { month: 2, kind: "festival", text: "Carnaval de Patras hasta el Lunes Limpio; cometas y ayuno", festivalId: "gr-carnaval-patras" },
    { month: 3, kind: "temporada", text: "Primavera en el Peloponeso y Creta: flores, 18 grados, yacimientos vacíos; el 25, desfile militar" },
    { month: 4, kind: "festival", text: "Pascua ortodoxa (cambia): cohetes en Chios, cordero, huevos rojos y fuegos en cada iglesia", festivalId: "gr-chios-guerra-cohetes" },
    { month: 5, kind: "festival", text: "Anastenaria del 21 al 23 en Langadas: brasas y trance", festivalId: "gr-anastenaria" },
    { month: 6, kind: "temporada", text: "Calor empezando; ferris de verano en marcha; Spinalonga con barcos cada media hora" },
    { month: 7, kind: "festival", text: "Epidauro los fines de semana; Atenas a 38 y vacía de atenienses", festivalId: "gr-epidauro" },
    { month: 8, kind: "clima", text: "40 °C en Atenas y las islas llenas; el 15, el país entero cerrado y en la playa" },
    { month: 9, kind: "temporada", text: "El mes redondo: mar caliente, 28 grados, precios bajando" },
    { month: 10, kind: "temporada", text: "Otoño en Meteora y Delfos, sin nadie; Creta todavía en verano" },
    { month: 11, kind: "temporada", text: "El 17, la marcha del Politécnico; lluvia en Atenas; Spinalonga con barcos a demanda" },
    { month: 12, kind: "clima", text: "Navidad con barcos iluminados en vez de árboles; el 13, aniversario de Kalavryta con nieve" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Las celdas de tortura de los Coroneles en un parque, gratis y sin nadie; la verja del Politécnico en el suelo.",
    "Un cremallera de 1896 por un desfiladero hasta un pueblo con el reloj parado en la hora de una masacre.",
    "Spinalonga: la leprosería con cine y bodas en una fortaleza a cinco minutos de barca.",
    "Eleusis entre refinerías, Meteora, Delfos, 7.000 cráneos serbios en Tesalónica y una guerra de cohetes en Pascua.",
    "DNI, euro, roaming, Aegean y Vueling a diario, alfabeto de un vuelo y KTEL puntuales.",
    "Comer bien y barato en cualquier taberna.",
  ],
  cons: [
    "Poco tren y en obras: Meteora en bus, Tesalónica con cortes, y todo lo demás en KTEL.",
    "Las islas-prisión no tienen barco: se cuentan, no se visitan.",
    "Turístico y caro donde lo conocen todos (Acrópolis 30 €, islas en agosto).",
    "Verano de 40 °C en Atenas.",
    "Carteristas en el metro y bares de timo en Syntagma.",
  ],
  text:
    "Grecia es el país del radar que todo el mundo cree conocer y que esconde con elegancia su siglo XX: una dictadura con celdas en un parque, un pueblo con el reloj parado, islas-gulag sin barco y una leprosería con cine. Doce días dan para Atenas sin Acrópolis (o con ella), el cremallera a Kalavryta, Delfos y Meteora en KTEL, Tesalónica con sus cráneos serbios y Creta con Spinalonga y el palacio de hormigón de Knossos. Seis, para la Atenas de la Junta y el cremallera. Dieciséis, para la Pascua de los cohetes en Chios o los anastenarides de mayo. Ve en abril-mayo o en septiembre-octubre, mira hellenictrain.gr la semana antes, y deja que las abuelas del KTEL te den de comer.",
  meta: est([PROPIO]),
};
