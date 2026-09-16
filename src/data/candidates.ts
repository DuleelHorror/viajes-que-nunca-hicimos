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
  { id: "kg", name: "Kirguistán", flag: "🇰🇬", why: "Biskek soviética con su circo de platillo, la mina de uranio fantasma de Mailuu-Suu, yurtas de verdad en el Song-Kul y el juego del kok-boru con una cabra. Marshrutkas a todo; la montaña, con paciencia.", hooks: ["soviet", "nature", "folklore"] },
  { id: "tr", name: "Turquía", flag: "🇹🇷", why: "Ani, la capital armenia fantasma en la frontera; el Doğu Ekspresi nocturno de Ankara a Kars; Kayaköy vacía; ciudades subterráneas de Capadocia. Trenes lentos y buses de lujo.", hooks: ["abandoned", "historical", "infrastructure"] },
  { id: "pl", name: "Polonia", flag: "🇵🇱", why: "Nowa Huta, la ciudad estalinista de Cracovia; Auschwitz y Treblinka; el Palacio de la Cultura; los búnkeres de la Guarida del Lobo; Chernóbil polaco en Kraśnik. Trenes buenos y baratos.", hooks: ["dark", "soviet", "brutalism"] },
  { id: "hu", name: "Hungría", flag: "🇭🇺", why: "Memento Park con las estatuas, la Casa del Terror, el hospital en la roca, baños brutalistas, Pécs uranífera y el lago Balaton con sus hoteles socialistas. Todo en tren desde Budapest.", hooks: ["soviet", "dark", "weird"] },
  { id: "sk", name: "Eslovaquia", flag: "🇸🇰", why: "El puente OVNI de Bratislava, la pirámide invertida de la radio, Petržalka (el bloque más grande del Este), memoriales partisanos en los Tatras y minas de Banská Štiavnica. Trenes de 1 € para estudiantes y de 5 para el resto.", hooks: ["brutalism", "soviet", "historical"] },
  { id: "mk", name: "Macedonia del Norte", flag: "🇲🇰", why: "Skopje 2014: una capital llenada de estatuas kitsch de golpe; el brutalismo post-terremoto de Tange; Ohrid y sus iglesias; el memorial de Kruševo en forma de bolas. Buses y un tren al día.", hooks: ["wtf", "brutalism", "folklore"] },
  { id: "me", name: "Montenegro", flag: "🇲🇪", why: "El final del tren Belgrado–Bar por el viaducto más alto; el hotel Fjord abandonado en Kotor; la isla-prisión de Mamula; los espomeniks de Podgorica y Nikšić. Buses balcánicos y un tren épico.", hooks: ["abandoned", "brutalism", "nature"] },
  { id: "kr", name: "Corea del Sur", flag: "🇰🇷", why: "La DMZ y el pueblo de propaganda, KTX a todas partes, Busan vertical con su pueblo de colores, bunkers en Seúl y templos con monjes que te dan de comer. Caro, seguro y con el móvil obligatorio.", hooks: ["war", "infrastructure", "weird"] },
];
