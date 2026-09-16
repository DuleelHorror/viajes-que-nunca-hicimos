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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Mongolia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Mongolia", url: "https://www.seat61.com/Mongolia.htm", kind: "blog" };
const NUMBEO: Source = { label: "Numbeo · Mongolia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Mongolia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Mongolia tiene una línea de tren, el Transmongoliano, que cruza el país de norte a sur (de Rusia a China por Ulán Bator), y un ramal a la mina de Erdenet. Y ya. Pero esa línea es de las buenas: literas soviéticas, samovar, diez horas por el Gobi hasta Sainshand por 12 € y cinco hasta Darkhan. Los billetes se compran en la taquilla de la estación con pasaporte (la app oficial solo está en mongol) o te los saca el hostal por una comisión pequeña. Para nuestro perfil, es el eje del viaje: lo que esté en la línea, se hace; lo que no, se decide con calma.",
  corridorsIntro: "Tres corredores que son en realidad una línea y un ramal. Lo demás del mapa son buses y un vuelo.",
  busText:
    "A los sitios fuera de la línea van buses desde la estación Dragon de Ulán Bator: Kharkhorin (7 h), Darkhan (3 h 30), Tsetserleg, Mörön (14 h), Dalanzadgad (12 h). Hay uno o dos al día, se compra el billete en la estación el día antes y las carreteras han mejorado mucho: ya casi todo es asfalto. Los alrededores de la capital (Terelj, la estatua de Gengis Kan, Khustai) tienen bus o tour barato. Y luego está el Gobi, la estepa profunda y el oeste: eso es jeep con conductor, siempre, para todo el mundo, con o sin carnet.",
  busCompanies: ["Buses interurbanos desde la estación Dragon (UB)", "Bus X22 a Terelj", "Tours de un día de los hostales (Gengis Kan, Terelj, Khustai)", "Jeeps con conductor para el Gobi (grupos montados en hostales)"],
  apps: [
    { name: "UBCab", use: "taxi con precio en Ulán Bator; si no, cualquier coche que pare es un taxi a 0,50 €/km" },
    { name: "Maps.me / Organic Maps", use: "offline; Google Maps funciona pero fuera de la capital no hay nada que mapear" },
    { name: "Google Translate", use: "mongol en cirílico, con cámara; funciona regular pero funciona" },
    { name: "UB Smart Bus", use: "horarios y rutas de bus de la capital" },
  ],
  noCarVerdictText:
    "Es más fácil de lo que parece, porque en Mongolia nadie viaja en coche propio: los mongoles van en bus, en tren o en jeep con conductor, y tú harás lo mismo. La capital y sus excursiones (Zaisan, el Terror, el Gengis Kan de 40 metros, Terelj, Khustai) se hacen en bus y tour barato; el Transmongoliano te lleva al centro de energía del Gobi y al norte soviético; el bus, a Karakórum. Donde empieza el circo es en el Gobi profundo, los renos del norte y las águilas del oeste: vuelo interno y jeep contratado, es decir, dinero y grupo. Con coche de alquiler tampoco irías: sin pistas señalizadas y con 400 km entre gasolineras, se pierde hasta el que sabe.",
  hardWithoutCar: [
    "El Gobi (Bayanzag, dunas de Khongor, Yolyn Am): vuelo a Dalanzadgad y jeep con conductor tres días mínimo.",
    "El festival del Águila de Ölgii y el lago Khövsgöl: vuelo interno y agencia.",
    "Cualquier cosa fuera de la línea del tren y los buses: distancias de 500 km sin asfalto.",
    "Karakórum es bus, pero siete horas y un solo bus al día.",
  ],
  meta: vol([SEAT61, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 12, note: "hostal en Ulán Bator; ger de campamento con comidas, 25 €" },
    { concept: "hotel-mid", eur: 45 },
    { concept: "comida-barata", eur: 3, note: "buuz (empanadillas al vapor), khuushuur, sopa con cordero" },
    { concept: "restaurante", eur: 12, note: "en la capital hay de todo, hasta coreano" },
    { concept: "transporte-urbano", eur: 0.15 },
    { concept: "tren-intercity", eur: 12, note: "Ulán Bator–Sainshand en litera" },
    { concept: "cafe", eur: 2 },
    { concept: "supermercado", eur: 7 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 40-50 € al día en la capital y en el tren.",
    "El gasto gordo es el Gobi: un jeep con conductor son 100-130 € al día, a repartir entre cuatro. Sin grupo, no compensa.",
    "El vuelo desde Barcelona es lo más caro del viaje: 800-1.200 €. Mirar Turkish por Estambul y las combinaciones por Pekín o Seúl.",
    "Los cajeros de Khan Bank y Golomt dan tugrik con tarjeta europea sin drama; fuera de la capital, efectivo.",
    "En los campamentos de gers se paga por persona con comidas incluidas: 25-35 €. Los de familias, la mitad y mejores.",
  ],
  meta: vol([NUMBEO, PROPIO], "Tugrik a ≈ 3.900 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [],
  oneStop: [
    { via: "Estambul (IST)", airlines: ["Turkish Airlines"], totalHours: 15 },
    { via: "Pekín (PEK)", airlines: ["Air China", "MIAT"], totalHours: 16 },
    { via: "Seúl (ICN)", airlines: ["Korean Air", "MIAT"], totalHours: 18 },
    { via: "Fráncfort (FRA)", airlines: ["Lufthansa", "MIAT"], totalHours: 14 },
  ],
  tips: [
    "Sin directo y sin escala corta: 14-18 horas de puerta a puerta. Turkish por Estambul es lo más cómodo; MIAT desde Fráncfort, lo más directo desde Europa.",
    "Combinarlo con China es la jugada: BCN–Pekín directo (Air China), tren Transmongoliano a Ulán Bator y vuelta desde allí. Ver la ficha de China.",
    "El aeropuerto nuevo (Chinggis Khaan, UBN) está a 50 km de la ciudad: bus lanzadera de 2 € o taxi de 25 €, y hora y media de atasco.",
    "800-1.200 € ida y vuelta es lo normal; menos de 700 es un chollo. Reservar con tres meses.",
  ],
  meta: vol([PROPIO], "Sin directo en 2026"),
};

export const docs: DocsSection = {
  text:
    "Los españoles entran sin visado hasta 30 días (Mongolia lo amplió a los europeos en 2023 y lo ha ido prorrogando; comprobar que sigue vigente). Sin registro si no pasas de 30 días. Nada que tramitar para el tren interno; para el Transmongoliano internacional hacia China o Rusia, visados de esos países aparte.",
  steps: ["Pasaporte con 6 meses de validez", "Nada que tramitar para 30 días", "Si sigues a China: visado chino no hace falta hasta el 31/12/2026 (30 días); a Rusia, visado"],
  links: [MAEC],
  warnings: ["La exención de 30 días es una medida temporal que se renueva por años: mira la web del MAEC antes de comprar el vuelo.", "Fotos a militares, aeropuertos y la frontera: no."],
  meta: vol([MAEC], "Exención temporal renovada; comprobar", "baja"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia violenta rara. El país es de los más tranquilos de Asia." },
    { key: "robos", level: "medio", text: "Carteristas profesionales en el mercado Naran Tuul (el «mercado negro») y en los buses llenos de Ulán Bator. Mochila delante." },
    { key: "timos", level: "bajo", text: "Poca picaresca; algún taxi que dobla el precio si no pactas antes." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Inexistente." },
    { key: "transporte", level: "medio", text: "Las carreteras y los jeeps del Gobi son el riesgo real: conductores cansados, sin cinturones y pistas de arena. El tren es seguro." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en los distritos de gers, pide permiso antes de fotografiar a nadie." },
    { key: "noche", level: "medio", text: "Borrachos agresivos en Ulán Bator los fines de semana y en Naadam: el vodka es un problema nacional. No discutas con ellos." },
  ],
  conflictAreas: [],
  soloText:
    "Muy fácil para ir solo: los hostales de Ulán Bator son el punto de encuentro donde se montan los grupos para el Gobi y siempre hay con quién compartir jeep. El mongol de campo es hospitalario a niveles serios (la ger abierta, té con leche salada, airag). Lo único que cansa es el frío fuera de temporada y los borrachos de la capital de noche. Mujeres solas: sin problemas específicos; en el campo, ropa discreta y sentido común.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "Democracia parlamentaria desde 1990, de las pocas de la región, con alternancia real y protestas cuando toca (en 2022 por la corrupción del carbón, en 2024 por las elecciones). Encajada entre Rusia y China, de las que depende para todo (gasolina de una, exportaciones a la otra), hace equilibrios con una «tercera vecindad» (EE. UU., Corea, Japón, Europa). Estable, pobre, minera y con una capital que crece más rápido de lo que se puede gestionar.",
  watch: ["Los dzud (inviernos que matan al ganado) empujan a más nómadas a la capital cada año", "Contaminación de Ulán Bator en invierno: de las peores del mundo", "Naadam (11-13 julio): todo cerrado y todo el mundo de fiesta"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "En Ulán Bator, 4G y wifi en todos lados, con SIM de Unitel o Mobicom por 5 € en el aeropuerto o en cualquier tienda. Fuera, cobertura en pueblos y en la línea del tren; en la estepa y el Gobi, nada durante días, que es parte de la gracia. Nada bloqueado. Google Maps sirve en la capital; para el resto, Organic Maps offline. El traductor con mongol funciona regular: frases cortas.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Unitel o Mobicom (5 €, con pasaporte)"],
  payments:
    "Tarjeta en hoteles, supermercados y restaurantes de la capital; efectivo (tugrik) para buses, taxis, trenes, mercados y todo lo que esté fuera de Ulán Bator. Los cajeros de Khan Bank funcionan con tarjetas europeas.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Mongol, escrito en cirílico desde 1941 (el alfabeto vertical tradicional vuelve a los documentos oficiales desde 2025, pero la calle sigue en cirílico). Ruso, los mayores de 50; inglés, los jóvenes de la capital y el personal de hostales y agencias, bastante bien. Los carteles de la capital van en cirílico con algo de inglés; fuera, solo cirílico. Con el traductor y saber leer cirílico (que a estas alturas ya deberías), se va.",
  machinesText:
    "La taquilla del tren es de persona, no de máquina, y no habla inglés: escribe destino, fecha y «kupe» en un papel o pide en el hostal. Los buses, billete en ventanilla igual. Los cajeros, en inglés.",
  survivalPhrases: [
    { es: "Hola", local: "Сайн байна уу", latin: "sain baina uu" },
    { es: "Gracias", local: "Баярлалаа", latin: "bayarlalaa" },
    { es: "¿Cuánto cuesta?", local: "Энэ ямар үнэтэй вэ?", latin: "en yamar üntei ve" },
    { es: "Estación de tren", local: "Галт тэрэгний буудал", latin: "galt teregnii buudal" },
    { es: "Uno, por favor", local: "Нэг, гуйя", latin: "neg, guiya" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−30 °C en Ulán Bator, la capital más fría del mundo, y el smog de carbón a tope" },
    { month: 2, kind: "festival", text: "Tsagaan Sar, el año nuevo lunar: tres días de visitas y cordero", festivalId: "mn-tsagaan-sar" },
    { month: 3, kind: "festival", text: "Festival del Hielo en el lago Khövsgöl, el 2 y 3 de marzo", festivalId: "mn-ice-festival-khovsgol" },
    { month: 4, kind: "clima", text: "Tormentas de arena y polvo; deshielo. El peor mes" },
    { month: 5, kind: "temporada", text: "Empieza la temporada: verde en la estepa, gers abriendo, pocos turistas" },
    { month: 6, kind: "temporada", text: "Mes bueno: días largos, 25 grados, todo abierto y aún sin las masas de julio" },
    { month: 7, kind: "festival", text: "Naadam del 11 al 13: la fiesta nacional y el país entero de fiesta", festivalId: "mn-naadam" },
    { month: 7, kind: "temporada", text: "Temporada alta: precios arriba y hostales llenos la semana del Naadam" },
    { month: 8, kind: "clima", text: "Lluvias de verano en el norte, calor en el Gobi; sigue la temporada alta" },
    { month: 9, kind: "temporada", text: "El mes de los que saben: luz dorada, estepa amarilla, nadie. El Gobi ya baja de cero de noche" },
    { month: 10, kind: "festival", text: "Festival del Águila Dorada en Ölgii, el primer fin de semana", festivalId: "mn-eagle-festival-olgii" },
    { month: 11, kind: "clima", text: "Invierno: los campamentos cierran, el tren sigue" },
    { month: 12, kind: "clima", text: "−25 °C y el smog: solo para quien quiera ver la capital más fría del mundo siéndolo" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "La capital es un cruce raro de nómadas, estalinismo y minería: mosaico soviético gigante, museo del Terror con cráneos, gers en los patios.",
    "El Transmongoliano hace de columna vertebral: al centro de energía del Gobi y al norte soviético en litera por 12 €.",
    "WTF de calidad: Gengis Kan de 40 metros con ascensor, un rey-monje con elefante, un pene de piedra para monjes.",
    "Nadie va en coche propio: bus, tren y jeep con conductor son lo normal para todo el mundo.",
    "Barato en tierra (40-50 € al día), seguro y hospitalario hasta el exceso.",
    "Sin visado 30 días (de momento) y ningún bloqueo digital.",
  ],
  cons: [
    "El vuelo: 14-18 horas con escala y 800-1.200 €, lo más caro de todo el radar.",
    "Fuera del tren y de tres buses, todo es jeep con conductor: el Gobi y el oeste exigen grupo y dinero.",
    "Temporada corta: de junio a septiembre; el resto es hielo, polvo o smog.",
    "Cirílico y mongol; el traductor funciona a medias.",
    "Un solo país de la lista donde la comida es un problema: cordero, cordero y buuz de cordero.",
  ],
  text:
    "Mongolia es un viaje de tren y de bus más de lo que la gente cree, y un viaje de jeep donde la gente ya sabe. Doce días dan para Ulán Bator con su Terror y su mosaico, el Gengis Kan gigante con noche en ger, los caballos resucitados de Khustai, el Transmongoliano hasta el monasterio del poeta borracho en el Gobi y las siete horas de bus hasta lo que queda de Karakórum. Dieciséis, para añadir el norte soviético en tren y el Gobi de los dinosaurios en avión y jeep compartido. Ve en junio o en septiembre (julio si quieres el Naadam y aguantas el lleno), cómprate el vuelo con tres meses y encadénalo con China por el Transmongoliano si puedes. Es el país más caro de llegar y de los más baratos de estar.",
  meta: est([PROPIO]),
};
