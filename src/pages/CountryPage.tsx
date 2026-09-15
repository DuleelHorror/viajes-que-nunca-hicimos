import { lazy, Suspense, useCallback } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import type { CountryLoaderData } from "./countryLoader";
import { CountryHeader } from "@/components/country/CountryHeader";
import { SectionNav } from "@/components/country/SectionNav";
import { DaysSection, ScoresSection, SummarySection } from "@/components/country/sections/Overview";
import { CostSection, DocsSection, FlightsSection, TransportSection } from "@/components/country/sections/Logistics";
import { DigitalSection, LanguageSection, PoliticsSection, SafetySection } from "@/components/country/sections/Context";
import { BestTimeSection, EventsSection } from "@/components/country/sections/Time";
import { PlaceDrawer, PlacesSection } from "@/components/country/sections/Places";
import { RouteDrawer, RoutesSection } from "@/components/country/sections/Routes";
import { ProsConsSection, VerdictSection } from "@/components/country/sections/Verdict";
import { SectionHeader } from "@/components/ui/Card";
import { LoadingScreen } from "@/components/ui/Misc";

const CountryMap = lazy(() => import("@/components/country/CountryMap"));

export function CountryPage() {
  const { scored: c, detail: d } = useLoaderData() as CountryLoaderData;
  const [params, setParams] = useSearchParams();
  const placeId = params.get("lugar") ?? undefined;
  const routeId = params.get("ruta") ?? undefined;

  const openPlace = useCallback(
    (id: string) =>
      setParams((p) => {
        p.set("lugar", id);
        p.delete("ruta");
        return p;
      }),
    [setParams],
  );
  const openRoute = useCallback(
    (id: string) =>
      setParams((p) => {
        p.set("ruta", id);
        p.delete("lugar");
        return p;
      }),
    [setParams],
  );
  const closeAll = useCallback(
    () =>
      setParams((p) => {
        p.delete("lugar");
        p.delete("ruta");
        return p;
      }),
    [setParams],
  );

  const place = d.places.find((p) => p.id === placeId);
  const route = d.routes.find((r) => r.id === routeId);

  return (
    <div className="space-y-10">
      <CountryHeader c={c} />
      <SectionNav />
      <SummarySection c={c} d={d} />
      <ScoresSection c={c} />
      <DaysSection c={c} />
      <TransportSection c={c} d={d} />
      <section className="space-y-4">
        <SectionHeader id="mapa" title="El mapa" kicker="05 · Ciudades, trenes y sitios circo de un vistazo" />
        <Suspense fallback={<LoadingScreen label="Desplegando el mapa" />}>
          <CountryMap d={d} selectedPlaceId={placeId} onSelectPlace={openPlace} />
        </Suspense>
      </section>
      <CostSection c={c} d={d} />
      <FlightsSection c={c} d={d} />
      <DocsSection c={c} d={d} />
      <SafetySection c={c} d={d} />
      <PoliticsSection c={c} d={d} />
      <DigitalSection c={c} d={d} />
      <LanguageSection c={c} d={d} />
      <BestTimeSection c={c} />
      <EventsSection c={c} d={d} />
      <PlacesSection d={d} onOpen={openPlace} />
      <RoutesSection d={d} onOpen={openRoute} />
      <ProsConsSection d={d} />
      <VerdictSection c={c} d={d} />

      <PlaceDrawer p={place} d={d} open={Boolean(place)} onClose={closeAll} />
      <RouteDrawer r={route} d={d} open={Boolean(route)} onClose={closeAll} onOpenPlace={openPlace} />
    </div>
  );
}
