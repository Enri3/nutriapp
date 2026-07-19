import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
        <Outlet />
      </div>
    </div>
  );
}