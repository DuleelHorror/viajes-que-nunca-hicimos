import { SAFETY_KEY_LABEL, type CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { digitalVoice, languageVoice, safetyVoice, stabilityVoice } from "@/lib/voice";
import { Panel, SectionHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScoreBar } from "@/components/score/ScoreBar";
import { WhyPopover } from "@/components/score/WhyPopover";
import { SourceFooter } from "@/components/score/SourceFooter";
import { cn } from "@/lib/utils";

const LEVEL = {
  bajo: { label: "tranqui", cls: "border-lime-500/40 text-lime-200" },
  medio: { label: "ojo", cls: "border-amber-500/40 text-amber-200" },
  alto: { label: "cuidado", cls: "border-red-500/40 text-red-200" },
} as const;

function ScoreHead({ label, value, breakdown, invert, voice }: { label: string; value: number; breakdown?: ScoredCountry["safety"]["breakdown"]; invert?: boolean; voice?: string }) {
  return (
    <div className="flex flex-col items-end gap-0.5">
      <div className="flex items-center gap-2">
        <span className="label-stencil">{label}</span>
        <span className={cn("tabular text-2xl font-bold", invert ? "text-concrete-50" : "text-neon-cyan glow-cyan")}>{fmtScore(value)}</span>
        {breakdown && <WhyPopover title={label} breakdown={breakdown} align="right" />}
      </div>
      {voice && <span className="text-sm text-concrete-200">{voice}</span>}
    </div>
  );
}

export function SafetySection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const s = c.summary.inputs.safety;
  return (
    <section className="space-y-4">
      <SectionHeader id="seguridad" title="¿Es seguro?" kicker="09 · Sin alarmismos ni buenismos">
        <ScoreHead label="Seguridad" value={c.safetyRaw} breakdown={c.safety.breakdown} voice={safetyVoice(c.safety.value)} />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Panel className="p-5">
          <ul className="space-y-3">
            {d.safety.blocks.map((b) => (
              <li key={b.key}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-base font-semibold text-concrete-50">{SAFETY_KEY_LABEL[b.key]}</span>
                  <span className="flex items-center gap-2">
                    <span className="tabular text-xs text-concrete-400">{fmtScore(s[b.key])}/10</span>
                    <Badge className={LEVEL[b.level].cls}>{LEVEL[b.level].label}</Badge>
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-concrete-300">{b.text}</p>
              </li>
            ))}
          </ul>
          <SourceFooter meta={d.safety.meta} />
        </Panel>
        <div className="space-y-4">
          <Panel className="panel-neon p-5">
            <div className="flex items-center justify-between">
              <div className="label-stencil text-neon-cyan/90">Yendo solo</div>
              <span className="font-display text-3xl font-bold tabular text-concrete-50">
                {fmtScore(s.solo)} <span className="text-sm text-concrete-400">/ 10</span>
              </span>
            </div>
            <p className="mt-2 text-base text-concrete-100">{d.safety.soloText}</p>
          </Panel>
          {d.safety.conflictAreas && d.safety.conflictAreas.length > 0 && (
            <Panel className="p-5">
              <div className="label-stencil mb-2 text-amber-300">Zonas donde ir con la cabeza puesta</div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-200">
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
      <SectionHeader id="politica" title="Cómo está el patio" kicker="10 · Política, en dos párrafos">
        <ScoreHead label="Estabilidad" value={c.stability} voice={stabilityVoice(c.stability)} />
      </SectionHeader>
      <Panel className="p-5">
        <p className="text-base text-concrete-100">{d.politics.text}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {d.politics.watch && d.politics.watch.length > 0 && (
            <div>
              <div className="label-stencil mb-1">Cosas a vigilar</div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-200">
                {d.politics.watch.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          )}
          {d.politics.avoid && d.politics.avoid.length > 0 && (
            <div>
              <div className="label-stencil mb-1 text-amber-300">Mejor ni acercarse</div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-concrete-200">
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

const L3 = ["❌ No", "⚠️ A medias", "✅ Sí"];

export function DigitalSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const g = c.summary.inputs.digital;
  const items: Array<[string, string]> = [
    ["Google Maps", L3[g.googleMaps]],
    ["Google Translate", L3[g.googleTranslate]],
    ["Visa / Mastercard", `${fmtScore(g.tarjetas)}/10`],
    ["Pagar con el móvil", `${fmtScore(g.contactless)}/10`],
    ["Cuánto efectivo hace falta", `${fmtScore(g.efectivoNecesario)}/10`],
    ["eSIM", L3[g.esim]],
    ["Cobertura", `${fmtScore(g.cobertura)}/10`],
    ["Wi-Fi", `${fmtScore(g.wifi)}/10`],
    ["Cosas bloqueadas", g.bloqueos.length ? g.bloqueos.join(", ") : "nada que te importe"],
  ];
  return (
    <section className="space-y-4">
      <SectionHeader id="digital" title="Sobrevivir con el móvil" kicker="11 · Mapas, pagos, traductor">
        <ScoreHead label="Facilidad digital" value={c.digital.value} breakdown={c.digital.breakdown} voice={digitalVoice(c.digital.value)} />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
        <Panel className="p-5 lg:w-96">
          <dl className="space-y-2 text-sm">
            {items.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-ink-800 pb-1.5 last:border-0">
                <dt className="text-concrete-300">{k}</dt>
                <dd className="text-right font-medium text-concrete-50">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>
        <Panel className="p-5">
          <p className="text-base text-concrete-100">{d.digital.text}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <div className="label-stencil mb-1">Pagar</div>
              <p className="text-concrete-200">{d.digital.payments}</p>
            </div>
            <div>
              <div className="label-stencil mb-1">Datos en el móvil</div>
              <p className="text-concrete-200">{d.digital.esimProviders.join(", ") || "—"}</p>
              {d.digital.blocked.length > 0 && (
                <>
                  <div className="label-stencil mb-1 mt-2 text-amber-300">Bloqueado</div>
                  <p className="text-concrete-200">{d.digital.blocked.join(", ")}</p>
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
      <SectionHeader id="idioma" title="¿Me voy a entender?" kicker="12 · Sin depender del inglés">
        <ScoreHead label="Dificultad (10 = por señas)" value={c.language.value} breakdown={c.language.breakdown} invert voice={languageVoice(c.language.value)} />
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-[auto_1fr]">
        <Panel className="p-5 lg:w-96">
          <div className="space-y-2.5">
            <ScoreBar label="Inglés en la calle" value={l.ingles} size="sm" />
            <ScoreBar label="Máquinas y billetes en inglés" value={l.maquinasEnIngles} size="sm" />
            <ScoreBar label="Carteles que entiendes" value={l.senaleticaBilingue} size="sm" />
            <ScoreBar label="El traductor te salva" value={l.traductorFunciona} size="sm" />
          </div>
          <div className="mt-3 text-sm text-concrete-300">
            Se habla {c.summary.facts.languages.join(", ")} · {l.alfabetoDistinto ? "alfabeto distinto (+1 de dificultad)" : "alfabeto latino, menos mal"}
          </div>
        </Panel>
        <Panel className="p-5">
          <p className="text-base text-concrete-100">{d.language.text}</p>
          <div className="label-stencil mb-1 mt-4">Máquinas, billetes y carteles</div>
          <p className="text-sm text-concrete-200">{d.language.machinesText}</p>
          {d.language.survivalPhrases && d.language.survivalPhrases.length > 0 && (
            <>
              <div className="label-stencil mb-1 mt-4">Cuatro palabras que abren puertas</div>
              <table className="w-full text-sm">
                <tbody>
                  {d.language.survivalPhrases.map((p) => (
                    <tr key={p.es} className="border-t border-ink-800">
                      <td className="py-1.5 pr-2 text-concrete-300">{p.es}</td>
                      <td className="py-1.5 pr-2 font-semibold text-concrete-50">{p.local}</td>
                      <td className="py-1.5 text-concrete-400">{p.latin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <SourceFooter meta={d.language.meta} />
        </Panel>
      </div>
    </section>
  );
}
