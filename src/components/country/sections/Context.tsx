import { SAFETY_KEY_LABEL, type CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";
import { fmtScore } from "@/lib/format";
import { digitalVoice, languageVoice, safetyVoice, stabilityVoice } from "@/lib/voice";
import { Badge } from "@/components/ui/Badge";
import { Clamp, Disclosure } from "@/components/ui/Disclosure";
import { ScoreBar, scoreTone } from "@/components/score/ScoreBar";
import { SourceFooter } from "@/components/score/SourceFooter";
import { Ficha } from "../Ficha";

const LEVEL = {
  bajo: { label: "tranqui", cls: "border-lime-500/40 text-lime-200" },
  medio: { label: "ojo", cls: "border-amber-500/40 text-amber-200" },
  alto: { label: "cuidado", cls: "border-red-500/40 text-red-200" },
} as const;

export function SafetySection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const s = c.summary.inputs.safety;
  const solo = scoreTone(s.solo);
  return (
    <Ficha id="seguridad" n="09" emoji="🛡️" title="¿Es seguro?" score={{ label: "Seguridad", value: c.safetyRaw, breakdown: c.safety.breakdown, voice: safetyVoice(c.safety.value) }}>
      <ul className="grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
        {d.safety.blocks.map((b) => (
          <li key={b.key} className="min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-concrete-50">{SAFETY_KEY_LABEL[b.key]}</span>
              <span className="flex shrink-0 items-center gap-1.5">
                <span className="tabular text-[11px] text-concrete-500">{fmtScore(s[b.key])}</span>
                <Badge className={LEVEL[b.level].cls}>{LEVEL[b.level].label}</Badge>
              </span>
            </div>
            <p className="mt-0.5 text-xs leading-snug text-concrete-400">{b.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-sharp border border-neon-cyan/25 bg-neon-cyan/5 px-3 py-2.5">
        <div className="flex items-center justify-between">
          <div className="label-stencil text-neon-cyan/90">Yendo solo</div>
          <span className="tabular text-xl font-bold" style={{ color: solo.color }}>
            {fmtScore(s.solo)} <span className="text-xs font-normal text-concrete-500">/ 10</span>
          </span>
        </div>
        <Clamp lines={3} className="mt-1">
          <p className="max-w-prose text-[15px] leading-relaxed text-concrete-100">{d.safety.soloText}</p>
        </Clamp>
      </div>
      {d.safety.conflictAreas && d.safety.conflictAreas.length > 0 && (
        <div className="mt-3">
          <div className="label-stencil mb-1 text-amber-300">Zonas donde ir con la cabeza puesta</div>
          <ul className="list-disc space-y-0.5 pl-5 text-sm text-concrete-200">
            {d.safety.conflictAreas.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>
      )}
      <SourceFooter meta={d.safety.meta} />
    </Ficha>
  );
}

export function PoliticsSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const watch = d.politics.watch ?? [];
  const avoid = d.politics.avoid ?? [];
  return (
    <Ficha id="politica" n="10" emoji="🏛" title="Cómo está el patio" score={{ label: "Estabilidad", value: c.stability, voice: stabilityVoice(c.stability) }}>
      <Clamp lines={4}>
        <p className="max-w-prose text-[15px] leading-relaxed text-concrete-100">{d.politics.text}</p>
      </Clamp>
      {(watch.length > 0 || avoid.length > 0) && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {watch.length > 0 && (
            <div>
              <div className="label-stencil mb-1">Cosas a vigilar</div>
              <ul className="list-disc space-y-0.5 pl-5 text-sm text-concrete-200">
                {watch.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          )}
          {avoid.length > 0 && (
            <div>
              <div className="label-stencil mb-1 text-amber-300">Mejor ni acercarse</div>
              <ul className="list-disc space-y-0.5 pl-5 text-sm text-concrete-200">
                {avoid.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <SourceFooter meta={d.politics.meta} />
    </Ficha>
  );
}

const L3 = ["❌ No", "⚠️ A medias", "✅ Sí"];

export function DigitalSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const g = c.summary.inputs.digital;
  const items: Array<[string, string]> = [
    ["Google Maps", L3[g.googleMaps]],
    ["Google Translate", L3[g.googleTranslate]],
    ["eSIM", L3[g.esim]],
    ["Tarjetas", `${fmtScore(g.tarjetas)}/10`],
    ["Pagar con el móvil", `${fmtScore(g.contactless)}/10`],
    ["Efectivo necesario", `${fmtScore(g.efectivoNecesario)}/10`],
    ["Cobertura", `${fmtScore(g.cobertura)}/10`],
    ["Wi-Fi", `${fmtScore(g.wifi)}/10`],
    ["Bloqueado", g.bloqueos.length ? g.bloqueos.join(", ") : "nada que te importe"],
  ];
  return (
    <Ficha id="digital" n="11" emoji="📱" title="Sobrevivir con el móvil" score={{ label: "Facilidad digital", value: c.digital.value, breakdown: c.digital.breakdown, voice: digitalVoice(c.digital.value) }}>
      <dl className="grid grid-cols-2 gap-x-5 gap-y-1 text-xs sm:grid-cols-3">
        {items.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-2 border-b border-ink-800/70 py-1">
            <dt className="text-concrete-400">{k}</dt>
            <dd className="text-right font-medium text-concrete-100">{v}</dd>
          </div>
        ))}
      </dl>
      <Clamp lines={3} className="mt-3">
        <p className="max-w-prose text-[15px] leading-relaxed text-concrete-100">{d.digital.text}</p>
      </Clamp>
      <Disclosure label="Pagar y datos en el móvil" className="mt-3">
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <div className="label-stencil mb-1">Pagar</div>
            <p className="text-concrete-200">{d.digital.payments}</p>
          </div>
          <div>
            <div className="label-stencil mb-1">Datos</div>
            <p className="text-concrete-200">{d.digital.esimProviders.join(", ") || "—"}</p>
            {d.digital.blocked.length > 0 && (
              <>
                <div className="label-stencil mb-1 mt-2 text-amber-300">Bloqueado</div>
                <p className="text-concrete-200">{d.digital.blocked.join(", ")}</p>
              </>
            )}
          </div>
        </div>
      </Disclosure>
      <SourceFooter meta={d.digital.meta} />
    </Ficha>
  );
}

export function LanguageSection({ c, d }: { c: ScoredCountry; d: CountryDetail }) {
  const l = c.summary.inputs.language;
  const phrases = d.language.survivalPhrases ?? [];
  return (
    <Ficha id="idioma" n="12" emoji="🗣" title="¿Me voy a entender?" score={{ label: "Dificultad (10 = por señas)", value: c.language.value, invert: true, breakdown: c.language.breakdown, voice: languageVoice(c.language.value) }}>
      <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
        <ScoreBar label="Inglés en la calle" value={l.ingles} size="sm" />
        <ScoreBar label="Máquinas en inglés" value={l.maquinasEnIngles} size="sm" />
        <ScoreBar label="Carteles que entiendes" value={l.senaleticaBilingue} size="sm" />
        <ScoreBar label="El traductor te salva" value={l.traductorFunciona} size="sm" />
      </div>
      <div className="mt-2 text-xs text-concrete-400">
        {c.summary.facts.languages.join(", ")} · {l.alfabetoDistinto ? "alfabeto distinto (+1 de dificultad)" : "alfabeto latino, menos mal"}
      </div>
      <Clamp lines={3} className="mt-3">
        <p className="max-w-prose text-[15px] leading-relaxed text-concrete-100">{d.language.text}</p>
      </Clamp>
      <Disclosure label="Máquinas, carteles y frases de supervivencia" count={phrases.length || undefined} className="mt-3">
        <p className="text-sm text-concrete-200">{d.language.machinesText}</p>
        {phrases.length > 0 && (
          <table className="mt-2 w-full text-sm">
            <tbody>
              {phrases.map((p) => (
                <tr key={p.es} className="border-t border-ink-800">
                  <td className="py-1 pr-2 text-concrete-400">{p.es}</td>
                  <td className="py-1 pr-2 font-semibold text-concrete-50">{p.local}</td>
                  <td className="py-1 text-xs text-concrete-500">{p.latin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Disclosure>
      <SourceFooter meta={d.language.meta} />
    </Ficha>
  );
}
