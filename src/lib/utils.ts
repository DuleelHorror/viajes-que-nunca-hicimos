import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

/** Redondea a N decimales (por defecto 1) evitando artefactos binarios. */
export function round(v: number, decimals = 1): number {
  const f = 10 ** decimals;
  return Math.round((v + Number.EPSILON) * f) / f;
}

/** Ruta a un asset de /public respetando el `base` de Vite (GitHub Pages). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "./";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

export function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export function groupBy<T, K extends string | number>(arr: T[], key: (t: T) => K): Record<K, T[]> {
  const out = {} as Record<K, T[]>;
  for (const item of arr) {
    const k = key(item);
    (out[k] ??= []).push(item);
  }
  return out;
}
