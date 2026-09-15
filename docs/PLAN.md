# Plan aprobado (2026-09-15) — copia del plan de la sesión de creación

## Contexto

El usuario quiere una **app web estática** (para él y unos amigos) que sirva de **comparador de países como destinos de viaje**, pensada para su forma concreta de viajar: viajes largos (7-18 días), **sin conducir** (tren/bus/metro/ferry/vuelo interno/Bolt), saliendo de **Barcelona**, nacionalidad española, poco inglés, y con gusto por los **"sitios circo"** (historia oscura, restos soviéticos, brutalismo, abandonos, catástrofes tipo Mar de Aral, folclore, festivales raros). Cada país debe responder: *¿merece la pena, cuántos días, cuándo, cuánto cuesta, se puede sin coche y qué cosas raras hay?*

La app actual en `C:\Going East` (Cold Days Planner, Tauri + SQLite, agenda del viaje a Polonia) **no se toca**: se crea un proyecto nuevo reutilizando su sistema de diseño y patrones.

## Decisiones cerradas con el usuario (2026-09-15)

| Tema | Decisión |
|---|---|
| Ubicación | Carpeta nueva `C:\viajes-que-nunca-hicimos` + repo nuevo **público** `DuleelHorror/viajes-que-nunca-hicimos` |
| Publicación | GitHub Pages vía **GitHub Actions** → `https://duleelhorror.github.io/viajes-que-nunca-hicimos/` (los repos actuales del usuario usan Pages "legacy" desde `main`; aquí hace falta build, así que workflow) |
| Estética | **Archivo Guerra Fría + neón vaporwave**: base oscura dossier (cemento, mono) con acentos neón cian/magenta, rejilla horizonte, glow suave solo en números hero, scanlines discretas. Elegante, no chillón. |
| Fotos sitios circo | v1 sin fotos: placeholder SVG por categoría (emoji + trama en el color de la categoría). Campo `image?: {url, credit, license, sourcePage}` opcional para rellenar después + enlace Wikipedia |
| Nombre | Título "Centro de control de los viajes que nunca hicimos", slug `viajes-que-nunca-hicimos` |
| Scores | **DUKE SCORE 0-100** ("Uzbekistán: NN/100") + **CIRCO SCORE 0-10** + 10 sub-scores, todos **explicables** ("¿por qué NN?") |
| Datos | Curados a mano en TS tipado (Zod), cada sección con `meta: {sources, lastUpdated, confidence, volatility}`. Sin backend ni APIs en v1, con interfaz de providers para conectarlas después |
| Gráficas | **SVG propio** (radar, barras comparativas, tira de meses), no recharts: solo 3 formas, control total del look neón (filtros glow), ~100 KB menos |
| Identidad git | Config **local** del repo nuevo: `user.name DuleelHorror` + email noreply de GitHub de esa cuenta (no la de Sonicon) |

Supuesto sobre el "91/100" del brief: se toma como ejemplo de formato. El número real sale de la fórmula (suma de puntos con desglose); con inputs realistas Uzbekistán quedará ~78-85. Se calibran pesos en la fase 7 con los 8 países cargados. Nada de "estirar" la escala.

## Stack

Vite 5 · React 18.3 · TypeScript 5 · Tailwind 3 · react-router 6 (**HashRouter**, `createHashRouter`) · react-leaflet 4 + Leaflet 1.9 (base vectorial MapLibre, ver `audit/2026-09-15__mapa-vectorial-sin-api-key.audit`) · zustand · zod · lucide-react · vitest (tests de consistencia de datos) · fuentes vía `@fontsource-variable/space-grotesk` + `@fontsource-variable/jetbrains-mono` (sin Google Fonts en runtime). Node 22 en el PC.

## Reutilización desde `C:\Going East` (copiar, no enlazar)

Verificado libre de Tauri/SQLite:

- `tailwind.config.js` (paleta `ink/concrete/blood/amber/steel`, `rounded-sharp`, sombras, keyframes) → **ampliar** con `neon: {cyan #22d3ee, magenta #e879f9, lime #a3e635, violet #a78bfa}`, `signal: {green, yellow, orange, red}`, `fontFamily.display`, `boxShadow.glow`.
- `src/styles/globals.css` (scrollbars, `.panel`, `.label-stencil`, `.marker-left`, `.tabular`, `.route-enter`, fondo degradado) → añadir overrides Leaflet (popup/controles oscuros, hoy no existen), `.scanlines`, `.grid-horizon`, `.glow-*`.
- `src/components/ui/{Button,Badge(base),Card(Panel/SectionHeader/Stat),Field,Misc,Modal}.tsx`, `src/store/useUiStore.ts`. `Stat` es la base del tile de puntuación; `Modal` es la base del `Drawer`.
- `src/lib/utils.ts` (solo `cn`), `src/lib/format.ts` (cambiar moneda por defecto a EUR), `src/lib/dates.ts` (sin `tripDayNumber`/`dateForTripDay`).
- Patrones de `src/features/map/MapPage.tsx`: `L.divIcon` HTML inline (evita el fix de iconos por defecto), `MapReady` + `invalidateSize`, `fitBounds(bounds.pad(0.2))`, `Polyline` con `dashArray` para corredores ferroviarios, toggles de capas.
- `AppShell.tsx` (sin bootstrap de `useTripStore`), patrón `NAV[]` + `NavLink` de `Sidebar.tsx`. **Construir drawer móvil** (la app actual no tiene nada responsive).
- `index.html`, `postcss.config.js`, `tsconfig.json` (alias `@/`), `main.tsx`/`App.tsx`/`router.tsx`.
- `vite.config.ts`: quitar `clearScreen`, `server.port 1420/strictPort`, `build.target es2021`; añadir `base: "./"` (relativo: funciona en Pages con HashRouter sin acoplar el nombre del repo) y `manualChunks` para leaflet.
- NO copiar: `src-tauri/`, `lib/{adapter,db,ipc,schema,seed,trip,csv,xlsx}`, `useTripStore`, `constants.ts` (solo el patrón `X as const → X_META`), `RiskBadges`/`TypeIcon` (solo la forma), `Toaster`/`ConfirmDialog`.

## Modelo de datos (`src/lib/schema/*.ts`, Zod = fuente de tipos)

**Metadatos por sección, no por campo**: `Sourced<T> = T & { meta: SectionMeta }` con `SectionMeta = { sources: Source[], lastUpdated: ISODate, confidence: "alta"|"media"|"baja", volatility: "estable"|"volatil", notes? }`. `isStale(meta)`: volátil caduca a 6 meses, estable a 24. Secciones **obligatoriamente volátiles** (test lo garantiza): docs/visados, seguridad, vuelos, fx, precios, política, eventos, corredores ferroviarios.

**Dos niveles por país**:
- `summary.ts` (eager, ≤ ~8 KB): identidad, `facts`, `whyMe`, `traits` (sovietico, brutalista, nieveFiable, distanciaCultural/10, turismoMasivo/10), `inputs: ScoreInputs` (todo lo que entra en fórmulas), `months[12]`, `festivals[]`, `placeStats` (contadores por tier/categoría, `accesoSinCocheMedio`, `excursiones`, `regiones`, `spreadKm`), `fx`, `daysOverride?`.
- `index.ts` (lazy por `import()` dinámico): `places.ts`, `routes.ts`, `geo.ts` (cities, airports, railCorridors, mapRoutes), `transport.ts`, `cost.ts`, `flights.ts`, `docs.ts`, `safety.ts`, `politics.ts`, `digital.ts`, `language.ts`, `events.ts`, `verdict.ts` (pros/contras + veredicto manual opcional).

Entidades clave:
- `Place`: id namespaced (`uz-muynak-cementerio-barcos`), `countryId`, `cityId?`, `regionName`, `coords`, `categories[]` (primera = principal; 15 categorías con emoji/label/color en `CATEGORY_META`), `tier 1|2|3`, `description`, `whyMe`, `scores {rareza, impactoVisual, valorHistorico, accesoSinCoche}`, `timeNeeded`, `price`, `transport {modes[], howToGet, needsTour, isExcursion}`, `bestSeason[]`, `worthDetour`, `image?`, `links?`, `meta`.
- `Festival`: `month`, `dateApprox`, `durationDays`, `whatHappens` (≤400 chars), `scores {rareza, espectacularidad, facilidadAcceso, nivelTurismo}`, `planTripAround`, `meta`. Vive en `summary` para el explorador global.
- `TripRoute` → `RouteStop[] {cityId, nights, placeIds[], legFromPrevious?: Leg}`; `Leg {mode 🚆🚌✈️🚕🚶, durationMin, noCarDifficulty: ok|aviso|dificil, bookAhead?, price?}`.
- `City` (con transporte urbano: modes, score, ticket, app), `Airport`, `RailCorridor` (stops cityIds, kind, frequency, operator, booking, quality), `MonthRating` (rating excelente/bueno/normal/malo, temps, precip, snow, daylight, crowds, prices, `reasons[]`, `weatherAdds?`, `closures?`).
- Escocia: `id "sco"`, `iso {alpha2 "GB", subdivision "GB-SCT"}`, `parentState "Reino Unido"` (docs/fx/vuelos de fuente UK, hechos de Escocia).

**Registro** `src/data/registry.ts`: `SUMMARIES` (8 imports eager), `COUNTRIES = map(scoreCountry)` calculado una vez, `FESTIVALS` aplanado con `countryId`, `loadCountry(id)` memoizado con `import()` dinámico, `CANDIDATES` (lista ligera "en el radar": Georgia, Armenia, Kazajistán, Rumanía, Albania, Bosnia, Serbia, Moldavia, Bulgaria, Estonia, Letonia, Lituania, Mongolia, China, con una línea "por qué encajaría").

**Tests de deriva** (`src/data/__tests__/consistency.test.ts`, vitest): `placeStats` ≡ `computePlaceStats(places)`; todo `cityId/placeId/festivalId` referenciado existe; `months.length === 12`; secciones volátiles marcadas; Zod parse de todos los países. Script `npm run data:stats -- uz` imprime el bloque `placeStats` listo para pegar. Zod parse en runtime solo en DEV.

## Motor de puntuación (`src/lib/scoring/`, funciones puras)

Toda función devuelve `{ value, breakdown: Contribution[] }` (`{key, label, points, max, weight?, input?, note?}`); la página `/metodologia` y los popovers "¿por qué N?" renderizan desde las mismas constantes de `weights.ts`.

- **Cantidad de lugares** (computado): `w = t1·3 + t2·1.5 + t3·0.75`; `score = w ≥ 40 ? 10 : 10·√(w/40)`.
- **Transporte público**: `rail = .25 cobertura + .20 frecuencia + .20 facilidadBilletes + .15 calidad + .10 puntualidad + .10 precio` (+0.25 nocturnos ≥7, +0.25 altaVelocidad ≥7, cap 10); `transport = .55 rail + .20 bus + .20 urban + .05 apps`.
- **Viabilidad sin coche**: `.5 transport + .5 placeStats.accesoSinCocheMedio` (−0.5 si excursiones/total > 0.4). Semáforo: `≥7.5 🟢 · 6-7.4 🟡 · 4.5-5.9 🟠 · <4.5 🔴`.
- **Coste** (10 = carísimo): lineal a tramos sobre `daily.normal` €: `40→1, 70→3, 100→5, 140→7, 200→9, 260→10`; `override` manual gana y se marca "(manual)".
- **Facilidad desde BCN**: directo `10 − max(0, h−3)·0.5 + lowCost 1 + (semanal ≥7) 0.5`; sin directo `5 − max(0, hEscala−8)·0.25 + (≥3 opciones diarias) 0.5`; clamp 0-10.
- **Seguridad**: `.20 delincuencia + .20 robos + .10 timos + .15 zonasConflicto + .10 terrorismo + .10 transporte + .10 camaraEnCalle + .05 noche`; para Duke `0.7 safety + 0.3 solo`.
- **Dificultad idioma**: `10 − (.40 ingles + .20 senaleticaBilingue + .20 maquinasEnIngles + .20 traductor) + (alfabetoDistinto ? 1 : 0)`.
- **Facilidad digital**: `.20 maps + .10 translate + .20 tarjetas + .10 contactless + .15 (10−efectivo) + .10 esim + .10 cobertura + .05 wifi − 0.5·bloqueos`.
- **CIRCO SCORE** = Σ peso·sub: `oscuridad .16, rareza .16, historia .12, arquitectura .10, folclore .10, fotografia .10, cantidadLugares .10, festivales .08, aventura .05, naturaleza .03`.
- **DUKE SCORE 0-100** = suma de puntos con máximos explícitos: Circo 35 · Sin coche 15 · Coste (invertido) 10 · Transporte 8 · Seguridad 8 · BCN 6 · Temporada 6 (`(excelentes + 0.5·buenos)/12`) · Idioma (invertido) 4 · Digital 4 · Estabilidad 4. Penalizaciones: −8 si estabilidad < 4 o seguridad < 4; −5 si 🔴 sin coche. Veredicto: `≥78 🔥 MUCHO · 65-77 👍 SÍ · 50-64 🤔 DEPENDE · <50 👎 POCO`. Un veredicto manual en `verdict.ts` se muestra como "(criterio manual)" si discrepa.
- **Días ideales**: `2 + (t1·0.6 + t2·0.3 + t3·0.1) + spreadKm/(200 + 40·transport) + excursiones·0.5 + max(0, regiones−2)·0.5 + (festival planTripAround ? 1 : 0) + (coste ≥8 ? −1 : coste ≤3 ? +0.5 : 0)`, clamp 5-18. `quick = [max(3, .45·ideal), .6·ideal]`, `recommended = [ideal−2, ideal+1]`, `complete = [ideal+3, min(21, 1.5·ideal)]`. Sanity: Uzbekistán ≈ 14, Escocia ≈ 10, Japón → 18.
- **Tags derivados** (`tags.ts`) para filtros: barato (coste ≤4), buen-transporte (≥7), sin-coche (🟢/🟡), seguro (≥7.5), sovietico/brutalista/nieve (traits), oscuro/raro (≥7), festivales, naturaleza, invierno/verano (≥2 meses buenos en la estación), poco-turismo (≤4), muy-distinto (≥7), facil-desde-bcn (≥7); filtros "5/7/10/15 días" = N dentro de quick o recommended.

## Buscador de viajes (`src/lib/finder/rank.ts`)

Inputs (en query string + zustand): mes, días, presupuesto/día, sinCoche (imprescindible/preferible/indiferente), temperatura (frío/templado/calor/indiferente), intereses (categorías). Puntuación máx. 100 con razón por componente: Mes 25 (excelente 25 / bueno 18 / normal 10 / malo 0, +3 festival planificable ese mes, +2 `weatherAdds`) · Duración 15 (dentro de recommended = 15, decae con |días−ideal|/ideal) · Presupuesto 15 (ratio budget/daily.normal) · Sin coche 15 (imprescindible: 🔴 **excluido** y listado al final en gris) · Temperatura 10 · Intereses 20 (media de sub-score mapeado + densidad de sitios de esa categoría) · Ajustes (−5 seguridad <5, +3 BCN ≥8). Output: total, chips de explicación, festivales del mes, ruta sugerida (la de días más cercanos).

## Pantallas, rutas y componentes

| Ruta | Página | Carga |
|---|---|---|
| `/` | Home: hero con título, top 3 Duke, filtros rápidos, próximos festivales (90 días), "en el radar" (candidatos) | eager |
| `/paises` | Grid de países + barra de filtros/orden; estado en query (`?tags=sin-coche,barato&dias=10&sort=duke`) | eager |
| `/pais/:id` | Ficha larga con `SectionNav` sticky (18 secciones); `?lugar=` / `?ruta=` abren drawers | `loader` → `loadCountry` |
| `/comparar?ids=uz,jp,it` | 2-4 columnas, 🏆 por fila (consciente de "menor es mejor"), radar + barras | eager |
| `/buscador` | Formulario + resultados rankeados con explicación | eager |
| `/festivales?mes=3&cat=` | Tira de meses + tarjetas de todos los países | eager |
| `/metodologia` | Tablas de pesos y fórmulas renderizadas desde `weights.ts` | eager |

Componentes: `ui/` (Button, Badge, Panel, SectionHeader, Stat, Field, Input, Select, EmptyState, Spinner, Drawer, Tooltip, Tabs) · `score/` (ScoreBar, ScoreRing con glow, WhyPopover, MetricRow, TrafficLight, VerdictBadge, SourceFooter con pill "dato antiguo") · `charts/` (RadarChart SVG ≤4 series neón, BarCompare, MonthStrip) · `country/` (CountryCard, CountryHeader, SectionNav, las 18 secciones, CountryMap lazy con capas ciudades/aeropuertos/corredores/rutas/sitios/excursiones, PlacesGrid + PlaceCard + PlaceDrawer, RouteTimeline con chips de etapa y avisos) · `compare/` (CompareTable, CompareRadar, ComparePicker) · `finder/` · `festivals/` · `layout/` (AppShell con top bar + nav + cesta de comparación, drawer móvil).

Stores: `useCompareStore` (≤4 ids, localStorage), `useFinderStore`, `useUiStore`. Filtros en URL (compartibles).

Antes de escribir las gráficas: invocar la skill `dataviz` para validar la paleta de 4 series (cian/magenta/lima/violeta sobre ink-950).

## Estructura del repo nuevo

```
C:\viajes-que-nunca-hicimos\
  .github/workflows/pages.yml
  public/  favicon.svg  placeholders/<categoria>.svg  .nojekyll
  src/
    main.tsx  App.tsx  router.tsx  styles/globals.css
    components/{ui,score,charts,country,compare,finder,festivals,layout}/
    pages/{Home,CountryList,Country,Compare,Finder,Festivals,Methodology,NotFound}Page.tsx
    lib/schema/{meta,country,place,festival,route,geo}.ts
    lib/scoring/{weights,circo,transport,cost,bcn,safety,language,digital,days,duke,tags,index}.ts
    lib/finder/rank.ts   lib/{format,dates,geo,constants,utils}.ts
    lib/providers/fx.ts  (interfaz FxProvider + StaticFxProvider; API en v2)
    data/registry.ts  data/candidates.ts  data/countries/<id>/…  data/__tests__/
    store/{useCompareStore,useFinderStore,useUiStore}.ts
  scripts/data-stats.ts
  audit/   CLAUDE.md   README.md
  vite.config.ts  vitest.config.ts  tailwind.config.js  postcss.config.js  tsconfig.json  package.json  .gitignore
```

Scripts: `dev`, `build: tsc --noEmit && vitest run && vite build`, `test`, `preview`, `data:stats`.

**Despliegue** (`.github/workflows/pages.yml`): on push a `main` → checkout → setup-node 22 (cache npm) → `npm ci` → `npm run build` → `actions/configure-pages@v5` → `actions/upload-pages-artifact@v3` (dist) → `actions/deploy-pages@v4`; permisos `pages: write, id-token: write`. Tras crear el repo: `gh api -X POST repos/DuleelHorror/viajes-que-nunca-hicimos/pages -f build_type=workflow` para fijar la fuente en "GitHub Actions".

## Fases de implementación (cada una deja la app desplegable)

1. **Scaffold + sistema de diseño**: carpeta nueva, `git init` + identidad local, Vite/TS/Tailwind, tokens copiados y ampliados (neón), fuentes, `ui/` + `score/`, `AppShell` responsive, router con páginas placeholder, `.gitignore`, `gh repo create --public`, primer push, workflow Pages verde.
2. **Modelo + motor**: esquemas Zod, `weights.ts`, scoring + días + tags con tests unitarios de fixtures; `registry.ts`; autoría de **Uzbekistán** y **Escocia** (perfiles opuestos: barato/ex-URSS vs caro/festival) para calibrar.
3. **Ficha de país**: 18 secciones, `CountryMap` (chunk lazy), drawers de sitio y ruta, `SourceFooter`, `WhyPopover`.
4. **Lista + filtros + Home**.
5. **Comparador** (tabla + radar + barras).
6. **Buscador + explorador de festivales** (funciones puras sobre el registro).
7. **Resto de países v1** ✅: Italia, Austria, Japón y Suecia (España y Chequia descartadas por el usuario el 2026-09-15). Verificación con `WebSearch` de los bloques volátiles de los 8 (visado/ETA para españoles, vuelos directos desde BCN, tipo de cambio) y recalibrado de pesos.
8. **Pulido**: metodología, pills de datos antiguos, estilos de impresión "dossier", README, `CLAUDE.md` del proyecto, `.audit` por fase (regla del usuario), memoria.

Objetivo de contenido v1 por país: 12-20 sitios circo (mín. 5 tier 1), 3-6 festivales, 2-3 rutas propuestas, 5-8 ciudades con transporte urbano, 3-6 corredores ferroviarios, 12 meses valorados con razones. Uzbekistán con Tashkent, Samarcanda, Bujará, Khiva, Nukus, Muynak, Mar de Aral (cementerio de barcos), Museo Savitsky, metro de Tashkent, tren Afrosiyob, y la etapa Nukus→Muynak marcada como "aviso" sin coche.

## Reglas de honestidad de datos

- Cada sección lleva `meta` con fuentes reales (oficiales/Wikipedia) y `confidence`; lo no verificado en web queda `confidence: "media"` o `"baja"` y se ve en UI.
- Precios en € marcados `estimate: true`; `override` siempre visible como "(manual)".
- Nunca inventar URLs de imágenes: `image` solo si se ha abierto la página de Commons (Zod exige `credit`, `license`, `sourcePage` si hay `url`).
- Números con `Intl.NumberFormat("es-ES")`; meses/estaciones desde `constants.ts`.

## Verificación

1. `npm run build` en verde (tsc + vitest + vite) en cada fase.
2. `npm run dev` → `http://localhost:5173/#/` en Playwright: home, `/pais/uz` (18 secciones, mapa con corredores y pins, drawer de sitio, popover "¿por qué?"), `/comparar?ids=uz,sco`, `/buscador` con mes=1 días=8 sinCoche=imprescindible (🔴 excluidos), `/festivales?mes=1` (Up Helly Aa), viewport móvil 390px (drawer de navegación, tarjetas apiladas).
3. Tests de deriva pasan para los 8 países; `data:stats uz` coincide con `placeStats`.
4. `npm run preview` (base relativa) → los assets y placeholders cargan bajo subruta.
5. Tras el push: workflow Pages verde y `https://duleelhorror.github.io/viajes-que-nunca-hicimos/#/pais/uz` funcionando; screenshot con Playwright.
6. `git log` muestra autor DuleelHorror, no Sonicon.
