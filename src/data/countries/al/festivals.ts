import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "al-dita-e-veres",
    name: "Dita e Verës, el Día del Verano",
    city: "Elbasan (y Tirana)",
    regionName: "Elbasan",
    coords: [41.1125, 20.0822],
    month: 3,
    dateApprox: "14 de marzo",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "Una fiesta pagana ilírica de la primavera que sobrevivió a los otomanos y al comunismo: en Elbasan se hornea el ballokume (una galleta de mantequilla y maíz enorme), se salta el fuego, se llevan pulseras rojas y blancas (la verore) y la ciudad entera está en la calle. Tirana lo celebra con conciertos. Es fiesta nacional y es el gemelo albanés del Mărțișor.",
    scores: { rareza: 7, espectacularidad: 6, facilidadAcceso: 9, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; furgón a Elbasan desde Tirana, 1 h",
    links: [WIKI("https://en.wikipedia.org/wiki/Dita_e_Ver%C3%ABs")],
    meta: f(),
  },
  {
    id: "al-nevruz-bektashi",
    name: "Nevruz en el cuartel general bektashi",
    city: "Tirana",
    regionName: "Tirana",
    coords: [41.3389, 19.8578],
    month: 3,
    dateApprox: "22 de marzo",
    durationDays: 1,
    category: "occult",
    whatHappens:
      "La orden sufí bektashi, expulsada de Turquía por Atatürk en 1925, tiene su sede mundial en Tirana (y desde 2024 el gobierno le prometió un microestado tipo Vaticano dentro de la ciudad): en el año nuevo persa, el Dedebaba recibe a miles de fieles en el complejo con cúpula, se reparte comida, se bendice y se ve un islam heterodoxo que bebe raki y venera a Alí. Fiesta nacional también.",
    scores: { rareza: 9, espectacularidad: 6, facilidadAcceso: 10, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; bus urbano al Kryegjyshata, al este de Tirana",
    links: [WIKI("https://es.wikipedia.org/wiki/Bektashismo")],
    meta: f(),
  },
  {
    id: "al-kala-festival",
    name: "Kala Festival",
    city: "Dhërmi",
    regionName: "Vlorë",
    coords: [40.15, 19.64],
    month: 6,
    dateApprox: "primera semana de junio",
    durationDays: 6,
    category: "festival",
    whatHappens:
      "Un festival de electrónica y house británico trasplantado a una playa de la Riviera albanesa: escenarios en la arena bajo el paso de Llogara, barcos a las calas, DJs hasta el amanecer y 3.000 personas en un pueblo de piedra. Es la Albania de Instagram, cara para el país y con búnkeres en la playa.",
    scores: { rareza: 4, espectacularidad: 7, facilidadAcceso: 5, nivelTurismo: 9 },
    planTripAround: false,
    needsBooking: "Abonos con meses; alojamiento en paquete",
    links: [WIKI("https://en.wikipedia.org/wiki/Dh%C3%ABrmi")],
    meta: f("Fechas y sitio cambian cada edición", "media"),
  },
  {
    id: "al-logu-i-bjeshkeve",
    name: "Logu i Bjeshkëve, el concurso de belleza de las montañas",
    city: "Lëpushë (Kelmend)",
    regionName: "Shkodër",
    coords: [42.5, 19.6],
    month: 8,
    dateApprox: "segundo domingo de agosto",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "En un prado de los Alpes albaneses, a 1.400 metros y a dos horas de pista de Shkodër, las chicas de las montañas desfilan con los trajes tradicionales de Kelmend (rayas rojas y negras, bordados de plata) para elegir a la Miss de las Montañas, con lucha, música de lahuta (el laúd de una cuerda de las epopeyas) y cordero. Es una feria de clanes del Kanun que se convirtió en fiesta y a la que llega quien puede.",
    scores: { rareza: 9, espectacularidad: 7, facilidadAcceso: 2, nivelTurismo: 2 },
    planTripAround: false,
    needsBooking: "Furgón especial desde Shkodër ese día (preguntar en los hostales) o taxi 4x4",
    links: [WIKI("https://en.wikipedia.org/wiki/Kelmend_(municipality)")],
    meta: f("Fecha y transporte se anuncian con poco margen", "baja"),
  },
];
