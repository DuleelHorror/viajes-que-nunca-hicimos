# Centro de control de los viajes que nunca hicimos

Comparador de países como destinos de viaje para una forma muy concreta de viajar: **muchos días, sin conducir, saliendo de Barcelona**, buscando *sitios circo* (historia oscura, restos soviéticos, brutalismo, lugares abandonados, catástrofes, folclore y festivales raros).

Cada país responde a una sola pregunta: *¿merece la pena ir, cuántos días, cuándo, cuánto cuesta, se puede recorrer sin coche y qué cosas memorables o raras hay?*

**Web:** https://duleelhorror.github.io/viajes-que-nunca-hicimos/

## Qué hay dentro

- **Ficha de país** con 18 secciones: resumen, puntuaciones (Duke Score 0-100 y Circo Score 0-10 con desglose "¿por qué?"), días ideales, transporte público y viabilidad sin coche con semáforo, mapa con corredores ferroviarios y sitios, coste, vuelos desde BCN, documentación para españoles, seguridad, política, digital, idioma, mes a mes, calendario de eventos, sitios circo, rutas propuestas etapa a etapa, pros y contras, veredicto.
- **Países**: rejilla con filtros (sin coche, barato, soviético, oscuro, festivales, invierno, mejor para 5/7/10/15 días…).
- **Comparador**: 2-4 países, radar de perfil circo y logístico, tabla con 🏆 por métrica.
- **Buscador de viajes**: mes + días + presupuesto + sin coche + temperatura + intereses → ranking explicado.
- **Festivales**: explorador cruzado por mes y categoría.
- **Gráficas**: rankings, dispersión circo/coste, sin coche/transporte, radar de los mejores, calendario cruzado, rangos de días.
- **Metodología**: todos los pesos y fórmulas, renderizados desde el mismo código que usa la app.

## Stack

Vite 5 · React 18 · TypeScript · Tailwind 3 · react-router 6 (HashRouter) · react-leaflet + Leaflet con base vectorial MapLibre (estilo oscuro propio sobre OpenFreeMap, sin API key) · zustand · zod · vitest · gráficas SVG propias. Sin backend, sin login: todo estático en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc + vitest + vite build
npm run test
npm run data:stats -- uz      # imprime placeStats calculado para pegar en summary.ts
npx tsx scripts/print-scores.ts   # puntuaciones de todos los países (calibración)
```

## Añadir un país

1. Crear `src/data/countries/<id>/` copiando la estructura de `uz`: `summary.ts`, `festivals.ts`, `places.ts`, `geo.ts`, `routes.ts`, `sections.ts`, `index.ts`.
2. Registrar el summary y el loader en `src/data/registry.ts` y añadirlo al array de `src/data/__tests__/consistency.test.ts`.
3. Ejecutar `npm run data:stats -- <id>` y pegar el bloque `placeStats` en `summary.ts`.
4. `npm run build`: los tests de deriva comprueban referencias, meses, secciones volátiles y esquemas Zod.

## Honestidad de los datos

Cada sección lleva `meta` con fuentes, fecha, confianza y volatilidad. Los datos volátiles (visados, seguridad, vuelos, cambio, precios, política, eventos, trenes) caducan a los 6 meses y la app lo avisa. Los precios son estimaciones. No se inventan fotos: las tarjetas de sitios llevan un placeholder por categoría hasta que exista una imagen con licencia y crédito verificados.
