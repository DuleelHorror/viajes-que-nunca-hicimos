import { BRAND } from "@/lib/brand";
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
      <footer className="border-t border-ink-800 px-4 py-6 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-concrete-400">
          <img src={BRAND.skull} alt="" width={22} height={22} className="h-[22px] w-[22px] opacity-80" draggable={false} />
          <span>Hecho a mano por gente que prefiere un búnker a una playa · sin backend, sin login, sin folletos</span>
        </div>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
