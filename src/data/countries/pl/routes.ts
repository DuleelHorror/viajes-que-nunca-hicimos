import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "pl-12d-stalin-hitler-y-la-urss-secreta",
    title: "POLONIA — 12 DÍAS: Nowa Huta, Auschwitz, Treblinka, la Guarida del Lobo y el búnker nuclear",
    days: 12,
    season: "de mayo a octubre (por Podborsko y la Guarida)",
    summary:
      "Cracovia con la ciudad estalinista en tranvía y Auschwitz en bus; el Pendolino a Varsovia para la tarta de Stalin, el gueto y Treblinka en tren regional; Masuria para los búnkeres volados de Hitler; y Pomerania para el depósito nuclear soviético con apeadero y la ciudad secreta de Borne Sulinowo. Con el DNI, low-cost y trenes de 11 €.",
    stops: [
      {
        cityId: "pl-cracovia",
        nights: 4,
        placeIds: ["pl-nowa-huta", "pl-auschwitz-birkenau", "pl-cracovia-schindler-y-plaszow", "pl-wieliczka-mina-sal"],
        note: "Auschwitz reservado con semanas; Nowa Huta y Płaszów, en tranvía",
        legFromPrevious: { mode: "avion", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, price: "25-120 €", note: "BCN → Cracovia con Ryanair, Wizz o Buzz (27/semana), 3 h; tren del aeropuerto al centro, 20 min" },
      },
      {
        cityId: "pl-varsovia",
        nights: 3,
        placeIds: ["pl-varsovia-palacio-cultura", "pl-varsovia-gueto-y-polin", "pl-varsovia-museo-alzamiento", "pl-varsovia-powazki-1-noviembre"],
        legFromPrevious: { mode: "tren", durationMin: 140, noCarDifficulty: "ok", bookAhead: true, price: "desde 11 €", note: "Pendolino EIP con reserva" },
      },
      {
        cityId: "pl-malkinia",
        nights: 0,
        placeIds: ["pl-treblinka"],
        note: "día entero desde Varsovia: tren de la mañana, taxi al campo, tren de vuelta confirmado",
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "aviso", price: "≈ 2 €" },
      },
      {
        cityId: "pl-ketrzyn",
        nights: 2,
        placeIds: ["pl-guarida-del-lobo"],
        note: "el IC directo de Varsovia sale a las 16:01; la Guarida, a la mañana siguiente con el bus de Kętrzyn",
        legFromPrevious: { mode: "tren", durationMin: 270, noCarDifficulty: "ok", bookAhead: true, note: "IC directo o cambio en Olsztyn" },
      },
      {
        cityId: "pl-bialogard",
        nights: 2,
        placeIds: ["pl-podborsko-3001", "pl-borne-sulinowo"],
        note: "Podborsko con el Polregio y la visita de las 11 o las 12; Borne Sulinowo al día siguiente con taxi desde Szczecinek",
        legFromPrevious: { mode: "tren", durationMin: 420, noCarDifficulty: "aviso", note: "Kętrzyn–Olsztyn–Gdańsk–Koszalin–Białogard: un día de trenes por el norte, o vuelta por Varsovia" },
      },
      {
        cityId: "pl-varsovia",
        nights: 1,
        placeIds: [],
        note: "vuelo de vuelta desde Varsovia (Chopin o Modlin)",
        legFromPrevious: { mode: "tren", durationMin: 330, noCarDifficulty: "ok", bookAhead: true },
      },
    ],
    warnings: [
      "Auschwitz: reserva online obligatoria desde marzo de 2026 y sin taquilla; los pases gratuitos de por libre vuelan en temporada.",
      "Podborsko solo abre de mayo a octubre y a tres horas fijas: fija ese día primero.",
      "Treblinka desde Małkinia son 8 km y pocos trenes: apunta el horario de vuelta antes de salir de Varsovia.",
    ],
    meta: m,
  },
  {
    id: "pl-6d-cracovia-y-varsovia",
    title: "6 DÍAS: Cracovia y Varsovia, Stalin por partida doble",
    days: 6,
    season: "todo el año",
    summary: "La escapada: Nowa Huta en tranvía, Auschwitz en bus, el Pendolino a Varsovia para el Palacio de la Cultura, el gueto y el POLIN. DNI, low-cost y dos ciudades.",
    stops: [
      {
        cityId: "pl-cracovia",
        nights: 3,
        placeIds: ["pl-nowa-huta", "pl-auschwitz-birkenau", "pl-cracovia-schindler-y-plaszow"],
        legFromPrevious: { mode: "avion", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, note: "directo low-cost" },
      },
      {
        cityId: "pl-varsovia",
        nights: 3,
        placeIds: ["pl-varsovia-palacio-cultura", "pl-varsovia-gueto-y-polin", "pl-varsovia-museo-alzamiento"],
        note: "vuelo de vuelta desde Varsovia (Wizz, LOT, Ryanair a Modlin)",
        legFromPrevious: { mode: "tren", durationMin: 140, noCarDifficulty: "ok", bookAhead: true },
      },
    ],
    warnings: ["Si cae el 1 de noviembre, Powązki al anochecer sustituye a cualquier otra cosa del día."],
    meta: m,
  },
  {
    id: "pl-16d-el-completo-con-silesia",
    title: "16 DÍAS: el completo, con Breslavia y la pequeña Moscú de Legnica",
    days: 16,
    season: "de mayo a octubre",
    summary:
      "Lo anterior más Silesia: Breslavia con sus enanos anticomunistas y su cúpula, y Legnica, la ciudad que fue rusa 48 años, para volar desde Breslavia o volver a Cracovia. Es Polonia entera sin coche, con el norte lento y el sur en Pendolino.",
    stops: [
      {
        cityId: "pl-cracovia",
        nights: 4,
        placeIds: ["pl-nowa-huta", "pl-auschwitz-birkenau", "pl-cracovia-schindler-y-plaszow", "pl-wieliczka-mina-sal"],
        legFromPrevious: { mode: "avion", durationMin: 180, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "pl-legnica",
        nights: 2,
        placeIds: ["pl-breslavia-enanos-y-hala", "pl-legnica-pequena-moscu"],
        note: "una noche en Breslavia y otra en Legnica, o las dos en Breslavia con Legnica en el día",
        legFromPrevious: { mode: "tren", durationMin: 270, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "pl-varsovia",
        nights: 3,
        placeIds: ["pl-varsovia-palacio-cultura", "pl-varsovia-gueto-y-polin", "pl-varsovia-museo-alzamiento", "pl-varsovia-powazki-1-noviembre"],
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", bookAhead: true, note: "IC Breslavia–Varsovia, 4 h" },
      },
      {
        cityId: "pl-malkinia",
        nights: 0,
        placeIds: ["pl-treblinka"],
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "aviso" },
      },
      {
        cityId: "pl-ketrzyn",
        nights: 2,
        placeIds: ["pl-guarida-del-lobo"],
        legFromPrevious: { mode: "tren", durationMin: 270, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "pl-bialogard",
        nights: 3,
        placeIds: ["pl-podborsko-3001", "pl-borne-sulinowo"],
        note: "tres noches para no depender de un solo horario de visita en Podborsko",
        legFromPrevious: { mode: "tren", durationMin: 420, noCarDifficulty: "aviso" },
      },
      {
        cityId: "pl-varsovia",
        nights: 2,
        placeIds: [],
        legFromPrevious: { mode: "tren", durationMin: 330, noCarDifficulty: "ok", bookAhead: true },
      },
    ],
    warnings: [
      "El norte (Kętrzyn, Białogard, Szczecinek) es Polregio y TLK: lento, barato y con cambios; koleo.pl lo cuadra.",
      "Legnica no tiene museo del Cuadrado: se pasea con un mapa viejo y se pregunta a los mayores.",
      "Dieciséis días dan para el país entero; en doce, la mitad sur y el norte oscuro.",
    ],
    meta: m,
  },
];
