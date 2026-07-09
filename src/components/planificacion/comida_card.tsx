import { Card, CardContent } from "@/components/ui/card";

interface TarjetaComidaProps {
  tipoComida: string;
  nombreReceta: string;
  porciones: number;
}

export default function TarjetaComida({
  tipoComida,
  nombreReceta,
  porciones,
}: TarjetaComidaProps) {
  return (
    <Card size="sm" className="border-border/70 shadow-sm">
      <CardContent className="space-y-1.5 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {tipoComida}
        </p>

        <h3 className="text-base font-semibold leading-tight">
          {nombreReceta}
        </h3>

        <p className="text-sm text-muted-foreground">
          {porciones} porciones
        </p>
      </CardContent>
    </Card>
  );
}