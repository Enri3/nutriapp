import { CheckCircle2, Circle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ItemCompraProps {
  nombre: string;
  cantidad: number;
  unidad: string;
  comprado: boolean;
}

export default function ItemCompra({
  nombre,
  cantidad,
  unidad,
  comprado,
}: ItemCompraProps) {
  return (
    <Card
      size="sm"
      className={comprado ? "border-border/70 bg-muted/40 shadow-none" : "border-border/70 shadow-sm"}
    >
      <CardContent className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className={comprado ? "font-medium line-through text-muted-foreground" : "font-medium text-foreground"}>
            {nombre}
          </p>

          <p className="text-sm text-muted-foreground">
            {cantidad} {unidad}
          </p>
        </div>

        {comprado ? (
          <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
        ) : (
          <Circle className="h-5 w-5 shrink-0 text-muted-foreground" />
        )}
      </CardContent>
    </Card>
  );
}