import { useMemo, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { CATEGORY_META, MODE_META, PLACE_CATEGORIES, type PlaceCategory } from "@/lib/constants";
import { WORTH_DETOUR_META, type CountryDetail, type Place } from "@/lib/schema";
import { fmtEur, fmtScore, googleMapsLink } from "@/lib/format";
import { noCarVoice } from "@/lib/voice";
import { cn } from "@/lib/utils";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Badge, CategoryBadge, ModeBadge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Field";
import { Drawer } from "@/components/ui/Drawer";
import { EmptyState } from "@/components/ui/Misc";
import { ScoreBar, scoreTone } from "@/components/score/ScoreBar";
import { SourceFooter } from "@/components/score/SourceFooter";
import { cityName } from "./Logistics";

const TIER_META = {
  1: { label: "Justifica el viaje", cls: "border-neon-magenta/60 text-neon-magenta" },
  2: { label: "Material bueno", cls: "border-neon-cyan/50 text-neon-cyan" },
  3: { label: "Si pasas cerca", cls: "border-ink-600 text-concrete-300" },
} as const;

/** Placeholder visual por categoría (sin fotos inventadas). */
export function PlaceArt({ p, className }: { p: Place; className?: string }) {
  const cat = CATEGORY_META[p.categories[0]];
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden rounded-sharp border border-ink-700", className)}
      style={{
        background: `radial-gradient(120% 100% at 20% 0%, ${cat.color}33, transparent 55%), repeating-linear-gradient(135deg, ${cat.color}14 0 6px, transparent 6px 14px), #0e0f10`,
      }}
      aria-hidden
    >
      <span className="text-4xl drop-shadow-[0_0_12px_rgba(0,0,0,.8)]">{cat.emoji}</span>
      <span className="absolute bottom-1 right-2 text-xs text-concrete-500">sin foto todavía · {cat.label}</span>
    </div>
  );
}

export function PlaceCard({ p, onOpen, cityLabel }: { p: Place; onOpen: (id: string) => void; cityLabel?: string }) {
  const tier = TIER_META[p.tier];
  const access = scoreTone(p.scores.accesoSinCoche);
  return (
    <article className="panel group flex cursor-pointer flex-col p-3 transition-colors hover:border-ink-500" onClick={() => onOpen(p.id)}>
      <PlaceArt p={p} className="h-28 w-full" />
      <div className="mt-2 flex items-start justify-between gap-2">
        <h3 className="text-lg leading-tight group-hover:text-neon-cyan">{p.name}</h3>
        <Badge className={cn("shrink-0", tier.cls)}>{tier.label}</Badge>
      </div>
      <div className="text-xs text-concrete-400">
        {cityLabel ?? p.regionName}
        {cityLabel && ` · ${p.regionName}`}
      </div>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {p.categories.map((c) => (
          <CategoryBadge key={c} category={c} short={p.categories.length > 2} />
        ))}
      </div>
      <p className="mt-2 line-clamp-3 text-sm text-concrete-200">{p.description}</p>
      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
        <ScoreBar label="Rareza" value={p.scores.rareza} size="sm" />
        <ScoreBar label="Impacto" value={p.scores.impactoVisual} size="sm" />
        <ScoreBar label="Historia" value={p.scores.valorHistorico} size="sm" />
        <ScoreBar label="Sin coche" value={p.scores.accesoSinCoche} size="sm" />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-ink-800 pt-2 text-xs text-concrete-300">
        <span>⏱ {p.timeNeeded}</span>
        <span>💶 {p.price.free ? "gratis" : p.price.eur != null ? fmtEur(p.price.eur) : p.price.note ?? "—"}</span>
        <span style={{ color: access.color }} title={noCarVoice(p.scores.accesoSinCoche)}>
          {p.transport.modes.slice(0, 3).map((m) => MODE_META[m].emoji).join(" ")}
          {p.transport.needsTour && " 🎟"}
        </span>
        <span className="ml-auto font-medium text-concrete-100">
          {WORTH_DETOUR_META[p.worthDetour].emoji} {WORTH_DETOUR_META[p.worthDetour].label}
        </span>
      </div>
    </article>
  );
}

export function PlaceDrawer({ p, d, open, onClose }: { p?: Place; d: CountryDetail; open: boolean; onClose: () => void }) {
  if (!p) return null;
  return (
    <Drawer open={open} onClose={onClose} title={p.name} kicker={`${p.cityId ? cityName(d, p.cityId) + " · " : ""}${p.regionName}`} width="lg">
      <PlaceArt p={p} className="h-40 w-full" />
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {p.categories.map((c) => (
          <CategoryBadge key={c} category={c} />
        ))}
        <Badge className={TIER_META[p.tier].cls}>{TIER_META[p.tier].label}</Badge>
      </div>
      <p className="mt-3 text-base text-concrete-100">{p.description}</p>
      <div className="mt-3 rounded-sharp border border-neon-magenta/30 bg-neon-magenta/5 px-3 py-2">
        <div className="label-stencil text-neon-magenta/90">Por qué te va a gustar</div>
        <p className="mt-1 text-base text-concrete-100">{p.whyMe}</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
        <ScoreBar label="Rareza" value={p.scores.rareza} />
        <ScoreBar label="Impacto visual" value={p.scores.impactoVisual} />
        <ScoreBar label="Valor histórico" value={p.scores.valorHistorico} />
        <ScoreBar label="Llegar sin coche" value={p.scores.accesoSinCoche} hint={noCarVoice(p.scores.accesoSinCoche)} />
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
        <Item k="Te lleva" v={p.timeNeeded} />
        <Item k="Cuesta" v={p.price.free ? "Gratis" : p.price.eur != null ? `${fmtEur(p.price.eur)}${p.price.note ? ` · ${p.price.note}` : ""}` : p.price.note ?? "—"} />
        <Item k="Mejor época" v={p.bestSeason.join(", ")} />
        <Item k="¿Merece el desvío?" v={`${WORTH_DETOUR_META[p.worthDetour].emoji} ${WORTH_DETOUR_META[p.worthDetour].label}`} />
        <Item k="Excursión" v={p.transport.isExcursion ? "Sí, desde una ciudad base" : "No, está en la ciudad"} />
        <Item k="Hace falta tour" v={p.transport.needsTour ? "Sí, no hay otra" : "No"} />
      </dl>
      <div className="mt-4">
        <div className="label-stencil mb-1">Cómo llegar sin coche</div>
        <div className="mb-2 flex flex-wrap gap-1">
          {p.transport.modes.map((m) => (
            <ModeBadge key={m} mode={m} />
          ))}
        </div>
        <p className="text-sm text-concrete-200">{p.transport.howToGet}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <a href={googleMapsLink(p.coords[0], p.coords[1])} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-sharp border border-ink-600 px-2 py-1 text-xs text-concrete-200 hover:border-neon-cyan/60 hover:text-neon-cyan">
          <MapPin size={12} /> Abrir en Google Maps
        </a>
        {p.links?.map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-sharp border border-ink-600 px-2 py-1 text-xs text-concrete-200 hover:border-neon-cyan/60 hover:text-neon-cyan">
            {l.label} <ExternalLink size={11} />
          </a>
        ))}
      </div>
      <SourceFooter meta={p.meta} />
    </Drawer>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="label-stencil">{k}</dt>
      <dd className="text-concrete-50">{v}</dd>
    </div>
  );
}

type SortKey = "tier" | "rareza" | "impacto" | "acceso";

export function PlacesSection({ d, onOpen }: { d: CountryDetail; onOpen: (id: string) => void }) {
  const [cats, setCats] = useState<Set<PlaceCategory>>(new Set());
  const [sort, setSort] = useState<SortKey>("tier");
  const present = useMemo(() => PLACE_CATEGORIES.filter((c) => d.places.some((p) => p.categories.includes(c))), [d.places]);
  const list = useMemo(() => {
    const filtered = d.places.filter((p) => cats.size === 0 || p.categories.some((c) => cats.has(c)));
    const by: Record<SortKey, (p: Place) => number> = {
      tier: (p) => -p.tier * 100 + p.scores.rareza,
      rareza: (p) => p.scores.rareza,
      impacto: (p) => p.scores.impactoVisual,
      acceso: (p) => p.scores.accesoSinCoche,
    };
    return filtered.sort((a, b) => by[sort](b) - by[sort](a));
  }, [d.places, cats, sort]);

  const toggle = (c: PlaceCategory) =>
    setCats((prev) => {
      const n = new Set(prev);
      n.has(c) ? n.delete(c) : n.add(c);
      return n;
    });

  const t1 = d.places.filter((p) => p.tier === 1).length;

  return (
    <section className="space-y-4">
      <SectionHeader id="sitios" title="Sitios circo" kicker={`15 · ${d.places.length} sitios raros, turbios o gigantes · ${t1} justifican el viaje por sí solos`} />
      <Panel className="flex flex-wrap items-center gap-2 p-3">
        {present.map((c) => (
          <Chip key={c} on={cats.has(c)} onClick={() => toggle(c)} title={CATEGORY_META[c].label}>
            <span aria-hidden>{CATEGORY_META[c].emoji}</span> {CATEGORY_META[c].label}
            <span className="tabular text-concrete-500">{d.places.filter((p) => p.categories.includes(c)).length}</span>
          </Chip>
        ))}
        <div className="ml-auto flex items-center gap-1">
          <span className="label-stencil mr-1">Ordenar por</span>
          {(["tier", "rareza", "impacto", "acceso"] as SortKey[]).map((k) => (
            <Chip key={k} on={sort === k} onClick={() => setSort(k)}>
              {{ tier: "Lo gordo primero", rareza: "Más raro", impacto: "Más espectacular", acceso: "Más fácil sin coche" }[k]}
            </Chip>
          ))}
        </div>
      </Panel>
      {list.length === 0 ? (
        <EmptyState title="Con esos filtros no queda nada" description="Quita alguna categoría. Todos los sitios están ahí, solo los has escondido." />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <PlaceCard key={p.id} p={p} onOpen={onOpen} cityLabel={p.cityId ? cityName(d, p.cityId) : undefined} />
          ))}
        </div>
      )}
      <p className="text-sm text-concrete-400">
        Llegar sin coche: {fmtScore(d.summary.placeStats.accesoSinCocheMedio)}/10 de media (pesan más los sitios gordos) · {d.summary.placeStats.excursiones} son excursiones desde una ciudad base.
      </p>
    </section>
  );
}
