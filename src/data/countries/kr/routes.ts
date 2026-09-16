import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "kr-14d-la-frontera-la-dictadura-y-las-mascaras",
    title: "COREA DEL SUR — 14 DÍAS: la frontera, la dictadura, el submarino y las máscaras, en KTX",
    days: 14,
    season: "de marzo a mayo o de septiembre a noviembre",
    summary:
      "Seúl con la prisión de Seodaemun, el memorial de la guerra y Sewoon, la DMZ de Paju en tour y Cheorwon en bus con las ruinas del Partido, la costa este con el submarino de Jeongdongjin, Andong con las máscaras, Busan con el cementerio de la ONU y Gamcheon, y Gwangju con el 18 de Mayo. Todo en KTX a 300 km/h y metro, con exención de K-ETA y 12 h 30 de vuelo directo.",
    stops: [
      {
        cityId: "kr-seul",
        nights: 4,
        placeIds: ["kr-seul-seodaemun", "kr-seul-museo-guerra", "kr-seul-cheonggyecheon-y-sewoon", "kr-seul-bunker-yeouido", "kr-dmz-tercer-tunel-dora", "kr-seul-hongdae-y-jjimjilbang"],
        note: "la DMZ en tour el segundo o tercer día (reservado desde casa)",
        legFromPrevious: { mode: "avion", durationMin: 750, noCarDifficulty: "ok", bookAhead: true, price: "600-900 €", note: "BCN → Incheon directo con Asiana, Korean Air o T'way (≈ 12 h 30); AREX al centro, 1 h" },
      },
      {
        cityId: "kr-cheorwon",
        nights: 1,
        placeIds: ["kr-cheorwon-partido-y-segundo-tunel"],
        note: "noche en un motel de Dongsong para hacer el tour de seguridad por la mañana",
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "aviso", note: "bus de Dong Seoul a Dongsong" },
      },
      {
        cityId: "kr-gangneung",
        nights: 2,
        placeIds: ["kr-jeongdongjin-y-submarino"],
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", price: "≈ 20 €", note: "bus de vuelta a Seúl y KTX desde Cheongnyangni (2 h); o bus directo Cheorwon–Gangneung por la costa, 3 h" },
      },
      {
        cityId: "kr-andong",
        nights: 2,
        placeIds: ["kr-andong-hahoe"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", note: "bus exprés Gangneung–Andong, 3 h; o KTX vía Seúl" },
      },
      {
        cityId: "kr-busan",
        nights: 3,
        placeIds: ["kr-busan-cementerio-onu", "kr-busan-gamcheon"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok", price: "≈ 12 €", note: "Mugunghwa por el interior, 3 h 30; o bus 2 h 30" },
      },
      {
        cityId: "kr-gwangju",
        nights: 2,
        placeIds: ["kr-gwangju-18-mayo"],
        note: "vuelta a Seúl en KTX (1 h 50) para el vuelo, o vuelo desde Gwangju a Gimpo",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", note: "Mugunghwa por Suncheon, 4 h; o bus 3 h" },
      },
    ],
    warnings: [
      "La DMZ va en tour con pasaporte y se llena: reserva 2-3 semanas antes. El JSA de las casetas azules sigue cerrado a civiles: si un tour lo vende, desconfía.",
      "El tour de seguridad de Cheorwon es en coreano y tiene horarios cambiantes: escribe a la oficina de turismo antes o ve al centro de Goseokjeong a las 9.",
      "Corea es cara en cama (50-70 € un hotel decente) y barata en tren y comida: el Korail Pass de 3 días compensa si haces dos KTX largos.",
      "Sin inglés se sobrevive con Naver Map y Papago: Google Maps no funciona para rutas en Corea.",
    ],
    meta: m,
  },
  {
    id: "kr-8d-seul-dmz-y-cheorwon",
    title: "8 DÍAS: Seúl, la DMZ de Paju y Cheorwon",
    days: 8,
    season: "todo el año (invierno con grullas en Cheorwon)",
    summary: "La versión corta: Seúl con lo oscuro (Seodaemun, el memorial, Sewoon, un jjimjilbang), la DMZ en tour y la sede del Partido de Cheorwon en bus. Sin KTX largos.",
    stops: [
      {
        cityId: "kr-seul",
        nights: 6,
        placeIds: ["kr-seul-seodaemun", "kr-seul-museo-guerra", "kr-seul-cheonggyecheon-y-sewoon", "kr-dmz-tercer-tunel-dora", "kr-seul-hongdae-y-jjimjilbang", "kr-seul-bunker-yeouido"],
        legFromPrevious: { mode: "avion", durationMin: 750, noCarDifficulty: "ok", bookAhead: true, note: "directo BCN–Incheon" },
      },
      {
        cityId: "kr-cheorwon",
        nights: 1,
        placeIds: ["kr-cheorwon-partido-y-segundo-tunel"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "aviso" },
      },
      {
        cityId: "kr-seul",
        nights: 1,
        placeIds: [],
        note: "vuelta para el vuelo; última noche en un jjimjilbang junto a la estación si sale temprano",
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["El jet lag de 7 horas se come el primer día: la DMZ, no antes del tercero."],
    meta: m,
  },
  {
    id: "kr-18d-el-completo-con-jindo-o-andong",
    title: "18 DÍAS: el completo, con Jindo en abril o las máscaras de Andong en septiembre",
    days: 18,
    season: "abril (por Jindo) o finales de septiembre (por Andong)",
    summary:
      "Lo anterior con calma, más un festival gordo: la apertura del mar de Jindo desde Gwangju en abril, o el festival de máscaras de Andong a finales de septiembre con las cuerdas de fuego en el río. Con 18 días, Corea sin correr y sin coche, que es como se ve.",
    stops: [
      {
        cityId: "kr-seul",
        nights: 5,
        placeIds: ["kr-seul-seodaemun", "kr-seul-museo-guerra", "kr-seul-cheonggyecheon-y-sewoon", "kr-seul-bunker-yeouido", "kr-dmz-tercer-tunel-dora", "kr-seul-hongdae-y-jjimjilbang"],
        legFromPrevious: { mode: "avion", durationMin: 750, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "kr-cheorwon",
        nights: 1,
        placeIds: ["kr-cheorwon-partido-y-segundo-tunel"],
        legFromPrevious: { mode: "bus", durationMin: 120, noCarDifficulty: "aviso" },
      },
      {
        cityId: "kr-gangneung",
        nights: 2,
        placeIds: ["kr-jeongdongjin-y-submarino"],
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok" },
      },
      {
        cityId: "kr-andong",
        nights: 3,
        placeIds: ["kr-andong-hahoe"],
        note: "tres noches si es el festival de máscaras (24 de septiembre al 4 de octubre)",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "kr-busan",
        nights: 3,
        placeIds: ["kr-busan-cementerio-onu", "kr-busan-gamcheon"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
      {
        cityId: "kr-gwangju",
        nights: 3,
        placeIds: ["kr-gwangju-18-mayo"],
        note: "desde aquí, Jindo en bus (2 h) si es abril; el 18 de mayo, si cuadra",
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok" },
      },
      {
        cityId: "kr-seul",
        nights: 1,
        placeIds: [],
        note: "KTX de vuelta y vuelo",
        legFromPrevious: { mode: "tren", durationMin: 110, noCarDifficulty: "ok", price: "≈ 30 €" },
      },
    ],
    warnings: [
      "Jindo sigue las mareas: las fechas salen cada invierno y la cama se agota; sin bus de vuelta de noche, dormir en Jindo.",
      "Andong en el festival: cama con un mes y KTX-Eum con semanas; las cuerdas de fuego son el sábado.",
      "Con 18 días la exención de K-ETA (hasta el 31 de diciembre de 2026) y los 90 días sin visado sobran; después de esa fecha, mira si vuelve el K-ETA (10 $, online).",
    ],
    meta: m,
  },
];
