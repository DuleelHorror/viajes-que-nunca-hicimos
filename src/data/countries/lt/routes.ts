import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "lt-11d-kgb-stalin-cruces-y-misiles",
    title: "LITUANIA — 11 DÍAS: el KGB, el parque de Stalin, las cruces y los misiles, en tren",
    days: 11,
    season: "de mayo a octubre",
    summary:
      "Vilnius con el KGB, la cárcel donde se duerme, Užupis y el bosque de Paneriai; bus al sur para el parque de Stalin; Kaunas con el Noveno Fuerte; tren al norte para la Colina de las Cruces y al oeste para el silo nuclear de Plokštinė; y el tren al este para pisar una central tipo Chernóbil. La mejor red de trenes del Báltico, con DNI y euros.",
    stops: [
      {
        cityId: "lt-vilnius",
        nights: 3,
        placeIds: ["lt-vilnius-museo-kgb", "lt-vilnius-lukiskes-carcel", "lt-vilnius-uzupis", "lt-vilnius-torre-tv-13-enero", "lt-paneriai"],
        note: "una de las noches, en celda de Lukiškės si te va",
        legFromPrevious: { mode: "avion", durationMin: 220, noCarDifficulty: "ok", bookAhead: true, price: "40-150 €", note: "BCN → Vilnius directo con Wizz o Ryanair, 3 h 40; bus 1 o 2 del aeropuerto al centro en 20 min, o tren de 7 min" },
      },
      {
        cityId: "lt-druskininkai",
        nights: 1,
        placeIds: ["lt-grutas-parque-stalin", "lt-druskininkai-sanatorios"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", price: "≈ 8 €" },
      },
      {
        cityId: "lt-kaunas",
        nights: 2,
        placeIds: ["lt-kaunas-noveno-fuerte", "lt-kaunas-modernismo-y-resurreccion"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "lt-siauliai",
        nights: 1,
        placeIds: ["lt-colina-de-las-cruces"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", price: "≈ 10 €", note: "Kaunas–Šiauliai directo o vía Radviliškis" },
      },
      {
        cityId: "lt-plunge",
        nights: 1,
        placeIds: ["lt-plokstine-base-misiles"],
        note: "taxi de Plungė al silo con espera, o bus a Plateliai y 5 km a pie; noche en Plateliai junto al lago es mejor",
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "aviso", note: "línea de Klaipėda" },
      },
      {
        cityId: "lt-visaginas",
        nights: 2,
        placeIds: ["lt-ignalina-central-nuclear", "lt-visaginas-ciudad-planificada"],
        note: "la visita a la central, reservada con semanas; la ciudad, a pie",
        legFromPrevious: { mode: "tren", durationMin: 360, noCarDifficulty: "ok", bookAhead: true, note: "Plungė–Vilnius (3 h 30) y Vilnius–Visaginas (2 h)" },
      },
      {
        cityId: "lt-vilnius",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "La central de Ignalina se reserva con semanas y con pasaporte o DNI: es lo primero del calendario, y sin ella Visaginas sigue mereciendo el tren.",
      "Plokštinė sin taxi son 5 km a pie desde el bus de Plateliai, que pasa dos veces al día: confirma la vuelta o duerme en Plateliai.",
      "La Colina de las Cruces: bus a Joniškis, parada Domantai, y 2 km andando; pide al conductor que avise.",
    ],
    meta: m,
  },
  {
    id: "lt-5d-vilnius-grutas-y-el-fuerte",
    title: "5 DÍAS: Vilnius, el parque de Stalin y el Noveno Fuerte",
    days: 5,
    season: "todo el año",
    summary: "La escapada: el KGB y la cárcel de Lukiškės, Užupis y Paneriai; un día de bus al parque de las estatuas; Kaunas con el fuerte de exterminio y vuelo de vuelta desde allí con Ryanair.",
    stops: [
      {
        cityId: "lt-vilnius",
        nights: 3,
        placeIds: ["lt-vilnius-museo-kgb", "lt-vilnius-lukiskes-carcel", "lt-vilnius-uzupis", "lt-paneriai", "lt-grutas-parque-stalin"],
        note: "Grūtas ida y vuelta en el día en bus (4 h de bus, 3 en el parque)",
        legFromPrevious: { mode: "avion", durationMin: 220, noCarDifficulty: "ok", bookAhead: true, note: "directo con Wizz o Ryanair" },
      },
      {
        cityId: "lt-kaunas",
        nights: 2,
        placeIds: ["lt-kaunas-noveno-fuerte", "lt-kaunas-modernismo-y-resurreccion"],
        note: "vuelo de vuelta desde Kaunas (Ryanair)",
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Entrar por Vilnius y salir por Kaunas (o al revés) es fácil: los dos aeropuertos tienen low-cost desde BCN."],
    meta: m,
  },
  {
    id: "lt-15d-el-completo-con-nida-y-el-eje-baltico",
    title: "15 DÍAS: el completo, con Nida y entrada por Riga en tren",
    days: 15,
    season: "de junio a septiembre",
    summary:
      "Para el que baja los tres bálticos: entrar desde Riga en el tren directo, Šiauliai y las cruces primero, Plokštinė, Klaipėda y dos días en la Lengua Curlandesa hasta la frontera rusa, Kaunas, el sur con Stalin, Vilnius a fondo y la central nuclear al final. Cinco trenes, tres buses, un ferry.",
    stops: [
      {
        cityId: "lt-siauliai",
        nights: 1,
        placeIds: ["lt-colina-de-las-cruces"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "el directo Riga–Vilnius para en Šiauliai a las 2 h 30; billete en ltglink.lt" },
      },
      {
        cityId: "lt-plunge",
        nights: 1,
        placeIds: ["lt-plokstine-base-misiles"],
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "aviso" },
      },
      {
        cityId: "lt-klaipeda",
        nights: 3,
        placeIds: ["lt-nida-lengua-curlandesa"],
        note: "dos noches en Nida y una en Klaipėda",
        legFromPrevious: { mode: "tren", durationMin: 40, noCarDifficulty: "ok" },
      },
      {
        cityId: "lt-kaunas",
        nights: 2,
        placeIds: ["lt-kaunas-noveno-fuerte", "lt-kaunas-modernismo-y-resurreccion"],
        legFromPrevious: { mode: "tren", durationMin: 170, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "lt-druskininkai",
        nights: 1,
        placeIds: ["lt-grutas-parque-stalin", "lt-druskininkai-sanatorios"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "lt-vilnius",
        nights: 4,
        placeIds: ["lt-vilnius-museo-kgb", "lt-vilnius-lukiskes-carcel", "lt-vilnius-uzupis", "lt-vilnius-torre-tv-13-enero", "lt-paneriai"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "lt-visaginas",
        nights: 2,
        placeIds: ["lt-ignalina-central-nuclear", "lt-visaginas-ciudad-planificada"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "lt-vilnius",
        nights: 1,
        placeIds: [],
        note: "vuelo de vuelta desde Vilnius",
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Nida en julio y agosto va llena de alemanes y lituanos: reserva, o ve en junio o septiembre.",
      "La visita a Ignalina es la única reserva seria del viaje: semanas de antelación y sin menores.",
      "El tren directo Riga–Vilnius es uno al día (más el combinado con cambio): fija ese día primero.",
    ],
    meta: m,
  },
];
