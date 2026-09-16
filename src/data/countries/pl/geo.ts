import type { Airport, City, MapRoute, RailCorridor } from "@/lib/schema";
import { meta } from "@/lib/schema";

const SEAT61 = { label: "The Man in Seat 61 · Poland", url: "https://www.seat61.com/Poland.htm", kind: "blog" as const };
const PKP = { label: "PKP Intercity", url: "https://www.intercity.pl/en/", kind: "oficial" as const };
const railMeta = meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence: "alta", sources: [SEAT61, PKP], notes: "Red densa: EIP/IC rápidos entre capitales, TLK y Polregio lentos a los pueblos; todo online en intercity.pl y koleo.pl" });

export const cities: City[] = [
  {
    id: "pl-cracovia",
    name: "Cracovia",
    coords: [50.0647, 19.945],
    population: 800_000,
    urban: { modes: ["tranvia", "bus", "bolt", "a-pie"], score: 8, ticket: "tranvía 4-6 zł según tiempo, con tarjeta en la máquina del vagón", app: "Bolt / Jakdojade", note: "el tranvía 4 llega a Nowa Huta en media hora; el casco viejo y Kazimierz se andan" },
  },
  {
    id: "pl-varsovia",
    name: "Varsovia",
    coords: [52.2297, 21.0122],
    isCapital: true,
    population: 1_900_000,
    urban: { modes: ["metro", "tranvia", "bus", "bolt", "a-pie"], score: 8, ticket: "billete de 20 min 3,40 zł, 75 min 4,40 zł; dos líneas de metro", app: "Bolt / Jakdojade", note: "reconstruida de cero tras 1944; el Palacio de la Cultura en el centro de todo" },
  },
  {
    id: "pl-ketrzyn",
    name: "Kętrzyn",
    coords: [54.0764, 21.3764],
    population: 27_000,
    urban: { modes: ["bus", "taxi", "a-pie"], score: 4, ticket: "bus local a la Guarida del Lobo 4 al día (lunes a sábado), 13 min", note: "base masuriana para la Guarida del Lobo; tren desde Olsztyn (1 h) o directo desde Varsovia" },
  },
  {
    id: "pl-malkinia",
    name: "Małkinia",
    coords: [52.6975, 22.0339],
    population: 4_000,
    urban: { modes: ["a-pie", "taxi"], score: 2, ticket: "de la estación a Treblinka, 8 km: taxi o a pie", note: "la estación donde los trenes del gueto entraban marcha atrás al campo" },
  },
  {
    id: "pl-bialogard",
    name: "Białogard",
    coords: [54.0069, 15.9878],
    population: 24_000,
    urban: { modes: ["tren", "taxi", "a-pie"], score: 3, ticket: "Polregio a Podborsko, un apeadero en el bosque; bus PKS también", note: "base pomerana para el búnker nuclear de Podborsko y Borne Sulinowo" },
  },
  {
    id: "pl-legnica",
    name: "Legnica",
    coords: [51.2101, 16.1619],
    population: 100_000,
    urban: { modes: ["bus", "a-pie"], score: 5, ticket: "bus urbano 3,60 zł", note: "«la pequeña Moscú»: la mayor base soviética de Polonia hasta 1993; a 1 h de Breslavia en tren" },
  },
  {
    id: "pl-oswiecim",
    name: "Oświęcim",
    coords: [50.0343, 19.2098],
    population: 37_000,
    urban: { modes: ["bus", "a-pie"], score: 4, ticket: "lanzadera gratuita entre Auschwitz I y Birkenau cada 10-15 min", note: "bus directo desde Cracovia (1 h 30) hasta la puerta del museo" },
  },
];

export const airports: Airport[] = [
  { code: "KRK", name: "Cracovia Juan Pablo II", cityId: "pl-cracovia", coords: [50.0777, 19.7848], international: true },
  { code: "WAW", name: "Varsovia Chopin", cityId: "pl-varsovia", coords: [52.1657, 20.9671], international: true },
  { code: "WMI", name: "Varsovia Modlin", cityId: "pl-varsovia", coords: [52.4511, 20.6518], international: true },
];

export const railCorridors: RailCorridor[] = [
  {
    id: "pl-cracovia-varsovia",
    name: "Cracovia–Varsovia (EIP Pendolino)",
    stops: ["pl-cracovia", "pl-varsovia"],
    kind: "alta-velocidad",
    frequency: "cada 30-60 min",
    durationNote: "≈ 2 h 20 en el Pendolino (EIP) a 200 km/h; los IC, 2 h 45",
    price: "desde 49 zł (≈ 11 €) con antelación; 169 zł el mismo día",
    operator: "PKP Intercity",
    booking: "intercity.pl o koleo.pl con asiento; el EIP obliga a reservar",
    quality: 9,
    meta: railMeta,
  },
  {
    id: "pl-varsovia-olsztyn-ketrzyn",
    name: "Varsovia–Olsztyn–Kętrzyn (Masuria)",
    stops: ["pl-varsovia", "pl-ketrzyn"],
    kind: "intercity",
    frequency: "un IC directo al día (16:01) y varios con cambio en Olsztyn",
    durationNote: "≈ 2 h 25 a Olsztyn y 1 h 06 más a Kętrzyn (TLK); en total 4-4,5 h",
    price: "≈ 15-25 €",
    operator: "PKP Intercity / Polregio",
    booking: "intercity.pl; el tramo Olsztyn–Kętrzyn también en koleo.pl",
    quality: 6,
    meta: railMeta,
  },
  {
    id: "pl-varsovia-malkinia",
    name: "Varsovia–Małkinia (Treblinka)",
    stops: ["pl-varsovia", "pl-malkinia"],
    kind: "regional",
    frequency: "pocos al día desde Warszawa Gdańska o Wschodnia",
    durationNote: "≈ 1 h 10 por la línea de Białystok; la misma vía por la que entraban los transportes del gueto",
    price: "≈ 9 zł (2 €)",
    operator: "Koleje Mazowieckie / Polregio",
    booking: "máquina o app; sin reserva. Mira la vuelta antes de ir: son pocos",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "pl-varsovia-bialogard",
    name: "Varsovia–Koszalin–Białogard (y el apeadero de Podborsko)",
    stops: ["pl-varsovia", "pl-bialogard"],
    kind: "intercity",
    frequency: "2-3 IC al día a Koszalin/Kołobrzeg con parada en Białogard; Polregio Białogard–Podborsko–Szczecinek varios al día",
    durationNote: "≈ 5 h 30 desde Varsovia; Podborsko es un apeadero en el bosque a 15 min de Białogard, y la línea sigue a Szczecinek, a 20 km de Borne Sulinowo",
    price: "≈ 15-20 € el IC; el Polregio, 5 zł",
    operator: "PKP Intercity / Polregio",
    booking: "intercity.pl y koleo.pl",
    quality: 5,
    meta: railMeta,
  },
  {
    id: "pl-cracovia-legnica",
    name: "Cracovia–Katowice–Breslavia–Legnica",
    stops: ["pl-cracovia", "pl-legnica"],
    kind: "intercity",
    frequency: "varios al día, con cambio en Breslavia o directo",
    durationNote: "≈ 4-5 h; Breslavia a 3 h 30 y Legnica a 1 h más",
    price: "≈ 15-25 €",
    operator: "PKP Intercity",
    booking: "intercity.pl",
    quality: 7,
    meta: railMeta,
  },
];

export const mapRoutes: MapRoute[] = [
  { id: "pl-bus-cracovia-auschwitz", label: "Bus Cracovia → Oświęcim (Auschwitz)", from: "pl-cracovia", to: "pl-oswiecim", mode: "bus", note: "≈ 1 h 30 desde la estación de buses (MDA), cada 30-60 min, 20 zł; para en la puerta del museo. También tren, 1 h 45" },
];
