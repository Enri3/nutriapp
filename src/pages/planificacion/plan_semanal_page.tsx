import { Link } from "react-router-dom";

import DiaCard from "@/components/planificacion/dia_card";
import EncabezadoPagina from "@/components/headers/page_header";
import { semana_mock } from "@/mocks/planificacion.mock";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

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

      <section className="space-y-3">
        {semana_mock.map((dia) => (
        <Card key={dia.dia} className="border-border/70 shadow-[0_10px_30px_rgba(15,23,42,0.06)] mt-3 p-4 py-0">
          <Accordion      >
            <AccordionItem value={dia.dia}>
              <AccordionTrigger className="flex items-center py-4 justify-between gap-3">
                <h3 className="text-base font-semibold">
                  {dia.dia}
                </h3>

                <span className="rounded-full bg-primary/10 px-3 text-xs font-medium text-primary">
                  {dia.cantidad_comidas}
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-4 py-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Comidas
                </p>
                <Link key={dia.dia} to="/plan_diario" state={{ dia, comidaDia: dia.comidas }} className="block">
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {dia.comidas.slice(0, 4).map((comida) => (
                    <li key={comida.tipo_comida} className="flex items-center justify-between gap-3 mb-1.5">
                      <span className="truncate">{comida.tipo_comida}</span>
                      <span className="truncate text-right text-foreground">{comida.nombre_receta ? comida.nombre_receta : "Sin receta"}</span>
                    </li>
                  ))}
                </ul>
              </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
  ))}
</section>

    </div>
  );
}