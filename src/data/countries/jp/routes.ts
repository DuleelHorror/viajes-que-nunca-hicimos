import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "jp-14d-el-oeste-turbio",
    title: "JAPÓN — 14 DÍAS: del templo de hormigón a la isla acorazado",
    days: 14,
    season: "marzo-abril o octubre-noviembre",
    summary:
      "Tokio con sus catedrales subterráneas y sus parásitos, el bosque de lava del Fuji, Kioto por la puerta de atrás, la noche en el cementerio de Kōya, Hiroshima con la isla de los conejos venenosos y final en Nagasaki para pisar Gunkanjima. Shinkansen entre medias y vuelo de vuelta a Tokio.",
    stops: [
      {
        cityId: "jp-tokio",
        nights: 4,
        placeIds: ["jp-g-cans", "jp-tokio-yasukuni-yushukan", "jp-tokio-meguro-parasitos", "jp-tokio-sengakuji", "jp-aokigahara"],
        note: "un día entero para G-Cans (reserva con semanas) y otro para Aokigahara desde Shinjuku",
        legFromPrevious: { mode: "avion", durationMin: 960, noCarDifficulty: "ok", bookAhead: true, price: "700-1.100 €", note: "BCN → Tokio con una escala (Estambul, Doha, Helsinki o Zúrich), 16-18 h de puerta a puerta; no hay directo" },
      },
      {
        cityId: "jp-kioto",
        nights: 2,
        placeIds: ["jp-kioto-adashino-nenbutsuji"],
        note: "el resto de Kioto ya lo conoces por las fotos; Adashino y Saga son la parte que no",
        legFromPrevious: { mode: "tren", durationMin: 130, noCarDifficulty: "ok", price: "≈ 85 €", note: "Nozomi cada 10 minutos" },
      },
      {
        cityId: "jp-osaka",
        nights: 2,
        placeIds: ["jp-koyasan-okunoin", "jp-osaka-torre-del-sol", "jp-osaka-shinsekai"],
        note: "una de las dos noches se duerme arriba, en un templo de Kōya",
        legFromPrevious: { mode: "tren", durationMin: 15, noCarDifficulty: "ok", price: "≈ 4 €" },
      },
      {
        cityId: "jp-hiroshima",
        nights: 2,
        placeIds: ["jp-hiroshima-cupula", "jp-okunoshima", "jp-kure-yamato"],
        legFromPrevious: { mode: "tren", durationMin: 85, noCarDifficulty: "ok", price: "≈ 65 €" },
      },
      {
        cityId: "jp-nagasaki",
        nights: 3,
        placeIds: ["jp-gunkanjima", "jp-nagasaki-hipocentro", "jp-ikeshima"],
        note: "reserva Gunkanjima para el primer día y deja otro libre por si el mar lo cancela",
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "≈ 75 €", note: "Shinkansen con relevo en Takeo-Onsen" },
      },
      {
        cityId: "jp-tokio",
        nights: 1,
        placeIds: [],
        note: "noche de aeropuerto",
        legFromPrevious: { mode: "avion", durationMin: 120, noCarDifficulty: "ok", bookAhead: true, price: "60-150 €", note: "Nagasaki → Haneda; o el Shinkansen de vuelta, 7 h" },
      },
    ],
    warnings: [
      "G-Cans y la Torre del Sol se reservan online con semanas: hazlo antes de comprar el vuelo, no después.",
      "Gunkanjima se cancela con oleaje incluso en días buenos: primera reserva el primer día y otra de respaldo.",
      "Ikeshima es opcional y de bus escaso: si Gunkanjima salió bien a la primera, ese día es para Ikeshima; si no, para repetir Gunkanjima.",
      "Con este itinerario el JR Pass no compensa: compra los Shinkansen sueltos en SmartEX.",
    ],
    meta: m,
  },
  {
    id: "jp-10d-tokio-y-el-norte",
    title: "10 DÍAS: Tokio y el norte maldito, de Fukushima a la Montaña del Miedo",
    days: 10,
    season: "julio (festival de las itako) o septiembre-octubre",
    summary:
      "La versión que nadie hace: Tokio raro, el tren que cruza la zona de exclusión de Fukushima hasta Futaba, y el Shinkansen a la punta norte para bajar al cráter de Osorezan, el infierno budista con lago turquesa y médiums. En agosto, con el Nebuta de Aomori de propina.",
    stops: [
      {
        cityId: "jp-tokio",
        nights: 4,
        placeIds: ["jp-g-cans", "jp-tokio-yasukuni-yushukan", "jp-tokio-meguro-parasitos", "jp-aokigahara", "jp-hakone-owakudani"],
        legFromPrevious: { mode: "avion", durationMin: 960, noCarDifficulty: "ok", bookAhead: true, note: "con una escala; no hay directo desde BCN" },
      },
      {
        cityId: "jp-sendai",
        nights: 2,
        placeIds: ["jp-fukushima-futaba"],
        note: "un día entero para Futaba y Tomioka en la línea Joban",
        legFromPrevious: { mode: "tren", durationMin: 95, noCarDifficulty: "ok", bookAhead: true, price: "≈ 70 €", note: "Hayabusa" },
      },
      {
        cityId: "jp-aomori",
        nights: 3,
        placeIds: ["jp-osorezan"],
        note: "Osorezan es un día entero con cuatro buses; si duermes en el templo, mejor",
        legFromPrevious: { mode: "tren", durationMin: 100, noCarDifficulty: "ok", bookAhead: true, price: "≈ 70 €", note: "Hayabusa a Shin-Aomori" },
      },
      {
        cityId: "jp-tokio",
        nights: 1,
        placeIds: ["jp-tokio-sengakuji"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, price: "≈ 110 €", note: "Hayabusa de vuelta; con el JR Pass de 7 días este viaje sí cuadra" },
      },
    ],
    warnings: [
      "Osorezan cierra de noviembre a abril y el bus desde Shimokita solo va en temporada: fuera de esas fechas, esta ruta no existe.",
      "Comprueba qué expresos Hitachi paran en Futaba: no todos lo hacen.",
      "El norte en verano es la parte de Japón sin calor de sartén; en agosto, Aomori se llena por el Nebuta.",
    ],
    meta: m,
  },
  {
    id: "jp-18d-de-osorezan-a-gunkanjima",
    title: "18 DÍAS: de punta a punta, del infierno del norte a la isla fantasma del sur",
    days: 18,
    season: "octubre: Osorezan aún abierto, sin calor en el sur",
    summary:
      "El país entero en Shinkansen, de la Montaña del Miedo a Gunkanjima: Tokio, Aomori y Osorezan, Fukushima, Kioto, Kōya, Hiroshima y Okunoshima, los infiernos de Beppu y Nagasaki. Es la lista completa y son dos semanas y media sin tocar un volante.",
    stops: [
      {
        cityId: "jp-tokio",
        nights: 4,
        placeIds: ["jp-g-cans", "jp-tokio-yasukuni-yushukan", "jp-tokio-meguro-parasitos", "jp-aokigahara", "jp-ashio-mina"],
        legFromPrevious: { mode: "avion", durationMin: 960, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "jp-aomori",
        nights: 2,
        placeIds: ["jp-osorezan"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok", bookAhead: true, note: "Hayabusa, 3 h a 320 km/h" },
      },
      {
        cityId: "jp-sendai",
        nights: 1,
        placeIds: ["jp-fukushima-futaba"],
        legFromPrevious: { mode: "tren", durationMin: 100, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "jp-kioto",
        nights: 2,
        placeIds: ["jp-kioto-adashino-nenbutsuji"],
        legFromPrevious: { mode: "tren", durationMin: 240, noCarDifficulty: "ok", bookAhead: true, note: "Hayabusa a Tokio y Nozomi a Kioto; se hace en una mañana" },
      },
      {
        cityId: "jp-osaka",
        nights: 2,
        placeIds: ["jp-koyasan-okunoin", "jp-osaka-torre-del-sol", "jp-osaka-shinsekai"],
        legFromPrevious: { mode: "tren", durationMin: 15, noCarDifficulty: "ok" },
      },
      {
        cityId: "jp-hiroshima",
        nights: 2,
        placeIds: ["jp-hiroshima-cupula", "jp-okunoshima"],
        legFromPrevious: { mode: "tren", durationMin: 85, noCarDifficulty: "ok" },
      },
      {
        cityId: "jp-beppu",
        nights: 2,
        placeIds: ["jp-beppu-jigoku"],
        note: "una tarde de infiernos y una mañana enterrado en arena caliente",
        legFromPrevious: { mode: "tren", durationMin: 130, noCarDifficulty: "ok", note: "Shinkansen a Kokura y Sonic" },
      },
      {
        cityId: "jp-nagasaki",
        nights: 3,
        placeIds: ["jp-gunkanjima", "jp-nagasaki-hipocentro"],
        note: "vuelo de vuelta desde Nagasaki vía Tokio",
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", note: "Sonic a Hakata y Kamome a Nagasaki" },
      },
    ],
    warnings: [
      "Nueve bases en dieciocho días y 3.000 km de Shinkansen: aquí sí compensa el JR Pass de 14 días (80.000 ¥) o el de 21.",
      "Osorezan en octubre es la última ventana antes de que cierre por nieve; en el sur, octubre es el mes ideal. Por eso esa fecha.",
      "Con este ritmo, Nagoro (Shikoku) y Ikeshima se quedan fuera: son dos días más cada uno y buses de tres al día.",
    ],
    meta: m,
  },
];
