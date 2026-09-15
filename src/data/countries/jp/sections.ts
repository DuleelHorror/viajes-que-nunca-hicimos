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
const SEAT61: Source = { label: "The Man in Seat 61 · Japan", url: "https://www.seat61.com/Japan.htm", kind: "blog" };
const JRPASS: Source = { label: "Japan Rail Pass", url: "https://japanrailpass.net", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Japón", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Japan", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Puedes cruzarte el país entero en tren sin invocar a ningún dios, porque el dios ya es el tren. Un Shinkansen cada cinco minutos entre Tokio y Osaka, retraso medio de 24 segundos al año, vagones limpios como quirófanos y una red que llega a cualquier pueblo con un vagón cada hora. Es caro (Tokio–Kioto son 85 €) y el JR Pass de 7 días subió a 50.000 ¥ en 2023, así que ya solo compensa si haces tres trayectos largos en una semana; para lo demás, billetes sueltos en la app SmartEX con tu tarjeta. La única pega real: los nocturnos han desaparecido salvo el Sunrise, que se agota el primer día de venta.",
  corridorsIntro: "Seis corredores; los Shinkansen hacen el 90 % del trabajo y la línea Joban es un sitio de la lista por sí misma.",
  busText:
    "Los buses de larga distancia (Willer, JR Bus) son la alternativa barata a los Shinkansen y los nocturnos con asientos tipo capullo sustituyen a los trenes cama que ya no existen. Pero donde el bus importa es en el último tramo: Osorezan, Aokigahara, el valle de Iya, los infiernos de Beppu. Salen a su hora exacta, tienen tres o cuatro servicios al día y el último es antes de lo que te gustaría. Google Maps los tiene todos con el minuto.",
  busCompanies: ["JR Bus", "Willer Express", "Fujikyu (Fuji)", "Shimokita Kotsu (Osorezan)", "Iya Valley bus"],
  apps: [
    { name: "Google Maps", use: "en Japón es perfecto: trenes, andenes, precio, vagón. No necesitas nada más para moverte" },
    { name: "Suica / ICOCA en el móvil", use: "la tarjeta de transporte y de pagos; se recarga con Apple Pay y vale en todo el país", url: "https://www.jreast.co.jp/multi/en/pass/suica.html" },
    { name: "SmartEX", use: "billetes de Shinkansen Tokaido y Sanyo con tarjeta extranjera; el billete va en la Suica", url: "https://smart-ex.jp/en/" },
    { name: "Japan Travel by Navitime", use: "si quieres filtrar por JR Pass o por «solo trenes lentos»" },
    { name: "GO", use: "taxis con app; Uber es raro fuera de Tokio", url: "https://go.gotaxi.jp/" },
  ],
  noCarVerdictText:
    "Modo fácil, con matices de país grande. Las ciudades, los Shinkansen y todo lo que esté en una línea de tren se hace mejor sin coche que con él (aparcar en Tokio es un deporte de riesgo). Los sitios de esta lista que dan trabajo son los de la punta de algo: Osorezan (tren local más bus de cuatro al día), Nagoro en el valle de Iya (dos o tres buses) e Ikeshima (bus escaso y ferry). Se pueden, todos, pero cada uno es un día entero y hay que cuadrar la vuelta. Y G-Cans y Gunkanjima no dependen de ti sino de la lluvia y del oleaje.",
  hardWithoutCar: [
    "Osorezan: Shinkansen, dos trenes locales y un bus con cuatro salidas al día solo de mayo a octubre.",
    "Nagoro y el valle de Iya: bus del valle con dos o tres servicios; taxi con espera desde Oboke como plan B.",
    "Ikeshima: bus a Seto y cuatro ferris al día; cuadra la vuelta antes de ir.",
    "G-Cans: 40 minutos a pie desde la estación entre semana; el bus solo los fines de semana.",
    "Aokigahara: el bus de Kawaguchiko a las cuevas pasa cada hora y en invierno menos.",
  ],
  meta: vol([SEAT61, JRPASS, PROPIO], undefined, "alta"),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 45, note: "business hotel (APA, Toyoko Inn) con habitación de 10 m² impecable" },
    { concept: "hotel-mid", eur: 110 },
    { concept: "comida-barata", eur: 6, note: "ramen, gyudon o bento de konbini; se come muy bien por muy poco" },
    { concept: "restaurante", eur: 25, note: "izakaya con cerveza; el sushi de nivel es otra liga" },
    { concept: "transporte-urbano", eur: 1.5 },
    { concept: "tren-intercity", eur: 85, note: "Shinkansen Tokio–Kioto; esto es lo que dispara el presupuesto" },
    { concept: "cafe", eur: 3 },
    { concept: "supermercado", eur: 10 },
  ],
  tips: [
    "Con el yen débil de 2025-26, Japón es más barato que Italia salvo en dos cosas: el vuelo y los Shinkansen.",
    "JR Pass: 50.000 ¥ por 7 días. Solo compensa con tres trayectos largos (Tokio–Kioto–Hiroshima–Tokio). Para el norte con Osorezan, sí; para el oeste con vuelo de vuelta, no.",
    "Los konbini (7-Eleven, Lawson, FamilyMart) son restaurantes: bento caliente, onigiri, café de filtro por 1 €. No hay vergüenza en cenar de konbini.",
    "Sin propinas. Nunca. Dejarlas es un lío para el camarero.",
    "Los business hotels de cadena tienen habitaciones diminutas y perfectas por 45 €; los ryokan con cena son la excepción cara que hay que hacer una vez (Kōya).",
    "Los museos raros de esta lista cuestan de 0 a 6 €; Hiroshima y Nagasaki, 200 yenes. El dinero se va en trenes y en Gunkanjima.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones con el yen a ≈ 165 por euro; si el yen se recupera, súmale un 20 %"),
};

export const flights: FlightsSection = {
  directRoutes: [],
  oneStop: [
    { via: "Estambul", airlines: ["Turkish Airlines"], totalHours: 16 },
    { via: "Doha o Dubái", airlines: ["Qatar Airways", "Emirates"], totalHours: 17 },
    { via: "Helsinki", airlines: ["Finnair"], totalHours: 15.5 },
    { via: "Zúrich, Fráncfort o París", airlines: ["Swiss", "Lufthansa", "Air France"], totalHours: 16 },
    { via: "Madrid (directo Iberia a Narita)", airlines: ["Iberia"], totalHours: 16.5 },
  ],
  tips: [
    "No hay directo desde Barcelona; el único directo de España es Iberia desde Madrid a Narita. Desde BCN, siempre una escala: 16-18 horas de puerta a puerta.",
    "Turkish por Estambul y Qatar por Doha suelen dar los mejores precios (700-1.000 € ida y vuelta); Finnair por Helsinki es la ruta más corta.",
    "Entrar por Tokio y salir por Osaka (Kansai) o al revés cuesta lo mismo y te ahorra deshacer el país.",
    "Haneda está a 30 minutos del centro; Narita a 60-90. Si puedes elegir, Haneda.",
    "Los vuelos internos (ANA, JAL, Peach) son baratos y puntuales: Nagasaki–Tokio por 60-150 € evita siete horas de tren de vuelta.",
  ],
  meta: vol([PROPIO], "Sin directo desde BCN en 2026; comprobar si alguna compañía lo abre"),
};

export const docs: DocsSection = {
  text:
    "Pasaporte y a volar: los españoles entran sin visado hasta 90 días, con el pasaporte válido durante la estancia (no piden meses extra). En la aduana rellenas online el Visit Japan Web antes de aterrizar, te toman huellas y foto y listo. Ojo con el calendario: desde abril de 2028 Japón exigirá la autorización electrónica JESTA (tipo ESTA) a todos los países sin visado, España incluida. Para 2026 y 2027, nada que tramitar.",
  steps: ["Pasaporte válido durante toda la estancia", "Rellenar Visit Japan Web (gratis) antes de aterrizar para saltarte colas", "Desde abril de 2028: JESTA online antes de embarcar"],
  links: [MAEC, { label: "Visit Japan Web", url: "https://vjw-lp.digital.go.jp/en/", kind: "oficial" }],
  warnings: [
    "Medicamentos: la pseudoefedrina (muchos anticatarrales) y algunos analgésicos con codeína están prohibidos. Mira la lista antes de meterlos en la maleta.",
    "Lleva siempre el pasaporte encima: la policía puede pedirlo y es obligatorio para extranjeros.",
    "Los tatuajes visibles cierran la puerta de muchos onsen y algún gimnasio: pregunta o tapa.",
  ],
  meta: vol([MAEC], "Exención de visado vigente; JESTA en 2028: confirmar antes de viajar ese año"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "El país más seguro en el que vas a estar. La gente deja el portátil en la mesa del café para ir al baño y sigue ahí al volver." },
    { key: "robos", level: "bajo", text: "Prácticamente inexistentes. Si pierdes la cartera, aparece en la comisaría con el dinero." },
    { key: "timos", level: "bajo", text: "Los únicos son los captadores de Kabukichō (Tokio) para bares con cuentas infladas: no entres donde te invite un tipo en la calle." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna. Los riesgos son geológicos: terremotos, tifones (agosto-octubre) y volcanes. La app de alertas (NERV) avisa." },
    { key: "terrorismo", level: "bajo", text: "Riesgo mínimo." },
    { key: "transporte", level: "bajo", text: "Impecable. En hora punta en Tokio hay vagones solo para mujeres por los tocamientos, que existen." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema salvo con personas: pide permiso. En Fukushima y las bases militares, respeta las vallas." },
    { key: "noche", level: "bajo", text: "Se anda de madrugada por cualquier ciudad sin pensarlo." },
  ],
  conflictAreas: ["Las zonas de retorno difícil de Fukushima siguen cerradas y valladas: lo abierto se visita, lo cerrado no.", "Aokigahara: los senderos son seguros; fuera de ellos la gente se pierde de verdad, con brújula y sin ella."],
  soloText:
    "El país ideal para ir solo: nadie te mira raro comiendo en barra (está pensado para eso), hay hoteles cápsula y business hotels para una persona, y la seguridad es total. La única dificultad es el idioma en los sitios pequeños, y se resuelve con el móvil y con paciencia. Para mujeres solas, sin ningún problema más allá de los tocamientos en trenes llenos, para los que hay vagones separados.",
  meta: vol([MAEC, PROPIO], undefined, "alta"),
};

export const politics: PoliticsSection = {
  text:
    "Democracia parlamentaria con el mismo partido gobernando casi sin interrupción desde 1955 y primeros ministros que duran lo que un yogur; para el viajero no existe. Sin huelgas, sin protestas, sin sorpresas. Lo que sí hay es una relación complicada con su propia historia (Yasukuni, Nankín, las «mujeres de consuelo») que se nota en los museos de guerra y en los titulares con China y Corea, y un debate permanente sobre el sobreturismo que ya ha cerrado callejones de Kioto a los turistas y puesto tasas en el Fuji.",
  watch: ["Sobreturismo: nuevas tasas y restricciones en Kioto, Fuji y Kamakura cada temporada", "JESTA en 2028: la primera vez que Japón pide un trámite previo a los europeos", "Terremotos y tifones: no es política, pero es lo que puede cambiar el plan"],
  avoid: [],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "Se sobrevive con el móvil sin decir una palabra, y de hecho es la única manera: Google Maps es perfecto para los trenes (te dice el vagón que te deja junto a la escalera), Google Translate con la cámara lee menús y máquinas, y la Suica en el móvil paga el metro, el konbini y las máquinas de bebidas. Necesitas datos desde el minuto uno: eSIM (Ubigi, Airalo) o el pocket wifi de toda la vida. Tarjeta en cadenas y hoteles; efectivo en templos, restaurantes pequeños, ryokan y en la mitad del Japón rural, sacado de los cajeros de 7-Eleven, que aceptan las tarjetas europeas.",
  blocked: [],
  esimProviders: ["Ubigi", "Airalo", "Mobal", "pocket wifi en el aeropuerto (15 €/día)"],
  payments:
    "Suica/ICOCA en el móvil para transporte y compras pequeñas; tarjeta en cadenas, Shinkansen y hoteles; efectivo (yenes) en templos, izakaya de barrio, buses rurales y ryokan. Los cajeros de 7-Eleven y de Correos aceptan Visa y Mastercard europeas; muchos bancos japoneses, no.",
  meta: vol([PROPIO], undefined, "alta"),
};

export const language: LanguageSection = {
  text:
    "Tres alfabetos, ninguno tuyo, y un nivel de inglés bajo fuera de hoteles y estaciones grandes: aquí tu español no sirve de nada y el inglés, de poco. Y aun así se viaja mejor que en la mitad de Europa, porque todo está pensado para que no haga falta hablar: máquinas con fotos, menús de plástico, tornos que se pagan tocando, restaurantes donde pides con una tablet y carteles de estación en japonés e inglés hasta en el pueblo más perdido. El traductor del móvil hace el resto, y la gente pone una paciencia infinita en entender tu mímica.",
  machinesText:
    "Máquinas de billetes en inglés en todas las estaciones; Shinkansen y metro con anuncios en inglés; los menús de restaurante suelen tener fotos o réplicas de plástico en el escaparate. Los buses rurales y los templos pequeños, solo en japonés: ahí, cámara del móvil.",
  survivalPhrases: [
    { es: "Perdone / gracias (sirve para todo)", local: "すみません", latin: "sumimasén" },
    { es: "Gracias", local: "ありがとうございます", latin: "arigató gozaimás" },
    { es: "¿Cuánto es?", local: "いくらですか", latin: "íkura des ka" },
    { es: "Uno (con el dedo, para pedir)", local: "ひとつ", latin: "hitótsu" },
    { es: "¿Dónde está la estación?", local: "駅はどこですか", latin: "éki wa dóko des ka" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Festival del fuego de Nozawa Onsen el día 15: un santuario ardiendo con gente encima", festivalId: "jp-nozawa-dosojin" },
    { month: 1, kind: "clima", text: "Frío seco y cielos limpios en Tokio; nieve en el norte; el mes más barato" },
    { month: 2, kind: "festival", text: "Hadaka Matsuri de Saidaiji el tercer sábado: 10.000 hombres en taparrabos", festivalId: "jp-hadaka-matsuri-saidaiji" },
    { month: 2, kind: "temporada", text: "Festival de la nieve de Sapporo; ciruelos en flor en el sur" },
    { month: 3, kind: "clima", text: "Empiezan los cerezos por el sur (Kyushu a mediados) y suben los precios" },
    { month: 4, kind: "festival", text: "Kanamara Matsuri el primer domingo, con los cerezos", festivalId: "jp-kanamara-matsuri" },
    { month: 4, kind: "festival", text: "Onbashira en Suwa (solo 2028): troncos gigantes con gente encima", festivalId: "jp-onbashira" },
    { month: 5, kind: "cierre", text: "Golden Week (29 abr - 5 may): el país entero de vacaciones, trenes y hoteles imposibles. Evítala" },
    { month: 5, kind: "temporada", text: "Abre Osorezan (día 1) y el bus de Shimokita; verde nuevo y buen tiempo" },
    { month: 6, kind: "clima", text: "Tsuyu, la estación de lluvias: dos semanas de agua diaria, salvo en Hokkaido" },
    { month: 7, kind: "festival", text: "Gran festival de Osorezan del 20 al 24: las médiums itako", festivalId: "jp-osorezan-taisai" },
    { month: 7, kind: "clima", text: "Calor húmedo de 35 °C en todo el país menos el norte; el Gion Matsuri en Kioto" },
    { month: 8, kind: "festival", text: "Nebuta de Aomori del 2 al 7", festivalId: "jp-nebuta-aomori" },
    { month: 8, kind: "cierre", text: "Obon (mediados): todos viajan a su pueblo; tifones empezando" },
    { month: 9, kind: "clima", text: "Sigue el calor y es el mes de más tifones; a finales afloja" },
    { month: 10, kind: "temporada", text: "El mes redondo: sin calor, sin lluvia, Osorezan todavía abierto (cierra el 31)" },
    { month: 11, kind: "temporada", text: "Kōyō, los arces rojos: Kioto y Kōya en su mejor momento, y llenos" },
    { month: 12, kind: "clima", text: "Frío seco, iluminaciones, y del 29 al 3 todo cerrado por Año Nuevo" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "El sitio más raro del planeta por metro cuadrado: un templo de hormigón bajo tierra, una isla acorazado abandonada, una fábrica de gas venenoso con conejos, un cráter con médiums y una zona de exclusión nuclear con parada de tren.",
    "El mejor transporte del mundo, y sin coche es mejor todavía: Shinkansen cada cinco minutos y un bus que llega a la punta del hacha a su hora exacta.",
    "Folclore vivo de verdad: santuarios ardiendo con gente encima, 10.000 hombres en taparrabos, troncos de diez toneladas por una ladera.",
    "El país más seguro donde vas a estar, y con el yen de 2026, más barato que Italia salvo el vuelo y los trenes.",
    "Otro planeta cultural, de verdad: no hay nada en Europa que se parezca a nada de esto.",
    "Da para 18 días sin repetir un solo tipo de sitio.",
  ],
  cons: [
    "No hay directo desde Barcelona: 16-18 horas con escala, 700-1.000 € y jet lag de ocho horas.",
    "Los Shinkansen son caros y el JR Pass ya no es la ganga que era: el transporte es el 40 % del presupuesto.",
    "Cero español, poco inglés y tres alfabetos: el móvil es obligatorio y sin datos estás vendido.",
    "Julio y agosto son una sauna con tifones; la Golden Week de mayo y el Obon de agosto bloquean el país.",
    "Lo mejor está en las puntas (Osorezan, Nagoro, Ikeshima): buses de tres al día y días enteros para un sitio.",
    "El sobreturismo de Kioto y el Fuji es real: hay que salirse del circuito, que es justo lo que hace esta lista.",
  ],
  text:
    "Japón es el país del que más sitios te dejas fuera por muchos días que le eches. Con catorce te llevas el oeste entero, de la catedral subterránea de Tokio a la isla acorazado de Nagasaki, pasando por la noche en el cementerio de Kōya y la isla de los conejos venenosos. Con diez puedes hacer justo lo contrario: el norte que nadie visita, con el tren de la zona de exclusión y el infierno de Osorezan. Con dieciocho, todo. Sin coche va mejor que con él, porque el país está construido alrededor del tren; la única concesión es que los sitios más bestias están en las puntas y cada uno se come un día. Ve en octubre o en abril fuera de la Golden Week, compra el vuelo con escala en cuanto puedas y reserva G-Cans y Gunkanjima antes que el hotel. Es el viaje más caro de esta lista y el que menos vas a discutir después.",
  meta: est([PROPIO]),
};
