import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "gr-12d-la-junta-el-cremallera-y-la-isla-de-los-leprosos",
    title: "GRECIA — 12 DÍAS: las celdas de la Junta, el cremallera de Kalavryta, Meteora y la isla de los leprosos",
    days: 12,
    season: "de marzo a junio o de septiembre a noviembre",
    summary:
      "Atenas con el Parque de la Libertad, el Politécnico y Eleusis entre refinerías, el cremallera a Kalavryta y su reloj parado, Delfos en KTEL, Meteora en bus (hasta que vuelva el tren), y el ferry nocturno a Creta para Spinalonga y Knossos. Con el DNI, euro, Aegean y Vueling a diario.",
    stops: [
      {
        cityId: "gr-atenas",
        nights: 3,
        placeIds: ["gr-atenas-parque-libertad-eat-esa", "gr-atenas-politecnico", "gr-atenas-museo-guerra-y-hilton", "gr-elefsina"],
        legFromPrevious: { mode: "avion", durationMin: 195, noCarDifficulty: "ok", bookAhead: true, price: "85-200 €", note: "BCN → Atenas con Aegean o Vueling (3 h 15); metro al centro, 40 min, 9 €" },
      },
      {
        cityId: "gr-kalavryta",
        nights: 1,
        placeIds: ["gr-kalavryta-cremallera-masacre"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok", price: "≈ 25 €", note: "Proastiakós a Kiato, regional o bus a Diakofto, y el cremallera" },
      },
      {
        cityId: "gr-atenas",
        nights: 1,
        placeIds: ["gr-delfos"],
        note: "vuelta a Atenas por la mañana y KTEL a Delfos en el día (o noche en Delfos y bus a Kalambaka por Lamia)",
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
      {
        cityId: "gr-kalambaka",
        nights: 2,
        placeIds: ["gr-meteora"],
        legFromPrevious: { mode: "bus", durationMin: 270, noCarDifficulty: "ok", price: "≈ 30 €", note: "bus exprés desde Liosion, 4 h 30; o tren a Palaiofarsalos + bus, 5-6 h" },
      },
      {
        cityId: "gr-tesalonica",
        nights: 2,
        placeIds: ["gr-tesalonica-torre-blanca-zeitenlik"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", note: "KTEL Kalambaka–Trikala–Tesalónica, 3 h; o tren desde Palaiofarsalos" },
      },
      {
        cityId: "gr-heraklion",
        nights: 1,
        placeIds: ["gr-knossos"],
        legFromPrevious: { mode: "avion", durationMin: 90, noCarDifficulty: "ok", bookAhead: true, price: "40-90 €", note: "vuelo Tesalónica–Heraklion (Aegean, SKY express); o tren a Atenas y ferry nocturno" },
      },
      {
        cityId: "gr-agios-nikolaos",
        nights: 2,
        placeIds: ["gr-spinalonga", "gr-heraklion-arkadi"],
        note: "Spinalonga con el bus a Plaka; vuelo de vuelta desde Heraklion (con escala) o ferry nocturno al Pireo y vuelo desde Atenas",
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok", price: "8 €" },
      },
    ],
    warnings: [
      "El tren Atenas–Tesalónica sigue en obras después de Tempi: cortes de semanas y tramos en bus. Mira hellenictrain.gr la semana antes y no cuentes con el tren a Meteora hasta que reabra.",
      "El cremallera de Kalavryta se agota los fines de semana: reserva; y el enlace a Diakofto cambia entre tren y bus.",
      "Spinalonga: de noviembre a marzo los barcos van a demanda y puede no haber; la entrada son 20 €.",
      "Grecia va a la hora griega: los KTEL salen puntuales, todo lo demás no.",
    ],
    meta: m,
  },
  {
    id: "gr-6d-atenas-oscura-y-kalavryta",
    title: "6 DÍAS: la Atenas de la Junta, Eleusis y el cremallera",
    days: 6,
    season: "todo el año",
    summary: "La escapada: tres días de Atenas sin Acrópolis (o con ella, si te empeñas): las celdas de EAT-ESA, el Politécnico, Eleusis entre refinerías; Kalavryta con el cremallera y el reloj parado, y Delfos en KTEL.",
    stops: [
      {
        cityId: "gr-atenas",
        nights: 3,
        placeIds: ["gr-atenas-parque-libertad-eat-esa", "gr-atenas-politecnico", "gr-atenas-museo-guerra-y-hilton", "gr-elefsina"],
        legFromPrevious: { mode: "avion", durationMin: 195, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "gr-kalavryta",
        nights: 1,
        placeIds: ["gr-kalavryta-cremallera-masacre"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
      {
        cityId: "gr-atenas",
        nights: 2,
        placeIds: ["gr-delfos"],
        note: "Delfos en el día en KTEL; vuelo",
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["El Parque de la Libertad cierra los lunes y a mediodía: ve por la tarde (17-21)."],
    meta: m,
  },
  {
    id: "gr-16d-el-completo-con-chios-o-anastenaria",
    title: "16 DÍAS: el completo, con la guerra de cohetes de Chios en Pascua o los anastenarides en mayo",
    days: 16,
    season: "abril (Pascua ortodoxa) o mayo (21-23, Anastenaria)",
    summary:
      "Lo anterior con calma más el festival raro: la Pascua ortodoxa en Chios con los cohetes (ferry nocturno desde el Pireo) o los que andan sobre brasas en Langadas desde Tesalónica. Y Creta con Arkadi además de Spinalonga. Grecia entera sin coche, con sus buses puntuales y sus trenes en obras.",
    stops: [
      {
        cityId: "gr-atenas",
        nights: 4,
        placeIds: ["gr-atenas-parque-libertad-eat-esa", "gr-atenas-politecnico", "gr-atenas-museo-guerra-y-hilton", "gr-elefsina", "gr-makronisos-gyaros"],
        note: "Makronisos solo si juntas gente para un barco en Lavrio; si no, se cuenta y ya",
        legFromPrevious: { mode: "avion", durationMin: 195, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "gr-kalavryta",
        nights: 1,
        placeIds: ["gr-kalavryta-cremallera-masacre"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
      {
        cityId: "gr-atenas",
        nights: 1,
        placeIds: ["gr-delfos"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
      {
        cityId: "gr-kalambaka",
        nights: 2,
        placeIds: ["gr-meteora"],
        legFromPrevious: { mode: "bus", durationMin: 270, noCarDifficulty: "ok" },
      },
      {
        cityId: "gr-tesalonica",
        nights: 3,
        placeIds: ["gr-tesalonica-torre-blanca-zeitenlik"],
        note: "tres noches para los anastenarides de Langadas (21-23 de mayo) si es la fecha",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "gr-heraklion",
        nights: 2,
        placeIds: ["gr-knossos", "gr-heraklion-arkadi"],
        legFromPrevious: { mode: "avion", durationMin: 90, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "gr-agios-nikolaos",
        nights: 2,
        placeIds: ["gr-spinalonga"],
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok" },
      },
      {
        cityId: "gr-atenas",
        nights: 1,
        placeIds: [],
        note: "ferry nocturno Heraklion–Pireo (9 h) o vuelo, y el vuelo a BCN; si es Pascua, cambia Creta por Chios (ferry nocturno desde el Pireo)",
        legFromPrevious: { mode: "ferry", durationMin: 540, noCarDifficulty: "ok", price: "desde 40 €" },
      },
    ],
    warnings: [
      "La Pascua ortodoxa cambia cada año (abril o mayo) y Chios se llena: ferry y cama con un mes.",
      "Los anastenarides son el 21-23 de mayo fijos; el bus de vuelta de Langadas de noche es escaso, lleva el número de un taxi.",
      "Con 16 días, un Eurail griego no compensa: los KTEL y los ferris son lo caro y no entran.",
    ],
    meta: m,
  },
];
