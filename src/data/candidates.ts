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
  { id: "al", name: "Albania", flag: "🇦🇱", why: "173.000 búnkeres de Hoxha, Bunk'Art bajo Tirana, pueblos de piedra medio vacíos y playas sin masificar. Buses raros, pero funcionan.", hooks: ["soviet", "dark", "abandoned"] },
  { id: "ba", name: "Bosnia y Herzegovina", flag: "🇧🇦", why: "Sarajevo y el túnel de la guerra, la pista de bobsleigh abandonada de los Juegos del 84, Mostar y spomeniks yugoslavos. Historia turbia reciente.", hooks: ["war", "abandoned", "brutalism"] },
  { id: "md", name: "Moldavia", flag: "🇲🇩", why: "Transnistria: un país que no existe con la URSS intacta, más bodegas subterráneas del tamaño de una ciudad. Rareza pura.", hooks: ["soviet", "wtf", "weird"] },
  { id: "ee", name: "Estonia", flag: "🇪🇪", why: "La prisión de Patarei, la cantera sumergida de Rummu, bases soviéticas en Paldiski y un Tallin medieval y digital. Todo a tiro de bus.", hooks: ["soviet", "abandoned", "dark"] },
  { id: "lv", name: "Letonia", flag: "🇱🇻", why: "Karosta y su cárcel donde puedes dormir, una base de radar soviética, Riga modernista y bosques con leyendas.", hooks: ["soviet", "dark", "folklore"] },
  { id: "lt", name: "Lituania", flag: "🇱🇹", why: "La Colina de las Cruces, Grūtas Park (estatuas soviéticas en un parque), un silo nuclear en Plokštinė y el museo del KGB.", hooks: ["soviet", "occult", "dark"] },
];
