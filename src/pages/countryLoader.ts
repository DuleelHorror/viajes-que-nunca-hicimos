import type { LoaderFunctionArgs } from "react-router-dom";
import { getCountry, loadCountry } from "@/data/registry";
import type { CountryDetail } from "@/lib/schema";
import type { ScoredCountry } from "@/lib/scoring";

export interface CountryLoaderData {
  scored: ScoredCountry;
  detail: CountryDetail;
}

export async function countryLoader({ params }: LoaderFunctionArgs): Promise<CountryLoaderData> {
  const scored = getCountry(params.id);
  if (!scored) throw new Response("País no encontrado", { status: 404 });
  const detail = await loadCountry(scored.id);
  return { scored, detail };
}
