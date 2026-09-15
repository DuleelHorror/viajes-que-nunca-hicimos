import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Curación propia", kind: "propio" as const };
const m = (confidence: "alta" | "media" | "baja" = "media", notes?: string) =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "uz-navruz",
    name: "Navruz",
    city: "Tashkent y todo el país",
    regionName: "Nacional",
    coords: [41.3111, 69.2797],
    month: 3,
    dateApprox: "21 de marzo",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "Año nuevo persa: sumalak (papilla de trigo germinado) cocinada toda la noche en calderos comunales, conciertos en la plaza Navoi, mesas en la calle, jinetes de kupkari en los pueblos. Festivo nacional; el país entero está de celebración.",
    scores: { rareza: 5, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: false,
    meta: m("alta"),
  },
  {
    id: "uz-kupkari",
    name: "Kupkari (buzkashi uzbeko)",
    city: "Pueblos de Samarcanda y Kashkadaria",
    regionName: "Zona rural",
    coords: [39.3, 67.0],
    month: 2,
    dateApprox: "de noviembre a marzo; fechas ligadas a bodas y a Navruz",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Cientos de jinetes se disputan a galope el cuerpo de una cabra en un descampado, entre polvo, gritos y apuestas; los premios son alfombras, ovejas o coches. No hay calendario oficial: se anuncia por el boca a boca y los hostales de Samarcanda saben dónde y cuándo.",
    scores: { rareza: 10, espectacularidad: 9, facilidadAcceso: 3, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "preguntar en hostales o agencias de Samarcanda; ir en taxi compartido",
    meta: m("media", "Sin calendario público; depende de la temporada y de bodas locales"),
  },
  {
    id: "uz-stihia",
    name: "Stihia",
    city: "Muynak",
    regionName: "Karakalpakstán",
    coords: [43.77, 59.03],
    month: 9,
    dateApprox: "un fin de semana de mayo o septiembre según edición; confirmar cada año",
    durationDays: 2,
    category: "festival",
    whatHappens:
      "Festival de música electrónica en el cementerio de barcos de Muynak: DJs sobre el antiguo fondo del Mar de Aral, instalaciones de arte y charlas sobre el desastre ecológico. Público de Tashkent y extranjeros muy curiosos; acampada junto a los barcos.",
    scores: { rareza: 10, espectacularidad: 8, facilidadAcceso: 4, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "entradas online; alojamiento en Muynak escaso: acampada o dormir en Nukus",
    meta: m("baja", "Edición y fecha varían cada año; ha habido cancelaciones. Verificar antes de planificar."),
  },
  {
    id: "uz-silk-spices",
    name: "Silk and Spices Festival",
    city: "Bujará",
    regionName: "Bujará",
    coords: [39.7747, 64.4286],
    month: 5,
    dateApprox: "finales de mayo o principios de junio",
    durationDays: 3,
    category: "festival",
    whatHappens:
      "Desfiles con trajes tradicionales, artesanos trabajando en las plazas del casco antiguo, música y danza, feria de especias y seda. Turístico pero con ambiente local real.",
    scores: { rareza: 4, espectacularidad: 6, facilidadAcceso: 9, nivelTurismo: 6 },
    planTripAround: false,
    meta: m("media"),
  },
  {
    id: "uz-sharq-taronalari",
    name: "Sharq Taronalari",
    city: "Samarcanda",
    regionName: "Samarcanda",
    coords: [39.6547, 66.9758],
    month: 8,
    dateApprox: "finales de agosto, solo años impares",
    durationDays: 5,
    category: "festival",
    whatHappens:
      "Festival internacional de música tradicional con escenario montado en el Registán iluminado; delegaciones de medio centenar de países y una ceremonia de apertura de proporciones olímpicas.",
    scores: { rareza: 4, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "solo años impares (próximo: 2027); calor extremo en agosto",
    meta: m("media"),
  },
];
