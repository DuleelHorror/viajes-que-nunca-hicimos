import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "hr-10d-el-gulag-de-tito-vukovar-y-la-flor-de-piedra",
    title: "CROACIA — 10 DÍAS: el gulag de Tito, Vukovar, la Flor de Piedra y la isla de los dictadores",
    days: 10,
    season: "de mayo a octubre (los barcos a Goli Otok)",
    summary:
      "Zagreb con Novi Zagreb, el Museo de los 80 y el túnel, Jasenovac en tren, Vukovar con la torre y Ovčara, Rijeka con los torpedos y Rab para Goli Otok en barco, y Pula con los túneles y Brijuni. La Croacia que no es playa, en tren y bus, con el DNI y el euro.",
    stops: [
      {
        cityId: "hr-zagreb",
        nights: 3,
        placeIds: ["hr-novi-zagreb-y-museo-80", "hr-zagreb-tunel-gric", "hr-jasenovac", "hr-kumrovec"],
        note: "Jasenovac en tren en el día; Kumrovec si sobra una tarde",
        legFromPrevious: { mode: "avion", durationMin: 125, noCarDifficulty: "ok", bookAhead: true, price: "50-180 €", note: "BCN → Zagreb con Croatia Airlines (y Vueling en verano); bus del aeropuerto 8 €, 35 min" },
      },
      {
        cityId: "hr-vukovar",
        nights: 2,
        placeIds: ["hr-vukovar-torre-agua", "hr-ovcara-y-hospital"],
        legFromPrevious: { mode: "tren", durationMin: 330, noCarDifficulty: "ok", price: "≈ 19 €", note: "IC a Vinkovci y regional; o bus de 4 h" },
      },
      {
        cityId: "hr-rijeka",
        nights: 1,
        placeIds: ["hr-rijeka-torpedo-y-galeb"],
        legFromPrevious: { mode: "bus", durationMin: 420, noCarDifficulty: "ok", note: "bus Vukovar–Zagreb (4 h) y Zagreb–Rijeka (2 h 30); o tren con dos cambios" },
      },
      {
        cityId: "hr-rab",
        nights: 2,
        placeIds: ["hr-goli-otok"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", price: "≈ 20 €", note: "bus con ferry de Jablanac incluido" },
      },
      {
        cityId: "hr-pula",
        nights: 2,
        placeIds: ["hr-pula-zerostrasse", "hr-brijuni-tito"],
        note: "vuelo de vuelta desde Pula (Ryanair en verano) o bus a Zagreb (4-5 h)",
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso", note: "bus Rab–Rijeka y Rijeka–Pula" },
      },
    ],
    warnings: [
      "Goli Otok solo tiene barcos de mayo a octubre: fuera de eso, la isla se mira desde Rab y ya.",
      "El tren a Vukovar cambia en Vinkovci y tarda 5-6 h: el bus lo hace en 4; el nocturno de verano lo une con Split.",
      "Petrova Gora no está en la ruta porque no tiene bus: si vas, taxi desde Vojnić y aviso de ruina.",
      "El Galeb de Rijeka puede estar cerrado: la rampa de los torpedos se ve siempre.",
    ],
    meta: m,
  },
  {
    id: "hr-5d-zagreb-jasenovac-y-vukovar",
    title: "5 DÍAS: Zagreb, la Flor de Piedra y Vukovar",
    days: 5,
    season: "todo el año",
    summary: "La escapada seria: Novi Zagreb y el Museo de los 80, Jasenovac en tren y dos noches en Vukovar con la torre, Ovčara y el hospital. Sin playa, sin Dubrovnik, con el DNI.",
    stops: [
      {
        cityId: "hr-zagreb",
        nights: 2,
        placeIds: ["hr-novi-zagreb-y-museo-80", "hr-zagreb-tunel-gric", "hr-jasenovac"],
        legFromPrevious: { mode: "avion", durationMin: 125, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "hr-vukovar",
        nights: 2,
        placeIds: ["hr-vukovar-torre-agua", "hr-ovcara-y-hospital"],
        legFromPrevious: { mode: "tren", durationMin: 330, noCarDifficulty: "ok" },
      },
      {
        cityId: "hr-zagreb",
        nights: 1,
        placeIds: [],
        note: "vuelta en bus (4 h) para el vuelo",
        legFromPrevious: { mode: "bus", durationMin: 240, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Ovčara cierra a las 17: llega a Vukovar por la mañana o deja Ovčara para el segundo día."],
    meta: m,
  },
  {
    id: "hr-14d-el-completo-con-el-nocturno-a-split-y-la-alka",
    title: "14 DÍAS: el completo, con Petrova Gora en taxi, el nocturno a Split y la Alka de Sinj si es agosto",
    days: 14,
    season: "de junio a septiembre (nocturno diario y barcos)",
    summary:
      "Lo anterior con Petrova Gora en taxi desde Vojnić, el nocturno de verano a Split con el palacio habitado y la Alka de Sinj el primer domingo de agosto, y salida desde Split. Croacia entera sin coche: se puede, aunque no lo parezca, y el tren nocturno es la mitad de la gracia.",
    stops: [
      {
        cityId: "hr-zagreb",
        nights: 4,
        placeIds: ["hr-novi-zagreb-y-museo-80", "hr-zagreb-tunel-gric", "hr-jasenovac", "hr-kumrovec", "hr-petrova-gora"],
        note: "Petrova Gora en un día con bus a Vojnić y taxi con espera",
        legFromPrevious: { mode: "avion", durationMin: 125, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "hr-vukovar",
        nights: 2,
        placeIds: ["hr-vukovar-torre-agua", "hr-ovcara-y-hospital"],
        legFromPrevious: { mode: "tren", durationMin: 330, noCarDifficulty: "ok" },
      },
      {
        cityId: "hr-rijeka",
        nights: 1,
        placeIds: ["hr-rijeka-torpedo-y-galeb"],
        legFromPrevious: { mode: "bus", durationMin: 420, noCarDifficulty: "ok" },
      },
      {
        cityId: "hr-rab",
        nights: 2,
        placeIds: ["hr-goli-otok"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "hr-pula",
        nights: 2,
        placeIds: ["hr-pula-zerostrasse", "hr-brijuni-tito"],
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso" },
      },
      {
        cityId: "hr-zagreb",
        nights: 0,
        placeIds: [],
        note: "bus a Zagreb por la tarde y el nocturno a Split a las 22:06",
        legFromPrevious: { mode: "bus", durationMin: 270, noCarDifficulty: "ok" },
      },
      {
        cityId: "hr-split",
        nights: 3,
        placeIds: ["hr-split-diocleciano"],
        note: "la Alka de Sinj en bus (45 min) el primer domingo de agosto; vuelo de vuelta desde Split (Vueling en verano)",
        legFromPrevious: { mode: "tren", durationMin: 525, noCarDifficulty: "ok", bookAhead: true, price: "≈ 30 € con litera", note: "nocturno 22:06 → 06:53, diario en verano" },
      },
    ],
    warnings: [
      "El nocturno Zagreb–Split es diario solo del 22 de junio al 30 de agosto de 2026; el resto del año, los domingos: mira hzpp.hr.",
      "La Alka es el primer domingo de agosto y Sinj se llena: entradas de grada con semanas o de pie desde las 15.",
      "Petrova Gora: el taxi con espera desde Vojnić son 30-40 €; el interior del monumento es una ruina con escombros y agujeros.",
    ],
    meta: m,
  },
];
