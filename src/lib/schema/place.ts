import { z } from "zod";
import { PLACE_CATEGORIES, SEASONS, TRANSPORT_MODES } from "@/lib/constants";
import { CoordsSchema, Score10, SectionMetaSchema, SourceSchema } from "./meta";

export const PlaceCategorySchema = z.enum(PLACE_CATEGORIES);
export const TransportModeSchema = z.enum(TRANSPORT_MODES);
export const SeasonSchema = z.enum(SEASONS);

/** Imagen SOLO con procedencia verificada (nunca inventar URLs). */
export const ImageRefSchema = z.object({
  url: z.string().url(),
  credit: z.string().min(1),
  license: z.string().min(1),
  sourcePage: z.string().url(),
  alt: z.string().optional(),
});
export type ImageRef = z.infer<typeof ImageRefSchema>;

export const TIME_NEEDED = ["1-2 h", "media jornada", "jornada", "2 días"] as const;
export const WORTH_DETOUR = ["imprescindible", "si", "si-pasas-cerca"] as const;
export type WorthDetour = (typeof WORTH_DETOUR)[number];
export const WORTH_DETOUR_META: Record<WorthDetour, { emoji: string; label: string }> = {
  imprescindible: { emoji: "🔥", label: "Justifica el viaje" },
  si: { emoji: "👍", label: "Merece el desvío" },
  "si-pasas-cerca": { emoji: "🤔", label: "Si pasas cerca" },
};

export const PlaceSchema = z.object({
  id: z.string().regex(/^[a-z]{2,3}-[a-z0-9-]+$/, "id: <pais>-<slug>"),
  countryId: z.string().min(2).max(3),
  name: z.string().min(2),
  nameLocal: z.string().optional(),
  cityId: z.string().optional(),
  regionName: z.string().min(2),
  coords: CoordsSchema,
  categories: z.array(PlaceCategorySchema).min(1),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  description: z.string().min(40),
  whyMe: z.string().min(20),
  scores: z.object({
    rareza: Score10,
    impactoVisual: Score10,
    valorHistorico: Score10,
    accesoSinCoche: Score10,
  }),
  timeNeeded: z.enum(TIME_NEEDED),
  price: z.object({
    eur: z.number().min(0).optional(),
    note: z.string().optional(),
    free: z.boolean().optional(),
  }),
  transport: z.object({
    modes: z.array(TransportModeSchema).min(1),
    howToGet: z.string().min(10),
    needsTour: z.boolean(),
    isExcursion: z.boolean(),
  }),
  bestSeason: z.array(SeasonSchema).min(1),
  worthDetour: z.enum(WORTH_DETOUR),
  image: ImageRefSchema.optional(),
  links: z.array(SourceSchema).optional(),
  meta: SectionMetaSchema,
});
export type Place = z.infer<typeof PlaceSchema>;
