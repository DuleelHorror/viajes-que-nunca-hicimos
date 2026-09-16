import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "sk-vychodna",
    name: "El festival folclórico de Východná",
    city: "Východná (Liptov)",
    regionName: "Liptov",
    coords: [49.05, 19.9],
    month: 7,
    dateApprox: "primer fin de semana de julio (2-5 de julio en 2026)",
    durationDays: 4,
    category: "folklore",
    whatHappens:
      "El festival de folclore más antiguo y grande de Eslovaquia (desde 1953), en un anfiteatro de madera de un pueblo bajo los Tatras: grupos de danza de cada valle con trajes bordados, fujaras (la flauta de dos metros, patrimonio UNESCO), coros, un desfile con carros y cordero asado. Es el folclore que la Checoslovaquia socialista promovió y que sobrevivió al socialismo, con la gente del pueblo en el escenario y en la grada.",
    scores: { rareza: 7, espectacularidad: 8, facilidadAcceso: 7, nivelTurismo: 2 },
    planTripAround: true,
    needsBooking: "Tren a Východná (troncal, parada regional) y cama en Liptovský Mikuláš o camping",
    links: [WIKI("https://en.wikipedia.org/wiki/V%C3%BDchodn%C3%A1_Folklore_Festival")],
    meta: f(),
  },
  {
    id: "sk-pohoda",
    name: "Pohoda",
    city: "Trenčín (aeródromo)",
    regionName: "Trenčín",
    coords: [48.865, 17.99],
    month: 7,
    dateApprox: "segundo fin de semana de julio (8-11 de julio en 2026, 30.º aniversario)",
    durationDays: 4,
    category: "festival",
    whatHappens:
      "El festival de música más querido de Europa central, en un aeródromo militar junto a un castillo: 30.000 personas, cabezas de cartel indie y electrónicos, teatro, debates, un escenario de orquesta y una fama de festival civilizado (sin peleas, con reciclaje y con niños) que nació en 1997 contra Mečiar. Es la Eslovaquia liberal de fiesta, y en 2026 cumple treinta.",
    scores: { rareza: 4, espectacularidad: 8, facilidadAcceso: 9, nivelTurismo: 5 },
    planTripAround: false,
    needsBooking: "Abonos con meses; tren a Trenčín (troncal) y lanzadera",
    links: [WIKI("https://en.wikipedia.org/wiki/Pohoda_(music_festival)")],
    meta: f(),
  },
  {
    id: "sk-salamander",
    name: "El Salamander de Banská Štiavnica",
    city: "Banská Štiavnica",
    regionName: "Banská Štiavnica",
    coords: [48.4586, 18.8931],
    month: 9,
    dateApprox: "segundo fin de semana de septiembre",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "El desfile de los mineros: cientos de personas en uniformes negros de gala del XVIII con lámparas, serpenteando por las calles en cuesta como una salamandra (el animal que, según la leyenda, mostró la plata al pastor), con las cofradías, la academia, los músicos y la ciudad entera de fiesta, feria y música en las plazas. Es la memoria de la plata hecha procesión.",
    scores: { rareza: 7, espectacularidad: 7, facilidadAcceso: 6, nivelTurismo: 3 },
    planTripAround: false,
    needsBooking: "Cama en la ciudad con semanas; trenes normales",
    links: [WIKI("https://sk.wikipedia.org/wiki/Salamander_(sprievod)")],
    meta: f("Fecha fijada por la ciudad cada año", "media"),
  },
  {
    id: "sk-navidad-bratislava",
    name: "Los mercadillos de Navidad de Bratislava",
    city: "Bratislava",
    regionName: "Bratislava",
    coords: [48.1439, 17.1097],
    month: 12,
    dateApprox: "del 27 de noviembre de 2026 al 3 de enero de 2027",
    durationDays: 38,
    category: "festival",
    whatHappens:
      "Las plazas del casco viejo (Hlavné y Hviezdoslavovo) llenas de casetas de madera con lokše (crepes de patata), cigánska (cerdo a la brasa en pan), vino caliente y medovina, de 10 a 22, sin las multitudes de Viena a una hora de tren. Con el OVNI iluminado detrás y la pirámide invertida con conciertos de Navidad.",
    scores: { rareza: 3, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 5 },
    planTripAround: false,
    needsBooking: "Ninguna",
    links: [WIKI("https://es.wikipedia.org/wiki/Bratislava")],
    meta: f(),
  },
];
