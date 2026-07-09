import DiaCard from "@/components/planificacion/dia_card";
import EncabezadoPagina from "@/components/headers/page_header";
import { semana_mock } from "@/mocks/planificacion.mock";

export default function PlanSemanalPage() {
  return (
    <div className="space-y-4 pb-2">
      <EncabezadoPagina
        subtitulo="Planificación"
        titulo="Plan semanal"
        descripcion="Una vista rápida de cómo se distribuyen tus comidas durante la semana."
        contenidoExtra={
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            7 días
          </span>
        }
      />

      <section className="grid gap-3">
        {semana_mock.map((dia) => (
          <DiaCard
            key={dia.dia}
            dia={dia.dia}
            cantidad_comidas={dia.cantidad_comidas}
          />
        ))}
      </section>
    </div>
  );
}