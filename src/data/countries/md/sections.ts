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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Moldavia", kind: "oficial" };
const SEAT61: Source = { label: "The Man in Seat 61 · Moldova", url: "https://www.seat61.com/Moldova.htm", kind: "blog" };
const NUMBEO: Source = { label: "Numbeo · Moldavia", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Moldova", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "El tren moldavo casi no existe dentro del país: la red soviética se cayó por falta de dinero y los pocos trenes internos van a 40 km/h una vez al día. Lo que sí hay es el internacional: el Prietenia, nocturno diario Chișinău–Bucarest con literas de la URSS, samovar y el espectáculo de Ungheni, donde levantan los vagones con gatos para cambiarles las ruedas al ancho europeo; y dos diurnos a Iași. El tren a Odesa y a Tiraspol dejó de circular en 2022 con la guerra. Es una ficha de marshrutka con un solo tren, pero ese tren es el mejor cierre de viaje posible.",
  corridorsIntro: "Un corredor: el que sale del país. Dentro, marshrutkas.",
  busText:
    "El transporte real son las marshrutkas: furgonetas Mercedes de 20 plazas que salen de tres estaciones de Chișinău según el destino (la Gara Centrală, junto al mercado, para Tiraspol y Orheiul Vechi; la Gara de Nord para Soroca y Bălți; la Gara de Sud para Comrat y Gagauzia), cada 20-60 minutos, con billete en ventanilla o al conductor, por 2-4 €. Van llenas, paran donde les dicen y son la manera en que se mueve todo el país. Yandex Go y Bolt funcionan en la capital por 2-3 € el trayecto. A Cricova hay marshrutka urbana; a Mileștii Mici, taxi.",
  busCompanies: ["Marshrutkas de las tres estaciones de Chișinău", "Trolebuses de Chișinău y Tiraspol", "Yandex Go y Bolt en la capital", "Tours de vino (Cricova + Mileștii Mici) desde hostales"],
  apps: [
    { name: "Yandex Go / Bolt", use: "taxi con precio cerrado en Chișinău; en Tiraspol, Yandex también funciona con rublos" },
    { name: "Autogara.md", use: "horarios de marshrutkas por estación, bastante fiable", url: "https://autogara.md" },
    { name: "Google Maps", use: "funciona con los trolebuses de Chișinău; en Transnistria, a medias" },
    { name: "Google Translate", use: "rumano (latino, se lee) y ruso (cirílico); ambos hacen falta" },
    { name: "CFR Călători", use: "el Prietenia se compra aquí con tarjeta", url: "https://www.cfrcalatori.ro/en/" },
  ],
  noCarVerdictText:
    "Se puede, y bien: es un país pequeño y radial donde todo sale de Chișinău en marshrutka en menos de tres horas (Tiraspol 1 h 30, Orheiul Vechi 1 h 30, Comrat 2 h, Soroca 3 h), la capital se anda y Cricova tiene bus urbano. Lo único que exige taxi es Mileștii Mici, y lo único que exige calma son las marshrutkas de vuelta de Orheiul Vechi, que son tres al día. Con coche no verías nada más; solo llegarías antes a Soroca.",
  hardWithoutCar: [
    "Mileștii Mici: la marshrutka deja en el pueblo, la bodega está a 3 km y se recorre en coche; taxi con espera o tour.",
    "Orheiul Vechi: 3-4 marshrutkas al día; confirma la vuelta antes de bajar.",
    "Soroca ida y vuelta en el día son 6 h de marshrutka: mejor con noche.",
    "Transnistria: sin tren desde 2022; solo marshrutka, y solo efectivo.",
  ],
  meta: vol([SEAT61, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 14, note: "hostal en Chișinău; hotel soviético en Tiraspol, 25 €" },
    { concept: "hotel-mid", eur: 40 },
    { concept: "comida-barata", eur: 3, note: "plăcinte de 1 €; zeamă y sarmale en una cantina, 3-4 €" },
    { concept: "restaurante", eur: 12, note: "con vino de la casa, que aquí es bueno" },
    { concept: "transporte-urbano", eur: 0.3 },
    { concept: "tren-intercity", eur: 3, note: "marshrutka media; el Prietenia a Bucarest, 25-40 €" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 6 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: es el país más barato de Europa, 35-40 € al día con todo.",
    "Lei moldavos (no confundir con los rumanos): 19-20 por euro; se sacan en cajeros de Maib o Victoriabank sin comisión. En Transnistria, rublos transnistrios solo en efectivo, cambiados allí.",
    "Las bodegas son el gasto: Cricova 25 €, Mileștii Mici 30 €, el tour de las dos 45 €. Lo demás vale 1-3 €.",
    "Wizz directo desde BCN: 60-180 €; entrar por Chișinău y salir por Bucarest en el Prietenia (30 €) con Ryanair de vuelta suele salir mejor.",
    "En Tiraspol todo es más barato aún, y en rublos de plástico: cambia poco.",
  ],
  meta: vol([NUMBEO, PROPIO], "Leu moldavo a ≈ 19,5 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [
    { to: "Chișinău", airport: "RMO", airlines: ["Wizz Air"], lowCost: true, hours: 3.3, weekly: 3 },
  ],
  oneStop: [
    { via: "Bucarest (Ryanair/Wizz) y el Prietenia nocturno", airlines: ["Ryanair", "Wizz Air"], totalHours: 18 },
    { via: "Viena o Estambul", airlines: ["Austrian", "Turkish Airlines"], totalHours: 6.5 },
    { via: "Iași (Wizz) y tren de 3 h", airlines: ["Wizz Air"], totalHours: 8 },
  ],
  tips: [
    "Wizz vuela directo a Chișinău dos o tres veces por semana: el viaje se monta alrededor de esos días.",
    "La combinación buena es entrar en avión y salir en el Prietenia a Bucarest (o al revés): un nocturno soviético con cambio de ruedas por 30 €.",
    "Iași (Rumanía) está a 3 h en tren y tiene Wizz desde BCN: plan B si Chișinău no cuadra.",
    "Del aeropuerto al centro, trolebús 30 (0,30 €, 40 min) o Yandex Go (6 €).",
  ],
  meta: vol([PROPIO], "Wizz BCN–Chișinău en 2026; frecuencia estacional", "media"),
};

export const docs: DocsSection = {
  text:
    "Con el DNI te vale hasta 90 días: Moldavia no es UE pero admite el DNI español. Pasaporte recomendable para el Prietenia (la frontera rumana de madrugada) y para Transnistria, donde te dan una tarjeta de migración de papel de 10 horas (24 con reserva de hotel) al entrar, que devuelves al salir. Transnistria no sella nada porque oficialmente no existe. Sin roaming europeo.",
  steps: ["DNI en vigor (pasaporte recomendable)", "Nada que tramitar", "Transnistria: tarjeta de migración en el control, gratis; guárdala", "Seguro de viaje: fuera de la UE"],
  links: [MAEC],
  warnings: ["Transnistria: no fotografíes controles, soldados ni la base rusa; ni entres a Moldavia desde Transnistria viniendo de Ucrania (las fronteras con Ucrania están cerradas desde 2022 de todas formas).", "Sin roaming europeo: SIM local, y en Transnistria las SIM moldavas van regular."],
  meta: vol([MAEC], undefined, "alta"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; Chișinău es tranquila." },
    { key: "robos", level: "medio", text: "Carteristas en el mercado central y en las marshrutkas llenas. Normal." },
    { key: "timos", level: "medio", text: "Taxis de la calle en el aeropuerto y la estación (apps siempre); en Tiraspol, los cambistas de la calle son legales y honestos, los de la frontera no." },
    { key: "zonasConflicto", level: "medio", text: "Transnistria es un conflicto congelado con 1.500 soldados rusos: tranquilo para el visitante, pero depende de la guerra de Ucrania. Mira las noticias la semana antes." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo; en 2022-23 hubo explosiones en Transnistria sin víctimas." },
    { key: "transporte", level: "medio", text: "Marshrutkas rápidas por carreteras malas; el Prietenia, seguro." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema en Moldavia; en Transnistria, nada de militares, controles ni el puente de Bender. La Colina de los Gitanos, con permiso de quien esté." },
    { key: "noche", level: "bajo", text: "Chișinău de noche, tranquila; Tiraspol, muy tranquila y muy oscura." },
  ],
  conflictAreas: ["Transnistria: sin riesgo directo, pero la situación (guerra, gas, elecciones) puede cerrar el acceso de un día para otro."],
  soloText:
    "Fácil para ir solo: el hostal de Chișinău es el punto de encuentro para compartir Tiraspol y las bodegas, y los moldavos son latinos y hospitalarios. Mujeres solas: sin problemas específicos. Lo que cansa es la mezcla de rumano y ruso y la sensación de país que se vacía (un tercio ha emigrado).",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "República parlamentaria con Maia Sandu (proeuropea) de presidenta desde 2020, reelegida en 2024 en unas elecciones con compra masiva de votos rusa denunciada, y con su partido ganando las legislativas de septiembre de 2025 frente al bloque prorruso. Candidata a la UE desde 2022, con negociaciones abiertas y un referéndum de 2024 que aprobó la adhesión por un 50,4 %. Transnistria (prorrusa, con soldados rusos) y Gagauzia (prorrusa, autónoma) son los dos dolores de cabeza; la guerra de Ucrania está a 100 km. Para el que viaja: tranquilo, con un país que se juega su futuro en cada votación.",
  watch: ["Transnistria: gas, dinero ruso y accesos cambian con la guerra de al lado", "Gagauzia: su gobernadora condenada en 2025 y la tensión con Chișinău", "Elecciones: cada una es un referéndum Rusia-UE con injerencias"],
  avoid: ["La orilla del Dniéster en Transnistria con militares: ni fotos ni preguntas"],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "Fuera de la UE: sin roaming (aunque Moldavia negocia entrar en el roaming europeo; comprobar). SIM de Orange o Moldcell por 5 € con datos de sobra, o eSIM. Cobertura buena en todo el país; en Transnistria las SIM moldavas van a ratos y la local (IDC) solo se compra con pasaporte. Google Maps funciona en Chișinău; para marshrutkas, autogara.md. Tarjeta en Chișinău, efectivo en el resto y solo efectivo en Transnistria.",
  blocked: [],
  esimProviders: ["Airalo", "Holafly", "SIM local Orange / Moldcell (5 €)"],
  payments:
    "Tarjeta en hoteles, restaurantes y supermercados de Chișinău; lei en efectivo para marshrutkas, mercados, museos y Soroca. Transnistria: solo efectivo en rublos transnistrios (tarjetas europeas bloqueadas), cambiados en las casas de cambio de la avenida 25 de Octubre con euros o lei.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Rumano (la Constitución lo llama rumano desde 2023; antes «moldavo»), en latino, que se lee con el español; y ruso, que habla todo el mundo y que es lo único en Tiraspol y Comrat. Inglés, los jóvenes de Chișinău y los hostales. Entre el rumano leído y diez palabras de ruso, se va sin problema. Los carteles de Chișinău van en rumano; los de Transnistria, en ruso y cirílico, con Lenin.",
  machinesText:
    "No hay máquinas: marshrutkas al conductor o en ventanilla, trolebuses al cobrador (una señora con un rollo de billetes), museos en taquilla. El Prietenia, en la Gara de Chișinău o en la web de CFR en inglés. En Transnistria, todo en ruso y en efectivo.",
  survivalPhrases: [
    { es: "Hola", local: "Bună ziua / Здравствуйте", latin: "buna ziua / zdrástvuyte" },
    { es: "Gracias", local: "Mulțumesc / Спасибо", latin: "multsumesc / spasíba" },
    { es: "¿Cuánto cuesta?", local: "Cât costă? / Сколько стоит?", latin: "cat costa / skólko stóit" },
    { es: "Estación de marshrutkas", local: "Autogara / Автовокзал", latin: "autogara / avtovokzál" },
    { es: "Pare aquí, por favor", local: "Opriți aici, vă rog / Остановите здесь", latin: "opritsi aich, va rog / astanavíte zdes" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "festivo", text: "Navidad ortodoxa el 7 (la mitad del país) y el 25 de diciembre (la otra mitad): dos rondas" },
    { month: 2, kind: "clima", text: "Frío continental y barro; Chișinău a −5 °C, sin nadie" },
    { month: 3, kind: "festival", text: "Mărțișor del 1 al 10, con festival de música en Chișinău", festivalId: "md-martisor" },
    { month: 4, kind: "temporada", text: "Primavera; Orheiul Vechi verde y las marshrutkas de vuelta más frecuentes" },
    { month: 5, kind: "festival", text: "El 9 de mayo: Victoria en Eternitate, Europa en la plaza y desfile en Tiraspol", festivalId: "md-9-mayo-y-dia-europa" },
    { month: 6, kind: "temporada", text: "Calor empezando; buen mes para Soroca y el norte" },
    { month: 7, kind: "clima", text: "35 °C en Chișinău; las bodegas a 12 °C son el refugio" },
    { month: 8, kind: "festivo", text: "El 27, Día de la Independencia, y el 31, Día de la Lengua Rumana: conciertos en la plaza" },
    { month: 9, kind: "festival", text: "Día de la República de Transnistria el 2: desfile en Tiraspol", festivalId: "md-dia-republica-transnistria" },
    { month: 9, kind: "temporada", text: "Vendimia y 25 grados: el mes redondo" },
    { month: 10, kind: "festival", text: "Ziua Vinului el primer fin de semana: 60 bodegas en la plaza", festivalId: "md-ziua-vinului" },
    { month: 10, kind: "festivo", text: "El 14, Hramul Chișinăului, la fiesta de la ciudad, con la plaza tomada" },
    { month: 11, kind: "clima", text: "Gris y barro; buen mes para el circo y las bodegas" },
    { month: 12, kind: "clima", text: "Frío y mercadillo en la plaza; Tiraspol con el Año Nuevo soviético" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "Transnistria: la URSS que sigue abierta, con hoz y martillo, tarjeta de 10 horas y marshrutka desde la capital.",
    "El circo brutalista abandonado de Chișinău, las setas de hormigón y los hoteles soviéticos vacíos.",
    "La Colina de los Gitanos de Soroca: palacios de barones romaníes copiados del Bolshói sobre una fortaleza medieval.",
    "Ciudades subterráneas de vino de 120 y 200 km, con la bodega de Göring.",
    "El país más barato de Europa, con DNI, Wizz directo y rumano que se lee.",
    "El Prietenia: un nocturno soviético con cambio de ruedas a medianoche para salir a Rumanía.",
  ],
  cons: [
    "Sin trenes internos y sin roaming; todo marshrutka.",
    "Transnistria depende de la guerra de al lado: puede cerrarse o complicarse de un mes a otro, y es solo efectivo.",
    "Wizz vuela dos o tres días a la semana: el viaje se monta alrededor.",
    "Chișinău no es bonita, y el país se vacía: hay una tristeza de fondo.",
    "Menos sitios que otros del radar: es un viaje de una semana, no de tres.",
  ],
  text:
    "Moldavia es el viaje corto más raro del radar: ocho días dan para Chișinău con su circo abandonado y su hormigón, Cricova bajo tierra, el monje de la cueva de Orheiul Vechi, un día y una noche en la URSS de Tiraspol con la fortaleza y la guerra de Bender, y la marshrutka al norte para los palacios gitanos de Soroca frente a Ucrania. Once, para añadir Gagauzia y salir en el Prietenia a Bucarest con el cambio de ruedas a medianoche, encadenando con Rumanía. Cuatro, para un puente de Wizz con Tiraspol y Cricova. Ve en septiembre-octubre (el desfile del 2, el Día del Vino el primer fin de semana), cambia poco a rublos y mira las noticias de Transnistria la semana antes.",
  meta: est([PROPIO]),
};
