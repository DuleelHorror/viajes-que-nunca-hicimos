import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "ba-10d-asedio-bunker-y-neretva",
    title: "BOSNIA — 10 DÍAS: el asedio, el búnker de Tito y el Neretva en Talgo",
    days: 10,
    season: "de abril a octubre",
    summary:
      "Sarajevo con el túnel, la pista olímpica y la Sniper Alley; el bus a Srebrenica con noche; el Talgo por el cañón parando en el búnker de Tito y el puente volado; Mostar con su puente y su torre de francotirador. Entrada por Sarajevo (Girona con Ryanair) y salida por Mostar o Dubrovnik.",
    stops: [
      {
        cityId: "ba-sarajevo",
        nights: 4,
        placeIds: ["ba-sarajevo-tunel-esperanza", "ba-sarajevo-sniper-alley", "ba-sarajevo-pista-bobsleigh", "ba-sarajevo-galeria-11-07-95", "ba-sarajevo-vraca", "ba-sarajevo-puente-latino"],
        legFromPrevious: { mode: "avion", durationMin: 140, noCarDifficulty: "ok", bookAhead: true, price: "50-150 €", note: "Girona → Sarajevo directo con Ryanair, 2 h 20; desde El Prat, con escala en Viena o Zagreb. Del aeropuerto, bus o taxi de 10 €" },
      },
      {
        cityId: "ba-srebrenica",
        nights: 1,
        placeIds: ["ba-srebrenica-potocari"],
        note: "bajarse en Potočari a la ida, dormir en Srebrenica y volver a Sarajevo por la mañana",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", price: "≈ 10 €", note: "desde Lukavica (Sarajevo Este), 2-3 buses al día; confirmar la vuelta" },
      },
      {
        cityId: "ba-sarajevo",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso" },
      },
      {
        cityId: "ba-konjic",
        nights: 1,
        placeIds: ["ba-konjic-bunker-tito"],
        note: "Talgo de las 7:15 y visita del búnker a las 12; noche en Konjic o seguir en el Talgo de la tarde",
        legFromPrevious: { mode: "tren", durationMin: 60, noCarDifficulty: "ok", price: "≈ 3 €" },
      },
      {
        cityId: "ba-mostar",
        nights: 3,
        placeIds: ["ba-jablanica-puente-neretva", "ba-mostar-puente-y-torre-francotirador", "ba-mostar-cementerio-partisano", "ba-blagaj-tekija"],
        note: "Jablanica se hace bajando del Talgo y cogiendo el siguiente; salida en avión desde Mostar (pocos vuelos) o bus a Dubrovnik (3 h) o Split",
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok", price: "≈ 3 €", note: "el tramo del cañón" },
      },
    ],
    warnings: [
      "Sarajevo tiene dos estaciones de bus según la entidad: a Srebrenica y Tjentište se sale de Lukavica (Sarajevo Este), a Mostar y al resto de la Federación, de la central. Comprueba cuál.",
      "El búnker de Tito se reserva con la agencia de Konjic con días: las visitas son a las 9, 12 y 15 y cierran los lunes.",
      "El Talgo son dos al día: si pierdes el de la tarde, hay buses Sarajevo–Mostar cada hora, sin cañón.",
    ],
    meta: m,
  },
  {
    id: "ba-5d-sarajevo-y-mostar",
    title: "5 DÍAS: Sarajevo y Mostar en Talgo, con el búnker",
    days: 5,
    season: "todo el año",
    summary: "La escapada: el túnel, la pista de bobsleigh y la Sniper Alley; el Talgo con parada en el búnker de Tito; Mostar con puente y torre. Vuelo de vuelta desde Sarajevo o bus a Dubrovnik.",
    stops: [
      {
        cityId: "ba-sarajevo",
        nights: 3,
        placeIds: ["ba-sarajevo-tunel-esperanza", "ba-sarajevo-sniper-alley", "ba-sarajevo-pista-bobsleigh", "ba-sarajevo-galeria-11-07-95"],
        legFromPrevious: { mode: "avion", durationMin: 140, noCarDifficulty: "ok", bookAhead: true, note: "Ryanair desde Girona" },
      },
      {
        cityId: "ba-konjic",
        nights: 0,
        placeIds: ["ba-konjic-bunker-tito"],
        note: "parada de medio día entre dos Talgos",
        legFromPrevious: { mode: "tren", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "ba-mostar",
        nights: 2,
        placeIds: ["ba-mostar-puente-y-torre-francotirador", "ba-mostar-cementerio-partisano"],
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["El Talgo de la mañana sale a las 7:15: la parada en Konjic para el búnker de las 9 o de las 12 obliga a madrugar."],
    meta: m,
  },
  {
    id: "ba-14d-el-completo-con-tjentiste-y-trebinje",
    title: "14 DÍAS: el completo, con Tjentište, Trebinje y salida por Dubrovnik",
    days: 14,
    season: "de mayo a octubre",
    summary:
      "Lo anterior más el este serbio: el bus por el valle de Sutjeska bajándose en el espomenik de Tjentište, con noche en el valle, y Trebinje para el vino y la salida a Dubrovnik. Es Bosnia entera con dos apuestas de horario de bus y cero coche.",
    stops: [
      {
        cityId: "ba-sarajevo",
        nights: 4,
        placeIds: ["ba-sarajevo-tunel-esperanza", "ba-sarajevo-sniper-alley", "ba-sarajevo-pista-bobsleigh", "ba-sarajevo-galeria-11-07-95", "ba-sarajevo-vraca", "ba-sarajevo-puente-latino"],
        legFromPrevious: { mode: "avion", durationMin: 140, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "ba-srebrenica",
        nights: 1,
        placeIds: ["ba-srebrenica-potocari"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso" },
      },
      {
        cityId: "ba-sarajevo",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso" },
      },
      {
        cityId: "ba-konjic",
        nights: 1,
        placeIds: ["ba-konjic-bunker-tito"],
        legFromPrevious: { mode: "tren", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "ba-jablanica",
        nights: 0,
        placeIds: ["ba-jablanica-puente-neretva"],
        legFromPrevious: { mode: "tren", durationMin: 20, noCarDifficulty: "ok" },
      },
      {
        cityId: "ba-mostar",
        nights: 3,
        placeIds: ["ba-mostar-puente-y-torre-francotirador", "ba-mostar-cementerio-partisano", "ba-blagaj-tekija"],
        legFromPrevious: { mode: "tren", durationMin: 50, noCarDifficulty: "ok" },
      },
      {
        cityId: "ba-sarajevo",
        nights: 1,
        placeIds: [],
        note: "vuelta a Sarajevo para coger el bus del este desde Lukavica",
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "ba-trebinje",
        nights: 3,
        placeIds: ["ba-tjentiste-espomenik", "ba-trebinje-ciudad"],
        note: "una de las tres noches en Tjentište (hotel de temporada o camping) entre dos buses; luego Trebinje y bus a Dubrovnik (40 min) para volar",
        legFromPrevious: { mode: "bus", durationMin: 240, noCarDifficulty: "dificil", note: "bus Lukavica–Trebinje bajándose en Tjentište; el siguiente al día siguiente" },
      },
    ],
    warnings: [
      "Tjentište sin coche es una apuesta: 3-4 buses al día que pasan por delante, y el hotel del valle solo abre en temporada. Confirma horarios en Lukavica y lleva comida.",
      "De Trebinje a Dubrovnik hay buses varios al día: el vuelo de vuelta desde Dubrovnik (Vueling directo a BCN) cierra el viaje sin volver a Sarajevo.",
      "Marcos convertibles: no se cambian fuera, saca lo justo. En la Republika Srpska los precios a veces se dicen en dinares por costumbre, pero se paga en marcos.",
    ],
    meta: m,
  },
];
