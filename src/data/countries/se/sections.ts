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
const SEAT61: Source = { label: "The Man in Seat 61 · Sweden", url: "https://www.seat61.com/Sweden.htm", kind: "blog" };
const SJ: Source = { label: "SJ", url: "https://www.sj.se", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Suecia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Sweden", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Se puede hacer bastante bien, y el nocturno al Ártico es directamente uno de los sitios de la lista. SJ cubre el eje Malmö–Estocolmo–Gotemburgo con el X2000 (basculante, 200 km/h, wifi) y el norte con trenes cama modernos que salen de Estocolmo a las seis de la tarde y te dejan en Kiruna a las diez de la mañana, con la taiga nevada por la ventana. Lo malo: precios dinámicos que se triplican si compras tarde, una puntualidad que ha bajado en los últimos años por obras y falta de mantenimiento, y distancias que son las que son: 1.500 km de norte a sur. Fuera del eje principal, regionales de un vagón cada dos horas.",
  corridorsIntro: "Seis líneas. El nocturno del norte es el viaje; las otras son para llegar a él.",
  busText:
    "Los buses regionales (Länstrafiken de cada provincia) llegan a donde el tren no, incluidos los pueblos sami y Jokkmokk, con horarios cuadrados con el tren y apps que funcionan. FlixBus y Vy cubren las ciudades grandes más barato que SJ. En Gotland y en Laponia, el bus es el transporte; en invierno pasa con nieve y a su hora. Lo único: los domingos y fuera de temporada, dos o tres al día.",
  busCompanies: ["Länstrafiken (regional)", "Vy Bus4You", "FlixBus", "Destination Gotland (ferry)"],
  apps: [
    { name: "SJ", use: "billetes de tren, incluidos nocturnos y regionales de otras compañías", url: "https://www.sj.se" },
    { name: "SL", use: "metro, bus y ferris de Estocolmo; se paga también con la tarjeta del banco en el torno" },
    { name: "Resrobot", use: "el planificador nacional que combina tren, bus y ferry hasta el último pueblo", url: "https://resrobot.se" },
    { name: "Swish", use: "el Bizum sueco; no lo tendrás, pero conviene saber que existe cuando te lo pidan" },
    { name: "Bolt / Uber", use: "en las tres ciudades grandes; en Kiruna, taxi de toda la vida" },
  ],
  noCarVerdictText:
    "Perfectamente viable, con una salvedad: Suecia es enorme y vacía, y hay que aceptar que el transporte manda sobre el plan, no al revés. Las ciudades, el metro-museo, las minas de Dalarna, Uppsala, Visby y hasta Kiruna, Abisko y el Icehotel se hacen sin coche y sin dramas. Donde empieza la aventura es en lo pequeño y lejano: Fårö, Ales stenar fuera de temporada, la fortaleza de Boden, Jokkmokk. Se puede, con bus escaso y planificando. Lo que no vas a hacer sin coche es la Suecia de cabaña junto al lago; pero esa no es la que buscas.",
  hardWithoutCar: [
    "Fårö: bus, ferry y bicicleta; el bus de la isla solo va en verano.",
    "Ales stenar: el bus 322 desde Ystad pasa poco fuera de temporada.",
    "La fortaleza de Boden: taxi o una hora de cuesta desde la estación.",
    "Jokkmokk: bus desde Murjek (parada del nocturno) que hay que cuadrar al minuto.",
    "La Suecia de cabañas y lagos del interior: sin coche, mejor ni planteársela.",
  ],
  meta: vol([SEAT61, SJ, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 75, note: "hostal o cadena tipo Scandic en oferta; en Kiruna en temporada de aurora, más" },
    { concept: "hotel-mid", eur: 150 },
    { concept: "comida-barata", eur: 12, note: "el «dagens lunch» de mediodía, con café y ensalada: el truco nacional" },
    { concept: "restaurante", eur: 40, note: "cena con una cerveza; el alcohol es lo que dispara la cuenta" },
    { concept: "transporte-urbano", eur: 4 },
    { concept: "tren-intercity", eur: 45, note: "Estocolmo–Gotemburgo con antelación; 110 € el mismo día" },
    { concept: "cafe", eur: 4, note: "con relleno gratis en muchos sitios: fika es sagrada" },
    { concept: "supermercado", eur: 15 },
  ],
  tips: [
    "El «dagens lunch» (menú del día laborable, 11:00-14:00) cuesta la mitad que la misma comida de noche. Come fuerte a mediodía.",
    "El alcohol solo se vende en Systembolaget, la tienda estatal, que cierra a las 15:00 los sábados y no abre domingos. Planifica o bebe caro en bares.",
    "Trenes: SJ lanza los billetes tres meses antes y los baratos duran días. Alerta puesta.",
    "Efectivo cero: hasta los baños públicos y los mercadillos van con tarjeta. No cambies dinero.",
    "Los museos estatales de Estocolmo (Historiska, Armémuseum, Moderna) son gratis; el Vasa no.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026 con la corona a ≈ 11,3 por euro"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Estocolmo", airport: "ARN", airlines: ["Vueling", "Norwegian", "SAS", "Ryanair"], lowCost: true, hours: 3.7, weekly: 17 },
    { to: "Gotemburgo", airport: "GOT", airlines: ["Vueling", "Norwegian"], lowCost: true, hours: 3.3, weekly: 6, seasonal: true },
    { to: "Malmö", airport: "MMX", airlines: ["Ryanair"], lowCost: true, hours: 3.2, weekly: 3, seasonal: true },
  ],
  oneStop: [
    { via: "Copenhague (y tren de 35 min a Malmö)", airlines: ["Vueling", "Norwegian", "SAS"], totalHours: 4.5 },
    { via: "Ámsterdam o Fráncfort", airlines: ["KLM", "Lufthansa"], totalHours: 6 },
  ],
  tips: [
    "Diecisiete directos por semana a Arlanda entre cuatro compañías: hay hueco casi cada día y por 60-150 € ida y vuelta.",
    "Ryanair a «Estocolmo» Skavsta aterriza a 100 km de la ciudad: 80 minutos de bus y 15 € más. Con Vueling o Norwegian a Arlanda sales ganando.",
    "Para el sur, vuela a Copenhague: más frecuencia, más barato y el tren cruza el puente a Malmö en 35 minutos.",
    "Del Arlanda al centro: el Arlanda Express es rápido y carísimo (30 €); el cercanías de SL cuesta 15 y tarda 40 min; el bus Flygbussarna, 12 y 45.",
  ],
  meta: vol([PROPIO], "Frecuencias de temporada media; Gotemburgo y Malmö varían mucho"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale. Schengen: sin visado, sin formulario, sin tasa. Tarjeta sanitaria europea para la sanidad pública y seguro para el resto (los rescates en montaña en Laponia son caros). Si entras por Copenhague, Dinamarca también es Schengen, pero desde 2023 Suecia hace controles aleatorios en el puente de Öresund: lleva el DNI a mano en el tren.",
  steps: ["DNI español en vigor", "Tarjeta Sanitaria Europea", "Nada que tramitar"],
  links: [MAEC],
  warnings: ["Controles aleatorios de documentación en el puente de Öresund y en los ferris desde Alemania: normal, DNI a mano.", "Si sigues del nocturno a Narvik entras en Noruega, que no es UE pero sí Schengen: sin trámites, pero cambia la moneda y el roaming puede cambiar de tarifa."],
  meta: vol([MAEC], "Schengen: sin trámites para españoles"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Para el que viaja, seguro. Hay violencia entre bandas en barrios de la periferia de Estocolmo, Gotemburgo y Malmö que sale en la prensa y no te va a tocar." },
    { key: "robos", level: "bajo", text: "Carteristas en la estación central de Estocolmo y en el metro en verano; poca cosa." },
    { key: "timos", level: "bajo", text: "Casi ninguno. Los taxis libres son caros pero legales: mira el precio en la pegatina amarilla de la ventanilla antes de subir." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna que te pille de paso. Los barrios problemáticos son de vivienda, no de visita." },
    { key: "terrorismo", level: "medio", text: "Nivel de alerta elevado desde 2023 (quemas de Corán); en la práctica, vigilancia discreta y nada más." },
    { key: "transporte", level: "bajo", text: "Impecable; el nocturno es de lo más seguro que existe para dormir." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema. En las bases militares (Boden, Karlskrona) hay zonas prohibidas señalizadas: respétalas, que están en modo serio." },
    { key: "noche", level: "bajo", text: "Se vuelve andando a cualquier hora. El peligro real de noche en invierno es el hielo en la acera." },
  ],
  conflictAreas: [],
  soloText:
    "De los países más fáciles del mundo para ir solo: todo el mundo habla inglés perfecto, nadie te mira raro en un restaurante y el transporte funciona. En Laponia en invierno, el único riesgo eres tú: −25 °C, poca luz y distancias enormes. Con ropa seria y sin heroicidades, sin problema. Para mujeres solas, sin ninguna consideración especial.",
  meta: vol([MAEC, PROPIO], undefined, "alta"),
};

export const politics: PoliticsSection = {
  text:
    "Monarquía parlamentaria de manual, con un gobierno de derechas apoyado por la extrema derecha desde 2022 y una entrada en la OTAN en 2024 que ha cambiado el ambiente: Boden y Karlskrona vuelven a ser bases en serio, y el discurso público habla de «preparación» con folletos a todos los hogares. Nada de eso afecta al viaje. Sin huelgas, sin protestas relevantes, sin sorpresas. Las tensiones sociales sobre inmigración y bandas son reales y salen en las noticias cada día; para el turista son invisibles.",
  watch: ["Rearme y OTAN: más zonas militares cerradas en el norte y en la costa", "Obras ferroviarias que degradan la puntualidad de SJ año tras año"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Suecia es el país más digital en el que vas a poner el pie: no existe el efectivo (muchos bares y museos directamente no lo aceptan), los billetes de bus se compran con la tarjeta del banco en el torno, y hasta el mercadillo de Jokkmokk cobra con Swish o datáfono. Roaming de la UE, cobertura 4G/5G hasta en el tren nocturno por la taiga, y Google Maps con transporte al minuto. El único sitio sin cobertura es donde debe: dentro de la mina de Sala.",
  blocked: [],
  esimProviders: ["No hace falta: roaming de la UE incluido en tu tarifa española"],
  payments:
    "Tarjeta en absolutamente todo, incluidos baños públicos, iglesias y puestos de fresas en la carretera. Apple y Google Pay, sin excepción. No saques coronas: no vas a usarlas y muchos sitios las rechazan.",
  meta: est([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Sueco, pero da igual: el nivel de inglés es el más alto del mundo entre países no anglófonos, desde el conductor del bus de Kiruna hasta la abuela sami del mercado. Los carteles del tren y del metro están en sueco e inglés, las apps en inglés, y los avisos por megafonía se repiten en inglés. En el norte se ve también el sami en los carteles. El alfabeto es el tuyo con tres letras más (å, ä, ö) que solo importan para escribir el nombre de la estación en el buscador.",
  machinesText:
    "Máquinas de SJ y tornos de SL en inglés; la app de SJ, en inglés; los ferris de Gotland, en inglés. No hay ni una sola situación en la que necesites sueco.",
  survivalPhrases: [
    { es: "Hola", local: "Hej", latin: "jei" },
    { es: "Gracias", local: "Tack" },
    { es: "Menú del día", local: "Dagens lunch", latin: "el truco para comer barato" },
    { es: "Pausa de café con bollo (institución nacional)", local: "Fika" },
    { es: "Tienda estatal de alcohol", local: "Systembolaget", latin: "cierra pronto los sábados" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Festival de la Nieve de Kiruna a finales de mes", festivalId: "se-kiruna-snofestival" },
    { month: 1, kind: "clima", text: "El mes más oscuro en el norte (4 h de luz) y el mejor para la aurora; el sur, gris y a 0 °C" },
    { month: 2, kind: "festival", text: "Mercado de invierno de Jokkmokk, primer fin de semana", festivalId: "se-jokkmokk-mercado" },
    { month: 3, kind: "temporada", text: "Aurora con días ya largos: el mejor mes para Abisko; el Icehotel en su plenitud" },
    { month: 4, kind: "festival", text: "Valborg el 30 en Uppsala: balsas, gorras blancas y hogueras", festivalId: "se-valborg-uppsala" },
    { month: 4, kind: "cierre", text: "Se derrite el Icehotel; mes de barro y deshielo en todo el país" },
    { month: 5, kind: "temporada", text: "Abren Birka, los barcos del archipiélago y los sitios de temporada; luz hasta las diez" },
    { month: 6, kind: "festival", text: "Midsommar el viernes más cercano al 21: el país entero cierra y se va al campo", festivalId: "se-midsommar" },
    { month: 7, kind: "clima", text: "Sol de medianoche en Kiruna; los suecos de vacaciones y las ciudades medio vacías" },
    { month: 8, kind: "festival", text: "Semana Medieval de Visby, primera semana", festivalId: "se-medeltidsveckan-visby" },
    { month: 8, kind: "temporada", text: "Fiesta de los cangrejos de río (kräftskiva) con gorros de papel y aguardiente; vuelve la gente a las ciudades" },
    { month: 9, kind: "temporada", text: "Colores de otoño en Laponia y primeras auroras; precios de entretiempo" },
    { month: 10, kind: "clima", text: "Primera nieve en el norte, lluvia en el sur; Skogskyrkogården con niebla" },
    { month: 11, kind: "clima", text: "El peor mes: oscuro, húmedo y sin nieve todavía. Se construye el Icehotel" },
    { month: 12, kind: "festival", text: "Santa Lucía el 13 a las siete de la mañana en todo el país", festivalId: "se-lucia" },
    { month: 12, kind: "temporada", text: "Abre el Icehotel; mercados de Navidad en Skansen y Gamla stan" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "El nocturno de 16 horas al Ártico es a la vez el transporte y uno de los mejores sitios de la lista.",
    "Kiruna: una ciudad entera mudándose por un agujero, con la iglesia recién trasladada sobre ruedas. No hay nada igual en el planeta.",
    "El metro de Estocolmo es una cueva pintada de 100 estaciones y se visita con el billete del día.",
    "Minas con historia y con cama: el cráter de Falun con su minero petrificado y la suite a 155 metros bajo tierra en Sala.",
    "Todo el mundo habla inglés perfecto, todo se paga con tarjeta y todo funciona: es el país con menos fricción que vas a pisar.",
    "Midsommar, Valborg, Jokkmokk, Lucía: folclore vivo y en serio, no recreado.",
  ],
  cons: [
    "Caro: 130 € al día viviendo normal, y el alcohol es un impuesto sobre la alegría.",
    "Distancias enormes y trenes que han perdido puntualidad: la mitad del viaje es viaje.",
    "El invierno es oscuro y el noviembre, deprimente; hay que elegir entre la aurora y la luz, no caben las dos.",
    "Poca oscuridad histórica comparado con el centro y el este de Europa: aquí el circo es la naturaleza, la industria y lo raro, no la guerra.",
    "Lo pequeño y lejano (Fårö, Boden, Jokkmokk) se hace sin coche, pero con buses de dos al día y planificación al minuto.",
    "Los suecos son amables pero de lejos: no esperes que te inviten a nada.",
  ],
  text:
    "Suecia es el país donde el viaje en sí es el sitio circo: dieciséis horas de tren cama por la taiga para llegar a una ciudad que se está desmontando y a un hotel que se derrite. Doce días dan para Estocolmo con sus cuevas de metro, Uppsala con sus reyes paganos, las minas de Dalarna con noche bajo tierra y el salto al Ártico con aurora en Abisko. Sin coche va sorprendentemente bien mientras te quedes en el eje del tren; en cuanto te sales, buses de dos al día. Es cara, es ordenada y no tiene la oscuridad histórica del este, pero tiene otra cosa: la sensación de estar en el borde del mapa con wifi. Elige la época con cabeza: febrero-marzo para el hielo y la aurora, junio para no dormir. Nunca noviembre.",
  meta: est([PROPIO]),
};
