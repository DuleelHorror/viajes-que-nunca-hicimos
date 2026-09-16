import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "kz-14d-transversal-nocturnos",
    title: "KAZAJISTÁN — 14 DÍAS: la transversal en trenes cama, del Aral al Gulag",
    days: 14,
    season: "mayo o septiembre",
    summary:
      "Almaty y su brutalismo, el nocturno al mausoleo inacabado de Turkestán, otro nocturno al puerto sin mar de Aralsk con el jeep hasta el agua que volvió, vuelo a la capital de Bond y el Talgo al Gulag de Karagandá. Cuatro noches en tren, cero coche.",
    stops: [
      {
        cityId: "kz-almaty",
        nights: 4,
        placeIds: ["kz-almaty-brutalismo", "kz-almaty-arasan", "kz-almaty-metro", "kz-almaty-medeu", "kz-charyn-canon"],
        note: "el cañón de Charyn es el único tour; el resto, a pie y en bus",
        legFromPrevious: { mode: "avion", durationMin: 600, noCarDifficulty: "ok", bookAhead: true, price: "400-600 €", note: "BCN → Almaty por Estambul (Pegasus o Turkish), 10 h; aterrizas de madrugada" },
      },
      {
        cityId: "kz-turkestan",
        nights: 1,
        placeIds: ["kz-turkestan-yasawi", "kz-turkestan-karavan-saray"],
        legFromPrevious: { mode: "tren", durationMin: 1050, noCarDifficulty: "ok", bookAhead: true, price: "≈ 20 €", note: "nocturno de 18 h: sale a las 21:00, llega a media tarde" },
      },
      {
        cityId: "kz-aralsk",
        nights: 2,
        placeIds: ["kz-aralsk-puerto-seco", "kz-kokaral-aral-norte"],
        note: "un día para el puerto y el museo, otro de jeep hasta el mar",
        legFromPrevious: { mode: "tren", durationMin: 780, noCarDifficulty: "ok", bookAhead: true, price: "≈ 15 €", note: "nocturno por el Kyzylkum" },
      },
      {
        cityId: "kz-astana",
        nights: 3,
        placeIds: ["kz-astana-futurismo", "kz-alzhir"],
        legFromPrevious: { mode: "avion", durationMin: 480, noCarDifficulty: "aviso", bookAhead: true, price: "≈ 80 €", note: "tren de 6 h a Kyzylorda y vuelo a Astaná; el tren directo son 26 h" },
      },
      {
        cityId: "kz-karaganda",
        nights: 2,
        placeIds: ["kz-karlag-dolinka", "kz-karaganda-ciudad"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok", price: "≈ 10 €", note: "Talgo de día" },
      },
      {
        cityId: "kz-astana",
        nights: 2,
        placeIds: [],
        note: "vuelo de vuelta desde Astaná vía Estambul; un día de margen para la estepa",
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Los nocturnos se compran en tickets.kz con tarjeta extranjera y a veces falla: reintenta o pide en el hostal que lo hagan.",
      "Los barcos oxidados del Aral ya no están en Kazajistán (los desguazaron en 2017): aquí vas por el puerto seco y por el mar que vuelve. Los barcos, en Muynak.",
      "El jeep a Kokaral se comparte: pregunta en el hostal de Aralsk quién más va.",
    ],
    meta: m,
  },
  {
    id: "kz-8d-almaty-astana-talgo",
    title: "8 DÍAS: Almaty, el Talgo nocturno y la capital de Bond",
    days: 8,
    season: "de mayo a septiembre",
    summary: "La escapada: el brutalismo y los baños de Almaty, la noche en el Talgo cruzando la estepa, Astaná con su Gulag femenino al lado y una noche en Karagandá para el KarLag.",
    stops: [
      {
        cityId: "kz-almaty",
        nights: 4,
        placeIds: ["kz-almaty-brutalismo", "kz-almaty-arasan", "kz-almaty-metro", "kz-almaty-medeu"],
        legFromPrevious: { mode: "avion", durationMin: 600, noCarDifficulty: "ok", bookAhead: true, note: "por Estambul" },
      },
      {
        cityId: "kz-astana",
        nights: 2,
        placeIds: ["kz-astana-futurismo", "kz-alzhir"],
        legFromPrevious: { mode: "tren", durationMin: 720, noCarDifficulty: "ok", bookAhead: true, price: "≈ 30 €", note: "Talgo nocturno" },
      },
      {
        cityId: "kz-karaganda",
        nights: 1,
        placeIds: ["kz-karlag-dolinka", "kz-karaganda-ciudad"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "kz-astana",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["En invierno Astaná está a −30 °C con viento: la ciudad se hace igual, pero por dentro de los centros comerciales."],
    meta: m,
  },
  {
    id: "kz-18d-con-el-poligono",
    title: "18 DÍAS: el completo, con el bosque hundido y el Polígono nuclear",
    days: 18,
    season: "septiembre",
    summary:
      "La transversal entera más el tour de dos días a Kaindy y Kolsai, y tres noches en Semey para el Polígono de Semipalátinsk con permiso tramitado con un mes. Es el viaje de los nocturnos y de la estepa: cinco noches en tren.",
    stops: [
      {
        cityId: "kz-almaty",
        nights: 5,
        placeIds: ["kz-almaty-brutalismo", "kz-almaty-arasan", "kz-almaty-metro", "kz-almaty-medeu", "kz-charyn-canon", "kz-kaindy-bosque-hundido"],
        note: "el tour de dos días a Charyn, Kolsai y Kaindy va dentro de estas cinco noches",
        legFromPrevious: { mode: "avion", durationMin: 600, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "kz-turkestan",
        nights: 1,
        placeIds: ["kz-turkestan-yasawi", "kz-turkestan-karavan-saray"],
        legFromPrevious: { mode: "tren", durationMin: 1050, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "kz-aralsk",
        nights: 2,
        placeIds: ["kz-aralsk-puerto-seco", "kz-kokaral-aral-norte"],
        legFromPrevious: { mode: "tren", durationMin: 780, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "kz-astana",
        nights: 3,
        placeIds: ["kz-astana-futurismo", "kz-alzhir"],
        legFromPrevious: { mode: "avion", durationMin: 480, noCarDifficulty: "aviso", note: "tren a Kyzylorda y vuelo" },
      },
      {
        cityId: "kz-karaganda",
        nights: 2,
        placeIds: ["kz-karlag-dolinka", "kz-karaganda-ciudad"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "kz-semey",
        nights: 3,
        placeIds: ["kz-semey-poligono", "kz-semey-dostoievski", "kz-ekibastuz-chimenea"],
        note: "el tour del Polígono ocupa dos de los tres días; el permiso, pedido un mes antes",
        legFromPrevious: { mode: "tren", durationMin: 900, noCarDifficulty: "ok", bookAhead: true, note: "vuelta a Astaná y nocturno a Semey por Ekibastuz" },
      },
      {
        cityId: "kz-almaty",
        nights: 2,
        placeIds: [],
        note: "vuelo Semey–Almaty y vuelo de vuelta a casa",
        legFromPrevious: { mode: "avion", durationMin: 100, noCarDifficulty: "ok", bookAhead: true },
      },
    ],
    warnings: [
      "El permiso del Polígono es lo primero que se pide, antes que el vuelo: un mes de antelación y puede denegarse.",
      "Kaindy y Charyn son tours de los de verdad, con jeep y pista: aquí no hay bus ni lo va a haber.",
      "Cinco nocturnos en dieciocho días: lleva comida, papel y una libreta; el vagón restaurante no es una promesa.",
    ],
    meta: m,
  },
];
