interface DiaCardProps {
  dia: string;
  cantidad_comidas: number;
  comidas: Array<{
    tipo_comida: string;
    nombre_receta: string;
    porciones: number;
  }>;
}

export default function DiaCard({
  dia,
  cantidad_comidas,
  comidas,
}: DiaCardProps) {
  return (
    <div className="rounded-3xl border border-border/70 bg-card p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">
          {dia}
        </h3>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {cantidad_comidas}
        </span>
      </div>

      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {comidas.slice(0, 4).map((comida) => (
          <li key={comida.tipo_comida} className="flex items-center justify-between gap-3">
            <span className="truncate">{comida.tipo_comida}</span>
            <span className="truncate text-right text-foreground">{comida.nombre_receta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}