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
  { id: "ee", name: "Estonia", flag: "🇪🇪", why: "La prisión de Patarei, la cantera sumergida de Rummu, bases soviéticas en Paldiski y un Tallin medieval y digital. Todo a tiro de bus.", hooks: ["soviet", "abandoned", "dark"] },
  { id: "lv", name: "Letonia", flag: "🇱🇻", why: "Karosta y su cárcel donde puedes dormir, una base de radar soviética, Riga modernista y bosques con leyendas.", hooks: ["soviet", "dark", "folklore"] },
  { id: "lt", name: "Lituania", flag: "🇱🇹", why: "La Colina de las Cruces, Grūtas Park (estatuas soviéticas en un parque), un silo nuclear en Plokštinė y el museo del KGB.", hooks: ["soviet", "occult", "dark"] },
];
