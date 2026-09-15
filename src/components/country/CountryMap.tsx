import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Polyline, Popup, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import { CATEGORY_META, MODE_META, type TransportMode } from "@/lib/constants";
import type { CountryDetail, Place } from "@/lib/schema";
import { cn } from "@/lib/utils";
import Basemap from "./Basemap";

const LAYERS = ["ciudades", "aeropuertos", "tren", "rutas", "sitios", "excursiones"] as const;
type Layer = (typeof LAYERS)[number];
const LAYER_LABEL: Record<Layer, string> = {
  ciudades: "🏙 Ciudades",
  aeropuertos: "✈️ Aeropuertos",
  tren: "🚆 Líneas de tren",
  rutas: "🚌 Otras rutas",
  sitios: "🎪 Sitios circo",
  excursiones: "🎟 Excursiones",
};

const MODE_COLOR: Partial<Record<TransportMode, string>> = { bus: "#d97706", ferry: "#0891b2", avion: "#c026d3", taxi: "#e11d48", bolt: "#e11d48", tour: "#a78bfa", tranvia: "#22c55e" };

function pin(color: string, kind: "city" | "capital" | "airport" | "place" | "excursion", selected: boolean): L.DivIcon {
  const ring = selected ? "box-shadow:0 0 0 3px rgba(34,211,238,.8),0 0 12px rgba(34,211,238,.8);" : "";
  const html =
    kind === "capital"
      ? `<span style="display:block;width:16px;height:16px;border-radius:2px;background:#e3e6e9;border:2px solid #0a0a0b;transform:rotate(45deg);${ring}"></span>`
      : kind === "city"
        ? `<span style="display:block;width:12px;height:12px;border-radius:2px;background:#c0c5cb;border:2px solid #0a0a0b;${ring}"></span>`
        : kind === "airport"
          ? `<span style="display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:9999px;background:#141517;border:1.5px solid #c026d3;font-size:10px;">✈</span>`
          : kind === "excursion"
            ? `<span style="display:block;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:13px solid ${color};filter:drop-shadow(0 0 2px #000);${ring}"></span>`
            : `<span style="display:block;width:13px;height:13px;border-radius:9999px;background:${color};border:2px solid #0a0a0b;box-shadow:0 0 6px ${color}88;${ring}"></span>`;
  return L.divIcon({ className: "vq-pin", html, iconSize: [18, 18], iconAnchor: [9, 9], popupAnchor: [0, -10] });
}

function MapReady({ onReady }: { onReady: (m: L.Map) => void }) {
  const map = useMap();
  useEffect(() => {
    onReady(map);
    setTimeout(() => map.invalidateSize(), 100);
  }, [map, onReady]);
  return null;
}

/** Escala métrica: media app responde a "¿esto está lejos o me lo puedo hacer en el día?". */
function ScaleBar() {
  const map = useMap();
  useEffect(() => {
    const control = L.control.scale({ imperial: false, position: "bottomleft", maxWidth: 120 }).addTo(map);
    return () => {
      control.remove();
    };
  }, [map]);
  return null;
}

interface CountryMapProps {
  d: CountryDetail;
  selectedPlaceId?: string;
  onSelectPlace?: (id: string) => void;
  className?: string;
}

export default function CountryMap({ d, selectedPlaceId, onSelectPlace, className }: CountryMapProps) {
  const [enabled, setEnabled] = useState<Set<Layer>>(new Set(LAYERS));
  const [ready, setReady] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  const city = (id: string) => d.cities.find((c) => c.id === id);

  const railLines = useMemo(
    () =>
      d.railCorridors.map((r) => ({
        id: r.id,
        name: r.name,
        kind: r.kind,
        points: r.stops.map((s) => city(s)?.coords).filter(Boolean) as [number, number][],
      })),
    [d],
  );
  const otherRoutes = useMemo(
    () =>
      d.mapRoutes.map((r) => ({
        ...r,
        points: [city(r.from)?.coords, city(r.to)?.coords].filter(Boolean) as [number, number][],
      })),
    [d],
  );

  /**
   * Encuadre inicial sobre los datos del país, no sobre el centro/zoom guardado: así ningún país
   * abre con media pantalla de mar o de país vecino, y no hay que afinar el zoom a mano uno a uno.
   */
  useEffect(() => {
    const map = mapRef.current;
    if (!ready || !map) return;
    map.invalidateSize();
    const points = [...d.cities.map((c) => c.coords), ...d.places.map((p) => p.coords)];
    if (points.length === 0) return;
    map.fitBounds(L.latLngBounds(points).pad(0.1), { animate: false, maxZoom: 9 });
  }, [ready, d]);

  useEffect(() => {
    if (!selectedPlaceId || !mapRef.current) return;
    const p = d.places.find((x) => x.id === selectedPlaceId);
    if (p) mapRef.current.flyTo(p.coords, Math.max(mapRef.current.getZoom(), 8), { duration: 0.6 });
  }, [selectedPlaceId, d.places]);

  const toggle = (l: Layer) =>
    setEnabled((prev) => {
      const n = new Set(prev);
      n.has(l) ? n.delete(l) : n.add(l);
      return n;
    });

  const places = d.places.filter((p) => (p.transport.isExcursion ? enabled.has("excursiones") : enabled.has("sitios")));

  /** Reencuadra sobre lo que está visible ahora mismo, no sobre el país entero. */
  const fitVisible = () => {
    const map = mapRef.current;
    if (!map) return;
    const points: [number, number][] = [
      ...(enabled.has("ciudades") ? d.cities.map((c) => c.coords) : []),
      ...(enabled.has("aeropuertos") ? d.airports.map((a) => a.coords) : []),
      ...places.map((p) => p.coords),
    ];
    if (points.length === 0) return;
    map.flyToBounds(L.latLngBounds(points).pad(0.12), { duration: 0.6 });
  };

  return (
    <div className={cn("overflow-hidden rounded-sharp border border-ink-700", className)}>
      <div className="flex flex-wrap items-center gap-1.5 border-b border-ink-700 bg-ink-900/70 px-3 py-2">
        <span className="label-stencil mr-1">Capas</span>
        {LAYERS.map((l) => (
          <button key={l} type="button" onClick={() => toggle(l)} className={cn("chip", enabled.has(l) && "chip-on")} aria-pressed={enabled.has(l)}>
            {LAYER_LABEL[l]}
          </button>
        ))}
        <button type="button" onClick={fitVisible} className="chip ml-auto" title="Ajustar el mapa a lo que está marcado">
          ⤢ Encuadrar
        </button>
      </div>
      <div className="h-[420px] sm:h-[520px]">
        <MapContainer center={d.summary.map.center} zoom={d.summary.map.zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%", background: "#0a0a0b" }}>
          <MapReady
            onReady={(m) => {
              mapRef.current = m;
              setReady(true);
            }}
          />
          <Basemap />
          <ScaleBar />

          {enabled.has("tren") &&
            railLines.map((r) => (
              <Polyline key={r.id} positions={r.points} pathOptions={{ color: r.kind === "alta-velocidad" ? "#22d3ee" : r.kind === "nocturno" ? "#a78bfa" : "#0891b2", weight: r.kind === "alta-velocidad" ? 3.5 : 2.5, opacity: 0.85, dashArray: r.kind === "nocturno" ? "2 6" : undefined }}>
                <Tooltip sticky className="vq-label">
                  🚆 {r.name}
                </Tooltip>
              </Polyline>
            ))}
          {enabled.has("rutas") &&
            otherRoutes.map((r) => (
              <Polyline key={r.id} positions={r.points} pathOptions={{ color: MODE_COLOR[r.mode] ?? "#d97706", weight: 2, opacity: 0.8, dashArray: "6 6" }}>
                <Tooltip sticky className="vq-label">
                  {MODE_META[r.mode].emoji} {r.label}
                  {r.note ? ` · ${r.note}` : ""}
                </Tooltip>
              </Polyline>
            ))}

          {enabled.has("ciudades") &&
            d.cities.map((c) => (
              <Marker key={c.id} position={c.coords} icon={pin("#c0c5cb", c.isCapital ? "capital" : "city", false)}>
                <Tooltip permanent direction="right" offset={[8, 0]} className="vq-label">
                  {c.name}
                </Tooltip>
                <Popup>
                  <div className="min-w-[180px] text-xs">
                    <div className="text-sm font-semibold text-concrete-50">{c.name}</div>
                    <div className="mt-1">
                      {c.urban.modes.map((m) => MODE_META[m].emoji).join(" ")} urbano {c.urban.score}/10
                    </div>
                    <div className="text-concrete-400">{c.urban.ticket}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          {enabled.has("aeropuertos") &&
            d.airports.map((a) => (
              <Marker key={a.code} position={a.coords} icon={pin("#c026d3", "airport", false)}>
                <Popup>
                  <div className="text-xs">
                    <span className="font-mono font-bold text-neon-magenta">{a.code}</span> {a.name}
                    <div className="text-concrete-400">{a.international ? "internacional" : "doméstico"}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          {places.map((p) => (
            <PlaceMarker key={p.id} p={p} selected={p.id === selectedPlaceId} onSelect={onSelectPlace} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

function PlaceMarker({ p, selected, onSelect }: { p: Place; selected: boolean; onSelect?: (id: string) => void }) {
  const cat = CATEGORY_META[p.categories[0]];
  return (
    <Marker position={p.coords} icon={pin(cat.color, p.transport.isExcursion ? "excursion" : "place", selected)}>
      <Popup>
        <div className="min-w-[200px] text-xs">
          <div className="text-sm font-semibold text-concrete-50">
            {cat.emoji} {p.name}
          </div>
          <div className="text-concrete-400">
            {p.regionName} · tier {p.tier} · sin coche {p.scores.accesoSinCoche}/10
          </div>
          <p className="mt-1 line-clamp-3 text-concrete-300">{p.description}</p>
          <button type="button" onClick={() => onSelect?.(p.id)} className="mt-2 rounded-sharp border border-neon-cyan/60 px-2 py-0.5 text-neon-cyan hover:bg-neon-cyan/10">
            Abrir ficha
          </button>
        </div>
      </Popup>
    </Marker>
  );
}
