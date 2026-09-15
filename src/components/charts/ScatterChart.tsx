import { useState } from "react";
import { cn } from "@/lib/utils";
import { fmtScore } from "@/lib/format";

export interface ScatterPoint {
  id: string;
  label: string;
  x: number;
  y: number;
  /** radio relativo (p. ej. días ideales) */
  r?: number;
  color?: string;
}

interface ScatterChartProps {
  points: ScatterPoint[];
  xLabel: string;
  yLabel: string;
  xMax: number;
  yMax: number;
  xMin?: number;
  yMin?: number;
  width?: number;
  height?: number;
  className?: string;
  onSelect?: (id: string) => void;
  formatX?: (v: number) => string;
  formatY?: (v: number) => string;
  /** Texto de los cuadrantes (opcional): [arriba-izq, arriba-der, abajo-izq, abajo-der] */
  quadrants?: [string, string, string, string];
  rLabel?: string;
}

/** Dispersión / burbujas SVG con etiquetas directas y tooltip. Una sola escala por eje. */
export function ScatterChart({
  points,
  xLabel,
  yLabel,
  xMax,
  yMax,
  xMin = 0,
  yMin = 0,
  width = 640,
  height = 400,
  className,
  onSelect,
  formatX = fmtScore,
  formatY = fmtScore,
  quadrants,
  rLabel,
}: ScatterChartProps) {
  const [hover, setHover] = useState<string | null>(null);
  const pad = { l: 44, r: 16, t: 16, b: 40 };
  const w = width - pad.l - pad.r;
  const h = height - pad.t - pad.b;
  const sx = (v: number) => pad.l + ((v - xMin) / (xMax - xMin)) * w;
  const sy = (v: number) => pad.t + h - ((v - yMin) / (yMax - yMin)) * h;
  const rMax = Math.max(1, ...points.map((p) => p.r ?? 1));
  const radius = (p: ScatterPoint) => 6 + ((p.r ?? 1) / rMax) * 14;
  const ticks = 4;

  return (
    <div className={cn("w-full", className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={`${yLabel} frente a ${xLabel}`}>
        {Array.from({ length: ticks + 1 }, (_, i) => {
          const xv = xMin + ((xMax - xMin) * i) / ticks;
          const yv = yMin + ((yMax - yMin) * i) / ticks;
          return (
            <g key={i}>
              <line x1={sx(xv)} y1={pad.t} x2={sx(xv)} y2={pad.t + h} stroke="#212327" />
              <line x1={pad.l} y1={sy(yv)} x2={pad.l + w} y2={sy(yv)} stroke="#212327" />
              <text x={sx(xv)} y={height - pad.b + 14} textAnchor="middle" className="fill-concrete-500" style={{ fontSize: 10, fontFamily: "JetBrains Mono Variable, monospace" }}>
                {formatX(xv)}
              </text>
              <text x={pad.l - 6} y={sy(yv) + 3} textAnchor="end" className="fill-concrete-500" style={{ fontSize: 10, fontFamily: "JetBrains Mono Variable, monospace" }}>
                {formatY(yv)}
              </text>
            </g>
          );
        })}
        {quadrants && (
          <g className="fill-concrete-500" style={{ fontSize: 9, fontFamily: "JetBrains Mono Variable, monospace", letterSpacing: "0.08em" }}>
            <text x={pad.l + 6} y={pad.t + 12}>{quadrants[0].toUpperCase()}</text>
            <text x={pad.l + w - 6} y={pad.t + 12} textAnchor="end">{quadrants[1].toUpperCase()}</text>
            <text x={pad.l + 6} y={pad.t + h - 6}>{quadrants[2].toUpperCase()}</text>
            <text x={pad.l + w - 6} y={pad.t + h - 6} textAnchor="end">{quadrants[3].toUpperCase()}</text>
          </g>
        )}
        <line x1={pad.l} y1={pad.t + h} x2={pad.l + w} y2={pad.t + h} stroke="#3d4247" />
        <line x1={pad.l} y1={pad.t} x2={pad.l} y2={pad.t + h} stroke="#3d4247" />
        <text x={pad.l + w / 2} y={height - 6} textAnchor="middle" className="fill-concrete-400" style={{ fontSize: 10, fontFamily: "JetBrains Mono Variable, monospace", letterSpacing: "0.12em" }}>
          {xLabel.toUpperCase()} →
        </text>
        <text x={12} y={pad.t + h / 2} textAnchor="middle" transform={`rotate(-90 12 ${pad.t + h / 2})`} className="fill-concrete-400" style={{ fontSize: 10, fontFamily: "JetBrains Mono Variable, monospace", letterSpacing: "0.12em" }}>
          {yLabel.toUpperCase()} →
        </text>
        {points.map((p) => {
          const c = p.color ?? "#0891b2";
          const active = hover === p.id;
          const dim = hover && !active;
          const rr = radius(p);
          return (
            <g key={p.id} opacity={dim ? 0.4 : 1} style={{ transition: "opacity .15s", cursor: onSelect ? "pointer" : "default" }} onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)} onClick={() => onSelect?.(p.id)}>
              <circle cx={sx(p.x)} cy={sy(p.y)} r={rr} fill={c} fillOpacity={0.35} stroke={c} strokeWidth={2} style={{ filter: active ? `drop-shadow(0 0 6px ${c})` : undefined }} />
              <circle cx={sx(p.x)} cy={sy(p.y)} r={rr + 1.5} fill="none" stroke="#141517" strokeWidth={1.5} />
              <text x={sx(p.x)} y={sy(p.y) - rr - 5} textAnchor="middle" className="fill-concrete-200" style={{ fontSize: 10.5, fontFamily: "Space Grotesk Variable, sans-serif", fontWeight: 600 }}>
                {p.label}
              </text>
              <title>{`${p.label}: ${xLabel} ${formatX(p.x)} · ${yLabel} ${formatY(p.y)}${p.r != null && rLabel ? ` · ${rLabel} ${p.r}` : ""}`}</title>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
