/**
 * brand.ts — Rutas de la marca (el cráneo del usuario, `public/brand/`).
 * Se resuelven con BASE_URL porque la app vive bajo un subdirectorio en GitHub Pages y el
 * enrutado es por hash: "./brand/..." es siempre relativo al index.html.
 */
const base = import.meta.env.BASE_URL;

export const BRAND = {
  /** Solo la calavera, recortada: barra de navegación, pie, favicon. */
  skull: `${base}brand/craneo-solo-160.webp`,
  /** Completo, con el "Apología de lo evidente" alrededor: la home. */
  full: `${base}brand/craneo-640.webp`,
  fullSmall: `${base}brand/craneo-320.webp`,
} as const;
