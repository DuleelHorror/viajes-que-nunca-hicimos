import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Spinner({ className }: { className?: string }) {
  return <Loader2 className={cn("animate-spin text-concrete-400", className)} size={18} />;
}

export function LoadingScreen({ label = "Sacando el expediente del archivo" }: { label?: string }) {
  return (
    <div className="flex h-full min-h-[40vh] flex-col items-center justify-center gap-3 text-concrete-300">
      <Spinner className="h-6 w-6" />
      <span className="text-sm">
        {label}
        <span className="animate-blink">…</span>
      </span>
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-sharp border border-dashed border-ink-600 bg-ink-900/40 px-6 py-14 text-center">
      {icon && <div className="text-concrete-400">{icon}</div>}
      <div>
        <h3 className="text-lg text-concrete-50">{title}</h3>
        {description && <p className="mx-auto mt-1 max-w-md text-sm text-concrete-300">{description}</p>}
      </div>
      {action}
    </div>
  );
}

/** Divisor con etiqueta */
export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-ink-700" />
      {label && <span className="label-stencil">{label}</span>}
      <div className="h-px flex-1 bg-ink-700" />
    </div>
  );
}
