import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/navigation/bottom_navigation";

export default function MainLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>

      <BottomNavigation />
    </>
  );
}