import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "se-12d-estocolmo-al-artico",
    title: "SUECIA — 12 DÍAS: de las cuevas del metro a la ciudad que se muda",
    days: 12,
    season: "febrero-marzo para la aurora y el hielo; junio para la luz",
    summary:
      "Estocolmo y sus túneles, Uppsala pagana, las minas de Dalarna con noche bajo tierra si te atreves, y el nocturno de 16 horas al Ártico para ver Kiruna desmontándose, dormir en hielo y cazar auroras en Abisko. Vuelta desde Luleå en avión. Cero coches, un tren cama.",
    stops: [
      {
        cityId: "se-estocolmo",
        nights: 3,
        placeIds: ["se-estocolmo-metro-arte", "se-estocolmo-vasa", "se-estocolmo-skogskyrkogarden", "se-estocolmo-hotorget-brutalismo"],
        legFromPrevious: { mode: "avion", durationMin: 220, noCarDifficulty: "ok", price: "60-150 €", note: "BCN → Arlanda directo; el Arlanda Express es caro (30 €), el cercanías cuesta 15 y tarda 40 min" },
      },
      {
        cityId: "se-uppsala",
        nights: 1,
        placeIds: ["se-gamla-uppsala", "se-uppsala-teatro-anatomico"],
        legFromPrevious: { mode: "tren", durationMin: 40, noCarDifficulty: "ok", price: "≈ 10 €" },
      },
      {
        cityId: "se-falun",
        nights: 2,
        placeIds: ["se-sala-mina-plata", "se-falun-mina"],
        note: "Sala queda de camino: baja, visita la mina (o duerme en ella) y sigue a Falun al día siguiente",
        legFromPrevious: { mode: "tren", durationMin: 105, noCarDifficulty: "ok", price: "≈ 20 €", note: "Dalabanan con parada en Sala" },
      },
      {
        cityId: "se-kiruna",
        nights: 3,
        placeIds: ["se-kiruna-ciudad-que-se-mueve", "se-icehotel-jukkasjarvi", "se-abisko-aurora"],
        note: "una noche en Abisko si hay cielo despejado: el tren para en la puerta del parque",
        legFromPrevious: { mode: "tren", durationMin: 1080, noCarDifficulty: "ok", bookAhead: true, price: "80-200 €", note: "Falun → Estocolmo (2 h 30) y nocturno de las 18:00 a Kiruna, llegada a las 10 de la mañana" },
      },
      {
        cityId: "se-lulea",
        nights: 2,
        placeIds: ["se-boden-fortaleza", "se-gammelstad"],
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok", price: "≈ 30 €", note: "Norrtåg de día por la taiga" },
      },
      {
        cityId: "se-estocolmo",
        nights: 1,
        placeIds: ["se-ytterby-mina"],
        note: "noche de aeropuerto o una última tarde de metro",
        legFromPrevious: { mode: "avion", durationMin: 80, noCarDifficulty: "ok", bookAhead: true, price: "60-120 €", note: "Luleå → Arlanda; el nocturno de vuelta son otras 13 h" },
      },
    ],
    warnings: [
      "El nocturno a Kiruna se agota en temporada de aurora y en Midsommar: cómpralo el mismo día que el vuelo.",
      "La fortaleza de Boden solo se visita en verano; en invierno cámbiala por otra noche en Abisko.",
      "En febrero son −20 °C y cuatro horas de luz en Kiruna. No es un aviso, es la gracia, pero ve equipado.",
    ],
    meta: m,
  },
  {
    id: "se-7d-estocolmo-y-minas",
    title: "7 DÍAS: Estocolmo, los túmulos y dormir en una mina",
    days: 7,
    season: "mayo-junio o septiembre",
    summary: "Sin subir al Ártico: la capital con calma, Uppsala y sus reyes paganos, y las dos minas de Dalarna, incluida la noche a 155 metros bajo tierra. Todo a menos de tres horas de tren de Estocolmo.",
    stops: [
      {
        cityId: "se-estocolmo",
        nights: 4,
        placeIds: ["se-estocolmo-metro-arte", "se-estocolmo-vasa", "se-estocolmo-skogskyrkogarden", "se-estocolmo-hotorget-brutalismo", "se-ytterby-mina", "se-birka"],
        legFromPrevious: { mode: "avion", durationMin: 220, noCarDifficulty: "ok", note: "directo desde BCN" },
      },
      {
        cityId: "se-uppsala",
        nights: 1,
        placeIds: ["se-gamla-uppsala", "se-uppsala-teatro-anatomico"],
        legFromPrevious: { mode: "tren", durationMin: 40, noCarDifficulty: "ok" },
      },
      {
        cityId: "se-falun",
        nights: 2,
        placeIds: ["se-sala-mina-plata", "se-falun-mina"],
        note: "si duermes en la suite de Sala, esa noche cuenta aquí",
        legFromPrevious: { mode: "tren", durationMin: 105, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Birka y Ytterby son de temporada (barcos de mayo a septiembre); en invierno tienes el metro para rato."],
    meta: m,
  },
  {
    id: "se-15d-de-escania-a-laponia",
    title: "15 DÍAS: el país entero, de los megalitos del sur a la aurora",
    days: 15,
    season: "agosto (Semana Medieval) o marzo (aurora), no las dos cosas",
    summary:
      "Entrar por Copenhague, subir toda Suecia en tren: Ales stenar, la base naval de Karlskrona, el búnker aéreo de Gotemburgo, Estocolmo, el ferry a las ruinas de Visby y el nocturno al Ártico. Es el viaje de 2.000 km sin tocar un volante.",
    stops: [
      {
        cityId: "se-malmo",
        nights: 2,
        placeIds: ["se-ales-stenar"],
        note: "vuela a Copenhague y cruza el puente en tren: 35 minutos y más barato que Malmö",
        legFromPrevious: { mode: "avion", durationMin: 200, noCarDifficulty: "ok", note: "BCN → Copenhague + Öresundståg a Malmö" },
      },
      {
        cityId: "se-karlskrona",
        nights: 1,
        placeIds: ["se-karlskrona-base-naval"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok", price: "≈ 25 €" },
      },
      {
        cityId: "se-goteborg",
        nights: 2,
        placeIds: ["se-goteborg-aeroseum"],
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok", note: "vuelta a Malmö y Öresundståg por la costa oeste" },
      },
      {
        cityId: "se-estocolmo",
        nights: 3,
        placeIds: ["se-estocolmo-metro-arte", "se-estocolmo-vasa", "se-estocolmo-skogskyrkogarden", "se-norrkoping-industrial"],
        note: "Norrköping es parada de una hora si vienes por la línea del sur",
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, price: "25-110 €", note: "X2000" },
      },
      {
        cityId: "se-visby",
        nights: 2,
        placeIds: ["se-visby-ruinas", "se-faro-raukar"],
        legFromPrevious: { mode: "ferry", durationMin: 240, noCarDifficulty: "ok", bookAhead: true, price: "≈ 40 €", note: "bus a Nynäshamn y ferry, todo en un billete" },
      },
      {
        cityId: "se-kiruna",
        nights: 3,
        placeIds: ["se-kiruna-ciudad-que-se-mueve", "se-icehotel-jukkasjarvi", "se-abisko-aurora"],
        legFromPrevious: { mode: "tren", durationMin: 1200, noCarDifficulty: "ok", bookAhead: true, note: "ferry a Nynäshamn, tren a Estocolmo y nocturno a Kiruna: un día entero de viaje, pero durmiendo" },
      },
      {
        cityId: "se-lulea",
        nights: 2,
        placeIds: ["se-boden-fortaleza", "se-gammelstad"],
        note: "vuelo de vuelta desde Luleå a Estocolmo y a casa",
        legFromPrevious: { mode: "tren", durationMin: 210, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Fårö sin coche es un día largo: bus, ferry y bicicleta. Merece la pena, pero cuenta con ello.",
      "Icehotel en agosto es la versión pequeña permanente; la grande solo existe de diciembre a abril. Elige la temporada por lo que quieras ver.",
      "Siete bases y dos mil kilómetros: quita Karlskrona si quieres respirar.",
    ],
    meta: m,
  },
];
