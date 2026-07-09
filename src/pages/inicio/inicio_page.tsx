import RecetaCard from "@/components/recetas/receta_card";
import ComidaCard from "@/components/planificacion/comida_card";
import InformacionNutricional from "@/components/planificacion/informacion_nutricional";
import { Card, CardContent } from "@/components/ui/card";

import { recetasMock } from "@/mocks/recetas.mock";

export default function InicioPage() {
  return (
    <div className="space-y-4 pb-2">
      <section className="space-y-1">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          NutriApp
        </p>

        <h1 className="text-[2rem] font-semibold tracking-tight text-balance sm:text-[2.35rem]">
          Inicio
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Resumen rápido de tu plan, nutrición y recetas sugeridas.
        </p>
      </section>

      <Card>
        <CardContent className="space-y-3 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Plan de hoy
              </p>
              <h2 className="text-lg font-semibold">
                Próxima comida
              </h2>
            </div>

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Activo
            </span>
          </div>

          <ComidaCard
            tipoComida="Almuerzo"
            nombreReceta="Pollo con arroz"
            porciones={2}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-3 p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Resumen nutricional
            </p>
            <h2 className="text-lg font-semibold">
              Hoy vas bien
            </h2>
          </div>

          <InformacionNutricional
            calorias={2200}
            proteinas={140}
            carbohidratos={200}
            grasas={70}
          />
        </CardContent>
      </Card>

      <section className="space-y-3">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Recetas sugeridas
          </p>
          <h2 className="text-xl font-semibold tracking-tight">
            Para cocinar hoy
          </h2>
        </div>

        <div className="space-y-3">
          {recetasMock.map((receta) => (
            <RecetaCard
              key={receta.id}
              {...receta}
            />
          ))}
        </div>
      </section>
    </div>
  );
}