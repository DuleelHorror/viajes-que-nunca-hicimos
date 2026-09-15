import { cn } from "@/lib/utils";

export function Panel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("panel rounded-sharp", className)} {...props}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  kicker?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeader({ title, kicker, children, className, id, as = "h2" }: SectionHeaderProps) {
  const H = as;
  return (
    <div id={id} className={cn("flex flex-col gap-3 scroll-mt-28 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="marker-left min-w-0">
        {kicker && <div className="label-stencil mb-1">{kicker}</div>}
        <H className={cn(as === "h1" ? "text-3xl" : as === "h3" ? "text-lg" : "text-2xl", "font-bold text-concrete-50")}>{title}</H>
      </div>
      {children && <div className="flex flex-wrap items-center gap-2 sm:justify-end">{children}</div>}
    </div>
  );
}

const ACCENT: Record<string, string> = {
  blood: "text-blood-300",
  amber: "text-amber-300",
  steel: "text-steel-300",
  emerald: "text-emerald-300",
  cyan: "text-neon-cyan",
  magenta: "text-neon-magenta",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
};

export function Stat({
  label,
  value,
  hint,
  accent,
  glow,
  className,
}: {
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  accent?: keyof typeof ACCENT;
  glow?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("panel rounded-sharp p-4", className)}>
      <div className="label-stencil mb-2">{label}</div>
      <div className={cn("text-2xl font-semibold tabular", accent ? ACCENT[accent] : "text-concrete-100", glow && accent && `glow-${accent}`)}>
        {value}
      </div>
      {hint && <div className="mt-1 text-xs text-concrete-400">{hint}</div>}
    </div>
  );
}

/** Lista clave/valor compacta (resumen del país) */
export function KV({ items, className }: { items: Array<{ k: string; v: React.ReactNode }>; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm", className)}>
      {items.map(({ k, v }) => (
        <div key={k} className="contents">
          <dt className="label-stencil self-center">{k}</dt>
          <dd className="text-concrete-200">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
