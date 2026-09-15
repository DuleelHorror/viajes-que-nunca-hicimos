import type { CountrySummary } from "@/lib/schema";

/** Código de bandera para flagcdn: subdivisión (gb-sct) si existe, si no alpha2. */
export function flagCode(s: Pick<CountrySummary, "iso">): string {
  if (s.iso.subdivision) return s.iso.subdivision.toLowerCase();
  return s.iso.alpha2.toLowerCase();
}
