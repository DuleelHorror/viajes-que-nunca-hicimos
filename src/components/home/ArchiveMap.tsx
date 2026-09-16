import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lock,
  LockOpen,
  Maximize2,
  Minus,
  Plus,
  Radar,
} from "lucide-react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import type { FeatureCollection } from "geojson";
import { COUNTRIES } from "@/data/registry";
import { CANDIDATES } from "@/data/candidates";
import {
  CATEGORY_META,
  LIGHT_META,
  REGION_LABEL,
  TAG_META,
  VERDICT_META,
  type PlaceCategory,
} from "@/lib/constants";
import { fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  CANDIDATE_NUMERIC,
  FICHA_NUMERIC,
  SCOTLAND,
  worldFeatures,
  type MapFeature,
} from "@/lib/geo/archiveMap";
import { Flag, flagCode } from "@/components/ui/Flag";
import { Button } from "@/components/ui/Button";
import { ScoreRing } from "@/components/score/ScoreRing";
import { VerdictBadge } from "@/components/score/VerdictBadge";

const W = 960;
const H = 520;
const CYAN = "#22d3ee";
const MAGENTA = "#e879f9";

interface Marked {
  id: string;
  name: string;
  kind: "ficha" | "radar";
  f: MapFeature;
}

/**
 * Mapa del archivo: siluetas del mundo en gris, los países con ficha en cian y los del radar en magenta
 * punteado. Pinchar uno lanza un pulso de radar sobre él y abre su ficha resumida al lado.
 * SVG puro con d3-geo: sin teselas, sin red, y con la paleta de la app.
 */
export default function ArchiveMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  // Zoom y arrastre, bloqueados por defecto para no mover el mapa sin querer al hacer scroll.
  const [unlocked, setUnlocked] = useState(false);
  const [view, setView] = useState({ k: 1, x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<{
    id: number;
    sx: number;
    sy: number;
    x: number;
    y: number;
    moved: boolean;
  } | null>(null);

  const zoomAt = (factor: number, px: number, py: number) =>
    setView((v) => {
      const k = Math.min(8, Math.max(1, v.k * factor));
      if (k === 1) return { k: 1, x: 0, y: 0 };
      const ratio = k / v.k;
      return { k, x: px - (px - v.x) * ratio, y: py - (py - v.y) * ratio };
    });
  // React registra onWheel como listener pasivo, así que preventDefault no
  // frena el scroll de la página: se engancha a mano, no pasivo, solo con el
  // mapa desbloqueado.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !unlocked) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = svg.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width) * W;
      const py = ((e.clientY - r.top) / r.height) * H;
      zoomAt(e.deltaY < 0 ? 1.2 : 1 / 1.2, px, py);
    };
    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => svg.removeEventListener("wheel", onWheel);
    // zoomAt solo usa setView, estable entre renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked]);
  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!unlocked) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = {
      id: e.pointerId,
      sx: e.clientX,
      sy: e.clientY,
      x: view.x,
      y: view.y,
      moved: false,
    };
  };
  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = ((e.clientX - d.sx) / r.width) * W;
    const dy = ((e.clientY - d.sy) / r.height) * H;
    if (Math.abs(e.clientX - d.sx) + Math.abs(e.clientY - d.sy) > 4)
      d.moved = true;
    setView((v) => ({ ...v, x: d.x + dx, y: d.y + dy }));
  };
  const onPointerUp = () => {
    // El clic que sigue a un arrastre no debe elegir país: se limpia el estado un instante después.
    setTimeout(() => {
      drag.current = null;
    }, 0);
  };
  const pick = (id: string) => {
    if (drag.current?.moved) return;
    setSelected(id);
  };
  const lock = () => {
    setUnlocked(false);
    setView({ k: 1, x: 0, y: 0 });
  };

  const { context, marked, path } = useMemo(() => {
    const all = worldFeatures();
    const byId = new Map(all.map((f) => [String(f.id), f]));
    const marked: Marked[] = [];
    for (const c of COUNTRIES) {
      const f = c.id === "sco" ? SCOTLAND : byId.get(FICHA_NUMERIC[c.id]);
      if (f) marked.push({ id: c.id, name: c.summary.name, kind: "ficha", f });
    }
    for (const c of CANDIDATES) {
      const f = byId.get(CANDIDATE_NUMERIC[c.id]);
      if (f) marked.push({ id: c.id, name: c.name, kind: "radar", f });
    }
    const focus: FeatureCollection = {
      type: "FeatureCollection",
      features: marked.map((m) => m.f),
    };
    const projection = geoNaturalEarth1().fitExtent(
      [
        [44, 36],
        [W - 44, H - 36],
      ],
      focus,
    );
    const path = geoPath(projection);
    // Solo se pintan de fondo los países que caen dentro del encuadre: el resto ni se calcula.
    const context = all.filter((f) => {
      const b = path.bounds(f);
      return (
        Number.isFinite(b[0][0]) &&
        b[1][0] > 0 &&
        b[0][0] < W &&
        b[1][1] > 0 &&
        b[0][1] < H
      );
    });
    return { context, marked, path };
  }, []);

  const active = marked.find((m) => m.id === selected) ?? null;
  const centroid = active ? path.centroid(active.f) : null;
  const hovered = marked.find((m) => m.id === hover) ?? null;
  const labelFor = hovered ?? active;
  const labelAt = labelFor ? path.centroid(labelFor.f) : null;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
      <div className="panel relative flex items-center overflow-hidden p-2 sm:p-3">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className={cn(
            "h-auto w-full select-none",
            unlocked && "cursor-grab active:cursor-grabbing",
          )}
          role="img"
          aria-label="Mapa de los países del archivo"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ touchAction: unlocked ? "none" : "auto" }}
        >
          <defs>
            <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
            {/* Fondo: el resto del mundo, mudo */}
            <g>
              {context.map((f, i) => (
                <path
                  key={f.id != null ? String(f.id) : `ctx-${i}`}
                  d={path(f) ?? undefined}
                  fill="#191b1f"
                  stroke="#0a0a0b"
                  strokeWidth={0.6}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>

            {/* Radar: magenta punteado */}
            <g>
              {marked
                .filter((m) => m.kind === "radar")
                .map((m) => (
                  <path
                    key={m.id}
                    d={path(m.f) ?? undefined}
                    role="button"
                    tabIndex={0}
                    aria-label={`${m.name} (en el radar)`}
                    fill={MAGENTA}
                    fillOpacity={
                      selected === m.id ? 0.4 : hover === m.id ? 0.28 : 0.12
                    }
                    stroke={MAGENTA}
                    strokeOpacity={0.7}
                    strokeWidth={selected === m.id ? 1.4 : 0.9}
                    strokeDasharray="3 2"
                    vectorEffect="non-scaling-stroke"
                    className={cn(
                      "cursor-pointer transition-[fill-opacity] duration-200",
                      selected === m.id && "map-selected",
                    )}
                    onMouseEnter={() => setHover(m.id)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => pick(m.id)}
                    onKeyDown={(e) => e.key === "Enter" && pick(m.id)}
                  />
                ))}
            </g>

            {/* Con ficha: cian con halo */}
            <g>
              {marked
                .filter((m) => m.kind === "ficha")
                .map((m) => (
                  <path
                    key={m.id}
                    d={path(m.f) ?? undefined}
                    role="button"
                    tabIndex={0}
                    aria-label={`${m.name} (con ficha)`}
                    fill={CYAN}
                    fillOpacity={
                      selected === m.id ? 0.45 : hover === m.id ? 0.34 : 0.18
                    }
                    stroke={CYAN}
                    strokeOpacity={0.95}
                    strokeWidth={selected === m.id ? 1.6 : 1}
                    filter={
                      selected === m.id || hover === m.id
                        ? "url(#map-glow)"
                        : undefined
                    }
                    vectorEffect="non-scaling-stroke"
                    className={cn(
                      "cursor-pointer transition-[fill-opacity] duration-200",
                      selected === m.id && "map-selected",
                    )}
                    onMouseEnter={() => setHover(m.id)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => pick(m.id)}
                    onKeyDown={(e) => e.key === "Enter" && pick(m.id)}
                  />
                ))}
            </g>

            {/* Pulso de radar sobre el país elegido; la key reinicia la animación en cada clic */}
            {active && centroid && (
              <g
                key={active.id}
                transform={`translate(${centroid[0]} ${centroid[1]}) scale(${1 / view.k})`}
                pointerEvents="none"
              >
                {[0, 0.45, 0.9].map((delay) => (
                  <circle
                    key={delay}
                    r={34}
                    fill="none"
                    stroke={active.kind === "ficha" ? CYAN : MAGENTA}
                    strokeWidth={1.2}
                    className="map-ping"
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
                <circle r={3} fill={active.kind === "ficha" ? CYAN : MAGENTA} />
              </g>
            )}

            {/* Etiqueta del país bajo el ratón o elegido */}
            {labelFor && labelAt && (
              <text
                x={labelAt[0]}
                y={labelAt[1] - 12}
                textAnchor="middle"
                pointerEvents="none"
                className="font-sans font-semibold"
                fontSize={13 / view.k}
                fill="#f6f7f8"
                stroke="#0a0a0b"
                strokeWidth={3.5 / view.k}
                paintOrder="stroke"
              >
                {labelFor.name}
              </text>
            )}
          </g>
        </svg>

        {/* Candado: el mapa no se mueve ni hace zoom hasta que lo pides */}
        <div className="absolute right-3 top-3 flex items-center gap-1">
          {unlocked && (
            <>
              <button
                type="button"
                className="chip h-7 w-7 justify-center px-0"
                onClick={() => zoomAt(1.4, W / 2, H / 2)}
                aria-label="Acercar"
                title="Acercar"
              >
                <Plus size={13} />
              </button>
              <button
                type="button"
                className="chip h-7 w-7 justify-center px-0"
                onClick={() => zoomAt(1 / 1.4, W / 2, H / 2)}
                aria-label="Alejar"
                title="Alejar"
              >
                <Minus size={13} />
              </button>
              <button
                type="button"
                className="chip h-7 w-7 justify-center px-0"
                onClick={() => setView({ k: 1, x: 0, y: 0 })}
                aria-label="Reencuadrar"
                title="Reencuadrar"
              >
                <Maximize2 size={13} />
              </button>
            </>
          )}
          <button
            type="button"
            className={cn("chip h-7", unlocked && "chip-on")}
            onClick={() => (unlocked ? lock() : setUnlocked(true))}
            aria-pressed={unlocked}
            title={
              unlocked
                ? "Bloquear el mapa"
                : "Desbloquear para mover y hacer zoom"
            }
          >
            {unlocked ? <LockOpen size={13} /> : <Lock size={13} />}
            <span className="hidden sm:inline">
              {unlocked ? "Bloquear" : "Mover y zoom"}
            </span>
          </button>
        </div>

        <div className="pointer-events-none absolute bottom-3 left-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-concrete-300">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sharp"
              style={{
                background: `${CYAN}55`,
                boxShadow: `0 0 0 1px ${CYAN}`,
              }}
            />{" "}
            con ficha ({COUNTRIES.length})
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sharp"
              style={{
                background: `${MAGENTA}33`,
                boxShadow: `0 0 0 1px ${MAGENTA}`,
              }}
            />{" "}
            en el radar ({CANDIDATES.length})
          </span>
        </div>
      </div>

      {/* El panel ocupa exactamente la altura del mapa (absoluto dentro de la columna) y hace scroll si no cabe:
          así elegir un país nunca estira la fila ni mueve el resto de la página. */}
      <div className="relative h-[27rem] lg:h-auto lg:min-h-[29rem]">
        <div className="absolute inset-0 overflow-y-auto">
          {active ? (
            <div key={active.id} className="animate-slide-in-right h-full">
              {active.kind === "ficha" ? (
                <FichaPanel id={active.id} />
              ) : (
                <RadarPanel id={active.id} />
              )}
            </div>
          ) : (
            <div className="panel flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <Radar size={28} className="animate-pulse-glow text-neon-cyan" />
              <div className="text-lg font-semibold text-concrete-50">
                Pincha un país iluminado
              </div>
              <p className="max-w-xs text-sm text-concrete-400">
                Los de cian tienen ficha completa. Los de magenta están en el
                radar: pintan bien, pero aún no los hemos estudiado.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FichaPanel({ id }: { id: string }) {
  const c = COUNTRIES.find((x) => x.id === id);
  if (!c) return null;
  const s = c.summary;
  const light = LIGHT_META[c.noCar.light];
  return (
    <article className="panel-neon flex h-full flex-col p-4">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <div className="label-stencil text-neon-cyan/90">
            {REGION_LABEL[s.region]}
            {s.parentState && ` · ${s.parentState}`}
          </div>
          <h3 className="mt-1 flex items-center gap-2 text-2xl leading-tight">
            <Flag code={flagCode(s)} name={s.name} size={22} />
            {s.name}
          </h3>
          <p className="mt-2 text-sm text-concrete-200">{s.tagline}</p>
        </div>
        <ScoreRing value={c.duke.value} size={72} stroke={6} sub="Duke" />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <VerdictBadge verdict={c.duke.verdict} size="sm" />
        <span className="text-sm text-concrete-200">
          {VERDICT_META[c.duke.verdict].phrase}
        </span>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-1.5 text-sm">
        <Kpi k="Yo me quedaría" v={`${c.days.ideal} días`} />
        <Kpi k="Nivel de circo" v={`${fmtScore(c.circo.value)} / 10`} />
        <Kpi
          k="Sin coche"
          v={`${light.emoji} ${fmtScore(c.noCar.value)}`}
          color={light.color}
        />
        <Kpi k="Precios" v={`${fmtScore(c.cost.value)} / 10`} />
      </dl>
      <div className="mt-2 flex flex-wrap gap-1">
        {c.tags.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-sharp border border-ink-700 bg-ink-900/60 px-1.5 py-0.5 text-xs text-concrete-300"
          >
            {TAG_META[t].emoji} {TAG_META[t].label}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-3 text-xs text-concrete-400">
        <span>
          {s.placeStats.total} sitios circo · {s.festivals.length} festivales
        </span>
        <Link to={`/pais/${c.id}`}>
          <Button variant="neon" size="sm">
            Abrir la ficha <ArrowRight size={14} />
          </Button>
        </Link>
      </div>
    </article>
  );
}

function RadarPanel({ id }: { id: string }) {
  const c = CANDIDATES.find((x) => x.id === id);
  if (!c) return null;
  return (
    <article className="panel flex h-full flex-col border-neon-magenta/40 p-4">
      <div className="label-stencil text-neon-magenta/90">
        En el radar · todavía sin ficha
      </div>
      <h3 className="mt-1 flex items-center gap-2 text-2xl leading-tight">
        <Flag code={c.id} name={c.name} size={22} />
        {c.name}
      </h3>
      <p className="mt-3 text-base text-concrete-100">{c.why}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {c.hooks.map((h) => {
          const m = CATEGORY_META[h as PlaceCategory];
          return m ? (
            <span
              key={h}
              className={cn(
                "rounded-sharp border px-1.5 py-0.5 text-xs",
                m.badge,
              )}
            >
              {m.emoji} {m.label}
            </span>
          ) : null;
        })}
      </div>
      <p className="mt-auto pt-4 text-xs text-concrete-400">
        Pinta bien para nuestra forma de viajar. Cuando tenga ficha, se
        iluminará en cian.
      </p>
    </article>
  );
}

function Kpi({ k, v, color }: { k: string; v: string; color?: string }) {
  return (
    <div className="rounded-sharp border border-ink-700/70 bg-ink-900/50 px-3 py-1.5">
      <dt className="label-stencil">{k}</dt>
      <dd
        className="mt-0.5 font-semibold text-concrete-50"
        style={color ? { color } : undefined}
      >
        {v}
      </dd>
    </div>
  );
}
