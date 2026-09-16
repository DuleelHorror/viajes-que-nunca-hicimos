import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "bg-12d-hormigon-de-sofia-al-mar-negro",
    title: "BULGARIA — 12 DÍAS: el hormigón, de Sofía al mar Negro por Buzludzha",
    days: 12,
    season: "de mayo a octubre",
    summary:
      "Sofía con su estalinismo y su desguace de estatuas, Plovdiv con el soviético que no pudieron tirar, Kazanlak para subir al ovni de Buzludzha, Veliko Tarnovo con su espada de hormigón, Shumen con el monumento más grande de los Balcanes y Varna para el bosque de piedra. Tren, bus y un taxi de montaña.",
    stops: [
      {
        cityId: "bg-sofia",
        nights: 3,
        placeIds: ["bg-sofia-largo", "bg-sofia-museo-arte-socialista", "bg-sofia-monumento-ejercito-sovietico", "bg-sofia-ndk", "bg-rila-monasterio"],
        note: "Rila es el día entero con el bus de las 10:20",
        legFromPrevious: { mode: "avion", durationMin: 190, noCarDifficulty: "ok", bookAhead: true, price: "40-120 €", note: "BCN → Sofía directo con Ryanair o Wizz, 3 h; metro del aeropuerto al centro, 30 min" },
      },
      {
        cityId: "bg-plovdiv",
        nights: 2,
        placeIds: ["bg-plovdiv-alyosha", "bg-plovdiv-casco-y-kapana"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", price: "≈ 6 €" },
      },
      {
        cityId: "bg-kazanlak",
        nights: 2,
        placeIds: ["bg-buzludzha", "bg-shipka-memorial", "bg-kazanlak-tumba-tracia"],
        note: "Buzludzha y Shipka en el mismo taxi por la mañana, con la niebla que toque",
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", note: "tren Plovdiv–Kazanlak, directo o con cambio en Karlovo" },
      },
      {
        cityId: "bg-veliko-tarnovo",
        nights: 2,
        placeIds: ["bg-veliko-tarnovo-tsarevets"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", note: "bus por el paso de Shipka" },
      },
      {
        cityId: "bg-shumen",
        nights: 1,
        placeIds: ["bg-shumen-monumento-1300"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok", note: "desde Gorna Oryahovitsa" },
      },
      {
        cityId: "bg-varna",
        nights: 2,
        placeIds: ["bg-varna-bosque-de-piedra"],
        note: "vuelo de vuelta desde Varna (Wizz, estacional) o tren nocturno a Sofía",
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Buzludzha está a 1.441 m y la niebla es la norma: dos noches en Kazanlak para tener dos intentos.",
      "Los trenes búlgaros llegan tarde y sin avisar: no encadenes un tren con el último bus del día.",
      "Desde 2026 Bulgaria va en euros: no hay que cambiar nada. Los precios en lev de las webs viejas, entre 2.",
    ],
    meta: m,
  },
  {
    id: "bg-6d-sofia-plovdiv-buzludzha",
    title: "6 DÍAS: Sofía, Plovdiv y el ovni",
    days: 6,
    season: "de abril a octubre",
    summary: "La escapada larga de fin de semana: el estalinismo de Sofía y el desguace de estatuas, Plovdiv con su Alyosha y un día de taxi a Buzludzha desde Kazanlak.",
    stops: [
      {
        cityId: "bg-sofia",
        nights: 2,
        placeIds: ["bg-sofia-largo", "bg-sofia-museo-arte-socialista", "bg-sofia-monumento-ejercito-sovietico"],
        legFromPrevious: { mode: "avion", durationMin: 190, noCarDifficulty: "ok", bookAhead: true, note: "directo low-cost" },
      },
      {
        cityId: "bg-plovdiv",
        nights: 2,
        placeIds: ["bg-plovdiv-alyosha", "bg-plovdiv-casco-y-kapana"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-kazanlak",
        nights: 1,
        placeIds: ["bg-buzludzha", "bg-shipka-memorial"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-sofia",
        nights: 1,
        placeIds: ["bg-sofia-ndk"],
        legFromPrevious: { mode: "tren", durationMin: 230, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Con una sola noche en Kazanlak juegas a la niebla: si Buzludzha está tapado, se ve igual, pero no se fotografía."],
    meta: m,
  },
  {
    id: "bg-16d-con-belogradchik-y-ruse",
    title: "16 DÍAS: el completo, con Belogradchik, Ruse y salida a Rumanía",
    days: 16,
    season: "septiembre",
    summary:
      "Lo anterior más el rincón olvidado del noroeste (las rocas rojas de Belogradchik) y Ruse con su panteón brutalista junto al Danubio, para cruzar a Bucarest en tren y encadenar con la ficha de Rumanía o volar desde allí.",
    stops: [
      {
        cityId: "bg-sofia",
        nights: 3,
        placeIds: ["bg-sofia-largo", "bg-sofia-museo-arte-socialista", "bg-sofia-monumento-ejercito-sovietico", "bg-sofia-ndk"],
        legFromPrevious: { mode: "avion", durationMin: 190, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "bg-sofia",
        nights: 2,
        placeIds: ["bg-belogradchik", "bg-rila-monasterio"],
        note: "dos excursiones de día entero desde Sofía: Belogradchik (bus directo) y Rila",
        legFromPrevious: { mode: "bus", durationMin: 0, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-plovdiv",
        nights: 2,
        placeIds: ["bg-plovdiv-alyosha", "bg-plovdiv-casco-y-kapana"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-kazanlak",
        nights: 2,
        placeIds: ["bg-buzludzha", "bg-shipka-memorial", "bg-kazanlak-tumba-tracia"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-veliko-tarnovo",
        nights: 2,
        placeIds: ["bg-veliko-tarnovo-tsarevets"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-shumen",
        nights: 1,
        placeIds: ["bg-shumen-monumento-1300"],
        legFromPrevious: { mode: "tren", durationMin: 120, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-varna",
        nights: 2,
        placeIds: ["bg-varna-bosque-de-piedra"],
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok" },
      },
      {
        cityId: "bg-ruse",
        nights: 2,
        placeIds: ["bg-ruse-panteon"],
        note: "desde Ruse, tren a Bucarest en 2 h (o el «România» estacional) y vuelo desde allí o ficha de Rumanía",
        legFromPrevious: { mode: "bus", durationMin: 240, noCarDifficulty: "ok", note: "bus Varna–Ruse, 4 h; o tren vía Gorna" },
      },
    ],
    warnings: [
      "Belogradchik desde Sofía es un día de 12 horas: sal en el primer bus y comprueba la vuelta el día antes.",
      "El tren Ruse–Bucarest es de los lentos con encanto: 2 h para 70 km, cruzando el Danubio por el puente de la Amistad.",
    ],
    meta: m,
  },
];
