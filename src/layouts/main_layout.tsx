import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/navigation/bottom_navigation";

export default function MainLayout() {
  return (
    <div className="min-h-dvh bg-background pb-[calc(7.5rem+env(safe-area-inset-bottom))] md:pb-24">
      <main className="mx-auto flex w-full max-w-md flex-col gap-4 px-4 pt-4">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}