import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "@/layouts/auth_layout";
import MainLayout from "@/layouts/main_layout";

import LoginPage from "@/pages/login/login_page";
import RegistroPage from "@/pages/registro/registro_page";
import InicioPage from "@/pages/inicio/inicio_page";

import ListadoRecetasPage from "@/pages/recetas/listado_recetas_page";
import PlanSemanalPage from "@/pages/planificacion/plan_semanal_page";
import ListaComprasPage from "@/pages/compras/lista_compras_page";
import PerfilPage from "@/pages/perfil/perfil_page";
import PlanDiarioPage from "@/pages/planificacion/plan_diario_page";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegistroPage />} />
        </Route>

        {/* Privadas */}
        <Route element={<MainLayout />}>    
          <Route path="/inicio" element={<InicioPage />} />
          <Route path="/recetas" element={<ListadoRecetasPage />} />
          <Route path="/plan" element={<PlanSemanalPage />} />
          <Route path="/compras" element={<ListaComprasPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/plan_diario" element={<PlanDiarioPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}