import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "cn-16d-circulo-alta-velocidad",
    title: "CHINA — 16 DÍAS: el círculo en alta velocidad, de Mao a la ciudad fantasma",
    days: 16,
    season: "abril-mayo o septiembre-octubre (sin la Semana Dorada)",
    summary:
      "Pekín con el cadáver de Mao y la Muralla en ruinas, el templo colgante de Datong, la ciudad fantasma de Ordos en Mongolia Interior, Xi'an con su ejército de barro y su muralla en bici, Chongqing la vertical con la fábrica nuclear en la montaña, y Shanghái con el París y la Inglaterra falsos. Todo en trenes de 350 por hora.",
    stops: [
      {
        cityId: "cn-pekin",
        nights: 4,
        placeIds: ["cn-pekin-mausoleo-mao", "cn-pekin-798", "cn-pekin-metro-linea-2", "cn-pekin-underground-city", "cn-pekin-gran-muralla-jiankou"],
        note: "la Muralla salvaje es un día entero; la plaza de Tiananmén se reserva con pasaporte el día antes",
        legFromPrevious: { mode: "avion", durationMin: 660, noCarDifficulty: "ok", bookAhead: true, price: "500-800 €", note: "BCN → Pekín directo con Air China, 11 h, tres a la semana; con escala, Turkish o Qatar" },
      },
      {
        cityId: "cn-datong",
        nights: 2,
        placeIds: ["cn-datong-templo-colgante", "cn-datong-yungang", "cn-datong-muralla-falsa"],
        legFromPrevious: { mode: "tren", durationMin: 110, noCarDifficulty: "ok", bookAhead: true, price: "≈ 20 €", note: "alta velocidad desde Pekín Norte" },
      },
      {
        cityId: "cn-hohhot",
        nights: 2,
        placeIds: ["cn-kangbashi-ciudad-fantasma", "cn-hohhot-mausoleo-gengis"],
        note: "Kangbashi y el mausoleo en un día largo con la alta velocidad a Ordos; o noche en la ciudad fantasma",
        legFromPrevious: { mode: "tren", durationMin: 100, noCarDifficulty: "ok", bookAhead: true, price: "≈ 15 €" },
      },
      {
        cityId: "cn-xian",
        nights: 2,
        placeIds: ["cn-xian-guerreros", "cn-xian-muralla-bici"],
        legFromPrevious: { mode: "tren", durationMin: 420, noCarDifficulty: "ok", bookAhead: true, price: "≈ 60 €", note: "alta velocidad Hohhot–Xi'an con un cambio; unas 7 h" },
      },
      {
        cityId: "cn-chongqing",
        nights: 3,
        placeIds: ["cn-chongqing-monorrail-edificio", "cn-chongqing-hongya-dong", "cn-chongqing-816-nuclear", "cn-chongqing-museo-tres-gargantas"],
        note: "la fábrica 816 es un día entero desde Fuling",
        legFromPrevious: { mode: "tren", durationMin: 270, noCarDifficulty: "ok", bookAhead: true, price: "≈ 45 €" },
      },
      {
        cityId: "cn-hangzhou",
        nights: 1,
        placeIds: ["cn-tianducheng-paris"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "≈ 80 €", note: "vuelo; la alta velocidad son 8 h y sale parecido" },
      },
      {
        cityId: "cn-shanghai",
        nights: 2,
        placeIds: ["cn-shanghai-1933", "cn-shanghai-refugio-judio", "cn-shanghai-thames-town", "cn-shanghai-maglev"],
        note: "el maglev al aeropuerto el último día",
        legFromPrevious: { mode: "tren", durationMin: 50, noCarDifficulty: "ok", price: "≈ 10 €" },
      },
    ],
    warnings: [
      "Instala la VPN antes de salir de casa: dentro de China no se puede descargar. Sin ella, ni Google, ni WhatsApp, ni Gmail, ni Maps.",
      "Alipay con tu tarjeta europea, configurado antes de volar: es el metro, el taxi, el puesto de comida y la entrada de todo.",
      "Los trenes se compran en 12306 o Trip.com con el pasaporte; en los tornos, el pasaporte es el billete. Reserva con una semana en temporada.",
      "Ni Año Nuevo chino ni Semana Dorada de octubre: el país se mueve entero y tú no vas a poder.",
    ],
    meta: m,
  },
  {
    id: "cn-9d-pekin-datong-shanghai",
    title: "9 DÍAS: Pekín, el templo colgante y las ciudades europeas falsas de Shanghái",
    days: 9,
    season: "de abril a mayo o de septiembre a noviembre",
    summary: "La escapada: el cadáver de Mao, la fábrica de la RDA y la Muralla en ruinas; el templo colgado del precipicio en Datong; y Shanghái con el matadero art déco, Thames Town y el París de Hangzhou, en alta velocidad.",
    stops: [
      {
        cityId: "cn-pekin",
        nights: 3,
        placeIds: ["cn-pekin-mausoleo-mao", "cn-pekin-798", "cn-pekin-gran-muralla-jiankou"],
        legFromPrevious: { mode: "avion", durationMin: 660, noCarDifficulty: "ok", bookAhead: true, note: "directo con Air China" },
      },
      {
        cityId: "cn-datong",
        nights: 1,
        placeIds: ["cn-datong-templo-colgante", "cn-datong-yungang"],
        legFromPrevious: { mode: "tren", durationMin: 110, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "cn-pekin",
        nights: 1,
        placeIds: ["cn-pekin-metro-linea-2"],
        legFromPrevious: { mode: "tren", durationMin: 110, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "cn-shanghai",
        nights: 4,
        placeIds: ["cn-shanghai-1933", "cn-shanghai-refugio-judio", "cn-shanghai-thames-town", "cn-tianducheng-paris", "cn-shanghai-maglev"],
        note: "Tianducheng se hace en el día desde Shanghái: 45 min de alta velocidad y 45 de metro",
        legFromPrevious: { mode: "tren", durationMin: 270, noCarDifficulty: "ok", bookAhead: true, price: "≈ 75 €", note: "alta velocidad de 4 h 30, o el nocturno de literas" },
      },
    ],
    warnings: ["VPN y Alipay instalados antes de despegar. No es una recomendación, es una condición."],
    meta: m,
  },
  {
    id: "cn-11d-norte-y-transmongoliano",
    title: "11 DÍAS: el norte de China y el Transmongoliano a Mongolia",
    days: 11,
    season: "junio o septiembre",
    summary:
      "Aterrizar en Pekín en directo, hacer el norte (Datong, la ciudad fantasma de Ordos), y subir a Ulán Bator en el Transmongoliano cruzando el Gobi para seguir con la ficha de Mongolia y volver en avión desde allí. Es la manera de resolver el vuelo caro de Mongolia y de encadenar dos fichas del radar en un solo viaje.",
    stops: [
      {
        cityId: "cn-pekin",
        nights: 4,
        placeIds: ["cn-pekin-mausoleo-mao", "cn-pekin-798", "cn-pekin-metro-linea-2", "cn-pekin-gran-muralla-jiankou"],
        legFromPrevious: { mode: "avion", durationMin: 660, noCarDifficulty: "ok", bookAhead: true, note: "directo con Air China" },
      },
      {
        cityId: "cn-datong",
        nights: 2,
        placeIds: ["cn-datong-templo-colgante", "cn-datong-yungang", "cn-datong-muralla-falsa"],
        legFromPrevious: { mode: "tren", durationMin: 110, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "cn-hohhot",
        nights: 2,
        placeIds: ["cn-kangbashi-ciudad-fantasma", "cn-hohhot-mausoleo-gengis"],
        legFromPrevious: { mode: "tren", durationMin: 100, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "cn-pekin",
        nights: 2,
        placeIds: ["cn-pekin-underground-city"],
        note: "el Transmongoliano internacional sale de Pekín (K3 los miércoles y K23 los sábados; comprobar); se compra en agencia con semanas",
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "alta velocidad Hohhot–Pekín, 2 h 30" },
      },
      {
        cityId: "cn-hohhot",
        nights: 1,
        placeIds: [],
        note: "la noche en el tren: lo dibujamos hasta Mongolia Interior porque cruza a Mongolia por Erenhot de madrugada. A partir de aquí, la ruta de 12 días de la ficha de Mongolia",
        legFromPrevious: { mode: "tren", durationMin: 1800, noCarDifficulty: "ok", bookAhead: true, price: "≈ 150 €", note: "Transmongoliano Pekín–Ulán Bator, 30 h con cambio de bogies en la frontera" },
      },
    ],
    warnings: [
      "El Transmongoliano internacional se compra con semanas por agencia (CITS o el hostal) y sale uno o dos días por semana: la fecha del tren fija el viaje entero.",
      "Sin visado para China (30 días, hasta el 31/12/2026) ni para Mongolia (30 días): comprobar las dos exenciones antes de comprar.",
      "La ruta acaba en el tren a propósito: el resto del viaje está en la ficha de Mongolia.",
    ],
    meta: m,
  },
];
