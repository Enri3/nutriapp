import RecipeCard from "@/components/recetas/recipe_card";

export default function InicioPage() {
  return (
    <div className="p-4">
      <RecipeCard
        id={1}
        nombre="Milanesas al horno"
        categoria="Almuerzo"
        tiempoPreparacion={45}
        dificultad="Fácil"
      />
    </div>
  );
}