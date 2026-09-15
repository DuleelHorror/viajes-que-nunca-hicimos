import { VERDICT_META, type Verdict } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function VerdictBadge({ verdict, size = "md", className, manual }: { verdict: Verdict; size?: "sm" | "md" | "lg"; className?: string; manual?: boolean }) {
  const m = VERDICT_META[verdict];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sharp border font-display font-bold tracking-wide",
        size === "sm" ? "px-2 py-0.5 text-xs" : size === "lg" ? "px-4 py-2 text-xl" : "px-3 py-1 text-sm",
        m.glow,
        className,
      )}
      style={{ borderColor: `${m.color}80`, backgroundColor: `${m.color}14`, color: m.color }}
      title={manual ? "Criterio manual del autor" : "Veredicto calculado a partir del Duke Score"}
    >
      <span aria-hidden>{m.emoji}</span>
      {m.label}
      {manual && <span className="label-stencil normal-case tracking-normal opacity-70">(manual)</span>}
    </span>
  );
}
