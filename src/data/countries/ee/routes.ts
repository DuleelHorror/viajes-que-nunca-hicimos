import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "ee-9d-hormigon-carceles-y-la-frontera",
    title: "ESTONIA — 9 DÍAS: hormigón olímpico, cárceles y la frontera rusa, en tren naranja",
    days: 9,
    season: "de mayo a septiembre",
    summary:
      "Tallin con Linnahall, Patarei, el piso 23 del KGB y el memorial roto de Maarjamäe; el tren a la ciudad cerrada de Paldiski con la cárcel sumergida de Rummu; y el tren al este para Narva con su frontera y Sillamäe, la ciudad secreta del uranio. Todo en Elron y bus, con DNI y euros.",
    stops: [
      {
        cityId: "ee-tallin",
        nights: 4,
        placeIds: ["ee-tallin-linnahall", "ee-tallin-patarei", "ee-tallin-hotel-viru-kgb", "ee-tallin-maarjamae", "ee-tallin-vabamu-y-kgb-celdas", "ee-tallin-torre-tv"],
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true, price: "50-180 €", note: "BCN → Tallin directo con Ryanair o airBaltic, 4 h; tranvía 4 del aeropuerto al centro en 20 min" },
      },
      {
        cityId: "ee-paldiski",
        nights: 0,
        placeIds: ["ee-paldiski-ciudad-cerrada", "ee-klooga-campo", "ee-rummu-cantera-carcel"],
        note: "día entero desde Tallin: tren a Paldiski parando en Klooga, y bus a Rummu si sobra tarde (o Rummu otro día)",
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok", price: "≈ 4 €" },
      },
      {
        cityId: "ee-tallin",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok" },
      },
      {
        cityId: "ee-narva",
        nights: 3,
        placeIds: ["ee-narva-castillos-y-frontera", "ee-narva-kreenholm", "ee-sillamae-ciudad-uranio", "ee-kohtla-mina-esquisto"],
        note: "un día para Narva, otro para Sillamäe, otro para la mina de camino",
        legFromPrevious: { mode: "tren", durationMin: 135, noCarDifficulty: "ok", bookAhead: true, price: "≈ 12 €", note: "Elron con asiento reservado" },
      },
      {
        cityId: "ee-tallin",
        nights: 1,
        placeIds: [],
        note: "vuelo de vuelta, o seguir a Riga en el tren directo (ver la ruta larga)",
        legFromPrevious: { mode: "tren", durationMin: 135, noCarDifficulty: "ok", bookAhead: true },
      },
    ],
    warnings: [
      "Patarei abre como museo desde junio de 2026 y las partes visitables van cambiando: mira la web antes.",
      "En Narva, no fotografíes a los guardias de la otra orilla ni el puente con teleobjetivo: los de este lado también preguntan.",
      "Rummu solo tiene gracia para nadar de junio a septiembre; el resto del año se ve y se vuelve.",
    ],
    meta: m,
  },
  {
    id: "ee-5d-tallin-y-paldiski",
    title: "5 DÍAS: Tallin a fondo y la ciudad cerrada",
    days: 5,
    season: "todo el año",
    summary: "La escapada: Linnahall, Patarei, el piso 23, Maarjamäe con sus estatuas tumbadas y un día de tren a Paldiski con Klooga. Con Ryanair y DNI.",
    stops: [
      {
        cityId: "ee-tallin",
        nights: 4,
        placeIds: ["ee-tallin-linnahall", "ee-tallin-patarei", "ee-tallin-hotel-viru-kgb", "ee-tallin-maarjamae", "ee-tallin-vabamu-y-kgb-celdas"],
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true, note: "directo con Ryanair o airBaltic" },
      },
      {
        cityId: "ee-paldiski",
        nights: 1,
        placeIds: ["ee-paldiski-ciudad-cerrada", "ee-klooga-campo"],
        note: "noche en Paldiski (hay un par de sitios) para los acantilados al atardecer, o ida y vuelta en el día",
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Tallin en invierno es oscuro a las 15:30 y Linnahall con hielo: pega, pero abrígate."],
    meta: m,
  },
  {
    id: "ee-13d-el-completo-con-hara-tartu-y-salida-a-riga",
    title: "13 DÍAS: el completo, con Hara, Tartu y el tren directo a Riga",
    days: 13,
    season: "de junio a septiembre",
    summary:
      "Lo anterior más la base de submarinos de Hara con paseo largo por Lahemaa, Tartu con el museo en la pista de bombarderos y las celdas del KGB, y la salida en el tren directo Tallin–Riga (o Tartu–Riga) para encadenar con la ficha de Letonia y seguir el Báltico hacia abajo.",
    stops: [
      {
        cityId: "ee-tallin",
        nights: 5,
        placeIds: ["ee-tallin-linnahall", "ee-tallin-patarei", "ee-tallin-hotel-viru-kgb", "ee-tallin-maarjamae", "ee-tallin-vabamu-y-kgb-celdas", "ee-tallin-torre-tv", "ee-hara-base-submarinos"],
        note: "Hara es un día entero con bus a Loksa y 6 km a pie, o tour de Lahemaa",
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "ee-paldiski",
        nights: 1,
        placeIds: ["ee-paldiski-ciudad-cerrada", "ee-klooga-campo", "ee-rummu-cantera-carcel"],
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok" },
      },
      {
        cityId: "ee-narva",
        nights: 3,
        placeIds: ["ee-narva-castillos-y-frontera", "ee-narva-kreenholm", "ee-sillamae-ciudad-uranio", "ee-kohtla-mina-esquisto"],
        legFromPrevious: { mode: "tren", durationMin: 220, noCarDifficulty: "ok", bookAhead: true, note: "vuelta a Tallin y tren a Narva el mismo día" },
      },
      {
        cityId: "ee-tartu",
        nights: 3,
        placeIds: ["ee-tartu-celdas-kgb-y-raadi"],
        note: "desde Tartu, el tren a Riga por Valga (3 h 30) o el directo de la tarde desde Tallin",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", note: "Lux Express Narva–Tartu, 3 h; el tren obliga a volver por Tallin" },
      },
      {
        cityId: "ee-tartu",
        nights: 1,
        placeIds: [],
        note: "noche extra para un día en Setomaa si cuadra (primer sábado de agosto) o para el tren de la mañana a Riga",
        legFromPrevious: { mode: "tren", durationMin: 0, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "El directo Tallin–Riga sale a las 14:50 y llega a las 20:46; desde Tartu, cambio en Valga con enlace pensado. Billete en ltglink.lt para todo el eje báltico.",
      "Hara sin coche es un paseo de 12 km ida y vuelta desde Loksa: agua, calzado y horario del bus de vuelta.",
      "Trece días de Estonia son muchos para un país pequeño: es la ruta para el que va a bajar por los tres bálticos.",
    ],
    meta: m,
  },
];
