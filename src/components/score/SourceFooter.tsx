import { AlertTriangle, ExternalLink } from "lucide-react";
import { isStale, type SectionMeta } from "@/lib/schema";
import { fmtDate } from "@/lib/format";
import { cn } from "@/lib/utils";

const CONF_META = {
  alta: { label: "confianza alta", cls: "text-neon-lime/80" },
  media: { label: "confianza media", cls: "text-concrete-400" },
  baja: { label: "dato no verificado", cls: "text-amber-300" },
} as const;

/** "Fuente: … · actualizado … · confianza …" + pill "dato antiguo" si caducó. */
export function SourceFooter({ meta, className }: { meta: SectionMeta; className?: string }) {
  const stale = isStale(meta);
  const conf = CONF_META[meta.confidence];
  return (
    <div className={cn("mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-ink-800 pt-2 font-mono text-[10px] text-concrete-500", className)}>
      <span>
        {meta.sources.length > 0 ? (
          <>
            Fuente:{" "}
            {meta.sources.map((s, i) => (
              <span key={i}>
                {i > 0 && " · "}
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-concrete-400 hover:text-neon-cyan">
                    {s.label} <ExternalLink size={9} />
                  </a>
                ) : (
                  s.label
                )}
              </span>
            ))}
          </>
        ) : (
          "Fuente: curación propia"
        )}
      </span>
      <span>· {fmtDate(meta.lastUpdated)}</span>
      <span className={cn("·", conf.cls)}>· {conf.label}</span>
      <span>· {meta.volatility === "volatil" ? "dato volátil" : "dato estable"}</span>
      {stale && (
        <span className="inline-flex items-center gap-1 rounded-sharp border border-amber-500/50 bg-amber-500/10 px-1.5 py-0.5 text-amber-300">
          <AlertTriangle size={10} /> dato antiguo: revisar
        </span>
      )}
      {meta.notes && <span className="basis-full text-concrete-500">{meta.notes}</span>}
    </div>
  );
}
