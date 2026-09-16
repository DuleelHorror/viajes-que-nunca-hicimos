import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "rs-11d-hormigon-craneos-y-el-tren-de-tito",
    title: "SERBIA — 11 DÍAS: hormigón, cráneos y el tren de Tito",
    days: 11,
    season: "de abril a octubre",
    summary:
      "Belgrado con Genex, la tumba de Tito y las ruinas de la OTAN, Novi Sad y Subotica en alta velocidad, bus a Kragujevac para el bosque de espomeniks, Niš con su torre de cráneos y su campo, y de vuelta el Belgrado–Bar hasta Užice para Kadinjača y el tren en forma de ocho. Todo en tren y bus.",
    stops: [
      {
        cityId: "rs-belgrado",
        nights: 4,
        placeIds: ["rs-belgrado-genex", "rs-belgrado-casa-de-las-flores", "rs-belgrado-ruinas-otan", "rs-belgrado-sajmiste", "rs-belgrado-novi-beograd-bloques", "rs-kosmaj-espomenik"],
        note: "Kosmaj es la excursión de medio día; el resto, a pie y en bus gratis",
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "60-180 €", note: "BCN → Belgrado directo con Air Serbia o Wizz, 2 h 30; bus 72 o A1 del aeropuerto al centro" },
      },
      {
        cityId: "rs-novi-sad",
        nights: 1,
        placeIds: ["rs-novi-sad-petrovaradin", "rs-subotica-sinagoga"],
        note: "Subotica se hace en el día con el Soko (40 min) desde Novi Sad",
        legFromPrevious: { mode: "tren", durationMin: 36, noCarDifficulty: "ok", bookAhead: true, price: "≈ 5 €", note: "Soko a 200 km/h; reserva de asiento obligatoria" },
      },
      {
        cityId: "rs-kragujevac",
        nights: 1,
        placeIds: ["rs-kragujevac-sumarice"],
        legFromPrevious: { mode: "bus", durationMin: 200, noCarDifficulty: "ok", note: "Soko a Belgrado y bus a Kragujevac" },
      },
      {
        cityId: "rs-nis",
        nights: 2,
        placeIds: ["rs-nis-torre-de-craneos", "rs-nis-campo-cruz-roja"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", price: "≈ 8 €" },
      },
      {
        cityId: "rs-uzice",
        nights: 2,
        placeIds: ["rs-kadinjaca", "rs-sargan-8-mokra-gora", "rs-belgrado-bar-tren"],
        note: "un día para Kadinjača y otro para el Šargan 8 y Drvengrad",
        legFromPrevious: { mode: "bus", durationMin: 360, noCarDifficulty: "aviso", note: "bus Niš–Belgrado (3 h) y tren Belgrado–Užice (3 h 30), o bus directo Niš–Užice vía Kraljevo, 5 h" },
      },
      {
        cityId: "rs-belgrado",
        nights: 1,
        placeIds: ["rs-belgrado-torre-avala"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok", note: "el diurno del Bar de vuelta" },
      },
    ],
    warnings: [
      "Los billetes del Belgrado–Bar (y del tramo a Užice en ese tren) solo se compran en taquilla en Belgrado Centar: pásate el primer día.",
      "Belgrado Centar (Prokop) está a 3 km del centro sin tranvía: bus 36 o taxi de app. La estación vieja del centro ya no tiene trenes.",
      "El Estado Mayor bombardeado puede desaparecer bajo un hotel en cualquier momento: si está, míralo ya.",
    ],
    meta: m,
  },
  {
    id: "rs-5d-belgrado-y-novi-sad",
    title: "5 DÍAS: Belgrado a fondo y Novi Sad en el Soko",
    days: 5,
    season: "todo el año",
    summary: "La escapada: Genex, la tumba de Tito, las ruinas de 1999, el campo de la Feria y los bloques; un día en Novi Sad con la fortaleza de los túneles.",
    stops: [
      {
        cityId: "rs-belgrado",
        nights: 4,
        placeIds: ["rs-belgrado-genex", "rs-belgrado-casa-de-las-flores", "rs-belgrado-ruinas-otan", "rs-belgrado-sajmiste", "rs-belgrado-novi-beograd-bloques", "rs-belgrado-torre-avala"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "directo con Air Serbia o Wizz" },
      },
      {
        cityId: "rs-novi-sad",
        nights: 1,
        placeIds: ["rs-novi-sad-petrovaradin"],
        legFromPrevious: { mode: "tren", durationMin: 36, noCarDifficulty: "ok", bookAhead: true, note: "Soko; vuelta a Belgrado para el vuelo en 36 min" },
      },
    ],
    warnings: ["El transporte urbano de Belgrado es gratis desde 2025: no busques dónde comprar el billete."],
    meta: m,
  },
  {
    id: "rs-15d-el-completo-con-el-diablo-y-guca",
    title: "15 DÍAS: el completo, con la ciudad del diablo y salida por el Bar",
    days: 15,
    season: "agosto (por Guča) o septiembre",
    summary:
      "Lo anterior más Đavolja Varoš desde Niš, dos noches de más en Užice para el oeste (y Guča si es la semana) y el Belgrado–Bar entero como salida hacia Montenegro, que es donde acaba de verdad este tren. Sin coche, con cuatro trenes y seis buses.",
    stops: [
      {
        cityId: "rs-belgrado",
        nights: 4,
        placeIds: ["rs-belgrado-genex", "rs-belgrado-casa-de-las-flores", "rs-belgrado-ruinas-otan", "rs-belgrado-sajmiste", "rs-belgrado-novi-beograd-bloques", "rs-kosmaj-espomenik"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "rs-subotica",
        nights: 1,
        placeIds: ["rs-subotica-sinagoga"],
        legFromPrevious: { mode: "tren", durationMin: 80, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "rs-novi-sad",
        nights: 1,
        placeIds: ["rs-novi-sad-petrovaradin"],
        legFromPrevious: { mode: "tren", durationMin: 45, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "rs-kragujevac",
        nights: 1,
        placeIds: ["rs-kragujevac-sumarice"],
        legFromPrevious: { mode: "bus", durationMin: 200, noCarDifficulty: "ok" },
      },
      {
        cityId: "rs-nis",
        nights: 3,
        placeIds: ["rs-nis-torre-de-craneos", "rs-nis-campo-cruz-roja", "rs-djavolja-varos"],
        note: "la ciudad del diablo es el día entero con bus y taxi, o tour",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
      {
        cityId: "rs-uzice",
        nights: 3,
        placeIds: ["rs-kadinjaca", "rs-sargan-8-mokra-gora"],
        note: "Guča está a 1 h en bus de Užice si cae en fecha",
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso", note: "bus directo Niš–Užice por Kraljevo" },
      },
      {
        cityId: "rs-belgrado",
        nights: 2,
        placeIds: ["rs-belgrado-torre-avala", "rs-belgrado-bar-tren"],
        note: "vuelta a Belgrado para coger el nocturno del Bar entero hacia Montenegro (11 h) o el vuelo a casa",
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Guča es la primera semana de agosto y el pueblo se llena: cama con meses o tienda de campaña.",
      "Si sigues a Montenegro en el Bar, el nocturno sale a las 21:10 de Belgrado Centar y cruza la frontera de madrugada con pasaporte.",
      "Đavolja Varoš sin tour son dos buses y un taxi: sal temprano y confirma el último bus de vuelta de Kuršumlija.",
    ],
    meta: m,
  },
];
