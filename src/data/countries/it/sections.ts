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
const SEAT61: Source = { label: "The Man in Seat 61 · Italy", url: "https://www.seat61.com/Italy.htm", kind: "blog" };
const TRENITALIA: Source = { label: "Trenitalia", url: "https://www.trenitalia.com", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Italia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Italy", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Aquí no necesitas coche para nada, y eso en el sur de Europa no es tan común. La dorsal de alta velocidad une Turín, Milán, Bolonia, Florencia, Roma y Nápoles con trenes cada quince minutos a 300 km/h, y encima hay dos compañías compitiendo (Trenitalia e Italo), así que los precios bajan si compras con antelación: Milán–Roma puede costarte 20 € o 90 € según cuándo reserves. Lo que baja el nivel es el regional: barato, sin reserva y a veces puntual como un reloj, a veces con cuarenta minutos de retraso y un cartel que no explica nada. Para los sitios de esta lista vas a usar los dos.",
  corridorsIntro: "Seis líneas cubren todo lo que te interesa. La de Sicilia merece un párrafo aparte: el tren se sube dentro de un barco.",
  busText:
    "Lo que el tren no cubre lo cubren los buses regionales (Cotral en el Lacio, Dolomitibus en el Véneto, SITA en el sur) y los de larga distancia de Flixbus y Marino. Funcionan bien y son baratos, pero tienen dos vicios: horarios de pueblo, con tres servicios al día, y domingos casi en blanco. La mitad de los sitios raros de Italia dependen de ese último bus, así que mira siempre la vuelta antes de la ida.",
  busCompanies: ["Cotral (Lacio)", "Flixbus", "Marino Autolinee", "Dolomitibus", "SITA Sud", "Itabus"],
  apps: [
    { name: "Trenitalia", use: "billetes de tren, incluidos regionales; el billete digital ya no hay que validarlo", url: "https://www.trenitalia.com" },
    { name: "Italo", use: "la competencia en alta velocidad: a veces la mitad de precio", url: "https://www.italotreno.com" },
    { name: "Moovit", use: "el que de verdad funciona para buses urbanos y regionales" },
    { name: "Cotral", use: "buses del Lacio: imprescindible para Bomarzo y Civita", url: "https://servizi.cotralspa.it" },
    { name: "FREENOW", use: "taxi con app en las ciudades grandes; Uber apenas existe en Italia" },
  ],
  noCarVerdictText:
    "Italia sin coche es de lo más fácil que hay: entre ciudades vas en alta velocidad y dentro de ellas, andando o en metro. El problema no son las distancias, son los últimos veinte kilómetros. Bomarzo, Civita, el Vajont o Consonno se hacen con tren más bus más caminata, y eso se lleva media jornada cada uno. Y luego está Gibellina, que es directamente el punto donde este viaje se pelea con tu norma de no conducir: o taxi negociado, o excursión, o nada.",
  hardWithoutCar: [
    "El Cretto de Gibellina: bus a Gibellina Nuova y aún 18 km. Taxi con espera o excursión desde Palermo.",
    "Craco: solo con visita guiada y sin transporte público útil desde Matera.",
    "Consonno: tren a Olginate, bus y una hora de subida a pie por pista.",
    "El Vajont: tren a Longarone y bus de Dolomitibus, con pocos servicios al día.",
    "Mamoiada y la Cerdeña interior: vuelo, bus a Nuoro y bus local. Se puede, pero es un día entero por trayecto.",
  ],
  meta: vol([SEAT61, TRENITALIA, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 55, note: "hostal o B&B; en Matera y Venecia, más" },
    { concept: "hotel-mid", eur: 110 },
    { concept: "comida-barata", eur: 10, note: "pizza al taglio, panino, tavola calda" },
    { concept: "restaurante", eur: 30, note: "trattoria con vino de la casa; en Nápoles bastante menos" },
    { concept: "transporte-urbano", eur: 1.5 },
    { concept: "tren-intercity", eur: 35, note: "Frecciarossa Roma–Nápoles comprado con margen" },
    { concept: "cafe", eur: 1.2, note: "en barra; sentado te cobran el triple y es legal" },
    { concept: "supermercado", eur: 12 },
  ],
  tips: [
    "La alta velocidad es un mercado: comprada con un mes, Milán–Roma son 20 €; el mismo día, 90. Compara siempre Italo contra Trenitalia.",
    "El café se toma de pie en la barra. Sentarte en la terraza de una plaza turística puede multiplicar la cuenta por cuatro.",
    "El «coperto» (1-3 € por persona) y el servicio vienen en la cuenta. No es un timo, es la norma.",
    "Dormir en ciudad pequeña y moverte en tren sale más barato que dormir en Roma, Florencia o Venecia.",
    "Casi todas las ciudades cobran tasa turística por noche y por persona, en efectivo y al llegar.",
  ],
  meta: vol([NUMBEO, PROPIO], "Estimaciones en euros de 2026; el norte es bastante más caro que el sur"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Roma", airport: "FCO", airlines: ["Vueling", "Ryanair", "ITA Airways", "Iberia"], lowCost: true, hours: 2, weekly: 60 },
    { to: "Milán", airport: "MXP", airlines: ["Vueling", "Ryanair", "easyJet", "Wizz Air"], lowCost: true, hours: 1.75, weekly: 70 },
    { to: "Nápoles", airport: "NAP", airlines: ["Vueling", "Ryanair", "easyJet"], lowCost: true, hours: 2.25, weekly: 25 },
    { to: "Palermo", airport: "PMO", airlines: ["Ryanair", "Vueling"], lowCost: true, hours: 2, weekly: 12 },
    { to: "Bari", airport: "BRI", airlines: ["Ryanair", "Vueling"], lowCost: true, hours: 2.25, weekly: 10 },
    { to: "Turín", airport: "TRN", airlines: ["Ryanair", "Vueling"], lowCost: true, hours: 1.6, weekly: 8 },
    { to: "Génova", airport: "GOA", airlines: ["Vueling"], lowCost: true, hours: 1.5, weekly: 5, seasonal: true },
    { to: "Trieste", airport: "TRS", airlines: ["Ryanair"], lowCost: true, hours: 2, weekly: 3, seasonal: true },
  ],
  oneStop: [],
  tips: [
    "Aquí no hay excusa: hay directos a media Italia desde El Prat, varios al día y a menudo por menos de 60 € ida y vuelta.",
    "Entrar por una ciudad y salir por otra cuesta prácticamente lo mismo: monta el viaje en línea recta y no vuelvas sobre tus pasos.",
    "Ciampino y Bérgamo son de Ryanair y están lejos del centro: suma una hora y unos 6-11 € de bus por trayecto.",
    "Para el sur profundo, mirar Bari y Brindisi antes que Nápoles: suele haber más hueco y más barato.",
  ],
  meta: vol([PROPIO], "Frecuencias aproximadas de temporada alta; comprobar antes de reservar"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale. Italia es Schengen, así que no hay control de pasaportes, no hay visado, no hay formulario ni tasa ni nada que rellenar antes de volar. Llevar el DNI en vigor y ya está; el pasaporte solo si te apetece. La tarjeta sanitaria europea (TSE) cubre la sanidad pública, y un seguro de viaje sigue siendo buena idea por el resto.",
  steps: ["DNI español en vigor", "Tarjeta Sanitaria Europea para la sanidad pública", "Nada más: ni visado, ni registro, ni tasa"],
  links: [MAEC, { label: "Tarjeta Sanitaria Europea (Seguridad Social)", url: "https://www.seg-social.es", kind: "oficial" }],
  warnings: ["Los hoteles registran tu documento con la policía: es normal, te lo van a pedir al entrar."],
  meta: vol([MAEC], "Schengen: sin trámites para españoles"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia violenta baja. La sensación de inseguridad en Nápoles o Palermo es mucho mayor que el riesgo real." },
    { key: "robos", level: "alto", text: "Aquí sí. Carteristas de nivel profesional en el metro de Roma (línea A y B), la Circumvesuviana, Termini y los alrededores del Duomo de Milán. Mochila delante y móvil guardado." },
    { key: "timos", level: "medio", text: "Taxis sin taxímetro desde aeropuertos y estaciones, «regalos» de pulseras, menús turísticos con precios inventados. Pide siempre la cuenta detallada." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna zona que evitar como país. Algunos barrios de la periferia de Nápoles o Palermo no tienen nada que te interese de noche, y ya." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo, con vigilancia visible en estaciones y monumentos." },
    { key: "transporte", level: "medio", text: "Trenes seguros; la Circumvesuviana es la excepción por los robos, no por otra cosa." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema salvo en el metro y en los mercados llenos. En las catacumbas de Palermo está prohibido fotografiar." },
    { key: "noche", level: "bajo", text: "Los centros están animados hasta tarde. La zona de Termini de madrugada es la típica que se evita sin drama." },
  ],
  conflictAreas: [],
  soloText:
    "Uno de los países más fáciles de Europa para ir solo: se come bien en la barra sin que nadie te mire raro, hay gente en la calle a todas horas y el transporte funciona. Lo único que hay que interiorizar es el tema carteristas, que no es una leyenda: son rápidos y van en grupo en los sitios obvios. Para mujeres solas, sin problemas de seguridad; sí hay más piropos y pesados en el sur que en el norte.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "Democracia parlamentaria de la UE con la inestabilidad de gobierno como deporte nacional: cambian de ejecutivo cada poco y no pasa absolutamente nada para el que viaja. Hay huelgas de transporte con cierta frecuencia (los llamados «scioperi»), se convocan con días de antelación y están reguladas, con franjas horarias garantizadas. Es lo único de la política italiana que te puede fastidiar un día de viaje.",
  watch: [
    "Huelgas de transporte: se anuncian en la web del Ministerio y en las apps; suelen ser viernes",
    "Tasas turísticas municipales al alza y entradas con reserva obligatoria en cada vez más sitios",
  ],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Todo funciona y nada está bloqueado: eres ciudadano de la UE con tu tarifa de datos de siempre, sin eSIM, sin roaming y sin pensar. Google Maps va fino, incluido el transporte público de las ciudades grandes, aunque para buses regionales Moovit acierta más. El Wi-Fi de hoteles y bares es correcto sin más. Lo único que sigue siendo del siglo pasado son algunas taquillas y museos pequeños que solo aceptan efectivo.",
  blocked: [],
  esimProviders: ["No hace falta: roaming de la UE incluido en tu tarifa española"],
  payments:
    "Tarjeta y móvil en casi todo: por ley los comercios están obligados a aceptar pago electrónico. Aun así, lleva 40-50 € en efectivo para la tasa turística del hotel, algún bar de barrio, mercados, entradas de sitios pequeños y los taxis que «tienen el datáfono estropeado».",
  meta: est([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Italiano y español se parecen lo justo para que te entiendas a la primera y lo justo para meter la pata con los falsos amigos. Se lee todo sin esfuerzo, se pregunta en español despacio y la gente colabora. El inglés es flojo comparado con el norte de Europa (mejor en Milán y en hoteles, casi inexistente en un bar de Basilicata), pero da igual: es de los pocos países donde tu idioma te sirve de verdad. Alfabeto latino, cero problemas de lectura.",
  machinesText:
    "Las máquinas de Trenitalia tienen español entre los idiomas, los tornos del metro son contactless y las apps están traducidas. Los carteles de estaciones se entienden sin saber italiano; los avisos de retrasos y cambios de andén, por megafonía y solo en italiano, es donde te vas a perder algo.",
  survivalPhrases: [
    { es: "Un café (en la barra)", local: "Un caffè, al banco" },
    { es: "La cuenta, por favor", local: "Il conto, per favore" },
    { es: "¿Qué andén?", local: "Quale binario?" },
    { es: "Billete de ida y vuelta", local: "Biglietto andata e ritorno" },
    { es: "Está cerrado", local: "È chiuso", latin: "lo vas a oír mucho entre las 13:00 y las 16:00" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Mamuthones de Mamoiada el 17 de enero, con hogueras de San Antonio", festivalId: "it-mamoiada-mamuthones" },
    { month: 1, kind: "temporada", text: "Mes más barato del año y museos vacíos; mucho frío en el norte" },
    { month: 2, kind: "festival", text: "Batalla de las Naranjas de Ivrea en carnaval", festivalId: "it-ivrea-battaglia-arance" },
    { month: 3, kind: "clima", text: "Empieza a apetecer el sur; el norte todavía con niebla" },
    { month: 4, kind: "temporada", text: "Abre el Jardín de los Tarots y arranca la temporada de casi todo; Semana Santa llena el país" },
    { month: 5, kind: "festival", text: "Serpari de Cocullo el 1 de mayo", festivalId: "it-cocullo-serpari" },
    { month: 5, kind: "festival", text: "Corsa dei Ceri de Gubbio el 15 de mayo", festivalId: "it-gubbio-corsa-ceri" },
    { month: 6, kind: "clima", text: "Ya hace calor en el sur; los precios de vuelo empiezan a dispararse" },
    { month: 7, kind: "festival", text: "Palio de Siena el 2 de julio (y el 16 de agosto)", festivalId: "it-siena-palio" },
    { month: 7, kind: "clima", text: "40 °C en Roma y en el sur; Herculano a mediodía es una sartén" },
    { month: 8, kind: "cierre", text: "Ferragosto: media Italia cierra la segunda semana y la otra media está en la playa" },
    { month: 9, kind: "temporada", text: "El mejor mes: buen tiempo, menos gente y el mar todavía caliente" },
    { month: 10, kind: "temporada", text: "Luz de otoño y Staglieno con niebla; el Jardín de los Tarots cierra el día 15" },
    { month: 11, kind: "clima", text: "Lluvia y acqua alta en Venecia, pero ciudades vacías y precios de risa" },
    { month: 12, kind: "festival", text: "Krampus por el valle del Pusteria los días 5 y 6", festivalId: "it-krampus-alto-adige" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Sin coche es casi tramposo: alta velocidad cada quince minutos entre las ciudades grandes y ciudades que se andan enteras.",
    "Vuelo directo y barato desde BCN a ocho ciudades distintas: puedes entrar por Turín y salir por Bari sin pagar de más.",
    "Sitios circo de primerísima: los monstruos de Bomarzo, ocho mil momias vestidas en Palermo, un pueblo enterrado bajo hormigón blanco, un culto a calaveras adoptadas en Nápoles.",
    "El calendario de festivales raros es el mejor de Europa: naranjas a la cara, santos cubiertos de serpientes vivas, demonios alpinos con cencerros.",
    "Se habla en español y te entienden. Ningún alfabeto que descifrar, ninguna app que instalar, roaming incluido.",
    "Puedes estirarlo a 15 días sin rellenar: norte industrial, catástrofes del siglo XX y sur troglodita son tres viajes distintos.",
  ],
  cons: [
    "No es barato: el norte cuesta lo que España pero un 30 % más, y el alojamiento en Roma, Venecia o Matera se dispara.",
    "Turismo masivo del bueno: en julio y agosto los sitios conocidos son insoportables y los vuelos se ponen por las nubes.",
    "Los últimos veinte kilómetros son siempre el problema: bus de pueblo con tres servicios al día y domingos en blanco.",
    "Gibellina y Craco, que son de lo mejor del país para nosotros, obligan a taxi o excursión. Ahí tu norma de no conducir duele.",
    "Carteristas de verdad en el metro de Roma y la Circumvesuviana: no es leyenda urbana.",
    "Culturalmente es casi España: no vas a tener la sensación de haber aterrizado en otro planeta.",
  ],
  text:
    "Italia no es un país exótico, pero tiene más mandanga rara por kilómetro cuadrado que casi cualquier otro sitio de Europa, y encima se recorre entera sin tocar un volante. Aquí hay material para dos semanas largas sin rellenar un solo día: el norte industrial y sus catástrofes, Roma con el Lacio de los monstruos, Nápoles entero y el sur troglodita son tres viajes distintos pegados. Con doce te llevas el sur turbio completo (y el cruce a Sicilia en el tren que se sube a un barco), pero te dejas fuera el norte. Ve en mayo o en septiembre-octubre, evita agosto como si quemara y monta el viaje en línea recta entrando por una ciudad y saliendo por otra. La única pelea real es Gibellina: o pagas un taxi, o te quedas sin ver una de las cosas más bestias del continente.",
  meta: est([PROPIO]),
};
