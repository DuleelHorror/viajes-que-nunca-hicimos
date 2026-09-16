import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "me-9d-hormigon-espomeniks-y-el-viaducto",
    title: "MONTENEGRO — 9 DÍAS: el hormigón de Titograd, los espomeniks y el viaducto, en tren de 5 €",
    days: 9,
    season: "de mayo a octubre",
    summary:
      "Podgorica con Blok 5 y el hotel de piedra de río, el bus a Cetinje bajándose en Barutana, el mausoleo del Lovćen, Kotor con el solar del Fjord, el tren a Nikšić para el espomenik de Trebjesa y el regional por el viaducto de Mala Rijeka hasta el ayuntamiento de cristales de Kolašin. Con el DNI (30 días), euro y trenes de 2,50 €.",
    stops: [
      {
        cityId: "me-podgorica",
        nights: 3,
        placeIds: ["me-podgorica-blok-5-y-hotel", "me-podgorica-gorica", "me-niksic-trebjesa"],
        note: "Nikšić en el día con el tren de 1 h",
        legFromPrevious: { mode: "avion", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, price: "60-200 €", note: "BCN → Tivat con Vueling (julio-septiembre) y bus a Podgorica, o Podgorica con escala (Belgrado, Viena); o Dubrovnik (Vueling) y bus de 2 h a Kotor" },
      },
      {
        cityId: "me-cetinje",
        nights: 2,
        placeIds: ["me-barutana", "me-cetinje-capital-de-embajadas", "me-lovcen-mausoleo-njegos"],
        note: "Barutana bajándose del bus a la ida; el Lovćen en taxi con espera al día siguiente",
        legFromPrevious: { mode: "bus", durationMin: 40, noCarDifficulty: "ok", price: "≈ 3 €" },
      },
      {
        cityId: "me-kotor",
        nights: 2,
        placeIds: ["me-kotor-hotel-fjord-y-mamula", "me-kotor-serpentina-y-murallas"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok", note: "por la serpentina de 25 curvas" },
      },
      {
        cityId: "me-kolasin",
        nights: 1,
        placeIds: ["me-mala-rijeka-viaducto", "me-kolasin-spomen-dom"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok", price: "≈ 8 €", note: "bus Kotor–Podgorica (2 h) y tren regional por el viaducto (1 h 30)" },
      },
      {
        cityId: "me-podgorica",
        nights: 1,
        placeIds: [],
        note: "vuelo de vuelta desde Podgorica o Tivat, o el nocturno a Belgrado para la ficha de Serbia",
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Con el DNI son 30 días, no 90: para más, pasaporte.",
      "Vueling a Tivat solo vuela de julio a septiembre; el resto del año, Dubrovnik + bus o escala en Belgrado.",
      "Los trenes son de taquilla y los horarios cambian con la temporada: zpcg.me los tiene al día.",
    ],
    meta: m,
  },
  {
    id: "me-5d-podgorica-cetinje-y-kotor",
    title: "5 DÍAS: Titograd, la capital de las embajadas y Kotor",
    days: 5,
    season: "de abril a octubre",
    summary: "La escapada: Blok 5 y Gorica en Podgorica, Barutana y Cetinje en bus, el mausoleo del Lovćen y Kotor con la serpentina. Entrando por Dubrovnik o Tivat.",
    stops: [
      {
        cityId: "me-kotor",
        nights: 2,
        placeIds: ["me-kotor-serpentina-y-murallas", "me-kotor-hotel-fjord-y-mamula", "me-lovcen-mausoleo-njegos"],
        note: "el Lovćen con el teleférico de Kotor (abril-octubre)",
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, note: "Vueling a Tivat (verano) o a Dubrovnik y bus de 2 h" },
      },
      {
        cityId: "me-cetinje",
        nights: 1,
        placeIds: ["me-cetinje-capital-de-embajadas", "me-barutana"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "me-podgorica",
        nights: 2,
        placeIds: ["me-podgorica-blok-5-y-hotel", "me-podgorica-gorica"],
        note: "vuelo desde Podgorica (con escala) o vuelta a Tivat/Dubrovnik",
        legFromPrevious: { mode: "bus", durationMin: 40, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Kotor con cruceros es otra ciudad: llega por la tarde o vete a las murallas a las ocho de la mañana."],
    meta: m,
  },
  {
    id: "me-13d-el-completo-con-durmitor-y-bar-por-el-tren-de-tito",
    title: "13 DÍAS: el completo, con el Durmitor, Stari Bar y entrada en el tren de Tito desde Belgrado",
    days: 13,
    season: "de mayo a octubre",
    summary:
      "Para el que viene de la ficha de Serbia en el nocturno del Bar: bajarse en Kolašin, seguir a Podgorica, subir al Durmitor en bus por el puente del Tara, todo lo anterior y acabar en Bar, donde el tren muere, con la ciudad del terremoto. Montenegro entero en tren y bus, con dos noches de montaña.",
    stops: [
      {
        cityId: "me-kolasin",
        nights: 1,
        placeIds: ["me-kolasin-spomen-dom"],
        legFromPrevious: { mode: "tren", durationMin: 540, noCarDifficulty: "ok", bookAhead: true, price: "≈ 20 €", note: "el nocturno Belgrado–Bar, bajándose en Kolašin a las 5 de la mañana; o el diurno de verano" },
      },
      {
        cityId: "me-zabljak",
        nights: 2,
        placeIds: ["me-tara-puente-y-durmitor"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "aviso", note: "bus Kolašin–Mojkovac–Žabljak por el cañón del Tara, 1-2 al día" },
      },
      {
        cityId: "me-podgorica",
        nights: 3,
        placeIds: ["me-podgorica-blok-5-y-hotel", "me-podgorica-gorica", "me-niksic-trebjesa", "me-mala-rijeka-viaducto"],
        note: "Nikšić en tren en el día; el viaducto, con el regional a Bioče y vuelta si no lo viste de noche",
        legFromPrevious: { mode: "bus", durationMin: 140, noCarDifficulty: "ok", note: "bus Žabljak–Podgorica por el puente del Tara" },
      },
      {
        cityId: "me-cetinje",
        nights: 2,
        placeIds: ["me-barutana", "me-cetinje-capital-de-embajadas", "me-lovcen-mausoleo-njegos"],
        legFromPrevious: { mode: "bus", durationMin: 40, noCarDifficulty: "ok" },
      },
      {
        cityId: "me-kotor",
        nights: 3,
        placeIds: ["me-kotor-hotel-fjord-y-mamula", "me-kotor-serpentina-y-murallas"],
        legFromPrevious: { mode: "bus", durationMin: 60, noCarDifficulty: "ok" },
      },
      {
        cityId: "me-bar",
        nights: 2,
        placeIds: ["me-stari-bar"],
        note: "vuelo desde Podgorica (1 h de tren) o ferry a Bari para seguir por Italia",
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok", note: "bus por la costa vía Budva" },
      },
    ],
    warnings: [
      "El nocturno de Belgrado llega a Kolašin de madrugada: avisa al revisor y ten la pensión reservada.",
      "Žabljak en octubre ya tiene nieve y los buses bajan a uno; en julio-agosto, el Durmitor va lleno de rafting.",
      "Trece días con el DNI son legales (30), pero si vienes de Serbia con DNI, ahí fueron 90: no mezcles los cómputos.",
    ],
    meta: m,
  },
];
