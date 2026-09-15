import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "at-10d-viena-y-los-huesos",
    title: "AUSTRIA — 10 DÍAS: Viena turbia, Mauthausen y los cráneos de Hallstatt",
    days: 10,
    season: "mayo-junio o septiembre-octubre",
    summary:
      "Cuatro noches de Viena sacando la parte oscura (manicomio, búnkeres, cementerio, alcantarillas), el salto a Linz para Mauthausen y Hartheim, dos noches en Hallstatt por el osario y la mina, y la cueva de hielo desde Salzburgo. Todo en tren, sin una sola etapa que dé pereza.",
    stops: [
      {
        cityId: "at-viena",
        nights: 4,
        placeIds: ["at-viena-narrenturm", "at-viena-flaktuerme", "at-viena-zentralfriedhof", "at-viena-kaisergruft", "at-viena-tercer-hombre", "at-viena-karl-marx-hof", "at-seegrotte-hinterbruehl"],
        note: "el Narrenturm abre pocas horas: cuadra el resto alrededor",
        legFromPrevious: { mode: "avion", durationMin: 145, noCarDifficulty: "ok", price: "40-120 €", note: "BCN → Viena, cinco directos al día; el tren CAT o el S7 al centro" },
      },
      {
        cityId: "at-linz",
        nights: 2,
        placeIds: ["at-mauthausen", "at-hartheim"],
        note: "un día para cada memorial; Linz de noche tiene el Ars Electronica para cambiar de tema",
        legFromPrevious: { mode: "tren", durationMin: 75, noCarDifficulty: "ok", bookAhead: true, price: "≈ 20 €", note: "Railjet o WESTbahn" },
      },
      {
        cityId: "at-hallstatt",
        nights: 2,
        placeIds: ["at-hallstatt-beinhaus", "at-hallstatt-salzwelten", "at-ebensee-kz"],
        note: "dormir en el pueblo: a las seis de la tarde se va todo el mundo y te queda para ti",
        legFromPrevious: { mode: "tren", durationMin: 140, noCarDifficulty: "ok", price: "≈ 20 €", note: "cambio en Attnang-Puchheim; ferry al final" },
      },
      {
        cityId: "at-salzburgo",
        nights: 2,
        placeIds: ["at-eisriesenwelt", "at-salzburgo-catacumbas"],
        note: "la cueva de hielo es el día entero; Salzburgo, la tarde que queda",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", price: "≈ 15 €", note: "tren a Bad Ischl y bus 150 a Salzburgo" },
      },
    ],
    warnings: [
      "Mauthausen: de la estación al memorial hay 4 km de cuesta y el bus es escaso. Taxi (≈ 12 €) o andar.",
      "Eisriesenwelt y el túnel de Ebensee solo abren de mayo a octubre; si vas en invierno, cambia esos días por Bad Gastein.",
      "El Narrenturm tiene horarios de museo universitario: míralos antes de fijar los días de Viena.",
    ],
    meta: m,
  },
  {
    id: "at-6d-viena-graz",
    title: "6 DÍAS: Viena oscura y Graz por el Semmering",
    days: 6,
    season: "todo el año; en diciembre, con mercados y Krampus",
    summary: "La escapada: cuatro noches de Viena rara y dos de Graz, con el tren del Semmering como excursión que además te lleva. Sin madrugones ni cambios de tren.",
    stops: [
      {
        cityId: "at-viena",
        nights: 4,
        placeIds: ["at-viena-narrenturm", "at-viena-flaktuerme", "at-viena-zentralfriedhof", "at-viena-kaisergruft", "at-viena-tercer-hombre", "at-viena-wotrubakirche"],
        legFromPrevious: { mode: "avion", durationMin: 145, noCarDifficulty: "ok", note: "directo desde BCN" },
      },
      {
        cityId: "at-graz",
        nights: 2,
        placeIds: ["at-semmering-ferrocarril", "at-graz-zeughaus", "at-graz-schlossberg-tuneles"],
        note: "vuelo de vuelta desde Graz o Railjet a Viena en 2 h 30",
        legFromPrevious: { mode: "tren", durationMin: 155, noCarDifficulty: "ok", bookAhead: true, price: "15-45 €", note: "Railjet por el Semmering: asiento a la izquierda" },
      },
    ],
    warnings: ["Las alcantarillas de El tercer hombre cierran de noviembre a abril: en invierno cámbialas por el Museo Funerario."],
    meta: m,
  },
  {
    id: "at-14d-alpes-y-huesos",
    title: "14 DÍAS: de Viena a los Alpes pasando por todos los agujeros",
    days: 14,
    season: "junio o septiembre",
    summary:
      "El completo: Viena, Graz por el Semmering, los memoriales de Linz, Hallstatt y Ebensee, Salzburgo con la cueva de hielo, dos noches en el balneario fantasma de Bad Gastein con su túnel radiactivo, y final en Innsbruck. Un país que se recorre entero en tren y que no se acaba.",
    stops: [
      {
        cityId: "at-viena",
        nights: 4,
        placeIds: ["at-viena-narrenturm", "at-viena-flaktuerme", "at-viena-zentralfriedhof", "at-viena-kaisergruft", "at-viena-tercer-hombre", "at-viena-karl-marx-hof", "at-viena-uno-city", "at-seegrotte-hinterbruehl"],
        legFromPrevious: { mode: "avion", durationMin: 145, noCarDifficulty: "ok" },
      },
      {
        cityId: "at-graz",
        nights: 2,
        placeIds: ["at-semmering-ferrocarril", "at-graz-zeughaus", "at-graz-schlossberg-tuneles"],
        legFromPrevious: { mode: "tren", durationMin: 155, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "at-linz",
        nights: 1,
        placeIds: ["at-mauthausen", "at-hartheim"],
        note: "Hartheim por la mañana, Mauthausen por la tarde: se puede, pero es un día duro",
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", note: "Graz–Linz por Selzthal, un tren de montaña precioso" },
      },
      {
        cityId: "at-hallstatt",
        nights: 2,
        placeIds: ["at-hallstatt-beinhaus", "at-hallstatt-salzwelten", "at-ebensee-kz"],
        legFromPrevious: { mode: "tren", durationMin: 140, noCarDifficulty: "ok" },
      },
      {
        cityId: "at-salzburgo",
        nights: 2,
        placeIds: ["at-eisriesenwelt", "at-salzburgo-catacumbas"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", note: "bus 150 por el Wolfgangsee" },
      },
      {
        cityId: "at-bad-gastein",
        nights: 2,
        placeIds: ["at-bad-gastein", "at-gasteiner-heilstollen"],
        note: "termas por la tarde, hoteles vacíos por la mañana",
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok", price: "≈ 20 €" },
      },
      {
        cityId: "at-innsbruck",
        nights: 1,
        placeIds: ["at-innsbruck-hofkirche"],
        note: "vuelo de vuelta desde Innsbruck, o Railjet a Múnich",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", note: "Tauernbahn a Schwarzach y Railjet por el corredor alemán" },
      },
    ],
    warnings: [
      "Siete bases en catorce días: es un viaje de tren, no de sofá. Si sobra, quita Innsbruck y vuelve desde Salzburgo.",
      "El Heilstollen exige reserva y un formulario médico: no es llegar y entrar.",
      "En invierno cambian dos cosas: la cueva de hielo cierra y Bad Gastein se llena de esquiadores (y de precios).",
    ],
    meta: m,
  },
];
