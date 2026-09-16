/**
 * candidates.ts — Países "en el radar": pintan bien para nuestro perfil pero aún no tienen ficha.
 * Cuando uno pasa a ficha completa, se quita de aquí y se añade al registro.
 */
export interface Candidate {
  id: string;
  name: string;
  flag: string;
  why: string;
  hooks: string[];
}

export const CANDIDATES: Candidate[] = [
  { id: "mk", name: "Macedonia del Norte", flag: "🇲🇰", why: "Skopje 2014: cientos de estatuas kitsch plantadas de golpe, con el programa parado y la retirada a medias; el brutalismo de Tange tras el terremoto; el Makedonium de Kruševo en bus; Ohrid. Wizz directo dos veces por semana y con el DNI.", hooks: ["wtf", "brutalism", "folklore"] },
  { id: "me", name: "Montenegro", flag: "🇲🇪", why: "El final del tren Belgrado–Bar por el viaducto de Mala Rijeka, los espomeniks de Barutana y Gorica, Podgorica brutalista y Cetinje. El hotel Fjord ya no está (demolido en 2018) y Mamula es hoy un hotel de lujo: se cuenta lo que se perdió. DNI 30 días; Vueling a Tivat solo en verano.", hooks: ["abandoned", "brutalism", "nature"] },
  { id: "kr", name: "Corea del Sur", flag: "🇰🇷", why: "La DMZ (el JSA sigue cerrado desde 2023), las ruinas del Partido norcoreano en Cheorwon, KTX Seúl–Busan en 2 h 15, Gamcheon y la estación más cercana al mar del mundo. Directo con Asiana a diario desde septiembre de 2026; K-ETA exenta hasta final de año. Caro y con el móvil obligatorio.", hooks: ["war", "infrastructure", "weird"] },
];
