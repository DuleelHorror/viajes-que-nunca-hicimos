import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "fi-9d-el-nocturno-al-circulo-polar",
    title: "FINLANDIA — 9 DÍAS: la fortaleza, el sanatorio, la frontera cerrada y el nocturno al Círculo Polar",
    days: 9,
    season: "de enero a marzo (nieve, castillo, aurora) o septiembre (aurora sin -25)",
    summary:
      "Helsinki con Suomenlinna y el submarino, Turku con el sanatorio de Aalto, Tampere con el museo que fue de Lenin, Lappeenranta mirando la frontera cerrada, y el Santa Claus Express con parada en Kemi (castillo de nieve y rompehielos) hasta Rovaniemi. Caro, en tren y con el DNI.",
    stops: [
      {
        cityId: "fi-helsinki",
        nights: 3,
        placeIds: ["fi-suomenlinna", "fi-helsinki-merihaka-y-roca", "fi-hanko-museo-frente"],
        note: "Hanko en el día solo en verano (el museo del frente); en invierno, sáltalo",
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true, price: "60-200 €", note: "BCN → Helsinki con Finnair o Norwegian (4 h); tren P o I al centro, 30 min, 4,10 €" },
      },
      {
        cityId: "fi-turku",
        nights: 1,
        placeIds: ["fi-paimio-sanatorio"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", price: "desde 8 €" },
      },
      {
        cityId: "fi-tampere",
        nights: 1,
        placeIds: ["fi-tampere-lenin-nootti"],
        legFromPrevious: { mode: "tren", durationMin: 105, noCarDifficulty: "ok", price: "desde 10 €", note: "tren Turku–Tampere directo" },
      },
      {
        cityId: "fi-lappeenranta",
        nights: 1,
        placeIds: ["fi-lappeenranta-frontera-cerrada"],
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", note: "vía Helsinki o por Kouvola" },
      },
      {
        cityId: "fi-kemi",
        nights: 0,
        placeIds: ["fi-santa-claus-express", "fi-kemi-castillo-nieve-sampo"],
        note: "el nocturno desde Helsinki (tren de tarde desde Lappeenranta) y bajarse en Kemi a las 6; castillo y tren a Rovaniemi",
        legFromPrevious: { mode: "tren", durationMin: 720, noCarDifficulty: "ok", bookAhead: true, price: "cabina desde 49-89 €", note: "Santa Claus Express, cabina reservada con meses" },
      },
      {
        cityId: "fi-rovaniemi",
        nights: 3,
        placeIds: ["fi-rovaniemi-santa-aalto", "fi-rovaniemi-aurora-y-noche-polar"],
        note: "vuelo directo Rovaniemi–Helsinki (1 h 20) y el vuelo a BCN, o el nocturno de vuelta",
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok", price: "desde 10 €" },
      },
    ],
    warnings: [
      "Finlandia es el país más caro del radar: 100-120 € al día con hostal. El tren es lo barato si se reserva con antelación (los precios de VR se disparan la semana antes).",
      "El nocturno se agota en Navidad y en las vacaciones de esquí (febrero-marzo): reserva la cabina con meses.",
      "El museo del frente de Hanko fuera de verano abre un día a la semana; la Línea Salpa no está en la ruta porque sin coche es un día de taxi.",
      "En Laponia en enero hace -25: la ropa es parte del presupuesto.",
    ],
    meta: m,
  },
  {
    id: "fi-5d-helsinki-y-el-nocturno",
    title: "5 DÍAS: Helsinki, Suomenlinna y el nocturno a Rovaniemi",
    days: 5,
    season: "de diciembre a marzo",
    summary: "La escapada ártica: dos días de Helsinki con la fortaleza y el submarino, el Santa Claus Express de noche, y dos días en Rovaniemi con Santa, Aalto y la aurora. Vuelo de vuelta desde Rovaniemi vía Helsinki.",
    stops: [
      {
        cityId: "fi-helsinki",
        nights: 2,
        placeIds: ["fi-suomenlinna", "fi-helsinki-merihaka-y-roca"],
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "fi-rovaniemi",
        nights: 3,
        placeIds: ["fi-santa-claus-express", "fi-rovaniemi-santa-aalto", "fi-rovaniemi-aurora-y-noche-polar"],
        note: "la primera noche es la del tren; vuelo Rovaniemi–Helsinki–BCN",
        legFromPrevious: { mode: "tren", durationMin: 720, noCarDifficulty: "ok", bookAhead: true, price: "cabina desde 49-89 €" },
      },
    ],
    warnings: ["Reserva el nocturno antes que el vuelo: es lo que se agota."],
    meta: m,
  },
  {
    id: "fi-13d-el-completo-con-oulu-y-la-guitarra-invisible",
    title: "13 DÍAS: el completo, con Oulu y la guitarra invisible en agosto (o la Línea Salpa con taxi)",
    days: 13,
    season: "finales de agosto (Air Guitar, Salpa y Hanko abiertos, aurora empezando)",
    summary:
      "Lo anterior con calma en verano: Hanko con el museo del frente, la Línea Salpa con taxi desde Hamina, Oulu para el campeonato de guitarra invisible el último fin de semana de agosto, el nocturno con luz hasta las once y Rovaniemi sin nieve pero con aurora a final de mes. Trece días de tren en el país más caro del radar.",
    stops: [
      {
        cityId: "fi-helsinki",
        nights: 3,
        placeIds: ["fi-suomenlinna", "fi-helsinki-merihaka-y-roca", "fi-salpa-linea"],
        note: "Salpa en el día: tren a Hamina y taxi (caro), o saltarlo",
        legFromPrevious: { mode: "avion", durationMin: 240, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "fi-hanko",
        nights: 1,
        placeIds: ["fi-hanko-museo-frente"],
        legFromPrevious: { mode: "tren", durationMin: 110, noCarDifficulty: "ok", note: "cambio en Karis" },
      },
      {
        cityId: "fi-turku",
        nights: 1,
        placeIds: ["fi-paimio-sanatorio"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", note: "Hanko–Karis–Turku" },
      },
      {
        cityId: "fi-tampere",
        nights: 1,
        placeIds: ["fi-tampere-lenin-nootti"],
        legFromPrevious: { mode: "tren", durationMin: 105, noCarDifficulty: "ok" },
      },
      {
        cityId: "fi-lappeenranta",
        nights: 1,
        placeIds: ["fi-lappeenranta-frontera-cerrada"],
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok" },
      },
      {
        cityId: "fi-oulu",
        nights: 2,
        placeIds: ["fi-oulu-aire"],
        note: "el último fin de semana de agosto, la guitarra invisible en la plaza",
        legFromPrevious: { mode: "tren", durationMin: 420, noCarDifficulty: "ok", note: "IC vía Kouvola y Tampere, 6-7 h; o el nocturno y bajarse en Oulu" },
      },
      {
        cityId: "fi-kemi",
        nights: 1,
        placeIds: ["fi-kemi-castillo-nieve-sampo"],
        note: "en verano solo la versión interior del castillo; el Sampo no navega",
        legFromPrevious: { mode: "tren", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "fi-rovaniemi",
        nights: 3,
        placeIds: ["fi-santa-claus-express", "fi-rovaniemi-santa-aalto", "fi-rovaniemi-aurora-y-noche-polar"],
        note: "el nocturno se hace a la vuelta, Rovaniemi–Helsinki, para el vuelo",
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "El Air Guitar es el último fin de semana de agosto y Oulu es Capital de la Cultura 2026: cama con meses.",
      "La Línea Salpa sin coche es tren a Hamina más taxi de 40 km con espera: 100 € de excursión; solo si te importa mucho el hormigón.",
      "En agosto la aurora empieza a verse a final de mes con cielo claro; el castillo de nieve de verdad es de enero a abril.",
    ],
    meta: m,
  },
];
