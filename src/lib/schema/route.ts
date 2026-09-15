import { z } from "zod";
import { SectionMetaSchema } from "./meta";
import { TransportModeSchema } from "./place";

export const LegSchema = z.object({
  mode: TransportModeSchema,
  durationMin: z.number().int().min(0),
  note: z.string().optional(),
  noCarDifficulty: z.enum(["ok", "aviso", "dificil"]),
  bookAhead: z.boolean().optional(),
  price: z.string().optional(),
});
export type Leg = z.infer<typeof LegSchema>;

export const RouteStopSchema = z.object({
  cityId: z.string(),
  nights: z.number().int().min(0),
  placeIds: z.array(z.string()),
  note: z.string().optional(),
  legFromPrevious: LegSchema.optional(),
});
export type RouteStop = z.infer<typeof RouteStopSchema>;

export const TripRouteSchema = z.object({
  id: z.string().regex(/^[a-z]{2,3}-[a-z0-9-]+$/),
  title: z.string().min(4),
  days: z.number().int().min(2),
  season: z.string().optional(),
  summary: z.string().min(20),
  stops: z.array(RouteStopSchema).min(2),
  warnings: z.array(z.string()).optional(),
  meta: SectionMetaSchema,
});
export type TripRoute = z.infer<typeof TripRouteSchema>;
