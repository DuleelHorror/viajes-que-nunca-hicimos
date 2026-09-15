/**
 * Basemap.tsx — Capa base del mapa.
 *
 * Camino normal: MapLibre GL con `darkVectorStyle()` (vectorial → nítido en pantallas retina y
 * a cualquier zoom, y con nuestra paleta). Se inyecta como capa de Leaflet con
 * `@maplibre/maplibre-gl-leaflet`, así los pines, corredores y popups existentes siguen siendo
 * Leaflet puro y no hay que reescribir nada.
 *
 * Camino de respaldo: si no hay WebGL, si el bundle de MapLibre no carga o si el estilo no
 * termina de cargar, se cae a raster gris oscuro de Esri. Nunca se queda un hueco negro.
 */
import { useEffect, useState } from "react";
import { TileLayer, useMap } from "react-leaflet";
import type L from "leaflet";
import "maplibre-gl/dist/maplibre-gl.css";
// MapLibre resuelve su worker con `new URL(..., import.meta.url)`, que Vite no puede reescribir:
// en dev apunta a `.vite/deps` (404) y en build no llega a emitirse. Se lo damos ya resuelto.
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import { BASEMAP_ATTRIBUTION, RASTER_FALLBACK, darkVectorStyle } from "@/lib/mapStyle";

/** Margen antes de rendirse con el estilo vectorial (red lenta ≠ red caída). */
const STYLE_TIMEOUT_MS = 9000;

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function Basemap() {
  const map = useMap();
  const [mode, setMode] = useState<"vector" | "raster">(() => (hasWebGL() ? "vector" : "raster"));

  useEffect(() => {
    if (mode !== "vector") return;
    let alive = true;
    let layer: L.Layer | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const giveUp = () => {
      if (!alive) return;
      alive = false;
      if (layer) map.removeLayer(layer);
      setMode("raster");
    };

    void (async () => {
      try {
        const [{ maplibreGL }, { setWorkerUrl }] = await Promise.all([
          import("@maplibre/maplibre-gl-leaflet"),
          import("maplibre-gl"),
        ]);
        if (!alive) return;
        setWorkerUrl(maplibreWorkerUrl);
        const gl = maplibreGL({ style: darkVectorStyle(), attributionControl: false });
        layer = gl.addTo(map);
        timer = setTimeout(giveUp, STYLE_TIMEOUT_MS);
        gl.getMaplibreMap().once("style.load", () => clearTimeout(timer));
      } catch {
        giveUp();
      }
    })();

    map.attributionControl?.addAttribution(BASEMAP_ATTRIBUTION);

    return () => {
      alive = false;
      clearTimeout(timer);
      map.attributionControl?.removeAttribution(BASEMAP_ATTRIBUTION);
      if (layer) map.removeLayer(layer);
    };
  }, [map, mode]);

  if (mode === "vector") return null;
  return (
    <>
      <TileLayer url={RASTER_FALLBACK.url} attribution={RASTER_FALLBACK.attribution} maxZoom={RASTER_FALLBACK.maxZoom} />
      <TileLayer url={RASTER_FALLBACK.labels} maxZoom={RASTER_FALLBACK.maxZoom} />
    </>
  );
}
