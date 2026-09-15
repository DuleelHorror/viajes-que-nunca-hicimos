import { z } from "zod";
import { CoordsSchema, Score10, SectionMetaSchema, SourceSchema } from "./meta";
import { PlaceCategorySchema } from "./place";

export const FestivalSchema = z.object({
  id: z.string().regex(/^[a-z]{2,3}-[a-z0-9-]+$/),
  name: z.string().min(2),
  city: z.string().min(2),
  regionName: z.string().min(2),
  coords: CoordsSchema.optional(),
  month: z.number().int().min(1).max(12),
  /** "último martes de enero", "≈ 24 de junio", "5-6 de diciembre" */
  dateApprox: z.string().min(2),
  durationDays: z.number().min(0.5),
  category: PlaceCategorySchema,
  whatHappens: z.string().min(40).max(600),
  scores: z.object({
    rareza: Score10,
    espectacularidad: Score10,
    facilidadAcceso: Score10,
    /** 10 = masificado */
    nivelTurismo: Score10,
  }),
  planTripAround: z.boolean(),
  needsBooking: z.string().optional(),
  links: z.array(SourceSchema).optional(),
  meta: SectionMetaSchema,
});
export type Festival = z.infer<typeof FestivalSchema>;
