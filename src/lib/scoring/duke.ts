import type { Verdict } from "@/lib/constants";
import { clamp, round } from "@/lib/utils";
import type { Contribution, DukeResult } from "./types";
import { DUKE_CIRCO_EXPONENT, DUKE_LABELS, DUKE_PENALTIES, DUKE_POINTS, DUKE_VERDICT } from "./weights";

export interface DukeInputs {
  circo: number;
  noCar: number;
  noCarLight: "verde" | "amarillo" | "naranja" | "rojo";
  cost: number;
  transport: number;
  safety: number;
  bcn: number;
  season: number;
  language: number;
  digital: number;
  stability: number;
}

export function verdictFor(value: number): Verdict {
  if (value >= DUKE_VERDICT.mucho) return "mucho";
  if (value >= DUKE_VERDICT.si) return "si";
  if (value >= DUKE_VERDICT.depende) return "depende";
  return "poco";
}

export function dukeScore(i: DukeInputs): DukeResult {
  const parts: Array<[keyof typeof DUKE_POINTS, number, string?]> = [
    ["circo", Math.pow(i.circo / 10, DUKE_CIRCO_EXPONENT), `(${i.circo}/10)^${DUKE_CIRCO_EXPONENT}: premia el circo alto`],
    ["noCar", i.noCar / 10],
    ["cost", (10 - i.cost) / 10, `coste ${i.cost} → ${round(10 - i.cost)}`],
    ["transport", i.transport / 10],
    ["safety", i.safety / 10],
    ["bcn", i.bcn / 10],
    ["season", i.season / 10],
    ["language", (10 - i.language) / 10, `dificultad ${i.language} → ${round(10 - i.language)}`],
    ["digital", i.digital / 10],
    ["stability", i.stability / 10],
  ];
  const breakdown: Contribution[] = parts.map(([k, ratio, note]) => ({
    key: k,
    label: DUKE_LABELS[k],
    points: round(ratio * DUKE_POINTS[k], 1),
    max: DUKE_POINTS[k],
    input: round(ratio * 10),
    note,
  }));
  let total = breakdown.reduce((a, c) => a + c.points, 0);

  const penalties: Contribution[] = [];
  if (i.stability < DUKE_PENALTIES.riskZone.threshold || i.safety < DUKE_PENALTIES.riskZone.threshold) {
    penalties.push({ key: "riskZone", label: DUKE_PENALTIES.riskZone.label, points: DUKE_PENALTIES.riskZone.points, max: 0 });
  }
  if (i.noCarLight === "rojo") {
    penalties.push({ key: "needsCar", label: DUKE_PENALTIES.needsCar.label, points: DUKE_PENALTIES.needsCar.points, max: 0 });
  }
  total += penalties.reduce((a, c) => a + c.points, 0);
  const value = Math.round(clamp(total, 0, 100));
  return { value, breakdown, penalties, verdict: verdictFor(value) };
}
