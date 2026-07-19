import { Link } from "react-router-dom";

interface AlternativaReceta {
  id: number;
  nombre: string;
}

interface AlternativasRecetaProps {
  recetas: AlternativaReceta[];
}

export default function AlternativasReceta({
  recetas,
}: AlternativasRecetaProps) {
  return (
    <div className="space-y-2">
      {recetas.map((receta) => (
        <Link
          key={receta.id}
          to={`/recetas/${receta.id}`}
          className="flex items-center justify-between rounded-lg border border-border/60 px-4 py-3 transition-colors hover:bg-muted/50"
        >
          <span>{receta.nombre}</span>

          <span className="text-muted-foreground">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}