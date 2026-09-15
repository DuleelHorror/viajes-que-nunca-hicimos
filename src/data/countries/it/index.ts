import type { CountryDetail } from "@/lib/schema";
import { summary } from "./summary";
import { places } from "./places";
import { routes } from "./routes";
import { airports, cities, mapRoutes, railCorridors } from "./geo";
import { cost, digital, docs, events, flights, language, politics, safety, transport, verdict } from "./sections";

const detail: CountryDetail = {
  summary,
  places,
  routes,
  cities,
  airports,
  railCorridors,
  mapRoutes,
  transport,
  cost,
  flights,
  docs,
  safety,
  politics,
  digital,
  language,
  events,
  verdict,
};

export default detail;
