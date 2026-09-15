import type { CircoSub, NoCarLight, Tag, Verdict } from "@/lib/constants";
import type { CountrySummary, Range } from "@/lib/schema";

/** Una fila del desglose "¿por qué N?" */
export interface Contribution {
  key: string;
  label: string;
  /** Puntos aportados */
  points: number;
  /** Máximo posible de esta fila */
  max: number;
  weight?: number;
  input?: number;
  note?: string;
}

export interface ScoreResult {
  value: number;
  breakdown: Contribution[];
}

export interface DaysResult {
  ideal: number;
  quick: Range;
  recommended: Range;
  complete: Range;
  breakdown: Contribution[];
  /** true si los rangos vienen de daysOverride del país */
  overridden: boolean;
}

export interface DukeResult extends ScoreResult {
  verdict: Verdict;
  penalties: Contribution[];
}

export interface ScoredCountry {
  id: string;
  summary: CountrySummary;
  circo: ScoreResult;
  subs: Record<CircoSub, number>;
  rail: ScoreResult;
  transport: ScoreResult;
  noCar: ScoreResult & { light: NoCarLight };
  /** 10 = carísimo */
  cost: ScoreResult & { manual: boolean };
  bcn: ScoreResult;
  /** compuesto 0.7·seguridad + 0.3·solo */
  safety: ScoreResult;
  safetyRaw: number;
  solo: number;
  /** 10 = muy difícil */
  language: ScoreResult;
  digital: ScoreResult;
  stability: number;
  season: ScoreResult;
  days: DaysResult;
  duke: DukeResult;
  tags: Tag[];
}
