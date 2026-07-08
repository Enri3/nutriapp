import RecipeCard from "@/components/recetas/tarjeta_receta";
import MealCard from "@/components/planificacion/tarjeta_comida";
import NutritionSummary from "@/components/planificacion/resumen_nutricional";

import { recetasMock } from "@/mocks/recetas.mock";

export default function InicioPage() {
  return (
    <div className="space-y-6 p-4">

      <h1 className="text-2xl font-bold">
        Inicio
      </h1>

      <section>
        <h2 className="mb-2 font-semibold">
          Plan de hoy
        </h2>

        <MealCard
          tipoComida="Almuerzo"
          nombreReceta="Pollo con arroz"
          porciones={2}
        />
      </section>

      <section>
        <h2 className="mb-2 font-semibold">
          Resumen nutricional
        </h2>

        <NutritionSummary
          calorias={2200}
          proteinas={140}
          carbohidratos={200}
          grasas={70}
        />
      </section>

      <section>
        <h2 className="mb-2 font-semibold">
          Recetas sugeridas
        </h2>

        <div className="space-y-4">
          {recetasMock.map((receta) => (
            <RecipeCard
              key={receta.id}
              {...receta}
            />
          ))}
        </div>
      </section>

    </div>
  );
}