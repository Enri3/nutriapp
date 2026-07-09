import { BookOpen, CalendarDays, Home, ShoppingCart, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/inicio", label: "Inicio", icon: Home },
  { to: "/recetas", label: "Recetas", icon: BookOpen },
  { to: "/plan", label: "Plan", icon: CalendarDays },
  { to: "/compras", label: "Compras", icon: ShoppingCart },
  { to: "/perfil", label: "Perfil", icon: UserRound },
];

export default function BottomNavigation() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-50 px-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] sm:px-3"
    >
      <div className="mx-auto flex w-full max-w-xl items-stretch gap-1 rounded-t-3xl border border-border/70 border-b-0 bg-background/95 p-2 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/80">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-medium transition-all duration-200 sm:text-xs",
                isActive
                  ? "bg-primary/10 text-primary shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              ].join(" ")
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={[
                    "h-1 w-8 rounded-full transition-opacity duration-200",
                    isActive ? "bg-primary opacity-100" : "bg-transparent opacity-0",
                  ].join(" ")}
                />
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                <span className="truncate leading-none">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}