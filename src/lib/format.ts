/** format.ts — Formateo en español (es-ES): números, euros, duraciones, enlaces. */

const nf1 = new Intl.NumberFormat("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const nf0 = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 });

/** 9.15 → "9,2" */
export function fmtScore(v: number | null | undefined): string {
  if (v == null || Number.isNaN(v)) return "—";
  return nf1.format(v);
}

/** 91.4 → "91" */
export function fmtInt(v: number | null | undefined): string {
  if (v == null || Number.isNaN(v)) return "—";
  return nf0.format(v);
}

export function fmtEur(amount: number | null | undefined, digits = 0): string {
  if (amount == null) return "—";
  try {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: digits,
      minimumFractionDigits: digits,
    }).format(amount);
  } catch {
    return `${amount.toFixed(digits)} €`;
  }
}

/** "1 € ≈ 13.400 UZS" */
export function fmtFx(rate: number, code: string): string {
  const digits = rate >= 100 ? 0 : rate >= 10 ? 1 : 2;
  const n = new Intl.NumberFormat("es-ES", { maximumFractionDigits: digits }).format(rate);
  return `1 € ≈ ${n} ${code}`;
}

/** Minutos → "2 h 30 min" / "45 min" / "3 h". */
export function fmtDuration(minutes: number | null | undefined): string {
  if (minutes == null || minutes <= 0) return "";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
}

export function fmtHours(hours: number | null | undefined): string {
  if (hours == null) return "—";
  return fmtDuration(Math.round(hours * 60));
}

export function fmtRange([a, b]: readonly [number, number], unit = "días"): string {
  return a === b ? `${a} ${unit}` : `${a}-${b} ${unit}`;
}

export function fmtPopulation(n: number): string {
  if (n >= 1_000_000) return `${nf1.format(n / 1_000_000)} M`;
  if (n >= 1_000) return `${nf0.format(n / 1_000)} mil`;
  return nf0.format(n);
}

export function fmtArea(km2: number): string {
  return `${nf0.format(km2)} km²`;
}

export function fmtDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(y, m - 1, d, 12),
  );
}

export function googleMapsLink(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function truncate(s: string | null | undefined, max = 80): string {
  if (!s) return "";
  return s.length > max ? `${s.slice(0, max - 1)}…` : s;
}

export function pct(v: number, max: number): number {
  if (max <= 0) return 0;
  return Math.max(0, Math.min(100, (v / max) * 100));
}
