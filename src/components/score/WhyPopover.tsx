import { HelpCircle } from "lucide-react";
import { Popover } from "@/components/ui/Popover";
import type { Contribution } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { cn } from "@/lib/utils";

interface WhyPopoverProps {
  title: string;
  breakdown: Contribution[];
  penalties?: Contribution[];
  total?: string;
  align?: "left" | "right";
  className?: string;
  /** Solo el icono "?": para cuando hay muchas notas juntas y el botón con texto se repite. */
  compact?: boolean;
}

/** Desglose "¿por qué N?" a partir de Contribution[] (misma fuente que /metodologia). */
export function WhyPopover({ title, breakdown, penalties, total, align = "left", className, compact }: WhyPopoverProps) {
  return (
    <Popover
      align={align}
      className={className}
      trigger={
        compact ? (
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-ink-600 text-concrete-400 hover:border-neon-cyan/50 hover:text-neon-cyan" aria-label={`¿Por qué ${title}?`} title="¿y esto por qué?">
            <HelpCircle size={11} />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-sharp border border-ink-600 px-2 py-0.5 text-xs font-medium text-concrete-300 hover:border-neon-cyan/50 hover:text-neon-cyan">
            <HelpCircle size={12} /> ¿y esto por qué?
          </span>
        )
      }
    >
      <div className="label-stencil mb-2">{title}</div>
      <BreakdownTable breakdown={breakdown} penalties={penalties} total={total} />
    </Popover>
  );
}

export function BreakdownTable({ breakdown, penalties, total, className }: { breakdown: Contribution[]; penalties?: Contribution[]; total?: string; className?: string }) {
  return (
    <table className={cn("w-full text-xs", className)}>
      <tbody>
        {breakdown.map((c) => (
          <tr key={c.key} className="border-b border-ink-800 last:border-0">
            <td className="py-1 pr-2 text-concrete-300">
              {c.label}
              {c.note && <div className="text-xs text-concrete-500">{c.note}</div>}
            </td>
            <td className="py-1 pr-2 text-right tabular text-concrete-500">
              {c.input != null && (
                <>
                  {fmtScore(c.input)}
                  {c.weight != null && ` × ${c.weight}`}
                </>
              )}
            </td>
            <td className={cn("py-1 text-right tabular font-semibold", c.points < 0 ? "text-red-400" : "text-concrete-100")}>
              {c.points > 0 && c.max === 0 ? "+" : ""}
              {fmtScore(c.points)}
              {c.max > 0 && <span className="text-concrete-500">/{fmtScore(c.max)}</span>}
            </td>
          </tr>
        ))}
        {penalties?.map((c) => (
          <tr key={c.key} className="border-b border-ink-800 last:border-0">
            <td className="py-1 pr-2 text-red-300">{c.label}</td>
            <td />
            <td className="py-1 text-right tabular font-semibold text-red-400">{fmtScore(c.points)}</td>
          </tr>
        ))}
        {total && (
          <tr>
            <td className="pt-1.5 text-concrete-200" colSpan={2}>
              Total
            </td>
            <td className="pt-1.5 text-right tabular font-bold text-concrete-50">{total}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
