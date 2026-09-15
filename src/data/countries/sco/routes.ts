import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Curación propia", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "sco-10d-cementerios-bunkeres-highlands",
    title: "ESCOCIA — 10 DÍAS: cementerios, búnkeres, Highlands y Orkney",
    days: 10,
    season: "mayo-junio o septiembre",
    summary: "Edimburgo oscuro, el búnker de Fife, Glasgow y su seminario en ruinas, Glencoe en bus, Inverness y el salto a Orkney por la Far North Line y el ferri. Vuelta en avión desde Kirkwall.",
    stops: [
      { cityId: "sco-edimburgo", nights: 2, placeIds: ["sco-edimburgo-mary-kings-close", "sco-edimburgo-greyfriars", "sco-edimburgo-surgeons-hall", "sco-edimburgo-ataudes-arthur-seat", "sco-forth-bridge"], legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true, price: "≈ 60-150 € i/v", note: "Ryanair, Vueling o easyJet directo; tranvía del aeropuerto al centro" } },
      { cityId: "sco-st-andrews", nights: 1, placeIds: ["sco-fife-secret-bunker"], legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", price: "≈ 12 £", note: "X59 desde Edinburgh Bus Station" } },
      { cityId: "sco-glasgow", nights: 2, placeIds: ["sco-glasgow-necropolis", "sco-cardross-st-peters", "sco-glasgow-panopticon"], legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", note: "bus a Leuchars + tren vía Edimburgo" } },
      { cityId: "sco-fort-william", nights: 1, placeIds: ["sco-glencoe"], legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, price: "≈ 25 £", note: "Citylink 915: bajar en Glencoe, seguir en el siguiente bus" } },
      { cityId: "sco-inverness", nights: 2, placeIds: ["sco-culloden", "sco-clava-cairns", "sco-loch-ness"], legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", note: "Citylink 919 por Loch Ness" } },
      { cityId: "sco-thurso", nights: 0, placeIds: [], note: "de paso hacia el ferri", legFromPrevious: { mode: "tren", durationMin: 230, noCarDifficulty: "ok", bookAhead: true, note: "Far North Line; bus al puerto de Scrabster" } },
      { cityId: "sco-kirkwall", nights: 2, placeIds: ["sco-orkney-scapa-flow", "sco-orkney-neolitico"], legFromPrevious: { mode: "ferry", durationMin: 90, noCarDifficulty: "ok", bookAhead: true, price: "≈ 20 £", note: "Scrabster → Stromness; bus X1 a Kirkwall" } },
    ],
    warnings: [
      "El Secret Bunker exige bus 95 más 2 km a pie o taxi desde Anstruther: cuenta media jornada.",
      "Orkney fuera de verano: buses escasos hacia los yacimientos; reserva tour de día o taxi.",
      "Reserva trenes 'advance' con semanas: el billete del día cuesta el doble.",
      "Vuelo Kirkwall → Edimburgo (Loganair) al final; si no, ferri a Aberdeen y tren.",
    ],
    meta: m,
  },
  {
    id: "sco-5d-edimburgo-oscuro",
    title: "5 DÍAS: Edimburgo oscuro, Rosslyn, el búnker y Glasgow",
    days: 5,
    season: "cualquier mes; octubre para Samhuinn, abril para Beltane",
    summary: "Base en Edimburgo con la ciudad subterránea, los cementerios y el museo de cirujanos, Rosslyn en bus urbano, un día para el búnker de Fife y remate en Glasgow.",
    stops: [
      { cityId: "sco-edimburgo", nights: 3, placeIds: ["sco-edimburgo-mary-kings-close", "sco-edimburgo-greyfriars", "sco-edimburgo-surgeons-hall", "sco-edimburgo-ataudes-arthur-seat", "sco-rosslyn-chapel", "sco-forth-bridge"], legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "sco-st-andrews", nights: 1, placeIds: ["sco-fife-secret-bunker"], legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "aviso", note: "X59 a St Andrews y luego bus 95 + 2 km a pie o taxi al búnker" } },
      { cityId: "sco-glasgow", nights: 1, placeIds: ["sco-glasgow-necropolis", "sco-cardross-st-peters"], legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" } },
    ],
    warnings: ["Vuelo de vuelta desde Glasgow (Jet2 estacional) o tren de 50 min a Edimburgo."],
    meta: m,
  },
  {
    id: "sco-14d-up-helly-aa",
    title: "14 DÍAS (enero): Up Helly Aa, la Clavie y la Escocia de invierno",
    days: 14,
    season: "enero, alrededor del último martes",
    summary: "Ciudades oscuras con 7 horas de luz, la Clavie en Burghead el día 11 si cuadra, ferri nocturno a Shetland para el desfile vikingo y Orkney a la vuelta. El viaje de fuego.",
    stops: [
      { cityId: "sco-edimburgo", nights: 3, placeIds: ["sco-edimburgo-mary-kings-close", "sco-edimburgo-greyfriars", "sco-edimburgo-surgeons-hall", "sco-edimburgo-ataudes-arthur-seat"], legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "sco-glasgow", nights: 2, placeIds: ["sco-glasgow-necropolis", "sco-cardross-st-peters", "sco-glasgow-panopticon"], legFromPrevious: { mode: "tren", durationMin: 50, noCarDifficulty: "ok" } },
      { cityId: "sco-inverness", nights: 2, placeIds: ["sco-culloden", "sco-clava-cairns", "sco-loch-ness"], legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, note: "Highland Main Line desde Glasgow Queen Street" } },
      { cityId: "sco-aberdeen", nights: 1, placeIds: [], note: "Burning of the Clavie el 11 en Burghead: tren a Elgin + bus; si no cuadra, día en Aberdeen", legFromPrevious: { mode: "tren", durationMin: 140, noCarDifficulty: "ok" } },
      { cityId: "sco-lerwick", nights: 4, placeIds: ["sco-shetland-jarlshof"], note: "Up Helly Aa el último martes; los días previos, Jarlshof y Lerwick", legFromPrevious: { mode: "ferry", durationMin: 750, noCarDifficulty: "ok", bookAhead: true, price: "≈ 40-120 £ según cabina", note: "NorthLink nocturno Aberdeen → Lerwick, 12 h; reservar con meses" } },
      { cityId: "sco-kirkwall", nights: 2, placeIds: ["sco-orkney-scapa-flow", "sco-orkney-neolitico"], legFromPrevious: { mode: "ferry", durationMin: 480, noCarDifficulty: "aviso", bookAhead: true, note: "NorthLink Lerwick → Kirkwall, pocas frecuencias en invierno; alternativa: vuelo Loganair" } },
    ],
    warnings: [
      "Alojamiento en Lerwick para Up Helly Aa: reservar con un año; alternativa, ferri como hotel.",
      "Ferris de invierno se cancelan con temporal: no programes el vuelo de vuelta el día siguiente.",
      "En Orkney en enero los yacimientos se ven con taxi o tour; Skara Brae abre con horario reducido.",
    ],
    meta: m,
  },
];
