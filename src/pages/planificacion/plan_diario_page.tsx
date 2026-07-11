import { useLocation } from "react-router-dom";

import ComidaCard from "@/components/planificacion/comida_card";
import InformacionNutricional from "@/components/planificacion/informacion_nutricional";
import EncabezadoPagina from "@/components/headers/page_header";

import { comidas_dia_mock } from "@/mocks/plan_diario.mock";

interface EstadoPlanDiario {
  dia?: {
    dia: string;
    cantidad_comidas: number;
    comidas: Array<{
      tipo_comida: string;
      nombre_receta: string;
      porciones: number;
      ingredientes: Array<{
        nombre: string;
        cantidad: number;
        unidad: string;
      }>;
    }>;
  };
  comidaDia?: Array<{
    receta_id: number;
    tipo_comida: string;
    nombre_receta: string;
    porciones: number;
    ingredientes: Array<{
      nombre: string;
      cantidad: number;
      unidad: string;
    }>;
  }>;
}

export default function PlanDiarioPage() {
  const ubicacion = useLocation();
  const estado = ubicacion.state as EstadoPlanDiario | null;
  const comidasDelDia = estado?.comidaDia ?? comidas_dia_mock;
  const nombreDelDia = estado?.dia?.dia ?? "Plan diario";

  return (
    <div className="space-y-4 pb-2">
      <EncabezadoPagina
        subtitulo="Planificación"
        titulo={nombreDelDia}
        descripcion="Detalle del día con las comidas programadas y el resumen nutricional."
      />

      <section className="space-y-3">
        {comidasDelDia.map((comida) => (
          <ComidaCard
            key={comida.tipo_comida}
            receta_id={comida.receta_id}
            tipoComida={comida.tipo_comida}
            nombreReceta={comida.nombre_receta}
            porciones={comida.porciones}
            ingredientes={comida.ingredientes}
          />
        ))}
      </section>

      <InformacionNutricional
        calorias={2200}
        proteinas={140}
        carbohidratos={200}
        grasas={70}
      />
    </div>
  );
}