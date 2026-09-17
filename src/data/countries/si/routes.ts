import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "si-8d-bunkeres-mercurio-y-la-danza-de-la-muerte",
    title: "ESLOVENIA — 8 DÍAS: la línea Rupnik, la mina de mercurio, Caporetto y la Danza de la Muerte",
    days: 8,
    season: "de abril a octubre (Vueling vuela hasta noviembre)",
    summary:
      "Liubliana con Metelkova, Žale y las torres de Ravnikar, los búnkeres de Zaplana en bus, Idrija con la mina, Postojna en tren, Hrastovlje con sus esqueletos en el regional de Koper y el tren de Bohinj hasta Nova Gorica para Kobarid y el osario. Pequeño, barato para lo que es y todo en tren y bus con el DNI.",
    stops: [
      {
        cityId: "si-liubliana",
        nights: 3,
        placeIds: ["si-metelkova", "si-liubliana-plecnik-zale", "si-liubliana-plaza-republica", "si-jezica-bunker", "si-linea-rupnik-zaplana-goli-vrh"],
        note: "Zaplana en el día con el bus de Vrhnika",
        legFromPrevious: { mode: "avion", durationMin: 125, noCarDifficulty: "ok", bookAhead: true, price: "35-150 €", note: "BCN → Liubliana con Vueling (hasta el 19 de noviembre); bus del aeropuerto al centro 45 min, 4 €" },
      },
      {
        cityId: "si-idrija",
        nights: 1,
        placeIds: ["si-idrija-mina-mercurio", "si-franja-hospital-partisano"],
        note: "Franja solo si ha reabierto; si no, el museo de Cerkno o nada",
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok", price: "≈ 6 €" },
      },
      {
        cityId: "si-postojna",
        nights: 1,
        placeIds: ["si-postojna-predjama", "si-hrastovlje-danza-muerte"],
        note: "Hrastovlje en el regional de Koper desde Postojna (50 min) y vuelta",
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "aviso", note: "bus Idrija–Logatec y tren a Postojna; o vía Liubliana" },
      },
      {
        cityId: "si-nova-gorica",
        nights: 1,
        placeIds: [],
        note: "la plaza partida por la frontera con Gorizia y el puente de Solkan al llegar",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", price: "≈ 15 €", note: "tren a Liubliana y la línea de Bohinj por Bled y el túnel (cambio en Jesenice)" },
      },
      {
        cityId: "si-kobarid",
        nights: 2,
        placeIds: ["si-kobarid-museo", "si-kobarid-osario-italiano"],
        note: "vuelta a Liubliana en el bus directo del domingo (2 h 30) o vía Nova Gorica; vuelo",
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "El bus directo Liubliana–Kobarid solo va viernes y domingo: los demás días, tren de Bohinj a Nova Gorica y bus por el Soča.",
      "Vueling a Liubliana no vuela en invierno: de diciembre a marzo, Trieste (Ryanair) y bus de 1 h 30, o Zagreb.",
      "No todos los trenes a Koper paran en Hrastovlje: mira el horario y lleva un euro para la llave.",
      "Franja sigue cerrado por daños de tormenta: no cuentes con él hasta que la web del museo de Idrija lo diga.",
    ],
    meta: m,
  },
  {
    id: "si-4d-liubliana-y-los-bunkeres",
    title: "4 DÍAS: Liubliana, Metelkova y los búnkeres de Zaplana",
    days: 4,
    season: "todo el año",
    summary: "La escapada: Metelkova y el hostal en la cárcel, Plečnik con su cementerio de catorce capillas, las torres de Ravnikar, el búnker de Ježica en bus urbano y los tres búnkeres de Zaplana con linterna.",
    stops: [
      {
        cityId: "si-liubliana",
        nights: 3,
        placeIds: ["si-metelkova", "si-liubliana-plecnik-zale", "si-liubliana-plaza-republica", "si-jezica-bunker"],
        legFromPrevious: { mode: "avion", durationMin: 125, noCarDifficulty: "ok", bookAhead: true, note: "Vueling directo hasta noviembre; en invierno, Trieste o Zagreb" },
      },
      {
        cityId: "si-vrhnika",
        nights: 1,
        placeIds: ["si-linea-rupnik-zaplana-goli-vrh"],
        note: "noche en Vrhnika o vuelta a Liubliana; el aeropuerto queda a 1 h",
        legFromPrevious: { mode: "bus", durationMin: 30, noCarDifficulty: "ok", price: "3 €" },
      },
    ],
    warnings: ["Los búnkeres de Zaplana están a oscuras: linterna de verdad, no la del móvil."],
    meta: m,
  },
  {
    id: "si-12d-el-completo-con-kurentovanje-y-salida-a-zagreb",
    title: "12 DÍAS: el completo, con Trbovlje, Ptuj (y los kurenti si es carnaval) y salida en tren a Zagreb",
    days: 12,
    season: "febrero (Kurentovanje) o de mayo a octubre",
    summary:
      "Lo anterior con calma, más la chimenea de Trbovlje y Ptuj por la línea del Sava (con los kurenti si es carnaval), Goli vrh el primer sábado de mes, y la salida en tren a Zagreb (2 h 30) para encadenar con la ficha de Croacia, la pareja de esta.",
    stops: [
      {
        cityId: "si-liubliana",
        nights: 3,
        placeIds: ["si-metelkova", "si-liubliana-plecnik-zale", "si-liubliana-plaza-republica", "si-jezica-bunker"],
        legFromPrevious: { mode: "avion", durationMin: 125, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "si-vrhnika",
        nights: 1,
        placeIds: ["si-linea-rupnik-zaplana-goli-vrh"],
        legFromPrevious: { mode: "bus", durationMin: 30, noCarDifficulty: "ok" },
      },
      {
        cityId: "si-idrija",
        nights: 1,
        placeIds: ["si-idrija-mina-mercurio", "si-franja-hospital-partisano"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "si-nova-gorica",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", note: "vía Liubliana y la línea de Bohinj" },
      },
      {
        cityId: "si-kobarid",
        nights: 2,
        placeIds: ["si-kobarid-museo", "si-kobarid-osario-italiano"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "si-postojna",
        nights: 1,
        placeIds: ["si-postojna-predjama", "si-hrastovlje-danza-muerte"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", note: "bus a Nova Gorica y tren por Sežana a Postojna, o vía Liubliana" },
      },
      {
        cityId: "si-ptuj",
        nights: 2,
        placeIds: ["si-trbovlje-chimenea"],
        note: "Trbovlje bajándose del tren del Sava a la ida; Ptuj con los kurenti si es carnaval",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", price: "≈ 15 €", note: "tren a Liubliana y la línea del Sava con cambio en Pragersko" },
      },
      {
        cityId: "si-liubliana",
        nights: 1,
        placeIds: [],
        note: "tren de la tarde a Zagreb (2 h 30, 9 al día) para la ficha de Croacia, o vuelo",
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Kurentovanje son los diez días antes del martes de carnaval: Ptuj se llena y las camas se reservan con semanas.",
      "Goli vrh solo abre el primer sábado de mes a las 10: cuadra la ruta con el calendario si te importa.",
      "Con la tarjeta Urbana de Liubliana se paga el bus urbano; para los interurbanos, efectivo o app Nomago.",
    ],
    meta: m,
  },
];
