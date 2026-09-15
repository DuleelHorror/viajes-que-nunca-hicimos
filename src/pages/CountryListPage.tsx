import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { COUNTRIES } from "@/data/registry";
import { DAY_FILTERS, TAG_META, TAGS, type Tag } from "@/lib/constants";
import { fitsDays } from "@/lib/scoring";
import { CountryCard } from "@/components/country/CountryCard";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Chip, Select } from "@/components/ui/Field";
import { EmptyState } from "@/components/ui/Misc";

const SORTS = {
  duke: { label: "Duke Score", fn: (c: (typeof COUNTRIES)[number]) => c.duke.value },
  circo: { label: "Circo Score", fn: (c: (typeof COUNTRIES)[number]) => c.circo.value },
  barato: { label: "Más barato", fn: (c: (typeof COUNTRIES)[number]) => 10 - c.cost.value },
  sinCoche: { label: "Mejor sin coche", fn: (c: (typeof COUNTRIES)[number]) => c.noCar.value },
  dias: { label: "Más días", fn: (c: (typeof COUNTRIES)[number]) => c.days.ideal },
  bcn: { label: "Más fácil desde BCN", fn: (c: (typeof COUNTRIES)[number]) => c.bcn.value },
} as const;
type SortKey = keyof typeof SORTS;

export function CountryListPage() {
  const [params, setParams] = useSearchParams();
  const tags = (params.get("tags")?.split(",").filter((t): t is Tag => (TAGS as readonly string[]).includes(t)) ?? []) as Tag[];
  const dias = Number(params.get("dias")) || undefined;
  const sort = (params.get("sort") as SortKey) in SORTS ? (params.get("sort") as SortKey) : "duke";

  const update = (patch: { tags?: Tag[]; dias?: number | undefined; sort?: SortKey }) =>
    setParams((p) => {
      if (patch.tags !== undefined) patch.tags.length ? p.set("tags", patch.tags.join(",")) : p.delete("tags");
      if ("dias" in patch) patch.dias ? p.set("dias", String(patch.dias)) : p.delete("dias");
      if (patch.sort) patch.sort === "duke" ? p.delete("sort") : p.set("sort", patch.sort);
      return p;
    });

  const list = useMemo(
    () =>
      COUNTRIES.filter((c) => tags.every((t) => c.tags.includes(t)))
        .filter((c) => !dias || fitsDays(c, dias))
        .sort((a, b) => SORTS[sort].fn(b) - SORTS[sort].fn(a)),
    [tags, dias, sort],
  );

  return (
    <div className="space-y-6">
      <SectionHeader title="Países" kicker={`${COUNTRIES.length} expedientes`} as="h1">
        <Select value={sort} onChange={(e) => update({ sort: e.target.value as SortKey })} className="h-8 w-auto text-xs">
          {(Object.keys(SORTS) as SortKey[]).map((k) => (
            <option key={k} value={k}>
              Orden: {SORTS[k].label}
            </option>
          ))}
        </Select>
      </SectionHeader>

      <Panel className="space-y-3 p-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="label-stencil mr-1">Días</span>
          {DAY_FILTERS.map((n) => (
            <Chip key={n} on={dias === n} onClick={() => update({ dias: dias === n ? undefined : n })}>
              ⏱ {n} días
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="label-stencil mr-1">Filtros</span>
          {TAGS.map((t) => (
            <Chip key={t} on={tags.includes(t)} onClick={() => update({ tags: tags.includes(t) ? tags.filter((x) => x !== t) : [...tags, t] })} title={TAG_META[t].label}>
              <span aria-hidden>{TAG_META[t].emoji}</span> {TAG_META[t].label}
              <span className="tabular text-concrete-500">{COUNTRIES.filter((c) => c.tags.includes(t)).length}</span>
            </Chip>
          ))}
          {(tags.length > 0 || dias) && (
            <button type="button" className="ml-auto text-xs text-concrete-400 underline hover:text-neon-cyan" onClick={() => update({ tags: [], dias: undefined })}>
              Limpiar
            </button>
          )}
        </div>
      </Panel>

      {list.length === 0 ? (
        <EmptyState title="Ningún país cumple todos los filtros" description="Quita alguno o cambia la duración. Los filtros se combinan con Y, no con O." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {list.map((c) => (
            <CountryCard key={c.id} c={c} />
          ))}
        </div>
      )}
    </div>
  );
}
