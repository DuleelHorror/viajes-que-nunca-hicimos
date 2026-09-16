import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-16", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "tr-14d-orfanato-dogu-y-la-ciudad-subterranea",
    title: "TURQUÍA — 14 DÍAS: el orfanato de madera, el Doğu a Ani y la ciudad subterránea",
    days: 14,
    season: "abril-mayo o septiembre-octubre",
    summary:
      "Estambul con el orfanato podrido de la isla, el gasómetro y la cisterna; el YHT a Ankara para el mausoleo de Atatürk; las 26 horas del Doğu Ekspresi hasta Kars y la capital armenia fantasma de Ani; vuelo de vuelta al oeste y el YHT a Konya para los derviches; bus a Capadocia para bajar 85 metros a Derinkuyu y andar el valle abandonado de Zelve. Con el DNI y tres directos diarios.",
    stops: [
      {
        cityId: "tr-estambul",
        nights: 4,
        placeIds: ["tr-estambul-orfanato-buyukada", "tr-estambul-cisterna", "tr-estambul-gazhane-y-haydarpasa", "tr-estambul-yedikule"],
        note: "Büyükada es el día entero en ferry; Kadıköy y Yedikule, tardes",
        legFromPrevious: { mode: "avion", durationMin: 210, noCarDifficulty: "ok", bookAhead: true, price: "80-200 €", note: "BCN → Estambul directo con Turkish (IST), Pegasus (SAW) o Vueling, 3 h 30; metro M11 o Havaist al centro" },
      },
      {
        cityId: "tr-ankara",
        nights: 1,
        placeIds: ["tr-ankara-anitkabir"],
        note: "el Doğu sale a las 17:55: Anıtkabir por la mañana",
        legFromPrevious: { mode: "tren", durationMin: 260, noCarDifficulty: "ok", bookAhead: true, price: "≈ 25 €", note: "YHT desde Söğütlüçeşme" },
      },
      {
        cityId: "tr-kars",
        nights: 3,
        placeIds: ["tr-kars-ciudad-rusa", "tr-ani"],
        note: "una de las tres noches es en el tren; Ani con el minibús de las 10:00",
        legFromPrevious: { mode: "tren", durationMin: 1590, noCarDifficulty: "ok", bookAhead: true, price: "35-60 €", note: "Doğu Ekspresi, 26 h: comprado a medianoche el día que sale a la venta" },
      },
      {
        cityId: "tr-konya",
        nights: 2,
        placeIds: ["tr-konya-mevlana"],
        note: "cuadrar un sábado para el sema",
        legFromPrevious: { mode: "avion", durationMin: 360, noCarDifficulty: "ok", bookAhead: true, price: "≈ 60 €", note: "vuelo Kars–Ankara (1 h 30) y YHT Ankara–Konya (1 h 45)" },
      },
      {
        cityId: "tr-goreme",
        nights: 3,
        placeIds: ["tr-derinkuyu", "tr-zelve-pueblo-abandonado"],
        note: "Derinkuyu en bus desde Nevşehir; Zelve andando o en dolmuş",
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok", price: "≈ 8 €" },
      },
      {
        cityId: "tr-estambul",
        nights: 1,
        placeIds: [],
        note: "vuelo Kayseri–Estambul (1 h 20) y vuelo a casa",
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "bus a Kayseri (1 h 15) y vuelo" },
      },
    ],
    warnings: [
      "El Doğu Ekspresi se agota en minutos: hay que estar en ebilet a medianoche (hora turca) del día en que salen a la venta los billetes de tu fecha. Sin él, el viaje cambia entero.",
      "La lira se devalúa: los precios en euros de esta ficha son de septiembre de 2026 y las entradas para extranjeros se fijan en euros.",
      "Ani está en la frontera cerrada con Armenia: no fotografíes hacia las torres del otro lado ni a los soldados turcos.",
    ],
    meta: m,
  },
  {
    id: "tr-7d-estambul-y-kayakoy",
    title: "7 DÍAS: Estambul a fondo y el pueblo vaciado de Kayaköy",
    days: 7,
    season: "todo el año (mejor abril-mayo, septiembre-octubre)",
    summary: "La escapada: el orfanato de madera de Büyükada, la cisterna, Haydarpaşa y Yedikule; y vuelo de una hora a Dalaman para el pueblo griego vaciado en 1923, con dolmuş desde Fethiye.",
    stops: [
      {
        cityId: "tr-estambul",
        nights: 4,
        placeIds: ["tr-estambul-orfanato-buyukada", "tr-estambul-cisterna", "tr-estambul-gazhane-y-haydarpasa", "tr-estambul-yedikule"],
        legFromPrevious: { mode: "avion", durationMin: 210, noCarDifficulty: "ok", bookAhead: true, note: "directo con Vueling, Pegasus o Turkish" },
      },
      {
        cityId: "tr-fethiye",
        nights: 3,
        placeIds: ["tr-kayakoy"],
        note: "vuelo de vuelta desde Dalaman (Vueling y Pegasus a BCN en temporada, o vía Estambul)",
        legFromPrevious: { mode: "avion", durationMin: 80, noCarDifficulty: "ok", bookAhead: true, price: "≈ 40 €", note: "Pegasus SAW–Dalaman y bus Havaş a Fethiye, 1 h" },
      },
    ],
    warnings: ["Kayaköy en julio y agosto es un horno sin sombra: primavera u otoño, o a primera hora."],
    meta: m,
  },
  {
    id: "tr-18d-el-completo-con-gobekli-tepe-y-kayakoy",
    title: "18 DÍAS: el completo, con Göbekli Tepe y Kayaköy",
    days: 18,
    season: "abril-mayo o septiembre-octubre",
    summary:
      "Lo anterior más el sureste (vuelo a Şanlıurfa para el templo de hace 11.500 años, con el MAEC leído) y la costa (Dalaman y el pueblo vaciado de Kayaköy) para volver desde allí. Es Turquía de punta a punta sin coche: dos YHT, un nocturno de 26 h, cuatro vuelos internos y dolmuşes.",
    stops: [
      {
        cityId: "tr-estambul",
        nights: 4,
        placeIds: ["tr-estambul-orfanato-buyukada", "tr-estambul-cisterna", "tr-estambul-gazhane-y-haydarpasa", "tr-estambul-yedikule"],
        legFromPrevious: { mode: "avion", durationMin: 210, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "tr-ankara",
        nights: 1,
        placeIds: ["tr-ankara-anitkabir"],
        legFromPrevious: { mode: "tren", durationMin: 260, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "tr-kars",
        nights: 3,
        placeIds: ["tr-kars-ciudad-rusa", "tr-ani", "tr-cildir-lago-helado"],
        note: "Çıldır solo tiene sentido en invierno; en otoño, día extra en Ani",
        legFromPrevious: { mode: "tren", durationMin: 1590, noCarDifficulty: "ok", bookAhead: true, note: "Doğu Ekspresi" },
      },
      {
        cityId: "tr-sanliurfa",
        nights: 2,
        placeIds: ["tr-gobekli-tepe"],
        note: "vuelo Kars–Şanlıurfa vía Estambul o Ankara; Göbekli Tepe con el bus 100 de las 10:00",
        legFromPrevious: { mode: "avion", durationMin: 300, noCarDifficulty: "ok", bookAhead: true, note: "con escala" },
      },
      {
        cityId: "tr-goreme",
        nights: 3,
        placeIds: ["tr-derinkuyu", "tr-zelve-pueblo-abandonado"],
        legFromPrevious: { mode: "bus", durationMin: 420, noCarDifficulty: "aviso", note: "bus nocturno Şanlıurfa–Nevşehir (7-8 h) o vuelo a Kayseri" },
      },
      {
        cityId: "tr-konya",
        nights: 2,
        placeIds: ["tr-konya-mevlana"],
        legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "tr-fethiye",
        nights: 3,
        placeIds: ["tr-kayakoy"],
        note: "YHT Konya–Estambul y vuelo a Dalaman, o bus nocturno Konya–Fethiye (9 h); vuelta a casa desde Dalaman o Estambul",
        legFromPrevious: { mode: "bus", durationMin: 540, noCarDifficulty: "aviso", note: "bus nocturno directo por Antalya" },
      },
    ],
    warnings: [
      "Şanlıurfa está en el sureste con recomendación de precaución: lee el MAEC la semana antes y, si la cosa está fea, quítalo y no pasa nada.",
      "Dieciocho días con cuatro vuelos internos: Pegasus y AJet los venden desde 25 € con semanas.",
      "El Doğu es el eje del viaje y se compra a medianoche: fija su fecha primero y monta el resto alrededor.",
    ],
    meta: m,
  },
];
