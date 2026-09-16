import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "ro-14d-de-ceausescu-al-cementerio-alegre",
    title: "RUMANÍA — 14 DÍAS: de la Casa del Pueblo al Cementerio Alegre, en tren",
    days: 14,
    season: "de junio a septiembre (por la Transfăgărășan)",
    summary:
      "Bucarest con su megalomanía y su chalé de dictador, el nocturno a Transilvania, la Transfăgărășan en el bus de Sibiu, el castillo gótico con acería muerta, la noria en la mina de sal desde Cluj y el tren lento a Maramureș para el cementerio que se ríe de la muerte y la cárcel que no. Vuelta en avión desde Cluj.",
    stops: [
      {
        cityId: "ro-bucarest",
        nights: 3,
        placeIds: ["ro-bucarest-casa-poporului", "ro-bucarest-casa-ceausescu", "ro-bucarest-plaza-revolucion", "ro-bucarest-metro"],
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, price: "60-150 €", note: "BCN → Bucarest directo con Ryanair, Wizz o Vueling, 3 h 20; tren del aeropuerto al centro, 20 min" },
      },
      {
        cityId: "ro-brasov",
        nights: 2,
        placeIds: ["ro-bran-castillo"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", price: "≈ 12 €", note: "intercity de día por los Cárpatos, o el nocturno a Cluj bajándose aquí a la 1" },
      },
      {
        cityId: "ro-sibiu",
        nights: 2,
        placeIds: ["ro-transfagarasan"],
        note: "el Bâlea Bus sale a las 8:00; el día entero para la carretera",
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok", price: "≈ 8 €", note: "tren directo Brașov–Sibiu, 2 h 45" },
      },
      {
        cityId: "ro-hunedoara",
        nights: 1,
        placeIds: ["ro-hunedoara-castillo-y-siderurgia"],
        legFromPrevious: { mode: "tren", durationMin: 170, noCarDifficulty: "ok", note: "tren a Simeria y cercanías" },
      },
      {
        cityId: "ro-cluj",
        nights: 2,
        placeIds: ["ro-turda-mina-de-sal", "ro-cluj-hoia-baciu"],
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", note: "Simeria–Cluj directo, 3 h 30" },
      },
      {
        cityId: "ro-sighet",
        nights: 2,
        placeIds: ["ro-sapanta-cementerio-alegre", "ro-sighet-carcel-memorial"],
        legFromPrevious: { mode: "tren", durationMin: 400, noCarDifficulty: "aviso", price: "≈ 12 €", note: "6-7 h con cambio en Salva; comprobar horarios, hay uno o dos al día" },
      },
      {
        cityId: "ro-cluj",
        nights: 2,
        placeIds: ["ro-sighisoara"],
        note: "vuelta a Cluj y vuelo directo a BCN; Sighișoara se hace en el tren de vuelta si sobra un día",
        legFromPrevious: { mode: "tren", durationMin: 400, noCarDifficulty: "aviso" },
      },
    ],
    warnings: [
      "La Transfăgărășan solo abre de julio a octubre y el Bâlea Bus, en esa ventana: si vas en mayo, quítala y pon Sighișoara.",
      "El tren a Sighet es el más lento del país y el que más merece la pena: lleva comida y un libro.",
      "Bucarest–Cluj y Bucarest–Timișoara tienen nocturnos decentes que ahorran hotel: cfrcalatori.ro con tarjeta.",
    ],
    meta: m,
  },
  {
    id: "ro-7d-bucarest-transilvania-rapido",
    title: "7 DÍAS: Bucarest y Transilvania sin la carretera",
    days: 7,
    season: "todo el año",
    summary: "La escapada: Casa del Pueblo, chalé de Ceaușescu y metro; el nocturno a Cluj para la noria en la mina de sal y el bosque encantado; Sighișoara y Brașov de vuelta. Sin depender de la temporada.",
    stops: [
      {
        cityId: "ro-bucarest",
        nights: 2,
        placeIds: ["ro-bucarest-casa-poporului", "ro-bucarest-casa-ceausescu", "ro-bucarest-plaza-revolucion"],
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, note: "directo low-cost" },
      },
      {
        cityId: "ro-cluj",
        nights: 2,
        placeIds: ["ro-turda-mina-de-sal", "ro-cluj-hoia-baciu"],
        legFromPrevious: { mode: "tren", durationMin: 590, noCarDifficulty: "ok", bookAhead: true, price: "≈ 25 €", note: "nocturno de literas, 21:20 → 07:10" },
      },
      {
        cityId: "ro-brasov",
        nights: 2,
        placeIds: ["ro-sighisoara", "ro-bran-castillo"],
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok", note: "parada de 3 h en Sighișoara por el camino" },
      },
      {
        cityId: "ro-bucarest",
        nights: 1,
        placeIds: ["ro-bucarest-metro"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["La Casa del Pueblo se reserva con un día y se entra con pasaporte físico (el DNI a veces cuela, a veces no)."],
    meta: m,
  },
  {
    id: "ro-18d-con-delta-y-banat",
    title: "18 DÍAS: el completo, con el delta, Brâncuși y Timișoara",
    days: 18,
    season: "septiembre",
    summary:
      "Lo anterior más el ferry por el delta hasta el puerto fantasma de Sulina, la Columna sin Fin en la ciudad minera de Târgu Jiu y Timișoara, donde empezó la revolución, para volar de vuelta. Es el país entero en tren, sin coche y con cuatro nocturnos.",
    stops: [
      {
        cityId: "ro-bucarest",
        nights: 3,
        placeIds: ["ro-bucarest-casa-poporului", "ro-bucarest-casa-ceausescu", "ro-bucarest-plaza-revolucion", "ro-bucarest-metro"],
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "ro-tulcea",
        nights: 2,
        placeIds: ["ro-delta-danubio-sulina"],
        note: "noche en Sulina y vuelta en el ferry rápido",
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok", note: "tren de la mañana para enlazar con el ferry de la tarde" },
      },
      {
        cityId: "ro-brasov",
        nights: 2,
        placeIds: ["ro-bran-castillo", "ro-sighisoara"],
        legFromPrevious: { mode: "tren", durationMin: 480, noCarDifficulty: "ok", note: "vuelta a Bucarest y tren a Brașov el mismo día" },
      },
      {
        cityId: "ro-sibiu",
        nights: 2,
        placeIds: ["ro-transfagarasan"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "ro-hunedoara",
        nights: 1,
        placeIds: ["ro-hunedoara-castillo-y-siderurgia"],
        legFromPrevious: { mode: "tren", durationMin: 170, noCarDifficulty: "ok" },
      },
      {
        cityId: "ro-cluj",
        nights: 2,
        placeIds: ["ro-turda-mina-de-sal", "ro-cluj-hoia-baciu"],
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok" },
      },
      {
        cityId: "ro-sighet",
        nights: 2,
        placeIds: ["ro-sapanta-cementerio-alegre", "ro-sighet-carcel-memorial"],
        legFromPrevious: { mode: "tren", durationMin: 400, noCarDifficulty: "aviso" },
      },
      {
        cityId: "ro-timisoara",
        nights: 4,
        placeIds: ["ro-timisoara-revolucion", "ro-targu-jiu-brancusi"],
        note: "Târgu Jiu se hace como excursión larga en tren desde Timișoara (vía Petroșani) o de camino; luego vuelo Wizz a BCN",
        legFromPrevious: { mode: "tren", durationMin: 720, noCarDifficulty: "aviso", bookAhead: true, note: "nocturno Sighet–Timișoara vía Cluj, o dos trenes de día" },
      },
    ],
    warnings: [
      "Cuatro nocturnos y un ferry: es el viaje de los que van sobrados de tiempo, y en Rumanía el tiempo se gasta en tren.",
      "Târgu Jiu desde Timișoara son 4-5 h por trayecto: mejor dormir allí una noche que ida y vuelta en el día.",
      "El delta en septiembre tiene los pelícanos yéndose y cero mosquitos: la ventana buena.",
    ],
    meta: m,
  },
];
