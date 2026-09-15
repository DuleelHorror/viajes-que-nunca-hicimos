import type { CountrySummary } from "@/lib/schema";
import { circoScore, circoSubs } from "./circo";
import { idealDays } from "./days";
import { dukeScore } from "./duke";
import {
  bcnEase,
  costScore,
  digitalEase,
  languageDifficulty,
  noCarViability,
  railScore,
  safetyScore,
  seasonScore,
  transportScore,
} from "./subscores";
import { deriveTags } from "./tags";
import type { ScoredCountry } from "./types";

export * from "./types";
export * from "./weights";
export * from "./subscores";
export * from "./circo";
export * from "./days";
export * from "./duke";
export * from "./tags";
export * from "./placeStats";

/** Puntúa un país a partir de su summary. Pura y síncrona. */
export function scoreCountry(summary: CountrySummary): ScoredCountry {
  const { inputs } = summary;
  const subs = circoSubs(inputs.circo, summary.placeStats);
  const circo = circoScore(subs);
  const rail = railScore(inputs.rail);
  const transport = transportScore(inputs, rail.value);
  const noCar = noCarViability(transport.value, summary.placeStats);
  const cost = costScore(inputs.cost);
  const bcn = bcnEase(inputs.flights);
  const safety = safetyScore(inputs.safety);
  const language = languageDifficulty(inputs.language);
  const digital = digitalEase(inputs.digital);
  const stability = inputs.stability.score;
  const season = seasonScore(summary.months);
  const days = idealDays(summary, transport.value, cost.value);
  const duke = dukeScore({
    circo: circo.value,
    noCar: noCar.value,
    noCarLight: noCar.light,
    cost: cost.value,
    transport: transport.value,
    safety: safety.composite.value,
    bcn: bcn.value,
    season: season.value,
    language: language.value,
    digital: digital.value,
    stability,
  });
  const partial = {
    id: summary.id,
    summary,
    circo,
    subs,
    rail,
    transport,
    noCar,
    cost,
    bcn,
    safety: safety.composite,
    safetyRaw: safety.raw.value,
    solo: inputs.safety.solo,
    language,
    digital,
    stability,
    season,
    days,
    duke,
  };
  return { ...partial, tags: deriveTags(partial) };
}
