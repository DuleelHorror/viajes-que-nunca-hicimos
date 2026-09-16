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
  { id: "de", name: "Alemania (el Este)", flag: "🇩🇪", why: "Berlín con Teufelsberg y la Stasi, el sanatorio abandonado de Beelitz-Heilstätten (con pasarela y tren de cercanías), Prora en Rügen, la cabeza de Marx de Chemnitz y Leipzig. ICE a todo, DNI y vuelos diarios a Berlín. Lo malo: caro y muy visto.", hooks: ["abandoned", "soviet", "dark"] },
  { id: "gr", name: "Grecia", flag: "🇬🇷", why: "Atenas brutalista, Meteora en tren, Spinalonga (la leprosería en una isla, barco desde Creta), la Grecia de la guerra civil y los ferries. Vueling y Ryanair a diario con el DNI. Lo malo: el tren es corto (Atenas–Tesalónica y poco más) y el resto es bus KTEL.", hooks: ["historical", "occult", "nature"] },
  { id: "si", name: "Eslovenia", flag: "🇸🇮", why: "Liubliana de Plečnik, Kobarid (Caporetto) con el museo de la Gran Guerra en bus, la cueva de Postojna, los búnkeres de la línea Rupnik y el tren desde Trieste o Zagreb. DNI; directo con Vueling solo en verano. Pequeño y caro para lo que es.", hooks: ["war", "nature", "infrastructure"] },
  { id: "hr", name: "Croacia", flag: "🇭🇷", why: "Goli Otok, el gulag de Tito en una isla (barco desde Rab en verano), la torre de agua de Vukovar, Petrova Gora (ruina de espomenik, sin bus: se avisa), Zagreb y sus bloques. Vuelos diarios con el DNI; tren lento y buses buenos. Lo malo: costa cara y llena.", hooks: ["dark", "soviet", "abandoned"] },
  { id: "fi", name: "Finlandia", flag: "🇫🇮", why: "Helsinki con Suomenlinna, el nocturno a Laponia (el Santa Claus Express, 12 h), nieve fiable, saunas de humo, los búnkeres de la línea Salpa y Karelia junto a la frontera rusa cerrada. Tren VR bueno y directo con Norwegian o Finnair. Lo malo: el más caro del radar.", hooks: ["nature", "war", "folklore"] },
  { id: "cy", name: "Chipre", flag: "🇨🇾", why: "Varosha, el barrio fantasma de Famagusta cerrado desde 1974 y abierto a medias desde 2020, la Línea Verde de Nicosia con paso a pie, la última capital dividida de Europa. Ryanair y Vueling con el DNI. Lo malo: sin tren y con buses justos.", hooks: ["abandoned", "war", "wtf"] },
];
