import { AlertTriangle, ExternalLink } from "lucide-react";
import { isStale, type SectionMeta } from "@/lib/schema";
import { fmtDate } from "@/lib/format";
import { cn } from "@/lib/utils";

const CONF_META = {
  alta: { label: "nos fiamos", cls: "text-neon-lime/80" },
  media: { label: "bastante fiable", cls: "text-concrete-500" },
  baja: { label: "sin verificar, ojo", cls: "text-amber-300" },
} as const;

/**
 * Pie de procedencia en UNA línea discreta: fuente · fecha · fiabilidad. Las notas van detrás en el
 * mismo tono; la pill "dato viejo" es lo único que grita, porque es lo único que debe gritar.
 */
export function SourceFooter({ meta, className }: { meta: SectionMeta; className?: string }) {
  const stale = isStale(meta);
  const conf = CONF_META[meta.confidence];
  return (
    <div className={cn("mt-3 flex flex-wrap items-center gap-x-2 gap-y-0.5 border-t border-ink-800/80 pt-1.5 text-[11px] leading-snug text-concrete-500", className)}>
      <span>
        {meta.sources.length > 0
          ? meta.sources.map((s, i) => (
              <span key={i}>
                {i > 0 && ", "}
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 hover:text-neon-cyan">
                    {s.label} <ExternalLink size={8} />
                  </a>
                ) : (
                  s.label
                )}
              </span>
            ))
          : "lo hemos escrito nosotros"}
      </span>
      <span aria-hidden>·</span>
      <span>{fmtDate(meta.lastUpdated)}</span>
      <span aria-hidden>·</span>
      <span className={conf.cls}>{conf.label}</span>
      {stale && (
        <span className="inline-flex items-center gap-1 rounded-sharp border border-amber-500/50 bg-amber-500/10 px-1.5 py-0.5 text-amber-300">
          <AlertTriangle size={10} /> dato viejo: comprobar antes de fiarse
        </span>
      )}
      {meta.notes && (
        <>
          <span aria-hidden>·</span>
          <span className="text-concrete-500/90">{meta.notes}</span>
        </>
      )}
    </div>
  );
}
