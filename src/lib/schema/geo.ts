import { z } from "zod";
import { CoordsSchema, Score10, SectionMetaSchema } from "./meta";
import { TransportModeSchema } from "./place";

export const CitySchema = z.object({
  id: z.string().regex(/^[a-z]{2,3}-[a-z0-9-]+$/),
  name: z.string().min(2),
  coords: CoordsSchema,
  isCapital: z.boolean().optional(),
  population: z.number().optional(),
  /** Transporte urbano */
  urban: z.object({
    modes: z.array(TransportModeSchema),
    score: Score10,
    ticket: z.string(),
    app: z.string().optional(),
    note: z.string().optional(),
  }),
});
export type City = z.infer<typeof CitySchema>;

export const AirportSchema = z.object({
  code: z.string().length(3),
  name: z.string(),
  cityId: z.string(),
  coords: CoordsSchema,
  international: z.boolean(),
});
export type Airport = z.infer<typeof AirportSchema>;

export const RAIL_KINDS = ["alta-velocidad", "intercity", "regional", "nocturno", "turistico"] as const;
export const RAIL_KIND_LABEL: Record<(typeof RAIL_KINDS)[number], string> = {
  "alta-velocidad": "Alta velocidad",
  intercity: "Intercity",
  regional: "Regional",
  nocturno: "Nocturno",
  turistico: "Turístico",
};

export const RailCorridorSchema = z.object({
  id: z.string(),
  name: z.string(),
  /** cityIds en orden */
  stops: z.array(z.string()).min(2),
  kind: z.enum(RAIL_KINDS),
  frequency: z.string(),
  durationNote: z.string(),
  price: z.string().optional(),
  operator: z.string(),
  booking: z.string(),
  quality: Score10,
  meta: SectionMetaSchema,
});
export type RailCorridor = z.infer<typeof RailCorridorSchema>;

/** Ruta útil no ferroviaria (bus, ferry, vuelo interno, taxi compartido) */
export const MapRouteSchema = z.object({
  id: z.string(),
  label: z.string(),
  from: z.string(),
  to: z.string(),
  mode: TransportModeSchema,
  note: z.string().optional(),
});
export type MapRoute = z.infer<typeof MapRouteSchema>;
