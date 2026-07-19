import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

interface RecetaCardProps {
  id: number;
  nombre: string;
  imagenUrl?: string;
  categoria: string;
  tiempoPreparacion: number;
  dificultad: string;
}

export default function RecetaCard({
  id,
  nombre,
  imagenUrl,
  categoria,
  tiempoPreparacion,
  dificultad,
}: RecetaCardProps) {
  return (
    <Link to={`/recetas/${id}`}>
      <Card className="overflow-hidden rounded-3xl border-border/70 shadow-sm">
        <div className="aspect-[16/10] bg-muted">
          {imagenUrl ? (
            <img src={imagenUrl} alt={nombre} className="h-full w-full object-cover" />
          ) : null}
        </div>

        <CardContent className="space-y-2 p-4">
          <h3 className="text-base font-semibold leading-tight">
            {nombre}
          </h3>

          <p className="text-sm text-muted-foreground">
            {categoria}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{tiempoPreparacion} min</span>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
              {dificultad}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}