import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "mk-9d-estatuas-hormigon-y-el-virus-de-krusevo",
    title: "MACEDONIA DEL NORTE — 9 DÍAS: las estatuas, el hormigón del terremoto, el virus de Kruševo y el lago",
    days: 9,
    season: "de abril a octubre",
    summary:
      "Skopje con su Atenas de poliestireno y su utopía brutalista de Tange, la mezquita pintada de Tetovo en bus, el tren a Bitola, el Makedonium de Kruševo y Ohrid con el cirílico y los manantiales. Wizz directo, DNI y buses de 16 €.",
    stops: [
      {
        cityId: "mk-skopje",
        nights: 3,
        placeIds: ["mk-skopje-2014", "mk-skopje-tange-y-correos", "mk-skopje-bazar", "mk-skopje-museo-lucha", "mk-vodno-cruz-milenio"],
        legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true, price: "35-120 €", note: "BCN → Skopje con Wizz, 2-3 por semana, 2 h 45; bus Vardar Express al centro, 30 min" },
      },
      {
        cityId: "mk-tetovo",
        nights: 0,
        placeIds: ["mk-tetovo-mezquita-pintada"],
        note: "media mañana desde Skopje, ida y vuelta en bus",
        legFromPrevious: { mode: "bus", durationMin: 40, noCarDifficulty: "ok", price: "≈ 2 €" },
      },
      {
        cityId: "mk-bitola",
        nights: 1,
        placeIds: ["mk-bitola-heraclea"],
        legFromPrevious: { mode: "tren", durationMin: 205, noCarDifficulty: "ok", price: "≈ 6 €", note: "tren de la tarde desde el Transporten Centar" },
      },
      {
        cityId: "mk-krusevo",
        nights: 1,
        placeIds: ["mk-makedonium"],
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok", note: "bus Bitola–Prilep y Prilep–Kruševo, o directo" },
      },
      {
        cityId: "mk-ohrid",
        nights: 3,
        placeIds: ["mk-ohrid-plaosnik", "mk-san-naum", "mk-vevcani-manantiales"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", note: "Kruševo–Prilep–Bitola–Ohrid en buses, o vía Skopje" },
      },
      {
        cityId: "mk-skopje",
        nights: 1,
        placeIds: ["mk-matka-canon"],
        note: "vuelta a Skopje para el vuelo, con Matka de tarde si cuadra",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", price: "≈ 16 €" },
      },
    ],
    warnings: [
      "El tren a Bitola sale cuatro veces al día y el primero a las 14:30: es un tren de tarde. Se compra en taquilla.",
      "Wizz vuela a Skopje dos o tres días a la semana: el viaje se ajusta a ellos. Ohrid tiene aeropuerto con Wizz desde otras ciudades, no desde BCN.",
      "Skopje 2014 se está retirando a trozos: lo que no veas puede haber sido quitado la semana antes.",
    ],
    meta: m,
  },
  {
    id: "mk-4d-skopje-y-tetovo",
    title: "4 DÍAS: Skopje, el kitsch y el hormigón, con Tetovo",
    days: 4,
    season: "todo el año",
    summary: "El puente de Wizz: las estatuas, la utopía de Tange con Correos quemado, el bazar, el museo de cera y la mezquita pintada de Tetovo en bus.",
    stops: [
      {
        cityId: "mk-skopje",
        nights: 3,
        placeIds: ["mk-skopje-2014", "mk-skopje-tange-y-correos", "mk-skopje-bazar", "mk-skopje-museo-lucha"],
        legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true, note: "Wizz directo" },
      },
      {
        cityId: "mk-tetovo",
        nights: 1,
        placeIds: ["mk-tetovo-mezquita-pintada"],
        note: "noche en Tetovo o vuelta a Skopje; el aeropuerto queda a 1 h",
        legFromPrevious: { mode: "bus", durationMin: 40, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["El Museo de la Lucha solo se ve con guía: hay visitas en inglés cada hora."],
    meta: m,
  },
  {
    id: "mk-13d-el-completo-con-galicnik-y-salida-a-montenegro",
    title: "13 DÍAS: el completo, con la boda de Galičnik y salida en bus a Montenegro",
    days: 13,
    season: "julio (por Galičnik e Ilinden) o septiembre",
    summary:
      "Lo anterior con Ohrid a fondo, la boda de Galičnik si es julio, un día más en Kruševo para Ilinden, y la salida en bus a Podgorica (7 h por Albania o Kosovo) para encadenar con la ficha de Montenegro, la pareja balcánica de esta.",
    stops: [
      {
        cityId: "mk-skopje",
        nights: 4,
        placeIds: ["mk-skopje-2014", "mk-skopje-tange-y-correos", "mk-skopje-bazar", "mk-skopje-museo-lucha", "mk-vodno-cruz-milenio", "mk-matka-canon"],
        legFromPrevious: { mode: "avion", durationMin: 165, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "mk-tetovo",
        nights: 1,
        placeIds: ["mk-tetovo-mezquita-pintada"],
        note: "desde Tetovo salen los buses especiales a Galičnik el fin de semana de la boda",
        legFromPrevious: { mode: "bus", durationMin: 40, noCarDifficulty: "ok" },
      },
      {
        cityId: "mk-bitola",
        nights: 1,
        placeIds: ["mk-bitola-heraclea"],
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok", note: "vuelta a Skopje y tren de la tarde" },
      },
      {
        cityId: "mk-krusevo",
        nights: 2,
        placeIds: ["mk-makedonium"],
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok" },
      },
      {
        cityId: "mk-ohrid",
        nights: 4,
        placeIds: ["mk-ohrid-plaosnik", "mk-san-naum", "mk-vevcani-manantiales"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso" },
      },
      {
        cityId: "mk-skopje",
        nights: 1,
        placeIds: [],
        note: "vuelta a Skopje y bus nocturno a Podgorica (7-8 h) para la ficha de Montenegro, o vuelo",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "La boda de Galičnik es un fin de semana al año sin transporte público: solo con los buses especiales o taxi, y sin dormir en el pueblo.",
      "El bus Skopje–Podgorica va por Kosovo o por Albania según la compañía: DNI vale en los dos, pero lleva pasaporte para la frontera de madrugada.",
      "Ohrid en agosto está lleno y cara; en septiembre, perfecta.",
    ],
    meta: m,
  },
];
