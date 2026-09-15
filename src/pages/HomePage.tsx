import { Link } from "react-router-dom";
import { ArrowRight, Flame, Radar, Scale, Search } from "lucide-react";
import { COUNTRIES, FESTIVALS } from "@/data/registry";
import { CANDIDATES } from "@/data/candidates";
import { APP_TITLE, CATEGORY_META, TAG_META, monthName, type Tag } from "@/lib/constants";
import { CountryCard } from "@/components/country/CountryCard";
import { FestivalCard } from "@/components/festivals/FestivalCard";
import { Panel, SectionHeader, Stat } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Flag } from "@/components/ui/Flag";

const QUICK: Tag[] = ["sin-coche", "barato", "sovietico", "oscuro", "festivales", "invierno", "poco-turismo", "facil-desde-bcn"];

export function HomePage() {
  const top = COUNTRIES.slice(0, 3);
  const places = COUNTRIES.reduce((a, c) => a + c.summary.placeStats.total, 0);
  const now = new Date();
  const thisMonth = now.getMonth() + 1;
  const upcoming = FESTIVALS.filter((f) => {
    const diff = (f.month - thisMonth + 12) % 12;
    return diff <= 2;
  }).slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-sharp border border-ink-700 bg-ink-900/40 px-6 py-12 sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "radial-gradient(60% 80% at 80% 20%, rgba(232,121,249,.14), transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(34,211,238,.12), transparent 60%)" }} />
        <div className="relative max-w-3xl">
          <div className="label-stencil flex items-center gap-2 text-neon-cyan/80">
            <Radar size={12} className="animate-pulse-glow" /> Archivo de destinos · edición {now.getFullYear()}
          </div>
          <h1 className="mt-3 text-4xl leading-[1.05] sm:text-6xl">
            <span className="text-concrete-50">Centro de control de los</span>
            <br />
            <span className="text-neon-magenta glow-magenta">viajes que nunca hicimos</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-concrete-300">
            Comparador de países para una forma concreta de viajar: muchos días, <strong className="text-concrete-100">sin coche</strong>, saliendo de Barcelona,
            buscando búnkeres, restos soviéticos, catacumbas, festivales raros y lugares que no salen en el top 10 de nadie.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/paises">
              <Button variant="neon" size="lg">
                Explorar países <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/buscador">
              <Button variant="outline" size="lg">
                <Search size={16} /> ¿Dónde voy en enero?
              </Button>
            </Link>
            <Link to="/comparar">
              <Button variant="outline" size="lg">
                <Scale size={16} /> Comparar
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Países con expediente" value={COUNTRIES.length} accent="cyan" />
          <Stat label="Sitios circo" value={places} accent="magenta" />
          <Stat label="Festivales" value={FESTIVALS.length} accent="lime" />
          <Stat label="En el radar" value={CANDIDATES.length} accent="violet" hint="pendientes de ficha" />
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="Los que más te pegan" kicker="Ranking por Duke Score">
          <Link to="/paises" className="text-xs text-concrete-400 hover:text-neon-cyan">
            Ver todos →
          </Link>
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {top.map((c) => (
            <CountryCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeader title="Filtros rápidos" kicker="Un clic" />
        <div className="flex flex-wrap gap-2">
          {QUICK.map((t) => (
            <Link key={t} to={`/paises?tags=${t}`} className="chip">
              <span aria-hidden>{TAG_META[t].emoji}</span> {TAG_META[t].label}
            </Link>
          ))}
          {[5, 7, 10, 15].map((n) => (
            <Link key={n} to={`/paises?dias=${n}`} className="chip">
              ⏱ Mejor para {n} días
            </Link>
          ))}
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="space-y-4">
          <SectionHeader title="Festivales en los próximos meses" kicker={`${monthName(thisMonth)} → ${monthName(((thisMonth + 1) % 12) + 1)}`}>
            <Link to="/festivales" className="flex items-center gap-1 text-xs text-concrete-400 hover:text-neon-cyan">
              <Flame size={12} /> Todos los festivales →
            </Link>
          </SectionHeader>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {upcoming.map((f) => (
              <FestivalCard key={f.id} f={f} showCountry />
            ))}
          </div>
        </section>
      )}

      <section className="space-y-4">
        <SectionHeader title="En el radar" kicker="Encajan con el perfil · sin ficha todavía" />
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CANDIDATES.map((k) => (
            <Panel key={k.id} className="p-3">
              <div className="flex items-center gap-2">
                <Flag code={k.id} name={k.name} size={16} />
                <span className="text-sm font-semibold text-concrete-100">{k.name}</span>
                <span className="ml-auto flex gap-1">
                  {k.hooks.map((h) => (
                    <span key={h} title={CATEGORY_META[h as keyof typeof CATEGORY_META]?.label} aria-hidden>
                      {CATEGORY_META[h as keyof typeof CATEGORY_META]?.emoji}
                    </span>
                  ))}
                </span>
              </div>
              <p className="mt-1 text-xs text-concrete-400">{k.why}</p>
            </Panel>
          ))}
        </div>
        <p className="label-stencil">{APP_TITLE} · sin login · sin backend · datos curados a mano</p>
      </section>
    </div>
  );
}
