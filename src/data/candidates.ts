/**
 * candidates.ts — Países "en el radar": encajan con el perfil pero aún no tienen ficha.
 * Cuando uno se convierte en ficha completa, se elimina de aquí y se añade al registro.
 */
export interface Candidate {
  id: string;
  name: string;
  flag: string;
  why: string;
  hooks: string[];
}

export const CANDIDATES: Candidate[] = [
  { id: "ge", name: "Georgia", flag: "🇬🇪", why: "Sanatorios soviéticos abandonados de Tskaltubo, Chiatura y sus teleféricos, Stalin en Gori, monasterios en acantilados.", hooks: ["soviet", "abandoned", "nature"] },
  { id: "am", name: "Armenia", flag: "🇦🇲", why: "Brutalismo de Ereván, radiotelescopio soviético abandonado, monasterios en gargantas, genocidio y memoria.", hooks: ["soviet", "brutalism", "dark"] },
  { id: "kz", name: "Kazajistán", flag: "🇰🇿", why: "Baikonur, polígono nuclear de Semipalátinsk, el lado kazajo del Aral, Astaná futurista y estepa infinita.", hooks: ["soviet", "disaster", "wtf"] },
  { id: "ro", name: "Rumanía", flag: "🇷🇴", why: "Drácula y folclore real, Palacio del Parlamento, Transfăgărășan, cementerio alegre de Săpânța, minas de sal como catedrales.", hooks: ["folklore", "brutalism", "occult"] },
  { id: "al", name: "Albania", flag: "🇦🇱", why: "173.000 búnkeres de Hoxha, Bunk'Art, ciudad fantasma de piedra, playas sin masificar.", hooks: ["soviet", "dark", "abandoned"] },
  { id: "ba", name: "Bosnia y Herzegovina", flag: "🇧🇦", why: "Sarajevo y el túnel de la guerra, pista de bobsleigh abandonada, Mostar, spomeniks yugoslavos.", hooks: ["war", "abandoned", "brutalism"] },
  { id: "rs", name: "Serbia", flag: "🇷🇸", why: "Spomeniks, brutalismo de Novi Beograd, edificios bombardeados por la OTAN, Casa de las Flores de Tito.", hooks: ["brutalism", "war", "soviet"] },
  { id: "md", name: "Moldavia", flag: "🇲🇩", why: "Transnistria: un país que no existe con estética soviética intacta; bodegas subterráneas gigantes.", hooks: ["soviet", "wtf", "weird"] },
  { id: "bg", name: "Bulgaria", flag: "🇧🇬", why: "Buzludzha (el platillo comunista), Museo del Socialismo, Kukeri (demonios de invierno), monasterios y ruinas tracias.", hooks: ["brutalism", "folklore", "abandoned"] },
  { id: "ee", name: "Estonia", flag: "🇪🇪", why: "Prisión de Patarei, cantera de Rummu sumergida, bases soviéticas en Paldiski, Tallin digital y medieval.", hooks: ["soviet", "abandoned", "dark"] },
  { id: "lv", name: "Letonia", flag: "🇱🇻", why: "Karosta y su prisión, base de radar soviética, Riga art nouveau, bosques con leyendas.", hooks: ["soviet", "dark", "folklore"] },
  { id: "lt", name: "Lituania", flag: "🇱🇹", why: "Colina de las Cruces, Grūtas Park (estatuas soviéticas), silo nuclear de Plokštinė, Museo del KGB.", hooks: ["soviet", "occult", "dark"] },
  { id: "mn", name: "Mongolia", flag: "🇲🇳", why: "Ulán Bator brutalista, estepa, gers, chamanismo y el Naadam. Muy difícil sin coche fuera de la capital.", hooks: ["nature", "folklore", "wtf"] },
  { id: "cn", name: "China", flag: "🇨🇳", why: "Alta velocidad total, ciudades fantasma, 798 Art District, Chongqing vertical, bloqueos digitales que complican todo.", hooks: ["infrastructure", "abandoned", "wtf"] },
];
