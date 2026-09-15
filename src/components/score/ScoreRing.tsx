import { cn } from "@/lib/utils";
import { fmtInt, fmtScore } from "@/lib/format";
import { scoreTone } from "./ScoreBar";

interface ScoreRingProps {
  value: number;
  max?: number;
  size?: number;
  stroke?: number;
  label?: string;
  sub?: string;
  className?: string;
  decimals?: 0 | 1;
}

/** Anillo SVG con glow para números hero (Duke Score, Circo Score). */
export function ScoreRing({ value, max = 100, size = 128, stroke = 8, label, sub, className, decimals = 0 }: ScoreRingProps) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const ratio = Math.max(0, Math.min(1, value / max));
  const tone = scoreTone((value / max) * 10);
  const id = `ring-${Math.round(value * 100)}-${size}`;
  return (
    <div className={cn("relative inline-flex flex-col items-center", className)} style={{ width: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${label ?? "Puntuación"} ${fmtScore(value)} de ${max}`}>
        <defs>
          <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#2a2d31" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={tone.color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${c * ratio} ${c * (1 - ratio)}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          filter={`url(#${id})`}
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <div className={cn("font-display font-bold tabular leading-none", tone.text, tone.glow)} style={{ fontSize: size * 0.3 }}>
          {decimals === 0 ? fmtInt(value) : fmtScore(value)}
        </div>
        {sub && <div className="label-stencil mt-1">{sub}</div>}
      </div>
      {label && <div className="label-stencil mt-2 text-center">{label}</div>}
    </div>
  );
}
