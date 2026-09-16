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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Montenegro", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Belgrade–Bar", url: "https://www.seat61.com/belgrade-to-bar-railway.htm", kind: "blog" };
const ZPCG: Source = { label: "ŽPCG", url: "https://zpcg.me/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Montenegro", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Montenegro", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Montenegro tiene dos líneas y las dos sirven: la del Bar, que es la mitad montenegrina del Belgrado–Bar (Bar–Podgorica en 1 h por 2,40 €, diez al día; Podgorica–Kolašin en 1 h 30 por el viaducto de Mala Rijeka y 40 túneles, por 5 €), y el ramal a Nikšić con trenes eléctricos de 2013 (1 h, 2,50 €). Todo en taquilla, con horarios en zpcg.me que cambian por temporada. El nocturno de Belgrado (21,60 € desde Podgorica) se compra con 60 días. Es de los pocos países del radar donde el tren regional es un sitio circo en sí.",
  corridorsIntro: "Dos corredores: la línea del Bar con el viaducto, y el ramal a Nikšić. La costa y la montaña, en bus.",
  busText:
    "Los buses cubren la costa (Kotor–Budva–Bar cada hora en verano), Cetinje (cada hora desde Podgorica, 40 min, pasando por Barutana), la serpentina Cetinje–Kotor y el Durmitor (Podgorica–Žabljak 2-3 al día por el puente del Tara). Salen de estaciones con ventanilla y tasa de andén, con billete en busticket4.me. Los taxis de Podgorica son baratos (2-4 €); en la costa, pactar. El Lovćen, en taxi desde Cetinje o con el teleférico de Kotor (abril-octubre).",
  busCompanies: ["Buses interurbanos desde las estaciones de Podgorica, Kotor y Bar (busticket4.me)", "Blue Line (buses de la bahía de Kotor)", "Teleférico Kotor–Lovćen (abril-octubre)", "Taxis de Cetinje para el mausoleo"],
  apps: [
    { name: "BusTicket4.me", use: "horarios y billetes de todos los buses del país", url: "https://busticket4.me" },
    { name: "ŽPCG", use: "horarios de tren; billetes en taquilla", url: "https://zpcg.me/en/" },
    { name: "Google Maps", use: "para andar; con buses interurbanos, regular" },
    { name: "Google Translate", use: "montenegrino (serbio) en latino y cirílico; el inglés de la costa es bueno" },
  ],
  noCarVerdictText:
    "Se puede, y con más tren del que uno espera: Podgorica, Nikšić, Kolašin y Bar van en tren; Cetinje, Kotor y la costa, en bus cada hora; Barutana es bajarse del bus; el Lovćen, un taxi de 13 km o el teleférico. Lo que cuesta es la montaña profunda (el Durmitor con dos buses al día, Biogradska Gora, Prokletije) y los espomeniks de pueblos sin bus. Con coche verías la carretera de las 25 curvas conduciendo; sin coche la ves sentado a la derecha, que es mejor.",
  hardWithoutCar: [
    "El Lovćen: taxi de 13 km desde Cetinje con espera (25-30 €) o teleférico de Kotor y 4 km a pie.",
    "El Durmitor: 2-3 buses al día a Žabljak; en invierno, uno.",
    "Mamula: solo como cliente del hotel o desde el barco.",
    "Los espomeniks de Berane, Pljevlja o Grahovo: sin bus útil; fuera de la ficha.",
  ],
  meta: vol([SEAT61, ZPCG, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 18, note: "hostal en Podgorica; pensión en Kolašin o Cetinje, 25 €; Kotor en agosto, el doble" },
    { concept: "hotel-mid", eur: 55 },
    { concept: "comida-barata", eur: 4, note: "burek de 1,50 €; ćevapi o pljeskavica, 4-5 €" },
    { concept: "restaurante", eur: 14, note: "pescado en la costa, 20 €; njeguški pršut y queso en el interior" },
    { concept: "transporte-urbano", eur: 0.9 },
    { concept: "tren-intercity", eur: 5, note: "Podgorica–Kolašin; a Bar, 2,40 €; a Belgrado, 21,60" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 7 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 45-50 € al día en el interior; la costa en agosto, el doble.",
    "Euro sin ser de la eurozona: sin cambio, pero los cajeros de la costa cobran 3-5 € por retirada; los de Podgorica, menos.",
    "Vueling a Tivat en verano desde 60 €; el resto del año, Dubrovnik (Vueling) y bus de 2 h, o escala.",
    "El tren es casi gratis (2,40 € Bar–Podgorica): úsalo para todo lo que esté en la línea.",
    "Kotor cobra 15 € por las murallas y los cruceros suben todo: come y duerme fuera de las murallas.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026; la costa dobla en agosto"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Tivat", airport: "TIV", airlines: ["Vueling"], lowCost: true, hours: 2.5, weekly: 2 },
  ],
  oneStop: [
    { via: "Dubrovnik (Vueling) y bus de 2 h a Kotor", airlines: ["Vueling"], totalHours: 5 },
    { via: "Belgrado (Air Serbia) a Podgorica", airlines: ["Air Serbia"], totalHours: 5.5 },
    { via: "Viena (Austrian) a Podgorica", airlines: ["Austrian"], totalHours: 6 },
  ],
  tips: [
    "El directo a Tivat es de Vueling y solo de julio a septiembre: fuera de eso, Dubrovnik con Vueling y bus de 2 h a Kotor es la entrada natural.",
    "Podgorica tiene vuelos low-cost a Barcelona anunciados por temporadas (Ryanair/Wizz cambian): mira la semana concreta.",
    "Entrar por Belgrado y bajar en el tren de Tito es la mejor manera de llegar a Montenegro, y encadena con la ficha de Serbia.",
    "Bar tiene ferry a Bari (Italia) varias veces por semana: salida hacia la ficha de Italia sin avión.",
  ],
  meta: vol([PROPIO], "Vueling Tivat solo en verano; Podgorica con low-cost variable", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale hasta 30 días; con pasaporte, 90. Montenegro no es UE (candidato avanzado, entrada prevista hacia 2028) ni Schengen, pero usa el euro. Registro policial en 24 h: lo hacen hoteles y hostales (guarda el papel). Sin roaming europeo, aunque Montenegro negocia entrar en el roaming de la UE.",
  steps: ["DNI en vigor (30 días) o pasaporte (90)", "Nada que tramitar", "Registro: lo hace el alojamiento", "Seguro de viaje: fuera de la UE"],
  links: [MAEC],
  warnings: ["Si vienes de Serbia en el tren, la frontera es de madrugada con pasaporte o DNI; el DNI vale en los dos, pero el cómputo de días es distinto.", "Drones en Mamula, las bases y el Lovćen (parque nacional): permiso."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; los ajustes de cuentas entre clanes de Kotor y Bar no van con turistas." },
    { key: "robos", level: "bajo", text: "Carteristas en Kotor con los cruceros y en Budva de noche. Poco." },
    { key: "timos", level: "medio", text: "Taxis de la costa sin taxímetro y cajeros con comisión de 5 €: pacta y usa los de Podgorica. Los restaurantes de Kotor con precios «de mercado» para el pescado: pregunta." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Buses por carreteras de montaña sin quitamiedos (la serpentina, el Tara); el tren, seguro." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; Mamula y las bases, desde lejos." },
    { key: "noche", level: "bajo", text: "Podgorica y Kotor de noche, tranquilas; Budva, de fiesta." },
  ],
  conflictAreas: [],
  soloText:
    "Fácil para ir solo: hostales en Podgorica, Kotor y Žabljak, inglés bueno en la costa y suficiente en el interior, y gente del interior que te da pršut sin preguntar. Mujeres solas: sin problemas específicos. Lo que cansa es el DNI de 30 días si ibas a quedarte, y que Podgorica no tiene mucho más que hormigón (que es lo que veníamos a ver).",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la OTAN (2017) y candidata a la UE más avanzada (entrada prevista para 2028), independiente de Serbia desde 2006 por 2.000 votos, con una mitad del país que se siente serbia y una Iglesia serbia que mueve masas. Tras 30 años de Đukanović, gobiernan desde 2023 coaliciones proeuropeas frágiles con partidos proserbios dentro; el crimen organizado de la costa (clanes de Kotor) es el problema real. Para el que viaja: tranquilo, con euros y con dos banderas en cada pueblo.",
  watch: ["La entrada en la UE (2028) y lo que cambie en el roaming y el DNI", "Tensión identitaria serbia-montenegrina en fiestas nacionales, sin efecto en el viajero", "Mamula y el Fjord: el país vende su patrimonio a hoteles; lo que ves puede cerrarse"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Fuera de la UE: sin roaming (en negociación). SIM de Telekom, One o M:tel por 5-10 € en cualquier quiosco, o eSIM. Cobertura buena en la costa y Podgorica; en el Durmitor y el cañón del Tara, a ratos. Google Maps para andar; busticket4.me para buses. Tarjeta en hoteles y restaurantes; euros en efectivo para buses, taquillas de tren, tasas de andén y pueblos.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Telekom / One / M:tel (5-10 €)"],
  payments:
    "Tarjeta en hoteles, restaurantes y supermercados; efectivo (euros) en buses, trenes, mercados, taxis y pensiones de montaña. Cajeros de la costa con comisión de 3-5 €; los de Podgorica, mejor.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Montenegrino, que es serbio con dos letras más y mucha política, en latino y cirílico (la costa en latino, el interior mezcla). Inglés bueno en la costa y en los jóvenes; italiano en la Boka; ruso en Budva por los turistas. Los carteles de trenes y buses, en latino. Con el serbio de la ficha de al lado, se va.",
  machinesText:
    "No hay máquinas: taquilla de tren y ventanilla de bus con el destino; los museos con audioguía en inglés en Cetinje. Menús en inglés en la costa.",
  survivalPhrases: [
    { es: "Hola", local: "Zdravo / Dobar dan", latin: "zdravo / dobar dan" },
    { es: "Gracias", local: "Hvala", latin: "jvala" },
    { es: "¿Cuánto cuesta?", local: "Koliko košta?", latin: "kóliko koshta" },
    { es: "Estación de tren", local: "Željeznička stanica", latin: "zhelyezníchka stánitsa" },
    { es: "Pare en Barutana, por favor", local: "Stanite na Barutani, molim", latin: "stánite na Barutáni, molim" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festivo", text: "Navidad ortodoxa el 7 con hogueras de roble (badnjak) en cada plaza" },
    { month: 2, kind: "festival", text: "La Mimosa en Herceg Novi los fines de semana y el carnaval de Kotor antes de cuaresma", festivalId: "me-mimosa-herceg-novi" },
    { month: 2, kind: "festival", text: "Carnaval de invierno de Kotor, con la quema del Karneval", festivalId: "me-carnaval-kotor" },
    { month: 3, kind: "clima", text: "Lluvia en la costa (Kotor es de lo más lluvioso de Europa) y nieve en Žabljak" },
    { month: 4, kind: "temporada", text: "Abre el teleférico de Kotor al Lovćen; la bahía sin cruceros grandes aún" },
    { month: 5, kind: "festival", text: "Independencia el 21 y 22: banderas, conciertos y todo cerrado", festivalId: "me-independencia-21-mayo" },
    { month: 6, kind: "temporada", text: "El mes redondo: 27 grados, el Durmitor abierto, la costa sin masas" },
    { month: 7, kind: "temporada", text: "Vueling a Tivat en marcha; Budva a reventar; el interior perfecto" },
    { month: 8, kind: "festival", text: "Boka Night en Kotor el 22: barcas iluminadas y fuegos", festivalId: "me-boka-night" },
    { month: 8, kind: "clima", text: "35 °C en Podgorica (la capital más calurosa de los Balcanes); la costa llena" },
    { month: 9, kind: "temporada", text: "El otro mes redondo: la costa vacía, el Tara con agua, último Vueling a Tivat" },
    { month: 10, kind: "temporada", text: "Cierra el teleférico del Lovćen a final de mes; primera nieve en el Durmitor" },
    { month: 11, kind: "clima", text: "Lluvia torrencial en la Boka; Podgorica gris; el tren, igual" },
    { month: 12, kind: "clima", text: "Nieve en Kolašin y Žabljak (esquí); la costa a 12 °C y vacía" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "El brutalismo yugoslavo que nadie visita: Blok 5, el hotel de piedra de río, el Spomen-dom de Kolašin, Barutana, Trebjesa.",
    "El viaducto de tren más alto de Europa en un regional de 5 €, y el final del tren de Tito en el Adriático.",
    "Un mausoleo de granito a 1.657 metros, una capital de reino de opereta con embajadas vacías y una ciudad en ruinas por un terremoto.",
    "Euro, DNI (30 días) y de lo más barato del radar fuera de la costa.",
    "Se encadena con Serbia por el tren de Tito y con Italia por el ferry de Bar.",
    "Naturaleza gorda (el Tara, el Durmitor, la bahía) entre espomenik y espomenik.",
  ],
  cons: [
    "El directo desde BCN (Vueling a Tivat) solo en verano; el resto, Dubrovnik y bus o escala.",
    "El hotel Fjord ya no existe y Mamula es un hotel de lujo: dos iconos perdidos.",
    "DNI de 30 días y sin roaming.",
    "La costa en agosto es cara y está llena; Kotor con cruceros es otra ciudad.",
    "La montaña profunda va con dos buses al día.",
  ],
  text:
    "Montenegro es el país del radar donde el tren regional cruza el viaducto más alto de Europa por 5 € y donde nadie mira el hormigón de la capital. Nueve días dan para Podgorica con Blok 5 y el hotel de piedra de río, el bus a Cetinje bajándose en Barutana, el mausoleo del Lovćen, Kotor con el solar del Fjord y la serpentina, el tren a Nikšić para el espomenik de Trebjesa y el regional por Mala Rijeka hasta el ayuntamiento de cristales de Kolašin. Cinco, para Kotor, Cetinje y Titograd. Trece, para entrar en el tren de Tito desde Belgrado, subir al Durmitor por el puente del Tara y acabar en la ciudad del terremoto de Bar. Ve en junio o en septiembre, siéntate a la derecha subiendo la serpentina y a la izquierda subiendo el tren, y cuenta los 30 días del DNI.",
  meta: est([PROPIO]),
};
