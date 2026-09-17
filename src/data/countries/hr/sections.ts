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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Croacia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Croatia", url: "https://www.seat61.com/Croatia.htm", kind: "blog" };
const HZPP: Source = { label: "HŽ Putnički prijevoz", url: "https://www.hzpp.hr/en", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Croacia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Croatia", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "El tren croata es lento, barato y sirve para tres cosas de esta ficha: Vukovar (5-6 h con cambio en Vinkovci, 19 €), Jasenovac (1 h 45 en regional, con pocas frecuencias) y el nocturno a Split (22:06 → 06:53 en literas por el Velebit; diario del 22 de junio al 30 de agosto de 2026 y los domingos el resto del año). A Rijeka el tren tarda 4 h y el bus 2 h 30; a Pula no hay tren directo. Billetes en la app HŽPP o en taquilla, sin reserva salvo el nocturno. Liubliana–Zagreb, 2 h 30 y 9 al día, para la pareja de esta ficha.",
  corridorsIntro: "Tres corredores: el nocturno a Split, la línea de Eslavonia a Vukovar y la de Rijeka (que es mejor en bus).",
  busText:
    "Los buses son el transporte de verdad: FlixBus, Arriva y Autotrans desde la estación de Zagreb (a 20 min de la de tren en tranvía) a Rijeka (2 h 30), Pula (4-5 h), Vukovar (4 h), Kumrovec y Vojnić; Rijeka–Rab (3 h, con el ferry de Jablanac incluido en el billete) y Rijeka–Pula (2 h). Billete en getbybus.com o en la estación, con tasa de andén. En Zagreb, tranvías azules ZET (0,80-1,20 €) a todo, incluido Novi Zagreb; Bolt y Uber en Zagreb, Split y Rijeka.",
  busCompanies: ["FlixBus / Arriva / Autotrans (interurbanos)", "ZET (tranvías y buses de Zagreb)", "Bolt / Uber (Zagreb, Split, Rijeka)", "Barcos de excursión de Rab (Goli Otok) y del parque de Brijuni"],
  apps: [
    { name: "HŽPP", use: "horarios y billetes de tren, con el nocturno", url: "https://www.hzpp.hr/en" },
    { name: "GetByBus", use: "todos los buses interurbanos con billetes", url: "https://getbybus.com" },
    { name: "Google Maps", use: "funciona con ZET y los trenes; con los buses interurbanos, regular" },
    { name: "Bolt", use: "taxis en las ciudades grandes" },
  ],
  noCarVerdictText:
    "Se puede, con buses: Zagreb, Jasenovac, Vukovar y Split van en tren; Rijeka, Rab, Pula, Kumrovec y Brijuni en bus y barco. Lo que se cae sin coche es Petrova Gora (taxi desde Vojnić, 30-40 €) y los espomeniks de pueblo; y Goli Otok depende de los barcos de temporada. Con coche verías Plitvice y la costa como todos; sin coche ves el gulag, la torre y la Flor de Piedra, que es lo que se venía a ver.",
  hardWithoutCar: [
    "Petrova Gora: sin bus; taxi con espera desde Vojnić o Karlovac.",
    "Goli Otok: solo con los barcos de Rab de mayo a octubre.",
    "Ovčara: taxi de 5 km desde Vukovar.",
    "Jasenovac: dos o tres trenes al día; mira la vuelta antes de ir.",
  ],
  meta: vol([SEAT61, HZPP, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 28, note: "hostal en Zagreb; pensión en Vukovar, 35 €; Rab en agosto, 60 €" },
    { concept: "hotel-mid", eur: 75 },
    { concept: "comida-barata", eur: 6, note: "burek de 2,50 €; ćevapi de 7 €; gablec (menú obrero) de 8 €" },
    { concept: "restaurante", eur: 20, note: "konoba con pescado en la costa, 25-30 €" },
    { concept: "transporte-urbano", eur: 1 },
    { concept: "tren-intercity", eur: 19, note: "Zagreb–Vukovar; el nocturno a Split ≈ 30 € con litera; bus a Rijeka 12 €" },
    { concept: "cafe", eur: 2 },
    { concept: "supermercado", eur: 9 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar en el interior (Zagreb, Eslavonia: 55-65 € al día); la costa en julio y agosto es otro país y otros precios.",
    "Euro desde 2023 y Schengen: sin cambio ni frontera con Eslovenia.",
    "Croatia Airlines directo desde 50-80 € fuera de verano; Vueling y Ryanair a Zagreb, Split, Zadar y Pula en temporada, más baratos.",
    "Los memoriales (Jasenovac, Ovčara, el hospital) son gratis; la torre de Vukovar y Brijuni son lo caro (10 y 30 €).",
    "El gablec (el menú de mediodía de los bares de Zagreb, 8 €) y el burek son la dieta del radar.",
  ],
  meta: vol([NUMBEO, PROPIO], "Euro; estimaciones de 2026; la costa en verano, aparte"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Zagreb", airport: "ZAG", airlines: ["Croatia Airlines", "TAP", "Vueling (verano)"], lowCost: true, hours: 2, weekly: 7 },
    { to: "Split (verano)", airport: "SPU", airlines: ["Vueling", "Croatia Airlines"], lowCost: true, hours: 2.25, weekly: 4 },
    { to: "Pula (verano)", airport: "PUY", airlines: ["Ryanair"], lowCost: true, hours: 2, weekly: 2 },
  ],
  oneStop: [
    { via: "Liubliana (Vueling) y tren de 2 h 30", airlines: ["Vueling"], totalHours: 5.5 },
    { via: "Múnich o Fráncfort (Lufthansa) a Zagreb", airlines: ["Lufthansa"], totalHours: 5.5 },
    { via: "Girona–Zadar (Ryanair) y bus", airlines: ["Ryanair"], totalHours: 6 },
  ],
  tips: [
    "A Zagreb, Croatia Airlines y TAP todo el año (≈ 7/semana); Vueling y Ryanair añaden Zagreb, Split, Zadar, Dubrovnik y Pula de abril a octubre.",
    "Entrar por Liubliana con Vueling y salir por Zagreb (o al revés) es la manera natural de hacer las dos fichas.",
    "Del aeropuerto de Zagreb al centro, bus Pleso (8 €, 35 min) o bus urbano 290 + tranvía (1,20 €).",
    "Croacia encadena con Eslovenia (tren), Bosnia (bus a Sarajevo 8 h, o el tren de Ploče), Serbia (bus a Belgrado 6 h) y Montenegro (bus por la costa).",
  ],
  meta: vol([PROPIO], "Low-cost estacionales; verificar el calendario de invierno", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen (desde 2023) y euro (desde 2023). Roaming europeo. Nada que tramitar; tarjeta sanitaria europea válida. Si sales a Bosnia o Serbia en bus, pasaporte o DNI (los dos los admiten) y un sello.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea", "Nada más"],
  links: [MAEC],
  warnings: ["Minas: en Eslavonia, Lika y Kordun quedan zonas minadas señalizadas (calaveras rojas): no salirse de caminos; Petrova Gora y Vukovar están limpios en lo visitable.", "Dron en Vukovar y los memoriales: no."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Baja; el interior, tranquilísimo." },
    { key: "robos", level: "bajo", text: "Carteristas en Split y Dubrovnik con los cruceros; en Zagreb, poco." },
    { key: "timos", level: "medio", text: "Taxis sin app en la costa (usa Bolt); sobreprecios de temporada en las konobas de Split: pregunta antes." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna; el nacionalismo en Vukovar el 18 de noviembre es de bandera, no de riesgo. Minas señalizadas en zonas rurales de Eslavonia y Lika." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "bajo", text: "Trenes lentos y seguros; buses buenos; barcos de excursión con chalecos." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en Ovčara y el hospital, sin fotos a las familias." },
    { key: "noche", level: "bajo", text: "Zagreb de noche, tranquila; Split y Rijeka, de fiesta." },
  ],
  conflictAreas: [],
  soloText:
    "Fácil para ir solo: hostales en todas las ciudades, inglés bueno en menores de 50 y en toda la costa, buses que van a todo y gente del interior que te cuenta la guerra si preguntas y a veces sin preguntar. Mujeres solas: sin problemas específicos. Lo que cansa es que Vukovar y Jasenovac son duros de verdad, y que Goli Otok depende de la temporada.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria de la UE (2013), Schengen y euro (2023), gobernada por la conservadora HDZ (Plenković) casi sin interrupción desde 1990, con una memoria de la guerra de 1991-95 (la «Guerra Patria») que es religión de Estado y una relación con Serbia que va de fría a helada; el pasado ustacha se revisa poco (Jasenovac lo cuentan a medias) y los espomeniks yugoslavos se dejan caer. Para el que viaja: tranquilo, con el 18 de noviembre y el 5 de agosto (Tormenta) como días de bandera, y con Tito de souvenir en Kumrovec y de tabú en Zagreb.",
  watch: ["Petrova Gora: se cae; cada año hay menos", "El nocturno a Split: calendario de verano cambiante", "18 de noviembre en Vukovar: multitud y nacionalismo"],
  avoid: ["Hablar de Jasenovac con cifras serbias o de Tormenta con cifras croatas delante de quien no toca"],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "UE: roaming europeo. Tarjeta en casi todo (Croacia se digitalizó con el euro); efectivo para los taxis de pueblo, la tasa de andén de las estaciones de bus y algún barco de Rab. Google Maps con ZET y trenes; GetByBus para los buses. Wifi en cada café y en el tranvía.",
  blocked: [],
  esimProviders: ["Roaming UE", "Airalo (si vienes de fuera)", "SIM de A1 o Telemach (10 €)"],
  payments:
    "Tarjeta en hoteles, restaurantes, museos, tranvía y trenes; efectivo (euros) para taxis sin app, barcos de excursión y la tasa de andén.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Croata, eslavo en latino con č, ć, š, ž, đ (el mismo idioma que el serbio y el bosnio, y que no se lo digas), con inglés bueno en la costa, en Zagreb y en menores de 50; alemán e italiano en Istria y Kvarner. Los carteles de trenes y buses, en croata con inglés en las estaciones grandes; los memoriales, en inglés. Con lo que traes de Bosnia, Serbia o Montenegro se va sobrado.",
  machinesText:
    "Máquinas de tranvía y tren en inglés; buses con ventanilla; los museos con audioguía en inglés. Cero problemas.",
  survivalPhrases: [
    { es: "Hola", local: "Bok / Dobar dan", latin: "bok / dóbar dan" },
    { es: "Gracias", local: "Hvala", latin: "jvála" },
    { es: "¿Cuánto cuesta?", local: "Koliko košta?", latin: "kóliko kóshta" },
    { es: "Estación de buses", local: "Autobusni kolodvor", latin: "autóbusni kólodvor" },
    { es: "Un billete a Vukovar, por favor", local: "Jednu kartu za Vukovar, molim", latin: "yédnu kártu za Vúkovar, mólim" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festival", text: "Zvončari por los pueblos del Kvarner los fines de semana; arranca el carnaval de Rijeka", festivalId: "hr-carnaval-rijeka" },
    { month: 2, kind: "festival", text: "Gran desfile del carnaval de Rijeka el domingo antes de carnaval", festivalId: "hr-carnaval-rijeka" },
    { month: 3, kind: "temporada", text: "Jasenovac abre horario de verano el 1; Zagreb con sol y sin nadie" },
    { month: 4, kind: "temporada", text: "Primavera; Brijuni con los animales fuera; el nocturno a Split solo los domingos" },
    { month: 5, kind: "temporada", text: "Empiezan los barcos a Goli Otok; el 25, los nostálgicos en Kumrovec" },
    { month: 6, kind: "temporada", text: "El 22 arranca el nocturno diario a Split; el mes redondo para el interior" },
    { month: 7, kind: "clima", text: "35 °C en Eslavonia y la costa llena; Vukovar de mañana y a la sombra" },
    { month: 8, kind: "festival", text: "La Alka de Sinj el primer domingo; el 5, Día de la Victoria (Tormenta) con desfile en Knin; Špancirfest en Varaždin", festivalId: "hr-sinjska-alka" },
    { month: 8, kind: "festival", text: "Špancirfest, diez días de calle en Varaždin", festivalId: "hr-spancirfest" },
    { month: 9, kind: "temporada", text: "El otro mes redondo: barcos a Goli Otok todavía, costa vacía, vendimia en Eslavonia" },
    { month: 10, kind: "temporada", text: "Últimos barcos a Goli Otok; otoño en Kordun y Petrova Gora" },
    { month: 11, kind: "festival", text: "La Columna del Recuerdo de Vukovar el 18: el país en silencio", festivalId: "hr-vukovar-18-noviembre" },
    { month: 12, kind: "clima", text: "Mercado de Navidad de Zagreb (de los mejores de Europa, dicen); niebla en Eslavonia; Jasenovac cerrado" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Goli Otok: el gulag de Tito en una isla pelada, en barco de excursión.",
    "Vukovar: una torre de agua con 640 agujeros y ascensor, el hospital tal cual y Ovčara.",
    "La Flor de Piedra de Jasenovac, el campo que no fue alemán, en tren.",
    "La isla donde Tito recibía a Sofía Loren, su yate en Rijeka, su casa natal en Kumrovec, el bloque más grande de los Balcanes.",
    "DNI, euro, Schengen, roaming, buses a todo y un nocturno de verano a Split.",
    "Se encadena con Eslovenia en tren y con Bosnia, Serbia y Montenegro en bus.",
  ],
  cons: [
    "Poco tren y lento: casi todo en bus.",
    "Petrova Gora sin bus y cayéndose; el Galeb sin fecha; Goli Otok solo de mayo a octubre.",
    "La costa en verano es cara y está llena, y no es esta ficha.",
    "Los memoriales de Vukovar son duros de verdad.",
    "Croatia Airlines fuera de verano no es low-cost.",
  ],
  text:
    "Croacia es el país del radar donde todo el mundo va a la playa y nadie va a lo que importa: un gulag en una isla, una ciudad con 640 agujeros en la torre y una flor de hormigón donde estuvo el campo de exterminio. Diez días dan para Zagreb con Novi Zagreb y el túnel, Jasenovac en tren, Vukovar con la torre y Ovčara, Rijeka con los torpedos, Rab para Goli Otok y Pula con los túneles y la isla de Tito. Cinco, para Zagreb, Jasenovac y Vukovar. Catorce, para Petrova Gora en taxi, el nocturno a Split y la Alka de Sinj. Ve entre mayo y octubre por los barcos, entra por Liubliana si quieres las dos fichas, y no menciones a Tito en Zagreb ni a Jasenovac en Knin.",
  meta: est([PROPIO]),
};
