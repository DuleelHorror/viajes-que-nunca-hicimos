# Guía de tono y voz de la app

Regla fundamental: **"¿Esto se lo diría una persona a un amigo mientras miran dónde irse de viaje?"**
Si la respuesta es no, reescríbelo. Navegar por la app tiene que sentirse como tener a un colega obsesionado
con viajar diciéndote "Hostia, mira este sitio", "Esto te gustaría", "Aquí puedes ir perfectamente sin
coche", "Esto mola pero está en mitad de la nada", "Yo aquí me quedaría unos 10 días", "En enero puede estar
guapísimo". Nada de folleto turístico, Wikipedia ni informe gubernamental.

## Español

Directo, natural, fácil de leer, con humor, ligeramente gamberro, con personalidad, sin lenguaje
corporativo ni frases de agencia. Expresiones coloquiales de vez en cuando.

| En vez de | Escribe |
|---|---|
| "Uzbekistán dispone de una infraestructura ferroviaria relativamente desarrollada…" | "Para ser Asia Central, Uzbekistán juega en modo fácil: puedes plantarte en Samarcanda, Bujará o Khiva sin tener que alquilar un Lada y perderte en mitad del desierto." |
| "La accesibilidad mediante transporte público a esta localización es limitada." | "Aquí empieza el circo. Llegar sin coche se puede, pero vas a tener que currártelo." |
| "El destino presenta numerosos atractivos relacionados con el pasado soviético." | "Si te gustan las reliquias soviéticas, aquí hay mandanga." |
| "Se recomienda una estancia aproximada de 10-12 días." | "Con 4 días te quedas corto. Aquí hay material de sobra para pegarte 10-12 días dando vueltas." |
| "El país ofrece una elevada diversidad de atractivos." | "Este país está cargado de cosas. No es de esos sitios donde ves la capital y ya puedes ir haciendo la maleta." |

## Humor

Ocasional, sobre todo en pros y contras, dificultad logística, transporte, clima, sitios remotos, destinos
caros, países donde el coche es obligatorio, eventos rarísimos y puntuaciones. **No convertir cada frase en
un chiste; la información sigue siendo útil.**

- Transporte 10/10: "Puedes cruzarte medio país en tren sin invocar a ningún dios." · 7: "Se puede hacer
  bastante bien. Algún autobús random caerá." · 4: "Empieza la aventura." · 2: "Sin coche vas a conocer
  íntimamente las estaciones de autobús."
- Precio barato: "Aquí puedes alargar el viaje sin que tu cuenta bancaria empiece a llorar." · Muy caro:
  "Prepara la cartera. Aquí respirar todavía es gratis, de momento."
- Clima: invierno extremo "Nivel: sales del hotel y reconsideras todas tus decisiones vitales." · lluvia
  constante "Buen sitio si tu objetivo era poner a prueba la impermeabilidad de la mochila."
- Remoto: "Está en mitad de la nada, que probablemente sea parte de la gracia."

## Vocabulario propio (con moderación, para que siga teniendo gracia)

**Sitio circo** = lugar raro, impresionante, turbio, surrealista, histórico o digno de organizar una
aventura para verlo. Expresiones: "Nivel de circo", "Esto es bastante circo", "Circo absoluto", "Material
bueno", "Hay mandanga", "Esto merece el desvío", "Aquí empieza la aventura", "Esto tiene pinta de dungeon",
"Sitio de los que justifican el viaje".

## Interpretaciones de las puntuaciones (implementadas en `src/lib/voice.ts`)

- **Circo Score:** 0-2 "Puedes sobrevivir sin venir." · 3-4 "Alguna cosa curiosa hay." · 5-6 "Ya empieza
  a haber material." · 7-8 "Aquí hay mandanga." · 9 "Circo serio." · 10 "¿Por qué no has comprado ya el vuelo?"
- **Sin coche:** 10 "Modo fácil." · 8-9 "Perfectamente viable." · 6-7 "Bien, aunque habrá alguna aventura
  logística." · 4-5 "Se puede, pero empieza el circo." · 2-3 "Vas a sufrir." · 0-1 "O conduces o invocas un
  helicóptero."
- **Veredictos:** 🔥 "Este país es MUY tú." / "Aquí hay viaje." / "Material de sobra para una aventura
  seria." · 👍 "Tiene bastante sentido." · 🤔 "Hay cosas muy buenas, pero hay que montarlo bien." ·
  ⚠️ "Mola, pero logísticamente es un pequeño infierno." · 💀 "Es una locura. Precisamente por eso tiene gracia."

## Pros y contras

Con personalidad y concretos. Ej.: "El Mar de Aral está donde Cristo perdió la zapatilla", "En verano
puedes cocerte vivo", "Fuera de las ciudades principales el inglés empieza a desaparecer misteriosamente".

## Duración

Muy visual y directa: escalera 3 / 5 / 8 / 12 / 15 días con una frase cada uno ("Ni te molestes", "Viaje
rápido", "Ya empieza a tener sentido", "El punto dulce", "Viaje completo") y "🔥 PARA TI: N-M DÍAS" con
una frase tipo "Hay suficiente mandanga como para recorrer medio país sin rellenar días por rellenarlos".

## Meses

Explicaciones naturales con emoji por línea: "🥶 Frío serio." "👍 Muy poco turismo." "🔥 Puede tener
bastante gracia si buscas ambiente invernal." "☀️ Sol asegurado. 💀 Calor del demonio."

## Lugares

Nada de guía turística. La descripción explica de golpe: qué demonios estoy viendo, por qué es
interesante, qué pasó allí, si merece desplazarse y cómo de complicado es llegar.
Ejemplo bueno: "Muynak era un pueblo pesquero con el mar prácticamente al lado. La URSS desvió los ríos, el
agua desapareció y ahora el antiguo puerto está rodeado de desierto. Todavía quedan barcos oxidados
plantados sobre lo que antes era el fondo marino. Circo soviético de primer nivel."

## Menos texto

Frases cortas, párrafos pequeños, datos destacados, tarjetas, iconos, puntuaciones, conclusiones. Si algo
se explica en dos frases, no escribas ocho. Una página se tiene que poder escanear y responder: ¿mola?,
¿cuánto cuesta?, ¿cuántos días?, ¿puedo moverme sin coche?, ¿qué cosas raras hay?, ¿cuándo ir?

## Aplica a TODO

Home, fichas, comparador, lugares, festivales, transporte, seguridad, clima, rutas, recomendaciones,
tooltips, mensajes vacíos, etiquetas, conclusiones, pros y contras. Los datos y la funcionalidad se
mantienen; cambia cómo se presentan.
