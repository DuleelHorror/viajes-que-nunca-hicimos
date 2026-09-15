import { z } from "zod";
import { VERDICTS } from "@/lib/constants";
import { sourced, SourceSchema } from "./meta";
import { CountrySummarySchema } from "./country";
import { PlaceSchema } from "./place";
import { TripRouteSchema } from "./route";
import { AirportSchema, CitySchema, MapRouteSchema, RailCorridorSchema } from "./geo";

export const TransportSectionSchema = sourced({
  railText: z.string().min(40),
  corridorsIntro: z.string().optional(),
  busText: z.string().min(20),
  busCompanies: z.array(z.string()),
  apps: z.array(z.object({ name: z.string(), use: z.string(), url: z.string().url().optional() })),
  noCarVerdictText: z.string().min(20),
  /** Qué queda fuera de alcance sin coche */
  hardWithoutCar: z.array(z.string()),
});

export const COST_CONCEPTS = [
  "hotel-budget",
  "hotel-mid",
  "comida-barata",
  "restaurante",
  "transporte-urbano",
  "tren-intercity",
  "cafe",
  "supermercado",
] as const;
export type CostConcept = (typeof COST_CONCEPTS)[number];
export const COST_CONCEPT_LABEL: Record<CostConcept, string> = {
  "hotel-budget": "Hotel / hostal económico (noche)",
  "hotel-mid": "Hotel medio (noche)",
  "comida-barata": "Comida económica",
  restaurante: "Restaurante (cena)",
  "transporte-urbano": "Billete transporte urbano",
  "tren-intercity": "Tren interurbano (trayecto típico)",
  cafe: "Café",
  supermercado: "Compra básica supermercado (día)",
};

export const CostSectionSchema = sourced({
  table: z.array(z.object({ concept: z.enum(COST_CONCEPTS), eur: z.number().min(0), note: z.string().optional() })),
  tips: z.array(z.string()),
});

export const FlightsSectionSchema = sourced({
  directRoutes: z.array(
    z.object({
      to: z.string(),
      airport: z.string().length(3).optional(),
      airlines: z.array(z.string()).min(1),
      lowCost: z.boolean(),
      hours: z.number().positive(),
      weekly: z.number().min(0),
      seasonal: z.boolean().optional(),
    }),
  ),
  oneStop: z.array(z.object({ via: z.string(), airlines: z.array(z.string()), totalHours: z.number().positive() })),
  tips: z.array(z.string()),
});

export const DocsSectionSchema = sourced({
  text: z.string().min(40),
  steps: z.array(z.string()).optional(),
  links: z.array(SourceSchema),
  warnings: z.array(z.string()).optional(),
});

export const SAFETY_KEYS = [
  "delincuencia",
  "robos",
  "timos",
  "zonasConflicto",
  "terrorismo",
  "transporte",
  "camaraEnCalle",
  "noche",
] as const;
export const SAFETY_KEY_LABEL: Record<(typeof SAFETY_KEYS)[number], string> = {
  delincuencia: "Criminalidad general",
  robos: "Robos y carteristas",
  timos: "Estafas",
  zonasConflicto: "Zonas conflictivas",
  terrorismo: "Terrorismo",
  transporte: "Transporte público",
  camaraEnCalle: "Caminar con cámara",
  noche: "Seguridad nocturna",
};

export const SafetySectionSchema = sourced({
  blocks: z.array(z.object({ key: z.enum(SAFETY_KEYS), level: z.enum(["bajo", "medio", "alto"]), text: z.string() })),
  conflictAreas: z.array(z.string()).optional(),
  soloText: z.string().min(20),
});

export const PoliticsSectionSchema = sourced({
  text: z.string().min(40),
  watch: z.array(z.string()).optional(),
  avoid: z.array(z.string()).optional(),
});

export const DigitalSectionSchema = sourced({
  text: z.string().min(40),
  blocked: z.array(z.string()),
  esimProviders: z.array(z.string()),
  payments: z.string().min(20),
});

export const LanguageSectionSchema = sourced({
  text: z.string().min(40),
  survivalPhrases: z.array(z.object({ es: z.string(), local: z.string(), latin: z.string().optional() })).optional(),
  machinesText: z.string().min(20),
});

export const EVENT_KINDS = ["festival", "clima", "cierre", "temporada", "festivo"] as const;
export const EVENT_KIND_META: Record<(typeof EVENT_KINDS)[number], { emoji: string; label: string }> = {
  festival: { emoji: "🔥", label: "Festival" },
  clima: { emoji: "🌦️", label: "Clima" },
  cierre: { emoji: "🚧", label: "Cierre" },
  temporada: { emoji: "📅", label: "Temporada" },
  festivo: { emoji: "🎌", label: "Festivo" },
};
export const EventEntrySchema = z.object({
  month: z.number().int().min(1).max(12),
  kind: z.enum(EVENT_KINDS),
  text: z.string().min(5),
  festivalId: z.string().optional(),
});
export type EventEntry = z.infer<typeof EventEntrySchema>;
export const EventsSectionSchema = sourced({ entries: z.array(EventEntrySchema) });

export const VerdictSectionSchema = sourced({
  pros: z.array(z.string()).min(3),
  cons: z.array(z.string()).min(2),
  /** Override manual del veredicto computado (se muestra como "criterio manual") */
  verdict: z.enum(VERDICTS).optional(),
  text: z.string().min(60),
});

export const CountryDetailSchema = z.object({
  summary: CountrySummarySchema,
  places: z.array(PlaceSchema),
  routes: z.array(TripRouteSchema),
  cities: z.array(CitySchema).min(1),
  airports: z.array(AirportSchema),
  railCorridors: z.array(RailCorridorSchema),
  mapRoutes: z.array(MapRouteSchema),
  transport: TransportSectionSchema,
  cost: CostSectionSchema,
  flights: FlightsSectionSchema,
  docs: DocsSectionSchema,
  safety: SafetySectionSchema,
  politics: PoliticsSectionSchema,
  digital: DigitalSectionSchema,
  language: LanguageSectionSchema,
  events: EventsSectionSchema,
  verdict: VerdictSectionSchema,
});
export type CountryDetail = z.infer<typeof CountryDetailSchema>;
export type TransportSection = z.infer<typeof TransportSectionSchema>;
export type CostSection = z.infer<typeof CostSectionSchema>;
export type FlightsSection = z.infer<typeof FlightsSectionSchema>;
export type DocsSection = z.infer<typeof DocsSectionSchema>;
export type SafetySection = z.infer<typeof SafetySectionSchema>;
export type PoliticsSection = z.infer<typeof PoliticsSectionSchema>;
export type DigitalSection = z.infer<typeof DigitalSectionSchema>;
export type LanguageSection = z.infer<typeof LanguageSectionSchema>;
export type EventsSection = z.infer<typeof EventsSectionSchema>;
export type VerdictSection = z.infer<typeof VerdictSectionSchema>;
