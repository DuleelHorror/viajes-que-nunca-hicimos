import { Link, NavLink } from "react-router-dom";
import { BarChart3, BookOpen, Flame, Globe2, Menu, Radar, Scale, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_SHORT } from "@/lib/constants";
import { useUiStore } from "@/store/useUiStore";
import { useCompareStore } from "@/store/useCompareStore";

const NAV = [
  { to: "/paises", label: "Países", icon: Globe2 },
  { to: "/comparar", label: "Comparar", icon: Scale },
  { to: "/buscador", label: "Buscador", icon: Search },
  { to: "/festivales", label: "Festivales", icon: Flame },
  { to: "/graficas", label: "Gráficas", icon: BarChart3 },
  { to: "/metodologia", label: "Metodología", icon: BookOpen },
];

function NavItem({ to, label, icon: Icon, onClick }: { to: string; label: string; icon: typeof Globe2; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-2 rounded-sharp px-3 py-2 text-sm transition-colors border-b-2 border-transparent",
          isActive ? "text-concrete-50 border-neon-cyan" : "text-concrete-400 hover:text-concrete-100 hover:bg-ink-800",
        )
      }
    >
      <Icon size={15} className="shrink-0" />
      <span>{label}</span>
    </NavLink>
  );
}

export function TopNav() {
  const navOpen = useUiStore((s) => s.navOpen);
  const toggleNav = useUiStore((s) => s.toggleNav);
  const setNavOpen = useUiStore((s) => s.setNavOpen);
  const compareCount = useCompareStore((s) => s.ids.length);

  return (
    <header className="sticky top-0 z-30 border-b border-ink-700 bg-ink-950/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setNavOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-sharp border border-neon-cyan/50 bg-neon-cyan/10 shadow-glow">
            <Radar size={16} className="text-neon-cyan" />
          </div>
          <div className="leading-tight">
            <div className="label-stencil text-neon-cyan/80">Centro de control</div>
            <div className="text-sm font-semibold tracking-tight text-concrete-50">{APP_SHORT}</div>
          </div>
        </Link>

        <nav className="ml-4 hidden items-center gap-0.5 lg:flex">
          {NAV.map((n) => (
            <NavItem key={n.to} {...n} />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to="/comparar"
            className={cn(
              "inline-flex h-8 items-center gap-1.5 rounded-sharp border px-2.5 text-xs font-medium transition-colors",
              compareCount > 0
                ? "border-neon-magenta/60 bg-neon-magenta/10 text-neon-magenta"
                : "border-ink-600 text-concrete-400 hover:text-concrete-200",
            )}
            title="Cesta de comparación"
          >
            <Scale size={14} />
            <span className="tabular">{compareCount}/4</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-sharp border border-ink-600 text-concrete-300 lg:hidden"
            onClick={toggleNav}
            aria-label="Menú"
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {navOpen && (
        <nav className="border-t border-ink-700 bg-ink-900 px-2 py-2 lg:hidden animate-fade-in">
          {NAV.map((n) => (
            <NavItem key={n.to} {...n} onClick={() => setNavOpen(false)} />
          ))}
        </nav>
      )}
    </header>
  );
}
