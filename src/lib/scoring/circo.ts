import { CIRCO_SUB_LABEL, CIRCO_SUBS, type CircoSub } from "@/lib/constants";
import type { PlaceStats, ScoreInputs } from "@/lib/schema";
import { clamp, round } from "@/lib/utils";
import { placeCountScore } from "./subscores";
import type { Contribution, ScoreResult } from "./types";
import { CIRCO_WEIGHTS } from "./weights";

export function circoSubs(circo: ScoreInputs["circo"], stats: PlaceStats): Record<CircoSub, number> {
  const { meta: _meta, ...manual } = circo;
  void _meta;
  return {
    ...manual,
    cantidadLugares: placeCountScore(stats).value,
  };
}

export function circoScore(subs: Record<CircoSub, number>): ScoreResult {
  const breakdown: Contribution[] = [];
  let total = 0;
  for (const k of CIRCO_SUBS) {
    const w = CIRCO_WEIGHTS[k];
    const v = subs[k];
    total += v * w;
    breakdown.push({ key: k, label: CIRCO_SUB_LABEL[k], points: round(v * w, 2), max: round(10 * w, 2), weight: w, input: v });
  }
  return { value: round(clamp(total, 0, 10)), breakdown };
}
