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
const MAEC: Source = { label: "MAEC · Recomendaciones de viaje", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Kirguistan", kind: "oficial" };
const CARAVANISTAN: Source = { label: "Caravanistan · Kyrgyzstan", url: "https://caravanistan.com/kyrgyzstan/", kind: "blog" };
const CBT: Source = { label: "CBT Kyrgyzstan", url: "https://cbtkyrgyzstan.kg/en/", kind: "oficial" };
const NUMBEO: Source = { label: "Numbeo · Kirguistán", url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Kyrgyzstan", kind: "blog" };
const vol = (sources: Source[] = [PROPIO], notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources, notes });
const est = (sources: Source[] = [PROPIO], notes?: string) => meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources, notes });

export const transport: TransportSection = {
  railText:
    "Kirguistán tiene un tren: el de verano de Biskek-2 a Balykchy, en el Issyk-Kul, cuatro horas por el desfiladero del Chu en vagones soviéticos por 1,50 €, diario del 26 de junio al 13 de septiembre (viernes a domingo desde el 5 de junio). Es lento, va lleno de familias y sandías, y es la forma más rara de llegar al lago. El resto de la red soviética (a Kazajistán, un ramal del sur partido por Uzbekistán) no sirve para nada desde 2010. Aquí el tren es una anécdota que merece un día; el transporte de verdad es la marshrutka.",
  corridorsIntro: "Un solo corredor, de verano. Lo demás son marshrutkas y un vuelo.",
  busText:
    "Marshrutkas y taxis compartidos a todo, desde dos estaciones de Biskek: la Este (Vostochny) para el Issyk-Kul y Karakol (6-7 h, 600-800 som), la Oeste para Kochkor, Naryn y el sur. Salen cuando se llenan, entre las 7 y las 16, y se paga al conductor. Biskek–Osh son 10-12 h de paso de montaña en marshrutka o 45 minutos de avión por 45 €: el avión. Para el Song-Kul y lo de montaña, la cooperativa CBT (oficinas en Kochkor, Karakol, Bokonbayevo, Arslanbob) organiza jeeps compartidos, yurtas y caballos a precio fijo. Yandex Go en Biskek y Osh por 1-2 €.",
  busCompanies: ["Marshrutkas de las estaciones Este y Oeste de Biskek", "Taxis compartidos (Osh, Jalal-Abad, Mailuu-Suu)", "CBT Kyrgyzstan (jeeps, yurtas, caballos)", "TezJet / Asman / Aero Nomad (Biskek–Osh)", "Yandex Go"],
  apps: [
    { name: "Yandex Go", use: "taxi con precio en Biskek y Osh; 1-2 €" },
    { name: "2GIS", use: "el mapa con las marshrutkas de Biskek y sus paradas; mejor que Google" },
    { name: "CBT Kyrgyzstan", use: "reservas de yurtas y jeeps al Song-Kul; oficinas físicas en cada pueblo", url: "https://cbtkyrgyzstan.kg/en/" },
    { name: "Google Translate", use: "kirguís y ruso en cirílico, con cámara; el ruso lo habla todo el mundo" },
    { name: "Caravanistan", use: "el foro donde se actualizan horarios de marshrutkas y el tren", url: "https://caravanistan.com/kyrgyzstan/" },
  ],
  noCarVerdictText:
    "Se puede, y de hecho es como se mueven los kirguises: marshrutka a todos los pueblos de esta ficha, tren de verano al lago, bus urbano hasta la puerta de Ala-Archa desde 2025, y CBT para lo que está fuera de la carretera (el Song-Kul en jeep compartido, que no harías con un coche de alquiler tampoco). Lo que se cae sin coche es lo remoto de verdad: Tash Rabat, el Kel-Suu, los pasos a China. Con coche verías más lagos; sin coche ves el mejor y duermes en la yurta igual.",
  hardWithoutCar: [
    "El Song-Kul: solo en jeep de CBT desde Kochkor (compartido, 2 h de pista); de junio a septiembre.",
    "Mailuu-Suu: taxi compartido desde Jalal-Abad; ida y vuelta en el día y sin salir del centro.",
    "Tash Rabat y Naryn profundo: taxi contratado; fuera de la ficha por eso.",
    "Biskek–Osh: 10-12 h de marshrutka por el paso; vuelo, siempre.",
  ],
  meta: vol([CARAVANISTAN, CBT, PROPIO]),
};

export const cost: CostSection = {
  table: [
    { concept: "hotel-budget", eur: 12, note: "hostal en Biskek; casa de familia CBT, 15-20 € con cena" },
    { concept: "hotel-mid", eur: 40, note: "el sanatorio Avrora, con barro incluido" },
    { concept: "comida-barata", eur: 2.5, note: "lagman, manty, ashlan-fu en un café; samsa de 0,30 €" },
    { concept: "restaurante", eur: 10, note: "beshbarmak y kumis; cerveza local 1 €" },
    { concept: "transporte-urbano", eur: 0.15 },
    { concept: "tren-intercity", eur: 1.5, note: "el tren del lago; marshrutka Biskek–Karakol, 6-8 €" },
    { concept: "cafe", eur: 1.5 },
    { concept: "supermercado", eur: 5 },
  ],
  tips: [
    "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar: es de los más baratos del radar, 35-40 € al día con todo.",
    "El gasto gordo es el vuelo (600-800 € por Estambul) y las yurtas del Song-Kul (40-60 € por noche con jeep y comidas).",
    "Som: ≈ 100 por euro; se sacan de cajeros de Optima o Demir en las ciudades, no hay en el Song-Kul ni en Arslanbob. Efectivo para casi todo.",
    "El vuelo Biskek–Osh por 45 € ahorra 12 horas de marshrutka y merece cada céntimo.",
    "CBT tiene precios fijos publicados: no hay que regatear; en los taxis compartidos, sí.",
  ],
  meta: vol([NUMBEO, PROPIO], "Som a ≈ 100 por euro; estimaciones de 2026"),
};

export const flights: FlightsSection = {
  directRoutes: [],
  oneStop: [
    { via: "Estambul Sabiha Gökçen (Pegasus)", airlines: ["Pegasus"], totalHours: 9.5 },
    { via: "Estambul (Turkish Airlines)", airlines: ["Turkish Airlines"], totalHours: 10 },
    { via: "Estambul a Osh (Pegasus)", airlines: ["Pegasus"], totalHours: 10 },
  ],
  tips: [
    "Sin directo: Pegasus por Sabiha Gökçen es lo barato (600-750 € ida y vuelta) y Turkish lo cómodo; los dos aterrizan en Manas de madrugada.",
    "Pegasus vuela también Estambul–Osh: entrar por Biskek y salir por Osh evita el vuelo interno de vuelta.",
    "Desde Manas al centro: marshrutka 380 (0,50 €, de día) o Yandex Go (8 €).",
    "Biskek encadena con Almaty en 4 h de marshrutka (frontera con cola) y con Taskent en avión: la ficha se combina con Kazajistán y Uzbekistán, contando los 30 días.",
  ],
  meta: vol([PROPIO], "Sin directo en 2026"),
};

export const docs: DocsSection = {
  text:
    "Sin visado con pasaporte, pero con la regla nueva de 2026: **30 días dentro de cualquier periodo de 60** (antes eran 60 en 120; lo cambió la Resolución 855, en vigor desde el 31 de diciembre de 2025). Nada que registrar. Para la zona fronteriza con China (Kel-Suu, Tash Rabat hacia Torugart) hace falta un permiso de agencia; el resto de la ficha no lo necesita.",
  steps: ["Pasaporte con 6 meses de validez", "Nada que tramitar: 30 días en 60", "Sin registro", "Permiso de zona fronteriza solo para Torugart y el Kel-Suu (no están en la ficha)"],
  links: [MAEC],
  warnings: ["Las webs viejas dicen 60 días: no. Si vienes de Kazajistán o Uzbekistán y vuelves, cuenta los días.", "Drones en Mailuu-Suu, aeropuertos y la frontera: no."],
  meta: vol([MAEC], "Regla de 30/60 vigente desde 2026; comprobar", "media"),
};

export const safety: SafetySection = {
  blocks: [
    { key: "delincuencia", level: "bajo", text: "Delincuencia común baja; Biskek de noche, tranquila salvo algún borracho." },
    { key: "robos", level: "medio", text: "Carteristas en el bazar de Osh (el de Biskek) y en las marshrutkas llenas; algún robo de móvil en parques de noche." },
    { key: "timos", level: "medio", text: "Policías que piden «ver el pasaporte» y buscan una multa: pide el número de placa y ofrece ir a comisaría, y se acaba. Taxis del aeropuerto: Yandex." },
    { key: "zonasConflicto", level: "medio", text: "La frontera con Tayikistán (Batken) tuvo combates en 2021 y 2022; no está en la ficha. Osh, tranquila desde 2010." },
    { key: "terrorismo", level: "bajo", text: "Riesgo bajo." },
    { key: "transporte", level: "medio", text: "Marshrutkas rápidas por pasos de montaña sin quitamiedos; el tren y el avión, seguros. Los jeeps al Song-Kul, por pista." },
    { key: "camaraEnCalle", level: "medio", text: "Sin problema en general; en Mailuu-Suu (instalaciones), cuarteles y la Casa Blanca de Biskek, pregunta." },
    { key: "noche", level: "bajo", text: "Tranquilo; los pueblos, a oscuras y con perros." },
  ],
  conflictAreas: ["Batken y la frontera con Tayikistán: no ir.", "Mailuu-Suu: las balsas de residuos radiactivos están señalizadas; no acercarse ni pisar el barro del río."],
  soloText:
    "Muy fácil para ir solo: CBT existe para eso (te juntan con otros para el jeep y la yurta), los hostales de Biskek y Karakol son de mochilero de montaña, y la hospitalidad kirguís incluye kumis a la fuerza. Ruso básico ayuda mucho; inglés solo en hostales y CBT. Mujeres solas: sin problemas específicos; en las yurtas, con familia. Lo que cansa son las marshrutkas y la altura del Song-Kul (3.000 m: dolor de cabeza la primera noche).",
  meta: vol([MAEC, PROPIO]),
};

export const politics: PoliticsSection = {
  text:
    "La «democracia» de Asia Central, con tres revoluciones (2005, 2010, 2020) que echaron a tres presidentes de la Casa Blanca de Biskek, y desde 2021 un presidente (Japarov) y un jefe de seguridad (Tashiev) que han recentralizado el poder, cerrado medios y metido presos a periodistas, con referéndum incluido. Dependiente de Rusia (remesas de un millón de emigrantes) y de China (deuda y carreteras), con base militar rusa en Kant. Para el que viaja: tranquilo, con vigilancia en la plaza Ala-Too y cero problemas fuera de la política.",
  watch: ["Frontera con Tayikistán: acuerdo de 2025, pero con historial", "Detenciones de periodistas y activistas: no afectan al viajero", "Los Juegos Nómadas y la cumbre de la OCS de 2026 movieron hasta la fiesta nacional"],
  avoid: ["Batken y la frontera tayika"],
  meta: vol([MAEC], undefined, "media"),
};

export const digital: DigitalSection = {
  text:
    "SIM de Beeline, O! o MegaCom en el aeropuerto o cualquier quiosco por 3-5 € con datos de sobra; cobertura buena en ciudades y en la orilla del Issyk-Kul, nula en el Song-Kul y en Arslanbob a ratos. 2GIS es el mapa que sabe de marshrutkas; Google Maps va regular. Yandex Go en las dos ciudades grandes. Tarjeta solo en hoteles y supermercados de Biskek y Osh: efectivo para casi todo, sacado en cajeros de las ciudades antes de subir a la montaña.",
  blocked: [],
  esimProviders: ["Airalo", "SIM local Beeline / O! / MegaCom (3-5 €, con pasaporte)"],
  payments:
    "Efectivo (som) para marshrutkas, taxis, cafés, CBT, bazares y todo lo rural; tarjeta en hoteles y supermercados de Biskek y Osh, y en algunos restaurantes. No hay cajeros en el Song-Kul, Arslanbob ni Mailuu-Suu: saca en Biskek, Karakol, Osh o Jalal-Abad.",
  meta: vol([PROPIO]),
};

export const language: LanguageSection = {
  text:
    "Kirguís (túrquico, en cirílico) y ruso, que es el idioma de las ciudades y de todo el que tenga más de 30 años. Inglés en hostales, CBT y los guías jóvenes; en marshrutkas y bazares, ninguno. Los carteles van en cirílico, kirguís y ruso mezclados. Diez palabras de ruso y el traductor con cámara resuelven el viaje; en el sur, el uzbeko se cruza con todo.",
  machinesText:
    "No hay máquinas: taquilla del tren en persona (ruso), marshrutkas al conductor, CBT en oficina con precios en un cartel. Los cajeros, en inglés.",
  survivalPhrases: [
    { es: "Hola", local: "Салам (kirguís) / Здравствуйте (ruso)", latin: "salam / zdrástvuyte" },
    { es: "Gracias", local: "Рахмат / Спасибо", latin: "rajmát / spasíba" },
    { es: "¿Cuánto cuesta?", local: "Канча? / Сколько стоит?", latin: "kancha / skólko stóit" },
    { es: "Estación de marshrutkas", local: "Автовокзал", latin: "avtovokzál" },
    { es: "Pare aquí, por favor", local: "Остановите здесь, пожалуйста", latin: "astanavíte zdes, pazhálusta" },
  ],
  meta: est([PROPIO]),
};

export const events: EventsSection = {
  entries: [
    { month: 1, kind: "clima", text: "−15 °C en Biskek y el Issyk-Kul sin helarse (nunca se hiela); esquí en Karakol" },
    { month: 2, kind: "clima", text: "Sigue el invierno; Osh a 5 °C y con sol" },
    { month: 3, kind: "festival", text: "Nooruz del 21 al 24: yurtas en Ala-Too, sümölök y kok-boru", festivalId: "kg-nooruz" },
    { month: 4, kind: "clima", text: "Tulipanes silvestres y barro; el Song-Kul aún bajo nieve" },
    { month: 5, kind: "temporada", text: "Primavera en el valle; Ala-Archa y Burana perfectos; el lago, frío" },
    { month: 6, kind: "temporada", text: "Arranca el tren del lago (fines de semana desde el 5, diario desde el 26) y suben las yurtas al Song-Kul" },
    { month: 7, kind: "temporada", text: "Temporada alta del lago: kazajos en los sanatorios, 28 grados, todo abierto" },
    { month: 8, kind: "festival", text: "Aves de presa en Bokonbayevo (fecha de CBT) y la Independencia el 31 con kok-boru", festivalId: "kg-birds-of-prey" },
    { month: 8, kind: "festival", text: "Kok-boru del Día de la Independencia en el hipódromo (en 2026, el 11-12 de septiembre)", festivalId: "kg-independencia-kok-boru" },
    { month: 9, kind: "festival", text: "Juegos Nómadas cada dos años a principios de mes (2026 hecho; próximos 2028)", festivalId: "kg-juegos-nomadas" },
    { month: 9, kind: "temporada", text: "El mejor mes: nueces en Arslanbob, el tren hasta el 13, yurtas hasta mitad de mes, luz de otoño" },
    { month: 10, kind: "temporada", text: "Cierra el Song-Kul; el lago y Osh, perfectos y vacíos" },
    { month: 11, kind: "clima", text: "Primeras nevadas; Biskek gris y con smog de carbón" },
    { month: 12, kind: "clima", text: "Invierno continental; Año Nuevo a lo ruso con Ded Moroz en Ala-Too" },
  ],
  meta: vol([PROPIO]),
};

export const verdict: VerdictSection = {
  pros: [
    "La ciudad secreta del uranio de las primeras bombas soviéticas, con museo nuevo, en taxi compartido.",
    "Un circo OVNI, una capital soviética de provincias intacta y un Lenin escondido detrás del museo.",
    "El único tren del país: cuatro horas a 40 por hora hasta un lago de montaña, por 1,50 €.",
    "Dormir en yurta a 3.000 metros con pastores, organizado desde un pueblo con marshrutka.",
    "Una montaña sagrada con museo en la cueva y el bazar más viejo de la Ruta de la Seda.",
    "De lo más barato del radar (35-40 €/día), sin visado y con CBT para lo difícil.",
  ],
  cons: [
    "Sin directo: 10 horas por Estambul y llegada de madrugada.",
    "Solo 30 días en 60 desde 2026: cuidado al encadenar con los vecinos.",
    "El tren y las yurtas son de verano: de octubre a mayo, la mitad de la ficha no existe.",
    "Marshrutkas de 6-12 horas por pasos de montaña; el vuelo interno es obligatorio.",
    "Cirílico, ruso y poco inglés; el circo en obras y sin sus colores.",
  ],
  text:
    "Kirguistán es el país del radar donde el tren es una excursión y la yurta es un hotel. Trece días dan para Biskek con su hormigón de Frunze y su circo OVNI, el tren de verano de 1,50 € hasta el Issyk-Kul, los sanatorios-barco de Cholpon-Ata, Karakol con su mezquita china de madera, dos noches en yurta a 3.000 metros desde Kochkor, el vuelo a Osh para la montaña sagrada con museo en la cueva y el taxi compartido a Mailuu-Suu, la ciudad secreta del uranio. Siete, para Biskek y el lago. Diecisiete, para añadir el bosque de nogales y salir por Osh. Ve entre julio y mediados de septiembre (el tren y las yurtas mandan), aprende diez palabras de ruso, saca som antes de subir a la montaña y cuenta los 30 días.",
  meta: est([PROPIO]),
};
