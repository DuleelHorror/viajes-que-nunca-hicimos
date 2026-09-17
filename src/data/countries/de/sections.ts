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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Alemania", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Germany", url: "https://www.seat61.com/Germany.htm", kind: "blog" };
const DB: Source = { label: "Deutsche Bahn · Deutschlandticket", url: "https://www.bahn.de/en/offers/regional/deutschland-ticket", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Alemania", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Germany", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-17", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "El tren es el país, y para esta ficha basta con el regional: el Deutschlandticket (63 € al mes desde enero de 2026, suscripción cancelable) cubre todos los RE, S-Bahn, metros, tranvías y buses de Alemania, y con él Beelitz, Wünsdorf, Eisenhüttenstadt, Ferropolis, Chemnitz, Weimar y hasta Prora (4 h con cambio) salen gratis; el ICE Berlín–Leipzig (1 h 15, desde 18 € con Sparpreis) y el IC a Binz (3 h) van aparte. Todo en la app DB Navigator en inglés. Lo que ya no es: puntual. Los alemanes bromean con ello y dejan margen en los cambios.",
  corridorsIntro: "Cuatro corredores: ICE a Leipzig, IC a Rügen, y regionales a Weimar y Eisenhüttenstadt; Beelitz y Wünsdorf son cercanías de Berlín.",
  busText:
    "Poco bus interurbano hace falta: FlixBus para lo que el tren no cubra barato (Berlín–Dresde 2 h, desde 8 €). En Berlín, metro, S-Bahn y tranvías del Este (los amarillos) con billete AB de 3,80 € o el Deutschlandticket; en Leipzig, Chemnitz y Dresde, tranvías; en Weimar, el bus 6 a Buchenwald cada media hora. Taxis caros; Uber y Bolt en Berlín y Leipzig.",
  busCompanies: ["BVG (Berlín: metro, S-Bahn, tranvía, bus)", "LVB (Leipzig), CVAG (Chemnitz), DVB (Dresde)", "FlixBus", "Uber / Bolt (Berlín, Leipzig)"],
  apps: [
    { name: "DB Navigator", use: "todo el tren, el Deutschlandticket y los regionales, en inglés", url: "https://www.bahn.de/en" },
    { name: "BVG Fahrinfo", use: "Berlín: rutas y billetes" },
    { name: "Google Maps", use: "funciona perfecto con todo el transporte alemán" },
    { name: "FlixBus", use: "los buses baratos entre ciudades" },
  ],
  noCarVerdictText:
    "Es el país del radar donde menos se echa de menos el coche: cada sitio de esta ficha tiene estación o parada de bus urbano (Beelitz tiene estación propia con el nombre del sanatorio; Buchenwald, un bus cada media hora; Ferropolis, 3 km a pie desde el regional). Con el Deutschlandticket el transporte cuesta 63 € para todo el viaje. Lo único que cuesta son los espomeniks y búnkeres de pueblo que no están en la ficha, y Spreepark cuando no hay visita.",
  hardWithoutCar: [
    "Ferropolis: 3 km a pie o en bici desde Gräfenhainichen.",
    "Wünsdorf: solo con tour reservado; el resto de la ciudad prohibida está vallado.",
    "Prora en invierno: pocos trenes y el centro cerrado en diciembre y enero.",
    "El Harz para Walpurgis: trenes de vuelta de madrugada, ninguno.",
  ],
  meta: vol([SEAT61, DB, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 38, note: "hostal en Berlín o Leipzig; pensión en Binz o Weimar, 60 €" },
    { concept: "hotel-mid", eur: 95 },
    { concept: "comida-barata", eur: 6, note: "Döner de 6-7 €; Currywurst 4 €; menú de Imbiss 8 €" },
    { concept: "restaurante", eur: 25, note: "Schnitzel y cerveza en cualquier Kneipe" },
    { concept: "transporte-urbano", eur: 3.8, note: "billete AB de Berlín; con el Deutschlandticket, incluido" },
    { concept: "tren-intercity", eur: 25, note: "ICE Berlín–Leipzig con Sparpreis; los regionales, gratis con el ticket de 63 €" },
    { concept: "cafe", eur: 3.5 },
    { concept: "supermercado", eur: 10, note: "Lidl y Aldi, la patria" },
  ],
  tips: [
    "Alemania es cara en cama y barata en transporte si haces lo correcto: el Deutschlandticket (63 €) es el mejor billete de Europa para esta ficha.",
    "Vueling, Ryanair y easyJet a Berlín: 40-60 € por trayecto fuera de ferias; ≈ 40 vuelos a la semana.",
    "Los memoriales (Buchenwald, Hohenschönhausen sin guía, la Runde Ecke, Prora) son gratis o casi; lo caro son las ruinas con negocio (Beelitz 17 €, Wünsdorf 20 €, Tempelhof 18 €).",
    "Döner, Currywurst y el supermercado: 15 € al día de comida sin sufrir; el restaurante es el lujo.",
    "Sparpreis del ICE con una semana: 18 €; el mismo tren el día antes, 60 €.",
  ],
  meta: vol([NUMBEO, DB, PROPIO], "Euro; Deutschlandticket a 63 € desde 2026; estimaciones"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Berlín", airport: "BER", airlines: ["Vueling", "Ryanair", "easyJet"], lowCost: true, hours: 2.5, weekly: 41 },
  ],
  oneStop: [
    { via: "Leipzig con escala (Lufthansa vía Fráncfort o Múnich)", airlines: ["Lufthansa"], totalHours: 5 },
    { via: "Dresde con escala (Lufthansa)", airlines: ["Lufthansa"], totalHours: 5 },
  ],
  tips: [
    "A Berlín, Vueling (≈ 21/semana), Ryanair (≈ 10) y easyJet (≈ 10): tres o más al día, 2 h 30, desde 40 €.",
    "Del BER al centro, FEX o RE en 30 min y S-Bahn en 45: con el Deutschlandticket o el billete ABC (4,70 €).",
    "Leipzig tiene aeropuerto (Ryanair desde otras ciudades) pero desde BCN sale mejor volar a Berlín y el ICE.",
    "Alemania del Este encadena con Polonia (tren a Poznań y Varsovia desde Berlín, Frankfurt/Oder a pie a Polonia) y con Chequia (Dresde–Praga por el Elba).",
  ],
  meta: vol([PROPIO], "Frecuencias de septiembre de 2026", "alta"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale: UE, Schengen y euro. Roaming europeo. Nada que tramitar; tarjeta sanitaria europea válida. Alemania pide registro de alojamiento (lo hace el hotel) y a veces el DNI para pagar con tarjeta en tiendas pequeñas, que aún adoran el efectivo.",
  steps: ["DNI en vigor", "Nada que tramitar", "Tarjeta sanitaria europea", "Deutschlandticket comprado en la app antes de salir"],
  links: [MAEC],
  warnings: ["Fotografiar con dron en Wünsdorf, Beelitz, Tempelhof y Prora: prohibido sin permiso.", "Los símbolos nazis (y el saludo) son delito, también en broma; los de la RDA, souvenir."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Baja; Berlín tiene fama y estadísticas de ciudad tranquila." },
    { key: "robos", level: "medio", text: "Carteristas en Alexanderplatz, el metro y Görlitzer Park; bicis robadas por deporte." },
    { key: "timos", level: "bajo", text: "Poco; alguna «peticionaria» con carpeta en la Puerta de Brandeburgo." },
    { key: "zonasConflicto", level: "bajo", text: "Ninguna; en Chemnitz y Sajonia hay extrema derecha visible (AfD al 30 %) y manifestaciones los lunes en algunas ciudades, sin efecto en el viajero." },
    { key: "terrorismo", level: "medio", text: "Riesgo europeo estándar; vigilancia en mercados de Navidad y estaciones tras los atentados de 2016 y 2024." },
    { key: "transporte", level: "bajo", text: "Impecable salvo la puntualidad; en las ruinas (Beelitz, Wünsdorf), casco y por donde diga el guía." },
    { key: "camaraEnCalle", level: "bajo", text: "Sin problema; en los memoriales, con respeto; en Hohenschönhausen, no dentro." },
    { key: "noche", level: "bajo", text: "Berlín de noche es Berlín; Kottbusser Tor y Görlitzer Park con drogas a la vista, sin más." },
  ],
  conflictAreas: [],
  soloText:
    "Facilísimo para ir solo: hostales de los mejores del mundo en Berlín y Leipzig, inglés en todo el mundo menor de 60, transporte que llega a todo y una ciudad donde nadie mira a nadie. Mujeres solas: sin problemas específicos. Lo que cansa es el precio de la cama y que los sitios más raros (Wünsdorf, Spreepark) van con reserva.",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República federal de la UE, la primera economía europea, gobernada desde 2025 por una gran coalición CDU-SPD (Merz) con la extrema derecha AfD como primer partido en los cinco Länder del Este (Sajonia, Turingia, Brandeburgo, Sajonia-Anhalt, Mecklemburgo), donde el paro, la despoblación y el «Ostalgie» pesan treinta y cinco años después; la memoria de la RDA se cuenta en museos de Estado (la Stasi) y en Kumrovecs locales (Eisenhüttenstadt), y la de los nazis, en cada esquina. Para el que viaja: tranquilo, con manifestaciones de lunes en Sajonia y trenes que llegan tarde.",
  watch: ["El Deutschlandticket: precio y existencia se discuten cada presupuesto", "Elecciones regionales del Este con la AfD, sin efecto práctico", "Spreepark: qué abre cada temporada"],
  avoid: ["Bromas con lo nazi: es delito; bromas con la RDA: es industria"],
  meta: vol([MAEC], undefined, "alta"),
};

export const digital: DigitalSection = {
  text:
    "UE: roaming europeo. Tarjeta en casi todo desde el Covid, pero Alemania sigue siendo el país del efectivo: Imbiss, Kneipen, Wünsdorf (20 € en efectivo), mercados y algún museo pequeño solo aceptan billetes. Google Maps funciona perfecto con todo el transporte; DB Navigator para billetes. Wifi en los ICE y en cada café; cobertura móvil peor de lo que un país rico debería, con huecos en el campo de Brandeburgo.",
  blocked: [],
  esimProviders: ["Roaming UE", "Airalo (si vienes de fuera)", "SIM de Aldi Talk o Telekom (10 €)"],
  payments:
    "Tarjeta en hoteles, supermercados, DB y museos grandes; efectivo (euros) para Imbiss, Kneipen, Wünsdorf, mercados y algún hostal pequeño. Cajeros de Sparkasse y Volksbank sin comisión; los amarillos (Euronet), con ella.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Alemán, con inglés muy bueno en Berlín y en menores de 50 de todo el país, y peor en los pueblos del Este (donde se aprendía ruso): en Wünsdorf, Eisenhüttenstadt o Thale, señas, sonrisas y Google Translate. Los carteles del tren, en alemán con inglés en la app; los memoriales grandes, bilingües; los museos de pueblo, no. Con el alemán del instituto se lee todo.",
  machinesText:
    "Máquinas de DB, BVG y tranvías en inglés; los tours de Wünsdorf y Beelitz suelen ser en alemán (con resumen en inglés si lo pides); Buchenwald con audioguía en español.",
  survivalPhrases: [
    { es: "Buenos días", local: "Guten Tag / Hallo", latin: "gúten tag / haló" },
    { es: "Gracias", local: "Danke", latin: "dánke" },
    { es: "¿Cuánto cuesta?", local: "Was kostet das?", latin: "vas kóstet das" },
    { es: "Estación", local: "Bahnhof", latin: "bánhof" },
    { es: "Un billete a Beelitz-Heilstätten, por favor", local: "Eine Fahrkarte nach Beelitz-Heilstätten, bitte", latin: "áine fárkarte naj Bélits-Hailshtéten, bíte" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "Frío y gris; Beelitz solo fines de semana; Prora cerrado; Berlín de museos" },
    { month: 2, kind: "clima", text: "Berlinale en la ciudad (cine); el Este a -5 grados" },
    { month: 3, kind: "temporada", text: "Beelitz y Prora abren horario largo el 1; el Harz con nieve todavía" },
    { month: 4, kind: "festival", text: "Walpurgis en el Harz la noche del 30: brujas al Brocken", festivalId: "de-walpurgis-harz" },
    { month: 4, kind: "temporada", text: "Ferropolis abre; Wünsdorf con tours diarios" },
    { month: 5, kind: "festival", text: "Wave-Gotik-Treffen en Leipzig en Pentecostés (a veces junio)", festivalId: "de-wave-gotik-treffen" },
    { month: 6, kind: "temporada", text: "El mes redondo: 22 grados, días de 17 horas, todo abierto" },
    { month: 7, kind: "clima", text: "Berlín a 30; Rügen llena; festivales en Ferropolis (Melt, Full Force)" },
    { month: 8, kind: "clima", text: "Vacaciones alemanas y Prora con la playa a tope; el Este del interior, vacío" },
    { month: 9, kind: "temporada", text: "El otro mes redondo: Berlín con luz, Rügen sin nadie, Beelitz con los primeros amarillos" },
    { month: 10, kind: "festival", text: "Festival of Lights y el 3, Día de la Unidad; Ferropolis y Beelitz cierran horario largo a final de mes", festivalId: "de-festival-of-lights" },
    { month: 11, kind: "temporada", text: "El 9, aniversario de la caída del Muro; niebla; mercados de Navidad desde el 25" },
    { month: 12, kind: "festival", text: "Striezelmarkt de Dresde y el Stollen gigante el segundo sábado", festivalId: "de-striezelmarkt" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Un sanatorio donde se curó Hitler visto desde una pasarela por las copas, y una ciudad soviética de 60.000 habitantes abandonada con Lenin en la puerta, los dos en cercanías.",
    "La oreja de la NSA sobre una montaña de escombros, el despacho de Mielke y una cárcel que no salía en los mapas.",
    "Un hotel nazi de 4,5 km, una ciudad estalinista de manual, una cabeza de Marx de 40 toneladas y cinco excavadoras de 2.000 toneladas.",
    "Buchenwald en bus urbano y la Stasi de Leipzig tal cual la dejaron en 1989.",
    "Un billete de 63 € para todo el transporte regional del país; Vueling tres veces al día; DNI, euro, roaming.",
    "El festival gótico más grande del mundo y la noche de las brujas del Harz.",
  ],
  cons: [
    "Caro en cama (40-50 € el hostal) y en comida de restaurante.",
    "Los sitios más raros van con reserva y en efectivo (Wünsdorf) o cambian de temporada (Spreepark).",
    "Los trenes ya no son puntuales y el Deutschlandticket es una suscripción con truco.",
    "Berlín es muy visto; el Este de verdad empieza en Lichtenberg y en los regionales.",
    "Inglés flojo en los pueblos del Este.",
  ],
  text:
    "Alemania del Este es el país del radar donde el tren regional cuesta 63 € al mes y llega a un sanatorio abandonado, a una ciudad soviética con Lenin en la puerta, a un hotel nazi de 4,5 km, a una ciudad estalinista y a cinco excavadoras aparcadas en un lago. Diez días dan para Berlín con Teufelsberg, la Stasi y Tempelhof, Beelitz y Wünsdorf en cercanías, Eisenhüttenstadt en regional, Prora en Rügen, Leipzig con Ferropolis y Chemnitz, y Buchenwald desde Weimar. Cinco, para Berlín Este y sus dos cercanías raras. Catorce, para las brujas del Harz o los góticos de Leipzig. Ve en mayo o en septiembre, compra el Deutschlandticket antes de salir y cancélalo antes del día 10, y lleva efectivo para los rusos de Wünsdorf.",
  meta: est([PROPIO]),
};
