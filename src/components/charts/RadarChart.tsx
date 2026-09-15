import { useState } from "react";
import { SERIES_COLORS, SERIES_DASH, SERIES_TEXT } from "@/lib/constants";
import { fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";

export interface RadarAxis {
  key: string;
  label: string;
}
export interface RadarSeries {
  id: string;
  label: string;
  values: number[];
}

interface RadarChartProps {
  axes: RadarAxis[];
  series: RadarSeries[];
  max?: number;
  size?: number;
  className?: string;
  /** Mostrar leyenda (siempre que haya ≥ 2 series) */
  legend?: boolean;
}

/**
 * Radar SVG propio: ≤ 4 series con colores validados + trazo discontinuo (codificación secundaria),
 * rejilla recesiva, etiquetas directas en los vértices y tooltip por vértice (hover).
 */
export function RadarChart({ axes, series, max = 10, size = 340, className, legend = true }: RadarChartProps) {
  const [hover, setHover] = useState<{ s: number; a: number } | null>(null);
  // Margen horizontal extra para que las etiquetas de los ejes laterales no se recorten
  const pad = 48;
  const width = size + pad * 2;
  const cx = width / 2;
  const cy = size / 2;
  const r = size * 0.33;
  const n = axes.length;
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const pt = (i: number, v: number) => {
    const rr = (Math.max(0, Math.min(max, v)) / max) * r;
    return [cx + rr * Math.cos(angle(i)), cy + rr * Math.sin(angle(i))] as const;
  };
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg width={width} height={size} viewBox={`0 0 ${width} ${size}`} role="img" aria-label="Radar de puntuaciones" className="h-auto max-w-full">
        <defs>
          <filter id="radar-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {rings.map((k) => (
          <polygon
            key={k}
            points={axes.map((_, i) => pt(i, max * k).join(",")).join(" ")}
            fill="none"
            stroke="#2a2d31"
            strokeWidth={1}
            strokeDasharray={k === 1 ? undefined : "3 4"}
          />
        ))}
        {axes.map((a, i) => {
          const [x, y] = pt(i, max);
          const [lx, ly] = pt(i, max * 1.16);
          const anchor = Math.abs(lx - cx) < 12 ? "middle" : lx > cx ? "start" : "end";
          return (
            <g key={a.key}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="#2a2d31" strokeWidth={1} />
              <text x={lx} y={ly + 3} textAnchor={anchor} className="fill-concrete-400" style={{ fontSize: 10, fontFamily: "JetBrains Mono Variable, monospace", letterSpacing: "0.06em" }}>
                {a.label.toUpperCase()}
              </text>
            </g>
          );
        })}
        {series.map((s, si) => {
          const color = SERIES_COLORS[si % SERIES_COLORS.length];
          const dash = SERIES_DASH[si % SERIES_DASH.length];
          const points = s.values.map((v, i) => pt(i, v));
          const dim = hover != null && hover.s !== si;
          return (
            <g key={s.id} opacity={dim ? 0.35 : 1} style={{ transition: "opacity .15s" }}>
              <polygon points={points.map((p) => p.join(",")).join(" ")} fill={color} fillOpacity={0.12} stroke="none" />
              <polygon
                points={points.map((p) => p.join(",")).join(" ")}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeDasharray={dash || undefined}
                strokeLinejoin="round"
                filter="url(#radar-glow)"
              />
              {points.map(([x, y], ai) => (
                <g key={ai}>
                  <circle cx={x} cy={y} r={4} fill="#141517" stroke={color} strokeWidth={2} />
                  <circle
                    cx={x}
                    cy={y}
                    r={12}
                    fill="transparent"
                    onMouseEnter={() => setHover({ s: si, a: ai })}
                    onMouseLeave={() => setHover(null)}
                  >
                    <title>{`${s.label} · ${axes[ai].label}: ${fmtScore(s.values[ai])}`}</title>
                  </circle>
                </g>
              ))}
            </g>
          );
        })}
        {hover && (() => {
          const s = series[hover.s];
          const [x, y] = pt(hover.a, s.values[hover.a]);
          const label = `${s.label} · ${axes[hover.a].label}: ${fmtScore(s.values[hover.a])}`;
          const w = label.length * 6.2 + 16;
          const tx = Math.min(Math.max(x - w / 2, 4), width - w - 4);
          const ty = y - 34 < 4 ? y + 14 : y - 34;
          return (
            <g pointerEvents="none">
              <rect x={tx} y={ty} width={w} height={22} rx={2} fill="#0e0f10" stroke="#3d4247" />
              <text x={tx + 8} y={ty + 15} className="fill-concrete-100" style={{ fontSize: 10.5, fontFamily: "JetBrains Mono Variable, monospace" }}>
                {label}
              </text>
            </g>
          );
        })()}
      </svg>
      {legend && series.length >= 2 && (
        <ul className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-1">
          {series.map((s, si) => (
            <li key={s.id} className="flex items-center gap-1.5 text-xs text-concrete-300" onMouseEnter={() => setHover({ s: si, a: 0 })} onMouseLeave={() => setHover(null)}>
              <svg width="22" height="8" aria-hidden>
                <line x1="1" y1="4" x2="21" y2="4" stroke={SERIES_COLORS[si]} strokeWidth="2.5" strokeDasharray={SERIES_DASH[si] || undefined} />
              </svg>
              <span style={{ color: SERIES_TEXT[si] }}>{s.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
