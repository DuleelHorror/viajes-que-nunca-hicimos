import { lazy } from "react";
import { createHashRouter } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { HomePage } from "@/pages/HomePage";
import { CountryListPage } from "@/pages/CountryListPage";
import { countryLoader } from "@/pages/countryLoader";
import { NotFoundPage } from "@/pages/NotFoundPage";

const CountryPage = lazy(() => import("@/pages/CountryPage").then((m) => ({ default: m.CountryPage })));
const ComparePage = lazy(() => import("@/pages/ComparePage").then((m) => ({ default: m.ComparePage })));
const FinderPage = lazy(() => import("@/pages/FinderPage").then((m) => ({ default: m.FinderPage })));
const FestivalsPage = lazy(() => import("@/pages/FestivalsPage").then((m) => ({ default: m.FestivalsPage })));
const ChartsPage = lazy(() => import("@/pages/ChartsPage").then((m) => ({ default: m.ChartsPage })));
const MethodologyPage = lazy(() => import("@/pages/MethodologyPage").then((m) => ({ default: m.MethodologyPage })));

export const router = createHashRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "paises", element: <CountryListPage /> },
      { path: "pais/:id", element: <CountryPage />, loader: countryLoader },
      { path: "comparar", element: <ComparePage /> },
      { path: "buscador", element: <FinderPage /> },
      { path: "festivales", element: <FestivalsPage /> },
      { path: "graficas", element: <ChartsPage /> },
      { path: "metodologia", element: <MethodologyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
