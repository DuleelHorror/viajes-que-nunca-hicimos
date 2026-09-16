import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "kg-13d-frunze-el-tren-del-lago-y-las-yurtas",
    title: "KIRGUISTÁN — 13 DÍAS: Frunze, el tren del lago, las yurtas y la ciudad del uranio",
    days: 13,
    season: "de julio a mediados de septiembre (por el tren y el Song-Kul)",
    summary:
      "Biskek con su hormigón y su circo en obras, el tren de verano de 1,50 € hasta el Issyk-Kul, los sanatorios de Cholpon-Ata, Karakol con su mezquita china, dos noches en yurta a 3.000 metros desde Kochkor, vuelo a Osh para la montaña sagrada y taxi compartido a la ciudad secreta del uranio. Marshrutkas, un tren, un vuelo y un jeep compartido.",
    stops: [
      {
        cityId: "kg-biskek",
        nights: 3,
        placeIds: ["kg-biskek-frunze-brutalista", "kg-biskek-circo", "kg-ala-archa", "kg-burana"],
        note: "Ala-Archa con el bus 1; Burana con marshrutka a Tokmok",
        legFromPrevious: { mode: "avion", durationMin: 600, noCarDifficulty: "ok", bookAhead: true, price: "600-800 €", note: "BCN → Biskek por Estambul con Pegasus (Sabiha) o Turkish, 9-10 h; aterriza de madrugada; marshrutka 380 o taxi de 8 € al centro" },
      },
      {
        cityId: "kg-cholpon-ata",
        nights: 1,
        placeIds: ["kg-tren-issyk-kul", "kg-cholpon-ata-sanatorios"],
        note: "tren de las 8:06 a Balykchy y marshrutka de 1 h por la orilla; noche en el sanatorio Avrora si te va",
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok", price: "≈ 3 €", note: "el tren de verano (junio-septiembre) y marshrutka" },
      },
      {
        cityId: "kg-karakol",
        nights: 3,
        placeIds: ["kg-karakol-dunganos-y-przhevalski", "kg-skazka-canon"],
        note: "Skazka a la vuelta por la orilla sur, bajándose de la marshrutka",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok", price: "≈ 3 €" },
      },
      {
        cityId: "kg-kochkor",
        nights: 2,
        placeIds: ["kg-song-kul-yurtas"],
        note: "las dos noches en la yurta del Song-Kul con el jeep de CBT; Kochkor es solo la oficina",
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso", note: "marshrutka por la orilla sur a Balykchy y otra a Kochkor; o directa Karakol–Kochkor si sale" },
      },
      {
        cityId: "kg-biskek",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "kg-osh",
        nights: 2,
        placeIds: ["kg-osh-sulayman-too", "kg-osh-bazar-y-lenin"],
        legFromPrevious: { mode: "avion", durationMin: 45, noCarDifficulty: "ok", bookAhead: true, price: "≈ 45 €", note: "TezJet o Asman; la marshrutka son 10-12 h de paso de montaña" },
      },
      {
        cityId: "kg-jalal-abad",
        nights: 1,
        placeIds: ["kg-mailuu-suu-uranio"],
        note: "Mailuu-Suu ida y vuelta en el día en taxi compartido; vuelo de vuelta desde Osh (con escala) al día siguiente",
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok", note: "taxi compartido desde la estación de Osh" },
      },
    ],
    warnings: [
      "Sin visado, pero solo 30 días en cualquier periodo de 60 desde 2026: no encadenes con Kazajistán sin contar.",
      "El tren de verano solo circula del 5 de junio al 13 de septiembre (diario desde el 26 de junio): fuera de eso, marshrutka de 4 h.",
      "El Song-Kul se cierra en septiembre con las primeras nieves: las yurtas bajan al valle y se acabó hasta junio.",
      "Mailuu-Suu: no salgas del centro y del museo; las balsas de residuos están señalizadas y el barro del río no se pisa.",
    ],
    meta: m,
  },
  {
    id: "kg-7d-biskek-y-el-lago",
    title: "7 DÍAS: Biskek y el Issyk-Kul en el tren de verano",
    days: 7,
    season: "de julio a mediados de septiembre",
    summary: "La escapada larga: el Frunze de hormigón, Ala-Archa en bus urbano, el tren de 1,50 € al lago, los sanatorios de Cholpon-Ata y Karakol con su mezquita china. Sin yurtas ni sur.",
    stops: [
      {
        cityId: "kg-biskek",
        nights: 3,
        placeIds: ["kg-biskek-frunze-brutalista", "kg-biskek-circo", "kg-ala-archa"],
        legFromPrevious: { mode: "avion", durationMin: 600, noCarDifficulty: "ok", bookAhead: true, note: "por Estambul" },
      },
      {
        cityId: "kg-cholpon-ata",
        nights: 1,
        placeIds: ["kg-tren-issyk-kul", "kg-cholpon-ata-sanatorios"],
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok" },
      },
      {
        cityId: "kg-karakol",
        nights: 2,
        placeIds: ["kg-karakol-dunganos-y-przhevalski"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
      {
        cityId: "kg-biskek",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "bus", durationMin: 400, noCarDifficulty: "ok", note: "marshrutka directa Karakol–Biskek, 6-7 h" },
      },
    ],
    warnings: ["Siete días con dos madrugadas de vuelo: el de ida llega a las 4 de la mañana."],
    meta: m,
  },
  {
    id: "kg-17d-el-completo-con-arslanbob-y-el-sur",
    title: "17 DÍAS: el completo, con el bosque de nogales y el sur con calma",
    days: 17,
    season: "septiembre (nueces, todavía tren y yurtas hasta mitad de mes)",
    summary:
      "Lo anterior con un día más en cada base y el bosque de nogales de Arslanbob entre Jalal-Abad y Osh, para respirar entre el uranio y el bazar. Es Kirguistán entero sin coche: marshrutkas, el tren del lago, un vuelo interno y el jeep compartido del Song-Kul, y con los 30 días de exención sobrados.",
    stops: [
      {
        cityId: "kg-biskek",
        nights: 3,
        placeIds: ["kg-biskek-frunze-brutalista", "kg-biskek-circo", "kg-ala-archa", "kg-burana"],
        legFromPrevious: { mode: "avion", durationMin: 600, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "kg-cholpon-ata",
        nights: 2,
        placeIds: ["kg-tren-issyk-kul", "kg-cholpon-ata-sanatorios"],
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok" },
      },
      {
        cityId: "kg-karakol",
        nights: 3,
        placeIds: ["kg-karakol-dunganos-y-przhevalski", "kg-skazka-canon"],
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
      {
        cityId: "kg-kochkor",
        nights: 2,
        placeIds: ["kg-song-kul-yurtas"],
        legFromPrevious: { mode: "bus", durationMin: 300, noCarDifficulty: "aviso" },
      },
      {
        cityId: "kg-biskek",
        nights: 1,
        placeIds: [],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "kg-osh",
        nights: 2,
        placeIds: ["kg-osh-sulayman-too", "kg-osh-bazar-y-lenin"],
        legFromPrevious: { mode: "avion", durationMin: 45, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "kg-jalal-abad",
        nights: 2,
        placeIds: ["kg-mailuu-suu-uranio", "kg-arslanbob-nogales"],
        note: "un día para Mailuu-Suu y una noche en Arslanbob con familia",
        legFromPrevious: { mode: "bus", durationMin: 90, noCarDifficulty: "ok" },
      },
      {
        cityId: "kg-osh",
        nights: 2,
        placeIds: [],
        note: "vuelta a Osh y vuelo a casa por Estambul (Pegasus vuela Osh–Sabiha directo)",
        legFromPrevious: { mode: "bus", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Septiembre es la última ventana del tren (hasta el 13) y de las yurtas (hasta mediados): sal a principios de mes.",
      "Osh tiene vuelo directo a Estambul con Pegasus: entrar por Biskek y salir por Osh ahorra volver al norte.",
      "Diecisiete días caben en los 30 de la exención, pero no encadenes con otro país de Asia Central sin contar los 60.",
    ],
    meta: m,
  },
];
