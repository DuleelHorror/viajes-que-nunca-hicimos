import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
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
      "El año nuevo persa. Calderos gigantes de sumalak (papilla de trigo germinado) removidos toda la noche entre vecinos, conciertos en la plaza Navoi, mesas en la calle y, en los pueblos, jinetes de kupkari. Todo el país está de fiesta y te invitan a todo.",
    scores: { rareza: 5, espectacularidad: 7, facilidadAcceso: 10, nivelTurismo: 3 },
    planTripAround: false,
    meta: m("alta"),
  },
  {
    id: "uz-kupkari",
    name: "Kupkari (el buzkashi uzbeko)",
    city: "Pueblos de Samarcanda y Kashkadaria",
    regionName: "Zona rural",
    coords: [39.3, 67.0],
    month: 2,
    dateApprox: "de noviembre a marzo; las fechas dependen de bodas y de Navruz",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Cientos de jinetes se disputan a galope el cadáver de una cabra en un descampado, entre polvo, gritos y apuestas. Los premios son alfombras, ovejas o directamente un coche. No hay calendario: se sabe por el boca a boca y los hostales de Samarcanda te dicen dónde y cuándo. Circo rural absoluto.",
    scores: { rareza: 10, espectacularidad: 9, facilidadAcceso: 3, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "pregunta en el hostal o en una agencia de Samarcanda; se va en taxi compartido",
    meta: m("media", "Sin calendario público; depende de la temporada y de las bodas"),
  },
  {
    id: "uz-stihia",
    name: "Stihia",
    city: "Muynak",
    regionName: "Karakalpakstán",
    coords: [43.77, 59.03],
    month: 9,
    dateApprox: "un fin de semana de mayo o septiembre según el año; confírmalo",
    durationDays: 2,
    category: "festival",
    whatHappens:
      "Un festival de electrónica en el cementerio de barcos de Muynak. DJs pinchando sobre lo que era el fondo del Mar de Aral, arte, charlas sobre el desastre y acampada entre pesqueros oxidados. Público de Tashkent y guiris muy curiosos. Si esto no es circo, nada lo es.",
    scores: { rareza: 10, espectacularidad: 8, facilidadAcceso: 4, nivelTurismo: 3 },
    planTripAround: true,
    needsBooking: "entradas online; en Muynak apenas hay camas: tienda de campaña o dormir en Nukus",
    meta: m("baja", "La fecha cambia cada año y ha habido cancelaciones. Comprobar antes de montar nada."),
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
      "Desfiles con trajes tradicionales, artesanos currando en las plazas del casco viejo, música, baile y una feria de especias y seda. Es turístico, sí, pero la gente del sitio va de verdad y el ambiente es real.",
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
    dateApprox: "finales de agosto, solo en años impares",
    durationDays: 5,
    category: "festival",
    whatHappens:
      "Festival internacional de música tradicional con el escenario montado en el Registán iluminado. Medio centenar de países y una ceremonia de apertura con pretensiones olímpicas. Lo malo: es agosto y hace un calor infernal.",
    scores: { rareza: 4, espectacularidad: 8, facilidadAcceso: 10, nivelTurismo: 6 },
    planTripAround: false,
    needsBooking: "solo años impares (el próximo, 2027); prepárate para 38 °C",
    meta: m("media"),
  },
];
