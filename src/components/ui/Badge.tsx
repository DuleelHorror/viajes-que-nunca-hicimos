import { cn } from "@/lib/utils";
import { CATEGORY_META, MODE_META, type PlaceCategory, type TransportMode } from "@/lib/constants";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dot?: string;
  title?: string;
}

export function Badge({ children, className, dot, title }: BadgeProps) {
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sharp border px-1.5 py-0.5",
        "text-xs font-medium leading-none whitespace-nowrap",
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: dot }} aria-hidden />}
      {children}
    </span>
  );
}

export function CategoryBadge({ category, className, short }: { category: PlaceCategory; className?: string; short?: boolean }) {
  const m = CATEGORY_META[category];
  return (
    <Badge className={cn(m.badge, className)} title={m.label}>
      <span aria-hidden>{m.emoji}</span>
      {!short && m.label}
    </Badge>
  );
}

export function ModeBadge({ mode, className }: { mode: TransportMode; className?: string }) {
  const m = MODE_META[mode];
  return (
    <Badge className={cn("border-ink-600 bg-ink-800 text-concrete-200", className)} title={m.label}>
      <span aria-hidden>{m.emoji}</span> {m.label}
    </Badge>
  );
}
