/**
 * mapStyle.ts — Estilo oscuro propio para el mapa base vectorial.
 *
 * Por qué no usamos tiles ya hechos: CARTO (dark_all) pasó a exigir API key y desde entonces
 * estampa "API KEY REQUIRED" sobre cada tile. Aquí servimos vectores de OpenFreeMap (esquema
 * OpenMapTiles, sin clave ni límites) y los pintamos con los tokens de `tailwind.config.js`,
 * así el mapa deja de ser un pegote genérico y va a juego con el resto de la app.
 *
 * Reglas de la paleta: la base es MUDA (grises fríos, contraste bajo) porque encima van los
 * pines y los corredores en neón. Nada del mapa base debe competir con ellos: cian y magenta
 * están reservados a nuestros datos.
 */
import type { ExpressionSpecification, StyleSpecification } from "maplibre-gl";

const OPENFREEMAP = "https://tiles.openfreemap.org";

/** OSM es ODbL: la atribución es obligatoria, no decorativa. */
export const BASEMAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · <a href="https://openfreemap.org">OpenFreeMap</a>';

/** Fallback sin WebGL: raster gris oscuro de Esri (sin clave, sin marca de agua). */
export const RASTER_FALLBACK = {
  url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  labels: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
  attribution: 'Teselas &copy; <a href="https://www.esri.com">Esri</a>',
  maxZoom: 16,
};

const C = {
  land: "#13161a",
  water: "#070b0f",
  coast: "#243239",
  waterway: "#122229",
  wood: "#141a16",
  grass: "#131715",
  ice: "#1c2026",
  sand: "#191713",
  residential: "#15161a",
  industrial: "#1a1618",
  building: "#1c1f24",
  roadMinor: "#191b1f",
  roadMajor: "#202428",
  roadMotorway: "#272b31",
  rail: "#343a41",
  railTies: "#4a525a",
  aeroway: "#2a2e34",
  borderCountry: "#4a5058",
  borderRegion: "#262a30",
  halo: "#07080a",
  labelCountry: "#8b9299",
  labelCapital: "#e2e6ea",
  labelCity: "#70767e",
  labelTown: "#5f656d",
  labelWater: "#37545e",
};

/** Etiquetas en español cuando el dato existe (Samarcanda, no Samarqand). */
const NAME_ES: ExpressionSpecification = ["coalesce", ["get", "name:es"], ["get", "name:latin"], ["get", "name"]];

const FONT_REGULAR = ["Noto Sans Regular"];
const FONT_BOLD = ["Noto Sans Bold"];
const FONT_ITALIC = ["Noto Sans Italic"];

/**
 * Estilo completo. Se construye en una función para no compartir el objeto entre instancias:
 * MapLibre muta el estilo que recibe.
 */
export function darkVectorStyle(): StyleSpecification {
  return {
    version: 8,
    name: "Viajes que nunca hicimos — archivo oscuro",
    glyphs: `${OPENFREEMAP}/fonts/{fontstack}/{range}.pbf`,
    sources: {
      omt: { type: "vector", url: `${OPENFREEMAP}/planet` },
    },
    layers: [
      { id: "fondo", type: "background", paint: { "background-color": C.land } },

      // --- Superficies ---
      {
        id: "bosque",
        type: "fill",
        source: "omt",
        "source-layer": "landcover",
        filter: ["match", ["get", "class"], ["wood", "forest"], true, false],
        paint: { "fill-color": C.wood, "fill-opacity": 0.6 },
      },
      {
        id: "hierba",
        type: "fill",
        source: "omt",
        "source-layer": "landcover",
        filter: ["match", ["get", "class"], ["grass", "meadow", "wetland"], true, false],
        paint: { "fill-color": C.grass, "fill-opacity": 0.5 },
      },
      {
        id: "hielo",
        type: "fill",
        source: "omt",
        "source-layer": "landcover",
        filter: ["==", ["get", "class"], "ice"],
        paint: { "fill-color": C.ice, "fill-opacity": 0.55 },
      },
      {
        id: "arena",
        type: "fill",
        source: "omt",
        "source-layer": "landcover",
        filter: ["==", ["get", "class"], "sand"],
        paint: { "fill-color": C.sand, "fill-opacity": 0.6 },
      },
      {
        id: "parque",
        type: "fill",
        source: "omt",
        "source-layer": "park",
        minzoom: 8,
        paint: { "fill-color": C.grass, "fill-opacity": 0.5 },
      },
      {
        id: "urbano",
        type: "fill",
        source: "omt",
        "source-layer": "landuse",
        minzoom: 6,
        filter: ["match", ["get", "class"], ["residential", "suburb", "neighbourhood"], true, false],
        paint: { "fill-color": C.residential, "fill-opacity": ["interpolate", ["linear"], ["zoom"], 6, 0.35, 12, 0.8] },
      },
      {
        // Polígonos industriales y ferroviarios: material temático del proyecto, se marcan aparte.
        id: "industrial",
        type: "fill",
        source: "omt",
        "source-layer": "landuse",
        minzoom: 9,
        filter: ["match", ["get", "class"], ["industrial", "railway"], true, false],
        paint: { "fill-color": C.industrial, "fill-opacity": 0.85 },
      },

      // --- Agua ---
      {
        id: "agua",
        type: "fill",
        source: "omt",
        "source-layer": "water",
        filter: ["match", ["geometry-type"], ["Polygon", "MultiPolygon"], true, false],
        paint: { "fill-color": C.water },
      },
      {
        // Línea de costa: sin ella, tierra y agua en oscuro se funden en una mancha.
        id: "costa",
        type: "line",
        source: "omt",
        "source-layer": "water",
        filter: ["match", ["geometry-type"], ["Polygon", "MultiPolygon"], true, false],
        paint: {
          "line-color": C.coast,
          "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.4, 8, 0.8, 14, 1.4],
          "line-opacity": 0.9,
        },
      },
      {
        id: "rios",
        type: "line",
        source: "omt",
        "source-layer": "waterway",
        minzoom: 7,
        paint: {
          "line-color": C.waterway,
          "line-width": ["interpolate", ["linear"], ["zoom"], 7, 0.5, 14, 2.5],
        },
      },

      // --- Edificios ---
      {
        id: "edificios",
        type: "fill",
        source: "omt",
        "source-layer": "building",
        minzoom: 14,
        paint: {
          "fill-color": C.building,
          "fill-opacity": ["interpolate", ["linear"], ["zoom"], 14, 0, 16, 0.85],
        },
      },

      // --- Viario (deliberadamente apagado: aquí no se conduce) ---
      {
        id: "via-menor",
        type: "line",
        source: "omt",
        "source-layer": "transportation",
        minzoom: 12,
        filter: ["match", ["get", "class"], ["minor", "service", "track"], true, false],
        paint: { "line-color": C.roadMinor, "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.5, 18, 5] },
      },
      {
        id: "via-principal",
        type: "line",
        source: "omt",
        "source-layer": "transportation",
        minzoom: 8,
        filter: ["match", ["get", "class"], ["primary", "secondary", "tertiary", "trunk"], true, false],
        paint: { "line-color": C.roadMajor, "line-width": ["interpolate", ["linear"], ["zoom"], 8, 0.5, 18, 8] },
      },
      {
        id: "autopista",
        type: "line",
        source: "omt",
        "source-layer": "transportation",
        minzoom: 5,
        filter: ["==", ["get", "class"], "motorway"],
        paint: { "line-color": C.roadMotorway, "line-width": ["interpolate", ["linear"], ["zoom"], 5, 0.5, 18, 10] },
      },
      {
        id: "aeropuerto-pista",
        type: "line",
        source: "omt",
        "source-layer": "aeroway",
        minzoom: 10,
        filter: ["match", ["get", "class"], ["runway", "taxiway"], true, false],
        paint: { "line-color": C.aeroway, "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.8, 15, 5] },
      },

      // --- Ferrocarril: el transporte que importa en esta app, visible pronto y con traviesas ---
      {
        id: "tren",
        type: "line",
        source: "omt",
        "source-layer": "transportation",
        minzoom: 8,
        filter: ["all", ["==", ["get", "class"], "rail"], ["!", ["has", "service"]]],
        paint: { "line-color": C.rail, "line-width": ["interpolate", ["linear"], ["zoom"], 8, 0.6, 16, 2.4] },
      },
      {
        id: "tren-traviesas",
        type: "line",
        source: "omt",
        "source-layer": "transportation",
        minzoom: 11,
        filter: ["all", ["==", ["get", "class"], "rail"], ["!", ["has", "service"]]],
        paint: {
          "line-color": C.railTies,
          "line-width": ["interpolate", ["linear"], ["zoom"], 11, 1, 16, 3.5],
          "line-dasharray": [0.3, 3],
          "line-opacity": 0.7,
        },
      },

      // --- Fronteras ---
      {
        id: "frontera-region",
        type: "line",
        source: "omt",
        "source-layer": "boundary",
        minzoom: 6,
        filter: ["all", [">=", ["get", "admin_level"], 3], ["<=", ["get", "admin_level"], 6], ["!=", ["get", "maritime"], 1]],
        paint: { "line-color": C.borderRegion, "line-width": ["interpolate", ["linear"], ["zoom"], 6, 0.5, 12, 1.4], "line-dasharray": [3, 3] },
      },
      {
        id: "frontera-pais",
        type: "line",
        source: "omt",
        "source-layer": "boundary",
        filter: ["all", ["<=", ["get", "admin_level"], 2], ["!=", ["get", "maritime"], 1]],
        paint: {
          "line-color": C.borderCountry,
          "line-width": ["interpolate", ["linear"], ["zoom"], 2, 0.6, 8, 1.6, 14, 2.6],
          "line-opacity": 0.85,
        },
      },

      // --- Etiquetas (secundarias: las nuestras van encima en mono y en neón) ---
      {
        id: "etiqueta-agua",
        type: "symbol",
        source: "omt",
        "source-layer": "water_name",
        minzoom: 4,
        layout: {
          "text-field": NAME_ES,
          "text-font": FONT_ITALIC,
          "text-size": ["interpolate", ["linear"], ["zoom"], 4, 10, 10, 13],
          "text-max-width": 8,
          "symbol-placement": "point",
        },
        paint: { "text-color": C.labelWater, "text-halo-color": C.halo, "text-halo-width": 1.2 },
      },
      {
        id: "etiqueta-pueblo",
        type: "symbol",
        source: "omt",
        "source-layer": "place",
        minzoom: 10,
        filter: ["match", ["get", "class"], ["village", "hamlet", "suburb"], true, false],
        layout: {
          "text-field": NAME_ES,
          "text-font": FONT_REGULAR,
          "text-size": ["interpolate", ["linear"], ["zoom"], 10, 10, 15, 12],
          "text-max-width": 9,
        },
        paint: { "text-color": C.labelTown, "text-halo-color": C.halo, "text-halo-width": 1.3, "text-halo-blur": 0.4 },
      },
      {
        id: "etiqueta-villa",
        type: "symbol",
        source: "omt",
        "source-layer": "place",
        minzoom: 8,
        filter: ["==", ["get", "class"], "town"],
        layout: {
          "text-field": NAME_ES,
          "text-font": FONT_REGULAR,
          "text-size": ["interpolate", ["linear"], ["zoom"], 8, 11, 14, 13],
          "text-max-width": 9,
        },
        paint: { "text-color": C.labelTown, "text-halo-color": C.halo, "text-halo-width": 1.3, "text-halo-blur": 0.4 },
      },
      {
        id: "etiqueta-ciudad",
        type: "symbol",
        source: "omt",
        "source-layer": "place",
        minzoom: 5,
        filter: ["all", ["==", ["get", "class"], "city"], ["!=", ["get", "capital"], 2]],
        layout: {
          "text-field": NAME_ES,
          "text-font": FONT_REGULAR,
          "text-size": ["interpolate", ["linear"], ["zoom"], 5, 11, 12, 15],
          "text-max-width": 9,
        },
        paint: { "text-color": C.labelCity, "text-halo-color": C.halo, "text-halo-width": 1.4, "text-halo-blur": 0.4 },
      },
      {
        id: "etiqueta-capital",
        type: "symbol",
        source: "omt",
        "source-layer": "place",
        minzoom: 4,
        filter: ["all", ["==", ["get", "class"], "city"], ["==", ["get", "capital"], 2]],
        layout: {
          "text-field": NAME_ES,
          "text-font": FONT_BOLD,
          "text-size": ["interpolate", ["linear"], ["zoom"], 4, 12, 12, 16],
          "text-letter-spacing": 0.04,
          "text-max-width": 9,
        },
        paint: { "text-color": C.labelCapital, "text-halo-color": C.halo, "text-halo-width": 1.6, "text-halo-blur": 0.4 },
      },
      {
        id: "etiqueta-pais",
        type: "symbol",
        source: "omt",
        "source-layer": "place",
        minzoom: 2,
        maxzoom: 9,
        filter: ["==", ["get", "class"], "country"],
        layout: {
          "text-field": NAME_ES,
          "text-font": FONT_BOLD,
          "text-size": ["interpolate", ["linear"], ["zoom"], 2, 10, 6, 14],
          "text-letter-spacing": 0.2,
          "text-transform": "uppercase",
          "text-max-width": 7,
        },
        paint: { "text-color": C.labelCountry, "text-halo-color": C.halo, "text-halo-width": 1.6, "text-halo-blur": 0.5 },
      },
    ],
  };
}
