import { Suspense } from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { TopNav } from "./TopNav";
import { LoadingScreen } from "@/components/ui/Misc";

export function AppShell() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <div className="flex min-h-full flex-col">
      <TopNav />
      {loading && (
        <div className="fixed inset-x-0 top-14 z-30 h-0.5 overflow-hidden">
          <div className="h-full w-1/3 animate-pulse-glow bg-neon-cyan shadow-glow" />
        </div>
      )}
      <main className="route-enter mx-auto w-full max-w-7xl flex-1 px-4 py-6">
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="border-t border-ink-800 py-6 text-center">
        <div className="label-stencil">Archivo de destinos · datos curados a mano · sin backend</div>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
