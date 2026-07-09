import { Card, CardContent } from "@/components/ui/card";

interface InformacionNutricionalProps {
  calorias: number;
  proteinas: number;
  carbohidratos: number;
  grasas: number;
}

export default function InformacionNutricional({
  calorias,
  proteinas,
  carbohidratos,
  grasas,
}: InformacionNutricionalProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card size="sm" className="border-border/70 shadow-none">
        <CardContent className="p-4 text-sm font-medium">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Calorías
          </p>
          <p className="mt-1 text-base text-foreground">
            🔥 {calorias} kcal
          </p>
        </CardContent>
      </Card>

      <Card size="sm" className="border-border/70 shadow-none">
        <CardContent className="p-4 text-sm font-medium">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Proteína
          </p>
          <p className="mt-1 text-base text-foreground">
            🥩 {proteinas} g
          </p>
        </CardContent>
      </Card>

      <Card size="sm" className="border-border/70 shadow-none">
        <CardContent className="p-4 text-sm font-medium">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Carbohidratos
          </p>
          <p className="mt-1 text-base text-foreground">
            🍞 {carbohidratos} g
          </p>
        </CardContent>
      </Card>

      <Card size="sm" className="border-border/70 shadow-none">
        <CardContent className="p-4 text-sm font-medium">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Grasas
          </p>
          <p className="mt-1 text-base text-foreground">
            🥑 {grasas} g
          </p>
        </CardContent>
      </Card>
    </div>
  );
}