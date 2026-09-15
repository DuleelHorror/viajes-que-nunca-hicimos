import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "am-9d-de-erevan-a-tatev",
    title: "ARMENIA — 9 DÍAS: Ereván brutalista, el radiotelescopio y las Alas de Tatev",
    days: 9,
    season: "mayo-junio o septiembre-octubre",
    summary:
      "Ereván con su memorial, su cascada y su OVNI de hormigón, un día de taxi para el radiotelescopio abandonado y los monasterios de la roca, el sur con el teleférico récord y las cuevas de Khndzoresk, y Gyumri para entender el terremoto. Marshrutkas y taxis compartidos; ningún coche propio.",
    stops: [
      {
        cityId: "am-erevan",
        nights: 4,
        placeIds: ["am-erevan-tsitsernakaberd", "am-erevan-cascada", "am-erevan-complejo-demirchyan", "am-zvartnots-terminal-abandonada", "am-erevan-vernissage", "am-herouni-radiotelescopio", "am-geghard", "am-garni-sinfonia-piedras", "am-khor-virap"],
        note: "dos días de ciudad y dos de taxi del día: uno para Herouni, otro para Garni-Geghard y Khor Virap",
        legFromPrevious: { mode: "avion", durationMin: 480, noCarDifficulty: "ok", bookAhead: true, price: "250-450 €", note: "BCN → Ereván con escala (Viena, Varsovia, Estambul o París), 7-9 h; la terminal vieja se ve al aterrizar" },
      },
      {
        cityId: "am-goris",
        nights: 2,
        placeIds: ["am-tatev-teleferico", "am-khndzoresk", "am-karahunj"],
        note: "Karahunj queda de camino: negocia la parada con el conductor de la marshrutka o un taxi desde Sisian",
        legFromPrevious: { mode: "bus", durationMin: 270, noCarDifficulty: "aviso", price: "≈ 8 €", note: "marshrutka de mañana desde la estación central; 2-3 al día" },
      },
      {
        cityId: "am-gyumri",
        nights: 2,
        placeIds: ["am-gyumri-terremoto", "am-metsamor-central-nuclear"],
        legFromPrevious: { mode: "bus", durationMin: 420, noCarDifficulty: "aviso", note: "vuelta a Ereván (4 h 30) y tren o marshrutka a Gyumri (2 h): día de tránsito" },
      },
      {
        cityId: "am-erevan",
        nights: 1,
        placeIds: ["am-erevan-metro", "am-erevan-ararat-conac"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", price: "≈ 3 €" },
      },
    ],
    warnings: [
      "Herouni depende del vigilante del día: puedes llegar y no entrar. El sitio se ve por fuera igual y merece la pena, pero ve sabiéndolo.",
      "Goris está a 4 h 30 de marshrutka y las salidas son de mañana: no se improvisa.",
      "Si quieres encadenar con Georgia, el nocturno Ereván–Tiflis sale los días pares: cuadra la última noche.",
    ],
    meta: m,
  },
  {
    id: "am-6d-erevan-y-gyumri",
    title: "6 DÍAS: Ereván soviética y la ciudad del terremoto",
    days: 6,
    season: "de abril a junio y de septiembre a noviembre",
    summary: "La escapada: cuatro noches de Ereván con sus excursiones de taxi y dos en Gyumri. Sin el sur, que son dos días solo de ir y volver.",
    stops: [
      {
        cityId: "am-erevan",
        nights: 4,
        placeIds: ["am-erevan-tsitsernakaberd", "am-erevan-cascada", "am-erevan-complejo-demirchyan", "am-zvartnots-terminal-abandonada", "am-erevan-vernissage", "am-erevan-metro", "am-herouni-radiotelescopio", "am-geghard", "am-khor-virap"],
        legFromPrevious: { mode: "avion", durationMin: 480, noCarDifficulty: "ok", bookAhead: true, note: "con escala" },
      },
      {
        cityId: "am-gyumri",
        nights: 2,
        placeIds: ["am-gyumri-terremoto", "am-metsamor-central-nuclear"],
        note: "vuelta a Ereván en tren la mañana del vuelo, o desde Gyumri con Wizz a algún sitio de Europa",
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Vardavar (julio) convierte Ereván en una guerra de agua: si coincides, es la mejor razón para estar; si no lo sabías, el móvil se moja."],
    meta: m,
  },
  {
    id: "am-12d-el-completo-con-el-norte",
    title: "12 DÍAS: el completo, con el lago Sevan, Dilijan y el cañón de Debed",
    days: 12,
    season: "junio o septiembre",
    summary:
      "Lo anterior más el norte: la Casa de los Escritores sobre el lago Sevan, los sanatorios de Dilijan y el cañón de Alaverdi con sus monasterios encima de la fundición muerta. Termina en Gyumri o sigue a Georgia en el nocturno.",
    stops: [
      {
        cityId: "am-erevan",
        nights: 4,
        placeIds: ["am-erevan-tsitsernakaberd", "am-erevan-cascada", "am-erevan-complejo-demirchyan", "am-zvartnots-terminal-abandonada", "am-erevan-vernissage", "am-herouni-radiotelescopio", "am-geghard", "am-garni-sinfonia-piedras", "am-khor-virap"],
        legFromPrevious: { mode: "avion", durationMin: 480, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "am-goris",
        nights: 2,
        placeIds: ["am-tatev-teleferico", "am-khndzoresk", "am-karahunj"],
        legFromPrevious: { mode: "bus", durationMin: 270, noCarDifficulty: "aviso" },
      },
      {
        cityId: "am-dilijan",
        nights: 3,
        placeIds: ["am-sevan-casa-escritores", "am-dilijan", "am-alaverdi-debed"],
        note: "Sevan de camino desde Ereván; Alaverdi es un día entero con taxi",
        legFromPrevious: { mode: "bus", durationMin: 390, noCarDifficulty: "aviso", note: "vuelta a Ereván y marshrutka a Dilijan por el lago" },
      },
      {
        cityId: "am-gyumri",
        nights: 2,
        placeIds: ["am-gyumri-terremoto", "am-metsamor-central-nuclear"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", note: "marshrutka Dilijan–Vanadzor–Gyumri" },
      },
      {
        cityId: "am-erevan",
        nights: 1,
        placeIds: ["am-erevan-metro", "am-erevan-ararat-conac"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Armenia es un país en estrella: casi todo pasa por Ereván. Cuenta con dos o tres días de tránsito en doce.",
      "Alaverdi sin taxi no se hace: los monasterios están arriba y separados.",
      "Con la frontera azerí cerrada y la turca también, el país solo se sale hacia Georgia (o en avión): el nocturno a Tiflis es la salida natural.",
    ],
    meta: m,
  },
];
