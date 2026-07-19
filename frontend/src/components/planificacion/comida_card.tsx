import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

interface TarjetaComidaProps {
  receta_id: number;
  tipoComida: string;
  nombreReceta: string;
  porciones: number;
  ingredientes: Array<{
    nombre: string;
    cantidad: number;
    unidad: string;
  }>;
}

export default function TarjetaComida({
  receta_id,
  tipoComida,
  nombreReceta,
  porciones,
  ingredientes,
}: TarjetaComidaProps) {
  return (
    <Link to={`/recetas/${receta_id}`}>
      <Card size="sm" className="mt-3 p-4 border-border/70 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <CardContent className="space-y-2 p-0">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {tipoComida}
          </p>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold leading-tight text-balance">
              {nombreReceta}
            </h3>
            <p className="text-sm text-muted-foreground">
              {porciones} {porciones === 1 ? "porción" : "porciones"}
            </p>
          </div>

          <div className="space-y-2 rounded-2xl bg-muted/60 p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Ingredientes
            </p>

            <ul className="space-y-1.5 text-sm">
              {ingredientes.slice(0, 4).map((ingrediente) => (
                <li
                  key={ingrediente.nombre}
                  className="flex items-center justify-between gap-3 text-foreground"
                >
                  <span className="truncate">{ingrediente.nombre}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {ingrediente.cantidad} {ingrediente.unidad}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}