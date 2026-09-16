import type { Festival } from "@/lib/schema";
import { meta } from "@/lib/schema";

const PROPIO = { label: "Lo hemos escrito nosotros", kind: "propio" as const };
const WIKI = (url: string) => ({ label: "Wikipedia", url, kind: "wiki" as const });
const f = (notes?: string, confidence: "alta" | "media" | "baja" = "media") =>
  meta({ lastUpdated: "2026-09-16", volatility: "volatil", confidence, sources: [PROPIO], notes });

export const festivals: Festival[] = [
  {
    id: "kr-boryeong-barro",
    name: "El festival del barro de Boryeong",
    city: "Boryeong (playa de Daecheon)",
    regionName: "Chungcheong del Sur",
    coords: [36.3186, 126.5122],
    month: 7,
    dateApprox: "del 24 de julio al 9 de agosto (en 2026)",
    durationDays: 17,
    category: "weird",
    whatHappens:
      "Una empresa de cosméticos de barro inventó en 1998 una fiesta para vender crema y se le fue de las manos: dos semanas de gente embarrada de pies a cabeza en piscinas de barro, toboganes, luchas, una cárcel de barro para los que se resisten, conciertos de K-pop y fuegos, con soldados americanos de permiso y coreanos de veinte años en la playa de Daecheon. Es el festival más guiri y más ridículo del país, y a 2 h de tren de Seúl.",
    scores: { rareza: 7, espectacularidad: 7, facilidadAcceso: 8, nivelTurismo: 8 },
    planTripAround: false,
    needsBooking: "Tren Mugunghwa o bus a Daecheon; cama en Boryeong con semanas o volver a Seúl",
    links: [WIKI("https://en.wikipedia.org/wiki/Boryeong_Mud_Festival")],
    meta: f(),
  },
  {
    id: "kr-andong-mascaras",
    name: "El festival de danza de máscaras de Andong",
    city: "Andong",
    regionName: "Gyeongsang del Norte",
    coords: [36.5684, 128.7294],
    month: 9,
    dateApprox: "del 24 de septiembre al 4 de octubre (en 2026, la 30.ª edición)",
    durationDays: 11,
    category: "folklore",
    whatHappens:
      "Diez días de danzas de máscaras de toda Corea y del mundo (Bután, Bali, Bolivia) en el centro de Andong y en Hahoe: la sátira de Hahoe con el monje y el carnicero, danzas de talismán, mercados de máscaras, un desfile de máscaras gigantes, y por la noche el seonyu julbul nori en el río, cuerdas de fuego colgadas del acantilado de Buyongdae con brasas cayendo al agua. El folclore coreano más serio y más raro, con la UNESCO detrás desde 2022.",
    scores: { rareza: 8, espectacularidad: 8, facilidadAcceso: 8, nivelTurismo: 5 },
    planTripAround: true,
    needsBooking: "KTX-Eum a Andong con semanas; cama en Andong con un mes",
    links: [WIKI("https://en.wikipedia.org/wiki/Andong_Mask_Dance_Festival")],
    meta: f(),
  },
  {
    id: "kr-jindo-mar-abierto",
    name: "La apertura del mar de Jindo",
    city: "Jindo",
    regionName: "Jeolla del Sur",
    coords: [34.4167, 126.3167],
    month: 4,
    dateApprox: "del 17 al 20 de abril (en 2026; sigue las mareas)",
    durationDays: 4,
    category: "weird",
    whatHappens:
      "Dos veces al año la marea baja tanto que aparece un camino de arena de 2,8 km entre la isla de Jindo y Modo, y miles de personas lo cruzan con botas de agua y antorchas cogiendo almejas y pulpos, con chamanes bailando en la orilla (la leyenda es la de una abuela, Ppong, que se quedó atrás con los tigres y rezó al dios del mar) y el mejor perro de Corea, el jindo, de mascota oficial. Es el Moisés coreano, y llegar es bus desde Gwangju y otro bus.",
    scores: { rareza: 9, espectacularidad: 7, facilidadAcceso: 4, nivelTurismo: 4 },
    planTripAround: true,
    needsBooking: "Bus Gwangju–Jindo (2 h) y bus o taxi a Hoedong; cama en Jindo con un mes; botas de agua",
    links: [WIKI("https://en.wikipedia.org/wiki/Jindo_Sea_Parting_Festival")],
    meta: f("Las fechas dependen de la marea y se anuncian cada invierno"),
  },
  {
    id: "kr-gwangju-18-mayo-aniversario",
    name: "El aniversario del 18 de Mayo",
    city: "Gwangju",
    regionName: "Gwangju",
    coords: [35.2358, 126.9397],
    month: 5,
    dateApprox: "18 de mayo",
    durationDays: 1,
    category: "historical",
    whatHappens:
      "El día nacional de memoria del levantamiento de 1980: el presidente y todos los partidos en el Cementerio Nacional, coronas, el canto de «Marcha por el amado» (que la derecha se negó a cantar durante años), y en la ciudad, marchas, exposiciones y las madres de los muertos con las fotos. Es el día en que se ve lo que Corea decidió ser, y cae en plena primavera de azaleas.",
    scores: { rareza: 6, espectacularidad: 6, facilidadAcceso: 9, nivelTurismo: 1 },
    planTripAround: false,
    needsBooking: "Ninguna; el bus 518 va lleno",
    links: [WIKI("https://es.wikipedia.org/wiki/Levantamiento_de_Gwangju")],
    meta: f(),
  },
];
