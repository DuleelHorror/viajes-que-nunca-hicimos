import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "lv-9d-hormigon-bunker-y-la-carcel-naval",
    title: "LETONIA — 9 DÍAS: la tarta de Stalin, el búnker secreto y la cárcel naval, en cercanías",
    days: 9,
    season: "de mayo a octubre",
    summary:
      "Riga con la Academia, el KGB de la esquina y los hangares de zepelines; los gigantes de hormigón de Salaspils en cercanías; el balneario abandonado de Ķemeri; el búnker del gobierno bajo un centro de jubilados en Līgatne con el bobsleigh de Sigulda; y el tren a Liepāja para dormir en la cárcel militar de Karosta. Todo en tren, con DNI y euros.",
    stops: [
      {
        cityId: "lv-riga",
        nights: 4,
        placeIds: ["lv-riga-academia-ciencias", "lv-riga-casa-esquina-kgb", "lv-riga-mercado-zepelines", "lv-riga-museo-gueto-y-rumbula", "lv-salaspils-memorial", "lv-riga-torre-tv-y-moscu"],
        note: "Salaspils y Rumbula en la misma tarde de cercanías (misma línea)",
        legFromPrevious: { mode: "avion", durationMin: 220, noCarDifficulty: "ok", bookAhead: true, price: "40-160 €", note: "BCN → Riga directo con Ryanair o airBaltic, 3 h 40; bus 22 del aeropuerto al centro, 30 min" },
      },
      {
        cityId: "lv-jurmala",
        nights: 1,
        placeIds: ["lv-kemeri-sanatorio"],
        note: "noche en una dacha de Jūrmala, o ida y vuelta desde Riga en la tarde",
        legFromPrevious: { mode: "tren", durationMin: 55, noCarDifficulty: "ok", price: "≈ 2,50 €" },
      },
      {
        cityId: "lv-sigulda",
        nights: 1,
        placeIds: ["lv-ligatne-bunker-secreto", "lv-sigulda-bobsleigh"],
        note: "el búnker con reserva (fin de semana para la visita en inglés); Sigulda por la tarde",
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", note: "vuelta a Riga y tren de Sigulda" },
      },
      {
        cityId: "lv-liepaja",
        nights: 2,
        placeIds: ["lv-karosta-carcel", "lv-skrunda-1"],
        note: "una noche en la celda de Karosta si te atreves; Skrunda-1 se ve (la valla) desde el bus de vuelta",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", price: "≈ 8 €", note: "Sigulda–Riga y Riga–Liepāja" },
      },
      {
        cityId: "lv-riga",
        nights: 1,
        placeIds: [],
        note: "vuelo de vuelta o el tren a Vilnius (4 h) para seguir la ficha de Lituania",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", note: "bus cada hora, pasando por Skrunda" },
      },
    ],
    warnings: [
      "El búnker de Līgatne solo tiene visitas en inglés algunos días y con reserva: es lo primero que se fija en el calendario.",
      "Salaspils: la parada es Dārziņi, no Salaspils; desde Salaspils son 4 km.",
      "La estación central de Riga está en obras por Rail Baltica hasta 2027-28: los andenes cambian; llega con margen.",
    ],
    meta: m,
  },
  {
    id: "lv-4d-riga-salaspils-y-ligatne",
    title: "4 DÍAS: Riga, los gigantes de Salaspils y el búnker",
    days: 4,
    season: "todo el año",
    summary: "El puente: la tarta de Stalin, el KGB de la esquina, el mercado de zepelines, Salaspils en cercanías y un día de tren a Līgatne para el búnker del gobierno. Ryanair y DNI.",
    stops: [
      {
        cityId: "lv-riga",
        nights: 3,
        placeIds: ["lv-riga-academia-ciencias", "lv-riga-casa-esquina-kgb", "lv-riga-mercado-zepelines", "lv-salaspils-memorial"],
        legFromPrevious: { mode: "avion", durationMin: 220, noCarDifficulty: "ok", bookAhead: true, note: "directo con Ryanair o airBaltic" },
      },
      {
        cityId: "lv-sigulda",
        nights: 1,
        placeIds: ["lv-ligatne-bunker-secreto"],
        note: "tren de la mañana, búnker a mediodía, noche en Sigulda y vuelo desde Riga al día siguiente (1 h de tren)",
        legFromPrevious: { mode: "tren", durationMin: 75, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Reserva el búnker antes que el vuelo: sin visita en inglés ese día, la escapada pierde la mitad."],
    meta: m,
  },
  {
    id: "lv-13d-el-completo-con-irbene-y-daugavpils",
    title: "13 DÍAS: el completo, con la oreja de Irbene, Daugavpils y salida a Vilnius",
    days: 13,
    season: "de junio a septiembre",
    summary:
      "Lo anterior más el radiotelescopio secreto de la Costa de Livonia (un día de buses y taxi), Daugavpils con su fortaleza, Rothko y sus bloques rusos, y la salida en el tren directo a Vilnius. Es Letonia de punta a punta sin coche, con dos días de logística lenta.",
    stops: [
      {
        cityId: "lv-riga",
        nights: 4,
        placeIds: ["lv-riga-academia-ciencias", "lv-riga-casa-esquina-kgb", "lv-riga-mercado-zepelines", "lv-riga-museo-gueto-y-rumbula", "lv-salaspils-memorial", "lv-riga-torre-tv-y-moscu"],
        legFromPrevious: { mode: "avion", durationMin: 220, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "lv-jurmala",
        nights: 1,
        placeIds: ["lv-kemeri-sanatorio"],
        legFromPrevious: { mode: "tren", durationMin: 55, noCarDifficulty: "ok" },
      },
      {
        cityId: "lv-sigulda",
        nights: 1,
        placeIds: ["lv-ligatne-bunker-secreto", "lv-sigulda-bobsleigh"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "lv-liepaja",
        nights: 3,
        placeIds: ["lv-karosta-carcel", "lv-irbene-radiotelescopio", "lv-skrunda-1"],
        note: "Irbene desde Liepāja es bus a Ventspils y taxi de 30 km: día entero; noche en Karosta",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok" },
      },
      {
        cityId: "lv-daugavpils",
        nights: 2,
        placeIds: ["lv-daugavpils-fortaleza-rothko", "lv-daugavpils-bloques-y-lenin"],
        legFromPrevious: { mode: "tren", durationMin: 420, noCarDifficulty: "aviso", note: "Liepāja–Riga (3 h) y Riga–Daugavpils (3 h); un día de trenes" },
      },
      {
        cityId: "lv-riga",
        nights: 2,
        placeIds: [],
        note: "vuelta a Riga y tren directo a Vilnius (4 h, ltglink.lt) para la ficha de Lituania, o vuelo",
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Irbene sin coche es la apuesta del viaje: dos buses al día en la costa de Livonia y visita con reserva. Si no cuadra, tour desde Riga.",
      "Daugavpils es el extremo opuesto a Liepāja: seis horas de tren entre las dos, pasando por Riga. Mejor Daugavpils como salida hacia Vilnius (hay bus directo, 3 h) que ida y vuelta.",
      "Trece días de Letonia son para el que va a bajar los tres bálticos: en nueve se ve lo que importa.",
    ],
    meta: m,
  },
];
