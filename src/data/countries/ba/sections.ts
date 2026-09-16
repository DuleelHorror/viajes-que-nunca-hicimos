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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=BosniayHerzegovina", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Sarajevo–Mostar", url: "https://www.seat61.com/trains-and-routes/sarajevo-to-mostar-by-train.htm", kind: "blog" };
const ZFBH: Source = { label: "ŽFBH", url: "https://www.zfbh.ba/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Bosnia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Bosnia+And+Herzegovina", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Bosnia tiene un tren que importa y es de los buenos: el Talgo Sarajevo–Mostar, dos veces al día, dos horas por el cañón del Neretva con paradas en Konjic (el búnker de Tito) y Jablanica (el puente volado), por 6 €. Es el tramo más bonito de los Balcanes después del Belgrado–Bar, en un tren español con aire acondicionado y cafetería. El resto de la red (a Banja Luka, a Tuzla, a Croacia) va a trompicones, con uno al día o ninguno, y se deja en paz. Billetes en la taquilla de la estación de Sarajevo (pegada a la de buses) el mismo día.",
  corridorsIntro: "Un solo corredor de tren, y merece la ficha entera. Lo demás es bus.",
  busText:
    "El país va en bus, y el bus refleja el país: Sarajevo tiene dos estaciones según la entidad (la central para la Federación: Mostar, Travnik, Zenica, Croacia; y Lukavica, en Sarajevo Este, para la Republika Srpska: Srebrenica, Foča, Tjentište, Trebinje, Belgrado). Mostar tiene también dos, una a cada lado. Los buses son viejos, van llenos, se paga tasa de andén y el conductor para donde le pidas si sabes decirlo (Tjentište, Potočari). Los horarios cambian con la temporada: confirmar en ventanilla el día antes es obligatorio.",
  busCompanies: ["Centrotrans (Federación, desde la estación central de Sarajevo)", "Buses de Lukavica (Republika Srpska: Srebrenica, Trebinje)", "Buses urbanos de Mostar a Blagaj", "Agencia oficial del búnker de Tito en Konjic"],
  apps: [
    { name: "BusTicket4.me / GetByBus", use: "horarios y billetes de buses interurbanos, con margen de error", url: "https://getbybus.com" },
    { name: "ŽFBH", use: "horarios del Talgo; billetes en taquilla", url: "https://www.zfbh.ba/en/" },
    { name: "Google Maps", use: "funciona a medias con los tranvías de Sarajevo; para buses interurbanos, no" },
    { name: "Google Translate", use: "bosnio en latino; casi todo se entiende con inglés en Sarajevo y Mostar" },
  ],
  noCarVerdictText:
    "Se puede, y la parte que importa (Sarajevo, el Talgo con el búnker y Jablanica, Mostar y Blagaj) se hace sin pensar. Srebrenica va en bus con noche y es viable. Lo que cuesta es el este profundo: Tjentište es bajarse de un bus en mitad de un parque nacional y esperar al siguiente, y los espomeniks del norte (Kozara, Garavice) quedan fuera. Con coche irías a más hormigón; sin coche vas al mejor y viajas en el Talgo por el cañón, que es lo que hay que hacer.",
  hardWithoutCar: [
    "Tjentište: bus de paso, 3-4 al día, y hotel solo en temporada. Apuesta de horarios.",
    "Kozara y los espomeniks del norte: bus a Prijedor y taxi; una jornada entera.",
    "El búnker de Tito: solo con la agencia desde Konjic, reservando; no se puede ir por libre.",
    "Srebrenica: 2-3 buses al día desde Lukavica; sin noche es justo.",
  ],
  meta: vol([SEAT61, ZFBH, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 15, note: "hostal en Sarajevo o Mostar; pensión en Srebrenica, 20 €" },
    { concept: "hotel-mid", eur: 45 },
    { concept: "comida-barata", eur: 4, note: "ćevapi con somun y cebolla, 4 €; burek al peso, 2 €" },
    { concept: "restaurante", eur: 12, note: "en una aščinica con guisos, o begova čorba" },
    { concept: "transporte-urbano", eur: 0.9 },
    { concept: "tren-intercity", eur: 6, note: "el Talgo Sarajevo–Mostar entero" },
    { concept: "cafe", eur: 1.5, note: "café bosnio en džezva con lokum" },
    { concept: "supermercado", eur: 7 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: 40-45 € al día con todo, de lo más barato del radar.",
    "El marco convertible (KM) va fijo a 1,95583 por euro (era el marco alemán): cuentas fáciles. No se cambia fuera: saca lo justo en cajeros de bancos.",
    "El búnker de Tito (21 €) y el teleférico de Trebević (10 €) son los gastos; el resto es gratis o vale 2-8 €.",
    "Ryanair desde Girona a Sarajevo: 50-150 €. Desde El Prat, con escala, el doble.",
    "Muchos sitios aceptan euros en efectivo (a 2 por 1 KM), pero el cambio te lo dan en marcos.",
  ],
  meta: vol([NUMBEO, PROPIO], "KM fijo a 1,95583 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Sarajevo (desde Girona)", airport: "SJJ", airlines: ["Ryanair"], lowCost: true, hours: 2.3, weekly: 3 },
  ],
  oneStop: [
    { via: "Viena, Zagreb o Múnich", airlines: ["Austrian", "Croatia Airlines", "Lufthansa"], totalHours: 5.5 },
    { via: "Dubrovnik (Vueling directo) y bus de 3 h a Mostar", airlines: ["Vueling"], totalHours: 6 },
  ],
  tips: [
    "El directo es desde Girona, no desde El Prat: bus de Barcelona a Girona aeropuerto (1 h 15) y Ryanair. Es la mejor opción de largo.",
    "Salir por Dubrovnik (Vueling directo a BCN) desde Mostar o Trebinje (3 h y 40 min de bus) evita volver a Sarajevo.",
    "Mostar tiene aeropuerto con vuelos raros; no cuentes con él.",
    "Sarajevo encadena con Belgrado (bus 7 h desde Lukavica) y Split/Zagreb (bus): la ficha se combina con Serbia.",
  ],
  meta: vol([PROPIO], "Ryanair Girona–Sarajevo en 2026; la frecuencia cambia por temporada", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale hasta 30 días (más allá, pasaporte); Bosnia no es UE ni Schengen y en el aeropuerto sellan si llevas pasaporte. Lleva pasaporte igual: si sales a Croacia o Serbia en bus, la frontera es más rápida y los conductores lo prefieren. Registro policial: lo hacen los alojamientos. Sin roaming europeo.",
  steps: ["DNI en vigor (30 días) o pasaporte", "Nada que tramitar", "Registro: lo hace el hotel u hostal", "Seguro de viaje: fuera de la UE, sin tarjeta sanitaria"],
  links: [MAEC],
  warnings: ["Minas: quedan unas 180.000 en el país, señalizadas con calaveras amarillas o cinta roja. En Tjentište, Trebević y cualquier monte, no salgas de los senderos marcados. En serio.", "Sin roaming europeo: SIM local o eSIM."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; Sarajevo y Mostar son tranquilas." },
    { key: "robos", level: "bajo", text: "Carteristas en Baščaršija en verano; poco más." },
    { key: "timos", level: "bajo", text: "Taxis sin taxímetro en el aeropuerto y en Mostar: pide que lo pongan o pacta. Los saltadores del puente cobran propina, no timo." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna activa. La tensión política (Republika Srpska) no se ve en la calle." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Buses viejos por carreteras de montaña; el Talgo, perfecto. Cinturón cuando lo haya." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema en general; en Potočari y en los cementerios, respeto; en la torre del francotirador y el búnker, sin flash ni drones." },
    { key: "noche", level: "bajo", text: "Sarajevo de noche es un paseo; Mostar oeste, con los bares, igual." },
  ],
  conflictAreas: ["Minas antipersona en montes y prados fuera de los senderos: Trebević por dentro de la pista, Tjentište por el camino, y nunca por atajos."],
  soloText:
    "Fácil y emocionalmente intenso para ir solo: los hostales de Sarajevo tienen guías que vivieron el asedio de niños y lo cuentan en tours gratuitos, y la gente habla inglés y te cuenta su guerra si preguntas (y si no). Mujeres solas: sin problemas específicos. Lo que cansa es el peso de lo que se ve: mete a Blagaj y a Trebinje para respirar.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "El Estado más complicado de Europa: dos entidades (la Federación bosniaco-croata y la Republika Srpska), diez cantones, tres presidentes rotatorios y un Alto Representante internacional con poder de veto, todo pactado en Dayton en 1995 para parar la guerra y congelado desde entonces. Milorad Dodik, el líder serbobosnio, amenaza con la secesión cada año; en 2025 lo condenaron e inhabilitaron y la crisis sigue. Para el que viaja, no se nota más que en las banderas (serbias al este, bosnias al centro, croatas al oeste) y en las dos estaciones de bus.",
  watch: ["Crisis de la Republika Srpska: retórica fuerte, calle tranquila", "El 11 de julio en Potočari: multitud, políticos y emoción; ir con respeto", "Negacionismo del genocidio en la RS: no discutas con nadie, escucha"],
  avoid: [],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Fuera de la UE: sin roaming. SIM de BH Telecom, m:tel o HT Eronet (según la entidad, que hasta las telecos van por etnias) en cualquier quiosco por 5-10 €, o eSIM. Cobertura buena en ciudades y en el cañón del Neretva; nada en Sutjeska. Google Maps funciona para andar; para buses, ventanilla. Tarjeta en hoteles y restaurantes de Sarajevo y Mostar; marcos en efectivo para buses, taxis, ćevapi y todo lo de fuera.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local BH Telecom / m:tel (5-10 €)"],
  payments:
    "Tarjeta en alojamientos y restaurantes de ciudad; efectivo (KM) en buses, taquillas, tasas de andén, mercados, museos pequeños y todo lo rural. Cajeros de Raiffeisen, UniCredit y Sparkasse con tarjeta europea; euros en efectivo aceptados en muchos sitios a 2 por 1.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Bosnio, serbio y croata, que son la misma lengua con tres nombres (y dos alfabetos: latino en la Federación, cirílico y latino en la Republika Srpska). Inglés muy bueno entre jóvenes y en cualquier hostal, restaurante o taxi de Sarajevo y Mostar; en Srebrenica y Tjentište, menos. Alemán entre los que volvieron del exilio. De los países del radar con menos barrera.",
  machinesText:
    "La taquilla del Talgo es de persona y en inglés básico; las estaciones de bus, ventanilla con papelito. El tranvía de Sarajevo, billete en quiosco (más barato que al conductor) y a validar. Menús en inglés en todo lo turístico.",
  survivalPhrases: [
    { es: "Hola", local: "Zdravo / Dobar dan", latin: "zdravo / dobar dan" },
    { es: "Gracias", local: "Hvala", latin: "jvala" },
    { es: "¿Cuánto cuesta?", local: "Koliko košta?", latin: "kóliko koshta" },
    { es: "Estación de tren / de bus", local: "Željeznička / Autobuska stanica", latin: "zhelyezníchka / autobuska stánitsa" },
    { es: "Pare en ..., por favor", local: "Stanite u ..., molim", latin: "stánite u ..., molim" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "Nieve en Sarajevo (fue sede olímpica por algo); la pista de bobsleigh, bajo nieve y más rara" },
    { month: 2, kind: "festival", text: "Sarajevo Winter, festival de artes de un mes; los cafés, llenos" },
    { month: 3, kind: "clima", text: "Deshielo; el Neretva a tope de agua para el Talgo" },
    { month: 4, kind: "temporada", text: "Primavera; abre el teleférico de Trebević a horario largo y el búnker no cierra por nieve" },
    { month: 5, kind: "temporada", text: "El mejor mes: verde, sin calor en Mostar y sin masas" },
    { month: 6, kind: "festival", text: "Ajvatovica el último domingo: la romería musulmana a caballo", festivalId: "ba-ajvatovica" },
    { month: 7, kind: "festival", text: "Marcha de la Paz del 8 al 10 y entierro colectivo en Potočari el 11", festivalId: "ba-mars-mira-srebrenica" },
    { month: 7, kind: "festival", text: "Saltos del puente de Mostar, último fin de semana", festivalId: "ba-mostar-saltos" },
    { month: 7, kind: "clima", text: "Mostar a 40 °C (es de lo más caluroso de Europa); Sarajevo, 30" },
    { month: 8, kind: "festival", text: "Sarajevo Film Festival a mediados de mes: alfombra roja y terrazas", festivalId: "ba-sarajevo-film-festival" },
    { month: 9, kind: "temporada", text: "El otro mes redondo: sin calor, Tjentište accesible, uva en Trebinje" },
    { month: 10, kind: "temporada", text: "Otoño en el cañón del Neretva; el hotel de Tjentište cierra a final de mes" },
    { month: 11, kind: "clima", text: "Lluvia y niebla en Sarajevo; buen mes para los museos y los ćevapi" },
    { month: 12, kind: "clima", text: "Frío, mercadillo y esquí en Jahorina y Bjelašnica, las pistas olímpicas" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "La guerra más reciente de Europa antes de Ucrania, contada en el sitio: el túnel, la Sniper Alley, la torre del francotirador, Potočari.",
    "El búnker nuclear de Tito, el mayor de Yugoslavia, en una parada de tren.",
    "Una pista olímpica de bobsleigh abandonada con teleférico, y los espomeniks de Tjentište y Mostar.",
    "El Talgo del Neretva: dos horas de cañón por 6 €.",
    "De lo más barato del radar, DNI, buen inglés y gente que te cuenta su historia.",
    "Poco turismo fuera del puente de Mostar y Baščaršija.",
  ],
  cons: [
    "El directo es desde Girona, no desde El Prat.",
    "Sin roaming, sin euro (aunque el marco va fijo) y sin trenes salvo uno.",
    "Dos estaciones de bus por ciudad según la etnia, y horarios que cambian sin avisar.",
    "Tjentište y el norte sin coche son apuestas de horario.",
    "Minas fuera de los senderos: de verdad.",
    "Es duro: Srebrenica y el asedio pesan.",
  ],
  text:
    "Bosnia es el país donde la historia oscura tiene treinta años y te la cuenta el que la vivió. Diez días dan para Sarajevo (el túnel, la pista olímpica, la Sniper Alley, los dos museos pequeños que lo explican todo), el bus a Srebrenica con noche, el Talgo por el cañón parando en el búnker de Tito y el puente volado, y Mostar con el puente, la torre del francotirador y el cementerio partisano. Catorce, para añadir el espomenik de Tjentište con noche en el valle y salir por Trebinje a Dubrovnik. Cinco, para Sarajevo, el búnker y Mostar. Ve en mayo o en septiembre, entra por Girona con Ryanair, sal por Dubrovnik con Vueling, y no te salgas nunca del sendero.",
  meta: est([PROPIO]),
};
