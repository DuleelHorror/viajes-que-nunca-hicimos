import { z } from "zod";

/** "YYYY-MM-DD" */
export const ISODateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Fecha ISO YYYY-MM-DD");
export type ISODate = z.infer<typeof ISODateSchema>;

export const SourceSchema = z.object({
  label: z.string().min(1),
  url: z.string().url().optional(),
  kind: z.enum(["oficial", "wiki", "prensa", "blog", "propio", "api"]),
});
export type Source = z.infer<typeof SourceSchema>;

export const CONFIDENCES = ["alta", "media", "baja"] as const;
export const VOLATILITIES = ["estable", "volatil"] as const;

/**
 * Metadatos de procedencia por SECCIÓN (no por campo).
 * - confidence "baja" → la UI muestra "dato no verificado".
 * - volatility "volatil" → caduca a 6 meses; "estable" a 24.
 */
export const SectionMetaSchema = z.object({
  sources: z.array(SourceSchema),
  lastUpdated: ISODateSchema,
  confidence: z.enum(CONFIDENCES),
  volatility: z.enum(VOLATILITIES),
  notes: z.string().optional(),
});
export type SectionMeta = z.infer<typeof SectionMetaSchema>;
export type Confidence = SectionMeta["confidence"];
export type Volatility = SectionMeta["volatility"];

/** Envuelve un shape Zod añadiendo `meta`. */
export function sourced<T extends z.ZodRawShape>(shape: T) {
  return z.object(shape).extend({ meta: SectionMetaSchema });
}

export type Sourced<T> = T & { meta: SectionMeta };

export const Score10 = z.number().min(0).max(10);
export type Score10 = number;

export const Level3 = z.union([z.literal(0), z.literal(1), z.literal(2)]);
export type Level3 = 0 | 1 | 2;

export const CoordsSchema = z.tuple([z.number().min(-90).max(90), z.number().min(-180).max(180)]);
export type Coords = [number, number];

const STALE_MONTHS: Record<Volatility, number> = { volatil: 6, estable: 24 };

export function isStale(meta: SectionMeta, today: Date = new Date()): boolean {
  const [y, m, d] = meta.lastUpdated.split("-").map(Number);
  const limit = new Date(y, m - 1 + STALE_MONTHS[meta.volatility], d);
  return limit < today;
}

/** Atajo para autoría de datos. */
export function meta(
  partial: Partial<SectionMeta> & { lastUpdated: ISODate; volatility: Volatility },
): SectionMeta {
  return {
    sources: [],
    confidence: "media",
    ...partial,
  };
}
