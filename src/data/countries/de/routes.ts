import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-17", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "de-10d-la-rda-con-el-deutschlandticket",
    title: "ALEMANIA DEL ESTE — 10 DÍAS: la RDA, los soviéticos y los nazis, todo con el Deutschlandticket",
    days: 10,
    season: "de abril a octubre (Beelitz, Wünsdorf, Ferropolis y Prora con horario largo)",
    summary:
      "Berlín como base para Teufelsberg, la Stasi, Tempelhof, Beelitz y Wünsdorf en cercanías, Eisenhüttenstadt en regional, y luego Prora en Rügen, Leipzig con la Esquina Redonda, Ferropolis, Chemnitz con la cabeza de Marx y Buchenwald desde Weimar. Con el DNI, un billete mensual de 63 € para todo lo regional, y Vueling tres veces al día.",
    stops: [
      {
        cityId: "de-berlin",
        nights: 4,
        placeIds: ["de-teufelsberg", "de-stasi-lichtenberg-hohenschoenhausen", "de-tempelhof", "de-beelitz-heilstaetten", "de-wuensdorf", "de-spreepark"],
        note: "Beelitz y Wünsdorf en cercanías, un día cada uno o los dos en uno largo",
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, price: "40-150 €", note: "BCN → Berlín con Vueling, Ryanair o easyJet (2 h 30); FEX o S-Bahn al centro, 30 min, con el Deutschlandticket" },
      },
      {
        cityId: "de-eisenhuettenstadt",
        nights: 0,
        placeIds: ["de-eisenhuettenstadt"],
        note: "en el día desde Berlín, ida y vuelta en RE1",
        legFromPrevious: { mode: "tren", durationMin: 75, noCarDifficulty: "ok", price: "Deutschlandticket" },
      },
      {
        cityId: "de-binz",
        nights: 2,
        placeIds: ["de-prora"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok", price: "desde 20 € (IC) o gratis en regional (4 h)", note: "IC directo desde Berlín" },
      },
      {
        cityId: "de-leipzig",
        nights: 2,
        placeIds: ["de-leipzig-runde-ecke-voelkerschlacht", "de-ferropolis", "de-chemnitz-nischel"],
        note: "Ferropolis y Chemnitz en el día en RE",
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok", note: "IC a Berlín y ICE a Leipzig; o regional con el ticket, 6 h" },
      },
      {
        cityId: "de-weimar",
        nights: 2,
        placeIds: ["de-buchenwald"],
        note: "Buchenwald en bus 6 por la mañana; tren a Leipzig o Berlín para el vuelo (o vuelo desde Leipzig)",
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok", price: "Deutschlandticket" },
      },
    ],
    warnings: [
      "El Deutschlandticket (63 €/mes) es una suscripción: cómpralo en la app DB Navigator antes del viaje y cancélalo antes del día 10 del mes siguiente, o te cobran otro mes.",
      "Wünsdorf pide reserva por mail y paga en efectivo; Beelitz por dentro solo con visita de pago aparte de la pasarela.",
      "Los trenes alemanes ya no son puntuales: deja 20 minutos en cada cambio y no cuentes con el último de la noche.",
      "Spreepark: mira en spreepark.berlin si hay visita esa semana; si no, no vayas.",
    ],
    meta: m,
  },
  {
    id: "de-5d-berlin-este-y-sus-cercanias",
    title: "5 DÍAS: Berlín Este y sus cercanías raras",
    days: 5,
    season: "todo el año (Beelitz en invierno solo fines de semana)",
    summary: "La escapada: Teufelsberg, la Stasi con la prisión, Tempelhof, y dos cercanías de 45 minutos, el sanatorio de Beelitz y la ciudad soviética de Wünsdorf. Sin Puerta de Brandeburgo, si no quieres.",
    stops: [
      {
        cityId: "de-berlin",
        nights: 5,
        placeIds: ["de-teufelsberg", "de-stasi-lichtenberg-hohenschoenhausen", "de-tempelhof", "de-beelitz-heilstaetten", "de-wuensdorf"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true, note: "Vueling, Ryanair o easyJet directo" },
      },
      {
        cityId: "de-berlin",
        nights: 0,
        placeIds: ["de-spreepark"],
        note: "el último día, Spreepark si hay visita, y el aeropuerto en FEX (30 min)",
        legFromPrevious: { mode: "metro", durationMin: 20, noCarDifficulty: "ok" },
      },
    ],
    warnings: ["Para cinco días compensa el billete semanal de Berlín ABC (≈ 45 €, cubre Beelitz y Wünsdorf) más que el Deutschlandticket."],
    meta: m,
  },
  {
    id: "de-14d-el-completo-con-el-harz-o-los-goticos",
    title: "14 DÍAS: el completo, con Walpurgis en el Harz o los góticos de Leipzig",
    days: 14,
    season: "finales de abril (Walpurgis) o Pentecostés (Wave-Gotik-Treffen)",
    summary:
      "Lo anterior con calma más un festival raro: la noche de las brujas en el Harz (30 de abril, con el tren de vapor del Brocken) o el encuentro gótico de Leipzig en Pentecostés, y Dresde de paso. Toda la antigua RDA en regional con un billete de 63 €.",
    stops: [
      {
        cityId: "de-berlin",
        nights: 5,
        placeIds: ["de-teufelsberg", "de-stasi-lichtenberg-hohenschoenhausen", "de-tempelhof", "de-beelitz-heilstaetten", "de-wuensdorf", "de-spreepark", "de-eisenhuettenstadt"],
        legFromPrevious: { mode: "avion", durationMin: 150, noCarDifficulty: "ok", bookAhead: true },
      },
      {
        cityId: "de-binz",
        nights: 2,
        placeIds: ["de-prora"],
        legFromPrevious: { mode: "tren", durationMin: 180, noCarDifficulty: "ok" },
      },
      {
        cityId: "de-leipzig",
        nights: 4,
        placeIds: ["de-leipzig-runde-ecke-voelkerschlacht", "de-ferropolis", "de-chemnitz-nischel"],
        note: "cuatro noches si es el Wave-Gotik-Treffen (Pentecostés); desde aquí, Thale y el Harz para Walpurgis (2 h en RE) si es abril",
        legFromPrevious: { mode: "tren", durationMin: 300, noCarDifficulty: "ok" },
      },
      {
        cityId: "de-weimar",
        nights: 2,
        placeIds: ["de-buchenwald"],
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok" },
      },
      {
        cityId: "de-berlin",
        nights: 1,
        placeIds: [],
        note: "vuelta en ICE (2 h) o regional (4 h) para el vuelo; Dresde de paso si el cuerpo aguanta",
        legFromPrevious: { mode: "tren", durationMin: 150, noCarDifficulty: "ok" },
      },
    ],
    warnings: [
      "Walpurgis en el Harz: los pueblos se llenan y no hay tren de vuelta de madrugada; dormir allí, con meses de antelación.",
      "El Wave-Gotik-Treffen dobla los precios de Leipzig en Pentecostés y el abono se agota: mes de antelación mínimo.",
      "Catorce días en Alemania son caros en cama (40-50 € el hostal): el Deutschlandticket es lo único barato del viaje.",
    ],
    meta: m,
  },
];
