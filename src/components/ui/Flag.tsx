import { useState } from "react";
import { cn } from "@/lib/utils";

export { flagCode } from "@/lib/flags";

interface FlagProps {
  /** Código flagcdn: alpha2 en minúsculas o subdivisión (gb-sct) */
  code: string;
  name: string;
  size?: number;
  className?: string;
}

/**
 * Bandera como imagen (flagcdn.com, sin clave) porque Windows no renderiza los emoji de bandera.
 * Fallback: el código ISO en un badge si la imagen no carga.
 */
export function Flag({ code, name, size = 24, className }: FlagProps) {
  const [failed, setFailed] = useState(false);
  const h = size;
  const w = Math.round(size * 1.5);
  if (failed) {
    return (
      <span
        className={cn("inline-flex shrink-0 items-center justify-center rounded-sharp border border-ink-600 bg-ink-800 font-mono text-xs uppercase text-concrete-300", className)}
        style={{ width: w, height: h }}
        aria-label={name}
      >
        {code.replace("gb-", "")}
      </span>
    );
  }
  return (
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt={`Bandera de ${name}`}
      width={w}
      height={h}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("inline-block shrink-0 rounded-sharp object-cover ring-1 ring-ink-600", className)}
      style={{ width: w, height: h }}
    />
  );
}
