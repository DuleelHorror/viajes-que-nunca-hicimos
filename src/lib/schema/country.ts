import { z } from "zod";
import { ENTRY_TYPES, MONTH_RATINGS, REGIONS } from "@/lib/constants";
import { CoordsSchema, ISODateSchema, Level3, Score10, sourced } from "./meta";
import { FestivalSchema } from "./festival";

export const CountryIdSchema = z.string().regex(/^[a-z]{2,3}$/);

export const FactsSchema = sourced({
  capital: z.string(),
  population: z.number().positive(),
  areaKm2: z.number().positive(),
  languages: z.array(z.string()).min(1),
  currency: z.object({ code: z.string().length(3), name: z.string(), symbol: z.string().optional() }),
  religions: z.string().optional(),
  /** "UTC+5", "UTC+1 (verano +2)" */
  timezone: z.string(),
  plugTypes: z.array(z.string()).min(1),
  drivingSide: z.enum(["derecha", "izquierda"]),
});
export type Facts = z.infer<typeof FactsSchema>;

export const TraitsSchema = z.object({
  sovietico: z.boolean(),
  brutalista: z.boolean(),
  nieveFiable: z.boolean(),
  /** 10 = culturalmente muy distinto de España */
  distanciaCultural: Score10,
  /** 10 = turismo masivo */
  turismoMasivo: Score10,
});
export type Traits = z.infer<typeof TraitsSchema>;

export const ScoreInputsSchema = z.object({
  circo: sourced({
    rareza: Score10,
    historia: Score10,
    oscuridad: Score10,
    arquitectura: Score10,
    naturaleza: Score10,
    folclore: Score10,
    festivales: Score10,
    aventura: Score10,
    fotografia: Score10,
  }),
  rail: sourced({
    calidad: Score10,
    cobertura: Score10,
    frecuencia: Score10,
    puntualidad: Score10,
    /** 10 = muy barato */
    precio: Score10,
    facilidadBilletes: Score10,
    online: Score10,
    nocturnos: Score10,
    altaVelocidad: Score10,
  }),
  bus: sourced({ cobertura: Score10, fiabilidad: Score10 }),
  urban: sourced({ media: Score10 }),
  apps: sourced({ cobertura: Score10 }),
  cost: sourced({
    /** € por día (alojamiento + comida + transporte local) */
    daily: z.object({ low: z.number().positive(), normal: z.number().positive(), comfortable: z.number().positive() }),
    override: Score10.optional(),
  }),
  flights: sourced({
    direct: z.boolean(),
    directHours: z.number().positive().optional(),
    directWeekly: z.number().min(0).optional(),
    lowCostDirect: z.boolean(),
    oneStopMinHours: z.number().positive(),
    oneStopDailyOptions: z.number().min(0),
  }),
  docs: sourced({
    entry: z.enum(ENTRY_TYPES),
    maxStayDays: z.number().int().positive(),
    passportValidityMonths: z.number().int().min(0).optional(),
    insuranceMandatory: z.boolean(),
  }),
  /** 10 = seguro */
  safety: sourced({
    delincuencia: Score10,
    robos: Score10,
    timos: Score10,
    zonasConflicto: Score10,
    terrorismo: Score10,
    transporte: Score10,
    camaraEnCalle: Score10,
    noche: Score10,
    solo: Score10,
  }),
  stability: sourced({ score: Score10 }),
  digital: sourced({
    googleMaps: Level3,
    googleTranslate: Level3,
    tarjetas: Score10,
    contactless: Score10,
    /** 10 = efectivo imprescindible */
    efectivoNecesario: Score10,
    esim: Level3,
    cobertura: Score10,
    wifi: Score10,
    bloqueos: z.array(z.string()),
  }),
  language: sourced({
    ingles: Score10,
    alfabetoDistinto: z.boolean(),
    maquinasEnIngles: Score10,
    senaleticaBilingue: Score10,
    traductorFunciona: Score10,
  }),
});
export type ScoreInputs = z.infer<typeof ScoreInputsSchema>;

export const MonthRatingSchema = z.object({
  month: z.number().int().min(1).max(12),
  rating: z.enum(MONTH_RATINGS),
  tempMin: z.number(),
  tempMax: z.number(),
  precip: z.enum(["baja", "media", "alta"]),
  snow: z.boolean(),
  daylightHours: z.number().optional(),
  crowds: z.enum(["bajo", "medio", "alto"]),
  prices: z.enum(["bajo", "medio", "alto"]),
  reasons: z.array(z.string()).min(1),
  /** Solo si el clima SUMA al viaje (nieve sobre búnkeres, niebla en ruinas…) */
  weatherAdds: z.string().optional(),
  closures: z.string().optional(),
  transport: z.string().optional(),
});
export type MonthRating = z.infer<typeof MonthRatingSchema>;

export const PlaceStatsSchema = z.object({
  total: z.number().int().min(0),
  byTier: z.object({ 1: z.number().int(), 2: z.number().int(), 3: z.number().int() }),
  byCategory: z.record(z.string(), z.number().int()),
  accesoSinCocheMedio: Score10,
  excursiones: z.number().int().min(0),
  regiones: z.number().int().min(0),
  spreadKm: z.number().min(0),
});
export type PlaceStats = z.infer<typeof PlaceStatsSchema>;

export const RangeSchema = z.tuple([z.number().int(), z.number().int()]);
export type Range = [number, number];

export const CountrySummarySchema = z.object({
  id: CountryIdSchema,
  name: z.string().min(2),
  nameLocal: z.string().optional(),
  flag: z.string().min(1),
  region: z.enum(REGIONS),
  iso: z.object({ alpha2: z.string().length(2), subdivision: z.string().optional() }),
  parentState: z.string().optional(),
  /** Frase corta para la tarjeta (≤ 90 chars) */
  tagline: z.string().max(90),
  /** "¿Por qué podría interesarme este país?" */
  whyMe: z.string().min(80).max(800),
  facts: FactsSchema,
  traits: TraitsSchema,
  inputs: ScoreInputsSchema,
  months: z.array(MonthRatingSchema).length(12),
  festivals: z.array(FestivalSchema),
  placeStats: PlaceStatsSchema,
  daysOverride: z
    .object({ quick: RangeSchema, recommended: RangeSchema, complete: RangeSchema })
    .optional(),
  fx: sourced({ rate: z.number().positive(), asOf: ISODateSchema }),
  map: z.object({ center: CoordsSchema, zoom: z.number().min(2).max(12) }),
});
export type CountrySummary = z.infer<typeof CountrySummarySchema>;
export type CountryId = string;
