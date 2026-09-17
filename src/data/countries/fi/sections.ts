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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Finlandia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Finland", url: "https://www.seat61.com/Finland.htm", kind: "blog" };
const VR: Source = { label: "VR", url: "https://www.vr.fi/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Finlandia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Finland", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "VR es de los mejores trenes de Europa y el único transporte que merece la pena en el país: Pendolinos e IC de dos pisos a Tampere (1 h 30), Turku (2 h), Lappeenranta (2 h) y Oulu (6 h), y el Santa Claus Express, el nocturno a Rovaniemi con cabinas con ducha, que es un sitio circo en sí. Precios dinámicos: Helsinki–Tampere desde 6,90 € con semanas y 30 € el día antes; la cabina del nocturno desde 49-89 € por persona, y en Navidad se agota con medio año. Todo en la app VR Matkalla en inglés, con asiento asignado. A San Petersburgo ya no va nada: el Allegro se paró en 2022 y la frontera está cerrada.",
  corridorsIntro: "Cinco corredores desde Helsinki: el nocturno a Laponia (con Oulu y Kemi), Tampere, Turku (Paimio), Hanko y Lappeenranta.",
  busText:
    "Los buses (Matkahuolto, OnniBus) sirven para lo que el tren no llega: Paimio desde Turku (bus urbano 7), Lappohja desde Hanko (1-2 al día), Miehikkälä desde Hamina (rural, sin verificar) y Sonkajärvi desde Iisalmi. OnniBus es la low-cost entre ciudades (Helsinki–Tampere desde 5 €). En Helsinki, la tarjeta HSL (AB 3,30 €, día 9 €) cubre metro, tranvías, buses y el ferry a Suomenlinna; en Rovaniemi, el bus 8 a Santa y al aeropuerto. Taxis carísimos (Uber y Bolt en Helsinki, algo menos).",
  busCompanies: ["VR (trenes, incluido el nocturno)", "HSL (Helsinki, con el ferry)", "Matkahuolto / OnniBus (interurbanos)", "Föli (Turku, con el bus a Paimio)"],
  apps: [
    { name: "VR Matkalla", use: "billetes de tren y cabinas del nocturno", url: "https://www.vr.fi/en" },
    { name: "HSL", use: "Helsinki: billetes y rutas, con el ferry" },
    { name: "Google Maps", use: "funciona perfecto con todo el transporte" },
    { name: "OnniBus / Matkahuolto", use: "buses interurbanos y rurales", url: "https://www.matkahuolto.fi/en" },
  ],
  noCarVerdictText:
    "Se puede, y en tren es como se debe hacer: Helsinki, Suomenlinna (ferry), Tampere, Turku y Paimio (bus), Lappeenranta, Oulu, Kemi y Rovaniemi van en tren, y el nocturno es la mitad del viaje. Lo que cuesta sin coche es lo de bosque: la Línea Salpa (taxi de 40 km), el museo del frente de Hanko (taxi de 20 km si no cuadra el bus), Sonkajärvi y todo lo que esté fuera de una ciudad, que en Finlandia es casi todo. Con coche verías más lagos iguales; sin coche ves el nocturno, que es mejor.",
  hardWithoutCar: [
    "La Línea Salpa: bus rural escaso más 3 km, o taxi desde Hamina (60 €); solo en verano.",
    "El museo del frente de Hanko: 20 km de la estación, con 1-2 buses al día.",
    "Sonkajärvi (llevar a la mujer a cuestas): tren a Iisalmi y bus o taxi.",
    "El paso de Nuijamaa: taxi de 25 km, y solo para mirarlo.",
  ],
  meta: vol([SEAT61, VR, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 40, note: "cama en hostal de Helsinki; en Rovaniemi en invierno, 60 €" },
    { concept: "hotel-mid", eur: 130 },
    { concept: "comida-barata", eur: 12, note: "menú de mediodía (lounas) con buffet de ensalada y café, 12-14 €, lo mejor del país; kebab 10 €" },
    { concept: "restaurante", eur: 35, note: "sin vino, que va aparte y caro" },
    { concept: "transporte-urbano", eur: 3.3 },
    { concept: "tren-intercity", eur: 15, note: "Helsinki–Tampere con antelación; el nocturno, 49-89 € la cabina" },
    { concept: "cafe", eur: 4, note: "el país que más café bebe del mundo, y se nota en el precio" },
    { concept: "supermercado", eur: 15, note: "K-Market y S-Market; el alcohol solo en Alko, que cierra a las 21" },
  ],
  tips: [
    "Aquí NO puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: es el país más caro del radar, 100-120 € al día con hostal y lounas. Se dice claro.",
    "El lounas (menú de mediodía de 11 a 14, 12-14 € con buffet) es la única comida barata: come fuerte al mediodía y supermercado de noche.",
    "Los trenes con antelación son baratos (6,90 € Helsinki–Tampere); el mismo tren la semana antes cuesta cinco veces más.",
    "Finnair y Norwegian a Helsinki desde 60-90 € por trayecto fuera de Navidad y esquí.",
    "El alcohol es de Estado y caro: los finlandeses van a Tallin en ferry a comprarlo, y tú puedes ir a Estonia de paso (2 h, desde 20 €).",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026; el más caro del radar"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Helsinki", airport: "HEL", airlines: ["Finnair", "Norwegian"], lowCost: true, hours: 4, weekly: 12 },
  ],
  oneStop: [
    { via: "Helsinki a Rovaniemi (Finnair, Norwegian)", airlines: ["Finnair", "Norwegian"], totalHours: 6.5 },
    { via: "Estocolmo (SAS, Norwegian) a Helsinki", airlines: ["SAS", "Norwegian"], totalHours: 6 },
  ],
  tips: [
    "A Helsinki, Finnair (7/semana) y Norwegian (5/semana), 4 h, desde 60-90 €.",
    "A Rovaniemi con escala en Helsinki (Finnair y Norwegian, 1 h 20 el salto): útil para volver desde Laponia sin repetir el nocturno.",
    "Del aeropuerto al centro, tren P o I de HSL (30 min, 4,10 €).",
    "Finlandia encadena con Estonia por el ferry Helsinki–Tallin (2 h, desde 20 €, la ficha de Estonia) y con Suecia por el ferry nocturno a Estocolmo (la ficha de Suecia).",
  ],
  meta: vol([PROPIO], "Frecuencias de septiembre de 2026", "alta"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Roaming europeo. Nada que tramitar; tarjeta sanitaria europea válida (y la sanidad es de las mejores). Ir a Rusia desde aquí no se puede: la frontera terrestre lleva cerrada desde diciembre de 2023 y en 2026 se cerraron también los pasos de tren.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea", "Ropa de -25 si es invierno (parte del presupuesto)"],
  links: [MAEC],
  warnings: ["La frontera con Rusia está cerrada y vigilada: no acercarse a la valla ni fotografiar los pasos con militares.", "Drones en Suomenlinna y las zonas militares: prohibidos."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "De lo más bajo del mundo; la gente deja el carrito con el bebé fuera del café." },
    { key: "robos", level: "bajo", text: "Casi nada." },
    { key: "timos", level: "bajo", text: "Ninguno; los precios son el timo." },
    { key: "zonasConflicto", level: "bajo", text: "La frontera rusa cerrada a 25-30 km de Lappeenranta: se mira desde la carretera, no se cruza." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "bajo", text: "Trenes impecables; en invierno, los andenes con hielo y el frío de verdad." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema salvo militares y la frontera." },
    { key: "noche", level: "bajo", text: "Helsinki de noche, segura y borracha los sábados; Laponia, a oscuras y a -25." },
  ],
  conflictAreas: ["La valla de la frontera rusa y los pasos cerrados: no acercarse"],
  soloText:
    "El país más fácil del mundo para ir solo: nadie te habla (y es cultural, no personal), inglés perfecto en todos, hostales buenos, trenes que llegan y una seguridad de cuento. Mujeres solas: cero problemas. Lo que cansa es el precio, el silencio y en invierno la oscuridad de las tres de la tarde.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE y del euro, y desde 2023 de la OTAN (el giro más rápido de su historia, tras la invasión de Ucrania), con 1.340 km de frontera con Rusia cerrada desde diciembre de 2023 por la «migración instrumentalizada» y una valla nueva en construcción; gobierno de derecha (Orpo, con los ultras Verdaderos Finlandeses) desde 2023 recortando el Estado del bienestar que hizo famoso al país, y el «país más feliz del mundo» ocho años seguidos según la ONU, que los finlandeses reciben con una ceja levantada. Para el que viaja: tranquilo, caro y con Rusia como tema de conversación único.",
  watch: ["La frontera con Rusia: cerrada sin fecha, con incidentes de globos y drones en 2025-26", "Los precios de VR y el nocturno en temporada", "Oulu Capital Europea de la Cultura 2026: hoteles llenos"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "UE: roaming europeo, y la mejor cobertura de Europa (5G en el bosque). Tarjeta en absolutamente todo (hay bares que no aceptan efectivo); Apple Pay y Google Pay en el bus. Google Maps con todo el transporte; la app VR para el tren; HSL para Helsinki. Wifi gratis en los trenes, los buses y cada café.",
  blocked: [],
  esimProviders: ["Roaming UE", "Airalo (si vienes de fuera)", "SIM de Elisa o DNA (10 €, prepago con datos ilimitados)"],
  payments:
    "Tarjeta en todo, sin excepciones; efectivo para nada, salvo un mercadillo. No hace falta ni un euro en el bolsillo.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Finés (ugrofinés, sin parientes en Europa salvo el estonio y el húngaro, con quince casos y palabras de treinta letras) y sueco cooficial (los carteles de tren y calle en las dos lenguas en el sur y la costa); inglés perfecto en todo el mundo, de la cajera al taxista, sin excepción. Es el país del radar donde menos falta el idioma, y donde menos se habla en general.",
  machinesText:
    "Máquinas, apps y carteles en finés, sueco e inglés; los museos con inglés completo. Cero problemas.",
  survivalPhrases: [
    { es: "Hola", local: "Hei / Moi", latin: "hei / moi" },
    { es: "Gracias", local: "Kiitos", latin: "kíitos" },
    { es: "¿Cuánto cuesta?", local: "Paljonko maksaa?", latin: "pályonko máksaa" },
    { es: "Estación de tren", local: "Rautatieasema", latin: "ráutatie-ásema" },
    { es: "Sauna", local: "Sauna", latin: "sáuna (la única palabra finesa que ya sabes)" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "temporada", text: "Abre el castillo de nieve de Kemi; el Sampo rompe hielo; -25 en Rovaniemi y aurora" },
    { month: 2, kind: "temporada", text: "El mejor mes de nieve y aurora; vacaciones de esquí y el nocturno lleno" },
    { month: 3, kind: "temporada", text: "Nieve con sol y días largos ya; el castillo de nieve aguanta hasta abril" },
    { month: 4, kind: "clima", text: "Deshielo gris (el peor mes); el 30, Vappu empieza a las 18:00 con la gorra en Havis Amanda" },
    { month: 5, kind: "festival", text: "Vappu el 1: picnic de resaca de 100.000 personas en Kaivopuisto", festivalId: "fi-vappu" },
    { month: 6, kind: "festival", text: "Juhannus (el sábado entre el 20 y el 26): hogueras, sauna y el país vacío", festivalId: "fi-juhannus" },
    { month: 6, kind: "temporada", text: "Sol de medianoche en Rovaniemi del 6 de junio al 7 de julio; abren Hanko, Salpa y el Vesikko" },
    { month: 7, kind: "festival", text: "Llevar a la mujer a cuestas en Sonkajärvi el primer fin de semana", festivalId: "fi-eukonkanto" },
    { month: 8, kind: "festival", text: "La guitarra invisible en Oulu el último fin de semana; primeras auroras a final de mes", festivalId: "fi-air-guitar-oulu" },
    { month: 9, kind: "temporada", text: "La ruska (el otoño rojo de Laponia) y auroras sin -25: el mes secreto" },
    { month: 10, kind: "clima", text: "Oscuro, lluvia en el sur, primera nieve en el norte; museos de guerra cerrados" },
    { month: 11, kind: "clima", text: "El mes más negro; el nocturno con precios de antes de Navidad" },
    { month: 12, kind: "temporada", text: "Noche polar en Rovaniemi (6-8 de diciembre sin sol), Santa a tope, el nocturno agotado" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "El Santa Claus Express: doce horas de nocturno con ducha en la litera hasta el Círculo Polar.",
    "Una fortaleza de seis islas con un submarino y presos arreglando las murallas, en ferry urbano.",
    "Un sanatorio donde Aalto pensó hasta el color del techo para el moribundo, la península alquilada a Stalin y la frontera cerrada de Europa.",
    "Un castillo de nieve que se derrite, un rompehielos donde te tiran al mar, un Santa industrial y la guitarra invisible.",
    "El mejor tren de Europa del norte, inglés perfecto, tarjeta en todo, DNI, euro, roaming y seguridad de cuento.",
    "Aurora desde la orilla del río sin tour.",
  ],
  cons: [
    "El país más caro del radar: 100-120 € al día, y el alcohol de Estado.",
    "Poco sitio circo por kilómetro: es más bonito y raro que oscuro.",
    "La Línea Salpa y el frente de Hanko, sin coche, son taxi.",
    "El museo de Lenin ya no es el museo de Lenin (verificar).",
    "En invierno, oscuridad a las tres y -25; en abril, barro gris.",
  ],
  text:
    "Finlandia es el país del radar al que se va por un tren: doce horas de nocturno de dos pisos hasta el Círculo Polar, con un castillo de nieve y un rompehielos por el camino. Nueve días dan para Helsinki con Suomenlinna y el submarino, el sanatorio de Aalto desde Turku, Tampere con el museo que fue de Lenin, Lappeenranta mirando la frontera cerrada, y el Santa Claus Express con Kemi y Rovaniemi. Cinco, para Helsinki y el nocturno. Trece, para la guitarra invisible de Oulu en agosto o la Línea Salpa con taxi. Ve en febrero o en septiembre, reserva la cabina antes que el vuelo, come el lounas a mediodía, y asume que es caro: se dice claro y no se disimula.",
  meta: est([PROPIO]),
};
