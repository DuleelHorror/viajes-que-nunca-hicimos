import { SAFETY_KEY_LABEL, type CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScoreBar } from "@/components/score/ScoreBar";
import { WhyPopover } from "@/components/score/WhyPopover";
import { SourceFooter } from "@/components/score/SourceFooter";
import { cn } from "@/lib/utils";

const LEVEL = {
  bajo: { label: "riesgo bajo", cls: "border-lime-500/40 text-lime-200" },
  medio: { label: "riesgo medio", cls: "border-amber-500/40 text-amber-200" },
  alto: { label: "riesgo alto", cls: "border-red-500/40 text-red-200" },
} as const;

function ScoreHead({ label, value, breakdown, invert }: { label: string; value: number; breakdown?: ScoredCountry["safety"]["breakdown"]; invert?: boolean }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="label-stencil">{label}</span>
      <span className={cn("tabular text-xl font-bold", invert ? "text-concrete-50" : "text-neon-cyan glow-cyan")}>{fmtScore(value)}</span>
      {breakdown && <WhyPopover title={label} breakdown={breakdown} align="right" />}
    </div>
  );
}

export function SafetySection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const s = c.summary.inputs.safety;
  return (
    <section className="space-y-4">
      <SectionHeader id="seguridad" title="Seguridad" kicker="09 · Evaluación realista, no alarmista">
        <ScoreHead label="Safety score" value={c.safetyRaw} breakdown={c.safety.breakdown} />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Panel className="p-5">
          <ul className="space-y-3">
            {d.safety.blocks.map((b) => (
              <li key={b.key}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-concrete-100">{SAFETY_KEY_LABEL[b.key]}</span>
                  <span className="flex items-center gap-2">
                    <span className="tabular text-xs text-concrete-400">{fmtScore(s[b.key])}/10</span>
                    <Badge className={LEVEL[b.level].cls}>{LEVEL[b.level].label}</Badge>
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-concrete-400">{b.text}</p>
              </li>
            ))}
          </ul>
          <SourceFooter meta={d.safety.meta} />
        </Panel>
        <div className="space-y-4">
          <Panel className="panel-neon p-5">
            <div className="flex items-center justify-between">
              <div className="label-stencil text-neon-cyan/80">Seguridad para viajero solo</div>
              <span className="font-display text-3xl font-bold tabular text-concrete-50">
                {fmtScore(s.solo)} <span className="text-sm text-concrete-500">/ 10</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-concrete-200">{d.safety.soloText}</p>
          </Panel>
          {d.safety.conflictAreas && d.safety.conflictAreas.length > 0 && (
            <Panel className="p-5">
              <div className="label-stencil mb-2 text-amber-300">Zonas a evitar o con cautela</div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-300">
                {d.safety.conflictAreas.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </Panel>
          )}
        </div>
      </div>
    </section>
  );
}

export function PoliticsSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  return (
    <section className="space-y-4">
      <SectionHeader id="politica" title="Estabilidad política" kicker="10 · Contexto">
        <ScoreHead label="Political stability" value={c.stability} />
      </SectionHeader>
      <Panel className="p-5">
        <p className="text-sm text-concrete-200">{d.politics.text}</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {d.politics.watch && d.politics.watch.length > 0 && (
            <div>
              <div className="label-stencil mb-1">A vigilar</div>
              <ul className="list-disc space-y-0.5 pl-5 text-sm text-concrete-300">
                {d.politics.watch.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          )}
          {d.politics.avoid && d.politics.avoid.length > 0 && (
            <div>
              <div className="label-stencil mb-1 text-amber-300">Zonas que conviene evitar</div>
              <ul className="list-disc space-y-0.5 pl-5 text-sm text-concrete-300">
                {d.politics.avoid.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <SourceFooter meta={d.politics.meta} />
      </Panel>
    </section>
  );
}

const L3 = ["❌ No", "⚠️ Parcial", "✅ Sí"];

export function DigitalSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const g = c.summary.inputs.digital;
  const items: Array<[string, string]> = [
    ["Google Maps", L3[g.googleMaps]],
    ["Google Translate", L3[g.googleTranslate]],
    ["Visa / Mastercard", `${fmtScore(g.tarjetas)}/10`],
    ["Apple Pay / Google Pay", `${fmtScore(g.contactless)}/10`],
    ["Efectivo necesario", `${fmtScore(g.efectivoNecesario)}/10`],
    ["eSIM", L3[g.esim]],
    ["Cobertura móvil", `${fmtScore(g.cobertura)}/10`],
    ["Wi-Fi", `${fmtScore(g.wifi)}/10`],
    ["Bloqueos", g.bloqueos.length ? g.bloqueos.join(", ") : "ninguno relevante"],
  ];
  return (
    <section className="space-y-4">
      <SectionHeader id="digital" title="Internet y tecnología" kicker="11 · Sobrevivir con el móvil">
        <ScoreHead label="Facilidad digital" value={c.digital.value} breakdown={c.digital.breakdown} />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
        <Panel className="p-5 lg:w-96">
          <dl className="space-y-1.5 text-sm">
            {items.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-ink-800 pb-1 last:border-0">
                <dt className="text-concrete-400">{k}</dt>
                <dd className="text-right text-concrete-100">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>
        <Panel className="p-5">
          <p className="text-sm text-concrete-200">{d.digital.text}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
            <div>
              <div className="label-stencil mb-1">Pagos</div>
              <p className="text-concrete-300">{d.digital.payments}</p>
            </div>
            <div>
              <div className="label-stencil mb-1">eSIM</div>
              <p className="text-concrete-300">{d.digital.esimProviders.join(", ") || "—"}</p>
              {d.digital.blocked.length > 0 && (
                <>
                  <div className="label-stencil mb-1 mt-2 text-amber-300">Bloqueado</div>
                  <p className="text-concrete-300">{d.digital.blocked.join(", ")}</p>
                </>
              )}
            </div>
          </div>
          <SourceFooter meta={d.digital.meta} />
        </Panel>
      </div>
    </section>
  );
}

export function LanguageSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const l = c.summary.inputs.language;
  return (
    <section className="space-y-4">
      <SectionHeader id="idioma" title="Idioma" kicker="12 · Sin depender del inglés">
        <ScoreHead label="Dificultad para mí (10 = difícil)" value={c.language.value} breakdown={c.language.breakdown} invert />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
        <Panel className="p-5 lg:w-96">
          <div className="space-y-2.5">
            <ScoreBar label="Nivel de inglés en la calle" value={l.ingles} size="sm" />
            <ScoreBar label="Máquinas y billetes en inglés" value={l.maquinasEnIngles} size="sm" />
            <ScoreBar label="Señalización bilingüe" value={l.senaleticaBilingue} size="sm" />
            <ScoreBar label="Traductor móvil útil" value={l.traductorFunciona} size="sm" />
          </div>
          <div className="mt-3 text-xs text-concrete-400">
            Idioma: {c.summary.facts.languages.join(", ")} · {l.alfabetoDistinto ? "alfabeto distinto (+1 dificultad)" : "alfabeto latino"}
          </div>
        </Panel>
        <Panel className="p-5">
          <p className="text-sm text-concrete-200">{d.language.text}</p>
          <div className="label-stencil mb-1 mt-3">Máquinas, billetes, señales</div>
          <p className="text-sm text-concrete-300">{d.language.machinesText}</p>
          {d.language.survivalPhrases && d.language.survivalPhrases.length > 0 && (
            <table className="mt-3 w-full text-xs">
              <tbody>
                {d.language.survivalPhrases.map((p) => (
                  <tr key={p.es} className="border-t border-ink-800">
                    <td className="py-1 pr-2 text-concrete-400">{p.es}</td>
                    <td className="py-1 pr-2 font-semibold text-concrete-100">{p.local}</td>
                    <td className="py-1 font-mono text-concrete-500">{p.latin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <SourceFooter meta={d.language.meta} />
        </Panel>
      </div>
    </section>
  );
}
