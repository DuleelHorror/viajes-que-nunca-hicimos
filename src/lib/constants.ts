/**
 * constants.ts — Enums y metadatos de presentación.
 * Patrón: `const X = [...] as const` → tipo → `X_META: Record<X, {...}>`.
 * Añadir una categoría/modo/tag nuevo = editar aquí (Zod deriva de estos arrays).
 */

// ---------- Categorías de sitios circo ----------
export const PLACE_CATEGORIES = [
  "dark",
  "soviet",
  "industrial",
  "abandoned",
  "folklore",
  "weird",
  "festival",
  "occult",
  "war",
  "disaster",
  "brutalism",
  "infrastructure",
  "historical",
  "nature",
  "wtf",
] as const;
export type PlaceCategory = (typeof PLACE_CATEGORIES)[number];

export interface CategoryMeta {
  emoji: string;
  label: string;
  color: string;
  badge: string;
}

export const CATEGORY_META: Record<PlaceCategory, CategoryMeta> = {
  dark: { emoji: "☠️", label: "Historia oscura", color: "#dc2626", badge: "border-red-500/40 bg-red-600/15 text-red-200" },
  soviet: { emoji: "☢️", label: "Soviético / Guerra Fría", color: "#f59e0b", badge: "border-amber-500/40 bg-amber-600/15 text-amber-200" },
  industrial: { emoji: "🏭", label: "Industrial", color: "#94a3b8", badge: "border-steel-500/40 bg-steel-600/20 text-steel-300" },
  abandoned: { emoji: "🏚️", label: "Abandonado", color: "#a1a1aa", badge: "border-zinc-500/40 bg-zinc-600/20 text-zinc-300" },
  folklore: { emoji: "👹", label: "Folclore", color: "#a78bfa", badge: "border-violet-500/40 bg-violet-600/15 text-violet-200" },
  weird: { emoji: "🗿", label: "Raro", color: "#e879f9", badge: "border-fuchsia-500/40 bg-fuchsia-600/15 text-fuchsia-200" },
  festival: { emoji: "🔥", label: "Festival", color: "#f97316", badge: "border-orange-500/40 bg-orange-600/15 text-orange-200" },
  occult: { emoji: "🧙", label: "Ocultismo / leyendas", color: "#8b5cf6", badge: "border-purple-500/40 bg-purple-600/15 text-purple-200" },
  war: { emoji: "⚔️", label: "Guerra", color: "#b91c1c", badge: "border-red-700/50 bg-red-800/20 text-red-300" },
  disaster: { emoji: "🌋", label: "Catástrofe", color: "#ea580c", badge: "border-orange-700/50 bg-orange-800/20 text-orange-300" },
  brutalism: { emoji: "🧱", label: "Brutalismo", color: "#9ca3af", badge: "border-gray-500/40 bg-gray-600/20 text-gray-200" },
  infrastructure: { emoji: "🚇", label: "Infraestructura", color: "#22d3ee", badge: "border-cyan-500/40 bg-cyan-600/15 text-cyan-200" },
  historical: { emoji: "🏰", label: "Histórico", color: "#fbbf24", badge: "border-yellow-500/40 bg-yellow-600/15 text-yellow-200" },
  nature: { emoji: "🌲", label: "Naturaleza", color: "#a3e635", badge: "border-lime-500/40 bg-lime-600/15 text-lime-200" },
  wtf: { emoji: "🛸", label: "WTF", color: "#f472b6", badge: "border-pink-500/40 bg-pink-600/15 text-pink-200" },
};

// ---------- Modos de transporte ----------
export const TRANSPORT_MODES = [
  "tren",
  "metro",
  "tranvia",
  "bus",
  "ferry",
  "avion",
  "taxi",
  "bolt",
  "tour",
  "a-pie",
] as const;
export type TransportMode = (typeof TRANSPORT_MODES)[number];

export const MODE_META: Record<TransportMode, { emoji: string; label: string }> = {
  tren: { emoji: "🚆", label: "Tren" },
  metro: { emoji: "🚇", label: "Metro" },
  tranvia: { emoji: "🚋", label: "Tranvía" },
  bus: { emoji: "🚌", label: "Bus" },
  ferry: { emoji: "⛴️", label: "Ferry" },
  avion: { emoji: "✈️", label: "Avión" },
  taxi: { emoji: "🚕", label: "Taxi" },
  bolt: { emoji: "📱", label: "Bolt / Uber" },
  tour: { emoji: "🎟️", label: "Excursión organizada" },
  "a-pie": { emoji: "🚶", label: "A pie" },
};

// ---------- Meses / estaciones ----------
export const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;
export const MONTHS_SHORT = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"] as const;

export function monthName(m: number): string {
  return MONTHS_ES[m - 1] ?? "";
}

export const MONTH_RATINGS = ["excelente", "bueno", "normal", "malo"] as const;
export type MonthRatingValue = (typeof MONTH_RATINGS)[number];
export const MONTH_RATING_META: Record<MonthRatingValue, { label: string; color: string; points: number; badge: string }> = {
  excelente: { label: "🔥 Muy buena época", color: "#a3e635", points: 3, badge: "border-lime-500/50 bg-lime-500/15 text-lime-200" },
  bueno: { label: "👍 Buen momento", color: "#22d3ee", points: 2, badge: "border-cyan-500/50 bg-cyan-500/15 text-cyan-200" },
  normal: { label: "🤔 Se puede", color: "#eab308", points: 1, badge: "border-yellow-500/50 bg-yellow-500/15 text-yellow-200" },
  malo: { label: "💀 Mal momento", color: "#ef4444", points: 0, badge: "border-red-500/50 bg-red-500/15 text-red-200" },
};

export const SEASONS = ["primavera", "verano", "otoño", "invierno", "todo el año"] as const;
export type Season = (typeof SEASONS)[number];

// ---------- Documentación de entrada (nacionalidad española) ----------
export const ENTRY_TYPES = ["dni", "pasaporte", "eta", "evisa", "voa", "visado-embajada"] as const;
export type EntryType = (typeof ENTRY_TYPES)[number];
export const ENTRY_META: Record<EntryType, { label: string; short: string; color: string; ease: number }> = {
  dni: { label: "Con el DNI te vale", short: "DNI", color: "#a3e635", ease: 10 },
  pasaporte: { label: "Pasaporte y a volar, sin visado", short: "Pasaporte", color: "#22d3ee", ease: 8 },
  eta: { label: "Autorización online (ETA) antes de volar", short: "ETA", color: "#eab308", ease: 6 },
  evisa: { label: "eVisa online: trámite rápido", short: "eVisa", color: "#f97316", ease: 5 },
  voa: { label: "Visado a la llegada: cola y pasta", short: "VoA", color: "#f97316", ease: 4 },
  "visado-embajada": { label: "Visado en embajada: el rollo completo", short: "Visado", color: "#ef4444", ease: 1 },
};

// ---------- Veredictos ----------
export const VERDICTS = ["mucho", "si", "depende", "poco"] as const;
export type Verdict = (typeof VERDICTS)[number];
export const VERDICT_META: Record<Verdict, { emoji: string; label: string; phrase: string; color: string; glow: string }> = {
  mucho: { emoji: "🔥", label: "Mucho", phrase: "Este país es MUY tú.", color: "#a3e635", glow: "glow-lime" },
  si: { emoji: "👍", label: "Sí", phrase: "Tiene bastante sentido.", color: "#22d3ee", glow: "glow-cyan" },
  depende: { emoji: "🤔", label: "Depende", phrase: "Hay cosas muy buenas, pero hay que montarlo bien.", color: "#fbbf24", glow: "glow-amber" },
  poco: { emoji: "👎", label: "Poco", phrase: "Puedes sobrevivir sin venir.", color: "#ef4444", glow: "glow-blood" },
};

// ---------- Semáforo "sin coche" ----------
export const NO_CAR_LIGHTS = ["verde", "amarillo", "naranja", "rojo"] as const;
export type NoCarLight = (typeof NO_CAR_LIGHTS)[number];
export const LIGHT_META: Record<NoCarLight, { emoji: string; label: string; color: string }> = {
  verde: { emoji: "🟢", label: "Modo fácil sin coche", color: "#22c55e" },
  amarillo: { emoji: "🟡", label: "Se puede, con alguna aventura logística", color: "#eab308" },
  naranja: { emoji: "🟠", label: "Empieza el circo logístico", color: "#f97316" },
  rojo: { emoji: "🔴", label: "O conduces o invocas un helicóptero", color: "#ef4444" },
};

export const LEG_DIFFICULTY_META = {
  ok: { emoji: "🟢", label: "Sin dramas", color: "#22c55e" },
  aviso: { emoji: "🟡", label: "Etapa con circo: sin coche toca currárselo", color: "#eab308" },
  dificil: { emoji: "🔴", label: "Sin coche solo con tour o milagro", color: "#ef4444" },
} as const;

// ---------- Regiones ----------
export const REGIONS = [
  "europa-occidental",
  "europa-central",
  "europa-norte",
  "europa-sur",
  "balcanes",
  "baltico",
  "caucaso",
  "asia-central",
  "asia-oriental",
] as const;
export type Region = (typeof REGIONS)[number];
export const REGION_LABEL: Record<Region, string> = {
  "europa-occidental": "Europa occidental",
  "europa-central": "Europa central",
  "europa-norte": "Europa del norte",
  "europa-sur": "Europa del sur",
  balcanes: "Balcanes",
  baltico: "Báltico",
  caucaso: "Cáucaso",
  "asia-central": "Asia central",
  "asia-oriental": "Asia oriental",
};

// ---------- Sub-scores del Circo Score ----------
export const CIRCO_SUBS = [
  "rareza",
  "historia",
  "oscuridad",
  "arquitectura",
  "naturaleza",
  "folclore",
  "festivales",
  "aventura",
  "fotografia",
  "cantidadLugares",
] as const;
export type CircoSub = (typeof CIRCO_SUBS)[number];
export const CIRCO_SUB_LABEL: Record<CircoSub, string> = {
  rareza: "Rareza",
  historia: "Historia",
  oscuridad: "Oscuridad",
  arquitectura: "Arquitectura",
  naturaleza: "Naturaleza",
  folclore: "Folclore",
  festivales: "Festivales",
  aventura: "Aventura",
  fotografia: "Fotografía / vídeo",
  cantidadLugares: "Cantidad de lugares",
};
/** Etiquetas cortas para ejes de radar (evitan recortes en el SVG) */
export const CIRCO_SUB_SHORT: Record<CircoSub, string> = {
  rareza: "Rareza",
  historia: "Historia",
  oscuridad: "Oscuridad",
  arquitectura: "Arquit.",
  naturaleza: "Natura",
  folclore: "Folclore",
  festivales: "Festivales",
  aventura: "Aventura",
  fotografia: "Foto",
  cantidadLugares: "Lugares",
};

// ---------- Tags derivados (filtros) ----------
export const TAGS = [
  "barato",
  "buen-transporte",
  "sin-coche",
  "seguro",
  "sovietico",
  "brutalista",
  "oscuro",
  "raro",
  "festivales",
  "naturaleza",
  "invierno",
  "nieve",
  "verano",
  "poco-turismo",
  "muy-distinto",
  "facil-desde-bcn",
] as const;
export type Tag = (typeof TAGS)[number];
export const TAG_META: Record<Tag, { label: string; emoji: string }> = {
  barato: { label: "Barato", emoji: "💸" },
  "buen-transporte": { label: "Buen transporte", emoji: "🚆" },
  "sin-coche": { label: "Va bien sin coche", emoji: "🚫🚗" },
  seguro: { label: "Seguro", emoji: "🛡️" },
  sovietico: { label: "Reliquias soviéticas", emoji: "☢️" },
  brutalista: { label: "Brutalismo", emoji: "🧱" },
  oscuro: { label: "Historia turbia", emoji: "☠️" },
  raro: { label: "Sitios raros", emoji: "🗿" },
  festivales: { label: "Festivales locos", emoji: "🔥" },
  naturaleza: { label: "Naturaleza", emoji: "🌲" },
  invierno: { label: "Funciona en invierno", emoji: "🧊" },
  nieve: { label: "Nieve fiable", emoji: "❄️" },
  verano: { label: "Funciona en verano", emoji: "☀️" },
  "poco-turismo": { label: "Poco turista", emoji: "🫥" },
  "muy-distinto": { label: "Otro planeta", emoji: "🌍" },
  "facil-desde-bcn": { label: "A tiro de BCN", emoji: "✈️" },
};

export const DAY_FILTERS = [5, 7, 10, 15] as const;

// ---------- Paleta de series para gráficas (≤ 4 países comparados) ----------
// Validada con dataviz/validate_palette.js en modo oscuro (superficie #141517), todas las parejas:
// banda de luminosidad OK, contraste ≥ 3:1, separación normal ≥ 16; cian↔fucsia queda en banda de
// aviso deutan (ΔE 6,5) → siempre leyenda + etiquetas directas + trazo discontinuo como codificación secundaria.
export const SERIES_COLORS = ["#0891b2", "#d97706", "#c026d3", "#e11d48"] as const;
export const SERIES_DASH = ["", "", "6 4", "2 4"] as const;
/** Versión clara de cada serie para etiquetas/leyenda (texto), no para marcas */
export const SERIES_TEXT = ["#22d3ee", "#fbbf24", "#e879f9", "#fb7185"] as const;

export const BCN = { code: "BCN", name: "Barcelona-El Prat", coords: [41.297, 2.078] as [number, number] };

export const APP_TITLE = "Centro de control de los viajes que nunca hicimos";
export const APP_SHORT = "Viajes que nunca hicimos";
