import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "sco-10d-cementerios-bunkeres-highlands",
    title: "ESCOCIA — 10 DÍAS: cementerios, búnkeres, Highlands y Orkney",
    days: 10,
    season: "mayo-junio o septiembre",
    summary: "Edimburgo turbio, el búnker de Fife, Glasgow y su seminario en ruinas, Glencoe en bus, Inverness y el salto a Orkney por la Far North Line y el ferri. Vuelta en avión desde Kirkwall. Es el viaje.",
    stops: [
      { cityId: "sco-edimburgo", nights: 2, placeIds: ["sco-edimburgo-mary-kings-close", "sco-edimburgo-greyfriars", "sco-edimburgo-surgeons-hall", "sco-edimburgo-ataudes-arthur-seat", "sco-forth-bridge"], legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true, price: "≈ 60-150 € i/v", note: "Ryanair, Vueling o easyJet directo; del aeropuerto al centro en tranvía" } },
      { cityId: "sco-st-andrews", nights: 1, placeIds: ["sco-fife-secret-bunker"], legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", price: "≈ 12 £", note: "X59 desde Edinburgh Bus Station" } },
      { cityId: "sco-glasgow", nights: 2, placeIds: ["sco-glasgow-necropolis", "sco-cardross-st-peters", "sco-glasgow-panopticon"], legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", note: "bus a Leuchars y tren vía Edimburgo" } },
      { cityId: "sco-fort-william", nights: 1, placeIds: ["sco-glencoe"], legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, price: "≈ 25 £", note: "Citylink 915: bájate en Glencoe y sigue en el siguiente bus" } },
      { cityId: "sco-inverness", nights: 2, placeIds: ["sco-culloden", "sco-clava-cairns", "sco-loch-ness"], legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", note: "Citylink 919 bordeando el Loch Ness" } },
      { cityId: "sco-thurso", nights: 0, placeIds: [], note: "de paso hacia el ferri", legFromPrevious: { mode: "tren", durationMin: 230, noCarDifficulty: "ok", bookAhead: true, note: "Far North Line; bus al puerto de Scrabster" } },
      { cityId: "sco-kirkwall", nights: 2, placeIds: ["sco-orkney-scapa-flow", "sco-orkney-neolitico"], legFromPrevious: { mode: "ferry", durationMin: 90, noCarDifficulty: "ok", bookAhead: true, price: "≈ 20 £", note: "Scrabster → Stromness; bus X1 a Kirkwall" } },
    ],
    warnings: [
      "El Secret Bunker es bus 95 más 2 km andando o taxi desde Anstruther: cuenta media jornada.",
      "Orkney fuera del verano: pocos buses a los yacimientos; reserva tour de día o taxi.",
      "Reserva los trenes «advance» con semanas: el billete del día cuesta el doble.",
      "Vuelo Kirkwall → Edimburgo (Loganair) al final; si no, ferri a Aberdeen y tren.",
    ],
    meta: m,
  },
  {
    id: "sco-5d-edimburgo-oscuro",
    title: "5 DÍAS: Edimburgo turbio, Rosslyn, el búnker y Glasgow",
    days: 5,
    season: "cualquier mes; octubre para Samhuinn, abril para Beltane",
    summary: "Base en Edimburgo con la ciudad enterrada, los cementerios y el museo de cirujanos, Rosslyn en bus urbano, un día para el búnker de Fife y remate en Glasgow. Viaje rápido, pero con mandanga.",
    stops: [
      { cityId: "sco-edimburgo", nights: 3, placeIds: ["sco-edimburgo-mary-kings-close", "sco-edimburgo-greyfriars", "sco-edimburgo-surgeons-hall", "sco-edimburgo-ataudes-arthur-seat", "sco-rosslyn-chapel", "sco-forth-bridge"], legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "sco-st-andrews", nights: 1, placeIds: ["sco-fife-secret-bunker"], legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "aviso", note: "X59 a St Andrews y luego bus 95 más 2 km andando o taxi al búnker" } },
      { cityId: "sco-glasgow", nights: 1, placeIds: ["sco-glasgow-necropolis", "sco-cardross-st-peters"], legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" } },
    ],
    warnings: ["Vuelo de vuelta desde Glasgow (Jet2, solo de temporada) o tren de 50 minutos a Edimburgo."],
    meta: m,
  },
  {
    id: "sco-14d-up-helly-aa",
    title: "14 DÍAS (enero): Up Helly Aa, la Clavie y la Escocia de invierno",
    days: 14,
    season: "enero, alrededor del último martes",
    summary: "Ciudades oscuras con siete horas de luz, la Clavie en Burghead el día 11 si cuadra, ferri nocturno a Shetland para el desfile vikingo y Orkney a la vuelta. El viaje del fuego. Nivel: sales del hotel y reconsideras tus decisiones vitales, pero merece la pena.",
    stops: [
      { cityId: "sco-edimburgo", nights: 3, placeIds: ["sco-edimburgo-mary-kings-close", "sco-edimburgo-greyfriars", "sco-edimburgo-surgeons-hall", "sco-edimburgo-ataudes-arthur-seat"], legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "sco-glasgow", nights: 2, placeIds: ["sco-glasgow-necropolis", "sco-cardross-st-peters", "sco-glasgow-panopticon"], legFromPrevious: { mode: "tren", durationMin: 50, noCarDifficulty: "ok" } },
      { cityId: "sco-inverness", nights: 2, placeIds: ["sco-culloden", "sco-clava-cairns", "sco-loch-ness"], legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, note: "Highland Main Line desde Glasgow Queen Street" } },
      { cityId: "sco-aberdeen", nights: 1, placeIds: [], note: "Burning of the Clavie el 11 en Burghead: tren a Elgin y bus; si no cuadra, día en Aberdeen", legFromPrevious: { mode: "tren", durationMin: 140, noCarDifficulty: "ok" } },
      { cityId: "sco-lerwick", nights: 4, placeIds: ["sco-shetland-jarlshof"], note: "Up Helly Aa el último martes; los días antes, Jarlshof y Lerwick", legFromPrevious: { mode: "ferry", durationMin: 750, noCarDifficulty: "ok", bookAhead: true, price: "≈ 40-120 £ según cabina", note: "NorthLink nocturno Aberdeen → Lerwick, 12 h; reserva con meses" } },
      { cityId: "sco-kirkwall", nights: 2, placeIds: ["sco-orkney-scapa-flow", "sco-orkney-neolitico"], legFromPrevious: { mode: "ferry", durationMin: 480, noCarDifficulty: "aviso", bookAhead: true, note: "NorthLink Lerwick → Kirkwall, pocas frecuencias en invierno; alternativa, vuelo Loganair" } },
    ],
    warnings: [
      "Cama en Lerwick para Up Helly Aa: reserva con un año; si no, el ferri hace de hotel.",
      "Los ferris de invierno se cancelan con temporal: no pongas el vuelo de vuelta al día siguiente.",
      "En Orkney en enero los yacimientos se ven en taxi o tour; Skara Brae abre con horario corto.",
    ],
    meta: m,
  },
];
