import { LIGHT_META, LEG_DIFFICULTY_META, type NoCarLight } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TrafficLight({ light, className, compact }: { light: NoCarLight; className?: string; compact?: boolean }) {
  const m = LIGHT_META[light];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sharp border px-2 py-1 font-medium",
        compact ? "text-[11px]" : "text-sm",
        className,
      )}
      style={{ borderColor: `${m.color}66`, backgroundColor: `${m.color}1a`, color: m.color }}
    >
      <span aria-hidden>{m.emoji}</span>
      {m.label}
    </span>
  );
}

export function LegDifficulty({ level, className }: { level: keyof typeof LEG_DIFFICULTY_META; className?: string }) {
  const m = LEG_DIFFICULTY_META[level];
  return (
    <span className={cn("inline-flex items-center gap-1 text-[11px]", className)} style={{ color: m.color }} title={m.label}>
      <span aria-hidden>{m.emoji}</span>
      {level !== "ok" && m.label}
    </span>
  );
}
