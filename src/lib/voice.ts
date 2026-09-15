/**
 * voice.ts — La voz de la app: interpretaciones humanas de cada número.
 * Regla: ¿esto se lo diría un colega mirando dónde irse de viaje? Si no, reescribir.
 */
import type { MonthRatingValue, NoCarLight, Verdict } from "@/lib/constants";
import type { DaysResult } from "@/lib/scoring";

export function circoVoice(v: number): string {
  if (v >= 9.5) return "¿Por qué no has comprado ya el vuelo?";
  if (v >= 9) return "Circo serio.";
  if (v >= 7) return "Aquí hay mandanga.";
  if (v >= 5) return "Ya empieza a haber material.";
  if (v >= 3) return "Alguna cosa curiosa hay.";
  return "Puedes sobrevivir sin venir.";
}

export function noCarVoice(v: number): string {
  if (v >= 9.5) return "Modo fácil.";
  if (v >= 8) return "Perfectamente viable.";
  if (v >= 6) return "Bien, aunque habrá alguna aventura logística.";
  if (v >= 4) return "Se puede, pero empieza el circo.";
  if (v >= 2) return "Vas a sufrir.";
  return "O conduces o invocas un helicóptero.";
}

export function lightVoice(light: NoCarLight): string {
  return { verde: "Modo fácil sin coche", amarillo: "Se puede, con alguna aventura logística", naranja: "Empieza el circo logístico", rojo: "O conduces o invocas un helicóptero" }[light];
}

export function transportVoice(v: number): string {
  if (v >= 9) return "Puedes cruzarte medio país en tren sin invocar a ningún dios.";
  if (v >= 7) return "Se puede hacer bastante bien. Algún autobús random caerá.";
  if (v >= 5) return "Funciona, pero vas a mirar muchos horarios.";
  if (v >= 3.5) return "Empieza la aventura.";
  return "Sin coche vas a conocer íntimamente las estaciones de autobús.";
}

/** 10 = carísimo */
export function costVoice(v: number): string {
  if (v <= 2.5) return "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar.";
  if (v <= 4.5) return "Barato para lo que ofrece.";
  if (v <= 6.5) return "Precio europeo normal: ni regalado ni sangrante.";
  if (v <= 8) return "Prepara la cartera.";
  return "Prepara la cartera. Aquí respirar todavía es gratis, de momento.";
}

export function safetyVoice(v: number): string {
  if (v >= 8.5) return "Más tranquilo que tu barrio.";
  if (v >= 7) return "Sin dramas: sentido común y ya.";
  if (v >= 5.5) return "Ojo con algunas zonas y con los timos.";
  return "Aquí hay que ir con la cabeza puesta.";
}

/** 10 = muy difícil */
export function languageVoice(v: number): string {
  if (v <= 2) return "Te entiendes con todo el mundo.";
  if (v <= 4) return "Con inglés básico y el móvil, sobras.";
  if (v <= 6.5) return "El traductor va a ser tu mejor amigo.";
  if (v <= 8.5) return "Fuera de los hoteles el inglés desaparece misteriosamente.";
  return "Aquí se viaja por señas y con el traductor a tope.";
}

export function digitalVoice(v: number): string {
  if (v >= 8.5) return "Con el móvil vas sobrado.";
  if (v >= 6.5) return "El móvil resuelve casi todo; lleva algo de efectivo.";
  if (v >= 4.5) return "Descarga mapas y lleva efectivo: la app no siempre salva.";
  return "Aquí el móvil es un pisapapeles en muchos sitios.";
}

export function bcnVoice(v: number): string {
  if (v >= 9) return "Te plantas allí antes de que acabe la peli.";
  if (v >= 7) return "Vuelo directo y sin dramas.";
  if (v >= 5) return "Con escala, pero se hace en un día.";
  return "Paliza de viaje: escala larga y llegada en modo zombi.";
}

export function stabilityVoice(v: number): string {
  if (v >= 8) return "Aburridamente estable.";
  if (v >= 6) return "Estable, aunque no es una democracia de manual.";
  if (v >= 4) return "Mira las noticias la semana antes de ir.";
  return "Aquí las cosas pueden torcerse.";
}

export function seasonVoice(v: number): string {
  if (v >= 8.5) return "Casi todo el año vale.";
  if (v >= 6.5) return "Tiene su temporada buena y su temporada de sufrir.";
  return "Hay que elegir bien el mes o te arrepientes.";
}

export const VERDICT_PHRASE: Record<Verdict, string> = {
  mucho: "Este país es MUY tú.",
  si: "Tiene bastante sentido.",
  depende: "Hay cosas muy buenas, pero hay que montarlo bien.",
  poco: "Puedes sobrevivir sin venir.",
};

export const MONTH_VOICE: Record<MonthRatingValue, { emoji: string; label: string }> = {
  excelente: { emoji: "🔥", label: "Muy buena época" },
  bueno: { emoji: "👍", label: "Buen momento" },
  normal: { emoji: "🤔", label: "Se puede" },
  malo: { emoji: "💀", label: "Mal momento" },
};

export interface DayStep {
  n: number;
  emoji: string;
  text: string;
  tone: "no" | "meh" | "ok" | "sweet" | "full" | "over";
}

/** Escalera de duraciones típicas (3/5/8/12/15) interpretada contra los rangos del país. */
export function daysLadder(d: DaysResult): DayStep[] {
  const steps = [3, 5, 8, 12, 15];
  let saidNo = false;
  return steps.map((n) => {
    if (n < d.quick[0]) {
      if (!saidNo) {
        saidNo = true;
        return { n, emoji: "🙅", text: "Ni te molestes. Verías la capital y poco más.", tone: "no" };
      }
      return { n, emoji: "🫤", text: "Te quedas corto: la capital, una escapada y a casa con ganas de más.", tone: "no" };
    }
    if (n <= d.quick[1]) return { n, emoji: "⚡", text: "Viaje rápido: lo gordo y a casa.", tone: "meh" };
    if (n < d.recommended[0]) return { n, emoji: "👍", text: "Ya empieza a tener sentido.", tone: "ok" };
    if (n <= d.recommended[1]) return { n, emoji: "🔥", text: "El punto dulce.", tone: "sweet" };
    if (n <= d.complete[1]) return { n, emoji: "🧭", text: "Viaje completo: te lo pateas entero.", tone: "full" };
    return { n, emoji: "🛋️", text: "Te va a sobrar; solo si vas a rellenar con excursiones.", tone: "over" };
  });
}

export function daysVoice(d: DaysResult): string {
  if (d.ideal >= 15) return "Hay mandanga para recorrer el país entero sin rellenar días por rellenarlos.";
  if (d.ideal >= 11) return "Hay suficiente material como para recorrer medio país sin empezar a rellenar días.";
  if (d.ideal >= 8) return "Da para un viaje serio sin llegar a la fase de «¿y ahora qué hacemos?».";
  if (d.ideal >= 6) return "Una semana bien apurada y sales con la sensación de haberlo visto.";
  return "Con pocos días tienes suficiente. No es de esos sitios que te enganchan dos semanas.";
}

/** Nivel de dificultad logística (0-10, 10 = infierno) con frase */
export function logisticsVoice(v: number): string {
  if (v <= 2) return "Modo fácil.";
  if (v <= 4) return "Algún bus random y poco más.";
  if (v <= 6) return "Aquí empieza el circo, pero se controla.";
  if (v <= 8) return "Mola, pero logísticamente es un pequeño infierno.";
  return "Es una locura. Precisamente por eso tiene gracia.";
}
