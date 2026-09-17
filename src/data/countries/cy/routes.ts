import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "cy-9d-la-isla-partida",
    title: "CHIPRE — 9 DÍAS: la isla partida, de la Línea Verde a Varosha en bus",
    days: 9,
    season: "de octubre a mayo (en verano, 40 °C)",
    summary:
      "Larnaca con sus santos, Nicosia cruzando la Línea Verde a pie y los dos museos de propaganda, Kyrenia y Bellapais en bus por el norte, Famagusta con Varosha en bici y Salamina, y Limassol con Kourion cruzando la base británica. Sin tren, todo en InterCity y buses del norte, con el DNI y euros (y liras).",
    stops: [
      {
        cityId: "cy-larnaca",
        nights: 1,
        placeIds: ["cy-larnaca-hala-sultan-lago-salado"],
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true, price: "60-150 €", note: "BCN → Larnaca directo (Vueling, Ryanair, Wizz, Aegean); bus 425 al centro, 20 min" },
      },
      {
        cityId: "cy-nicosia",
        nights: 3,
        placeIds: ["cy-nicosia-linea-verde", "cy-nicosia-zona-tampon-ledra-palace", "cy-nicosia-museos-de-la-lucha", "cy-kyrenia-castillo-pecio", "cy-bellapais"],
        note: "Kyrenia y Bellapais en el día cruzando por Ledra Street y con el VirgoBus",
        legFromPrevious: { mode: "bus", durationMin: 45, noCarDifficulty: "ok", price: "4 €" },
      },
      {
        cityId: "cy-famagusta",
        nights: 2,
        placeIds: ["cy-varosha", "cy-famagusta-murallas-salamina"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok", price: "≈ 3 €", note: "cruzar a pie por Ledra Street y bus İtimat desde la terminal del norte" },
      },
      {
        cityId: "cy-limassol",
        nights: 2,
        placeIds: ["cy-choirokoitia", "cy-kourion-akrotiri"],
        note: "Choirokoitia bajándose del InterCity a la ida",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", note: "bus a Nicosia norte, cruzar a pie y InterCity Nicosia–Limassol (1 h 15)" },
      },
      {
        cityId: "cy-larnaca",
        nights: 1,
        placeIds: ["cy-zenobia"],
        note: "último día con el Zenobia (bautizo de buceo) o la playa, y el vuelo",
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok", price: "4 €" },
      },
    ],
    warnings: [
      "Entra y sal por Larnaca (sur): entrar por Ercan (norte) y pasar al sur es ilegal para la República de Chipre y te puede costar la entrada.",
      "Cruzar la Línea Verde es gratis y con el DNI, pero en el norte se paga en liras turcas o euros a mal cambio: lleva efectivo pequeño.",
      "Varosha abre a las 8 y cierra al anochecer; los horarios cambian sin aviso y las zonas valladas siguen siendo militares: nada de saltar.",
      "En julio y agosto Nicosia pasa de 40 °C y Varosha no tiene sombra.",
    ],
    meta: m,
  },
  {
    id: "cy-5d-nicosia-y-varosha",
    title: "5 DÍAS: Nicosia, la Línea Verde y Varosha",
    days: 5,
    season: "todo el año menos julio y agosto",
    summary: "La escapada: dos noches en Nicosia cruzando de país a mediodía, una en Famagusta para Varosha en bici a primera hora, y Larnaca de entrada y salida.",
    stops: [
      {
        cityId: "cy-larnaca",
        nights: 1,
        placeIds: ["cy-larnaca-hala-sultan-lago-salado"],
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "cy-nicosia",
        nights: 2,
        placeIds: ["cy-nicosia-linea-verde", "cy-nicosia-museos-de-la-lucha", "cy-nicosia-zona-tampon-ledra-palace"],
        legFromPrevious: { mode: "bus", durationMin: 45, noCarDifficulty: "ok" },
      },
      {
        cityId: "cy-famagusta",
        nights: 1,
        placeIds: ["cy-varosha", "cy-famagusta-murallas-salamina"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "cy-larnaca",
        nights: 1,
        placeIds: [],
        note: "de Famagusta a Larnaca por el norte (bus a Nicosia, cruzar, InterCity) o por el paso de Pergamos en taxi",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "aviso" },
      },
    ],
    warnings: ["Los buses del norte paran a las 18:00: Varosha se hace por la mañana y se vuelve a Nicosia por la tarde si no duermes en Famagusta."],
    meta: m,
  },
  {
    id: "cy-12d-el-completo-con-pafos-y-kataklysmos",
    title: "12 DÍAS: el completo, con Pafos y el Kataklysmós si es junio",
    days: 12,
    season: "de abril a junio (con el Kataklysmós) o de octubre a noviembre",
    summary:
      "Lo anterior con calma, más Pafos con las Tumbas de los Reyes, una noche extra en el norte para Salamina y San Bernabé, y Larnaca al final para el Kataklysmós, la batalla de agua de Pentecostés. Toda la isla en InterCity y buses turcos.",
    stops: [
      {
        cityId: "cy-larnaca",
        nights: 1,
        placeIds: ["cy-larnaca-hala-sultan-lago-salado"],
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "cy-nicosia",
        nights: 3,
        placeIds: ["cy-nicosia-linea-verde", "cy-nicosia-zona-tampon-ledra-palace", "cy-nicosia-museos-de-la-lucha"],
        legFromPrevious: { mode: "bus", durationMin: 45, noCarDifficulty: "ok" },
      },
      {
        cityId: "cy-kyrenia",
        nights: 1,
        placeIds: ["cy-kyrenia-castillo-pecio", "cy-bellapais"],
        legFromPrevious: { mode: "bus", durationMin: 50, noCarDifficulty: "ok" },
      },
      {
        cityId: "cy-famagusta",
        nights: 2,
        placeIds: ["cy-varosha", "cy-famagusta-murallas-salamina"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", note: "vía Nicosia norte" },
      },
      {
        cityId: "cy-limassol",
        nights: 2,
        placeIds: ["cy-choirokoitia", "cy-kourion-akrotiri"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso" },
      },
      {
        cityId: "cy-pafos",
        nights: 1,
        placeIds: ["cy-pafos-tumbas-reyes"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok", price: "4 €" },
      },
      {
        cityId: "cy-larnaca",
        nights: 2,
        placeIds: ["cy-zenobia"],
        note: "el Kataklysmós en el paseo si cae en fecha; vuelo",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", note: "InterCity Pafos–Larnaca directo" },
      },
    ],
    warnings: [
      "El Kataklysmós sigue la Pascua ortodoxa: puede caer en mayo o en junio, y ese fin de semana Larnaca se llena.",
      "Doce días en el sur son 90 de la UE; en el norte no sellan nada y no cuenta para nada.",
    ],
    meta: m,
  },
];
