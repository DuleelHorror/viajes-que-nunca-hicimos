import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Turkey", url: "https://www.seat61.com/Turkey.htm", kind: "blog" as const };
const TCDD = { label: "TCDD Taşımacılık", url: "https://ebilet.tcddtasimacilik.gov.tr/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "alta", sources: [SEAT61, TCDD], notes: "YHT rápidos y baratos en el oeste; el Doğu Ekspresi al este se agota en minutos; ebilet en inglés con tarjeta extranjera" });

export const cities: City[] = [
  {
    id: "tr-estambul",
    name: "Estambul",
    coords: [41.0082, 28.9784],
    population: 16_000_000,
    urban: { modes: ["metro", "tranvia", "ferry", "bus", "a-pie"], score: 8, ticket: "Istanbulkart: ≈ 0,60 € por viaje en metro, tranvía, ferry y Marmaray", app: "BiTaksi", note: "los ferries son el metro del Bósforo; el Marmaray cruza bajo el estrecho. Los YHT salen de Söğütlüçeşme (lado asiático) y Halkalı" },
  },
  {
    id: "tr-ankara",
    name: "Ankara",
    coords: [39.9334, 32.8597],
    isCapital: true,
    population: 5_800_000,
    urban: { modes: ["metro", "bus", "a-pie"], score: 7, ticket: "Ankarakart ≈ 0,50 €", note: "la capital de la República, de hormigón y ministerios; de aquí sale el Doğu Ekspresi" },
  },
  {
    id: "tr-kars",
    name: "Kars",
    coords: [40.6013, 43.0975],
    population: 90_000,
    urban: { modes: ["a-pie", "bus", "taxi"], score: 4, ticket: "minibús a Ani un diario a las 10:00 (≈ 20 TL); taxi con 3 h de espera, 150-200 TL", note: "arquitectura rusa de 1878-1918, queso, gansos y la nieve del este; base para Ani" },
  },
  {
    id: "tr-goreme",
    name: "Göreme (Capadocia)",
    coords: [38.6431, 34.8289],
    population: 2_000,
    urban: { modes: ["bus", "a-pie", "tour"], score: 5, ticket: "dolmuş entre pueblos 1 €; a Derinkuyu, bus de Nevşehir", note: "la base de Capadocia; la estación de tren más cercana es Kayseri (1 h 15 en bus)" },
  },
  {
    id: "tr-konya",
    name: "Konya",
    coords: [37.8746, 32.4932],
    population: 1_400_000,
    urban: { modes: ["tranvia", "bus", "a-pie"], score: 6, ticket: "tranvía ≈ 0,40 €", note: "la ciudad de Rumi y los derviches; parada del YHT" },
  },
  {
    id: "tr-fethiye",
    name: "Fethiye",
    coords: [36.6214, 29.1164],
    population: 170_000,
    urban: { modes: ["bus", "a-pie", "ferry"], score: 5, ticket: "dolmuş a Kayaköy cada 30 min en verano, cada hora en invierno, 20-25 min", note: "sin tren; se llega en avión a Dalaman (1 h) o en bus" },
  },
  {
    id: "tr-sanliurfa",
    name: "Şanlıurfa",
    coords: [37.1591, 38.7969],
    population: 2_200_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus 100 a Göbekli Tepe desde la parada Abide, 10:00 y 16:00 (vuelta 12:00 y 18:00)", note: "el sureste kurdo-árabe: comprobar las recomendaciones de viaje antes de ir" },
  },
];

export const airports: Airport[] = [
  { code: "IST", name: "Estambul", cityId: "tr-estambul", coords: [41.2753, 28.7519], international: true },
  { code: "SAW", name: "Estambul Sabiha Gökçen", cityId: "tr-estambul", coords: [40.8986, 29.3092], international: true },
  { code: "ESB", name: "Ankara Esenboğa", cityId: "tr-ankara", coords: [40.1281, 32.9951], international: true },
  { code: "KSY", name: "Kars Harakani", cityId: "tr-kars", coords: [40.5622, 43.115], international: false },
  { code: "DLM", name: "Dalaman (Fethiye)", cityId: "tr-fethiye", coords: [36.7131, 28.7925], international: true },
  { code: "GNY", name: "Şanlıurfa GAP", cityId: "tr-sanliurfa", coords: [37.4456, 38.8956], international: false },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "tr-yht-estambul-ankara",
    name: "YHT Estambul–Ankara",
    stops: ["tr-estambul", "tr-ankara"],
    kind: "alta-velocidad",
    frequency: "≈ 15 al día",
    durationNote: "≈ 4-4,5 h a 250 km/h desde Söğütlüçeşme o Halkalı; pasa por Eskişehir",
    price: "≈ 25 € en 2.ª (los precios en liras suben con la inflación)",
    operator: "TCDD Taşımacılık",
    booking: "ebilet.tcddtasimacilik.gov.tr en inglés, con tarjeta extranjera; asiento asignado",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "tr-yht-ankara-konya",
    name: "YHT Ankara–Konya",
    stops: ["tr-ankara", "tr-konya"],
    kind: "alta-velocidad",
    frequency: "≈ 8 al día",
    durationNote: "≈ 1 h 45 por la estepa de Anatolia; hay YHT directos Estambul–Konya de 5 h",
    price: "≈ 12 €",
    operator: "TCDD Taşımacılık",
    booking: "ebilet",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "tr-dogu-ekspresi",
    name: "Doğu Ekspresi Ankara–Kars",
    stops: ["tr-ankara", "tr-kars"],
    kind: "nocturno",
    frequency: "diario (sale de Ankara a las 17:55, llega a Kars a las 20:27 del día siguiente; vuelta 08:00 → 09:56)",
    durationNote: "≈ 26 h y 1.300 km por Sivas, Erzincan y Erzurum, con nieve de octubre a mayo; asientos, literas y coches cama. El «Turístico» (solo camas, con paradas de 3 h, de diciembre a marzo) es otro tren y otro precio",
    price: "≈ 20 € en asiento, 35 € en litera, 60 € en cama; el Turístico, desde 150 €",
    operator: "TCDD Taşımacılık",
    booking: "ebilet, a medianoche hora turca del día en que salen a la venta (15 días antes, sin verificar el plazo de 2026): se agota en minutos",
    quality: 7,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "tr-bus-konya-goreme", label: "Bus Konya → Göreme", from: "tr-konya", to: "tr-goreme", mode: "bus", note: "≈ 3 h con Metro o Kamil Koç hasta Nevşehir/Göreme, varios al día, 8 €" },
  { id: "tr-bus-ankara-goreme", label: "Bus Ankara → Göreme", from: "tr-ankara", to: "tr-goreme", mode: "bus", note: "≈ 4 h 30 desde AŞTİ, varios al día; o YHT a Konya y bus" },
  { id: "tr-vuelo-kars-estambul", label: "Vuelo Kars → Estambul", from: "tr-kars", to: "tr-estambul", mode: "avion", note: "2 h con Turkish o Pegasus; evita las 26 h de vuelta en tren" },
  { id: "tr-vuelo-estambul-dalaman", label: "Vuelo Estambul → Dalaman (Fethiye)", from: "tr-estambul", to: "tr-fethiye", mode: "avion", note: "1 h 20 con Pegasus desde Sabiha; el bus son 12 h" },
  { id: "tr-vuelo-estambul-sanliurfa", label: "Vuelo Estambul → Şanlıurfa", from: "tr-estambul", to: "tr-sanliurfa", mode: "avion", note: "2 h; sin tren útil al sureste" },
];
