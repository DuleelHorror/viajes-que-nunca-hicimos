import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "hu-9d-estatuas-bunker-gulag-y-el-resort-del-partido",
    title: "HUNGRÍA — 9 DÍAS: las estatuas, el búnker del castillo, el Gulag y el resort del Partido",
    days: 9,
    season: "de abril a octubre",
    summary:
      "Budapest con Memento Park, la Casa del Terror y el hospital-búnker bajo el castillo; tren a Eger y bus al campo de Recsk; el tren de la orilla sur hasta el resort abandonado del Comité Central en el Balatón, con la ciudad fantasma soviética de Veszprém al lado; y Pécs, la ciudad del uranio. Con el DNI, low-cost y trenes de 10 €.",
    stops: [
      {
        cityId: "hu-budapest",
        nights: 4,
        placeIds: ["hu-memento-park", "hu-casa-del-terror", "hu-hospital-en-la-roca", "hu-citadella-y-estatua", "hu-metro-m1", "hu-kobanya-bodegas"],
        note: "Kőbánya solo si coincide una visita; el resto, metro y bus",
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "30-120 €", note: "BCN → Budapest con Wizz, Ryanair o Buzz (19/semana), 2 h 30; bus 100E al centro, 20 min" },
      },
      {
        cityId: "hu-eger",
        nights: 1,
        placeIds: ["hu-recsk-campo"],
        note: "bus de la mañana a Recsk y taxi al memorial; tarde de vino en Eger",
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", price: "≈ 8 €" },
      },
      {
        cityId: "hu-balatonaliga",
        nights: 1,
        placeIds: ["hu-club-aliga"],
        note: "noche en Balatonvilágos o Siófok (a dos paradas)",
        legFromPrevious: { mode: "tren", durationMin: 220, noCarDifficulty: "ok", note: "vuelta a Budapest y tren de la orilla sur desde Déli" },
      },
      {
        cityId: "hu-veszprem",
        nights: 1,
        placeIds: ["hu-szentkiralyszabadja-ciudad-fantasma"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok", note: "bus Siófok–Veszprém, 1 h, o tren por Székesfehérvár" },
      },
      {
        cityId: "hu-pecs",
        nights: 2,
        placeIds: ["hu-pecs-uranio-y-zsolnay", "hu-mohacs-busos"],
        note: "vuelo de vuelta desde Budapest (3 h 40 de tren) el último día",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", note: "Veszprém–Székesfehérvár–Pécs con cambio, o vía Budapest" },
      },
    ],
    warnings: [
      "Szentkirályszabadja está en demolición: puede que quede la mitad, puede que nada. Ve con la expectativa en el suelo y la cámara arriba.",
      "Club Aliga no tiene entrada oficial: se mira desde la playa pública y la valla, sin saltar (hay vigilante a ratos).",
      "El Hospital en la Roca solo se ve con guía cada hora: llega en punto o esperas.",
    ],
    meta: m,
  },
  {
    id: "hu-4d-budapest-oscura",
    title: "4 DÍAS: Budapest oscura, con Memento Park y el búnker",
    days: 4,
    season: "todo el año",
    summary: "El puente: Memento Park con las botas de Stalin, la Casa del Terror, el hospital-búnker bajo el castillo, la Citadela y el metro de 1896. Wizz y DNI.",
    stops: [
      {
        cityId: "hu-budapest",
        nights: 3,
        placeIds: ["hu-memento-park", "hu-casa-del-terror", "hu-hospital-en-la-roca"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "directo low-cost" },
      },
      {
        cityId: "hu-budapest",
        nights: 1,
        placeIds: ["hu-citadella-y-estatua", "hu-metro-m1"],
        note: "el último día, la Citadela por la mañana y el metro de 1896 de camino al aeropuerto",
        legFromPrevious: { mode: "metro", durationMin: 0, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Si cae el 20 de agosto, los fuegos del Danubio sustituyen a cualquier plan de la noche."],
    meta: m,
  },
  {
    id: "hu-13d-el-completo-con-holloko-y-salida-a-bratislava",
    title: "13 DÍAS: el completo, con Hollókő, Mohács y salida en tren a Bratislava",
    days: 13,
    season: "de abril a octubre (o febrero por el Busójárás)",
    summary:
      "Lo anterior más el pueblo palóc de Hollókő, un día en Mohács con los busós y su batalla, y la salida en el EC a Bratislava (2 h 30) para encadenar con la ficha de Eslovaquia, que es la pareja natural de esta. Es Hungría entera sin coche, con el norte en bus lento.",
    stops: [
      {
        cityId: "hu-budapest",
        nights: 4,
        placeIds: ["hu-memento-park", "hu-casa-del-terror", "hu-hospital-en-la-roca", "hu-citadella-y-estatua", "hu-metro-m1", "hu-kobanya-bodegas"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "hu-budapest",
        nights: 1,
        placeIds: ["hu-holloko"],
        note: "Hollókő en el día con el bus directo de Stadion (2 h por trayecto)",
        legFromPrevious: { mode: "bus", durationMin: 0, noCarDifficulty: "aviso" },
      },
      {
        cityId: "hu-eger",
        nights: 1,
        placeIds: ["hu-recsk-campo"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "hu-pecs",
        nights: 3,
        placeIds: ["hu-pecs-uranio-y-zsolnay", "hu-mohacs-busos"],
        legFromPrevious: { mode: "tren", durationMin: 360, noCarDifficulty: "ok", note: "Eger–Budapest–Pécs, un día de trenes" },
      },
      {
        cityId: "hu-balatonaliga",
        nights: 1,
        placeIds: ["hu-club-aliga"],
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", note: "Pécs–Székesfehérvár–Balatonaliga, o vía Budapest" },
      },
      {
        cityId: "hu-veszprem",
        nights: 1,
        placeIds: ["hu-szentkiralyszabadja-ciudad-fantasma"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "hu-budapest",
        nights: 2,
        placeIds: [],
        note: "vuelta a Budapest y EC a Bratislava (2 h 30, desde 9 €) para la ficha de Eslovaquia, o vuelo a casa",
        legFromPrevious: { mode: "tren", durationMin: 100, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Hollókő tiene dos buses al día desde Budapest: el de la mañana y el de la tarde; si pierdes el segundo, hay pensión.",
      "Budapest–Bratislava en tren son 15 EC al día: la pareja Hungría–Eslovaquia se hace en un solo viaje de tres semanas sin avión intermedio.",
      "Si vas en febrero por el Busójárás, quita el Balatón (frío y cerrado) y mete dos noches en Pécs.",
    ],
    meta: m,
  },
];
