import type { TripRoute } from "@/lib/schema";
import { meta } from "@/lib/schema";

const m = meta({ lastUpdated: "2026-09-15", volatility: "estable", confidence: "media", sources: [{ label: "Lo hemos escrito nosotros", kind: "propio" }] });

export const routes: TripRoute[] = [
  {
    id: "it-12d-sur-turbio",
    title: "ITALIA — 12 DÍAS: el sur turbio, de los monstruos a las momias",
    days: 12,
    season: "abril-mayo o septiembre-octubre",
    summary:
      "Roma como base para el Lacio raro, Orvieto y Civita, Nápoles entero (huesos, túneles y volcán) y el salto a Sicilia en el tren que se mete dentro de un barco. Cero coche salvo el taxi de Gibellina. Es el viaje.",
    stops: [
      {
        cityId: "it-roma",
        nights: 3,
        placeIds: ["it-roma-cripta-cappuccini", "it-roma-eur-palazzo-civilta", "it-roma-ostia-antica", "it-bomarzo-parco-mostri"],
        note: "un día entero para Bomarzo (tren a Orte + bus), otro para Ostia y el EUR",
        legFromPrevious: { mode: "avion", durationMin: 120, noCarDifficulty: "ok", price: "40-120 €", note: "BCN → Fiumicino o Ciampino, directo y varias veces al día" },
      },
      {
        cityId: "it-orvieto",
        nights: 1,
        placeIds: ["it-orvieto-pozzo-san-patrizio", "it-civita-bagnoregio"],
        note: "dormir arriba, en la ciudad amurallada, y bajar a Civita a primera hora",
        legFromPrevious: { mode: "tren", durationMin: 75, noCarDifficulty: "ok", price: "≈ 10 €", note: "regional desde Roma Termini; el funicular sube desde la estación" },
      },
      {
        cityId: "it-napoles",
        nights: 4,
        placeIds: ["it-napoles-fontanelle", "it-napoles-galleria-borbonica", "it-napoles-metro-toledo", "it-ercolano", "it-vesubio-crater"],
        note: "Herculano y el Vesubio caben en el mismo día si sales temprano",
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", bookAhead: true, price: "25-50 €", note: "regional a Roma y Frecciarossa a Nápoles" },
      },
      {
        cityId: "it-palermo",
        nights: 4,
        placeIds: ["it-palermo-catacombe-cappuccini", "it-gibellina-cretto-burri"],
        note: "un día para Gibellina; el resto, Palermo y su mercado",
        legFromPrevious: { mode: "tren", durationMin: 540, noCarDifficulty: "aviso", bookAhead: true, price: "≈ 50 €", note: "Intercity con traghettamento en Villa San Giovanni: el vagón entra en el ferry" },
      },
    ],
    warnings: [
      "Gibellina es la única etapa que no se resuelve con transporte público: bus a Gibellina Nuova y taxi negociado, o excursión desde Palermo. En domingo, olvídalo.",
      "Nueve horas de tren-barco hasta Palermo son parte de la gracia, pero si vas justo de días hay vuelo Roma–Palermo en 1 h 10.",
      "Los buses de Cotral a Bomarzo son pocos: mira el horario antes de coger el tren a Orte.",
    ],
    meta: m,
  },
  {
    id: "it-8d-monstruos-lazio",
    title: "8 DÍAS: los monstruos del Lacio y los huesos de Nápoles",
    days: 8,
    season: "de marzo a junio y de septiembre a noviembre",
    summary: "La versión corta y sin aviones internos: Roma, el bosque de Bomarzo, Civita colgada del barranco y cuatro noches de Nápoles, que es donde está la mandanga de verdad.",
    stops: [
      {
        cityId: "it-roma",
        nights: 3,
        placeIds: ["it-roma-cripta-cappuccini", "it-roma-eur-palazzo-civilta", "it-roma-ostia-antica", "it-bomarzo-parco-mostri"],
        legFromPrevious: { mode: "avion", durationMin: 120, noCarDifficulty: "ok", note: "directo desde BCN" },
      },
      {
        cityId: "it-orvieto",
        nights: 1,
        placeIds: ["it-orvieto-pozzo-san-patrizio", "it-civita-bagnoregio"],
        legFromPrevious: { mode: "tren", durationMin: 75, noCarDifficulty: "ok", price: "≈ 10 €" },
      },
      {
        cityId: "it-napoles",
        nights: 4,
        placeIds: ["it-napoles-fontanelle", "it-napoles-galleria-borbonica", "it-ercolano", "it-vesubio-crater", "it-napoles-metro-toledo"],
        legFromPrevious: { mode: "tren", durationMin: 200, noCarDifficulty: "ok", bookAhead: true },
      },
    ],
    warnings: ["Con 8 días Sicilia no entra: son dos días solo de ir y volver. Mejor dejarla entera para otro viaje."],
    meta: m,
  },
  {
    id: "it-15d-norte-y-sur",
    title: "15 DÍAS: la transversal, de las naranjas del Piamonte a las cuevas de Matera",
    days: 15,
    season: "mayo o septiembre-octubre",
    summary:
      "Italia de arriba abajo por la dorsal de alta velocidad: fábricas utópicas y cementerios-escultura en el norte, la presa del Vajont, el campo de San Sabba, Roma, Nápoles y final en los Sassi. Mucho tren, pero del bueno.",
    stops: [
      {
        cityId: "it-turin",
        nights: 2,
        placeIds: ["it-turin-lingotto-pista", "it-turin-museo-lombroso", "it-ivrea-olivetti"],
        note: "Ivrea es medio día en regional; si vas en carnaval, aquí es donde vuelan las naranjas",
        legFromPrevious: { mode: "avion", durationMin: 105, noCarDifficulty: "ok", note: "BCN → Turín Caselle, directo casi a diario" },
      },
      {
        cityId: "it-genova",
        nights: 1,
        placeIds: ["it-genova-staglieno"],
        legFromPrevious: { mode: "tren", durationMin: 105, noCarDifficulty: "ok", price: "≈ 15 €", note: "intercity por los Apeninos" },
      },
      {
        cityId: "it-milan",
        nights: 2,
        placeIds: ["it-milan-cimitero-monumentale", "it-consonno"],
        note: "Consonno se come media jornada larga: tren a Olginate y una hora de subida a pie",
        legFromPrevious: { mode: "tren", durationMin: 100, noCarDifficulty: "ok", price: "≈ 15 €" },
      },
      {
        cityId: "it-trieste",
        nights: 2,
        placeIds: ["it-trieste-risiera-san-sabba", "it-vajont-presa"],
        note: "el Vajont es un día completo desde aquí (tren a Longarone vía Venecia y bus): si prefieres no madrugar, hazlo parando de camino",
        legFromPrevious: { mode: "tren", durationMin: 255, noCarDifficulty: "ok", bookAhead: true, price: "25-55 €", note: "Frecciarossa Milán–Venecia–Trieste" },
      },
      {
        cityId: "it-roma",
        nights: 3,
        placeIds: ["it-roma-cripta-cappuccini", "it-roma-eur-palazzo-civilta", "it-bomarzo-parco-mostri"],
        legFromPrevious: { mode: "tren", durationMin: 330, noCarDifficulty: "ok", bookAhead: true, price: "40-90 €", note: "directo o con cambio en Venecia Mestre; hay nocturno si prefieres dormir viajando" },
      },
      {
        cityId: "it-napoles",
        nights: 3,
        placeIds: ["it-napoles-fontanelle", "it-napoles-galleria-borbonica", "it-ercolano"],
        legFromPrevious: { mode: "tren", durationMin: 70, noCarDifficulty: "ok", bookAhead: true, price: "20-45 €", note: "Frecciarossa, uno cada media hora" },
      },
      {
        cityId: "it-matera",
        nights: 2,
        placeIds: ["it-matera-sassi", "it-craco"],
        note: "dormir en una cueva rehabilitada es caro pero es la gracia",
        legFromPrevious: { mode: "bus", durationMin: 240, noCarDifficulty: "aviso", price: "≈ 25 €", note: "bus directo Nápoles–Matera; el tren obliga a rodear por Bari" },
      },
    ],
    warnings: [
      "Son siete bases en quince días: es un viaje de moverse, no de tumbarse. Si quieres respirar, quita Génova.",
      "Craco solo se visita con guía y sin transporte público decente desde Matera: reserva excursión o taxi con espera.",
      "La FAL de Bari a Matera se corta por obras a menudo y la sustituyen por bus. Comprueba el día antes.",
      "Volver a Barcelona desde Bari (1 h 15 de bus desde Matera) sale mejor que deshacer todo el camino hasta Roma.",
    ],
    meta: m,
  },
];
