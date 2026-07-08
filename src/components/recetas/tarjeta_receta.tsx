import { Card, CardContent } from "@/components/ui/card";

interface TarjetaRecetaProps {
  id: number;
  nombre: string;
  imagenUrl?: string;
  categoria: string;
  tiempoPreparacion: number;
  dificultad: string;
}

export default function TarjetaReceta({
  nombre,
  imagenUrl,
  categoria,
  tiempoPreparacion,
  dificultad,
}: TarjetaRecetaProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-gray-200">
        {imagenUrl ? (
          <img src={imagenUrl} alt={nombre} className="w-full h-full object-cover" />
        ) : null}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{nombre}</h3>

        <p className="text-sm text-muted-foreground">
          {categoria}
        </p>

        <div className="mt-2 flex justify-between text-sm">
          <span>{tiempoPreparacion} min</span>
          <span>{dificultad}</span>
        </div>
      </CardContent>
    </Card>
  );
}