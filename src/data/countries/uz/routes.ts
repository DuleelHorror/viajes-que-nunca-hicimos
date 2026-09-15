import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "uz-12d-transversal-aral",
    title: "UZBEKISTÁN — 12 DÍAS: la transversal hasta el Mar de Aral",
    days: 12,
    season: "abril-mayo o septiembre-octubre",
    summary: "Tashkent, las tres ciudades de la Seda en tren y el salto a Karakalpakstán para ver los barcos de Muynak. Todo en transporte público salvo la marshrutka del final. Es el viaje.",
    stops: [
      { cityId: "uz-tashkent", nights: 2, placeIds: ["uz-tashkent-metro", "uz-tashkent-hotel-uzbekistan", "uz-tashkent-chorsu", "uz-tashkent-museo-represion"], legFromPrevious: { mode: "avion", durationMin: 570, noCarDifficulty: "ok", bookAhead: true, note: "BCN → Estambul → Tashkent, 9-10 h con escala; aterrizas de madrugada" } },
      { cityId: "uz-samarcanda", nights: 2, placeIds: ["uz-samarcanda-registan", "uz-samarcanda-shah-i-zinda", "uz-samarcanda-ulugh-beg"], legFromPrevious: { mode: "tren", durationMin: 130, noCarDifficulty: "ok", bookAhead: true, price: "≈ 12 €", note: "Afrosiyob" } },
      { cityId: "uz-bujara", nights: 2, placeIds: ["uz-bujara-ark-zindan", "uz-bujara-chor-minor"], legFromPrevious: { mode: "tren", durationMin: 95, noCarDifficulty: "ok", bookAhead: true, price: "≈ 10 €", note: "Afrosiyob; taxi de Kagan al centro" } },
      { cityId: "uz-khiva", nights: 2, placeIds: ["uz-khiva-itchan-kala", "uz-khiva-kalta-minor", "uz-khorezm-fortalezas"], legFromPrevious: { mode: "tren", durationMin: 400, noCarDifficulty: "ok", bookAhead: true, price: "≈ 8 €", note: "diurno por el desierto; llega a la estación de Khiva" } },
      { cityId: "uz-nukus", nights: 2, placeIds: ["uz-nukus-museo-savitsky", "uz-mizdakhan"], legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok", price: "≈ 5 €", note: "desde Khiva o Urgench" } },
      { cityId: "uz-muynak", nights: 1, placeIds: ["uz-muynak-cementerio-barcos"], legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", price: "≈ 3 €", note: "marshrutka desde la estación de autobuses de Nukus; sale cuando se llena" } },
      { cityId: "uz-nukus", nights: 0, placeIds: [], note: "de paso hacia el aeropuerto", legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", note: "sal de Muynak a primera hora" } },
      { cityId: "uz-tashkent", nights: 1, placeIds: ["uz-tashkent-monumento-valor"], legFromPrevious: { mode: "avion", durationMin: 120, noCarDifficulty: "ok", bookAhead: true, price: "≈ 40-60 €", note: "Nukus → Tashkent por la tarde" } },
    ],
    warnings: [
      "Nukus ↔ Muynak va en marshrutka sin horario: madruga o negocia un taxi compartido (15-20 € por coche).",
      "El agua del Aral no cabe en 12 días sin tour 4x4: añade 2 días (mira la ruta de 15) o quédate con Muynak, que ya es mucho.",
      "Reserva el Afrosiyob en cuanto tengas fechas; en primavera y otoño vuela.",
    ],
    meta: m,
  },
  {
    id: "uz-8d-ruta-seda",
    title: "8 DÍAS: la Ruta de la Seda en Afrosiyob",
    days: 8,
    season: "cualquier mes salvo julio y agosto",
    summary: "El eje clásico Tashkent–Samarcanda–Bujará–Khiva íntegro en tren, con vuelo de vuelta desde Urgench. Sin Aral: para eso hacen falta 12.",
    stops: [
      { cityId: "uz-tashkent", nights: 2, placeIds: ["uz-tashkent-metro", "uz-tashkent-hotel-uzbekistan", "uz-tashkent-chorsu"], legFromPrevious: { mode: "avion", durationMin: 570, noCarDifficulty: "ok", bookAhead: true, note: "con escala en Estambul o Doha" } },
      { cityId: "uz-samarcanda", nights: 2, placeIds: ["uz-samarcanda-registan", "uz-samarcanda-shah-i-zinda", "uz-samarcanda-ulugh-beg"], legFromPrevious: { mode: "tren", durationMin: 130, noCarDifficulty: "ok", bookAhead: true, note: "Afrosiyob" } },
      { cityId: "uz-bujara", nights: 2, placeIds: ["uz-bujara-ark-zindan", "uz-bujara-chor-minor", "uz-bujara-sitorai-mokhi-khosa"], legFromPrevious: { mode: "tren", durationMin: 95, noCarDifficulty: "ok", bookAhead: true, note: "Afrosiyob" } },
      { cityId: "uz-khiva", nights: 1, placeIds: ["uz-khiva-itchan-kala", "uz-khiva-kalta-minor"], legFromPrevious: { mode: "tren", durationMin: 400, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "uz-tashkent", nights: 1, placeIds: ["uz-tashkent-museo-represion"], legFromPrevious: { mode: "avion", durationMin: 105, noCarDifficulty: "ok", bookAhead: true, note: "Urgench → Tashkent; trolebús o taxi de Khiva a Urgench" } },
    ],
    warnings: ["Khiva con una sola noche se queda corta. Si puedes, róbale una a Tashkent."],
    meta: m,
  },
  {
    id: "uz-15d-completo",
    title: "15 DÍAS: el completo, con Shahrisabz, fortalezas del desierto y el agua del Aral",
    days: 15,
    season: "abril-mayo o septiembre-octubre",
    summary: "La transversal de 12 días más la escapada a Shahrisabz, las fortalezas de Corasmia con noche en yurta y el tour de dos días hasta donde queda agua. Para cuando quieres verlo todo.",
    stops: [
      { cityId: "uz-tashkent", nights: 2, placeIds: ["uz-tashkent-metro", "uz-tashkent-hotel-uzbekistan", "uz-tashkent-chorsu", "uz-tashkent-museo-represion", "uz-tashkent-torre-tv"], legFromPrevious: { mode: "avion", durationMin: 570, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "uz-samarcanda", nights: 2, placeIds: ["uz-samarcanda-registan", "uz-samarcanda-shah-i-zinda", "uz-samarcanda-ulugh-beg", "uz-samarcanda-afrosiab"], legFromPrevious: { mode: "tren", durationMin: 130, noCarDifficulty: "ok", bookAhead: true, note: "Afrosiyob" } },
      { cityId: "uz-shahrisabz", nights: 0, placeIds: ["uz-shahrisabz-ak-saray"], note: "escapada de un día", legFromPrevious: { mode: "taxi", durationMin: 90, noCarDifficulty: "aviso", price: "≈ 4 € el asiento", note: "taxi compartido por el puerto de Takhtakaracha" } },
      { cityId: "uz-samarcanda", nights: 1, placeIds: [], legFromPrevious: { mode: "taxi", durationMin: 90, noCarDifficulty: "aviso" } },
      { cityId: "uz-bujara", nights: 2, placeIds: ["uz-bujara-ark-zindan", "uz-bujara-chor-minor", "uz-bujara-sitorai-mokhi-khosa"], legFromPrevious: { mode: "tren", durationMin: 95, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "uz-khiva", nights: 2, placeIds: ["uz-khiva-itchan-kala", "uz-khiva-kalta-minor", "uz-khorezm-fortalezas"], legFromPrevious: { mode: "tren", durationMin: 400, noCarDifficulty: "ok", bookAhead: true } },
      { cityId: "uz-nukus", nights: 1, placeIds: ["uz-nukus-museo-savitsky", "uz-mizdakhan"], legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" } },
      { cityId: "uz-muynak", nights: 2, placeIds: ["uz-aral-orilla-ustyurt"], note: "tour 4x4: una noche en yurtas junto al agua y otra en Muynak", legFromPrevious: { mode: "tour", durationMin: 480, noCarDifficulty: "dificil", bookAhead: true, price: "≈ 200 € por persona", note: "solo con tour desde Nukus; pasa por Mizdakhan y el cañón de Sudochye" } },
      { cityId: "uz-muynak", nights: 1, placeIds: ["uz-muynak-cementerio-barcos"], legFromPrevious: { mode: "tour", durationMin: 240, noCarDifficulty: "aviso", note: "vuelta del campamento a Muynak con el mismo 4x4" } },
      { cityId: "uz-nukus", nights: 0, placeIds: [], note: "de paso", legFromPrevious: { mode: "bus", durationMin: 180, noCarDifficulty: "aviso", note: "marshrutka de mañana" } },
      { cityId: "uz-tashkent", nights: 2, placeIds: ["uz-tashkent-monumento-valor"], legFromPrevious: { mode: "avion", durationMin: 120, noCarDifficulty: "ok", bookAhead: true } },
    ],
    warnings: [
      "El tour del Aral es la única etapa que depende de terceros: cierra la agencia de Nukus antes de llegar.",
      "Cinco desplazamientos largos en 15 días: vale la pena, pero no es un viaje de tumbarse.",
    ],
    meta: m,
  },
];
