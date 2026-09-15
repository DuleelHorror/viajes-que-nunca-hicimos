import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "ge-12d-de-tiflis-al-mar-negro",
    title: "GEORGIA — 12 DÍAS: de la Crónica a los sanatorios, y de Stalin al mar Negro",
    days: 12,
    season: "mayo-junio o septiembre-octubre",
    summary:
      "Tiflis con su monumento inacabado y su ministerio flotante, Gori y su museo de culto, Kutaisi como base para los sanatorios de Tskaltubo y los teleféricos de Chiatura, la presa de Enguri y final en el Las Vegas del mar Negro. Trenes lentos, marshrutkas y Bolt: cero coche.",
    stops: [
      {
        cityId: "ge-tiflis",
        nights: 4,
        placeIds: ["ge-tiflis-cronica-de-georgia", "ge-tiflis-ministerio-carreteras", "ge-tiflis-metro", "ge-tiflis-banos-azufre", "ge-tiflis-dry-bridge", "ge-tiflis-museo-ocupacion", "ge-kazbegi-gergeti", "ge-gudauri-monumento-amistad"],
        note: "un día entero para la Carretera Militar (Gudauri y Kazbegi) en marshrutka o taxi compartido",
        legFromPrevious: { mode: "avion", durationMin: 420, noCarDifficulty: "ok", bookAhead: true, price: "200-400 €", note: "BCN → Tiflis con escala en Estambul (Turkish o Pegasus), 7-8 h; o Wizz directo a Kutaisi y marshrutka" },
      },
      {
        cityId: "ge-gori",
        nights: 1,
        placeIds: ["ge-gori-museo-stalin", "ge-uplistsikhe"],
        legFromPrevious: { mode: "tren", durationMin: 60, noCarDifficulty: "ok", price: "≈ 2 €" },
      },
      {
        cityId: "ge-kutaisi",
        nights: 3,
        placeIds: ["ge-kutaisi-parlamento", "ge-tskaltubo-sanatorios", "ge-chiatura-telefericos", "ge-katskhi-pilar"],
        note: "Tskaltubo cabe en media jornada; Chiatura y Katskhi son el día entero",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", price: "≈ 4 €", note: "marshrutka desde Gori por la autopista" },
      },
      {
        cityId: "ge-zugdidi",
        nights: 1,
        placeIds: ["ge-enguri-presa"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", price: "≈ 3 €" },
      },
      {
        cityId: "ge-batumi",
        nights: 2,
        placeIds: ["ge-batumi"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", price: "≈ 4 €" },
      },
      {
        cityId: "ge-kutaisi",
        nights: 1,
        placeIds: [],
        note: "noche de aeropuerto para el Wizz directo a Barcelona",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Las marshrutkas salen cuando se llenan y conducen como conducen: siéntate delante si te mareas y no cuentes con horarios.",
      "Tskaltubo cambia cada mes: pregunta en Kutaisi qué sanatorios siguen abiertos antes de ir con expectativas.",
      "Desde 2026 el seguro de viaje es obligatorio para entrar: llévalo impreso.",
    ],
    meta: m,
  },
  {
    id: "ge-7d-tiflis-y-los-sanatorios",
    title: "7 DÍAS: Tiflis, Gori y los sanatorios de Tskaltubo",
    days: 7,
    season: "de abril a junio y de septiembre a noviembre",
    summary: "La escapada con lo gordo: la capital y su cara soviética, el museo de Stalin de camino y tres noches en Kutaisi para los sanatorios y Chiatura. Entra por Tiflis y sale por Kutaisi con Wizz.",
    stops: [
      {
        cityId: "ge-tiflis",
        nights: 3,
        placeIds: ["ge-tiflis-cronica-de-georgia", "ge-tiflis-ministerio-carreteras", "ge-tiflis-metro", "ge-tiflis-banos-azufre", "ge-tiflis-dry-bridge"],
        legFromPrevious: { mode: "avion", durationMin: 420, noCarDifficulty: "ok", bookAhead: true, note: "con escala en Estambul" },
      },
      {
        cityId: "ge-gori",
        nights: 1,
        placeIds: ["ge-gori-museo-stalin", "ge-uplistsikhe"],
        legFromPrevious: { mode: "tren", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "ge-kutaisi",
        nights: 3,
        placeIds: ["ge-tskaltubo-sanatorios", "ge-chiatura-telefericos", "ge-katskhi-pilar", "ge-kutaisi-parlamento"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["El Wizz a Kutaisi sale a horas intempestivas: mira el horario antes de fijar la última noche."],
    meta: m,
  },
  {
    id: "ge-15d-el-completo-con-vardzia-y-svaneti",
    title: "15 DÍAS: el completo, con Vardzia, Davit Gareja y las torres de Svaneti",
    days: 15,
    season: "junio o septiembre",
    summary:
      "Todo lo anterior más los monjes del desierto en la frontera azerí, la ciudad-monasterio de Vardzia en la punta turca y tres noches en Svaneti con la presa de Enguri de camino. Es Georgia entera sin coche, y son quince días de marshrutka.",
    stops: [
      {
        cityId: "ge-tiflis",
        nights: 4,
        placeIds: ["ge-tiflis-cronica-de-georgia", "ge-tiflis-ministerio-carreteras", "ge-tiflis-metro", "ge-tiflis-banos-azufre", "ge-tiflis-dry-bridge", "ge-tiflis-museo-ocupacion", "ge-davit-gareja"],
        legFromPrevious: { mode: "avion", durationMin: 420, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "ge-gori",
        nights: 1,
        placeIds: ["ge-gori-museo-stalin", "ge-uplistsikhe"],
        legFromPrevious: { mode: "tren", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "ge-akhaltsikhe",
        nights: 2,
        placeIds: ["ge-vardzia"],
        note: "la marshrutka a Vardzia sale por la mañana y vuelve por la tarde: el día entero",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", price: "≈ 5 €", note: "marshrutka Gori–Akhaltsikhe por el paso de Borjomi; pocas al día" },
      },
      {
        cityId: "ge-kutaisi",
        nights: 3,
        placeIds: ["ge-tskaltubo-sanatorios", "ge-chiatura-telefericos", "ge-katskhi-pilar", "ge-kutaisi-parlamento"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", note: "Akhaltsikhe–Kutaisi con cambio en Khashuri o Zestafoni" },
      },
      {
        cityId: "ge-zugdidi",
        nights: 3,
        placeIds: ["ge-enguri-presa", "ge-mestia-svaneti"],
        note: "dos de las tres noches se duermen arriba, en Mestia; la presa queda de camino",
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "ge-batumi",
        nights: 2,
        placeIds: ["ge-batumi"],
        note: "vuelo Batumi–Tiflis o directo a casa vía Estambul",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Vardzia y Svaneti son las dos etapas con circo: marshrutkas de dos o tres al día y cambios en pueblos sin cartel. Pregunta siempre a qué hora vuelve la última.",
      "Davit Gareja con el bus Gareji Line solo en temporada (abril-octubre); si la parte alta está cerrada por la frontera, sigue mereciendo la pena.",
      "En Svaneti no hay cajeros fiables fuera de Mestia: sube con laris.",
    ],
    meta: m,
  },
];
