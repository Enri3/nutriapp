import ComidaCard from "@/components/planificacion/comida_card";
import InformacionNutricional from "@/components/planificacion/informacion_nutricional";
import EncabezadoPagina from "@/components/headers/page_header";

import { comidas_dia_mock } from "@/mocks/plan_diario.mock";

export default function PlanDiarioPage() {
  return (
    <div className="space-y-4 pb-2">
      <EncabezadoPagina
        subtitulo="Planificación"
        titulo="Plan diario"
        descripcion="Detalle del día con las comidas programadas y el resumen nutricional."
      />

      <section className="space-y-3">
        {comidas_dia_mock.map((comida) => (
          <ComidaCard
            key={comida.tipo_comida}
            tipoComida={comida.tipo_comida}
            nombreReceta={comida.nombre_receta}
            porciones={comida.porciones}
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