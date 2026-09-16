import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "mn-12d-transmongoliano-y-karakorum",
    title: "MONGOLIA — 12 DÍAS: Ulán Bator soviética, el tren al Gobi y Karakórum",
    days: 12,
    season: "junio o septiembre; julio si quieres el Naadam",
    summary:
      "La capital con su mosaico soviético y sus cráneos del Terror, la estatua de 40 metros y los caballos resucitados en excursión, el Transmongoliano hasta el centro de energía del Gobi y siete horas de bus hasta lo que queda del imperio. Sin jeep propio: tren, bus y taxis compartidos.",
    stops: [
      {
        cityId: "mn-ulan-bator",
        nights: 5,
        placeIds: ["mn-ub-zaisan", "mn-ub-museo-represion", "mn-ub-plaza-sukhbaatar", "mn-ub-gandan", "mn-ub-palacio-bogd-khan", "mn-ub-museo-dinosaurios", "mn-chinggis-estatua", "mn-terelj", "mn-khustai"],
        note: "dos días de ciudad y dos de excursión (Gengis Kan + Terelj con noche en ger; Khustai)",
        legFromPrevious: { mode: "avion", durationMin: 900, noCarDifficulty: "ok", bookAhead: true, price: "800-1.200 €", note: "BCN → Ulán Bator con escala en Estambul (Turkish) o Pekín/Seúl; 14-16 h. El aeropuerto nuevo está a 50 km: bus o taxi" },
      },
      {
        cityId: "mn-sainshand",
        nights: 2,
        placeIds: ["mn-sainshand-khamar"],
        note: "el taxi al monasterio se comparte con los que bajan del mismo tren",
        legFromPrevious: { mode: "tren", durationMin: 600, noCarDifficulty: "ok", bookAhead: true, price: "≈ 12 €", note: "Transmongoliano nocturno por el Gobi" },
      },
      {
        cityId: "mn-ulan-bator",
        nights: 1,
        placeIds: ["mn-ub-distritos-ger"],
        legFromPrevious: { mode: "tren", durationMin: 600, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "mn-kharkhorin",
        nights: 2,
        placeIds: ["mn-kharkhorin-erdene-zuu"],
        legFromPrevious: { mode: "bus", durationMin: 420, noCarDifficulty: "aviso", price: "≈ 10 €", note: "bus diario desde la estación Dragon; siete horas de estepa" },
      },
      {
        cityId: "mn-ulan-bator",
        nights: 2,
        placeIds: [],
        note: "día de margen y vuelo de vuelta",
        legFromPrevious: { mode: "bus", durationMin: 420, noCarDifficulty: "aviso" },
      },
    ],
    warnings: [
      "Los billetes del Transmongoliano se compran en taquilla con pasaporte o vía hostal: la app oficial está en mongol.",
      "En Kharkhorin el bus vuelve por la mañana temprano: dos noches o ninguna.",
      "El museo de la Represión abre cuando quiere: ve el primer día por la mañana y vuelve si hace falta.",
    ],
    meta: m,
  },
  {
    id: "mn-8d-capital-y-gobi-en-tren",
    title: "8 DÍAS: Ulán Bator y el centro de energía del Gobi en tren",
    days: 8,
    season: "de mayo a septiembre",
    summary: "La versión corta: la capital soviético-nómada con sus dos excursiones y el ida y vuelta en el Transmongoliano a Sainshand. Sin jeeps, sin vuelos internos.",
    stops: [
      {
        cityId: "mn-ulan-bator",
        nights: 4,
        placeIds: ["mn-ub-zaisan", "mn-ub-museo-represion", "mn-ub-plaza-sukhbaatar", "mn-ub-gandan", "mn-chinggis-estatua", "mn-terelj"],
        legFromPrevious: { mode: "avion", durationMin: 900, noCarDifficulty: "ok", bookAhead: true, note: "con escala" },
      },
      {
        cityId: "mn-sainshand",
        nights: 2,
        placeIds: ["mn-sainshand-khamar"],
        legFromPrevious: { mode: "tren", durationMin: 600, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "mn-ulan-bator",
        nights: 2,
        placeIds: ["mn-ub-palacio-bogd-khan", "mn-ub-museo-dinosaurios"],
        legFromPrevious: { mode: "tren", durationMin: 600, noCarDifficulty: "ok", bookAhead: true },
      },
    ],
    warnings: ["El aeropuerto nuevo está a 50 km y el tráfico de Ulán Bator es el peor de Asia: dos horas y media de margen para el vuelo de vuelta."],
    meta: m,
  },
  {
    id: "mn-16d-el-completo-con-el-gobi-y-el-norte",
    title: "16 DÍAS: el completo, con el Gobi de los dinosaurios y el norte soviético",
    days: 16,
    season: "septiembre",
    summary:
      "Lo anterior más el norte industrial (Darkhan y la mina de Erdenet en tren) y el Gobi profundo en avión y jeep contratado: los acantilados de los dinosaurios y las dunas. Es Mongolia sin conducir, que es como la hacen los propios mongoles.",
    stops: [
      {
        cityId: "mn-ulan-bator",
        nights: 4,
        placeIds: ["mn-ub-zaisan", "mn-ub-museo-represion", "mn-ub-plaza-sukhbaatar", "mn-ub-gandan", "mn-ub-palacio-bogd-khan", "mn-chinggis-estatua", "mn-terelj"],
        legFromPrevious: { mode: "avion", durationMin: 900, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "mn-darkhan",
        nights: 1,
        placeIds: ["mn-darkhan-ciudad-sovietica"],
        legFromPrevious: { mode: "bus", durationMin: 210, noCarDifficulty: "ok" },
      },
      {
        cityId: "mn-erdenet",
        nights: 1,
        placeIds: ["mn-erdenet-mina"],
        legFromPrevious: { mode: "tren", durationMin: 270, noCarDifficulty: "ok", note: "ramal minero, de noche" },
      },
      {
        cityId: "mn-ulan-bator",
        nights: 1,
        placeIds: ["mn-ub-distritos-ger", "mn-ub-museo-dinosaurios"],
        legFromPrevious: { mode: "tren", durationMin: 660, noCarDifficulty: "ok", note: "nocturno directo Erdenet–Ulán Bator" },
      },
      {
        cityId: "mn-sainshand",
        nights: 2,
        placeIds: ["mn-sainshand-khamar"],
        legFromPrevious: { mode: "tren", durationMin: 600, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "mn-ulan-bator",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "tren", durationMin: 600, noCarDifficulty: "ok" },
      },
      {
        cityId: "mn-dalanzadgad",
        nights: 3,
        placeIds: ["mn-bayanzag-acantilados"],
        note: "jeep contratado tres días: Bayanzag, dunas de Khongor y Yolyn Am, durmiendo en gers de familias",
        legFromPrevious: { mode: "avion", durationMin: 90, noCarDifficulty: "dificil", bookAhead: true, price: "≈ 150 €", note: "vuelo a Dalanzadgad; el Gobi solo se hace con jeep y conductor" },
      },
      {
        cityId: "mn-ulan-bator",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "avion", durationMin: 90, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "mn-kharkhorin",
        nights: 2,
        placeIds: ["mn-kharkhorin-erdene-zuu", "mn-khustai"],
        note: "Khustai queda a mitad de camino: el bus para en Lün y el parque recoge si avisas",
        legFromPrevious: { mode: "bus", durationMin: 420, noCarDifficulty: "aviso" },
      },
    ],
    warnings: [
      "Nueve bases y casi 4.000 km entre trenes, buses, un vuelo y un jeep: no es un viaje de descansar.",
      "El Gobi es la única etapa donde de verdad hace falta un conductor: los hostales de Ulán Bator montan grupos de cuatro para repartir el jeep.",
      "Septiembre es la última ventana antes del frío; en octubre el Gobi ya baja de cero de noche.",
    ],
    meta: m,
  },
];
