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
  { id: "kz", name: "Kazajistán", flag: "🇰🇿", why: "Baikonur, el polígono nuclear de Semipalátinsk, el otro lado del Aral, Astaná futurista y estepa hasta aburrir. Enorme: sin coche va a ser un circo.", hooks: ["soviet", "disaster", "wtf"] },
  { id: "ro", name: "Rumanía", flag: "🇷🇴", why: "Drácula y folclore de verdad, el Palacio del Parlamento, el cementerio alegre de Săpânța y minas de sal como catedrales. Tren lento pero llega.", hooks: ["folklore", "brutalism", "occult"] },
  { id: "al", name: "Albania", flag: "🇦🇱", why: "173.000 búnkeres de Hoxha, Bunk'Art bajo Tirana, pueblos de piedra medio vacíos y playas sin masificar. Buses raros, pero funcionan.", hooks: ["soviet", "dark", "abandoned"] },
  { id: "ba", name: "Bosnia y Herzegovina", flag: "🇧🇦", why: "Sarajevo y el túnel de la guerra, la pista de bobsleigh abandonada de los Juegos del 84, Mostar y spomeniks yugoslavos. Historia turbia reciente.", hooks: ["war", "abandoned", "brutalism"] },
  { id: "rs", name: "Serbia", flag: "🇷🇸", why: "Spomeniks, brutalismo de Novi Beograd, edificios bombardeados por la OTAN aún en pie y la Casa de las Flores de Tito.", hooks: ["brutalism", "war", "soviet"] },
  { id: "md", name: "Moldavia", flag: "🇲🇩", why: "Transnistria: un país que no existe con la URSS intacta, más bodegas subterráneas del tamaño de una ciudad. Rareza pura.", hooks: ["soviet", "wtf", "weird"] },
  { id: "bg", name: "Bulgaria", flag: "🇧🇬", why: "Buzludzha (el platillo volante comunista), el museo del socialismo, los Kukeri (demonios de invierno) y ruinas tracias. Barato y raro.", hooks: ["brutalism", "folklore", "abandoned"] },
  { id: "ee", name: "Estonia", flag: "🇪🇪", why: "La prisión de Patarei, la cantera sumergida de Rummu, bases soviéticas en Paldiski y un Tallin medieval y digital. Todo a tiro de bus.", hooks: ["soviet", "abandoned", "dark"] },
  { id: "lv", name: "Letonia", flag: "🇱🇻", why: "Karosta y su cárcel donde puedes dormir, una base de radar soviética, Riga modernista y bosques con leyendas.", hooks: ["soviet", "dark", "folklore"] },
  { id: "lt", name: "Lituania", flag: "🇱🇹", why: "La Colina de las Cruces, Grūtas Park (estatuas soviéticas en un parque), un silo nuclear en Plokštinė y el museo del KGB.", hooks: ["soviet", "occult", "dark"] },
  { id: "mn", name: "Mongolia", flag: "🇲🇳", why: "Ulán Bator brutalista, estepa infinita, gers, chamanes y el Naadam. Fuera de la capital, sin coche vas a sufrir de verdad.", hooks: ["nature", "folklore", "wtf"] },
  { id: "cn", name: "China", flag: "🇨🇳", why: "Alta velocidad a todas partes, ciudades fantasma, Chongqing vertical y 798. Los bloqueos digitales convierten el móvil en un pisapapeles: ojo.", hooks: ["infrastructure", "abandoned", "wtf"] },
];
