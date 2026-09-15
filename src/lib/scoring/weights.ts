/**
 * weights.ts — ÚNICA fuente de verdad de pesos y umbrales.
 * La página /metodologia y los popovers "¿por qué N?" se renderizan desde aquí.
 */
import type { CircoSub } from "@/lib/constants";

// ---------- Circo Score (0-10), Σ = 1.00 ----------
export const CIRCO_WEIGHTS: Record<CircoSub, number> = {
  oscuridad: 0.16,
  rareza: 0.16,
  historia: 0.12,
  arquitectura: 0.1,
  folclore: 0.1,
  fotografia: 0.1,
  cantidadLugares: 0.1,
  festivales: 0.08,
  aventura: 0.05,
  naturaleza: 0.03,
};

// ---------- Cantidad de lugares (computado) ----------
export const TIER_WEIGHTS = { 1: 3, 2: 1.5, 3: 0.75 } as const;
/** Puntos ponderados a partir de los cuales "cantidad de lugares" = 10 */
export const PLACE_COUNT_SATURATION = 40;

// ---------- Transporte ----------
export const RAIL_WEIGHTS = {
  cobertura: 0.25,
  frecuencia: 0.2,
  facilidadBilletes: 0.2,
  calidad: 0.15,
  puntualidad: 0.1,
  precio: 0.1,
} as const;
export const RAIL_BONUS = { nocturnos: 0.25, altaVelocidad: 0.25, threshold: 7 } as const;
export const TRANSPORT_WEIGHTS = { rail: 0.55, bus: 0.2, urban: 0.2, apps: 0.05 } as const;

// ---------- Viabilidad sin coche ----------
export const NO_CAR_WEIGHTS = { transport: 0.5, accesoLugares: 0.5 } as const;
export const NO_CAR_EXCURSION_PENALTY = { ratio: 0.4, points: 0.5 } as const;
export const NO_CAR_LIGHTS = { verde: 7.5, amarillo: 6, naranja: 4.5 } as const;

// ---------- Coste (10 = carísimo), lineal a tramos sobre € / día "normal" ----------
export const COST_CURVE: ReadonlyArray<readonly [eur: number, score: number]> = [
  [20, 0],
  [40, 1],
  [70, 3],
  [100, 5],
  [140, 7],
  [200, 9],
  [260, 10],
];

// ---------- Facilidad desde Barcelona ----------
export const BCN_DIRECT = { base: 10, freeHours: 3, perHour: 0.5, lowCostBonus: 1, weeklyBonus: 0.5, weeklyThreshold: 7 } as const;
export const BCN_ONE_STOP = { base: 5, freeHours: 8, perHour: 0.25, optionsBonus: 0.5, optionsThreshold: 3 } as const;

// ---------- Seguridad ----------
export const SAFETY_WEIGHTS = {
  delincuencia: 0.2,
  robos: 0.2,
  timos: 0.1,
  zonasConflicto: 0.15,
  terrorismo: 0.1,
  transporte: 0.1,
  camaraEnCalle: 0.1,
  noche: 0.05,
} as const;
export const SAFETY_COMPOSITE = { safety: 0.7, solo: 0.3 } as const;

// ---------- Idioma (10 = muy difícil) ----------
export const LANGUAGE_WEIGHTS = { ingles: 0.4, senaleticaBilingue: 0.2, maquinasEnIngles: 0.2, traductorFunciona: 0.2 } as const;
export const LANGUAGE_ALPHABET_PENALTY = 1;

// ---------- Facilidad digital ----------
export const DIGITAL_WEIGHTS = {
  googleMaps: 0.2,
  googleTranslate: 0.1,
  tarjetas: 0.2,
  contactless: 0.1,
  efectivo: 0.15,
  esim: 0.1,
  cobertura: 0.1,
  wifi: 0.05,
} as const;
export const DIGITAL_BLOCK_PENALTY = 0.5;

// ---------- Días ideales ----------
// Calibrado con Uzbekistán (→ 13) y Escocia (→ 12): los sitios ya cuentan como días,
// así que excursiones y regiones solo añaden el sobrecoste de desplazamiento.
export const DAYS = {
  base: 2,
  tier: { 1: 0.5, 2: 0.2, 3: 0.1 },
  travelKmBase: 200,
  travelKmPerTransportPoint: 40,
  excursion: 0.15,
  regionExtra: 0.3,
  regionFree: 3,
  festivalBonus: 0.5,
  expensivePenalty: -1,
  expensiveThreshold: 6,
  cheapBonus: 0.5,
  cheapThreshold: 3,
  min: 5,
  max: 18,
  quick: { min: 0.45, max: 0.6, floor: 3 },
  recommended: { below: 2, above: 1 },
  complete: { above: 2, factor: 1.5, cap: 21 },
} as const;

// ---------- Temporada ----------
/** Meses "buenos equivalentes" (excelente = 1, bueno = 0,5) con los que la temporada vale 10. */
export const SEASON_FULL_MONTHS = 6;

// ---------- Duke Score (0-100): suma de puntos con máximos explícitos ----------
// Recalibrado el 2026-09-15 con seis países (Uzbekistán, Escocia, Italia, Austria, Suecia, Japón).
// Con los pesos originales todo quedaba entre 71 y 78 y cinco de seis salían "Mucho": los factores de
// comodidad (BCN, idioma, móvil, estabilidad) separaban más que el circo, que es lo que más importa.
// Cambios: circo de 35 a 40 y con curva convexa (DUKE_CIRCO_EXPONENT); comodidad recortada.
export const DUKE_POINTS = {
  circo: 40,
  noCar: 15,
  cost: 9,
  transport: 8,
  safety: 7,
  bcn: 5,
  season: 5,
  language: 4,
  digital: 4,
  stability: 3,
} as const;
/** puntos de circo = máx × (circo/10)^exponente: un 9 vale bastante más que un 7, un 5 vale poco. */
export const DUKE_CIRCO_EXPONENT = 1.3;
export const DUKE_LABELS: Record<keyof typeof DUKE_POINTS, string> = {
  circo: "Circo Score",
  noCar: "Viabilidad sin coche",
  cost: "Coste (invertido)",
  transport: "Transporte público",
  safety: "Seguridad",
  bcn: "Facilidad desde Barcelona",
  season: "Temporada (meses buenos)",
  language: "Idioma (invertido)",
  digital: "Facilidad digital",
  stability: "Estabilidad política",
};
export const DUKE_PENALTIES = {
  riskZone: { points: -8, threshold: 4, label: "Zona de riesgo (estabilidad o seguridad < 4)" },
  needsCar: { points: -5, label: "🔴 Sin coche prácticamente inviable" },
} as const;
// La suma realista de un país excelente ronda 80-85 (nadie puntúa 10 en todo). Con seis países cargados
// el rango real es 71-79: "Mucho" solo desde 76 para que el veredicto discrimine.
export const DUKE_VERDICT = { mucho: 76, si: 62, depende: 48 } as const;

// ---------- Tags ----------
export const TAG_THRESHOLDS = {
  barato: 4,
  buenTransporte: 7,
  seguro: 7.5,
  oscuro: 7,
  raro: 7,
  festivales: 7,
  festivalesPlanificables: 2,
  naturaleza: 7,
  estacionMinMesesBuenos: 2,
  pocoTurismo: 4,
  muyDistinto: 7,
  facilBcn: 7,
} as const;
