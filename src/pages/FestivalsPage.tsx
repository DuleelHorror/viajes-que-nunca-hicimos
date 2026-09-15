import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FESTIVALS } from "@/data/registry";
import { CATEGORY_META, MONTHS_SHORT, PLACE_CATEGORIES, type PlaceCategory } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Field";
import { EmptyState } from "@/components/ui/Misc";
import { FestivalCard } from "@/components/festivals/FestivalCard";

export function FestivalsPage() {
  const [params, setParams] = useSearchParams();
  const mes = Number(params.get("mes")) || undefined;
  const cat = params.get("cat") as PlaceCategory | null;
  const soloPlan = params.get("plan") === "1";

  const set = (k: string, v: string | undefined) =>
    setParams((p) => {
      v ? p.set(k, v) : p.delete(k);
      return p;
    });

  const list = useMemo(
    () =>
      FESTIVALS.filter((f) => !mes || f.month === mes)
        .filter((f) => !cat || f.category === cat)
        .filter((f) => !soloPlan || f.planTripAround)
        .sort((a, b) => b.scores.rareza + b.scores.espectacularidad - (a.scores.rareza + a.scores.espectacularidad)),
    [mes, cat, soloPlan],
  );
  const cats = PLACE_CATEGORIES.filter((c) => FESTIVALS.some((f) => f.category === c));

  return (
    <div className="space-y-6">
      <SectionHeader title="Festivales raros" kicker={`${FESTIVALS.length} fiestas con fuego, demonios, barcos vikingos o cosas peores`} as="h1" />
      <Panel className="space-y-3 p-3">
        <div className="grid grid-cols-6 gap-1 sm:grid-cols-12">
          {MONTHS_SHORT.map((m, i) => {
            const n = FESTIVALS.filter((f) => f.month === i + 1).length;
            const on = mes === i + 1;
            return (
              <button key={m} type="button" onClick={() => set("mes", on ? undefined : String(i + 1))} className={cn("flex flex-col items-center rounded-sharp border px-1 py-1.5", on ? "border-neon-cyan/60 bg-neon-cyan/10" : "border-ink-700 bg-ink-850 hover:border-ink-500")} aria-pressed={on}>
                <span className="label-stencil">{m}</span>
                <span className={cn("tabular text-base font-semibold", n ? "text-concrete-50" : "text-concrete-500")}>{n}</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {cats.map((c) => (
            <Chip key={c} on={cat === c} onClick={() => set("cat", cat === c ? undefined : c)}>
              <span aria-hidden>{CATEGORY_META[c].emoji}</span> {CATEGORY_META[c].label}
            </Chip>
          ))}
          <Chip on={soloPlan} onClick={() => set("plan", soloPlan ? undefined : "1")}>
            🔥 Solo los que justifican el viaje
          </Chip>
        </div>
      </Panel>
      {list.length === 0 ? (
        <EmptyState title="Ese mes no arde nada" description="Prueba otro mes o quita el filtro de categoría. Enero y diciembre son los meses del fuego." />
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {list.map((f) => (
            <FestivalCard key={f.id} f={f} showCountry />
          ))}
        </div>
      )}
    </div>
  );
}
