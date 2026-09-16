import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "sk-9d-ovni-piramide-platillo-y-plata",
    title: "ESLOVAQUIA — 9 DÍAS: el OVNI, la pirámide, el platillo del Levantamiento y la ciudad de la plata",
    days: 9,
    season: "de mayo a octubre",
    summary:
      "Bratislava con el puente OVNI y Petržalka, la pirámide invertida, el crematorio en el robledal, el búnker del Telón de Acero y Devín; tren al platillo partido de Banská Bystrica y ramal a la ciudad de la plata con su mina; y la troncal hasta los Tatras para el hormigón de Štrbské Pleso en tranvía eléctrico. Ryanair, DNI, euro.",
    stops: [
      {
        cityId: "sk-bratislava",
        nights: 4,
        placeIds: ["sk-ufo-y-petrzalka", "sk-radio-piramide-invertida", "sk-crematorio-milucky", "sk-slavin", "sk-bunker-bs8-y-cementerio", "sk-devin-puerta-libertad", "sk-chatam-sofer"],
        note: "Chatam Sofer con cita de 48 h; el búnker, en fin de semana",
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "35-120 €", note: "BCN → Bratislava con Ryanair o Wizz (16/semana), 2 h 20; bus 61 al centro en 25 min. O Viena (Vueling) y bus de 1 h" },
      },
      {
        cityId: "sk-banska-bystrica",
        nights: 1,
        placeIds: ["sk-banska-bystrica-snp", "sk-kremnica-ceca-y-mina"],
        note: "Kremnica en el día con el regional si sobra la tarde",
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok", price: "≈ 12 €" },
      },
      {
        cityId: "sk-banska-stiavnica",
        nights: 2,
        placeIds: ["sk-banska-stiavnica-mina"],
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok", note: "cambio en Hronská Dúbrava al ramal de vía única" },
      },
      {
        cityId: "sk-poprad",
        nights: 2,
        placeIds: ["sk-strbske-pleso-hoteles-socialistas"],
        note: "una de las noches en Štrbské Pleso; vuelo de vuelta desde Košice (Ryanair) o Bratislava",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", note: "Banská Štiavnica–Zvolen–Poprad con cambio, o vía Žilina" },
      },
    ],
    warnings: [
      "Los trenes gratis de ZSSK son para residentes en Eslovaquia (menores de 26 estudiantes y mayores de 62): los turistas pagan, y es barato igual.",
      "El búnker B-S 8 lo abren voluntarios los fines de semana: cuadra Bratislava con un sábado.",
      "La pirámide invertida se ve por dentro solo entre semana de 12 a 17 (miércoles 13-18), o con entrada de concierto.",
    ],
    meta: m,
  },
  {
    id: "sk-4d-bratislava-brutalista",
    title: "4 DÍAS: Bratislava brutalista y el Telón de Acero",
    days: 4,
    season: "todo el año",
    summary: "El puente: OVNI y Petržalka, la pirámide invertida, el crematorio, Slavín, el búnker de la frontera y Devín con la puerta acribillada. Ryanair y DNI, o desde Viena en bus.",
    stops: [
      {
        cityId: "sk-bratislava",
        nights: 3,
        placeIds: ["sk-ufo-y-petrzalka", "sk-radio-piramide-invertida", "sk-crematorio-milucky", "sk-slavin"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "Ryanair o Wizz directos" },
      },
      {
        cityId: "sk-bratislava",
        nights: 1,
        placeIds: ["sk-bunker-bs8-y-cementerio", "sk-devin-puerta-libertad"],
        note: "el día de la frontera: Devín por la mañana con el bus 29 y el búnker de Petržalka por la tarde (sábado)",
        legFromPrevious: { mode: "bus", durationMin: 0, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Viena está a 1 h en bus o tren: el puente se puede hacer con vuelo a Viena y salida desde Bratislava, o al revés."],
    meta: m,
  },
  {
    id: "sk-13d-el-completo-con-kosice-y-entrada-desde-budapest",
    title: "13 DÍAS: el completo, entrando desde Budapest y saliendo por Košice",
    days: 13,
    season: "de mayo a octubre (o el primer fin de semana de julio, por Východná)",
    summary:
      "Para el que viene de la ficha de Hungría: EC de Budapest a Bratislava, todo lo anterior, Kremnica con calma, los Tatras con dos noches y la troncal hasta Košice, la ciudad obrera del este con Ryanair para volver. Es Eslovaquia entera en tren, de oeste a este.",
    stops: [
      {
        cityId: "sk-bratislava",
        nights: 4,
        placeIds: ["sk-ufo-y-petrzalka", "sk-radio-piramide-invertida", "sk-crematorio-milucky", "sk-slavin", "sk-bunker-bs8-y-cementerio", "sk-devin-puerta-libertad", "sk-chatam-sofer"],
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "desde 9 €", note: "EC desde Budapest, 2 h 25-3 h 30" },
      },
      {
        cityId: "sk-banska-bystrica",
        nights: 2,
        placeIds: ["sk-banska-bystrica-snp", "sk-kremnica-ceca-y-mina"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
      {
        cityId: "sk-banska-stiavnica",
        nights: 2,
        placeIds: ["sk-banska-stiavnica-mina"],
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok" },
      },
      {
        cityId: "sk-poprad",
        nights: 3,
        placeIds: ["sk-strbske-pleso-hoteles-socialistas"],
        note: "dos noches arriba en Štrbské Pleso y una en Poprad; Východná está a una parada regional si es julio",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok" },
      },
      {
        cityId: "sk-kosice",
        nights: 2,
        placeIds: ["sk-kosice-aceria"],
        note: "vuelo de vuelta desde Košice con Ryanair (a Londres, Viena, Milán; a BCN con escala) o troncal de vuelta",
        legFromPrevious: { mode: "tren", durationMin: 90, noCarDifficulty: "ok", price: "≈ 8 €" },
      },
    ],
    warnings: [
      "Košice no tiene directo a BCN: Ryanair a Viena o Milán y enlace, o la troncal de vuelta a Bratislava (5 h) el último día.",
      "Luník IX no es una atracción: si vas, sin cámara y sin grupo.",
      "Trece días de Eslovaquia son muchos para un país pequeño; en nueve está lo que importa, y el resto es montaña.",
    ],
    meta: m,
  },
];
