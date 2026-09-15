# CLAUDE.md — Centro de control de los viajes que nunca hicimos

Guía para Claude Code (y cualquier dev) que abra este proyecto. Léela entera antes de tocar nada.
El detalle de cada cambio histórico está en `audit/*.audit`.

## Cómo retomar el desarrollo en otro PC (léelo primero)

Todo el contexto viaja en el repo; no hace falta nada de la sesión original:

1. `docs/BRIEF.md` — qué pidió el usuario (perfil del viajero, 18 secciones, funciones, diseño, países) y qué está hecho.
2. `docs/TONO.md` — cómo se escribe TODO en la app (voz, humor, vocabulario "sitio circo", ejemplos). Obligatorio antes de escribir un texto.
3. `docs/PLAN.md` — plan aprobado con arquitectura, fórmulas y fases.
4. Este archivo — arquitectura real, convenciones y pendientes.
5. `audit/` — justificación de cada intervención.

Pasos:

```bash
git clone https://github.com/DuleelHorror/viajes-que-nunca-hicimos.git
cd viajes-que-nunca-hicimos
git config user.name "DuleelHorror"
git config user.email "261600665+DuleelHorror@users.noreply.github.com"   # la identidad local NO viaja con el clon
npm install
npm run build      # debe quedar en verde antes de tocar nada
npm run dev        # http://localhost:5173/#/
```

Siguiente tarea natural: añadir países (ver "Añadir un país" más abajo) siguiendo `docs/TONO.md`, y
después verificar en web los datos volátiles y recalibrar pesos con los 8 países.

---

## Qué es

**Web estática** (GitHub Pages) que compara países como destinos de viaje para un perfil concreto:
viajes largos (7-18 días), **sin conducir** (tren/bus/metro/ferry/vuelo interno/Bolt), saliendo de
**Barcelona**, nacionalidad española, poco inglés, y con gusto por los **sitios circo** (historia
oscura, restos soviéticos, brutalismo, abandonos, catástrofes, folclore, festivales raros).

Pregunta que responde cada ficha: *¿merece la pena, cuántos días, cuándo, cuánto cuesta, se puede sin
coche y qué cosas raras hay?*

**Stack:** Vite 5 · React 18 · TypeScript · Tailwind 3 · react-router 6 (**HashRouter**) ·
react-leaflet 4 + Leaflet · MapLibre GL (base vectorial) · zustand · zod · vitest · **gráficas SVG propias** (sin
recharts). Sin backend, sin login. UI en **español**.

Estética: "archivo de la Guerra Fría + neón vaporwave": base oscura (cemento, mono) con acentos
cian/magenta, rejilla de horizonte y scanlines en `body::before/::after`, glow solo en números hero.
Tokens en `tailwind.config.js` y clases `.panel`, `.panel-neon`, `.label-stencil`, `.chip`, `.glow-*` en
`src/styles/globals.css`.

---

## Cómo ejecutar

```bash
npm install
npm run dev              # http://localhost:5173/#/
npm run build            # tsc --noEmit && vitest run && vite build  → mantener en verde
npm run test
npm run data:stats -- uz         # placeStats calculado para pegar en summary.ts
npx tsx scripts/print-scores.ts  # puntuaciones de todos los países (calibración de pesos)
```

Deploy: push a `main` → `.github/workflows/pages.yml` construye y publica en
`https://duleelhorror.github.io/viajes-que-nunca-hicimos/`. `base: "./"` en Vite + HashRouter: no hay
acoplamiento con el nombre del repo ni 404.html.

**Commits:** solo con el nombre del autor humano (identidad local del repo `DuleelHorror`). Sin
trailers de coautoría de Claude.

---

## Arquitectura (lo que NO es obvio)

- **Datos en TS tipado, dos niveles por país** (`src/data/countries/<id>/`):
  - `summary.ts` (eager, ligero): identidad, `facts`, `traits`, `inputs` (todo lo que entra en fórmulas),
    `months[12]`, `festivals`, `placeStats`, `fx`, `map`. Se importa en `src/data/registry.ts` y se
    puntúa al arrancar.
  - `index.ts` (lazy, `import()` dinámico): `places`, `routes`, `geo` (ciudades, aeropuertos,
    corredores, rutas), `sections` (prosa: transporte, coste, vuelos, docs, seguridad, política,
    digital, idioma, eventos, veredicto).
- **Zod es la fuente de tipos** (`src/lib/schema/*`). Se valida en runtime solo en DEV; en tests siempre.
- **Metadatos por sección, no por campo:** `meta: { sources, lastUpdated, confidence, volatility }`.
  Volátil caduca a 6 meses, estable a 24 (`isStale`); `SourceFooter` lo muestra. El test de
  consistencia obliga a marcar como volátiles docs, seguridad, vuelos, coste, política, eventos, fx,
  corredores y festivales.
- **Motor de puntuación puro** (`src/lib/scoring/`): `scoreCountry(summary)` → `ScoredCountry`.
  Todos los pesos viven en **`weights.ts`** (única fuente de verdad); cada función devuelve
  `{ value, breakdown }` y el desglose se renderiza en `WhyPopover` y en `/metodologia`.
  - Circo Score 0-10 (10 sub-scores; "cantidad de lugares" se calcula de `placeStats`).
  - Duke Score 0-100 = suma de puntos con máximos (circo 35, sin coche 15, coste 10, transporte 8,
    seguridad 8, BCN 6, temporada 6, idioma 4, digital 4, estabilidad 4) − penalizaciones.
    Veredicto 🔥 ≥ 72 · 👍 ≥ 58 · 🤔 ≥ 45. Calibrado con 2 países: **recalibrar cuando haya 8**.
  - Días ideales: fórmula en `days.ts` (base + sitios por tier + km/transporte + excursiones +
    regiones + festival + coste), acotada 5-18. Calibrada: Uzbekistán 13, Escocia 12.
- **Buscador** (`src/lib/finder/rank.ts`): puro, explica cada componente; 🔴 sin coche se excluye si
  el usuario lo marca imprescindible.
- **Estado:** cesta de comparación y buscador en zustand + localStorage; filtros de lista en la URL.
- **Gráficas:** SVG propio en `src/components/charts/`. Paleta de series validada con el skill
  `dataviz` en modo oscuro (`SERIES_COLORS` en `constants.ts`): cian, ámbar, fucsia, rosa + trazo
  discontinuo como codificación secundaria. No cambiar colores sin volver a validar.
- **Banderas:** imágenes de flagcdn (`components/ui/Flag.tsx`) porque Windows no renderiza emojis de
  bandera; fallback al código ISO. Escocia usa `gb-sct`.
- **Mapa:** `CountryMap.tsx` es chunk lazy; pins con `L.divIcon` (sin iconos por defecto de Leaflet),
  corredores como polilíneas entre ciudades, overrides oscuros de Leaflet en `globals.css`. Al abrir se
  encuadra solo sobre ciudades + sitios (`maxZoom` 9); el `center`/`zoom` del summary es solo la vista
  previa a ese ajuste.
- **Capa base:** `Basemap.tsx` + `lib/mapStyle.ts`. Vectorial (MapLibre GL sobre OpenFreeMap, esquema
  OpenMapTiles) con estilo oscuro propio; se inyecta en el `tilePane` de Leaflet con
  `@maplibre/maplibre-gl-leaflet`, así el resto del mapa sigue siendo Leaflet. Sin API key: **no volver a
  CARTO**, que ahora estampa "API KEY REQUIRED" sobre cada tile. Si no hay WebGL o el estilo no carga en
  9 s, cae al raster Esri Dark Gray (`RASTER_FALLBACK`). El worker de MapLibre se pasa a mano
  (`?worker&url` + `setWorkerUrl`) porque Vite no puede resolver el suyo: si se toca eso, el mapa se
  queda negro **sin ningún error en consola**. Detalle completo en
  `audit/2026-09-15__mapa-vectorial-sin-api-key.audit`.

---

## Convenciones

1. **Nada de datos en componentes.** Todo en `src/data/countries/<id>/`; los componentes leen del
   registro (`COUNTRIES`, `FESTIVALS`, `loadCountry`).
2. **Ids namespaced y estables:** `uz-muynak-cementerio-barcos`, `sco-edimburgo`, `uz-12d-…`.
3. **Honestidad:** fuentes reales en `meta`, `confidence: "baja"` si no está verificado, precios como
   estimaciones, `override` manual siempre visible como "(manual)". **Nunca inventar URLs de imágenes:**
   `image` solo con `credit`, `license` y `sourcePage` verificados (Zod lo exige).
4. **Audit-trail:** tras cada intervención no trivial, `audit/<YYYY-MM-DD>__<slug>.audit`.
5. Reutilizar `src/components/ui/*`, `score/*`, `charts/*` antes de crear primitivas nuevas.
6. Números con `Intl es-ES` (`src/lib/format.ts`); meses/estaciones desde `constants.ts`.

## Añadir un país

1. Copiar la carpeta `uz` como plantilla (7 archivos). Objetivo v1: 12-22 sitios (≥ 5 tier 1),
   3-6 festivales, 2-3 rutas con noches = días, 5-10 ciudades, 3-6 corredores, 12 meses con razones.
2. Registrar en `src/data/registry.ts` (`RAW` + `loaders`) y en el array `ALL` de
   `src/data/__tests__/consistency.test.ts` y `scripts/print-scores.ts`.
3. `npm run data:stats -- <id>` → pegar `placeStats` en `summary.ts`.
4. Si el país es candidato en `src/data/candidates.ts`, quitarlo de allí.
5. `npm run build` en verde.

## Mapa de rutas

| Ruta | Página |
|---|---|
| `/` | `pages/HomePage.tsx` — hero, top 3, filtros rápidos, próximos festivales, en el radar |
| `/paises` | `CountryListPage.tsx` — grid + filtros por tags/días (query string) |
| `/pais/:id` | `CountryPage.tsx` — 18 secciones (`components/country/sections/*`), `?lugar=` / `?ruta=` abren drawers |
| `/comparar?ids=` | `ComparePage.tsx` — 2-4 países, radares, tabla con 🏆 |
| `/buscador` | `FinderPage.tsx` |
| `/festivales?mes=&cat=` | `FestivalsPage.tsx` |
| `/graficas` | `ChartsPage.tsx` — rankings, dispersión, radar, heatmap, rangos de días |
| `/metodologia` | `MethodologyPage.tsx` — renderiza `weights.ts` |

## Pendiente conocido

- Países restantes de v1: Italia, Austria, Japón y Suecia (el usuario descartó España y República Checa);
  después los del radar
  (`src/data/candidates.ts`). Objetivo por país: 12-22 sitios, 3-6 festivales, 2-3 rutas, todo con la voz de `docs/TONO.md`.
- Verificar con fuentes web los bloques volátiles (visados, vuelos directos, cambio) antes de fiarse.
- Recalibrar pesos del Duke y de los días con los 8 países cargados (`npx tsx scripts/print-scores.ts`).
- Fotos de sitios solo con licencia y crédito verificados (campo `image` de `Place`).

## Estado al cierre de la última sesión (2026-09-15)

- Publicado en https://duleelhorror.github.io/viajes-que-nunca-hicimos/ (Pages por Actions, `build_type=workflow`).
- Uzbekistán (Duke 71, "Sí", 13 días) y Escocia (Duke 75, "Mucho", 12 días) completos; 23 tests en verde.
- Voz, tipografía (Inter + Manrope), banderas por imagen, escalera de días y sala de gráficas implementadas.
- Mapa base rehecho: vectorial propio sin API key, con escala, botón "Encuadrar" y encuadre automático.
- España y República Checa quedan fuera de la v1 por decisión del usuario: faltan Italia, Austria, Japón y Suecia.
