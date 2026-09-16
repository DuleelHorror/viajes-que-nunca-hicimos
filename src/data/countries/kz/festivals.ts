import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "kz-nauryz",
    name: "Nauryz",
    city: "Almaty, Astaná y todo el país",
    regionName: "Kazajistán",
    coords: [43.222, 76.8512],
    month: 3,
    dateApprox: "del 21 al 23 de marzo",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "El año nuevo persa convertido en fiesta nacional: yurtas montadas en las plazas de las ciudades, nauryz-kozhe (una sopa de siete ingredientes que se reparte gratis), kokpar (polo con una cabra decapitada) en los hipódromos, luchas, aitys (duelos de improvisación cantada) y todo el mundo con el traje tradicional. Estuvo prohibido por la URSS de 1926 a 1988, y por eso se celebra con ganas.",
    scores: { rareza: 7, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Ninguna; el kokpar se anuncia con pocos días en los hipódromos",
    links: [WIKI("https://es.wikipedia.org/wiki/Nouruz")],
    meta: f(),
  },
  {
    id: "kz-dia-capital",
    name: "Día de la Capital (y cumpleaños del Padre de la Nación)",
    city: "Astaná",
    regionName: "Astaná",
    coords: [51.1694, 71.4491],
    month: 7,
    dateApprox: "6 de julio",
    durationDays: 2,
    category: "wtf",
    whatHappens:
      "Fiesta nacional del traslado de la capital, que casualmente cae el día del cumpleaños de Nazarbáyev: conciertos en la esfera de cristal, fuegos artificiales sobre el Baiterek, desfiles y láseres en una ciudad construida para ese día. Desde que el clan del expresidente cayó en desgracia en 2022 le han bajado el volumen al culto, pero la fecha sigue.",
    scores: { rareza: 7, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Hoteles de Astaná más caros esa semana",
    links: [WIKI("https://en.wikipedia.org/wiki/Capital_City_Day")],
    meta: f(),
  },
  {
    id: "kz-berkutchi",
    name: "Festival de los cazadores con águila",
    city: "Nura (región de Almaty)",
    regionName: "Almaty",
    coords: [43.05, 77.6],
    month: 10,
    dateApprox: "un fin de semana de octubre o noviembre; a veces en febrero",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Los berkutchi, cazadores con águila real, compiten a caballo en la estepa: las águilas se lanzan desde una colina sobre un señuelo de zorro y se cronometra, y hay competiciones de tiro con arco a caballo y galgos tazy. Es menos famoso que el de Mongolia y más cercano, a 80 km de Almaty, y el público es sobre todo kazajo.",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 4, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Sin transporte público; taxi o tour desde Almaty. La fecha se anuncia con poco margen",
    links: [WIKI("https://en.wikipedia.org/wiki/Falconry")],
    meta: f("Fecha y sitio cambian cada año", "baja"),
  },
];
