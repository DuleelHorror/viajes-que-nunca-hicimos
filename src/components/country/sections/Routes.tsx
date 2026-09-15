import { MODE_META } from "@/lib/constants";
import type { CountryDetail, TripRoute } from "@/lib/schema";
import { fmtDuration } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Drawer } from "@/components/ui/Drawer";
import { LegDifficulty } from "@/components/score/TrafficLight";
import { SourceFooter } from "@/components/score/SourceFooter";
import { cityName } from "./Logistics";

export function RouteTimeline({ r, d, onOpenPlace }: { r: TripRoute; d: CountryDetail; onOpenPlace?: (id: string) => void }) {
  const placeName = (id: string) => d.places.find((p) => p.id === id)?.name ?? id;
  return (
    <ol className="relative ml-3 border-l border-ink-600 pl-6">
      <li className="relative pb-5">
        <span className="absolute -left-[31px] top-0 flex h-5 w-5 items-center justify-center rounded-full border border-neon-cyan bg-ink-900 text-xs">✈️</span>
        <div className="text-base font-semibold text-concrete-50">Barcelona (BCN)</div>
        <div className="text-xs text-concrete-400">Salimos de casa</div>
      </li>
      {r.stops.map((s, i) => (
        <li key={`${s.cityId}-${i}`} className="relative pb-5 last:pb-0">
          {s.legFromPrevious && (
            <div className={cn("-mt-3 mb-2 inline-flex flex-wrap items-center gap-2 rounded-sharp border px-2 py-1 text-xs", s.legFromPrevious.noCarDifficulty === "ok" ? "border-ink-700 text-concrete-200" : s.legFromPrevious.noCarDifficulty === "aviso" ? "border-amber-500/40 bg-amber-500/5 text-amber-100" : "border-red-500/40 bg-red-500/5 text-red-100")}>
              <span aria-hidden>{MODE_META[s.legFromPrevious.mode].emoji}</span>
              <span>{MODE_META[s.legFromPrevious.mode].label}</span>
              <span className="tabular">{fmtDuration(s.legFromPrevious.durationMin)}</span>
              {s.legFromPrevious.price && <span>· {s.legFromPrevious.price}</span>}
              {s.legFromPrevious.bookAhead && <span>· reserva antes</span>}
              <LegDifficulty level={s.legFromPrevious.noCarDifficulty} />
              {s.legFromPrevious.note && <span className="basis-full text-concrete-300">{s.legFromPrevious.note}</span>}
            </div>
          )}
          <span className="absolute -left-[31px] top-0 flex h-5 w-5 items-center justify-center rounded-full border border-neon-magenta bg-ink-900 font-mono text-xs text-neon-magenta">{i + 1}</span>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-base font-semibold text-concrete-50">{cityName(d, s.cityId)}</span>
            <span className="tabular text-xs text-concrete-400">{s.nights === 0 ? "de paso" : `${s.nights} ${s.nights === 1 ? "noche" : "noches"}`}</span>
          </div>
          {s.note && <div className="text-sm text-concrete-300">{s.note}</div>}
          {s.placeIds.length > 0 && (
            <ul className="mt-1 flex flex-wrap gap-1">
              {s.placeIds.map((id) => (
                <li key={id}>
                  <button type="button" onClick={() => onOpenPlace?.(id)} className="rounded-sharp border border-ink-700 bg-ink-900/60 px-1.5 py-0.5 text-xs text-concrete-200 hover:border-neon-cyan/50 hover:text-neon-cyan">
                    {placeName(id)}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li className="relative pt-5">
        <span className="absolute -left-[31px] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-neon-cyan bg-ink-900 text-xs">🏠</span>
        <div className="text-base font-semibold text-concrete-50">Vuelta a Barcelona</div>
        <div className="text-xs text-concrete-400">Con la tarjeta de memoria llena</div>
      </li>
    </ol>
  );
}

export function RoutesSection({ d, onOpen }: { d: CountryDetail; onOpen: (id: string) => void }) {
  return (
    <section className="space-y-4">
      <SectionHeader id="rutas" title="Rutas que yo haría" kicker="16 · Etapa a etapa, sin coche" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {d.routes.map((r) => {
          const hard = r.stops.filter((s) => s.legFromPrevious && s.legFromPrevious.noCarDifficulty !== "ok").length;
          return (
            <Panel key={r.id} className="flex cursor-pointer flex-col p-4 transition-colors hover:border-ink-500" onClick={() => onOpen(r.id)}>
              <div className="label-stencil text-neon-cyan/90">
                {r.days} días{r.season && ` · ${r.season}`}
              </div>
              <h3 className="mt-1 text-lg">{r.title}</h3>
              <div className="mt-1 text-xs text-concrete-400">{r.stops.map((s) => cityName(d, s.cityId)).join(" → ")}</div>
              <p className="mt-2 text-sm text-concrete-200">{r.summary}</p>
              <div className="mt-auto pt-3 text-sm">
                {hard > 0 ? <span className="text-amber-200">⚠️ {hard} {hard === 1 ? "etapa con circo" : "etapas con circo"} sin coche</span> : <span className="text-lime-200">🟢 Todo en transporte público, sin dramas</span>}
              </div>
            </Panel>
          );
        })}
      </div>
    </section>
  );
}

export function RouteDrawer({ r, d, open, onClose, onOpenPlace }: { r?: TripRoute; d: CountryDetail; open: boolean; onClose: () => void; onOpenPlace: (id: string) => void }) {
  if (!r) return null;
  return (
    <Drawer open={open} onClose={onClose} title={r.title} kicker={`${r.days} días${r.season ? ` · ${r.season}` : ""}`} width="lg">
      <p className="mb-4 text-base text-concrete-100">{r.summary}</p>
      <RouteTimeline r={r} d={d} onOpenPlace={onOpenPlace} />
      {r.warnings && r.warnings.length > 0 && (
        <div className="mt-5 rounded-sharp border border-amber-500/40 bg-amber-500/5 p-3">
          <div className="label-stencil mb-1 text-amber-300">Ojo con esto</div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-amber-50">
            {r.warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      )}
      <SourceFooter meta={r.meta} />
    </Drawer>
  );
}
