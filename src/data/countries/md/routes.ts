import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "md-8d-urss-viva-gitanos-y-vino",
    title: "MOLDAVIA — 8 DÍAS: la URSS que sigue abierta, los palacios gitanos y el vino bajo tierra",
    days: 8,
    season: "de mayo a octubre",
    summary:
      "Chișinău con su circo abandonado y sus setas de hormigón, Cricova bajo tierra, el monje de la cueva de Orheiul Vechi, un día entero en Tiraspol y Bender con la tarjeta de 10 horas, y marshrutka al norte para la colina de los barones gitanos de Soroca. Todo en marshrutka desde la capital.",
    stops: [
      {
        cityId: "md-chisinau",
        nights: 4,
        placeIds: ["md-chisinau-circo", "md-chisinau-romanita-y-hoteles", "md-chisinau-memorial-eternitate", "md-cricova", "md-orheiul-vechi"],
        note: "un día de ciudad, uno de Cricova (reservado), uno de Orheiul Vechi",
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, price: "60-180 €", note: "BCN → Chișinău directo con Wizz, 3 h 20, dos o tres a la semana; trolebús 30 del aeropuerto al centro, 0,30 €" },
      },
      {
        cityId: "md-tiraspol",
        nights: 1,
        placeIds: ["md-tiraspol-urss-viva", "md-bender-fortaleza-y-1992"],
        note: "con noche en Tiraspol (reserva de hotel = tarjeta de 24 h) para verlo con calma; efectivo cambiado en la avenida",
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok", price: "≈ 2 €", note: "marshrutka desde la Gara Centrală; control de Transnistria en Bender" },
      },
      {
        cityId: "md-soroca",
        nights: 1,
        placeIds: ["md-soroca-colina-gitanos", "md-soroca-vela-de-la-gratitud"],
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso", note: "vuelta a Chișinău y marshrutka de la Gara de Nord a Soroca, 3 h; sal temprano" },
      },
      {
        cityId: "md-chisinau",
        nights: 2,
        placeIds: ["md-milestii-mici"],
        note: "Mileștii Mici en taxi la última tarde; vuelo de vuelta o el Prietenia a Bucarest",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Transnistria es efectivo puro: las tarjetas europeas no funcionan desde 2019. Cambia 20-30 € a rublos transnistrios al llegar y gástalos, porque fuera no valen nada.",
      "La tarjeta de migración de Transnistria es de 10 horas; con reserva de hotel te dan 24. Guárdala: la piden a la salida.",
      "Cricova y Mileștii Mici se reservan online con días; sin reserva no entras.",
      "Comprueba la situación de Transnistria antes de ir: la guerra de Ucrania y la crisis de gas de 2025 la cambian de un mes a otro.",
    ],
    meta: m,
  },
  {
    id: "md-4d-chisinau-tiraspol-cricova",
    title: "4 DÍAS: Chișinău, Tiraspol y Cricova",
    days: 4,
    season: "todo el año",
    summary: "La escapada de puente: el circo abandonado y las setas de hormigón, un día en la URSS de Tiraspol y la ciudad del vino bajo tierra. Sale con el Wizz del jueves.",
    stops: [
      {
        cityId: "md-chisinau",
        nights: 2,
        placeIds: ["md-chisinau-circo", "md-chisinau-romanita-y-hoteles", "md-cricova"],
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, note: "Wizz directo" },
      },
      {
        cityId: "md-tiraspol",
        nights: 0,
        placeIds: ["md-tiraspol-urss-viva"],
        note: "ida y vuelta en el día con la tarjeta de 10 horas",
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok" },
      },
      {
        cityId: "md-chisinau",
        nights: 2,
        placeIds: ["md-chisinau-memorial-eternitate"],
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Wizz vuela a Chișinău dos o tres días a la semana: el puente lo marca la aerolínea, no tú."],
    meta: m,
  },
  {
    id: "md-11d-el-completo-con-gagauzia-y-el-prietenia",
    title: "11 DÍAS: el completo, con Gagauzia y salida en el Prietenia a Bucarest",
    days: 11,
    season: "septiembre-octubre (por el Día del Vino y el 2 de septiembre)",
    summary:
      "Lo anterior más Comrat y la autonomía gagauza al sur, dos noches en Soroca para la vela y la colina con calma, y la salida en el tren nocturno Prietenia a Bucarest con el cambio de ruedas a medianoche en Ungheni, para encadenar con la ficha de Rumanía o volar desde allí.",
    stops: [
      {
        cityId: "md-chisinau",
        nights: 4,
        placeIds: ["md-chisinau-circo", "md-chisinau-romanita-y-hoteles", "md-chisinau-memorial-eternitate", "md-cricova", "md-orheiul-vechi"],
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "md-tiraspol",
        nights: 1,
        placeIds: ["md-tiraspol-urss-viva", "md-bender-fortaleza-y-1992"],
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok" },
      },
      {
        cityId: "md-comrat",
        nights: 1,
        placeIds: ["md-comrat-gagauzia"],
        legFromPrevious: { mode: "bus", durationMin: 240, noCarDifficulty: "aviso", note: "vuelta a Chișinău y marshrutka de la Gara de Sud" },
      },
      {
        cityId: "md-soroca",
        nights: 2,
        placeIds: ["md-soroca-colina-gitanos", "md-soroca-vela-de-la-gratitud"],
        legFromPrevious: { mode: "bus", durationMin: 330, noCarDifficulty: "aviso", note: "Comrat–Chișinău–Soroca, un día de marshrutkas" },
      },
      {
        cityId: "md-chisinau",
        nights: 2,
        placeIds: ["md-milestii-mici"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "md-ungheni",
        nights: 1,
        placeIds: ["md-ungheni-cambio-de-bogies"],
        note: "la noche en el Prietenia: sale de Chișinău a las 16:50, cambio de ruedas en Ungheni y Bucarest a las 6:38",
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", bookAhead: true, price: "≈ 30 €", note: "literas de la URSS con samovar" },
      },
    ],
    warnings: [
      "El Prietenia se compra en la Gara de Chișinău con días o en cfrcalatori.ro; el compartimento de 2 vale la diferencia.",
      "Comrat es medio día de contenido y un día de marshrutkas: solo si te va lo raro de verdad.",
      "El 2 de septiembre en Tiraspol y el primer fin de semana de octubre en Chișinău son las dos fechas que justifican el mes.",
    ],
    meta: m,
  },
];
