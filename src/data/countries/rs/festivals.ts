import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-15", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "rs-djurdjevdan",
    name: "Đurđevdan, el San Jorge de los romaníes",
    city: "Belgrado, Niš y los barrios romaníes",
    regionName: "Serbia",
    coords: [43.3209, 21.8958],
    month: 5,
    dateApprox: "6 de mayo",
    durationDays: 1,
    category: "folklore",
    whatHappens:
      "La fiesta de la primavera y de los romaníes de los Balcanes: cordero asado desde el amanecer, baños con flores, bandas de trompetas por las calles de los barrios (en Niš y en el Belgrado de Zemun sobre todo) y la canción «Ederlezi» de Bregović sonando en cada esquina. Es la cultura que Kusturica convirtió en cliché y que sigue viva sin él.",
    scores: { rareza: 7, espectacularidad: 7, facilidadAcceso: 7, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; hay que dejarse llevar por el ruido de las trompetas",
    links: [WIKI("https://es.wikipedia.org/wiki/%C4%90ur%C4%91evdan")],
    meta: f(),
  },
  {
    id: "rs-exit",
    name: "Exit",
    city: "Novi Sad (Petrovaradin)",
    regionName: "Voivodina",
    coords: [45.2528, 19.8617],
    month: 7,
    dateApprox: "primer o segundo fin de semana de julio",
    durationDays: 4,
    category: "festival",
    whatHappens:
      "Nació en 2000 como protesta estudiantil contra Milošević y se convirtió en el festival de música más grande del sureste de Europa, con escenarios dentro de la fortaleza de Petrovaradin y el famoso Dance Arena en un foso de las murallas hasta el amanecer. 200.000 personas en cuatro días, camping en la orilla del Danubio y Novi Sad a 36 minutos de Belgrado en tren.",
    scores: { rareza: 5, espectacularidad: 9, facilidadAcceso: 9, nivelTurismo: 8 },
    planTripAround: false,
    needsBooking: "Abonos con meses; camping o Belgrado como base con el Soko",
    links: [WIKI("https://es.wikipedia.org/wiki/Exit_(festival)")],
    meta: f(),
  },
  {
    id: "rs-guca",
    name: "Guča, el festival de trompetas",
    city: "Guča",
    regionName: "Dragačevo",
    coords: [43.7758, 20.2286],
    month: 8,
    dateApprox: "primera semana de agosto (sábado a domingo, a veces empezando en julio)",
    durationDays: 5,
    category: "folklore",
    whatHappens:
      "Un pueblo de 2.000 habitantes que recibe a medio millón de personas para escuchar bandas de trompetas balcánicas compitiendo por la Trompeta de Oro: música a todo volumen 24 horas, cerdo asado en cada calle, rakia, billetes pegados en la frente de los músicos y un caos feliz. Es la fiesta más bruta y más serbia que hay, y se llega en bus desde Čačak o Užice.",
    scores: { rareza: 9, espectacularidad: 10, facilidadAcceso: 5, nivelTurismo: 5 },
    planTripAround: true,
    needsBooking: "Cama en casas particulares del pueblo con meses (o tienda); buses extra desde Belgrado y Čačak esa semana",
    links: [WIKI("https://es.wikipedia.org/wiki/Festival_de_trompetas_de_Gu%C4%8Da")],
    meta: f(),
  },
  {
    id: "rs-kupusijada",
    name: "Kupusijada, la fiesta de la col",
    city: "Mrčajevci",
    regionName: "Čačak",
    coords: [43.8378, 20.4322],
    month: 9,
    dateApprox: "tercer fin de semana de septiembre",
    durationDays: 3,
    category: "folklore",
    whatHappens:
      "Un pueblo de la Šumadija donde cocinan col con carne en calderos de cobre durante 12 horas y compiten por la mejor, con bandas de trompetas, luchas de gitanos y un concurso de comer col. Es una feria agrícola que se ha convertido en la borrachera de otoño de la Serbia central, sin ningún turista extranjero.",
    scores: { rareza: 8, espectacularidad: 6, facilidadAcceso: 4, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Bus a Čačak y bus local o taxi a Mrčajevci (15 km)",
    links: [WIKI("https://en.wikipedia.org/wiki/Mr%C4%8Dajevci")],
    meta: f("Fecha fijada por el pueblo cada año", "baja"),
  },
];
