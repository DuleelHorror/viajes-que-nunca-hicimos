import { cn } from "@/lib/utils";

export interface HeatCell {
  value: number;
  color: string;
  title: string;
  label?: string;
}

interface HeatmapProps {
  rows: Array<{ id: string; label: string; href?: string }>;
  cols: string[];
  cell: (rowId: string, colIndex: number) => HeatCell;
  className?: string;
  onRowClick?: (id: string) => void;
  legend?: Array<{ color: string; label: string }>;
}

/** Mapa de calor categórico (p. ej. países × meses) con leyenda obligatoria. */
export function Heatmap({ rows, cols, cell, className, onRowClick, legend }: HeatmapProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="mb-1 text-xs text-concrete-400 lg:hidden">→ Desliza hacia los lados para ver todos los meses.</div>
      <table className="w-full border-separate" style={{ borderSpacing: 2 }}>
        <thead>
          <tr>
            <th className="w-24 text-left label-stencil font-normal sm:w-32">&nbsp;</th>
            {cols.map((c) => (
              <th key={c} className="label-stencil min-w-[2.25rem] pb-1 text-center font-normal">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className={cn(onRowClick && "cursor-pointer hover:bg-ink-800/50")} onClick={() => onRowClick?.(r.id)}>
              <td className="whitespace-nowrap pr-2 text-xs text-concrete-200">{r.label}</td>
              {cols.map((_, i) => {
                const c = cell(r.id, i);
                return (
                  <td key={i} className="min-w-[2.25rem] p-0" title={c.title}>
                    <div
                      className="flex h-7 items-center justify-center rounded-sharp text-xs font-mono text-ink-950/80 transition-transform hover:scale-110"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.label ?? ""}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {legend && (
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {legend.map((l) => (
            <li key={l.label} className="flex items-center gap-1.5 text-xs text-concrete-300">
              <span className="h-2.5 w-2.5 rounded-sharp" style={{ backgroundColor: l.color }} />
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
