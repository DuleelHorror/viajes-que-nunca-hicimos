import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "al-12d-bunkeres-sigurimi-y-la-isla-militar",
    title: "ALBANIA — 12 DÍAS: búnkeres, la Sigurimi y la isla militar, en furgón",
    days: 12,
    season: "de junio a septiembre (por Sazan)",
    summary:
      "Tirana con sus dos búnkeres-museo, la Casa de las Hojas y la pirámide; Shkodër con las celdas de la Sigurimi y el ferry por el fiordo del Koman; Berat de descanso; Gjirokastër con el túnel de la Guerra Fría; y Vlorë para el barco a la isla de los 3.600 búnkeres y el túnel de submarinos de la costa. Sin trenes, porque no hay: furgones.",
    stops: [
      {
        cityId: "al-tirana",
        nights: 3,
        placeIds: ["al-tirana-bunkart-1", "al-tirana-bunkart-2-casa-hojas", "al-tirana-piramide", "al-tirana-blloku-villa-hoxha", "al-tirana-cementerio-martires", "al-bunkers-por-todas-partes"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "40-150 €", note: "BCN → Tirana directo con Wizz o Ryanair, 2 h 30; bus del aeropuerto al centro cada hora, 4 €" },
      },
      {
        cityId: "al-shkoder",
        nights: 3,
        placeIds: ["al-shkoder-sitio-testigo-memoria", "al-shkoder-rozafa", "al-koman-ferry"],
        note: "el Koman es un día entero (salida 6:30, vuelta por la tarde con el mismo ferry o noche en Valbona)",
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", price: "≈ 3 €", note: "furgón desde la terminal norte de Tirana" },
      },
      {
        cityId: "al-berat",
        nights: 1,
        placeIds: ["al-berat-mil-ventanas"],
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso", note: "furgón a Tirana y otro a Berat; cambio en la terminal" },
      },
      {
        cityId: "al-gjirokaster",
        nights: 2,
        placeIds: ["al-gjirokaster-tunel-y-castillo"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", price: "≈ 6 €", note: "bus directo de la mañana o cambio en Fier" },
      },
      {
        cityId: "al-vlore",
        nights: 3,
        placeIds: ["al-porto-palermo-submarinos", "al-sazan-isla-militar", "al-durres-anfiteatro-y-villa-zog"],
        note: "Porto Palermo se hace de camino con el bus de la costa; Sazan, el barco de la mañana; Durrës, de vuelta hacia el aeropuerto",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", note: "por el paso de Llogara y la Riviera, bajándose en Porto Palermo" },
      },
    ],
    warnings: [
      "Los furgones no tienen horario escrito: salen cuando se llenan, desde la terminal de cada ciudad, y el último suele ser a media tarde. Pregunta en el hostal la víspera.",
      "Sazan solo tiene barcos de junio a septiembre y depende de la Marina y del proyecto del resort: confirma en Vlorë al llegar.",
      "El ferry del Koman se reserva en los hostales de Shkodër con el minibús de las 6:30 incluido; por libre es una lotería.",
    ],
    meta: m,
  },
  {
    id: "al-6d-tirana-shkoder-koman",
    title: "6 DÍAS: Tirana y el norte, con el ferry del Koman",
    days: 6,
    season: "de abril a octubre",
    summary: "La escapada: los dos Bunk'Art, la Casa de las Hojas y la pirámide; furgón a Shkodër para las celdas de la Sigurimi y el día entero en el fiordo del Koman.",
    stops: [
      {
        cityId: "al-tirana",
        nights: 3,
        placeIds: ["al-tirana-bunkart-1", "al-tirana-bunkart-2-casa-hojas", "al-tirana-piramide", "al-tirana-blloku-villa-hoxha"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "directo low-cost" },
      },
      {
        cityId: "al-shkoder",
        nights: 2,
        placeIds: ["al-shkoder-sitio-testigo-memoria", "al-koman-ferry"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "al-tirana",
        nights: 1,
        placeIds: ["al-tirana-cementerio-martires"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Bunk'Art 1 y la Casa de las Hojas cierran pronto algunos días: ve por la mañana."],
    meta: m,
  },
  {
    id: "al-15d-el-completo-con-spac-y-la-riviera",
    title: "15 DÍAS: el completo, con Spaç en tour y la Riviera entera",
    days: 15,
    season: "septiembre",
    summary:
      "Lo anterior más el tour en todoterreno al gulag de Spaç desde Shkodër, dos noches más en la Riviera para Porto Palermo con calma y Durrës con su anfiteatro bajo las casas. Es Albania sin conducir, que exige paciencia con los furgones y un solo tour.",
    stops: [
      {
        cityId: "al-tirana",
        nights: 3,
        placeIds: ["al-tirana-bunkart-1", "al-tirana-bunkart-2-casa-hojas", "al-tirana-piramide", "al-tirana-blloku-villa-hoxha", "al-tirana-cementerio-martires", "al-bunkers-por-todas-partes"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "al-shkoder",
        nights: 4,
        placeIds: ["al-shkoder-sitio-testigo-memoria", "al-shkoder-rozafa", "al-koman-ferry", "al-spac-carcel"],
        note: "un día para el Koman y otro para el tour a Spaç (todoterreno, 80-120 €, se comparte)",
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "al-berat",
        nights: 1,
        placeIds: ["al-berat-mil-ventanas"],
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso" },
      },
      {
        cityId: "al-gjirokaster",
        nights: 2,
        placeIds: ["al-gjirokaster-tunel-y-castillo"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso" },
      },
      {
        cityId: "al-vlore",
        nights: 4,
        placeIds: ["al-porto-palermo-submarinos", "al-sazan-isla-militar"],
        note: "una noche en Himarë para Porto Palermo con calma y tres en Vlorë",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso" },
      },
      {
        cityId: "al-tirana",
        nights: 1,
        placeIds: ["al-durres-anfiteatro-y-villa-zog"],
        note: "parada en Durrës de camino y vuelo desde Tirana",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Spaç es el único sitio de la ficha que exige tour; si no sale grupo, se cae y no pasa nada.",
      "Septiembre es el último mes de barcos a Sazan y el primero sin masas en la Riviera: la ventana.",
      "Quince días de furgones cansan: mete Berat y Himarë como descansos, que para eso están.",
    ],
    meta: m,
  },
];
